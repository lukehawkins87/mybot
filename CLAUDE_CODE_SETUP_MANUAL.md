# Claude Code Setup Manual
### For Luke Hawkins Life Coaching Training School — Inner Circle Students

---

> **Welcome!** This manual will walk you through setting up Claude Code step by step. No tech experience needed. Every step is written as if you've never done this before — because that's perfectly okay. Take it one step at a time, and you'll be set up before you know it.

---

## Why You're Doing This (Read This First!)

Before we get into the technical steps, here's why this is worth 30–60 minutes of your time.

Claude Code and Claude's Co-Work feature are like having a brilliant business assistant available 24 hours a day, 7 days a week — one who never gets tired, never judges you, and can help you with almost anything in your coaching business.

**Here's what you'll be able to do once you're set up:**

- **Write SOPs (Standard Operating Procedures)** — Tell Claude what your process is and it will write it up professionally for you. No more blank page.
- **Build spreadsheets** — Describe what you need and Claude will create the structure for you, even write out the formulas.
- **Draft emails** — Paste in notes and Claude will turn them into polished, professional emails in seconds.
- **Research competitors and other coaches** — Ask Claude to analyse what other coaches are doing in your niche, what their messaging is, and how you can stand out.
- **Create content marketing plans** — Tell Claude your audience and goals and it will map out a full content strategy for you.
- **Help with Facebook Ads** — Get copy suggestions, targeting ideas, and ad angle ideas tailored to your audience.
- **Solve any business problem** — Stuck on something? Type it out and get detailed, thoughtful advice immediately.
- **Delegate tasks to AI agents** — Claude Code allows you to set up automated agents that can handle recurring tasks for you.

Luke can also share documents, resources, and information directly into your Claude Project, and can see your conversation history — so your coaching support becomes even more personalised.

**In short: this is the tool that will make your business faster, easier, and more professional.**

---

## Before You Start — What You Need

- [ ] A computer (Windows or Mac — this manual covers both)
- [ ] A stable internet connection
- [ ] About 30–60 minutes of uninterrupted time
- [ ] The company login details Luke has shared with you (email and password)
- [ ] A notepad or phone nearby to jot down anything you want to remember

---

## SECTION 1 — Creating or Logging Into Your Claude Account

> You'll be using the **company Claude account** that Luke has set up. This means you use the email and password Luke has given you — you do NOT create your own.

### Step 1 — Open Your Internet Browser

Your internet browser is the app you use to visit websites. Common ones are:
- **Chrome** (round colourful circle icon)
- **Edge** (blue wave icon — common on Windows)
- **Safari** (compass icon — common on Mac)

Click on whichever one you use.

### Step 2 — Go to the Claude Website

In the bar at the very top of your browser (where web addresses appear), click once to select it, then type:

```
claude.ai
```

Press **Enter** on your keyboard.

### Step 3 — Log In

You'll see the Claude homepage. Look for a button that says **"Log in"** (usually in the top right corner) and click it.

You'll be asked for an **email address** and **password**. Use the company login details Luke has provided. Type them in carefully — passwords are case-sensitive (capital letters matter).

Click **"Continue"** or **"Log in"** and you should be taken into the Claude dashboard.

> **Stuck here?** See the Troubleshooting section at the end of this manual.

---

## SECTION 2 — Getting Familiar With Claude (The Website Version)

Before we install anything on your computer, let's get comfortable using Claude through the website. This is called **Claude Chat** and you'll use it every day.

### What You'll See When You Log In

- A text box at the bottom of the screen where you type your questions or requests — this is called the **prompt box**
- A sidebar on the left showing your conversation history
- A **"Projects"** section in the sidebar — this is where Luke will share resources with you

### How to Start a Conversation

Click inside the prompt box at the bottom and just start typing. Think of it like sending a WhatsApp message to a very smart assistant.

**Example:**
> "Please write a professional email to a client who hasn't paid their invoice. Keep the tone firm but polite."

Press **Enter** or click the send button (arrow icon) and Claude will respond within seconds.

### How to Find the Projects Section

On the left sidebar, look for a section called **"Projects"**. Click on it. You'll see any projects Luke has shared with you. Click on a project to open it and see the resources and conversations inside.

---

## SECTION 3 — Installing Claude Code on Your Computer

Claude Code is a more powerful version of Claude that lives on your computer and can help you with more advanced tasks. Here's how to install it.

> **Note:** This section involves using a "Terminal" — a text-based window where you type commands. Don't worry. We'll show you exactly what to type.

---

### PART A — How to Open a Terminal

A terminal (also called a "command prompt" or "command line") is a plain black or white window where you type instructions directly to your computer. It sounds scary — it really isn't. You're just going to copy and paste a few lines.

---

#### On a Windows Computer

1. Press the **Windows key** on your keyboard (it has the Windows logo on it — usually bottom left of your keyboard between Ctrl and Alt)
2. Type: `cmd`
3. You'll see a result appear called **"Command Prompt"** — click on it
4. A black window will open with white text. This is your terminal. Leave it open.

**Alternative method (Windows):**
- Right-click on your Desktop (the main screen with no windows open)
- If you see **"Open in Terminal"** or **"Open PowerShell window here"**, click that

---

#### On a Mac Computer

1. Press **Command (⌘) + Spacebar** at the same time — a search bar called "Spotlight" will appear
2. Type: `Terminal`
3. You'll see "Terminal" appear in the results — press **Enter** or click on it
4. A white (or black) window will open. This is your terminal. Leave it open.

---

### PART B — Installing Node.js (A Required Tool)

Claude Code needs a tool called **Node.js** to work. Think of it like installing an engine before you can drive a car.

#### On Windows

1. Open your browser and go to: `https://nodejs.org`
2. You'll see a big green button that says something like **"LTS"** (Long Term Support) — click it to download
3. Once the download finishes, open the file (it will be in your Downloads folder — a file ending in `.msi`)
4. A setup window will appear — click **Next**, **Next**, **Next**, and then **Install**. You don't need to change any settings.
5. When it says "Finish", click that.

#### On Mac

1. Open your browser and go to: `https://nodejs.org`
2. Click the **"LTS"** download button
3. Once downloaded, open the file (it will be a `.pkg` file in your Downloads folder)
4. Follow the on-screen steps: Continue, Continue, Install
5. You may be asked to enter your Mac password — this is the password you use to log into your computer. Type it and press Enter (you won't see dots or characters as you type — that's normal and safe)
6. Click Close when done.

**To check it worked:**
Open your Terminal again and type exactly:
```
node --version
```
Press Enter. You should see something like `v20.11.0` — any number is fine. If you see a number, Node.js is installed correctly.

---

### PART C — Installing Claude Code

Now for the main event! With your Terminal still open, type the following exactly (or copy and paste it):

```
npm install -g @anthropic-ai/claude-code
```

Press **Enter**.

You'll see a lot of text scrolling past — this is normal. It's downloading and installing. Wait until it finishes (you'll know because a new line appears ready for you to type again — usually shows a `>` or `$` symbol).

This may take 1–3 minutes depending on your internet speed.

---

### PART D — Logging Into Claude Code

Once installed, type this in the terminal:

```
claude
```

Press **Enter**.

Claude Code will open and ask you to log in. It will open a link in your browser — log in using the company Claude account details Luke gave you.

Once you log in through the browser, come back to the terminal. You should see a welcome message. You're in!

---

## SECTION 4 — Using Claude Code for Your Business

Now that you're set up, here are practical ways to use Claude Code every day.

### How to Start Claude Code Each Day

1. Open your Terminal (follow the steps in Section 3, Part A)
2. Type `claude` and press Enter
3. Start typing your request

---

### What to Ask Claude Code — Real Examples for Your Business

**Writing SOPs:**
> "I want to write an SOP for how I onboard a new coaching client. The steps are: they sign a contract, pay the invoice, receive a welcome email, book their first session, and get added to my WhatsApp group. Please write this up as a formal SOP document."

**Creating a Spreadsheet:**
> "I need a spreadsheet to track my monthly income. It should have columns for: date, client name, payment amount, payment method, and whether it's been invoiced. Can you create this for me?"

**Drafting Emails:**
> "Please write a professional but warm follow-up email to a potential client who enquired about my coaching programme last week but hasn't replied. Make it friendly and not pushy."

**Researching Competitors:**
> "I'm a life coach targeting burned-out professional women in the UK. Can you research what kinds of content, messaging, and offers are working well for coaches in this space? What are the common themes and how could I differentiate myself?"

**Content Marketing Plan:**
> "Can you create a 30-day Instagram content plan for a life coach who helps people build confidence? Include post ideas, caption angles, and a mix of educational and personal content."

**Facebook Ad Copy:**
> "Write 3 Facebook ad headlines and body copy for a life coaching discovery call offer. My target audience is women 35–55 who feel stuck in their career or life. Keep it emotional and benefit-led."

---

## SECTION 5 — Using Projects With Your Team

Luke has set up a **Project** inside Claude where he can share information, resources, and context with you. This means Claude already knows key information about your role and your business when you work inside the Project.

### How to Access Your Project

1. Go to `claude.ai` in your browser and log in
2. Click on **"Projects"** in the left sidebar
3. Click on the project Luke has shared with you
4. Start a new conversation inside the project — Claude will have access to everything Luke has shared

### What This Means For You

When you work inside the project, Claude remembers context from the documents Luke has uploaded. So instead of explaining your business every time, Claude already knows your niche, your audience, your offers, and your processes.

Luke can also see your conversation history inside the project — so if you're stuck on something or want feedback on what Claude helped you produce, Luke can review it as part of your coaching.

---

## SECTION 6 — TROUBLESHOOTING

Things don't always go perfectly — and that's okay. This section covers the most common issues and what to do.

---

### Common Issues and Quick Fixes

---

**Problem: "I can't log in — it says incorrect password"**

- Double-check you're using the exact email and password Luke gave you
- Make sure Caps Lock is NOT on (there's usually a light on your keyboard that shows if it's on)
- Try copying and pasting the password directly from wherever Luke sent it to you
- If it still doesn't work, message Luke to confirm the login details

---

**Problem: "The terminal says 'npm is not recognised' or 'command not found'"**

- This means Node.js didn't install correctly
- Go back to Section 3, Part B and re-do the Node.js installation
- On **Windows**: after installing, close the terminal completely, open a new one, and try again
- On **Mac**: after installing, close the terminal, open a new one, and try again

---

**Problem: "Claude Code opened but then froze or nothing happened"**

- Close the terminal completely
- Reopen it and type `claude` again
- If it asks you to log in again, that's fine — log in again
- Make sure your internet connection is stable

---

**Problem: "I can't find the Projects section on Claude"**

- Make sure you're logged in with the company account (not a personal one)
- Look for "Projects" in the left sidebar — you may need to scroll down
- If you're on a phone or tablet, try switching to a desktop/laptop computer as the layout is different

---

**Problem: "I don't see the download button on nodejs.org"**

- Try refreshing the page
- Make sure you're on the right website — it should say `nodejs.org` in your address bar
- Try using a different browser (Chrome is usually the most reliable)

---

### How to Use Claude Chat to Troubleshoot Any Problem

This is one of the most powerful things you can do when you're stuck on anything — not just tech problems. Claude Chat is available 24/7 at `claude.ai`, and you can describe any problem to it and get step-by-step help.

**The secret is knowing HOW to describe your problem clearly.** Here is a simple structure to follow every time:

---

#### The Problem-Solving Template — Copy This Every Time

When you're stuck, open Claude Chat and use this structure:

```
I am trying to [what you were trying to do].

I am using a [Windows / Mac] computer.

What happened was [describe exactly what appeared on screen — copy any error messages word for word].

Here is a screenshot of what I can see: [attach your screenshot]

What I want is [what you expected to happen or what outcome you need].

Can you help me fix this step by step?
```

---

#### How to Take and Attach a Screenshot

A screenshot is a picture of exactly what's on your screen. It's the single most helpful thing you can give Claude (or anyone helping you).

**On Windows:**
1. Press the **Windows key + Shift + S** at the same time
2. Your screen will go slightly dark and a toolbar will appear at the top
3. Click and drag across the area you want to capture
4. The screenshot is copied — you can now paste it directly into Claude Chat by pressing **Ctrl + V** in the message box

**Alternative on Windows:**
- Press the **Print Screen (PrtSc)** key — this copies the whole screen
- Then paste into Claude Chat with **Ctrl + V**

**On Mac:**
1. Press **Command (⌘) + Shift + 4** at the same time
2. Your cursor will turn into a crosshair
3. Click and drag across the area you want to capture
4. You'll hear a camera click sound — the screenshot saves to your Desktop
5. Find it on your Desktop, then drag it into the Claude Chat message box

**Alternative on Mac:**
- Press **Command (⌘) + Shift + 3** to capture the whole screen
- The file saves to your Desktop — drag it into Claude

---

#### Real Examples of How to Write Your Problem

**Example 1 — Tech problem:**
> "I am trying to install Claude Code on my computer. I am using a Windows laptop. When I typed the command into the terminal, I got a red error message that says: 'npm is not recognised as an internal or external command'. Here is a screenshot of what I see. I want to install Claude Code so I can start using it. Can you help me fix this step by step?"

**Example 2 — Business task you're not sure how to start:**
> "I am trying to write an SOP for how I handle client enquiries in my coaching business. I don't know where to start and I'm feeling overwhelmed by it. I want a clear, professional document I can hand to a VA one day. Can you ask me some questions to help me build this?"

**Example 3 — Something isn't working as expected:**
> "I am trying to use the Projects section in Claude but I can't see it on my screen. I am using a Mac and logged into claude.ai. Here is a screenshot of what I can see. I expected to see a 'Projects' option in the left sidebar. Can you help me find it?"

---

#### Tips for Talking to Claude

- **Be specific** — the more detail you give, the better the help you get
- **Copy error messages exactly** — don't paraphrase them; paste the exact words
- **Always include a screenshot when possible** — it removes all guesswork
- **Tell Claude what device you're on** (Windows or Mac) — the steps are different
- **Say what you were trying to achieve** — not just what went wrong, but what you wanted to happen
- **Ask for step-by-step** — Claude will walk you through it one action at a time if you ask
- **If the first answer doesn't work, say so** — type "That didn't work. Here's what happened:" and describe it. Claude will try a different approach.
- **You can ask Claude to explain in simpler terms** — just say "Can you explain that more simply? I'm not very technical."

---

## SECTION 7 — Quick Reference Card

Save this or screenshot it for easy access:

| What you want to do | Where to go |
|---|---|
| Chat with Claude in your browser | `claude.ai` |
| Access shared team resources | `claude.ai` → Projects (left sidebar) |
| Start Claude Code on your computer | Open Terminal, type `claude` |
| Take a screenshot (Windows) | Windows key + Shift + S |
| Take a screenshot (Mac) | Command + Shift + 4 |
| Open Terminal (Windows) | Press Windows key, type `cmd`, press Enter |
| Open Terminal (Mac) | Command + Spacebar, type Terminal, press Enter |

---

## You're Ready!

Well done for getting this far. Whether you followed every step perfectly or needed to restart a few times — you did it. That's what matters.

From here, the best thing you can do is **start using it**. Open Claude Chat today and give it one real task from your business. See what comes back. Ask it to do it differently if needed. The more you use it, the more natural it becomes.

If you get stuck, re-read the Troubleshooting section and use the Problem-Solving Template to ask Claude Chat for help. You don't need to know how to fix every problem — you just need to know how to describe it clearly.

You've got this.

— Luke Hawkins Life Coaching Training School

---

*Manual version: July 2026*
