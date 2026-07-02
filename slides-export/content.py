# Content for all 79 slides of Module 13 — Festivals, Webinars & Business
# Templates: title, quote, final, bullets, keyidea, grid, compare, table, timeline, hub, script

S = []

# ---------- VIDEO 13.1 ----------
S.append(dict(t="title", k="13.1", h="Free Workshops as a Growth Engine",
              sub="Give value first — the business follows"))

S.append(dict(t="bullets", k="13.1", h="Why free workshops are high‑leverage", items=[
    ("Grow your audience fast", "A single workshop can generate weeks of leads in one event."),
    ("Build trust through value", "They experience your results before you ever make an offer."),
    ("Fill programs organically", "You create warm, self‑selected buyers instead of cold prospects."),
    ("Test messages and offers quickly", "You learn what lands (and what doesn’t) in real time."),
]))

S.append(dict(t="keyidea", k="13.1", h="Teach a transformation, not just information",
              main="Your goal is a before → after shift.",
              desc="Don’t deliver more tips. Deliver a change the audience can feel inside the room.",
              bullets=[
                  "Define one clear outcome: “Before this… After this…”",
                  "Give them a quick win they can do right now.",
                  "Anchor the offer as the next step to deepen that shift.",
              ]))

S.append(dict(t="timeline", k="13.1", h="60–90 minute workshop structure", steps=[
    ("WELCOME", "5–10 MIN"), ("TEACH", "35–50 MIN"), ("OFFER", "10–15 MIN")],
    note=("Flow rule:", "Open strong → teach one big idea (3 points) → include an in-room experience → deliver a clean, simple CTA.")))

S.append(dict(t="grid", k="13.1", h="What to offer at the end", items=[
    ("Strategy Call", "Fastest path for high‑ticket buyers who want a plan."),
    ("Starter Course", "Low‑friction next step that deepens the quick win."),
    ("Challenge", "Short sprint that builds momentum + accountability."),
    ("Live Bootcamp", "High energy, high value, great bridge to programs."),
    ("Community", "Belonging + ongoing support keeps people engaged."),
    ("Bonus Gift", "Template, checklist, or guide that increases follow‑up."),
]))

S.append(dict(t="compare", k="13.1", h="Online vs In‑Person — key differences",
              lh="ONLINE (Webinar / Zoom)", rh="IN‑PERSON (Room / Event)",
              left=[
                  ("Attention is fragile", "Shorter segments, more variety, more resets."),
                  ("Energy must be generated", "You lead the state through camera + voice."),
                  ("Interaction is chat‑based", "Polls, chat prompts, name call‑outs."),
                  ("Tech is a variable", "Audio, camera, internet, backups matter."),
                  ("Q&A needs structure", "Timebox, pre‑frame, moderate questions."),
              ],
              right=[
                  ("Attention is embodied", "Your presence holds the room more naturally."),
                  ("Energy is shared", "Room dynamics create momentum and trust."),
                  ("Interaction is physical", "Hands up, pair shares, demos, movement."),
                  ("Tech is simpler (but louder)", "AV, mic handling, and room acoustics matter."),
                  ("Timeboxing feels different", "Applause, transitions, and movement take time."),
              ]))

S.append(dict(t="bullets", k="13.1", h="How to fill your free workshop", items=[
    ("Organic posts", "Short story + clear outcome + simple link to register."),
    ("Email list", "3-touch invite: announcement → reminder → “last chance”."),
    ("Partnerships", "Joint promo with aligned communities (value swap, not a pitch)."),
    ("Referrals", "“Bring a friend” with a simple bonus or giveaway."),
    ("Paid ads (simple lead)", "One promise, one audience, one CTA. Test small, iterate fast."),
    ("DM invites", "Personal message + outcome + “want the link?” (no pressure)."),
    ("Local meetups", "Community boards, studios, coworking spaces, recovery groups, events."),
]))

S.append(dict(t="table", k="13.1", h="Conversion benchmarks",
              cols=("METRIC", "BENCHMARK", "HOW TO IMPROVE"),
              rows=[
                  ("Show‑up rate", "Registered → attends live", "35–60%", "Reminder sequence + calendar holds + clear “why attend live”."),
                  ("Offer take‑rate", "Attends → buys", "8–20%", "Clarity + proof + urgency + tight Q&A (pre‑handle objections)."),
                  ("Call‑booking rate", "Attends → books call", "15–30%", "Simple CTA + one booking link + time‑boxed bonus for fast action."),
              ],
              note=("Optimization rule:", "fix the weakest link first (registration → show‑up → value → offer → follow‑up).")))

S.append(dict(t="timeline", k="13.1", h="Simple free → paid funnel", steps=[
    ("Traffic", "Posts • Ads • Partners"), ("Registration", "One promise, one CTA"),
    ("Show‑up", "Reminders + calendar"), ("Value + Quick Win", "Result in the room"),
    ("Offer", "Simple + specific"), ("Follow‑up", "Sequence + deadline")],
    callout=("Close", "Calls booked → decisions made → clients served."),
    note=("Tracking rule:", "measure each drop‑off (traffic → registrations → show‑ups → offer views → follow‑up clicks → closes).")))

S.append(dict(t="bullets", k="13.1", h="Pitfalls to avoid", items=[
    ("Too much content", "Less is more: one big idea + 3 points + one experience."),
    ("Weak opening", "No hook = no attention. Start with a promise, problem, or pattern interrupt."),
    ("No quick win", "Give a tangible result inside the room — momentum creates trust."),
    ("Confusing offer", "One clear next step. One CTA. One place to click/scan."),
    ("No urgency (or no follow‑up)", "Create a real deadline and run a simple follow‑up sequence (replay → FAQ → reminders)."),
    ("Tech untested", "Always run a rehearsal + backups (slides, mic, internet, links, QR codes)."),
]))

S.append(dict(t="quote", k="13.1",
              main="A free workshop is not a gift — it’s an investment.",
              sub="Give value freely, and the right people will pay to go deeper."))

# ---------- VIDEO 13.2 ----------
S.append(dict(t="hub", k="13.2", h="5-part workshop design",
              center=("ONE BIG IDEA", "Threads through every part"),
              spokes=[("STORY", "Relate, humanize, build trust"),
                      ("HOOK", "Pattern interrupt + promise"),
                      ("TEACH", "1 idea • 3 points • clarity"),
                      ("EXPERIENCE", "Exercise that creates a quick win"),
                      ("OFFER", "Natural next step + clear CTA")],
              note=("Thread rule:", "the One Big Idea should be felt in every section — not just taught in the middle.")))

S.append(dict(t="grid", k="13.2", h="Create interactive moments",
              prompt=("PROMPT", "Where can you add a 30–90 second interaction every 5–7 minutes?"),
              items=[
                  ("Polls", "Fast state check + instant data to teach from."),
                  ("Breakouts", "Small groups = safety, speed, and deeper buy-in."),
                  ("Pair shares", "Turn reflection into connection (and commitment)."),
                  ("Hands‑up checks", "Quick calibration: “Who relates?” “Who’s in?”"),
                  ("Chat prompts", "Names + responses = belonging (and retention)."),
                  ("Micro‑practices + demos", "Do it live. Make the win feel in‑room."),
              ],
              note=("Timing rule:", "keep interactions short, frequent, and outcome‑linked — momentum stays high and conversions rise naturally.")))

S.append(dict(t="timeline", k="13.2", h="The transformation arc", steps=[
    ("START", "Current state + pain"), ("Belief shift", "Old → new truth"),
    ("Decision", "Choose the new path"), ("Experience", "Make it felt in-room"),
    ("END", "New state + capability")],
    callout=("Close the gap with experience", "Design a moment that proves the transformation is possible right now."),
    note=("Facilitation rule:", "make the audience clearly feel where they started and where they are now — in under 10 minutes.")))

S.append(dict(t="keyidea", k="13.2", h="Quick win principle",
              main="Give them a tangible result in the room.",
              desc="A quick win creates momentum, increases trust, and makes your offer feel like the natural next step.",
              bullets=[
                  "Give a quick win they can do right now (2–5 minutes).",
                  "Momentum builds trust: “This works… and fast.”",
                  "Position your offer as the next step to deepen the same result.",
              ]))

S.append(dict(t="bullets", k="13.2", h="Visual aids that help (not distract)", items=[
    ("Slides = clarity", "Use clean headlines, simple diagrams, and one idea per slide — so the message lands fast."),
    ("Workbook = practice", "Turn insight into action with prompts, exercises, and space to write — so they leave with a result."),
    ("Props = anchors", "Use props sparingly to make an abstract idea physical — and tie it to one clear takeaway."),
    ("Keep it consistent with your brand", "Consistency builds trust: same fonts, colors, and layout rhythm — so visuals support authority (not noise)."),
]))

S.append(dict(t="bullets", k="13.2", h="Logistics & ops checklist", items=[
    ("Room setup", "Stage sightlines, aisle space, and a clear “focus zone” up front."),
    ("Seating", "Choose layout to match the experience: theatre, classroom, circle, cabaret."),
    ("AV test", "Mic levels, music, video playback, click-through speed, and backups."),
    ("Slide remote", "Fresh batteries + a spare. Know where “blank screen” lives."),
    ("Music cues", "Walk-on, breaks, experience sections, and close. Volume pre-set."),
    ("Timekeeper", "Hard stops for teach/experience/offer so the close lands clean."),
    ("Roles (host, chat, sales support)", "Clear hand-offs, Q&A routing, links ready, and objection coverage."),
]))

S.append(dict(t="timeline", k="13.2", h="Run-of-show template", steps=[
    ("OPEN DOORS", "T – 15"), ("START", "T – 00"), ("HOOK", "3 MIN"), ("TEACH", "20 MIN"),
    ("EXPERIENCE", "10 MIN"), ("TEACH", "15 MIN"), ("OFFER", "12 MIN"), ("Q&A", "10 MIN")],
    note=("End cap:", "Close clean → invite photos/connection → direct them to the next step (QR / link / table) before they disperse.")))

S.append(dict(t="grid", k="13.2", h="Brief your team",
              sub="Clarity reduces friction — and keeps the experience consistent.",
              items=[
                  ("Outcomes", "What “success” looks like for the audience and the team."),
                  ("Run sheet", "Minute‑by‑minute flow, timing cues, and who owns each beat."),
                  ("Hand‑offs", "Exact “who says what next” moments (zero awkward transitions)."),
                  ("FAQs", "Common questions + the exact answers your team will repeat."),
                  ("Objection roles", "Who handles what — and when to escalate to you."),
                  ("After‑action", "Post‑event tasks + a short debrief slot to improve fast."),
              ]))

S.append(dict(t="compare", k="13.2", h="Do this / Avoid this",
              lh="DO THIS", rh="AVOID THIS",
              left=[
                  ("Simplicity", "One big idea, clear steps, clean next action."),
                  ("Pacing", "Timebox sections, leave space for questions & reflection."),
                  ("Presence", "Stay grounded. Lead the room with calm certainty."),
              ],
              right=[
                  ("Cramming", "Too much content. Too little integration."),
                  ("Rushing", "No pauses. No space for the lesson to land."),
                  ("Over‑selling", "Pressure before value erodes trust."),
                  ("Tech risk without backup", "No test run, no redundancy, no plan B."),
              ]))

S.append(dict(t="quote", k="13.2",
              main="The best workshops don’t just teach — they create a felt experience of what’s possible.",
              sub=""))

# ---------- VIDEO 13.3 ----------
S.append(dict(t="title", k="13.3", h="Webinar Mastery",
              sub="Convert online audiences with the same power as the stage"))

S.append(dict(t="compare", k="13.3", h="Webinar vs Live — what changes",
              lh="WEBINAR (Online)", rh="LIVE (In‑Room)",
              left=[
                  ("Attention windows are shorter", "Segment tighter. Reset focus often."),
                  ("Distractions are everywhere", "Tabs, phones, kids, notifications."),
                  ("Energy must be transmitted", "Voice + camera do the heavy lifting."),
                  ("Engagement is chat‑based", "Polls, Qs, name call‑outs, prompts."),
                  ("Timeboxing must be strict", "Keep pace. Use clear transitions."),
              ],
              right=[
                  ("Attention is embodied", "Presence holds the room naturally."),
                  ("Energy transfers faster", "Room feedback creates momentum."),
                  ("Visual variety is physical", "Movement, props, demos, room shifts."),
                  ("Engagement is relational", "Eye contact, laughter, shared moments."),
                  ("Timeboxing is looser", "Transitions + applause take time."),
              ]))

S.append(dict(t="hub", k="13.3", h="Webinar structure",
              center=("ONE CLEAR ARC", "Pre‑frame → Teach → Offer"),
              spokes=[("TEACH", "Quick win in the room • 1 idea • 3 points • practice"),
                      ("PRE‑FRAME", "Promise + agenda • set expectations + rules"),
                      ("OFFER", "Objection pre‑handle • clear CTA + next step"),
                      ("ENGAGEMENT", "Polls • chat • Q&A"),
                      ("CLARITY", "Short segments • strong transitions")],
              note=("Remember:", "promise + quick win + pre‑handled objections + clear CTA = clean conversions online.")))

S.append(dict(t="grid", k="13.3", h="Keep online audiences engaged",
              prompt=("PROMPT", "Plan an engagement touchpoint every 2–4 minutes to prevent scroll‑away."),
              items=[
                  ("Polls", "Quick state checks you can teach from immediately."),
                  ("Chat prompts", "Short questions that keep fingers moving and minds present."),
                  ("Name call‑outs", "Create belonging by acknowledging people in real time."),
                  ("Screen switches", "Camera → slides → whiteboard → demo to reset attention."),
                  ("Camera moves", "Stand up, step in, or change angle for energy shifts."),
                  ("Short segments", "Teach in tight beats (2–4 mins) with micro‑pauses."),
              ],
              note=("Rule:", "change the stimulus before attention drops — ask, show, switch, or move.")))

S.append(dict(t="bullets", k="13.3", h="Camera presence", items=[
    ("Look at the lens", "Eye contact = the camera, not your own image."),
    ("Framing", "Eyes in the top third. Keep space for your hands."),
    ("Lighting", "Light your face from the front. Avoid backlight."),
    ("Pace + pauses", "Go slightly slower than you think. Let lines land."),
    ("Smile in your voice", "Warmth carries through tone even before words."),
    ("Gesture in frame", "Use deliberate, slower gestures where they can be seen."),
    ("Stand if possible", "Standing lifts energy, breath, and authority on camera."),
]))

S.append(dict(t="compare", k="13.3", h="Offer online vs in‑person",
              lh="ONLINE (Webinar / Zoom)", rh="IN‑PERSON (Room / Event)",
              left=[
                  ("Lower‑friction offers win", "Simple next steps (low commitment) convert better on screen."),
                  ("Bonuses create certainty", "Clear deliverables reduce hesitation and increase action."),
                  ("Payment plans matter more", "Make the decision easy: split pay, clear checkout, fast steps."),
              ],
              right=[
                  ("Trust can be built faster", "Presence, proximity, and social proof in the room raise conviction."),
                  ("Scarcity feels more real", "Seats, time windows, and in‑room momentum create urgency."),
                  ("High‑ticket can land cleanly", "With warmth + clarity, bigger commitments can convert powerfully."),
              ]))

S.append(dict(t="grid", k="13.3", h="Automated vs Live", cols3=True, items=[
    ("Live", "More authenticity, real-time energy, and live Q&A."),
    ("Automated", "Scale faster with consistent delivery and fewer moving parts."),
    ("Hybrid", "Best of both: automated training + live Q&A / close."),
],
    callout=("Choose by goal", "If your goal is connection + objections handled live, go Live. If your goal is scale + predictability, go Automated. If you want reach + intimacy, run Hybrid.")))

S.append(dict(t="timeline", k="13.3", h="Post‑webinar follow‑up sequence", steps=[
    ("THANK‑YOU", "DAY 0–1"), ("REPLAY", "DAY 1"), ("NURTURE", "DAYS 2–4"),
    ("FAQ", "DAY 4–6"), ("CASE PROOF", "DAY 6–8"), ("DEADLINE", "LAST 48H"), ("FINAL CALL", "CLOSE")],
    note=("Execution rule:", "One email = one purpose. Keep it simple, keep it consistent, and point to one clean next step.")))

S.append(dict(t="table", k="13.3", h="Key metrics",
              cols=("METRIC", "BENCHMARK", "WHAT IT MEANS"),
              rows=[
                  ("Registration → Show‑up", "% who attend live", "30–50%", "Attendance is a function of reminders, clarity, and urgency to be live."),
                  ("Watch time → Offer", "% still present at pitch", "60–80%", "Segment pacing + interaction keep attention long enough to convert."),
                  ("CTA clicks", "% who take the next step", "15–30%", "Clarity + one-link simplicity + time‑boxed bonus boosts action."),
              ],
              note=("Optimization rule:", "fix the weakest link first (reg → show‑up → watch time → CTA → purchase).")))

S.append(dict(t="bullets", k="13.3", h="Tech setup checklist", items=[
    ("Platform", "Zoom / WebinarJam / GHL / YouTube Live — know the buttons before you go live."),
    ("Backup internet", "Hotspot ready + device charged + quick reconnect plan."),
    ("Mic + camera", "External mic preferred. Do a quick recording test for levels and lighting."),
    ("Slides + timer", "Deck loaded + backup PDF. Timebox sections so your offer isn’t rushed."),
    ("Moderator + recording + redundancy", "Moderator handles chat/Q&A. Start recording early. Have backups: links, files, and plan B."),
]))

S.append(dict(t="quote", k="13.3",
              main="The screen is your stage.",
              sub="Treat every webinar like a sold-out room — energetically, that’s what you create."))

# ---------- VIDEO 13.4 ----------
S.append(dict(t="grid", k="13.4", h="Audience profile — needs", items=[
    ("Loneliness", "Wanting connection without losing safety."),
    ("Fear of vulnerability", "Hesitation to be seen fully in groups."),
    ("Limiting beliefs", "Identity stories that keep growth stuck."),
    ("Sobriety disconnection", "Social gaps when old habits are gone."),
    ("Over‑thinking", "Getting stuck in mind, avoiding feeling."),
    ("Belonging", "A sober‑conscious tribe that feels safe."),
]))

S.append(dict(t="grid", k="13.4", h="Audience profile — goals", items=[
    ("Feel seen", "Validation without judgment — “I’m not alone.”"),
    ("Lasting relationships", "Real connection that continues after the event."),
    ("Break patterns", "Stop repeating the same loops — choose a new way."),
    ("Sober‑conscious community", "A place to belong where values and lifestyle align."),
    ("Usable tools", "Simple practices they can apply immediately."),
    ("Sustained openness", "Keep the heart open — without burning out or isolating."),
]))

S.append(dict(t="hub", k="13.4", h="Adapt your talk for conscious spaces",
              center=("PRESENCE", "Warmth • consent • truth"),
              spokes=[("MISSION STORY", "Why you care • why it matters"),
                      ("RAPPORT HOOK", "Shared identity + safety"),
                      ("PERMISSION INVITE", "Soft ask to be open"),
                      ("QUALIFY + URGENCY", "Who it’s for • why now"),
                      ("CTA + CLOSE", "One clear next step")],
              note=("Consent frame:", "invite first, then lead with clarity — no pressure, only options.")))

S.append(dict(t="bullets", k="13.4", h="Useful micro‑frames", items=[
    ("“No pressure, only options”", "Keeps sovereignty high and lowers the audience’s nervous system."),
    ("“Take what serves”", "Invites self‑selection and makes the room feel respected."),
    ("“We value consent and sovereignty”", "Sets a clean frame: you lead with care, not control."),
]))

S.append(dict(t="bullets", k="13.4", h="Pitfalls to avoid", items=[
    ("Over-teaching", "Too much information flattens the room. Give one clear shift + one usable tool."),
    ("Hidden agendas", "In conscious spaces, people feel intent fast. Be clean, transparent, and service-led."),
    ("Rushing", "Speed can read like anxiety. Slow your headlines and let the emotion land."),
    ("Not reading the room", "Watch faces, breath, and energy. Adjust pace, tone, and depth in real time."),
    ("No decompression time", "After a deep moment, pause. Create space to integrate before you transition or pitch."),
]))

# ---------- VIDEO 13.5 ----------
S.append(dict(t="title", k="13.5", h="Large Stage & Corporate Speaking",
              sub="Scale impact without losing message"))

S.append(dict(t="bullets", k="13.5", h="Large stage dynamics", items=[
    ("Room size changes the “read”", "You’re speaking to zones, not faces — simplify beats and project intent."),
    ("Delay & pacing", "Big rooms need bigger pauses — let laughter and applause fully land."),
    ("Sightlines & stage geography", "Choose positions deliberately so every section feels included."),
    ("Energy waves, applause timing, broader gestures", "Use bigger, cleaner movement so meaning reads from 50+ metres away."),
]))

S.append(dict(t="bullets", k="13.5", h="Physical adjustments", items=[
    ("Projection", "Send your voice to the back of the room without forcing volume."),
    ("Mic technique", "Work the mic (distance + angle). Don’t “eat the mic” or drift away mid‑line."),
    ("Stage zones", "Use geography intentionally (center = authority, edges = connection, step‑forward = CTA)."),
    ("Movement arcs", "Move between ideas — then stop. Stillness makes the next line land heavier."),
    ("Pause discipline", "Hold 2–3 seconds after headline lines. Eye contact stays — hands stay quiet."),
    ("Monitor awareness", "Stay oriented to teleprompter/confidence monitor without losing the audience."),
]))

S.append(dict(t="hub", k="13.5", h="Corporate keynote structure",
              center=("KEYNOTE", "Clarity • relevance • outcomes"),
              spokes=[("PROBLEM TRUTH", "Name the real cost"),
                      ("HOOK", "Attention + outcome promise"),
                      ("FRAMEWORK", "Simple model people remember"),
                      ("CASE STUDY", "Proof with numbers + story"),
                      ("APPLICATION", "Make it usable Monday")],
              note=("Close rule:", "end with a clear call to action — one next step the audience can execute immediately.")))

S.append(dict(t="grid", k="13.5", h="Tailor to industry", items=[
    ("Vocabulary", "Use their terms, acronyms, and role language."),
    ("Pain points", "Name the real problems they’re measured on."),
    ("Compliance context", "Respect constraints, approvals, and risk boundaries."),
    ("KPI mapping", "Translate your message into measurable outcomes."),
    ("Stakeholder priorities", "Align to what leaders, teams, and buyers care about."),
    ("Industry anchors", "Use relevant examples that match their reality."),
]))

S.append(dict(t="bullets", k="13.5", h="Authority brief for bookers", items=[
    ("Bio", "Your positioning, credibility, and the problem you solve — in 3–5 lines."),
    ("Signature outcomes", "Clear before/after results (tie to KPIs when corporate)."),
    ("Talk menu", "3–5 talk titles with one-line outcomes for each."),
    ("Social proof", "Testimonials, logos, audience sizes, media links, and measurable results."),
    ("Tech rider", "Mic type, clicker, confidence monitor, playback needs, slide format + backups."),
    ("Fees + availability", "Your rate range, travel policy, and booking windows (plus clear next steps)."),
]))

S.append(dict(t="bullets", k="13.5", h="Manage AV & tech", items=[
    ("Soundcheck", "Test mic gain, EQ, and stage volume before doors open."),
    ("Slides & backups", "Primary deck + PDF backup + offline copy on USB/drive."),
    ("Clicker", "Test range + batteries. Know “blank screen” + laser toggle."),
    ("Timers", "Run-of-show timing + countdown cues (especially for Q&A)."),
    ("Confidence monitor", "Confirm you can see slides without turning your back."),
    ("Stage map", "Know safe zones, cables, monitors, and where NOT to stand."),
    ("Crew cues", "Agree on hand signals for audio, lighting, music, and timing."),
]))

S.append(dict(t="timeline", k="13.5", h="Big-stage rehearsal plan", steps=[
    ("SCRIPT BEATS", "OPEN → TEACH → CLOSE"), ("BLOCKING", "MOVEMENT & ZONES"), ("MIC RUNS", "PACE & BREATH")],
    note=("Run-through checklist:", "Slide timing • Applause lines (pause + hold) • Q&A guardrails (timebox + bridge phrases)")))

S.append(dict(t="compare", k="13.5", h="Do this / Avoid this (corporate)",
              lh="DO", rh="AVOID",
              left=[
                  ("Clarity", "Simple structure, clean headlines, direct takeaways."),
                  ("Brevity", "Get to the point fast. Respect time and attention."),
                  ("Relevance", "Tie everything to outcomes, KPIs, and real-world use."),
              ],
              right=[
                  ("Jargon overload", "Buzzwords without application reduce trust quickly."),
                  ("Edgy humor", "Risky jokes can damage safety and professionalism."),
                  ("Unproven claims", "If you can’t back it up, don’t overstate it."),
              ]))

S.append(dict(t="quote", k="13.5",
              main="The stage gets bigger, but the principles stay the same. Master the fundamentals — then scale.",
              sub=""))

# ---------- VIDEO 13.6 ----------
S.append(dict(t="hub", k="13.6", h="Short pitch — full structure",
              center=("10–15 MIN TALK", "5 beats • one clear CTA"),
              spokes=[("2) MISSION", "Why you do what you do"),
                      ("1) RAPPORT", "Shared identity + felt “me too”"),
                      ("3) PERMISSION", "Soft invite → openness + consent"),
                      ("4) QUALIFY", "Who it’s for + why now"),
                      ("5) CTA + CLOSE", "One step • clear • non‑pushy")],
              note=("Keep it clean:", "one thread, one outcome, one next step — delivered with presence.")))

S.append(dict(t="grid", k="13.6", h="Rapport hook — examples", items=[
    ("Shared Identity", "“If you’ve ever felt like you didn’t fit… you’re in the right place.”"),
    ("Shared Moment", "“Look around — every person here chose to show up. That matters.”"),
    ("Pattern Interrupt", "“Quick question — what if your ‘overthinking’ is actually your strength?”"),
    ("Audience Mirror Lines", "“Some of you are open… and some of you are guarded. Both are welcome.”"),
    ("3 Openers Included", "Pick one: identity, moment, or question. Keep it under 15 seconds."),
    ("Delivery Note", "Land the last word, then pause 2–3 seconds with eye contact."),
]))

S.append(dict(t="bullets", k="13.6", h="Personal mission story — beats", numbered=True, items=[
    ("Inciting moment", "The moment something changed — the wake‑up call, the turning point, the “I can’t keep doing this” realization."),
    ("Struggle", "Name the cost — what you were dealing with internally and externally. Keep it honest, not dramatic."),
    ("Insight", "The truth you saw — the belief that shifted. This is the “lesson” without teaching yet."),
    ("New path", "What you did next — the decision, the first step, the practice that started changing the outcome."),
    ("Service", "Why you help others now — connect your story to their journey and what’s possible for them."),
],
    note=("Timing target:", "60–90 seconds. Keep it tight, human, and emotionally honest — then move forward.")))

S.append(dict(t="grid", k="13.6", h="Permission / soft invite", items=[
    ("Ask to explore", "Invite curiosity instead of forcing agreement."),
    ("Set safety", "Create a calm container for real honesty."),
    ("Invite openness", "Permission to feel + consider without pressure."),
    ("Consent language", "Sovereignty first: choice, pace, and boundaries."),
    ("Example phrasing", "“If you’re open, try this with me for 60 seconds.”"),
    ("Bridge to next step", "Tie the invite to a simple, clear action after."),
]))

S.append(dict(t="grid", k="13.6", h="Qualify & urgency — lines", items=[
    ("Who it’s for", "“If you want X and you’re tired of Y — this is for you.”"),
    ("Why now", "“If you wait 90 days, you’ll still be in the same loop — unless you decide today.”"),
    ("Scarcity type", "Seats, time, spots, bonus, cohort start — pick one real constraint."),
    ("Time‑bound window", "“Enrollment closes {date/time} — so you can stop overthinking and choose.”"),
    ("Ethical framing", "“No pressure. If it’s a fit, take the next step. If not, take the tool.”"),
    ("One‑sentence combo", "“If you’re {who} and you want {result}, this is your next step — {deadline}.”"),
]))

S.append(dict(t="grid", k="13.6", h="CTA & Close — Copy Bank", items=[
    ("One Step", "Make the next move simple: one action, one decision."),
    ("One Link / QR", "One destination. No confusion. Repeat it clearly."),
    ("Bonus", "A fast win that increases urgency and follow-through."),
    ("Deadline", "A clear time window creates action without pressure."),
    ("Enrollment Options", "Give 1–3 clean choices (not 10) so they decide."),
    ("Next Touch", "Tell them what happens next: email, link, or meet-up."),
]))

S.append(dict(t="timeline", k="13.6", h="Delivery map — cues", steps=[
    ("Pause placements", "After headlines • before reveals"),
    ("Eye contact arcs", "Left → Center → Right"),
    ("Gesture cues", "Open • point • frame • still"),
    ("Tone switches", "Warm → Declarative → Command")],
    callout=("Space use", "Anchor key moments to locations: center for truth, stage left/right for contrast, stillness for impact."),
    note=("Practical rule:", "mark your script with [PAUSE], [LOOK], [GESTURE], [MOVE], [TONE] — then rehearse it until it’s natural.")))

S.append(dict(t="table", k="13.6", h="Tone markers by section",
              cols=("SECTION", "TONE", "PURPOSE"),
              rows=[
                  ("Rapport hook", "“I see you” + shared humanity", "Warm", "Build safety, trust, and connection fast."),
                  ("Personal mission story", "Truth > perfection", "Vulnerable", "Create depth and emotional permission to be real."),
                  ("Permission / soft invite", "Open the door (no pressure)", "Curious", "Invite reflection and choice without forcing."),
              ],
              note=("Close strong:", "go Declarative to qualify (“this is for you if…”), then Command for the CTA (clear next step + calm certainty).")))

S.append(dict(t="script", k="13.6", h="Annotated mini‑script (excerpt)",
              sub="A 2–3 minute festival/stage pitch with delivery cues (pause, tone, eye contact, gestures)",
              lh="SCRIPT (WHAT YOU SAY)", rh="DELIVERY NOTES (HOW YOU SAY IT)",
              rows=[
                  ("“Can I be honest with you?”", "(Rapport hook — short, clean, human.)",
                   "Warm tone • soften your eyes", "Pause 2s before you continue."),
                  ("“For a long time, I looked ‘fine’ on the outside… but I was disconnected on the inside.”", "",
                   "Slow pace • breathe low", "Land “disconnected” → pause 3s → hold eye contact."),
                  ("“And I realized something: sobriety isn’t just quitting — it’s coming home to yourself.”", "(Insight line — frame + meaning.)",
                   "Whisper → declarative on “coming home”", "Open‑palm gesture at chest (belonging)."),
                  ("“So if you’ve been doing it ‘alone’… you don’t have to anymore.”", "(Permission invite — safety + belonging.)",
                   "Genuine warmth • slow down", "Sweep eye contact left → right (include the room)."),
              ],
              note=("Rule:", "one clear message per line. Add pauses + stillness so the room can feel it — then move into your CTA.")))

S.append(dict(t="grid", k="13.6", h="Adapt for different festivals", items=[
    ("Breathwork", "Speak slower. Use more silence. Invite regulation + safety."),
    ("Yoga / Wellness", "More embodiment cues. Simple practices they can do instantly."),
    ("Recovery", "Lead with compassion. Consent language. “One step at a time.”"),
    ("Conscious Business", "Tie to outcomes: clarity, leadership, impact, sustainable growth."),
    ("Family-Friendly", "Keep language clean. Use simple examples + practical next steps."),
    ("Faith-Adjacent", "Emphasize service, values, and integrity. Avoid “guru” energy."),
]))

S.append(dict(t="quote", k="13.6",
              main="A short pitch done with full presence is worth more than a long pitch done with doubt.",
              sub=""))

# ---------- VIDEO 13.7 ----------
S.append(dict(t="title", k="13.7", h="Building Your Speaking Business",
              sub="Mission → Message → Mastery → Monetise → Multiply"))

S.append(dict(t="hub", k="13.7", h="The 5M Model — overview",
              center=("BUSINESS SPINE", "Mission → Multiply"),
              spokes=[("M2 — MESSAGE", "One Big Idea + framework"),
                      ("M1 — MISSION", "Your WHY + who you serve"),
                      ("M3 — MASTERY", "Skills + reps + feedback"),
                      ("M4 — MONETISE", "Offers + funnels + delivery"),
                      ("M5 — MULTIPLY", "Team + systems + scale")],
              note=("Thread rule:", "build each “M” on purpose — Mission sets direction, Multiply creates scale.")))

S.append(dict(t="bullets", k="13.7", h="M1 — Mission",
              sub="Define your WHY — and the impact you’re here to create.", items=[
    ("Your WHY (purpose)", "The cause you stand for — the change you want to see because you lived it."),
    ("Who you serve (audience)", "A clear person with a clear problem — not “everyone.”"),
    ("Problems you solve (outcomes)", "Name the pains you remove and the results you create — in plain language."),
    ("Non‑negotiables (values)", "The standards you won’t compromise — how you do the work matters."),
    ("Impact thesis (one sentence)", "“I help [who] go from [before] to [after] so they can [meaningful result].”"),
]))

S.append(dict(t="bullets", k="13.7", h="M2 — Message", items=[
    ("One Big Idea", "A single core truth that the audience can repeat — and act on."),
    ("Signature framework", "A clear system that organizes your teaching (and makes you memorable)."),
    ("Talk menu", "3–5 talk titles that package your expertise for stages, workshops, and webinars."),
    ("Differentiation", "Your angle: what you believe that most people don’t — and why you’re right."),
    ("Proof", "Case studies, testimonials, results, credibility markers — shown without “trying to convince.”"),
    ("Outcomes", "Name the measurable transformation: what changes, by when, and what it costs to stay the same."),
]))

S.append(dict(t="bullets", k="13.7", h="M3 — Mastery", items=[
    ("Delivery drills", "Daily reps for voice, pauses, gestures, pacing, and presence under pressure."),
    ("Story bank", "Collect, tag, and practice your best stories so you can access them on demand."),
    ("Objection handling", "Pre-handle common doubts and respond cleanly without defensiveness or pressure."),
    ("State management", "Rituals, physiology, breath, and focus to enter certainty before you speak."),
    ("Feedback loops", "Record → review → refine. Use mentors, peers, and data to keep improving."),
]))

S.append(dict(t="grid", k="13.7", h="M4 — Monetise",
              sub="Build revenue streams that match your message (and your lifestyle)", items=[
    ("Keynotes", "Paid talks for events & companies that want outcomes fast."),
    ("Workshops", "Interactive learning that drives trust, leads, and conversions."),
    ("Courses", "Scalable learning product that sells while you sleep."),
    ("Coaching", "High-touch transformation (1:1 or groups) with premium value."),
    ("Retainers", "Recurring revenue for ongoing support, training, or advising."),
    ("Events + Licensing", "Run your own events — plus affiliate / IP licensing income."),
]))

S.append(dict(t="grid", k="13.7", h="M5 — Multiply",
              sub="Scale impact with systems, assets, and partnerships — without losing your message.", items=[
    ("Team Roles", "Delivery, ops, sales support, content, and community — assign owners."),
    ("SOPs", "Repeatable systems for events, follow-up, launches, and onboarding."),
    ("Assets Library", "Slides, scripts, emails, offers, FAQs — centralized and versioned."),
    ("Licensing IP", "Package frameworks so others can deliver them — with quality control."),
    ("Partnerships", "JV webinars, affiliates, communities, and events that expand reach."),
    ("Media & PR", "Podcasts, press, and platforms that amplify authority at scale."),
]))

S.append(dict(t="timeline", k="13.7", h="Revenue model example", steps=[
    ("Free workshop", "Value + quick win"), ("Low‑ticket course", "Self‑paced momentum"),
    ("High‑ticket program", "Coaching + support"), ("Retreats / events", "High trust experiences"),
    ("Upgrade points", "Next best step")],
    callout=("Upgrade triggers", "Quick win → desire • Proof → trust • Deadline → decision."),
    note=("", "Design each step to deliver value — and make the next upgrade feel like the most natural move.")))

S.append(dict(t="hub", k="13.7", h="The Speaking Business Flywheel",
              center=("MOMENTUM", "Compounds when each step feeds the next"),
              spokes=[("VALUE", "Quick wins + real outcomes"),
                      ("AUDIENCE", "Attention you’ve earned"),
                      ("OFFER", "Clear next step to go deeper"),
                      ("DELIVERY", "Deliver & over-deliver results"),
                      ("PROOF", "Testimonials + case studies")],
              note=("Flywheel rule:", "proof creates more audience — and the next cycle becomes easier, faster, and more profitable.")))

S.append(dict(t="timeline", k="13.7", h="90-day milestones", steps=[
    ("1ST TALK", "BOOK + DELIVER"), ("1ST WORKSHOP", "RUN LIVE"), ("1ST OFFER", "LIVE CTA"),
    ("10 SALES", "PROOF BUILT"), ("REFERRAL", "1ST PARTNER")],
    note=("Review KPIs weekly:", "Bookings • Show-up rate • Conversions • Revenue per event • Referral sources — fix the weakest link first.")))

S.append(dict(t="quote", k="13.7",
              main="Speaking is not just a skill — it’s a business. Build it on purpose.",
              sub=""))

# ---------- VIDEO 13.8 ----------
S.append(dict(t="title", k="13.8", h="Legacy, Post‑Event System & Your Next 90 Days",
              sub="What you build now, the world will remember"))

S.append(dict(t="timeline", k="13.8", h="Your post‑event system", steps=[
    ("CAPTURE LEADS", ""), ("TAG INTERESTS", ""), ("SEND RECAP", ""),
    ("DELIVER BONUS", ""), ("CTA → BOOK CALLS", "")],
    note=("System rule:", "Don’t “hope” they remember you — automate the next step while the emotion is still fresh.")))

S.append(dict(t="grid", k="13.8", h="Lead capture ideas", items=[
    ("QR to Gift", "Instant download (tool, guide, replay) in exchange for email."),
    ("SMS Opt‑In", "Text a keyword to join — fast, simple, high show‑up rates."),
    ("Landing Page", "Clean form + clear promise; track conversions by source."),
    ("Paper Forms", "Simple signup sheet at the exit — enter into CRM the same day."),
    ("Badge Scans", "For conferences: capture leads with event scanners + consent."),
    ("Calendar Link", "Book a call on the spot — one link, one clear next step."),
]))

S.append(dict(t="timeline", k="13.8", h="Follow‑up sequence — example", steps=[
    ("D1", "THANK‑YOU + REPLAY"), ("D2", "CASE STUDY"), ("D4", "FAQ"),
    ("D6", "BONUS"), ("D8", "DEADLINE"), ("D10", "FINAL")],
    note=("Sequencing rule:", "Start with value and clarity → then add proof, answers, and a clean deadline. Each touch removes friction and increases certainty.")))

S.append(dict(t="bullets", k="13.8", h="Testimonial & proof kit", items=[
    ("Prompt questions", "Give 4–6 questions that pull out specific outcomes (before/after + emotion + result)."),
    ("Video ask", "Simple 20–40s request: “What changed for you?” + “What would you tell someone on the fence?”"),
    ("Photo rights", "Get explicit permission to use photos/videos for marketing (where + how long)."),
    ("Consent", "Especially for sober/conscious spaces: confirm comfort level and preferred name/handle."),
    ("Storage", "One organized folder: event name → raw files → edited assets → approvals."),
    ("Showcase templates", "Pre-made layouts for IG, email, and landing pages so proof gets published fast."),
]))

S.append(dict(t="grid", k="13.8", h="Legacy prompts",
              prompt=("PROMPT", "Answer these three questions — then write one sentence you’ll live by."),
              items=[
                  ("Known for", "What do you want to be known for?"),
                  ("Serve", "Who do you serve in 10 years?"),
                  ("Impact metrics", "What impact metrics matter most?"),
                  ("Write it", "Turn answers into one sentence."),
                  ("Focus", "Choose your top 1 metric for 90 days."),
                  ("Review", "Weekly check-in: track → adjust."),
              ],
              note=("", "If it’s not measurable, it’s not manageable — pick one North Star and let your calendar prove it.")))

S.append(dict(t="table", k="13.8", h="Your next 90‑day action plan",
              cols=("MILESTONE", "OWNER + DATE", "METRICS + RISKS"),
              rows=[
                  ("Book & deliver your next talk", "Create momentum with a real room (or webinar).", "You + D14 (within 2 weeks)", "Metric: 1 booked slot + recording. Risk: perfection → delay."),
                  ("Run your first free workshop", "Value + quick win + clean offer.", "You + D30 (within 30 days)", "Metric: show‑ups + leads captured. Risk: no follow‑up system."),
                  ("Close your first 10 conversations", "Build reps. Track conversion levers.", "You + D90 (by day 90)", "Metric: #calls, #offers, #sales. Risk: unclear CTA / weak urgency."),
              ],
              note=("Weekly review rhythm:", "wins → metrics → bottleneck → next 3 actions (15 minutes, same day each week).")))

S.append(dict(t="grid", k="13.8", h="Community & support", items=[
    ("Group calls", "Live coaching, Q&A, and momentum in real time."),
    ("Peer pods", "Small-group practice, feedback, and weekly check-ins."),
    ("Feedback threads", "Post clips, get notes, iterate fast between talks."),
    ("Events", "Live meetups & challenges that strengthen identity."),
    ("Resource hub", "Templates, swipe files, and drills in one place."),
    ("Accountability", "Commitments, scorecards, and follow-through rhythms."),
]))

S.append(dict(t="quote", k="13.8",
              main="Thank you for doing the work.",
              sub="Remember: you’re not here to be perfect — you’re here to be present. Speak to serve. Lead with truth. And take the first step — today."))

S.append(dict(t="final", k="13.8", h="This is your moment.\nIt starts today.",
              sub="Go do the work — the world is waiting for your voice."))

assert len(S) == 79, f"expected 79 slides, got {len(S)}"
