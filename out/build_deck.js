const pptxgen = require("pptxgenjs");

const BERRY = "6D2E46";
const DEEP = "48192E";
const ROSE = "A26769";
const CREAM = "F7F1E8";
const INK = "2B2320";
const MUTED = "7A6A64";
const GOLD = "C08A3E";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
pres.author = "Luke Hawkins Coaching";
pres.title = "Relationship Resolution Communication Models";

const W = 13.3, H = 7.5, M = 0.7;

function darkSlide() {
  const s = pres.addSlide();
  s.background = { color: DEEP };
  return s;
}
function lightSlide() {
  const s = pres.addSlide();
  s.background = { color: CREAM };
  return s;
}

// numbered badge circle
function badge(s, n, x, y, d, fill, txtColor, size) {
  s.addShape(pres.ShapeType.ellipse, {
    x, y, w: d, h: d, fill: { color: fill },
  });
  s.addText(String(n), {
    x, y, w: d, h: d, align: "center", valign: "middle",
    fontSize: size || 14, bold: true, color: txtColor || "FFFFFF", fontFace: "Calibri", margin: 0,
  });
}

function title(s, text, opts) {
  const o = opts || {};
  s.addText(text, {
    x: M, y: o.y === undefined ? 0.45 : o.y, w: W - M * 2, h: 0.85,
    fontSize: o.size || 34, bold: true,
    color: o.color || BERRY, fontFace: "Cambria", margin: 0, valign: "middle",
  });
}

function kicker(s, text, color) {
  s.addText(text.toUpperCase(), {
    x: M, y: 0.28, w: W - M * 2, h: 0.3,
    fontSize: 11, bold: true, charSpacing: 2,
    color: color || ROSE, fontFace: "Calibri", margin: 0,
  });
}

function footer(s, text) {
  s.addText(text, {
    x: M, y: H - 0.62, w: W - M * 2, h: 0.32,
    fontSize: 10, italic: true, color: MUTED, fontFace: "Calibri", margin: 0,
  });
}

/* ------------------------------------------------------------------ 1 */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, {
    x: 9.5, y: -1.6, w: 5.6, h: 5.6, fill: { color: BERRY, transparency: 35 },
  });
  s.addShape(pres.ShapeType.ellipse, {
    x: 11.2, y: 4.4, w: 3.2, h: 3.2, fill: { color: ROSE, transparency: 60 },
  });
  s.addText("LUKE HAWKINS COACHING  ·  INTERNAL AUDIT", {
    x: M, y: 1.5, w: 8.4, h: 0.3, fontSize: 11, bold: true, charSpacing: 2,
    color: ROSE, fontFace: "Calibri", margin: 0,
  });
  s.addText("Relationship Resolution\nCommunication Models", {
    x: M, y: 2.0, w: 8.6, h: 2.1, fontSize: 44, bold: true,
    color: "FFFFFF", fontFace: "Cambria", lineSpacing: 48, margin: 0,
  });
  s.addText(
    "Every conflict-resolution and repair communication framework found across Google Drive — what each one is, where it lives, and how they fit together.",
    { x: M, y: 4.3, w: 8.0, h: 1.0, fontSize: 15, color: "E8D9DC", fontFace: "Calibri", lineSpacing: 24, margin: 0 }
  );
  s.addText("9 models found  ·  8 source files  ·  Audited 19 August 2026", {
    x: M, y: 5.6, w: 8.6, h: 0.4, fontSize: 13, bold: true, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addNotes("Search covered Google Drive (full-text + title) and Gmail. Gmail contained no standalone model document — only curriculum descriptions referencing this material.");
}

/* ------------------------------------------------------------------ 2 - what was searched */
{
  const s = lightSlide();
  kicker(s, "Scope of the search");
  title(s, "What was searched, and what came back");

  const cards = [
    { n: "9", l: "Distinct models", d: "Named frameworks that govern how two people talk through an upset." },
    { n: "8", l: "Source files", d: "Manuals, coaching interventions and training decks across Drive." },
    { n: "1", l: "Flagship model", d: "The NTT Compassionate Communication Model — the current teaching version." },
    { n: "0", l: "Found in email", d: "Gmail references the material in curriculum copy, but holds no model doc." },
  ];
  const cw = 2.9, gap = 0.34, x0 = M;
  cards.forEach((c, i) => {
    const x = x0 + i * (cw + gap);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.65, w: cw, h: 2.55, rectRadius: 0.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.13, blur: 10, offset: 2, angle: 90 },
    });
    s.addText(c.n, {
      x: x + 0.25, y: 1.85, w: cw - 0.5, h: 0.85, fontSize: 46, bold: true,
      color: i === 3 ? MUTED : BERRY, fontFace: "Cambria", margin: 0, valign: "middle",
    });
    s.addText(c.l, {
      x: x + 0.25, y: 2.72, w: cw - 0.5, h: 0.34, fontSize: 13, bold: true,
      color: INK, fontFace: "Calibri", margin: 0,
    });
    s.addText(c.d, {
      x: x + 0.25, y: 3.1, w: cw - 0.5, h: 0.95, fontSize: 11, color: MUTED,
      fontFace: "Calibri", lineSpacing: 15, margin: 0,
    });
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 4.55, w: W - M * 2, h: 1.75, rectRadius: 0.1, fill: { color: BERRY },
  });
  s.addText("The short answer", {
    x: M + 0.45, y: 4.78, w: 4.0, h: 0.32, fontSize: 12, bold: true, charSpacing: 1.5,
    color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText(
    "There is no single “relationship resolution communication model” file. The material sits in three layers: one live teaching model (Compassionate Communication), an older manual pair (Conscious Request / Conscious Response), and a set of supporting frames that diagnose the conflict before either is used.",
    { x: M + 0.45, y: 5.12, w: W - M * 2 - 0.9, h: 1.0, fontSize: 14, color: "F5E9EC", fontFace: "Calibri", lineSpacing: 21, margin: 0 }
  );
  footer(s, "Sources: Google Drive full-text and title search; Gmail thread search.");
}

/* ------------------------------------------------------------------ 3 - the index */
{
  const s = lightSlide();
  kicker(s, "The inventory");
  title(s, "All nine models at a glance");

  const rows = [
    ["1", "NTT Compassionate Communication Model", "5-step repair conversation", "Session 3 deck (Gottman version)"],
    ["2", "Conflict Resolution Rules + The Mantra", "Ground rules that wrap model 1", "Session 3 deck (Gottman version)"],
    ["3", "The Conscious Request", "6-step way to raise an upset", "NTT Master Prac Manual, p.159"],
    ["4", "The Conscious Response", "6-step way to receive one", "NTT Master Prac Manual, p.159"],
    ["5", "The Process to Relationship Problem Solving", "Self-audit before you speak", "NTT Master Prac Manual, p.159"],
    ["6", "Couples Intervention language pattern", "In-session repair script + Ho’oponopono", "NTT Relationship Coaching for Couples"],
    ["7", "Relationship Coaching Framework (5 steps)", "Ownership + commitment scripts", "Session 3 deck (Gottman version)"],
    ["8", "Gottman’s Four Horsemen + Antidotes", "Diagnose, then replace the pattern", "Manual p.143 / 5-Day Session 4"],
    ["9", "The 4 R’s", "How unspoken conflict escalates", "Relationship Mastery – Master Prac"],
  ];

  const yTop = 1.6, rh = 0.53;
  const cols = [0.5, 4.55, 3.5, 3.35]; // widths
  const xs = [];
  let acc = M;
  cols.forEach((c) => { xs.push(acc); acc += c; });

  const heads = ["", "Model", "What it does", "Where it lives"];
  heads.forEach((h, i) => {
    if (!h) return;
    s.addText(h.toUpperCase(), {
      x: xs[i], y: yTop - 0.38, w: cols[i], h: 0.3, fontSize: 10, bold: true,
      charSpacing: 1.5, color: ROSE, fontFace: "Calibri", margin: 0,
    });
  });

  rows.forEach((r, i) => {
    const y = yTop + i * rh;
    if (i % 2 === 0) {
      s.addShape(pres.ShapeType.rect, {
        x: M - 0.15, y, w: W - M * 2 + 0.3, h: rh, fill: { color: "FFFFFF" },
      });
    }
    badge(s, r[0], xs[0], y + 0.11, 0.31, i < 2 ? BERRY : ROSE, "FFFFFF", 11);
    s.addText(r[1], {
      x: xs[1], y, w: cols[1] - 0.2, h: rh, fontSize: 12.5, bold: true,
      color: INK, fontFace: "Calibri", valign: "middle", margin: 0,
    });
    s.addText(r[2], {
      x: xs[2], y, w: cols[2] - 0.2, h: rh, fontSize: 11.5, color: MUTED,
      fontFace: "Calibri", valign: "middle", margin: 0,
    });
    s.addText(r[3], {
      x: xs[3], y, w: cols[3], h: rh, fontSize: 11.5, color: MUTED,
      fontFace: "Calibri", valign: "middle", margin: 0,
    });
  });
  footer(s, "Models 1–2 are the current teaching version. Models 3–5 are the earlier manual lineage. Models 8–9 diagnose rather than resolve.");
}

/* ------------------------------------------------------------------ 4 - Model 1 */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: -1.5, y: 5.2, w: 4.4, h: 4.4, fill: { color: BERRY, transparency: 45 } });
  s.addText("MODEL 01  ·  THE FLAGSHIP", {
    x: M, y: 1.35, w: 8, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText("The NTT Compassionate\nCommunication Model", {
    x: M, y: 1.8, w: 8.6, h: 1.8, fontSize: 40, bold: true, color: "FFFFFF",
    fontFace: "Cambria", lineSpacing: 44, margin: 0,
  });
  s.addText(
    "Five steps for when you are on the receiving end of something your partner said or did that upset you. Built around recognising the meaning that got triggered — in them, and in you.",
    { x: M, y: 3.85, w: 7.6, h: 1.1, fontSize: 15, color: "E8D9DC", fontFace: "Calibri", lineSpacing: 24, margin: 0 }
  );
  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 5.2, w: 7.6, h: 0.95, rectRadius: 0.1, fill: { color: "FFFFFF", transparency: 88 },
  });
  s.addText("Found in: “Session 3 (John Gottman detailed version)” — slides marked “Not in manual”, meaning this is newer than the printed Master Prac manual.", {
    x: M + 0.35, y: 5.32, w: 6.9, h: 0.7, fontSize: 12, color: "F0E2E6", fontFace: "Calibri", lineSpacing: 18, margin: 0,
  });
  s.addNotes("This is almost certainly the model being asked about. It appears in the Session 3 Gottman deck, Free life coach training slides, Session 3 (2024) and Module 2 slides copy.");
}

/* ------------------------------------------------------------------ 5 - Model 1 steps */
{
  const s = lightSlide();
  kicker(s, "Model 01 · the five steps");
  title(s, "How the conversation runs");

  const steps = [
    ["Set the preframe", "Agree the rules before you start: stay in your hearts, no defensiveness, total self-honesty, approach it as a team."],
    ["Express what you felt", "Ask yourself “what am I feeling?” — then: “When you said or did X, I felt Y.”"],
    ["Own the meaning — both sides", "Invite them to name the meaning that got triggered in them, and name the one that got triggered in you."],
    ["Express what you need", "Ask yourself “what am I needing?” — then say specifically how you want to be treated in future."],
    ["Ask for apology + commitment", "They apologise, state their real intent, and commit to the treatment you named."],
  ];

  const x0 = M, y0 = 1.6, rh = 0.98;
  steps.forEach((st, i) => {
    const y = y0 + i * rh;
    s.addShape(pres.ShapeType.roundRect, {
      x: x0, y, w: W - M * 2, h: 0.86, rectRadius: 0.08,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    badge(s, i + 1, x0 + 0.3, y + 0.21, 0.44, BERRY, "FFFFFF", 16);
    s.addText(st[0], {
      x: x0 + 0.95, y: y + 0.13, w: 3.3, h: 0.32, fontSize: 14, bold: true,
      color: BERRY, fontFace: "Calibri", margin: 0,
    });
    s.addText(st[1], {
      x: x0 + 0.95, y: y + 0.44, w: W - M * 2 - 1.4, h: 0.34, fontSize: 12,
      color: MUTED, fontFace: "Calibri", margin: 0,
    });
  });
  footer(s, "Source: “Session 3 (John Gottman detailed version)”, slides titled “Compassionate Communication through recognising meaning”.");
}

/* ------------------------------------------------------------------ 6 - Model 1 language */
{
  const s = lightSlide();
  kicker(s, "Model 01 · the actual words");
  title(s, "The scripted language");

  const quotes = [
    ["Step 1 — Preframe", "“There’s something I have been carrying and I really want to let it go with you. Do you mind we make a rule for this convo that we will stay in our hearts, that we aren’t going to be defensive with each other, that we will be totally self honest, and we are genuinely going to try to understand one another and approach as team — because I want to be a team with you and let this go.”"],
    ["Step 3 — Owning meaning", "“Do you mind if we explore what the meaning was that got triggered that caused you to say / do that… because I’m sure it wasn’t your intention for me to feel this way.”  →  “The meaning that got triggered in me that caused me to say / do that was…”"],
    ["Step 5 — The repair", "“The meaning that got triggered in me that caused me to act this way was ___. My intention was ___. Obviously that didn’t work and that’s not okay. I am so sorry for creating this feeling in you. The true meaning I want you to know from me is ___. Going forward I will be ___.”"],
  ];

  let y = 1.55;
  quotes.forEach((q) => {
    const h = 1.62;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h, rectRadius: 0.08, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    s.addText(q[0], {
      x: M + 0.4, y: y + 0.17, w: 4.5, h: 0.3, fontSize: 12, bold: true,
      charSpacing: 1, color: ROSE, fontFace: "Calibri", margin: 0,
    });
    s.addText(q[1], {
      x: M + 0.4, y: y + 0.5, w: W - M * 2 - 0.8, h: 1.0, fontSize: 12.5, italic: true,
      color: INK, fontFace: "Calibri", lineSpacing: 18, margin: 0,
    });
    y += h + 0.16;
  });
  footer(s, "Quoted verbatim from the slide deck.");
}

/* ------------------------------------------------------------------ 7 - Model 2 rules */
{
  const s = lightSlide();
  kicker(s, "Model 02");
  title(s, "Conflict Resolution Rules — and The Mantra");

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 1.6, w: 6.6, h: 4.35, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("The rules, before anyone speaks", {
    x: M + 0.4, y: 1.85, w: 5.8, h: 0.35, fontSize: 15, bold: true, color: BERRY, fontFace: "Calibri", margin: 0,
  });
  const rules = [
    "Approach the problem as a team.",
    "All resolution stays in the heart — not allowed to go to the head.",
    "No blame. No defensiveness. No emotional shutdown. No justification.",
    "“Yeah but” is banned. “But” is banned.",
    "Never threaten the relationship.",
  ];
  s.addText(
    rules.map((r, i) => ({ text: r, options: { bullet: true, breakLine: i !== rules.length - 1 } })),
    { x: M + 0.4, y: 2.35, w: 5.8, h: 3.3, fontSize: 13.5, color: INK, fontFace: "Calibri", paraSpaceAfter: 12, lineSpacing: 19, margin: 0 }
  );

  s.addShape(pres.ShapeType.roundRect, {
    x: M + 7.0, y: 1.6, w: W - M * 2 - 7.0, h: 4.35, rectRadius: 0.1, fill: { color: BERRY },
  });
  s.addText("THE MANTRA", {
    x: M + 7.4, y: 1.9, w: 4.3, h: 0.32, fontSize: 12, bold: true, charSpacing: 2, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText("When you are upset with your partner, ask yourself:", {
    x: M + 7.4, y: 2.32, w: 4.3, h: 0.55, fontSize: 13, color: "EBDADE", fontFace: "Calibri", lineSpacing: 19, margin: 0,
  });
  s.addText("What is the meaning\nthat got triggered?", {
    x: M + 7.4, y: 2.95, w: 4.3, h: 0.8, fontSize: 18, bold: true, color: "FFFFFF", fontFace: "Cambria", lineSpacing: 24, margin: 0,
  });
  s.addText("What is the emotion\nthat meaning created?", {
    x: M + 7.4, y: 3.85, w: 4.3, h: 0.8, fontSize: 18, bold: true, color: "FFFFFF", fontFace: "Cambria", lineSpacing: 24, margin: 0,
  });
  s.addText("Then — and only then — run the Compassionate Communication Model.", {
    x: M + 7.4, y: 4.9, w: 4.3, h: 0.8, fontSize: 12.5, italic: true, color: GOLD, fontFace: "Calibri", lineSpacing: 18, margin: 0,
  });
  footer(s, "Source: “Session 3 (John Gottman detailed version)” — slide “Conflict resolution rules”.");
}

/* ------------------------------------------------------------------ 8 - Models 3 & 4 */
{
  const s = lightSlide();
  kicker(s, "Models 03 & 04 · NTT Master Prac Manual, p.159");
  title(s, "The Conscious Request & The Conscious Response");

  const left = [
    "“I need your help.”",
    "“When this happened, I misinterpreted that to mean…”",
    "“I know that’s not true, because I know who you are.”",
    "“I just need some clarity about what specifically happened.”",
    "“What I really need to know specifically is…”",
    "“Can I make a request? In future I’d really appreciate it if you would… Would that work for you?”",
  ];
  const right = [
    "Listen to the request.",
    "“I really apologise for the impact that had on you.” (even if you’re not the source)",
    "“That was certainly not my intent — and there is no excuse.”",
    "“The intent of my action was…” (brief, emotional)",
    "“Obviously that didn’t work. I apologise, there is no excuse.”",
    "“I’m committed to making this work for you — tell me what would.”",
  ];

  const colW = 5.85;
  [[left, "The Conscious Request", "The one who is hurt", M, BERRY],
   [right, "The Conscious Response", "The one being asked", M + colW + 0.3, ROSE]].forEach((c) => {
    const [items, head, sub, x, col] = c;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.65, w: colW, h: 4.5, rectRadius: 0.1, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    s.addText(head, {
      x: x + 0.4, y: 1.88, w: colW - 0.8, h: 0.35, fontSize: 17, bold: true, color: col, fontFace: "Cambria", margin: 0,
    });
    s.addText(sub.toUpperCase(), {
      x: x + 0.4, y: 2.24, w: colW - 0.8, h: 0.26, fontSize: 10, bold: true, charSpacing: 1.5, color: MUTED, fontFace: "Calibri", margin: 0,
    });
    items.forEach((t, i) => {
      const y = 2.62 + i * 0.58;
      badge(s, i + 1, x + 0.4, y + 0.04, 0.28, col, "FFFFFF", 10);
      s.addText(t, {
        x: x + 0.82, y: y - 0.03, w: colW - 1.25, h: 0.52, fontSize: 11.5, color: INK,
        fontFace: "Calibri", lineSpacing: 15, valign: "middle", margin: 0,
      });
    });
  });
  footer(s, "The manual prints these as fill-in-the-blank exercises; answers are given in the text. Section: “How To Deal With Conflict”.");
}

/* ------------------------------------------------------------------ 9 - Model 5 + bridge */
{
  const s = lightSlide();
  kicker(s, "Model 05 · NTT Master Prac Manual");
  title(s, "The Process to Relationship Problem Solving");
  s.addText("Run on yourself before you open your mouth — it disarms the situation first.", {
    x: M, y: 1.32, w: 9.5, h: 0.35, fontSize: 13.5, italic: true, color: MUTED, fontFace: "Calibri", margin: 0,
  });

  const qs = [
    "Am I willing to do something now to change this or make it better?",
    "What meaning have I linked to this in order to feel this way?",
    "Could this be a misinterpretation? Do I have all the information?",
    "What else could this mean?",
    "To feel good now, do I need to change my perception, collect more information, understand their model of the world, or apologise?",
  ];
  qs.forEach((q, i) => {
    const y = 1.85 + i * 0.66;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: 8.05, h: 0.56, rectRadius: 0.07, fill: { color: "FFFFFF" },
    });
    badge(s, i + 1, M + 0.22, y + 0.14, 0.28, ROSE, "FFFFFF", 10);
    s.addText(q, {
      x: M + 0.65, y, w: 7.2, h: 0.56, fontSize: 12, color: INK, fontFace: "Calibri",
      valign: "middle", lineSpacing: 15, margin: 0,
    });
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M + 8.4, y: 1.85, w: 3.1, h: 3.65, rectRadius: 0.1, fill: { color: DEEP },
  });
  s.addText("THE RELATIONSHIP BRIDGE", {
    x: M + 8.7, y: 2.1, w: 2.5, h: 0.55, fontSize: 11, bold: true, charSpacing: 1.5, color: GOLD, fontFace: "Calibri", lineSpacing: 15, margin: 0,
  });
  s.addText(
    "Decide once whether this person loves you. Then stop reassessing at every upset.\n\nQuestioning their intent — or threatening to leave — erodes the bridge. If the bridge goes, communication stops.\n\nWhen hurt, take the initiative to walk across it. Don’t keep score. Real love doesn’t measure.",
    { x: M + 8.7, y: 2.72, w: 2.5, h: 2.6, fontSize: 11, color: "E8D9DC", fontFace: "Calibri", lineSpacing: 16, margin: 0 }
  );
  footer(s, "Also in this section: the four responses to an upset (deny, defend & justify, blame, change) and “The Destruction Path”.");
}

/* ------------------------------------------------------------------ 10 - Model 6 */
{
  const s = lightSlide();
  kicker(s, "Model 06 · NTT Relationship Coaching for Couples");
  title(s, "The in-session couples repair script");

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 1.6, w: 7.5, h: 2.6, rectRadius: 0.1, fill: { color: BERRY },
  });
  s.addText("TAUGHT AT THE END OF SESSION 1", {
    x: M + 0.4, y: 1.82, w: 6.7, h: 0.3, fontSize: 10.5, bold: true, charSpacing: 1.5, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText(
    "“When you said or did X, I felt Y — or I assumed that to mean Y. I know this wasn’t your intention and I want to let this go so I don’t hold onto it. Just so I have some clarity, what was your intention, and was there a reason you said or did that? I’m happy to take responsibility if I contributed. Is it okay in future that you don’t say or do that, because that would help me feel that you care?”",
    { x: M + 0.4, y: 2.2, w: 6.7, h: 1.7, fontSize: 12.5, italic: true, color: "FFFFFF", fontFace: "Calibri", lineSpacing: 19, margin: 0 }
  );

  s.addShape(pres.ShapeType.roundRect, {
    x: M + 7.9, y: 1.6, w: 3.6, h: 2.6, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("Ho’oponopono repair", {
    x: M + 8.25, y: 1.85, w: 2.9, h: 0.3, fontSize: 14, bold: true, color: BERRY, fontFace: "Calibri", margin: 0,
  });
  s.addText("For the heavier wrongs — said face to face, both ways.", {
    x: M + 8.25, y: 2.17, w: 2.9, h: 0.44, fontSize: 10, color: MUTED, fontFace: "Calibri", lineSpacing: 13, margin: 0,
  });
  const hoo = ["I’m sorry", "I love you", "Please forgive me", "Thank you"];
  hoo.forEach((h, i) => {
    const y = 2.68 + i * 0.37;
    s.addShape(pres.ShapeType.ellipse, { x: M + 8.27, y: y + 0.1, w: 0.11, h: 0.11, fill: { color: ROSE } });
    s.addText(h, { x: M + 8.55, y, w: 2.6, h: 0.3, fontSize: 12.5, bold: true, color: INK, fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 4.45, w: W - M * 2, h: 1.5, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("Taught alongside: The 3 Levels of Relationship", {
    x: M + 0.4, y: 4.65, w: 6.0, h: 0.3, fontSize: 13, bold: true, color: BERRY, fontFace: "Calibri", margin: 0,
  });
  const lv = [
    ["1", "It’s all about me", "You focus only on what you’re not getting."],
    ["2", "It’s about equality", "You give back only what you get. You’re measuring."],
    ["3", "It’s all about the other", "You put their needs first and fill them at a 10, unconditionally."],
  ];
  lv.forEach((l, i) => {
    const x = M + 0.4 + i * 3.95;
    badge(s, l[0], x, 5.06, 0.3, i === 2 ? BERRY : ROSE, "FFFFFF", 11);
    s.addText(l[1], { x: x + 0.42, y: 5.02, w: 3.4, h: 0.28, fontSize: 11.5, bold: true, color: INK, fontFace: "Calibri", margin: 0 });
    s.addText(l[2], { x: x + 0.42, y: 5.3, w: 3.4, h: 0.5, fontSize: 10, color: MUTED, fontFace: "Calibri", lineSpacing: 13, margin: 0 });
  });
  footer(s, "The couples intervention runs 5 sessions, 9–13 hours total. Copyright Luke Hawkins Coaching 2019.");
}

/* ------------------------------------------------------------------ 11 - Model 7 */
{
  const s = darkSlide();
  s.addText("MODEL 07", {
    x: M, y: 0.45, w: 8, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText("The Relationship Coaching Framework", {
    x: M, y: 0.82, w: W - M * 2, h: 0.7, fontSize: 34, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0, valign: "middle",
  });
  s.addText("The five-step container the communication models sit inside when you’re coaching a couple.", {
    x: M, y: 1.58, w: 9.5, h: 0.35, fontSize: 13.5, color: "D9C4C9", fontFace: "Calibri", margin: 0,
  });

  const steps = [
    ["Resolve the past", "Top 1–3 core issues, top 3–5 significant emotional events, and which two of the Four Horsemen each partner goes to under stress."],
    ["Meet each other’s needs", "Score how well each is meeting the other’s 5 human needs, 0–10, and define what would make each a 10."],
    ["Take 100% ownership", "“I fully own I have ___. My intent was ___. This does not excuse my behaviour. I am so sorry I hurt you… Please share how I hurt you and the pain I created.”"],
    ["Make a commitment", "“I commit to ___. You can know this is who I am — I will honour my word from this day forward. I love you so much, you mean ___ to me.”"],
    ["An act of love, and polarity", "Eye contact held; he holds loving presence, she openly receives; when she feels the depth of it, they embrace."],
  ];
  steps.forEach((st, i) => {
    const y = 2.15 + i * 0.93;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h: 0.82, rectRadius: 0.08, fill: { color: "FFFFFF", transparency: 92 },
    });
    badge(s, i + 1, M + 0.28, y + 0.19, 0.44, GOLD, DEEP, 16);
    s.addText(st[0], {
      x: M + 0.92, y: y + 0.11, w: 3.2, h: 0.3, fontSize: 13.5, bold: true, color: "FFFFFF", fontFace: "Calibri", margin: 0,
    });
    s.addText(st[1], {
      x: M + 4.2, y: y + 0.08, w: W - M * 2 - 4.6, h: 0.66, fontSize: 11, color: "E0CED3",
      fontFace: "Calibri", lineSpacing: 15, valign: "middle", margin: 0,
    });
  });
  s.addText("An 8-step Gottman-based extension follows: love maps, positive perspective, life dreams, shared meaning.", {
    x: M, y: 6.85, w: W - M * 2, h: 0.3, fontSize: 10, italic: true, color: ROSE, fontFace: "Calibri", margin: 0,
  });
}

/* ------------------------------------------------------------------ 12 - Model 8 */
{
  const s = lightSlide();
  kicker(s, "Model 08 · “The 4 Reasons Why Relationships End”");
  title(s, "The Four Horsemen — and their antidotes");

  const h = [
    ["Criticism", "“You always talk about yourself. You are so selfish.”", "“I’m feeling left out by our talk tonight. Can we please talk about my day?”"],
    ["Defensiveness", "“It’s not my fault we’re always late, it’s your fault.”", "“Well, part of this is my problem — I need to think more about time.”"],
    ["Contempt", "“You’re an idiot.”", "“I’m proud of the way you handled that teacher conference.”"],
    ["Stonewalling", "Silent treatment — you withdraw, you withhold, I can’t get a response.", "Name the flooding, take a real break, then come back and re-engage."],
  ];

  s.addText("THE PATTERN", { x: M + 0.4, y: 1.55, w: 3.0, h: 0.26, fontSize: 10, bold: true, charSpacing: 1.5, color: ROSE, fontFace: "Calibri", margin: 0 });
  s.addText("WHAT IT SOUNDS LIKE", { x: M + 3.55, y: 1.55, w: 3.5, h: 0.26, fontSize: 10, bold: true, charSpacing: 1.5, color: ROSE, fontFace: "Calibri", margin: 0 });
  s.addText("THE ANTIDOTE", { x: M + 7.6, y: 1.55, w: 3.5, h: 0.26, fontSize: 10, bold: true, charSpacing: 1.5, color: GOLD, fontFace: "Calibri", margin: 0 });

  h.forEach((r, i) => {
    const y = 1.9 + i * 1.08;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h: 0.96, rectRadius: 0.08, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    badge(s, i + 1, M + 0.28, y + 0.3, 0.36, BERRY, "FFFFFF", 13);
    s.addText(r[0], { x: M + 0.78, y, w: 2.6, h: 0.96, fontSize: 14, bold: true, color: INK, fontFace: "Calibri", valign: "middle", margin: 0 });
    s.addText(r[1], { x: M + 3.55, y, w: 3.85, h: 0.96, fontSize: 11, italic: true, color: MUTED, fontFace: "Calibri", valign: "middle", lineSpacing: 15, margin: 0 });
    s.addShape(pres.ShapeType.roundRect, {
      x: M + 7.5, y: y + 0.1, w: W - M * 2 - 7.7, h: 0.76, rectRadius: 0.06, fill: { color: CREAM },
    });
    s.addText(r[2], { x: M + 7.7, y: y + 0.1, w: W - M * 2 - 8.1, h: 0.76, fontSize: 11, color: BERRY, fontFace: "Calibri", valign: "middle", lineSpacing: 15, margin: 0 });
  });
  footer(s, "Gottman’s Four Horsemen. Manual p.143; taught live in 5-Day Session 4 and NTT Master Prac.");
}

/* ------------------------------------------------------------------ 13 - Model 9 */
{
  const s = lightSlide();
  kicker(s, "Model 09 · why the conversation was needed");
  title(s, "The 4 R’s — how unspoken conflict escalates");

  const rs = [
    ["Resistance", "Your partner does something that bothers you — but you choose not to say anything."],
    ["Resentment", "The resistance goes deeper. Tension builds that you still choose not to address."],
    ["Rejection", "Toxicity and abrasiveness. You get harsh with each other."],
    ["Repression", "Numbness and learned helplessness. You lower your expectations and meet your needs elsewhere — work, kids, friends."],
  ];
  const cw = 2.9, gap = 0.3;
  rs.forEach((r, i) => {
    const x = M + i * (cw + gap);
    const shade = [ROSE, "8E5261", BERRY, DEEP][i];
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.75, w: cw, h: 2.9, rectRadius: 0.1, fill: { color: shade },
    });
    s.addText("R" + (i + 1), {
      x: x + 0.3, y: 1.98, w: cw - 0.6, h: 0.5, fontSize: 26, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0,
    });
    s.addText(r[0], {
      x: x + 0.3, y: 2.52, w: cw - 0.6, h: 0.35, fontSize: 15, bold: true, color: "FFFFFF", fontFace: "Calibri", margin: 0,
    });
    s.addText(r[1], {
      x: x + 0.3, y: 2.95, w: cw - 0.6, h: 1.5, fontSize: 11, color: "F2E4E7", fontFace: "Calibri", lineSpacing: 16, margin: 0,
    });
    if (i < 3) {
      s.addText("›", {
        x: x + cw - 0.02, y: 2.9, w: gap + 0.04, h: 0.4, fontSize: 20, bold: true,
        align: "center", color: ROSE, fontFace: "Calibri", margin: 0,
      });
    }
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 4.95, w: W - M * 2, h: 1.15, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("How do you escape the 4 R’s?", {
    x: M + 0.4, y: 5.12, w: 4.5, h: 0.32, fontSize: 14, bold: true, color: BERRY, fontFace: "Calibri", margin: 0,
  });
  s.addText(
    "Reverse the negative stacking and create mutual patterns of openness, connection and love. To have a good relationship you need five times as many positive communications as negative ones — to have a great one, you need more.",
    { x: M + 0.4, y: 5.46, w: W - M * 2 - 0.8, h: 0.55, fontSize: 12, color: MUTED, fontFace: "Calibri", lineSpacing: 17, margin: 0 }
  );
  footer(s, "Source: “Relationship Mastery – Master Prac”, within The 5 Relationship Stressors.");
}

/* ------------------------------------------------------------------ 14 - file index */
{
  const s = lightSlide();
  kicker(s, "Where everything lives");
  title(s, "Source files in Drive");

  const files = [
    ["Session 3 (John Gottman detailed version)", "Google Slides", "Models 1, 2, 7 — the current teaching versions"],
    ["NTT Master Prac Manual", "Google Doc", "Models 3, 4, 5, 8 — “How To Deal With Conflict”, p.159"],
    ["NTT Relationship Coaching for Couples", "Doc + 2 PDFs", "Model 6 — the 5-session paid intervention"],
    ["Relationship Mastery – Master Prac", "Google Doc", "Model 9, the 5 Relationship Stressors, Gottman notes"],
    ["Free life coach training slides / Session 3 / Module 2 slides copy", "Google Slides", "Repeat copies of the Compassionate Communication Model"],
    ["5-Day training — Session 4 decks (Jun, Aug, Sep, Oct 2025)", "Google Slides", "Model 8 with antidotes; the 3 U’s / 3 C’s of intimacy"],
    ["Ignite Love & Passion slides (2020, 2021, Georgina)", "Google Slides", "Earlier live-event relationship material"],
  ];

  files.forEach((f, i) => {
    const y = 1.6 + i * 0.72;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h: 0.62, rectRadius: 0.07, fill: { color: "FFFFFF" },
    });
    s.addShape(pres.ShapeType.ellipse, { x: M + 0.28, y: y + 0.18, w: 0.26, h: 0.26, fill: { color: i < 4 ? BERRY : ROSE } });
    s.addText(f[0], { x: M + 0.7, y, w: 5.7, h: 0.62, fontSize: 12, bold: true, color: INK, fontFace: "Calibri", valign: "middle", margin: 0 });
    s.addText(f[1], { x: M + 6.5, y, w: 1.7, h: 0.62, fontSize: 10.5, color: MUTED, fontFace: "Calibri", valign: "middle", margin: 0 });
    s.addText(f[2], { x: M + 8.3, y, w: W - M * 2 - 8.4, h: 0.62, fontSize: 10.5, color: MUTED, fontFace: "Calibri", valign: "middle", lineSpacing: 14, margin: 0 });
  });
  footer(s, "Gmail was searched too — it references this material in curriculum copy and “8 Secrets to an Extraordinary Love Life” promos, but holds no model document.");
}

/* ------------------------------------------------------------------ 15 - how they fit */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: 10.6, y: 5.0, w: 4.4, h: 4.4, fill: { color: BERRY, transparency: 45 } });
  s.addText("PUTTING IT TOGETHER", {
    x: M, y: 0.5, w: 8, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText("How the nine fit into one sequence", {
    x: M, y: 0.88, w: W - M * 2, h: 0.7, fontSize: 34, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0, valign: "middle",
  });

  const phases = [
    ["Diagnose", "Models 8 & 9", "Which Horseman does each partner ride? How far down the 4 R’s have they stacked?"],
    ["Prepare", "Models 5 & 2", "Run the self-audit and The Mantra. Agree the rules. Find the meaning you attached."],
    ["Speak", "Models 1, 3 & 6", "Preframe, express the feeling, own the meaning both ways, state the need."],
    ["Receive", "Model 4", "Apologise for the impact, clarify intent, commit to change."],
    ["Rebuild", "Models 7", "Ownership, commitment, an act of love — then needs, dreams and shared meaning."],
  ];

  phases.forEach((p, i) => {
    const y = 1.85 + i * 1.0;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2 - 1.2, h: 0.86, rectRadius: 0.08, fill: { color: "FFFFFF", transparency: 92 },
    });
    s.addText(p[0], {
      x: M + 0.45, y: y + 0.1, w: 2.1, h: 0.34, fontSize: 16, bold: true, color: GOLD, fontFace: "Cambria", margin: 0,
    });
    s.addText(p[1], {
      x: M + 0.45, y: y + 0.46, w: 2.1, h: 0.28, fontSize: 10, bold: true, charSpacing: 1, color: ROSE, fontFace: "Calibri", margin: 0,
    });
    s.addText(p[2], {
      x: M + 2.8, y, w: W - M * 2 - 4.3, h: 0.86, fontSize: 12, color: "E8D9DC",
      fontFace: "Calibri", valign: "middle", lineSpacing: 17, margin: 0,
    });
  });
  s.addNotes("Suggested consolidation: the manual pair (Conscious Request / Response) and the Compassionate Communication Model overlap heavily. One canonical version would remove the ambiguity students hit when both are taught.");
}

/* ------------------------------------------------------------------ 16 - closing */
{
  const s = lightSlide();
  kicker(s, "Recommendation");
  title(s, "One thing worth fixing");

  const notes = [
    ["The overlap", "The Conscious Request / Response pair and the Compassionate Communication Model teach the same conversation with different words. Students who read the manual and watch the deck get two scripts.", BERRY],
    ["The gap", "The Compassionate Communication Model is marked “Not in manual” on every slide. The newest and best version of this material has never made it into the printed curriculum.", ROSE],
    ["The fix", "Name one canonical model, fold the Conscious Response steps into Step 5, and get it into the Master Prac manual and the couples intervention document.", DEEP],
  ];

  notes.forEach((n, i) => {
    const y = 1.65 + i * 1.55;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h: 1.38, rectRadius: 0.1, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    s.addShape(pres.ShapeType.ellipse, { x: M + 0.4, y: y + 0.45, w: 0.5, h: 0.5, fill: { color: n[2] } });
    s.addText(String(i + 1), {
      x: M + 0.4, y: y + 0.45, w: 0.5, h: 0.5, fontSize: 17, bold: true, align: "center",
      valign: "middle", color: "FFFFFF", fontFace: "Cambria", margin: 0,
    });
    s.addText(n[0], {
      x: M + 1.15, y: y + 0.22, w: 3.0, h: 0.35, fontSize: 16, bold: true, color: n[2], fontFace: "Cambria", margin: 0,
    });
    s.addText(n[1], {
      x: M + 1.15, y: y + 0.6, w: W - M * 2 - 1.7, h: 0.65, fontSize: 12.5, color: INK,
      fontFace: "Calibri", lineSpacing: 18, margin: 0,
    });
  });
  footer(s, "Prepared from Google Drive and Gmail, 19 August 2026.");
}

pres.writeFile({ fileName: "/home/user/mybot/out/Relationship-Resolution-Communication-Models.pptx" })
  .then((f) => console.log("written:", f));
