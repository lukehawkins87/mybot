# Masterclass Nurture Sequence — Build Brief for VA

**Goal:** After every masterclass, keep emailing the people who did NOT buy, so we
warm them up over time until they book a call and purchase. This runs forever and
keeps growing.

---

## Plain-English overview (read this first)

We already have a short email sequence built (the one mapped out in **Miro** — that's
the whiteboard where Luke drew the funnel). That existing sequence runs right after the
masterclass.

**This new "nurture sequence" starts the moment a person finishes that Miro sequence.**
Think of it as "phase 2" — the long-term follow-up for everyone who didn't buy yet.

We only put people into the nurture sequence if they are in one of these two situations
when the Miro sequence ends:

- They **attended** the masterclass but **did NOT book a call**, or
- They **did NOT attend** and **did NOT book a call**

**Anyone who booked a call AND bought is NOT in this list.** They're already customers —
we don't nurture them, we'd only annoy them.

---

## Key words explained (for the VA)

| Word | What it means |
|------|----------------|
| **Miro sequence** | The existing short email sequence we already built (mapped in Miro). Nurture starts right after it. |
| **Suppression list** | A list inside our email tool of people we must NOT email. Adding someone to it "mutes" them without deleting them. This is how we stop emailing buyers and people with an upcoming call. |
| **Segment** | A group of contacts that share a status (e.g. "attended, no call booked"). We treat each group differently. |
| **CTA** | "Call To Action" — the line that tells the reader what to do next (here: "book a call"). |

---

## The 4 segments

Every person coming out of the Miro sequence falls into ONE of these:

### Segment 1 — Purchased ✅ (EXCLUDE)
- They bought. **Do not nurture them.**
- Add them to the **suppression list** so no nurture emails go out.

### Segment 2 — Booked a call, but the call hasn't happened yet ⏳ (HOLD)
- They have a call on the calendar. We don't want to nurture-email them right before
  their call.
- **Suppress them from the nurture sequence until 1 day AFTER their call date.**
- **1 day after the call, run a check: did they purchase?**
  - **Yes → they become Segment 1 (buyer).** Keep them suppressed. Done.
  - **No → move them into the correct nurture segment** (Segment 3 if they attended the
    masterclass, Segment 4 if they didn't) and start emailing them.

### Segment 3 — Attended the masterclass, but no call booked 📩 (NURTURE)
- They showed up but haven't taken the next step.
- **Put them in the nurture sequence.**

### Segment 4 — Did NOT attend, and no call booked 📩 (NURTURE)
- They registered but no-showed, and never booked.
- **Put them in the nurture sequence.**

> Segments 3 and 4 can receive the **same** emails to start. If we later find one group
> responds better to different messaging, we can split them — but don't over-engineer it
> on day one.

---

## How a person flows through the system

```
        Miro sequence ends
                │
                ▼
      What's their status?
   ┌───────────┼───────────────┬──────────────────┐
   ▼           ▼               ▼                  ▼
Purchased   Booked a call   Attended,          Didn't attend,
(Seg 1)     not done yet    no call            no call
   │         (Seg 2)         (Seg 3)            (Seg 4)
   │            │               │                  │
Suppress    Suppress until   Add to            Add to
(no emails) 1 day after      nurture           nurture
            the call         sequence          sequence
                │
        1 day after call:
        Did they buy?
          ├─ Yes → Segment 1 (suppress, done)
          └─ No  → move to Segment 3 or 4 and start nurturing
```

---

## Content rules for the nurture emails

These are the rules for writing/scheduling the emails:

1. **No images.** Plain-text style emails only. They feel personal and land in the inbox
   better.

2. **Value first — built around YouTube videos.** Each email points to one of Luke's
   YouTube videos.
   - Say what the video is about, then link it.
   - Format: *"To learn more, watch this YouTube video:"* + the video title + one line
     describing it.
   - **Example:** *"How to make $30k a month as a coach"* — then a sentence on what
     they'll learn, then the link.

3. **Every 5th email = a "book a call" CTA email.** Emails 1–4 give value, email 5 asks
   for the call. Then repeat (6–9 value, 10 = CTA), and so on.

4. **Frequency:** From month 1 onward and ongoing: **2 emails per week.**

5. **This is a living sequence — keep adding to it.**
   - Whenever we have an email that converts well (from any campaign), drop it into the
     chain.
   - The sequence never really "ends" — we keep extending it so people stay nurtured
     indefinitely.

---

## Email pattern (quick reference)

| Email # | Type | Content |
|---------|------|---------|
| 1 | Value | YouTube video + description |
| 2 | Value | YouTube video + description |
| 3 | Value | YouTube video + description |
| 4 | Value | YouTube video + description |
| 5 | **CTA** | Book a call |
| 6 | Value | YouTube video + description |
| ... | ... | ...repeat the pattern... |
| 10 | **CTA** | Book a call |

At 2 emails/week, this is about **2.5 weeks per 5-email block.**

---

## Build checklist for the VA

- [ ] Create the **nurture email sequence/automation** in our email tool.
- [ ] Create a **suppression list** for buyers (Segment 1).
- [ ] Set the trigger: a person enters nurture **when the Miro sequence ends** AND they
      are in Segment 3 or 4.
- [ ] Set up the **Segment 2 hold:** suppress anyone with a booked call, and set a check
      for **1 day after the call date**:
    - [ ] Bought? → keep on suppression list (Segment 1).
    - [ ] Didn't buy? → move into Segment 3 or 4 and start nurture.
- [ ] Load the **first batch of value emails** (each = YouTube video + description, no
      images).
- [ ] Make **every 5th email a "book a call" CTA.**
- [ ] Set sending to **2 emails per week.**
- [ ] Add a recurring reminder to **keep adding new / high-converting emails** to the end
      of the chain.

---

## Open questions to confirm with Luke before building

1. **Which email tool** are we building this in? (e.g. the platform where the Miro
   sequence already lives.)
2. **How do we know someone "purchased"?** What signal/tag marks a buyer so we can
   auto-add them to the suppression list?
3. **How do we know someone "booked a call" and their call date?** (Calendly? A tag?)
   This drives the Segment 2 hold and the "1 day after the call" check.
4. **How do we know who "attended" vs "didn't attend"** the masterclass? (Webinar tool
   tag?) This splits Segment 3 from Segment 4.
5. **Starter list of YouTube videos** to build the first ~10 emails around.
