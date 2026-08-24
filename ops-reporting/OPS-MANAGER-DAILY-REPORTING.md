# Operations Manager — Daily Reporting System

**Owner:** Luke Hawkins
**Reports from:** Operations Manager
**Purpose:** Full visibility on what is being worked on, how long it takes, what was actually achieved, and why anything slipped — rolled up monthly in the tracker spreadsheet.

There are three reports every working day, plus one before any break longer than 15 minutes. Each report is short — 5 minutes maximum to write. The value is in the discipline, not the length.

**Companion file:** `Ops_Manager_Daily_Tracker.xlsx` (same folder). The Start-of-Day and End-of-Day reports feed directly into it — same fields, same wording — so filling in the spreadsheet is a copy job, not extra work.

---

## The three rules behind every report

1. **Every task has a number on it.** No task is listed without an estimated time (in hours, to the nearest 0.5). At end of day, every task gets an actual time. Estimating badly is fine — that's how estimates improve. Not estimating is not fine.
2. **"Achieved" means a finished, checkable thing.** "Worked on onboarding" is activity, not achievement. "Onboarding email sequence — all 5 emails drafted and loaded into the CRM, link: …" is an achievement. If Luke can't verify it in under a minute, it isn't written specifically enough.
3. **Every slip gets a why and a new when.** If something planned wasn't finished, the report states the reason (one honest sentence) and the new committed completion date. Nothing is allowed to just disappear off the list.

---

## 1. Start-of-Day Report (SOD)

**When:** Within 15 minutes of starting work.
**Where:** Message to Luke (Slack/WhatsApp/email — whichever channel you've agreed).

```
START OF DAY — [Date]
Start time: [e.g. 8:30am]
Planned finish: [e.g. 5:00pm]  |  Planned hours today: [e.g. 8.0]

TODAY'S PLAN (in priority order, est. time each):
1. [Task] — will be DONE when: [checkable outcome] — Est: [X.X hrs] — Due: [today / date]
2. [Task] — will be DONE when: [checkable outcome] — Est: [X.X hrs] — Due: [...]
3. [...]

Total estimated: [sum] hrs  (should roughly match planned hours — flag if it doesn't)

CARRIED OVER FROM YESTERDAY:
- [Task] — why it slipped: [reason] — new completion date: [date]
- (or "Nothing carried over")

NEED FROM LUKE TODAY:
- [Decision / approval / info needed, and by what time] (or "Nothing")
```

**Why each field exists:** the estimate total vs planned hours catches over- or under-loaded days before they happen; "will be DONE when" forces the definition of achieved up front, which is what fixes the "not enough detail on what is achieved" problem; the carry-over section makes slippage visible instead of silent.

---

## 2. Break Handover (any break over 15 minutes, incl. lunch)

**When:** Sent *before* stepping away, not after.

```
ON BREAK — [time leaving] back at [expected return time]

STATE OF PLAY:
- Working on: [task] — progress: [where it's up to] — remaining: [est. hrs left]
- Anything mid-flight someone might need: [e.g. "invoice run half done — don't send batch 2"] (or "Nothing")
- Anything urgent waiting on me: [what, and whether it can wait until I'm back]
```

**Why:** short absences are where balls get dropped. This takes 60 seconds and means Luke (or anyone covering) knows exactly what's live, what's half-done, and when the manager is back.

---

## 3. End-of-Day Report (EOD)

**When:** Last thing before finishing, every working day.

```
END OF DAY — [Date]
Started: [time]  Finished: [time]  Breaks: [total mins]
HOURS WORKED TODAY: [X.X]

ACHIEVED TODAY (finished, checkable items only):
1. [Task] — DONE — [link/evidence] — Est: [X.X] vs Actual: [X.X] hrs
2. [...]

NOT FINISHED (from this morning's plan):
- [Task] — got to: [specific progress] — why: [one honest sentence]
  — will be done: [new date] — remaining est: [X.X hrs]
- (or "Everything planned was completed")

CAME UP UNPLANNED (things that ate time but weren't on the plan):
- [What it was] — [X.X hrs] — [was it worth doing? should it have waited?]

TOMORROW'S TOP 3:
1. [...]  2. [...]  3. [...]

SPREADSHEET: updated ✅  (hours row + task rows for today entered in the tracker)
```

**Why:** Est vs Actual per task is the time-accountability loop — within 2–3 weeks the estimates get sharp and you can both see where time really goes. The "came up unplanned" section usually explains most slippage, and is where Luke decides what the ops manager should stop being interrupted by. The final line makes updating the tracker part of the day's definition of done.

---

## 4. The tracker spreadsheet

`Ops_Manager_Daily_Tracker.xlsx` — updated at end of every day (2–3 minutes):

- **DailyHours tab** — one row per day: start, finish, break minutes → hours worked calculates itself.
- **TaskLog tab** — one row per task per day: what "done" looks like, estimated vs actual hours, status, evidence link, and the reason + new date for anything delayed.
- **MonthlySummary tab** — fills itself in. Nothing to type there. It shows, per month and cumulatively: total hours worked, days worked, average hours/day, tasks completed, completion rate, and estimated vs actual hours (the accuracy of the estimates).

**Weekly (Friday EOD) and monthly:** Luke reviews the MonthlySummary tab against the EOD reports. The questions the numbers answer: Are hours where we agreed? Is the completion rate above ~80%? Are estimates converging on actuals? What keeps slipping, and is the *why* a resourcing problem, a prioritisation problem, or a performance problem?

---

## Escalation rules (so "why" never arrives late)

The ops manager doesn't wait for the EOD report to raise these — they get flagged the moment they're known:

- A task will miss its committed date → flag immediately with reason + new date.
- A day is going to run under 6 or over 9 hours → flag by midday.
- Blocked for more than 30 minutes on something only Luke can unblock → flag immediately.

Anything flagged early is a planning conversation. The same thing surfacing for the first time in an EOD report is an accountability conversation. That distinction is the whole system.
