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
pres.title = "The NTT Relationship Resolution Session";

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
function badge(s, n, x, y, d, fill, txtColor, size) {
  s.addShape(pres.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: fill } });
  s.addText(String(n), {
    x, y, w: d, h: d, align: "center", valign: "middle",
    fontSize: size || 14, bold: true, color: txtColor || "FFFFFF", fontFace: "Calibri", margin: 0,
  });
}
function title(s, text, opts) {
  const o = opts || {};
  s.addText(text, {
    x: M, y: o.y === undefined ? 0.45 : o.y, w: W - M * 2, h: 0.85,
    fontSize: o.size || 32, bold: true,
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
function scriptCard(s, x, y, w, h, label, quote, opts) {
  const o = opts || {};
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.1,
    fill: { color: o.fill || BERRY },
  });
  s.addText(label.toUpperCase(), {
    x: x + 0.4, y: y + 0.2, w: w - 0.8, h: 0.3, fontSize: 10.5, bold: true,
    charSpacing: 1.5, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText(quote, {
    x: x + 0.4, y: y + 0.55, w: w - 0.8, h: h - 0.75, fontSize: o.qSize || 13, italic: true,
    color: "FFFFFF", fontFace: "Calibri", lineSpacing: (o.qSize || 13) * 1.5, margin: 0, valign: "top",
  });
}

/* ------------------------------------------------------------------ 1 · title */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: 9.5, y: -1.6, w: 5.6, h: 5.6, fill: { color: BERRY, transparency: 35 } });
  s.addShape(pres.ShapeType.ellipse, { x: 11.2, y: 4.4, w: 3.2, h: 3.2, fill: { color: ROSE, transparency: 60 } });
  s.addText("LUKE HAWKINS COACHING  ·  STUDENT TRAINING", {
    x: M, y: 1.5, w: 8.4, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: ROSE, fontFace: "Calibri", margin: 0,
  });
  s.addText("The NTT Relationship\nResolution Session", {
    x: M, y: 2.0, w: 8.6, h: 2.1, fontSize: 44, bold: true, color: "FFFFFF", fontFace: "Cambria", lineSpacing: 48, margin: 0,
  });
  s.addText(
    "A 9-phase facilitated repair process for coaching couples through conflict — from the accountability contract to the closing ritual.",
    { x: M, y: 4.3, w: 8.0, h: 0.9, fontSize: 15, color: "E8D9DC", fontFace: "Calibri", lineSpacing: 24, margin: 0 }
  );
  s.addText("Built from live client sessions  ·  Teach it exactly in this order", {
    x: M, y: 5.5, w: 8.6, h: 0.4, fontSize: 13, bold: true, color: GOLD, fontFace: "Calibri", margin: 0,
  });
}

/* ------------------------------------------------------------------ 2 · map */
{
  const s = lightSlide();
  kicker(s, "The session at a glance");
  title(s, "Nine phases: contract → truth → repair → ritual", { size: 28 });

  const phases = [
    ["1", "Accountability Contract"],
    ["2", "Teach the Diagnosis"],
    ["3", "The 10 Frames"],
    ["4", "The Two Structures"],
    ["5", "The Exchange"],
    ["6", "The Needs Audit"],
    ["7", "Vision & Commitment"],
    ["8", "Receiving the Hurt"],
    ["9", "The Repair Ritual"],
  ];
  const cw = 3.8, ch = 1.28, gx = 0.3, gy = 0.3;
  phases.forEach((p, i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = M + col * (cw + gx), y = 1.7 + row * (ch + gy);
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w: cw, h: ch, rectRadius: 0.09,
      fill: { color: row === 2 ? BERRY : "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.12, blur: 8, offset: 2, angle: 90 },
    });
    badge(s, p[0], x + 0.28, y + 0.37, 0.52, row === 2 ? GOLD : BERRY, row === 2 ? DEEP : "FFFFFF", 18);
    s.addText(p[1], {
      x: x + 1.0, y, w: cw - 1.2, h: ch, fontSize: 15, bold: true,
      color: row === 2 ? "FFFFFF" : INK, fontFace: "Calibri", valign: "middle", lineSpacing: 19, margin: 0,
    });
  });
  footer(s, "Phases 1–4 set the container. Phases 5–7 do the work. Phases 8–9 seal it. Never skip the ritual.");
}

/* ------------------------------------------------------------------ 3 · pre-work */
{
  const s = lightSlide();
  kicker(s, "Before the session");
  title(s, "Pre-work: notes in hand, gates answered");

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 1.65, w: 7.3, h: 4.4, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("Each partner privately prepares:", {
    x: M + 0.4, y: 1.9, w: 6.5, h: 0.35, fontSize: 15, bold: true, color: BERRY, fontFace: "Calibri", margin: 0,
  });
  const prep = [
    "Their top 5 hurtful experiences in the relationship, written as “when you said / did X…”",
    "Their top 1–3 core issues in the relationship.",
    "They bring these as written notes — and do NOT share them with each other beforehand.",
  ];
  s.addText(
    prep.map((r, i) => ({ text: r, options: { bullet: true, breakLine: i !== prep.length - 1 } })),
    { x: M + 0.4, y: 2.4, w: 6.5, h: 2.2, fontSize: 13.5, color: INK, fontFace: "Calibri", paraSpaceAfter: 14, lineSpacing: 20, margin: 0 }
  );
  s.addText("Why written notes matter: in the exchange (Phase 5) they read from their notes 1–3 items at a time. Notes keep the session structured instead of becoming a live argument.", {
    x: M + 0.4, y: 4.7, w: 6.5, h: 1.1, fontSize: 12, italic: true, color: MUTED, fontFace: "Calibri", lineSpacing: 17, margin: 0,
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M + 7.7, y: 1.65, w: W - M * 2 - 7.7, h: 4.4, rectRadius: 0.1, fill: { color: DEEP },
  });
  s.addText("THE TWO GATE QUESTIONS", {
    x: M + 8.1, y: 1.95, w: 3.4, h: 0.3, fontSize: 11, bold: true, charSpacing: 1.5, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  s.addText("1.  Is this relationship worth saving?", {
    x: M + 8.1, y: 2.45, w: 3.4, h: 0.7, fontSize: 15, bold: true, color: "FFFFFF", fontFace: "Cambria", lineSpacing: 20, margin: 0,
  });
  s.addText("2.  Are you willing to do whatever it takes to make it work?", {
    x: M + 8.1, y: 3.2, w: 3.4, h: 0.95, fontSize: 15, bold: true, color: "FFFFFF", fontFace: "Cambria", lineSpacing: 20, margin: 0,
  });
  s.addText("Both partners must answer YES to both before you book the session. Anything less than a clear yes is its own conversation first.", {
    x: M + 8.1, y: 4.35, w: 3.4, h: 1.4, fontSize: 11.5, color: "E8D9DC", fontFace: "Calibri", lineSpacing: 17, margin: 0,
  });
  footer(s, "From the NTT couples intervention: these two questions are asked before any relationship coaching begins.");
}

/* ------------------------------------------------------------------ 4 · phase 1 */
{
  const s = lightSlide();
  kicker(s, "Phase 1");
  title(s, "The Accountability Contract");
  s.addText("Get explicit permission before anything else. This is your licence for every hard intervention later — without it, truth feels like attack.", {
    x: M, y: 1.32, w: 11.9, h: 0.6, fontSize: 13.5, italic: true, color: MUTED, fontFace: "Calibri", lineSpacing: 19, margin: 0,
  });

  scriptCard(s, M, 2.0, W - M * 2, 2.5, "Say this — verbatim",
    "“I’m going to be holding you both accountable for your behaviours and the impact of them on your partner — and that means you are accountable to change and to getting the relationship you want. Do I have permission from you both to do that?\n\nNow, I may also say things that you don’t want to hear — but need to hear — to get the relationship you want. Is that okay?”",
    { qSize: 14 });

  const checks = [
    ["Get a verbal YES from each partner individually", "A nod is not a contract. Make each of them say it."],
    ["Watch for the hesitant yes", "Hesitation is information — pause and dig into it before moving on."],
    ["Refer back to it all session", "“Remember what you gave me permission to do?” resets the room instantly."],
  ];
  checks.forEach((c, i) => {
    const x = M + i * 4.05;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 4.75, w: 3.85, h: 1.45, rectRadius: 0.09, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    s.addText(c[0], { x: x + 0.3, y: 4.95, w: 3.25, h: 0.55, fontSize: 12, bold: true, color: BERRY, fontFace: "Calibri", lineSpacing: 15, margin: 0 });
    s.addText(c[1], { x: x + 0.3, y: 5.5, w: 3.25, h: 0.6, fontSize: 10.5, color: MUTED, fontFace: "Calibri", lineSpacing: 14, margin: 0 });
  });
}

/* ------------------------------------------------------------------ 5 · phase 2 */
{
  const s = lightSlide();
  kicker(s, "Phase 2");
  title(s, "Teach the Diagnosis — then check privately");

  // mechanism chain
  const chain = [
    ["The 4 Horsemen", "Criticism · Defensiveness · Contempt · Stonewalling. Frame them as the only reasons a relationship fails."],
    ["Why they fire", "A “not enough” trigger response — and/or emotional needs not being met."],
    ["What they cost", "Every horseman lowers emotional safety and trust."],
    ["Where it ends", "When safety and trust drop, intimacy goes down. That’s the mechanism."],
  ];
  const cw = 2.9, gap = 0.3;
  chain.forEach((c, i) => {
    const x = M + i * (cw + gap);
    const shade = [BERRY, "8E5261", ROSE, DEEP][i];
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.7, w: cw, h: 2.5, rectRadius: 0.1, fill: { color: shade } });
    s.addText(c[0], { x: x + 0.28, y: 1.95, w: cw - 0.56, h: 0.6, fontSize: 15, bold: true, color: "FFFFFF", fontFace: "Cambria", lineSpacing: 19, margin: 0 });
    s.addText(c[1], { x: x + 0.28, y: 2.6, w: cw - 0.56, h: 1.45, fontSize: 11, color: "F2E4E7", fontFace: "Calibri", lineSpacing: 16, margin: 0 });
    if (i < 3) s.addText("›", { x: x + cw - 0.02, y: 2.7, w: gap + 0.04, h: 0.4, fontSize: 20, bold: true, align: "center", color: ROSE, fontFace: "Calibri", margin: 0 });
  });
  s.addText("“We’re not here to judge the behaviour. We’re here to find the trigger underneath it.”", {
    x: M, y: 4.35, w: W - M * 2, h: 0.4, fontSize: 14, italic: true, bold: true, color: BERRY, fontFace: "Cambria", align: "center", margin: 0,
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 4.95, w: W - M * 2, h: 1.35, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("2b — The private check", {
    x: M + 0.4, y: 5.12, w: 4.5, h: 0.32, fontSize: 14, bold: true, color: BERRY, fontFace: "Calibri", margin: 0,
  });
  s.addText(
    "Take each partner aside individually: “Is there anything else, behind closed doors, that you haven’t shared?” You need the full picture before the exchange begins — a surprise in Phase 5 derails the whole session.",
    { x: M + 0.4, y: 5.46, w: W - M * 2 - 0.8, h: 0.7, fontSize: 12.5, color: MUTED, fontFace: "Calibri", lineSpacing: 18, margin: 0 }
  );
}

/* ------------------------------------------------------------------ 6 · phase 3 frames */
{
  const s = darkSlide();
  s.addText("PHASE 3", { x: M, y: 0.35, w: 8, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GOLD, fontFace: "Calibri", margin: 0 });
  s.addText("Install the 10 Frames for Resolution", {
    x: M, y: 0.7, w: W - M * 2, h: 0.65, fontSize: 32, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0, valign: "middle",
  });
  s.addText("Teach these BEFORE anyone expresses anything. They are the rules of engagement for the session — and for the relationship.", {
    x: M, y: 1.4, w: 11.5, h: 0.35, fontSize: 12.5, color: "D9C4C9", fontFace: "Calibri", margin: 0,
  });

  const frames = [
    ["Seek to understand before being understood", "Understanding always precedes advice."],
    ["Stay in the heart", "Not allowed to go to the head."],
    ["Own that you create their experience", "You are responsible for the feelings you create in your partner."],
    ["Treat them how you’d like to be treated", ""],
    ["Operate at Level 3", "It’s all about the other — fill their needs at a 10, unconditionally."],
    ["Own your own triggers", ""],
    ["Every behaviour is love or a cry for help", "There is no third category."],
    ["Non-judgement", ""],
    ["Genuine, sincere apologies", "They must feel you understand the impact — and hear a real commitment not to repeat it."],
    ["Never question their intent", ""],
  ];
  const colW = 5.85, rh = 0.86;
  frames.forEach((f, i) => {
    const col = i < 5 ? 0 : 1;
    const row = i % 5;
    const x = M + col * (colW + 0.3), y = 1.95 + row * (rh + 0.08);
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w: colW, h: rh, rectRadius: 0.08, fill: { color: "FFFFFF", transparency: 92 },
    });
    badge(s, i + 1, x + 0.22, y + (rh - 0.36) / 2, 0.36, GOLD, DEEP, 13);
    const hasSub = !!f[1];
    s.addText(f[0], {
      x: x + 0.72, y: hasSub ? y + 0.1 : y, w: colW - 0.95, h: hasSub ? 0.34 : rh,
      fontSize: 12.5, bold: true, color: "FFFFFF", fontFace: "Calibri",
      valign: hasSub ? "top" : "middle", lineSpacing: 15, margin: 0,
    });
    if (hasSub) s.addText(f[1], {
      x: x + 0.72, y: y + 0.42, w: colW - 0.95, h: rh - 0.48, fontSize: 10, color: "E0CED3",
      fontFace: "Calibri", lineSpacing: 13, margin: 0,
    });
  });
  s.addText("Coach’s job: enforce these live. The moment anyone breaks a frame — a “yeah but”, an eye-roll, a counter-attack — stop the room and name it.", {
    x: M, y: 6.75, w: W - M * 2, h: 0.35, fontSize: 11, italic: true, color: ROSE, fontFace: "Calibri", margin: 0,
  });
}

/* ------------------------------------------------------------------ 7 · phase 4 structures */
{
  const s = lightSlide();
  kicker(s, "Phase 4");
  title(s, "Teach the Two Structures");
  s.addText("Put both scripts up before the exchange, so each partner knows exactly what to say in each seat.", {
    x: M, y: 1.3, w: 10.5, h: 0.35, fontSize: 13, italic: true, color: MUTED, fontFace: "Calibri", margin: 0,
  });

  const colW = 5.85;
  const req = [
    "“When you said or did X, I felt Y.”",
    "“I know this wasn’t your intention — do you mind sharing what meaning you think got triggered inside of you? Where do you think that comes from?”",
    "(Partner answers: “My reason for my behaviour was… the meaning that got triggered in me was…”)",
    "“Is it okay if in the future you ______?” — state specifically how you want your needs met.",
  ];
  const apo = [
    "“I am sorry for ______.” — describe specifically what you did, the way THEY perceived it, not the way you meant it.",
    "“My intention was X.”",
    "“Obviously that didn’t work, and I’m sorry for hurting you.”",
    "“How can I meet your needs in the future?”",
    "Get agreement and commitment.",
  ];
  [[req, "A · The Conscious Request", "Spoken by the one who was hurt", M, BERRY],
   [apo, "B · The Conscious Apology", "Spoken by the one who caused the hurt", M + colW + 0.3, ROSE]].forEach((c) => {
    const [items, head, sub, x, col] = c;
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.8, w: colW, h: 4.55, rectRadius: 0.1, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    s.addText(head, { x: x + 0.4, y: 2.02, w: colW - 0.8, h: 0.35, fontSize: 16, bold: true, color: col, fontFace: "Cambria", margin: 0 });
    s.addText(sub.toUpperCase(), { x: x + 0.4, y: 2.38, w: colW - 0.8, h: 0.26, fontSize: 9.5, bold: true, charSpacing: 1.5, color: MUTED, fontFace: "Calibri", margin: 0 });
    let y = 2.78;
    items.forEach((t, i) => {
      const lines = Math.ceil(t.length / 62);
      const h = Math.max(0.42, lines * 0.24 + 0.1);
      badge(s, i + 1, x + 0.4, y + 0.03, 0.28, col, "FFFFFF", 10);
      s.addText(t, {
        x: x + 0.82, y, w: colW - 1.25, h, fontSize: 11, color: INK,
        fontFace: "Calibri", lineSpacing: 15, valign: "top", margin: 0,
      });
      y += h + 0.12;
    });
  });
  footer(s, "An apology isn’t complete until it’s RECEIVED as sincere. Teach students to check: “Did that land? Did you feel it?”");
}

/* ------------------------------------------------------------------ 8 · phase 5 exchange */
{
  const s = lightSlide();
  kicker(s, "Phase 5 · the heart of the session");
  title(s, "The Exchange");

  scriptCard(s, M, 1.6, 7.3, 1.35, "Open with",
    "“Who wants to own their role first — and be the first to listen?”",
    { qSize: 15 });
  s.addText("Whoever volunteers to listen first sets the tone. Acknowledge the courage out loud.", {
    x: M, y: 3.1, w: 7.3, h: 0.35, fontSize: 11.5, italic: true, color: MUTED, fontFace: "Calibri", margin: 0,
  });

  const steps = [
    ["Partner A shares their 5 experiences — 1 to 3 at a time, never the whole list", "Partner B listens using the frames, then responds with the Conscious Apology structure."],
    ["Partner A names their top 1–3 core issues", "Partner B explains and OWNS why they do it — the trigger underneath, not a justification."],
    ["Swap", "Partner B shares; Partner A listens and responds the same way."],
  ];
  steps.forEach((st, i) => {
    const y = 3.6 + i * 1.0;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: 7.3, h: 0.9, rectRadius: 0.08, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    badge(s, i + 1, M + 0.26, y + 0.21, 0.44, BERRY, "FFFFFF", 16);
    s.addText(st[0], { x: M + 0.88, y: y + 0.1, w: 6.2, h: 0.36, fontSize: 11.5, bold: true, color: BERRY, fontFace: "Calibri", lineSpacing: 14, margin: 0 });
    s.addText(st[1], { x: M + 0.88, y: y + 0.46, w: 6.2, h: 0.42, fontSize: 10, color: MUTED, fontFace: "Calibri", lineSpacing: 13, margin: 0 });
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M + 7.7, y: 1.6, w: W - M * 2 - 7.7, h: 4.95, rectRadius: 0.1, fill: { color: DEEP },
  });
  s.addText("THE PACING RULE", { x: M + 8.1, y: 1.9, w: 3.4, h: 0.3, fontSize: 11, bold: true, charSpacing: 1.5, color: GOLD, fontFace: "Calibri", margin: 0 });
  s.addText("Small batches.\nFull completion.", {
    x: M + 8.1, y: 2.35, w: 3.4, h: 1.0, fontSize: 20, bold: true, color: "FFFFFF", fontFace: "Cambria", lineSpacing: 26, margin: 0,
  });
  s.addText(
    "Each hurt gets expressed, met with a conscious apology, and CLOSED before the next one opens.\n\nThe coach controls pacing — 1–3 items at a time is a facilitation skill, not a suggestion. Dumping the whole list creates flooding; batching creates repair.",
    { x: M + 8.1, y: 3.5, w: 3.4, h: 2.8, fontSize: 11.5, color: "E8D9DC", fontFace: "Calibri", lineSpacing: 17, margin: 0 }
  );
  footer(s, "Watch for defensiveness while listening — it’s the most common frame-break in this phase.");
}

/* ------------------------------------------------------------------ 9 · phase 6 needs audit */
{
  const s = lightSlide();
  kicker(s, "Phase 6");
  title(s, "The Needs Audit — the gap is the lesson");

  const steps = [
    ["Self-score first", "Each partner rates THEMSELVES: “How well am I meeting all of their needs, 0–10?”"],
    ["Check it against reality", "Compare their self-score with what their partner actually experiences."],
    ["Own the gap", "The distance between the two numbers is the lesson. Get them to own it — no defending the self-score."],
    ["Define the 10", "The other partner expresses specifically what would make it a 10 — and the first commits to it."],
  ];
  const cw = 2.9, gap = 0.3;
  steps.forEach((st, i) => {
    const x = M + i * (cw + gap);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.75, w: cw, h: 3.1, rectRadius: 0.1, fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
    });
    s.addShape(pres.ShapeType.ellipse, { x: x + 0.3, y: 2.0, w: 0.46, h: 0.46, fill: { color: BERRY } });
    s.addText(String(i + 1), { x: x + 0.3, y: 2.0, w: 0.46, h: 0.46, align: "center", valign: "middle", fontSize: 16, bold: true, color: "FFFFFF", fontFace: "Calibri", margin: 0 });
    s.addText(st[0], { x: x + 0.3, y: 2.6, w: cw - 0.6, h: 0.68, fontSize: 14, bold: true, color: BERRY, fontFace: "Calibri", lineSpacing: 17, margin: 0 });
    s.addText(st[1], { x: x + 0.3, y: 3.3, w: cw - 0.6, h: 1.42, fontSize: 11, color: MUTED, fontFace: "Calibri", lineSpacing: 16, margin: 0 });
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 5.15, w: W - M * 2, h: 1.15, rectRadius: 0.1, fill: { color: BERRY },
  });
  s.addText("Do BOTH directions. He audits how he meets her needs; she audits how she meets his. The audit is symmetrical even when the hurt isn’t.", {
    x: M + 0.45, y: 5.15, w: W - M * 2 - 0.9, h: 1.15, fontSize: 14, bold: true, color: "FFFFFF", fontFace: "Calibri", valign: "middle", lineSpacing: 20, margin: 0,
  });
}

/* ------------------------------------------------------------------ 10 · phase 7 vision */
{
  const s = lightSlide();
  kicker(s, "Phase 7 · optional but powerful");
  title(s, "The Relationship Vision & the Real Commitment");

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 1.7, w: 5.8, h: 4.3, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("The Vision", { x: M + 0.4, y: 1.95, w: 5.0, h: 0.35, fontSize: 17, bold: true, color: BERRY, fontFace: "Cambria", margin: 0 });
  s.addText(
    "Each partner expresses the relationship they want:\n\nWhat will they feel together, do together, express together and share together? What will they commit to for each other — no matter what?",
    { x: M + 0.4, y: 2.45, w: 5.0, h: 2.4, fontSize: 13, color: INK, fontFace: "Calibri", lineSpacing: 20, margin: 0 }
  );
  s.addText("Both speak. Neither responds to the other’s vision with edits — they receive it.", {
    x: M + 0.4, y: 5.1, w: 5.0, h: 0.7, fontSize: 11.5, italic: true, color: MUTED, fontFace: "Calibri", lineSpacing: 16, margin: 0,
  });

  scriptCard(s, M + 6.2, 1.7, W - M * 2 - 6.2, 4.3, "The commitment — a real one, not just words",
    "“I commit to ______ (state the behaviour your partner needs).\n\nYou can know this is who I am — I will honour my word from this day forward.\n\nI love you so much. You mean ______ to me.”",
    { qSize: 14 });
  footer(s, "If a commitment sounds like words without weight, stop and ask for it again — from the heart, with eye contact.");
}

/* ------------------------------------------------------------------ 11 · phase 8 receiving */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: -1.5, y: 5.0, w: 4.4, h: 4.4, fill: { color: BERRY, transparency: 45 } });
  s.addText("PHASE 8", { x: M, y: 0.5, w: 8, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GOLD, fontFace: "Calibri", margin: 0 });
  s.addText("Receiving the Hurt", {
    x: M, y: 0.88, w: W - M * 2, h: 0.7, fontSize: 34, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0, valign: "middle",
  });

  const steps = [
    ["Stand or sit, totally present", "One partner receives from the other what has hurt them. No defending. No explaining. No flinching. Total presence."],
    ["Apologise for the specifics", "They apologise for the SPECIFIC things that hurt their partner — named one by one, not a blanket “I’m sorry for everything”."],
    ["Swap", "The other partner receives in the same way."],
  ];
  steps.forEach((st, i) => {
    const y = 1.9 + i * 1.35;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h: 1.2, rectRadius: 0.09, fill: { color: "FFFFFF", transparency: 92 },
    });
    badge(s, i + 1, M + 0.32, y + 0.35, 0.5, GOLD, DEEP, 17);
    s.addText(st[0], { x: M + 1.05, y: y + 0.18, w: 4.6, h: 0.85, fontSize: 15, bold: true, color: "FFFFFF", fontFace: "Calibri", valign: "middle", lineSpacing: 19, margin: 0 });
    s.addText(st[1], { x: M + 5.9, y, w: W - M * 2 - 6.3, h: 1.2, fontSize: 12, color: "E0CED3", fontFace: "Calibri", valign: "middle", lineSpacing: 17, margin: 0 });
  });
  s.addText("Coach’s watchpoint: the moment the receiver starts explaining instead of receiving, stop them. Receiving IS the exercise.", {
    x: M, y: 6.2, w: W - M * 2, h: 0.4, fontSize: 12, italic: true, color: ROSE, fontFace: "Calibri", margin: 0,
  });
}

/* ------------------------------------------------------------------ 12 · phase 9 ritual */
{
  const s = lightSlide();
  kicker(s, "Phase 9 · the close");
  title(s, "The Repair Ritual — never end without it");
  s.addText("The ritual converts the repair into a felt experience they take home. Choose one:", {
    x: M, y: 1.32, w: 10.5, h: 0.35, fontSize: 13.5, italic: true, color: MUTED, fontFace: "Calibri", margin: 0,
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 1.9, w: 5.8, h: 4.2, rectRadius: 0.1, fill: { color: BERRY },
  });
  s.addText("OPTION A", { x: M + 0.4, y: 2.15, w: 5.0, h: 0.28, fontSize: 10.5, bold: true, charSpacing: 1.5, color: GOLD, fontFace: "Calibri", margin: 0 });
  s.addText("Ho’oponopono", { x: M + 0.4, y: 2.45, w: 5.0, h: 0.45, fontSize: 20, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0 });
  s.addText("Face to face, said both ways, from the heart:", { x: M + 0.4, y: 3.0, w: 5.0, h: 0.3, fontSize: 11.5, color: "E8D9DC", fontFace: "Calibri", margin: 0 });
  const hoo = [
    ["“I’m sorry”", "apologises for the pain caused"],
    ["“I love you”", "says what they mean to them"],
    ["“Please forgive me”", "takes ownership"],
    ["“Thank you”", "confirms the relationship"],
  ];
  hoo.forEach((h, i) => {
    const y = 3.45 + i * 0.6;
    s.addText(h[0], { x: M + 0.4, y, w: 2.5, h: 0.3, fontSize: 14, bold: true, italic: true, color: "FFFFFF", fontFace: "Cambria", margin: 0 });
    s.addText(h[1], { x: M + 2.95, y: y + 0.02, w: 2.6, h: 0.3, fontSize: 10.5, color: "D9C4C9", fontFace: "Calibri", margin: 0 });
  });

  s.addShape(pres.ShapeType.roundRect, {
    x: M + 6.2, y: 1.9, w: W - M * 2 - 6.2, h: 4.2, rectRadius: 0.1, fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: BERRY, opacity: 0.1, blur: 8, offset: 2, angle: 90 },
  });
  s.addText("OPTION B", { x: M + 6.6, y: 2.15, w: 4.7, h: 0.28, fontSize: 10.5, bold: true, charSpacing: 1.5, color: ROSE, fontFace: "Calibri", margin: 0 });
  s.addText("The Presence Exercise", { x: M + 6.6, y: 2.45, w: 4.7, h: 0.45, fontSize: 20, bold: true, color: BERRY, fontFace: "Cambria", margin: 0 });
  const pres_steps = [
    "Both partners hold eye contact — soft music optional.",
    "One holds loving presence; the other openly receives it from the heart.",
    "He repeats silently: “I love you, I’ll take care of you.”",
    "When the love genuinely lands, they welcome each other with an embrace.",
  ];
  s.addText(
    pres_steps.map((r, i) => ({ text: r, options: { bullet: true, breakLine: i !== pres_steps.length - 1 } })),
    { x: M + 6.6, y: 3.05, w: 4.7, h: 2.9, fontSize: 12, color: INK, fontFace: "Calibri", paraSpaceAfter: 12, lineSpacing: 17, margin: 0 }
  );
  footer(s, "Never end the session on Phase 8. The hurt was opened — the ritual is what closes it.");
}

/* ------------------------------------------------------------------ 13 · cheat sheet */
{
  const s = lightSlide();
  kicker(s, "Student quick-reference");
  title(s, "The whole session on one card");

  const rows = [
    ["1", "Accountability contract", "A hesitant “yes” — dig into it"],
    ["2", "Teach 4 Horsemen + private check", "Withheld information"],
    ["3", "Install the 10 Frames", "Head-talk, “yeah but”"],
    ["4", "Teach Request + Apology scripts", "Skipping straight to the exchange"],
    ["5", "Exchange — 1–3 items at a time, both ways", "Defensiveness while listening"],
    ["6", "Needs audit, both directions", "The self-score vs partner-score gap"],
    ["7", "Vision + real commitment", "Words without weight"],
    ["8", "Receive the hurt, fully present", "Explaining instead of receiving"],
    ["9", "Ho’oponopono or presence exercise", "Ending without the ritual"],
  ];
  const yTop = 1.62, rh = 0.52;
  s.addText("PHASE & MOVE", { x: M + 0.55, y: yTop - 0.36, w: 6, h: 0.28, fontSize: 10, bold: true, charSpacing: 1.5, color: ROSE, fontFace: "Calibri", margin: 0 });
  s.addText("WATCH FOR", { x: M + 7.3, y: yTop - 0.36, w: 4, h: 0.28, fontSize: 10, bold: true, charSpacing: 1.5, color: ROSE, fontFace: "Calibri", margin: 0 });
  rows.forEach((r, i) => {
    const y = yTop + i * rh;
    if (i % 2 === 0) s.addShape(pres.ShapeType.rect, { x: M - 0.15, y, w: W - M * 2 + 0.3, h: rh, fill: { color: "FFFFFF" } });
    badge(s, r[0], M, y + 0.1, 0.32, BERRY, "FFFFFF", 11);
    s.addText(r[1], { x: M + 0.55, y, w: 6.6, h: rh, fontSize: 12.5, bold: true, color: INK, fontFace: "Calibri", valign: "middle", margin: 0 });
    s.addText(r[2], { x: M + 7.3, y, w: W - M * 2 - 7.3, h: rh, fontSize: 11.5, color: MUTED, fontFace: "Calibri", valign: "middle", margin: 0 });
  });
  footer(s, "Phases 1–4 set the container · 5–7 do the work · 8–9 seal it.");
}

/* ------------------------------------------------------------------ 14 · closing principles */
{
  const s = darkSlide();
  s.addShape(pres.ShapeType.ellipse, { x: 10.6, y: -1.4, w: 4.6, h: 4.6, fill: { color: BERRY, transparency: 40 } });
  s.addText("TEACH THESE LAST — THEY MAKE THE WHOLE THING WORK", {
    x: M, y: 1.2, w: 10.5, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GOLD, fontFace: "Calibri", margin: 0,
  });
  const pr = [
    ["The coach controls pacing", "1–3 items at a time is a facilitation skill, not a suggestion. Your job is to keep each repair loop small enough to close."],
    ["An apology isn’t complete until it’s received", "Check with the receiving partner every time: “Did that land? Did you feel it?” If it didn’t, the apology goes again."],
    ["You enforce the frames — that’s what they hired you for", "Every intervention you make traces back to the permission you took in Phase 1. That’s why Phase 1 is never optional."],
  ];
  pr.forEach((p, i) => {
    const y = 1.8 + i * 1.55;
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h: 1.38, rectRadius: 0.1, fill: { color: "FFFFFF", transparency: 91 },
    });
    badge(s, i + 1, M + 0.4, y + 0.44, 0.5, GOLD, DEEP, 17);
    s.addText(p[0], { x: M + 1.15, y: y + 0.22, w: W - M * 2 - 1.6, h: 0.4, fontSize: 17, bold: true, color: "FFFFFF", fontFace: "Cambria", margin: 0 });
    s.addText(p[1], { x: M + 1.15, y: y + 0.66, w: W - M * 2 - 1.7, h: 0.6, fontSize: 12.5, color: "E0CED3", fontFace: "Calibri", lineSpacing: 18, margin: 0 });
  });
  s.addText("The NTT Relationship Resolution Session  ·  Luke Hawkins Coaching", {
    x: M, y: 6.7, w: W - M * 2, h: 0.3, fontSize: 10, italic: true, color: ROSE, fontFace: "Calibri", margin: 0,
  });
}

pres.writeFile({ fileName: "/home/user/mybot/out/NTT-Relationship-Resolution-Session.pptx" })
  .then((f) => console.log("written:", f));
