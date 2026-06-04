#!/usr/bin/env python3
"""
Weekly Google Calendar availability reminder bot.

Posts every Sunday at 4 PM Sydney time in #01-sales-team, asking Brad, Sarah,
and Lisa to update their Google Calendar. Waits 14 hours for a response, then
reminds every 2 hours until all three reply with ✅ or "done".

Uses Slack as the sole state store — no database or file I/O required.
"""

import os
import sys
from datetime import datetime, timedelta

import pytz
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

CHANNEL_ID = "C05GWF013PS"  # #01-sales-team
TEAM_MEMBERS = {
    "Brad": "U0B5WAWFJMN",
    "Sarah": "U097Y6PM6AY",
    "Lisa": "U09R00K31GE",
}
SYDNEY_TZ = pytz.timezone("Australia/Sydney")

# Hours to wait before first reminder, then interval between subsequent reminders
INITIAL_DELAY_HOURS = 14
REMINDER_INTERVAL_HOURS = 2

# Unique marker embedded in the weekly post so we can find it later
BOT_MESSAGE_MARKER = "WEEKLY_AVAILABILITY_CHECK"


class AvailabilityBot:
    def __init__(self, token: str):
        self.client = WebClient(token=token)
        self.bot_user_id = self.client.auth_test()["user_id"]

    def run(self) -> None:
        now_utc = datetime.now(pytz.utc)
        now_sydney = now_utc.astimezone(SYDNEY_TZ)
        print(f"Running at {now_sydney.strftime('%A %Y-%m-%d %H:%M %Z')}")

        weekly_ts = self._find_weekly_message(now_sydney)

        if weekly_ts is None:
            if now_sydney.weekday() == 6 and now_sydney.hour >= 16:
                print("Sunday ≥16:00 Sydney and no message this week — posting initial message.")
                self._post_initial_message()
            else:
                print("Not Sunday 4 PM+ Sydney, or weekly message already exists. Nothing to do.")
            return

        confirmed = self._get_confirmed_members(weekly_ts)
        pending = [name for name in TEAM_MEMBERS if name not in confirmed]

        if not pending:
            print(f"All team members confirmed ({', '.join(confirmed)}). Nothing to do.")
            return

        print(f"Confirmed: {confirmed or 'none'} | Pending: {pending}")

        posted_at = datetime.fromtimestamp(float(weekly_ts), tz=pytz.utc)
        hours_since_post = (now_utc - posted_at).total_seconds() / 3600
        last_reminder_ts = self._find_last_reminder_ts(weekly_ts)

        if last_reminder_ts is None:
            if hours_since_post < INITIAL_DELAY_HOURS:
                remaining = INITIAL_DELAY_HOURS - hours_since_post
                print(f"{hours_since_post:.1f}h since initial post. "
                      f"First reminder triggers at {INITIAL_DELAY_HOURS}h ({remaining:.1f}h to go).")
                return
        else:
            last_reminder_at = datetime.fromtimestamp(float(last_reminder_ts), tz=pytz.utc)
            hours_since_reminder = (now_utc - last_reminder_at).total_seconds() / 3600
            if hours_since_reminder < REMINDER_INTERVAL_HOURS:
                remaining = REMINDER_INTERVAL_HOURS - hours_since_reminder
                print(f"{hours_since_reminder:.1f}h since last reminder. "
                      f"Next reminder in {remaining:.1f}h.")
                return

        print(f"Sending reminder to: {pending}")
        self._post_reminder(weekly_ts, pending)
        print("Reminder sent.")

    # ------------------------------------------------------------------ #
    #  Slack interactions                                                  #
    # ------------------------------------------------------------------ #

    def _post_initial_message(self) -> None:
        tags = " ".join(f"<@{uid}>" for uid in TEAM_MEMBERS.values())
        text = (
            f"👋 Hi {tags}!\n\n"
            f"*Weekly reminder* — please update your availability in *Google Calendar* "
            f"for the coming week:\n\n"
            f"• 🚫 *Block off* any times you are *not available*\n"
            f"• ✅ *Mark as free* any times you *are available*\n\n"
            f"Once you're done, please reply in this thread with ✅ or *done*. "
            f"I'll keep nudging every 2 hours until everyone checks in 😊\n\n"
            f"<!-- {BOT_MESSAGE_MARKER} -->"
        )
        self.client.chat_postMessage(channel=CHANNEL_ID, text=text)

    def _post_reminder(self, thread_ts: str, pending: list[str]) -> None:
        tags = " ".join(f"<@{TEAM_MEMBERS[name]}>" for name in pending)
        text = (
            f"🔔 *Reminder* — {tags}\n\n"
            f"Please update your *Google Calendar* availability and reply ✅ or *done* "
            f"in this thread when complete.\n\n"
            f"<!-- {BOT_MESSAGE_MARKER}_REMINDER -->"
        )
        self.client.chat_postMessage(
            channel=CHANNEL_ID,
            text=text,
            thread_ts=thread_ts,
            reply_broadcast=True,
        )

    def _find_weekly_message(self, now_sydney: datetime) -> str | None:
        """Return the ts of the weekly post made since last Sunday 4 PM Sydney, or None."""
        dow = now_sydney.weekday()  # Monday=0 … Sunday=6
        days_back = 0 if dow == 6 else (dow + 1)
        last_sunday = now_sydney - timedelta(days=days_back)
        sunday_4pm = last_sunday.replace(hour=16, minute=0, second=0, microsecond=0)
        oldest_ts = str(sunday_4pm.astimezone(pytz.utc).timestamp())

        try:
            resp = self.client.conversations_history(
                channel=CHANNEL_ID,
                oldest=oldest_ts,
                limit=200,
            )
            for msg in resp.get("messages", []):
                if (msg.get("user") == self.bot_user_id
                        and BOT_MESSAGE_MARKER in msg.get("text", "")):
                    return msg["ts"]
        except SlackApiError as exc:
            print(f"Error fetching channel history: {exc}", file=sys.stderr)

        return None

    def _find_last_reminder_ts(self, thread_ts: str) -> str | None:
        """Return ts of the most recent bot reminder in the thread, or None."""
        try:
            resp = self.client.conversations_replies(channel=CHANNEL_ID, ts=thread_ts)
            for msg in reversed(resp.get("messages", [])[1:]):
                if (msg.get("user") == self.bot_user_id
                        and f"{BOT_MESSAGE_MARKER}_REMINDER" in msg.get("text", "")):
                    return msg["ts"]
        except SlackApiError as exc:
            print(f"Error fetching thread replies: {exc}", file=sys.stderr)
        return None

    def _get_confirmed_members(self, thread_ts: str) -> set[str]:
        """Return names of members who have reacted ✅ or replied 'done'."""
        confirmed: set[str] = set()
        uid_to_name = {v: k for k, v in TEAM_MEMBERS.items()}

        # ✅ / ✔ reactions on the original message
        try:
            resp = self.client.reactions_get(channel=CHANNEL_ID, timestamp=thread_ts)
            for reaction in resp["message"].get("reactions", []):
                if reaction["name"] in ("white_check_mark", "heavy_check_mark"):
                    for uid in reaction["users"]:
                        if uid in uid_to_name:
                            confirmed.add(uid_to_name[uid])
        except SlackApiError:
            pass

        # "done" or ✅ in a thread reply
        try:
            resp = self.client.conversations_replies(channel=CHANNEL_ID, ts=thread_ts)
            for msg in resp.get("messages", [])[1:]:
                uid = msg.get("user", "")
                if uid not in uid_to_name:
                    continue
                text = msg.get("text", "").lower()
                if "done" in text or "✅" in text or ":white_check_mark:" in text:
                    confirmed.add(uid_to_name[uid])
        except SlackApiError:
            pass

        return confirmed


def main() -> None:
    token = os.environ.get("SLACK_BOT_TOKEN")
    if not token:
        print("ERROR: SLACK_BOT_TOKEN environment variable is not set.", file=sys.stderr)
        sys.exit(1)

    AvailabilityBot(token).run()


if __name__ == "__main__":
    main()
