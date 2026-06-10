# Claude Code Team Setup Guide

> Follow this guide from top to bottom. Each step builds on the last. Expected time: 20–30 minutes.

---

## What You're Setting Up

Claude Code is a desktop AI assistant that can connect to your computer files, VPS servers, Slack, Google Drive, and more. This guide walks you through:

1. Installing the required dependency (Git)
2. Installing the Claude Code app
3. Signing in and configuring settings
4. Connecting to the team VPS (Hostinger)
5. Connecting Slack
6. Setting up Dispatch (mobile access)
7. Verifying everything works

---

## Before You Start

Have these ready:
- Your computer login password (Mac users will need it during Git install)
- Access to Hostinger (ask Luke or Dan for the VPS IPv4 address and root password)
- Access to the team Slack workspace

---

## Step 1 — Install Git

Git is a background tool that Claude Code requires to run. You don't need to know how to use it — just install it and leave it alone.

### Mac

1. Open **Terminal**
   - Press **Command + Spacebar**, type `terminal`, press Enter
2. In the Terminal window, paste this command and press Enter:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. When it asks for your password, type your **Mac login password** (the one you use when your computer wakes from sleep). **The characters won't show as you type — that's normal.** Press Enter when done.
4. Press Enter/Return when it asks you to continue.
5. Once that finishes, run this second command:
   ```
   brew install git
   ```
6. Wait for it to complete. Done — Git is installed.

> **If you see "command not found: brew"** — run the two commands that appear at the end of the Homebrew install output under "Next steps:" (they start with `echo` and `eval`), then try `brew install git` again.

### Windows

1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win) — the download will start automatically
2. Run the downloaded `.exe` file
3. Click through the installer using all default settings — just keep clicking Next, then Install
4. Done — Git is installed.

---

## Step 2 — Install Claude Code

1. Go to the Claude Code download page (ask your team for the link, or search "Claude Code desktop download")
2. **Mac:** Download the **macOS** version. Open the `.dmg` file and drag Claude Code to your Applications folder.
3. **Windows:** Download the **Windows** version. Run the installer.
4. Open the app — it will prompt you to update if a newer version is available. Do the update before continuing.

---

## Step 3 — Sign In

1. Open Claude Code
2. Sign in using the **team account credentials** (get these from Luke or Dan — do not create your own account unless instructed)
3. When Claude Code asks for permission to access your Desktop, Documents, and Downloads folders — click **Allow** for each

---

## Step 4 — Recommended Settings

Before doing anything else, configure these settings:

1. In the bottom-right corner of Claude Code, click the **model selector**
2. Select **Claude Sonnet 4.6** (good balance of speed and intelligence on the $100/month plan)
   - Use **Opus 4.8** only for complex tasks — it uses tokens faster
3. Set **Extended Thinking** to **High** (this makes responses smarter, not just faster)

---

## Step 5 — Connect to the VPS (Hostinger)

This gives Claude Code access to your team's server so it can manage bots and containers.

1. Log in to [Hostinger](https://hpanel.hostinger.com) and go to your VPS
2. Click **Overview** on the left sidebar
3. Find and copy the **IPv4 address** (it looks like `76.13.xxx.xxx`)
4. In Hostinger VPS settings, go to **Settings** and generate/copy the **root password**
   - Click the eyeball icon to reveal it, copy it, then click **Update Password** and wait for the green checkmark
5. Open Claude Code and paste this prompt (replace the placeholders):
   ```
   Connect to my VPS via SSH. 
   Host: [PASTE IPv4 ADDRESS HERE]
   Username: root
   Password: [PASTE ROOT PASSWORD HERE]
   ```
6. When Claude asks for approval to run SSH — click **Allow**
7. If it tries to use an SSH key instead of the password, type: `Use the root password`
8. Once connected, you'll see a confirmation message. You can now manage the server.

> **Important:** Store the VPS root password securely and make sure everyone on the team uses the **same** root password. If someone resets it, others will lose connection until they update.

---

## Step 6 — Connect Slack

1. In Claude Code, click your **name/account icon** in the bottom-left corner
2. Go to **Settings → Customize → Connections**
3. Click the **+** button, then **Browse Connectors**
4. Search for **Slack** and click the **+** to add it
5. Sign in to your Slack workspace when prompted
6. Configure permissions:
   - **Send message** → Always Allow
   - **Schedule message** → Always Allow
   - **Add reaction** → Always Allow
   - **Create conversation** → Ask for Approval (so it doesn't create channels on its own)
   - **Delete message** → Ask for Approval

**Test it:** Type in Claude Code: `Send a message to [your own name] in Slack saying "test"` — you should receive it within seconds.

---

## Step 7 — Set Up Dispatch (Access from Your Phone)

Dispatch lets you continue Claude Code sessions from your phone while your computer is running.

**On your computer first:**

1. In Claude Code, click **More** (top area) → **Dispatch**
2. Click **Finish Setup** and allow any file access prompts
3. You'll be asked to connect a GitHub repo — this is required for cloud sessions

**Create a GitHub repo (one-time setup):**

1. Go to [github.com](https://github.com) and sign in (use Google if that's how you registered)
2. Click the **+** icon (top right) → **New repository**
3. Name it `my-bot`
4. Set visibility to **Public**
5. Click **Create repository**
6. Close and fully reopen Claude Code
7. Go back to **Dispatch → New Session** — your repo should now appear
8. Select it and the session will start in the cloud

**On your phone:**

1. Download the **Claude** app (iOS or Android)
2. Sign in with the same team account
3. Tap the **Dispatch** tab
4. You'll see your active desktop session — you can now send messages and give instructions from your phone

---

## Step 8 — Verify Your Setup

Run through this checklist. Each item should work before moving on:

- [ ] Claude Code opens without errors
- [ ] You can type a question and get a response
- [ ] Claude Code connected to the VPS (test with: `List the Docker containers on the VPS`)
- [ ] Slack is connected (test with: `Send a Slack message to me saying "setup complete"`)
- [ ] Dispatch shows your session on your phone

---

## Step 9 — Understanding the Three Sections

Claude Code has three areas — use the right one for the right task:

| Section | Use it for |
|---------|-----------|
| **Chat** | Simple questions, quick research — like ChatGPT |
| **Co-Work** | Scheduled/recurring tasks (e.g., Sunday reminders to team, weekly check-ins) |
| **Code** | Complex multi-step work: managing the VPS, building/fixing bots, connecting APIs, analysing Fathom recordings |

> For 90% of team tasks, you'll be in **Code**.

---

## Useful Starter Prompts

Copy and adapt these to get started:

**VPS / Bot Management**
```
Connect to the VPS and list all running Docker containers.
```

**Scheduled Slack Reminder**
```
Every Sunday at 4pm Sydney time, send a message to the #sales-team Slack channel 
asking Brad, Sarah, and Lisa to block off unavailable times in their Google Calendar 
for the week. If they haven't replied "done" within 14 hours, remind them every 2 hours until they do.
```

**Analyse a Fathom Recording**
```
1. Access the Fathom recording from [DATE/TITLE].
2. Isolate the section where [TOPIC] is discussed.
3. Produce that section of the transcript.
4. Evaluate it for [GOAL — e.g., "tactical ways to handle partner objections on sales calls"].
5. Produce a script/guideline my sales team can use based on this.
```

**Rename a Docker Container**
```
On the VPS, rename the Docker project currently called [OLD NAME] to [NEW NAME].
```

---

## Troubleshooting

**"Command not found: brew" on Mac**
Run the two `echo` and `eval` commands shown at the end of the Homebrew installer output, then retry `brew install git`.

**SSH connection fails / "network unreachable"**
Double-check you're using the **IPv4 address** from Hostinger's Overview page (not your local machine's IP). Go to Hostinger → VPS → Overview → copy the IPv4.

**"No repos match" in Dispatch**
You need a GitHub repository. Follow the GitHub setup in Step 7. After creating the repo, fully close and reopen Claude Code.

**Slack message not sending**
Make sure Slack is connected under Settings → Customize → Connections. If the connection is there, check that "Send message" is set to Always Allow.

**Claude keeps asking for approval on every action**
When prompted, click **Always Allow** for routine operations (reading files, sending Slack messages). Reserve "Ask for Approval" for destructive actions like deleting files or creating Slack channels.

---

## Getting Help

- Ask in the team Slack channel
- Or start a Claude Code session and describe the problem — it can often diagnose and fix its own setup issues
