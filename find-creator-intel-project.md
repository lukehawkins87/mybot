# How to find your "Creator Intel" bot project

This is the social-media analysis bot you built live with Kev Gary in the
**Claude Camp private training session (13 Aug 2026)**. It was built in **Claude
Code on your own Mac**, inside a local company folder — it is **not** in this
`mybot` repo, and it was a **different Claude Code session** than this one, so I
can't reach it from here. Here's exactly how to find it yourself.

## What you're looking for (the fingerprints)

From the call, the project has these identifying features:

- It lives in a **local "company" folder** on your Mac — Kev's team said on the
  call *"we did put a folder for Luke… we created a folder for myself."* Likely
  named something like **Luke Hawkins Company**, **Claude Camp**, or **Creator
  Intel**.
- It pulls in an open-source tool called **"Agent Reach"** (found free on
  GitHub) — that code was **downloaded into the folder**.
- The output was named by default **"Luke Hawkins AirBytes Creator Intel."**
- There is a **`CLAUDE.md`** file in the folder — that file *is* your project
  spec / instructions (Claude Code updates it as you work).
- The folder is (or was meant to be) **backed up to a private GitHub repo**.
- Output files were dropped into your **Downloads** folder (Claude Code asked for
  access to Downloads during the build).

## Step 1 — Look in the Claude Code desktop app (fastest)

1. Open the **Claude Code** desktop app on the Mac you used in the session
   (the native app — not claude.ai in a browser; local folders only show in the app).
2. On the start screen / project picker, look at **recent projects / folders**.
   The folder you were pointed at during the build will be near the top.
3. Open it, then click the **"⋯" (three dots) → Files** to see everything in the
   folder. Look for `CLAUDE.md`, an `agent-reach` / `Agent Reach` folder, and any
   output files with "Creator Intel" in the name.

## Step 2 — Search the Mac directly (if the app list doesn't show it)

Use **Spotlight** (⌘ + Space) or **Finder** search for any of:

- `Creator Intel`
- `Agent Reach`
- `AirBytes`
- `CLAUDE.md`

Or open **Terminal** and run these (they search your whole home folder):

```bash
# Find the project folder by likely names
find ~ -maxdepth 4 -iname "*creator*intel*" 2>/dev/null
find ~ -maxdepth 4 -iname "*agent*reach*" 2>/dev/null
find ~ -maxdepth 4 -iname "*claude*camp*" 2>/dev/null

# Find the spec file(s) — CLAUDE.md is the project instructions
find ~ -iname "CLAUDE.md" 2>/dev/null

# Check the usual spots
ls -la ~                    # home folder (the "~" root Kev described)
ls -la ~/Desktop
ls -la ~/Documents
ls -la ~/Downloads | grep -i "creator\|intel\|airbyte"   # the output files
```

The folder that contains a `CLAUDE.md` **and** an Agent Reach subfolder is your
project.

## Step 3 — Check your private GitHub backup

On the call, Kev's model was: local company folder **synced to a private GitHub
repo** ("that's your brain, and that's everything").

1. Go to **github.com** → sign in → **Your repositories**.
2. Look for a **private** repo matching the folder name (e.g. *Luke Hawkins
   Company*, *Claude Camp*, *Creator Intel*).
3. If it's there, that repo is a full copy of the project — you can also re-clone
   it to any machine.

> If you tell me the repo name (or add it to this session), I can open it and pull
> out the actual spec/code for you directly.

## Step 4 — Check Cowork for the schedule

The plan on the call was to put this on a **30-day schedule in Cowork** against
named competitors. If that was set up, open **Cowork**, find the scheduled task,
and it will reference the same folder — another way to trace it.

## What the "project spec" actually is

Two things together make up the spec:

1. **`CLAUDE.md`** in the project folder — the living instructions Claude Code
   wrote/updated as you built. This is the authoritative spec on disk.
2. **What you dictated on the call** — captured verbatim in
   `creator-intel-bot-transcript.md` (the 1:50–2:34 build section). In short, the
   spec you gave was:
   - Analyze the **social-media content strategy of different creators** (some in
     your niche, some not) that you supply.
   - For each creator + platform: what **type of posts** they do; for **video
     content**, get the **transcripts** and a **breakdown of how each video is
     structured** (all the variables).
   - Surface the **top 5 videos/posts that have gone viral** per creator.
   - **Platform priority:** Instagram → LinkedIn → Facebook → TikTok → YouTube,
     but **start with the "happy path" of YouTube + TikTok** (public, reliable, no
     keys); phase in Instagram/LinkedIn/Facebook later via **API keys** rather
     than browser scraping.
   - **Goal:** grow your following/engagement in your niche; feed ideas back into
     your own IG/TikTok content.
   - **Default output name:** *Luke Hawkins AirBytes Creator Intel.*

## Heads-up before you run it again

The Instagram/Facebook part of this relied on a **logged-in browser session /
scraping**, which even Kev flagged as "janky." Downloading other creators'
videos/transcripts and logged-in scraping can bump into platform **Terms of
Service and copyright** limits. The YouTube + TikTok **official-API** path is
both the more reliable and the safer route — worth keeping the scraping scoped to
that until you've got proper API keys for the rest.
