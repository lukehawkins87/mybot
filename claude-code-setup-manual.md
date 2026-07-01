# Claude Code Setup Manual
### Luke Hawkins Life Coaching Training School
**For Team Members — Step-by-Step Setup Guide**

---

> **Before you start:** Set aside about 30–45 minutes in a quiet spot with your laptop. You will need a stable internet connection. That's it. You've got this!

---

## What You're Going to Do

By the end of this guide, you will have Claude Code installed on your computer and logged in with the company account. There are three main stages:

1. Install a program called **Node.js** (Claude Code needs this to run)
2. Install **Claude Code** itself
3. **Log in** with the company account

Every step has instructions for both **Windows** and **Mac**. Find the one that matches your computer and follow just those steps.

---

## How Do I Know If I Have a Windows or a Mac?

**You have a Windows computer if:**
- Your computer has a Start button (the Windows logo) in the bottom-left corner of your screen
- It might say "HP", "Dell", "Lenovo", "ASUS", or "Microsoft Surface" on it

**You have a Mac if:**
- There is an Apple logo () on the back of your screen or laptop lid
- The bar along the very top of your screen has an Apple logo () in the top-left corner

---

---

# STAGE 1 — Install Node.js

Node.js is a free program that Claude Code needs in order to work. Think of it like a power adapter — Claude Code can't run without it, but you won't actually open or use Node.js yourself.

---

## Windows — Installing Node.js

**Step 1: Open your internet browser**

Open any internet browser you normally use — Chrome, Edge, or Firefox. (If you're not sure, look for a colourful circle icon or a blue "e" on your taskbar at the bottom of the screen.)

---

**Step 2: Go to the Node.js website**

Click in the address bar at the very top of your browser (the long white box where web addresses go). Type or copy this address exactly:

```
https://nodejs.org
```

Press **Enter** on your keyboard.

---

**Step 3: Download Node.js**

You will see the Node.js website. There will be a big green download button. It will say something like **"Download Node.js (LTS)"** — LTS just means the stable, recommended version.

Click that green button. A file will start downloading. You may see it appear at the bottom of your screen or in your Downloads folder.

---

**Step 4: Run the installer**

Once it finishes downloading:
- Look at the bottom of your browser screen for a file that ends in `.msi`
- Double-click on it to open it
- A setup window will appear. Click **Next** on every screen
- When it asks you to agree to the terms, tick the checkbox and click **Next**
- Keep clicking **Next** until you see an **Install** button — click **Install**
- If a pop-up appears asking "Do you want to allow this app to make changes?" click **Yes**
- Wait for it to finish (it takes about 1–2 minutes)
- Click **Finish**

Node.js is now installed.

---

**Step 5: Check that it worked**

You're going to open something called the **Command Prompt**. This is a plain black window where you can type instructions to your computer. Don't worry — you're just going to type one thing to check Node.js installed correctly.

To open Command Prompt:
- Hold down the **Windows key** (the key with the Windows logo on it, usually between Ctrl and Alt at the bottom of your keyboard) and press the letter **R** at the same time
- A small box will pop up that says "Run"
- Type `cmd` into that box
- Press **Enter**

A black window will appear. This is the Command Prompt.

Type this exactly (then press **Enter**):

```
node --version
```

You should see something like `v22.0.0` or a similar number appear. If you see a number, it worked! You can close this black window now (click the X in the top-right corner).

---

**Troubleshooting — Windows Node.js**

> **Problem:** I see an error message instead of a version number.
> **Fix:** Try restarting your computer fully (Start > Shut Down, then turn it back on). Then open Command Prompt again and try `node --version` once more.

> **Problem:** The Node.js website looks different and I can't find the download button.
> **Fix:** Look for any button that says "Download" or "LTS". If you're still stuck, go to this direct link: `https://nodejs.org/en/download`

> **Problem:** The installer won't open.
> **Fix:** Right-click on the downloaded file and choose "Run as administrator", then try again.

---

## Mac — Installing Node.js

**Step 1: Open your internet browser**

Open Safari (the compass icon in your dock at the bottom of the screen) or any other browser you use.

---

**Step 2: Go to the Node.js website**

Click in the address bar at the very top of your browser. Type or copy this address exactly:

```
https://nodejs.org
```

Press **Return** on your keyboard.

---

**Step 3: Download Node.js**

You will see the Node.js website with a big download button that says **"Download Node.js (LTS)"**. Click it.

A file will download to your Mac. It will end in `.pkg`.

---

**Step 4: Run the installer**

- Open your **Downloads** folder (click the folder icon in your Dock, or go to Finder > Downloads)
- Double-click the `.pkg` file
- A setup window opens. Click **Continue** on each screen
- When asked to agree to the licence, click **Agree**
- Click **Install**
- Your Mac may ask for your password (the one you use to log into your Mac) — type it in and press **Return**
- Wait 1–2 minutes for it to finish
- Click **Close**

Node.js is now installed.

---

**Step 5: Check that it worked**

You're going to open something called the **Terminal**. On a Mac, this is a white or black window where you can type instructions to your computer.

To open Terminal:
- Press and hold the **Command key** (⌘) and press the **Space bar** at the same time
- A search bar will appear (this is called Spotlight)
- Type `Terminal` and press **Return**
- A window with a plain text prompt will open

Type this exactly (then press **Return**):

```
node --version
```

You should see something like `v22.0.0` appear. If you see a number, Node.js is installed correctly! You can close Terminal for now (press Command + Q).

---

**Troubleshooting — Mac Node.js**

> **Problem:** I see "command not found" instead of a number.
> **Fix:** Restart your Mac fully (Apple menu > Restart). Then open Terminal again and try `node --version` once more.

> **Problem:** My Mac says it can't open the file because it's from an unknown developer.
> **Fix:** Go to System Settings (or System Preferences on older Macs) > Privacy & Security. Scroll down and you should see a message about the Node.js file. Click "Open Anyway". Then try opening the `.pkg` file again.

> **Problem:** It asked for my password but I don't know what it is.
> **Fix:** This is your Mac login password — the one you type when you first turn on your Mac. If you've forgotten it, you'll need to reset it via Apple Support before continuing.

---

---

# STAGE 2 — Install Claude Code

Now that Node.js is installed, you can install Claude Code. This happens entirely inside that same black/white window (Command Prompt on Windows, Terminal on Mac). You only need to type one line.

---

## Windows — Installing Claude Code

**Step 1: Open Command Prompt**

- Hold the **Windows key** and press **R**
- Type `cmd` and press **Enter**
- The black Command Prompt window opens

---

**Step 2: Type the install command**

Click inside the black window so your cursor is there. Then type this exactly (you can also copy and paste it):

```
npm install -g @anthropic-ai/claude-code
```

Press **Enter**.

You will see a lot of text scrolling past — this is normal. It's downloading and installing Claude Code. Wait until it stops and you see your cursor again (it may take 1–3 minutes depending on your internet speed).

---

**Step 3: Check that Claude Code installed**

Type this and press **Enter**:

```
claude --version
```

You should see a version number appear (like `1.0.0` or similar). If you do, Claude Code is installed.

---

**Troubleshooting — Windows Claude Code Install**

> **Problem:** I see "npm is not recognised as a command" or similar error.
> **Fix:** Node.js may not have installed correctly. Go back to Stage 1 and re-run the Node.js installer. Make sure to restart your computer afterwards, then try again.

> **Problem:** The install seems to hang (nothing happens for more than 5 minutes).
> **Fix:** Press **Ctrl + C** on your keyboard to stop it. Then try the install command again.

> **Problem:** I see a red error message saying "permission denied" or "EACCES".
> **Fix:** Close Command Prompt. Find it again by clicking Start and typing "cmd". Right-click on "Command Prompt" and choose **"Run as administrator"**. Then try the install command again.

---

## Mac — Installing Claude Code

**Step 1: Open Terminal**

- Press **Command (⌘) + Space** to open Spotlight
- Type `Terminal` and press **Return**

---

**Step 2: Type the install command**

Click inside the Terminal window so your cursor is there. Type this exactly (or copy and paste it):

```
npm install -g @anthropic-ai/claude-code
```

Press **Return**.

Lots of text will scroll past — this is completely normal. Wait until it finishes and you see the prompt again (1–3 minutes).

---

**Step 3: Check that Claude Code installed**

Type this and press **Return**:

```
claude --version
```

You should see a version number. If you do, Claude Code is installed successfully.

---

**Troubleshooting — Mac Claude Code Install**

> **Problem:** I see "permission denied" or "EACCES" error in red.
> **Fix:** Try typing this command instead (it asks your Mac for special permission):
> ```
> sudo npm install -g @anthropic-ai/claude-code
> ```
> Your Mac will ask for your password. Type it (you won't see any letters appear — that's normal on Mac) and press **Return**.

> **Problem:** Nothing happens for more than 5 minutes.
> **Fix:** Press **Control + C** to stop it. Check your internet connection, then try the command again.

> **Problem:** I see "npm: command not found".
> **Fix:** Go back to Stage 1 and reinstall Node.js. Restart your Mac afterwards, then try again.

---

---

# STAGE 3 — Log In With the Company Account

This is the last step. You'll open Claude Code and log in using the company's Claude account details. Your manager will give you the **email address** and **password** for the company account.

> **Important:** Make sure you have the company account email and password ready before you do this step. Ask your manager if you haven't received them yet.

---

## Windows — Logging In

**Step 1: Open Command Prompt**

- Hold **Windows key** + press **R**
- Type `cmd` and press **Enter**

---

**Step 2: Start Claude Code**

Type this and press **Enter**:

```
claude
```

Claude Code will start up. The first time you run it, it will ask you to log in.

---

**Step 3: Log in**

Claude Code will open a login screen in your internet browser automatically. If it doesn't open automatically, it will show you a link — copy that link and paste it into your browser's address bar.

On the login screen:
- Enter the **company email address** your manager gave you
- Enter the **company password**
- Click **Log In** or **Sign In**

Once you're logged in, go back to your Command Prompt window. It should now show a welcome message and a text prompt — this means you're in and ready to use Claude Code!

---

## Mac — Logging In

**Step 1: Open Terminal**

- Press **Command (⌘) + Space**
- Type `Terminal` and press **Return**

---

**Step 2: Start Claude Code**

Type this and press **Return**:

```
claude
```

Claude Code will start. The first time, it will prompt you to log in.

---

**Step 3: Log in**

A browser window will open automatically for you to log in. If it doesn't open, Claude Code will show a link — copy it and paste it into your browser.

On the login screen:
- Enter the **company email address** your manager gave you
- Enter the **company password**
- Click **Log In** or **Sign In**

Go back to your Terminal window. You should now see a welcome message and be ready to use Claude Code.

---

**Troubleshooting — Logging In (Both Windows and Mac)**

> **Problem:** The browser didn't open automatically.
> **Fix:** Look in your Command Prompt or Terminal window for a long link starting with `https://`. Highlight it, copy it (Ctrl+C on Windows, Command+C on Mac), then open your browser and paste it into the address bar and press Enter.

> **Problem:** I see "Invalid email or password" on the login screen.
> **Fix:** Double-check with your manager that you have the exact correct email and password. Passwords are case-sensitive (capital letters matter).

> **Problem:** The login page says the account has reached its usage limit or too many users are logged in.
> **Fix:** Let your manager know — they'll need to check the account plan.

> **Problem:** After logging in the browser, nothing happens in Command Prompt / Terminal.
> **Fix:** Click back inside the Command Prompt or Terminal window and press **Enter** once. This sometimes nudges it to continue.

> **Problem:** I see "network error" or "cannot connect".
> **Fix:** Check that your internet is working (try opening a website in your browser). If the internet is fine, wait 2 minutes and try again.

---

---

# You're All Set!

If you've reached this point and can see the Claude Code prompt in your Command Prompt or Terminal window — congratulations, you're fully set up!

Every time you want to use Claude Code in the future, you just:

1. Open **Command Prompt** (Windows) or **Terminal** (Mac)
2. Type `claude` and press **Enter / Return**

That's it. You'll go straight in — you won't need to log in every time.

---

## Quick Reference — The Commands You Used

| What it does | Command to type |
|---|---|
| Check Node.js is installed | `node --version` |
| Install Claude Code | `npm install -g @anthropic-ai/claude-code` |
| Check Claude Code is installed | `claude --version` |
| Open Claude Code | `claude` |

---

## Still Stuck? Here's What to Do

1. **Read the error message out loud** — sometimes just reading it helps you spot what went wrong
2. **Try the troubleshooting step** listed directly below the stage where you got stuck
3. **Restart your computer** and try that step again — this fixes a surprising number of issues
4. **Take a screenshot** of your screen and send it to your manager so they can see exactly what's happening

To take a screenshot:
- **Windows:** Press **Windows key + Shift + S**, then drag over the area you want to capture
- **Mac:** Press **Command (⌘) + Shift + 4**, then drag over the area you want to capture

---

*Luke Hawkins Life Coaching Training School — Internal Setup Guide*
*Version 1.0*
