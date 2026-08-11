# SOP: CRM Message Handling, Delegation & Follow-Up (Go High Level)

**Owner:** Luke Hawkins
**Applies to:** Everyone with access to the GHL CRM (setters, support, billing, admin/VAs, Luke)
**Last updated:** 11 Aug 2026
**Goal:** No message and no missed call is ever dropped. Every conversation is either **handled** or **clearly handed to the right person** — never silently marked read and forgotten.

---

> ### ⚠️ Assumptions to confirm
> Confirmed with Luke (11 Aug 2026); one item still open:
> 1. **Routing owners** — Billing → **Fatima + Kristine** · Fulfilment/Support → **Sheree + Bernice** · Sales → **Lisa + Sarah** · Setters → **Fernando + Sarika** · VIP → **Luke** · Unsure → **Luke + Dan**.
> 2. **Delegation method** = mark the message **Unread**, then hand it off in the **#customer-support** Slack channel by @tagging the person(s) who must reply (tag **Luke + Dan** if unsure), then mark it **Read**. Setting the CRM **Owner**/tag is a recommended backup.
> 3. **Missed-call owner** = the setters (**Fernando + Sarika**), checking the Call Report multiple times per day.
> 4. **"Dan"** = Daniel Diaz, Operations Manager (owns the #customer-support channel).
> 5. **OPEN:** confirm **Fernando's** Slack handle (`@fer`?) — see §3.1.
>
> Anything in *[square brackets]* is a detail still to fill in.

---

## 1. The One Rule That Prevents Missed Messages

**A message stays Unread until the person responsible for it has replied. Only that person marks it Read — by replying.**

The incident we are preventing: someone opened a message meant for another department, it flipped to **read**, it dropped out of the **Unread** view, and the department that was supposed to reply never saw it.

The system that prevents it — **pull by default, push only by exception:**

- **Opening a message does not mean you own it.** If a message you open is **not for you**, your **first action is to mark it back to Unread** so it stays in the queue for the right team.

> 📷 **Screenshot — How to Mark as Unread (annotated).**
> With the conversation open, click the **envelope icon** in the top-right toolbar of the conversation header (between the ⭐ Star and the 🗑 Trash icons). This flips the conversation back to **bold / unread** so the right person still sees it. *Do this the moment you realise the message isn't yours, before anything else.*

- **Then leave it — don't tag.** For routine messages, marking it Unread is the whole job. The owning department checks its own queue on a set schedule (§2A) and will pick it up. Spending your time tagging every stray message is wasted effort the owning team's next check would have handled anyway.
- **Escalate in Slack ONLY by exception.** Post it in **#customer-support** and **@tag the owner** *only* when the message is (a) **time-sensitive** (a hot lead wanting to book now, an angry/refund/DND situation, a payment failure), (b) **setter-bound** (setters are our known blind spot — see §2A), or (c) **you genuinely can't tell whose it is** → @tag **Luke and Dan** and ask "who is this message for?"
- **Read = replied.** A conversation is only allowed to sit "read" once the responsible person has actually replied to the customer. Never mark someone else's message Read.
- **When in doubt, mark it Unread.** An extra unread message is a minor annoyance. A missed customer is lost revenue and a bad reputation.

---

## 2. Golden Rules (memorise these)

1. **Don't click into messages you don't intend to action.** Browsing the inbox out of curiosity is how messages get accidentally opened.
2. **If you open something that isn't yours → mark it Unread immediately** (see §4), and leave it in the queue for the owning department.
3. **Read = replied.** Only the responsible person marks a message Read, and only by replying. Never mark someone else's message Read.
4. **Reply within 14 hours.** Anything you're responsible for is replied to within 14 hours of it arriving (during business days).
5. **Tag in Slack only by exception.** Post in **#customer-support** and @tag the owner *only* when it's urgent, setter-bound, or you don't know whose it is (then @tag **Luke and Dan** and ask).
6. **Respect DND.** If a contact has enabled DND / "delete me from your list," stop marketing to them and flag it (see §7).
7. **Setters & confirmers check missed calls every day** (see §6). A missed call is a missed lead.
8. **End of day: your queue is clean** — everything you're responsible for is replied to, and anything that isn't yours is back to Unread for the owning team.

---

## 2A. How Often Each Team Checks Its Queue

The whole "pull" model only works if every team actually checks its own queue on a schedule. This is the part that has to be enforced. **Each person filters the inbox to their department Tag / where they are Owner (§4D) and clears it on this cadence:**

| Team | Check own queue | Notes |
|---|---|---|
| **Billing** (Fatima, Kristine) | **2× per day** | Morning + afternoon sweep |
| **Fulfilment / Support** (Sheree, Bernice) | **2× per day** | Morning + afternoon sweep |
| **Sales** (Lisa, Sarah) | **2× per day** | Morning + afternoon sweep |
| **Call-booking confirmers** (Shine, LJ) | **4× per day** | They own booking confirmations — higher frequency |
| **Shine** — live text confirming, *during a launch* | **Every hour**, working hours | Shine does the real-time text confirming while a launch is running |
| **Setters** (Fernando, Sarika) | Inbound handled via **auto-route + notify** (§2B) + missed-call checks 3×/day (§6) | Setters are the known blind spot — fixed at the source, not by manual tagging |

> **Why setters are treated differently:** every other department reliably checks its own queue, so pull works for them and manual tagging would just waste the team's time. Setters are the one place messages get missed — so instead of asking 20 people to babysit the setter queue, we fix it at the source (§2B).

## 2B. The Setter Fix (root cause — to implement)

Making the whole team tag messages is a workaround. The real fix is to make setter messages **impossible to miss**, with no ongoing manual labour:

1. **Dedicated filtered view** for setter/confirmer conversations (saved filter by Tag/source) that **Shine & LJ own** — so they aren't hunting through the whole team inbox.
2. **Auto-route + auto-assign** inbound setter-type conversations via a GHL workflow (tag + assign automatically on arrival).
3. **Auto-notify** — the same workflow pings **Shine/LJ** (Slack or mobile) on every new setter message, so setter messages are *pushed*, not pulled.
4. Until this is built, **Shine & LJ manually sweep the setter queue** on the cadence in §2A, and the exception-tag rule (§1) covers anything urgent.

> *Status: not yet implemented. Once the workflow + notifications are live, the setter row in §2A becomes a safety-net, not the primary control.*

---

## 3. Who Handles What (Routing Map)

When a new message lands in the **Team inbox**, decide who it belongs to:

| If the message is about… | Department | Who to @tag in #customer-support | Example |
|---|---|---|---|
| Invoices, payments, refunds, chargebacks, card declines | **Billing** | **@Fatima + @Kristine** (`@billing`, `@finance`) | "Why was I charged $7?", disputed payment |
| Program access, delivery, coaching/events, tech/login issues, "how do I…", unsubscribe requests | **Fulfilment / Support** | **@Sheree + @Bernice** (`@sheree`, `@bernice`) | "I can't access the training", "please delete me" |
| Sales questions from an existing/warm lead, pricing, closing | **Sales** | **@Lisa + @Sarah** (`@lisa`, `@sarah`) | Pricing questions, "I'm ready to join" |
| New leads, booking a call, appointment requests, replies to ad DMs | **Setters** | **@Fernando + @Sarika** (`@fer`*, `@sarika`) | "Can I book a call?", replies to ad DMs |
| Personal / VIP / anything only Luke should answer | **Luke** | **@Luke** (`@info`) | Partner/JV outreach, sensitive complaints |
| Not sure | **Ask before guessing** | Post in #customer-support, **@tag Luke + Dan** | Ambiguous or mixed-topic messages |

> *Confirm **Fernando's** Slack handle — the closest match in #customer-support is `@fer` (Fer Diaz). If that's not Fernando, tell me his handle and I'll fix it.*

### 3.1 Team Roster & Org Chart

Departments and roles below are from the **company Organisational Chart (June 2026, 25 people)**. Slack handles are for the 19 people currently in **#customer-support** — those are the people who can be @tagged there. People marked *(not in #customer-support)* need to be added to the channel before they can be tagged.

**Leadership**

| Name | Slack handle | Role |
|---|---|---|
| Luke | `@info` | CEO / GM + Sales Manager — VIP & final escalation |
| Daniel (Dan) | `@dan` | Operations Manager — escalation *(owns #customer-support)* |

**Billing / Finance & Legal** — *route billing here → @Fatima + @Kristine*

| Name | Slack handle | Role |
|---|---|---|
| Kristine | `@finance` | Head Bookkeeper |
| Fatima | `@billing` | Assistant Bookkeeper |
| Narissa | *(not in #customer-support)* | Accountant |

**Fulfilment / Support** — *route support here → @Sheree + @Bernice*

| Name | Slack handle | Role |
|---|---|---|
| Bernice | `@bernice` | Head Biz & Support Coach & Events Manager |
| Sheree | `@sheree` | Biz & Support Coach for Clients |
| Zoe | `@zoe` | Support Coach & Events Help |
| Fran | `@fran` | Support Coach & Events Support |
| Sascha | `@sascha` | Support Coach & Events Confirmer |
| Moe | *(not in #customer-support)* | Support Coach & Events Support |

**Sales & Setters** — *sales → @Lisa + @Sarah · setters → @Fernando + @Sarika*

| Name | Slack handle | Role |
|---|---|---|
| Lisa | `@lisa` | Salesperson |
| Sarah | `@sarah` | Salesperson |
| Brad | `@brad` | Salesperson |
| Sarika | `@sarika` | Call Setter |
| Fernando | `@fer` *(confirm)* | Message Setter |

**Operations**

| Name | Slack handle | Role |
|---|---|---|
| Kate | `@kate` | Admin Lead / Graphic Design |
| Nawal | `@nawal` | Operations Support |
| LJ | `@lj` | Admin |
| Shine | `@sunshine` | Admin |
| Blessing | `@blessingobi407` | Admin & Student Support |

**Marketing & Media** *(none currently in #customer-support)*

| Name | Role |
|---|---|
| Michael | Marketing Manager |
| Zee | Content Manager & Website |
| Ace | Video Editor |
| Mammit | Video Editor |

> **One thing to confirm:** Is **Fernando** the person on Slack as `@fer` (Fer Diaz)? If not, send me his handle. Also, Narissa, Moe, and the Marketing team aren't in #customer-support — add them if messages ever need to route to them.

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

**If NO (it belongs to another department):**
1. **Do not reply.**
2. **Mark it back to Unread** and leave it in the queue for the owning team:
   - Open the conversation's **options menu** (the envelope icon in the top-right of the conversation header) and choose **Mark as Unread**.
   - Confirm the conversation shows as **bold / unread** again and reappears under the **Unread** tab.
3. **That's it for routine messages.** Do **not** mark it Read, and do **not** tag anyone. The owning department clears its queue on the cadence in §2A and will pick it up.
4. **Escalate in Slack only by exception** (§4C) — *only* if the message is urgent/time-sensitive, setter-bound, or you can't tell whose it is. Even then, you still leave the CRM conversation **Unread**; the tag is an extra nudge, not a substitute for the owning team replying.

> 📷 **Screenshot 2 — Reply composer & From address.**
> *Insert the Sue Minto reply-composer screenshot here.* Shows the **Email** composer with **From: `info@lukehawkins.com`**, **From Name: Luke Hawkins**, the **To** field, and **Subject** line. Always confirm the correct From identity before sending, and note the **"DnD enabled by customer"** banner if present (see §7).

### 4C. How to escalate in Slack (the exception step)

Use this **only** when a message meets the exception test — **urgent/time-sensitive, setter-bound, or owner unknown**. Routine messages don't come here; you just leave them Unread (§4B).

1. **Post the message in #customer-support.** Include enough for the person to act without opening the CRM cold: the **customer's name**, the **channel** (email/SMS/call), a **one-line summary or paste** of what they said, and a **link to the CRM conversation** if you can grab it.
2. **@tag the person who needs to reply** based on the routing map in §3 (e.g. billing dispute → **@Fatima + @Kristine**; access/coaching/tech issue → **@Sheree + @Bernice**; new lead/booking → **@Fernando + @Sarika**; sales/pricing → **@Lisa + @Sarah**).
3. **If you don't know who it's for → @tag Luke and @Dan and ask "who is this message for?"** Do not guess and do not leave it unrouted. Luke/Dan will point it to the right person in-thread.
4. **(Recommended) Also set the Owner + tag inside the CRM.** In **Contact Details**, set **Owner** to the responsible person and add the department **Tag** (`billing`, `support`, `sales`). This keeps accountability visible inside GHL.
5. **The conversation still stays Unread.** The Slack tag is a nudge — the message is only marked Read when the responsible person replies. Escalating does not transfer the "reply" job away from the owning team.

> 📷 **Screenshot 3 — Contact Details panel (Owner, Followers, Tags).**
> *Insert the Contact Details screenshot here.* Shows the **Owner** and **Followers** fields at the top and the **Tags** section (e.g. `aug17-fb`, `260817 challenge`, `webinar`). This is where you assign accountability and tag the department.

### 4D. Each department: work only your queue
- Filter the inbox by your **department tag** and/or by conversations where **you are the Owner**.
- Clear your **Unread** items on your team's cadence (§2A) — this is the backbone of the whole system, not an optional extra.
- When you reply, the thread goes Read — that's your signal it's handled.

---

## 5. Status Discipline — quick reference

| State | What it means | Who may set it |
|---|---|---|
| **Unread (bold)** | Still needs a reply — including a message you opened that isn't yours (mark it back to Unread) | Anyone who opened it but isn't the one replying |
| **Read** | Replied to by the responsible person | **Only** the responsible person, and **only** by replying |
| **Owner set** | This named person is accountable | Whoever triages / escalates it |
| **Tagged (dept)** | Routed to a department queue | Whoever triages it |
| **Starred** | Flagged as important / needs Luke's eyes | Anyone, but tell the owner |
| **DND** | Contact opted out — do not market | Set automatically or by request (§7) |

**Rule of thumb:** *Read* is a promise that the customer has been replied to. Only the responsible person can make that promise — by replying. Marking someone else's message Read is the single behaviour that caused the original problem, so never do it.

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
- **Who:** the **setters (Fernando + Sarika)** own missed-call callbacks.
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

**Each scheduled check (per your team's cadence in §2A)**
- [ ] Filter to your department's queue (your Tag / where you're Owner) and clear it — reply to anything that's yours (within 14 hours of arrival).
- [ ] Anything not yours → mark **Unread** and leave it. Only escalate in **#customer-support** if it's urgent, setter-bound, or you don't know whose it is.

**Setters & confirmers (Shine, LJ)**
- [ ] Confirmers check their queue **4× per day**; **Shine hourly during launches**.
- [ ] Check **Reporting → Call report** for **Missed** calls **3× per day** and return them (§6).

**End of day**
- [ ] Your department's queue is clear — everything you're responsible for has been replied to.
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
| Mark someone else's message **Unread** the moment you realise it's not yours, and leave it in the queue | Mark someone else's message **Read** — this is what caused the original problem |
| Check your own department's queue on your cadence (§2A) and reply to what's yours | Rely on other people to tag your messages to you |
| Escalate in **#customer-support** only when it's urgent, setter-bound, or owner unknown | Stop and tag every stray message you open — that wastes the team's time |
| Not sure who it's for? **@tag Luke and Dan** and ask | Guess the department or leave it unrouted |
| Reply within **14 hours**; the reply is what marks it Read | Mark read to "tidy up" the inbox |
| Setters/confirmers check the **Call report** for **Missed** calls daily | Wait for someone to mention a missed call |
| Respect **DND** and route complaints to a human | Keep automations running on someone who opted out |

---

*Fill in the [bracketed] names/cadences and confirm the three assumptions at the top, and drop the four screenshots into their marked spots. Then this is ready to publish to the team.*
