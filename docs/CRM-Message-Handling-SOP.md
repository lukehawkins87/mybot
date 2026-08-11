# SOP: CRM Message Handling, Delegation & Follow-Up (Go High Level)

**Owner:** Luke Hawkins
**Applies to:** Everyone with access to the GHL CRM (setters, support, billing, admin/VAs, Luke)
**Last updated:** 11 Aug 2026
**Goal:** No message and no missed call is ever dropped. Every conversation is either **handled** or **clearly handed to the right person** — never silently marked read and forgotten.

---

> ### ⚠️ Assumptions to confirm
> I built this SOP with sensible defaults. Please confirm or correct these and I'll update it:
> 1. **Departments/inboxes** = Billing (`billing@lukehawkins.com`), Support/Fulfillment (`support@fulfillment.lukehawkins.com`), Sales/Setters (Setter Team), and Luke personally.
> 2. **Delegation method** = mark the message **Unread**, then hand it off in the **#customer-support** Slack channel by @tagging the person who must reply (tag **Luke + Dan** if unsure), then mark it **Read**. Setting the CRM **Owner**/tag is a recommended backup.
> 3. **Missed-call owner** = the Setter team, checking the Call Report multiple times per day.
> 4. **"Dan"** = Dan Diaz (creator of the #customer-support channel). Confirm this is who you meant.
>
> Anything in *[square brackets]* is a name/detail you should fill in.

---

## 1. The One Rule That Prevents Missed Messages

**Never leave a message in the "read" state unless it has been handled — either *you* replied, or you handed it off in Slack to the person who will.**

The incident we are preventing: someone opened a message meant for another department, it flipped to **read**, it dropped out of the **Unread** view, and the department that was supposed to reply never saw it.

From now on:

- **Opening a message does not mean you own it.** If a message you open is **not for you**, your **first action is to mark it back to Unread** so it can't get lost while you deal with it.
- **Then hand it off in Slack.** Post the message in the **#customer-support** Slack channel and **@tag the person who needs to reply**. If you don't know who that is, **@tag Luke and @Dan and ask "who is this message for?"** (see §4C).
- **Only once it's handed off in Slack may you mark it Read.** The Slack post — not the CRM inbox — is now what guarantees the right person picks it up.
- **Read = Handled.** A message is only allowed to sit "read" after a reply was sent **or** it's been posted to Slack with the right person tagged.
- **When in doubt, mark it Unread.** An extra unread message is a minor annoyance. A missed customer is lost revenue and a bad reputation.

---

## 2. Golden Rules (memorise these)

1. **Don't click into messages you don't intend to action.** Browsing the inbox out of curiosity is how messages get accidentally opened.
2. **If you open something that isn't yours → mark it Unread immediately** (see §4), *then* hand it off in Slack.
3. **Never mark Read until it's handled** — either you replied, or you posted it to **#customer-support** and tagged the right person.
4. **Delegate visibly in Slack, not silently.** Handing a message off means posting it in **#customer-support** and @tagging the person who must reply — not just "leaving it there hoping they see it." If you don't know who → tag **Luke and Dan** and ask.
5. **Respect DND.** If a contact has enabled DND / "delete me from your list," stop marketing to them and flag it (see §7).
6. **Check missed calls every day** (see §6). A missed call is a missed lead.
7. **End of day: your inbox view is clean** — everything is replied to, reassigned, or snoozed with an owner.

---

## 3. Who Handles What (Routing Map)

When a new message lands in the **Team inbox**, decide who it belongs to:

| If the message is about… | Department | Route to | Example |
|---|---|---|---|
| Invoices, payments, refunds, chargebacks, card declines | **Billing** | `billing@lukehawkins.com` — *[owner name]* | "Why was I charged $7?", disputed payment |
| Program access, delivery, tech/login issues, "how do I…", unsubscribe requests | **Support / Fulfillment** | `support@fulfillment.lukehawkins.com` — *[owner name]* | "I can't access the training", "please delete me" |
| New leads, booking a call, appointment requests, sales questions | **Sales / Setters** | Setter Team — *[owner name]* | "Can I book a call?", replies to ad DMs |
| Personal / VIP / anything only Luke should answer | **Luke** | Luke Hawkins | Partner/JV outreach, sensitive complaints |
| Not sure | **Ask before guessing** | Post an Internal Comment @*[team lead]* | Ambiguous or mixed-topic messages |

> 📷 **Screenshot 1 — Team inbox (Conversations → Conversations).**
> *Insert the Team inbox screenshot here.* Shows the **Unread / All / Recent / Starred** filter tabs at the top of the inbox and the list of conversations (e.g. *Lh Billing*, *Sue Minto*). The **blue number badge** (e.g. `12`) on a conversation = number of unread messages in that thread. This is the view everyone works from.

---

## 4. How to Read, Mark Unread, and Delegate — Step by Step

### 4A. Working your inbox
1. Go to **Conversations → Conversations**.
2. Use the **Unread** tab to see what still needs attention. (Filter icons at the top-right let you sort/filter — see Screenshot 1.)
3. Open the top unread conversation.

### 4B. Decide in the first 5 seconds: *Is this mine?*

**If YES (it's my department and I will action it now):**
1. Read it fully.
2. **Reply** using the message composer at the bottom (choose Email / SMS as appropriate; confirm the correct **From** address and **From Name** — see Screenshot 2).
3. Once your reply is sent, it's fine for the thread to be **read**. Done.
4. If it needs follow-up later, set an owner + a reminder task so it isn't forgotten.

**If NO (it belongs to another department, or you're not ready to reply):**
1. **Do not reply.**
2. **Mark it back to Unread first** — this is your safety net so the message can't get lost:
   - Open the conversation's **options menu** (the three-dot `⋮` / envelope icon in the top-right of the conversation header) and choose **Mark as Unread**.
   - Confirm the conversation shows as **bold / unread** again in the list and reappears under the **Unread** tab.
3. **Hand it off in Slack** (§4C) — post it in **#customer-support** and @tag whoever needs to reply (or tag Luke + Dan if you're not sure).
4. **Only then mark it Read.** Once it's posted in Slack with the right person tagged, it's safe to mark the CRM conversation Read — the Slack thread now owns the follow-up. (Optional but recommended: also set the **Owner** in Contact Details so accountability shows inside the CRM too.)

> 📷 **Screenshot 2 — Reply composer & From address.**
> *Insert the Sue Minto reply-composer screenshot here.* Shows the **Email** composer with **From: `info@lukehawkins.com`**, **From Name: Luke Hawkins**, the **To** field, and **Subject** line. Always confirm the correct From identity before sending, and note the **"DnD enabled by customer"** banner if present (see §7).

### 4C. How to hand it off in Slack (the required step)

When a message isn't yours, the hand-off happens in the **#customer-support** Slack channel so the right person is actively notified — not left to notice it on their own.

1. **Post the message in #customer-support.** Include enough for the person to act without opening the CRM cold: the **customer's name**, the **channel** (email/SMS/call), a **one-line summary or paste** of what they said, and a **link to the CRM conversation** if you can grab it.
2. **@tag the person who needs to reply** based on the routing map in §3 (e.g. billing dispute → @*[billing owner]*; access/tech issue → @*[support owner]*; new lead/booking → @*[setter]*).
3. **If you don't know who it's for → @tag Luke and @Dan and ask "who is this message for?"** Do not guess and do not leave it unrouted. Luke/Dan will point it to the right person in-thread.
4. **(Recommended) Also set the Owner + tag inside the CRM.** In **Contact Details**, set **Owner** to the responsible person and add the department **Tag** (`billing`, `support`, `sales`). This keeps accountability visible inside GHL as a backup to Slack.
5. **Order of operations:** mark **Unread** first (§4B step 2) → post + tag in Slack → **then** mark **Read**. Never mark Read until the Slack hand-off is done.

> 📷 **Screenshot 3 — Contact Details panel (Owner, Followers, Tags).**
> *Insert the Contact Details screenshot here.* Shows the **Owner** and **Followers** fields at the top and the **Tags** section (e.g. `aug17-fb`, `260817 challenge`, `webinar`). This is where you assign accountability and tag the department.

### 4D. Each department: work only your queue
- Filter the inbox by your **department tag** and/or by conversations where **you are the Owner**.
- Clear your **Unread** items daily.
- When you reply, the thread can go read — that's your signal it's handled.

---

## 5. Status Discipline — quick reference

| State | What it means | Who may set it |
|---|---|---|
| **Unread (bold)** | Still needs a reply — OR you've just opened someone else's message and haven't handed it off yet | Anyone who opened it but isn't actioning it |
| **Read** | Handled: replied to, **or** posted to #customer-support with the right person tagged | Only after a reply **or** a Slack hand-off |
| **Owner set** | This named person is accountable | Whoever hands it off |
| **Tagged (dept)** | Routed to a department queue | Whoever triages it |
| **Starred** | Flagged as important / needs Luke's eyes | Anyone, but tell the owner |
| **DND** | Contact opted out — do not market | Set automatically or by request (§7) |

**Rule of thumb:** *Read* is a promise that the message is being dealt with. You may only make that promise once you've either replied yourself or tagged the right person in **#customer-support**.

---

## 6. Missed Calls — How We Know, and Who Handles Them

**"How do we know if we have a missed call to the company?"**

Missed calls are tracked in **Reporting → Call report**.

1. Go to **Reporting → Call report**.
2. Set the **date range** (top-left) to today (or the period you're checking).
3. Use the **All calls / Incoming / Outgoing** toggle — select **Incoming** to focus on inbound.
4. Scan the **Call status** column. A missed call shows:
   - **Call status = `Missed`**
   - **Duration = `0s`**
   - **Recording = `No recording`**
5. For each missed call, use the **Contact name** and **number** to call the person back (or route to the right person), then log the outcome.

> 📷 **Screenshot 4 — Reporting → Call report.**
> *Insert the Call report screenshot here.* Shows the calls table with columns **Date & time, Contact name, Number name, Source type, Call status, Disposition, Keyword, Duration, Recording**. In the example, *Gavin Marks (+61 435 146 259)* has **Call status = Missed, Duration = 0s, No recording** — that is exactly what a missed call looks like and what must be called back. The bar chart at the top shows call volume for the selected range; use **Filters / All numbers** to narrow by line (e.g. *Setter Team 2*).

**Ownership & cadence (confirm):**
- **Who:** *[Setter team]* owns missed-call callbacks.
- **How often:** Check the Call report **at least [3×] per day** — morning, midday, end of day — and clear every `Missed` entry.
- **Target:** Call back inbound missed calls within **[15–30 minutes]** during business hours.
- Log each callback (Disposition, e.g. *Requested Appointment*) so we can see it was actioned.

---

## 7. DND / Unsubscribe / "Delete Me" Requests

If a contact asks to be removed, stops replying angrily, or a **"DnD enabled by customer"** banner appears (see Screenshot 2):

1. **Stop all marketing** to that contact immediately.
2. Confirm **DND** is enabled on the contact (Contact Details → **DND** tab).
3. Do **not** keep sending the automated sequence/landing pages.
4. If they're upset (e.g. disputing a charge), **route to Billing/Support** and have a human reply — don't leave it to automation.
5. Mark the conversation handled only once the opt-out is confirmed and any reply is sent.

---

## 8. Daily Rhythm (checklist)

**Start of day**
- [ ] Open **Conversations → Unread**. Triage every item: reply, or delegate + mark Unread.
- [ ] Check **Reporting → Call report** for overnight **Missed** calls and return them.

**Throughout the day**
- [ ] Only open messages you intend to action.
- [ ] Anything not yours → delegate (Owner + @mention + tag) and mark **Unread**.
- [ ] Re-check missed calls midday.

**End of day**
- [ ] **Unread** tab is clear for your department (everything replied, reassigned, or snoozed with an owner).
- [ ] No message you opened is sitting in "read" without a reply.
- [ ] Final **Call report** sweep — no open **Missed** calls.

---

## 9. Escalation
- **Unsure who owns a message?** → mark it Unread, post it in **#customer-support**, **@tag Luke and Dan** and ask *"who is this message for?"* — don't guess.
- **Angry customer / refund / legal / press?** → post in **#customer-support**, @tag Luke, and Star the conversation in the CRM.
- **A message was missed / a call wasn't returned?** → flag it in **#customer-support** so we can find the gap, not to assign blame.

---

## 10. Quick "Do / Don't"

| ✅ Do | ❌ Don't |
|---|---|
| Mark someone else's message **Unread** the moment you realise it's not yours, *then* hand it off | Leave an opened message in the read state "for now" |
| Post it in **#customer-support** and **@tag the right person**, then mark Read | Mark read before it's been handed off in Slack |
| Not sure who it's for? **@tag Luke and Dan** and ask | Guess the department or leave it unrouted |
| Reply yourself, *then* let it go read | Mark read to "tidy up" the inbox |
| Check the **Call report** for **Missed** calls daily | Wait for someone to mention a missed call |
| Respect **DND** and route complaints to a human | Keep automations running on someone who opted out |

---

*Fill in the [bracketed] names/cadences and confirm the three assumptions at the top, and drop the four screenshots into their marked spots. Then this is ready to publish to the team.*
