# Claude Code Setup Guide — Tradie Voice Mate Website
### Complete beginner's guide — no prior experience needed

---

## Before you start — what you need

- A computer running Mac, Windows, or Linux
- A Claude Pro, Max, or Team subscription (claude.ai)
- The four project files from this package (CLAUDE.md, website plan, hero brief, transcript)
- The logo PNG and audio MP3
- About 20 minutes to set up, then let it run

---

## Step 1 — Install Node.js

Node.js is a tool Claude Code needs to run. You only install this once.

1. Go to **nodejs.org**
2. Click the big green **"LTS"** download button (LTS = stable version, use this one)
3. Open the downloaded file and follow the installer — just click Next/Continue through everything
4. When it's done, open your terminal (see below) and check it worked:

```bash
node --version
```

You should see something like `v22.x.x`. If you do, Node.js is installed.

**How to open a terminal:**
- **Mac:** Press `Cmd + Space`, type "Terminal", press Enter
- **Windows:** Press `Windows key`, type "PowerShell", press Enter (or use Windows Terminal if you have it)

---

## Step 2 — Install Claude Code

In your terminal, paste this and press Enter:

```bash
npm install -g @anthropic-ai/claude-code
```

This downloads and installs Claude Code globally. It will take about 30–60 seconds. When it's done, check it worked:

```bash
claude --version
```

You should see a version number. Done.

---

## Step 3 — Create your project folder

In the terminal, run these commands one at a time:

```bash
# Create a new folder for the project
mkdir tradie-voice-mate-website

# Navigate into it
cd tradie-voice-mate-website

# Initialise a git repository (for version control — highly recommended)
git init
```

If git isn't installed and you get an error on the last line, skip it for now — it's optional but good practice.

---

## Step 4 — Add your project files

Open the `tradie-voice-mate-website` folder in Finder/File Explorer and copy these files in:

```
tradie-voice-mate-website/
├── CLAUDE.md                                        ← The master brief (from this package)
├── tradie_voice_mate_website_plan.md                ← Full website copy
├── tvm_hero_c_brief.md                              ← Hero widget spec
├── tvm_arborist_call_transcript.md                  ← Audio sync timestamps
└── public/
    └── assets/
        ├── Tradie_Voice_Mate_Icon.png               ← Logo file
        └── Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3   ← Demo audio
```

Create the `public/assets/` folder manually if it doesn't exist yet:

```bash
mkdir -p public/assets
```

Then copy the logo and audio file into `public/assets/`.

---

## Step 5 — Before you launch — fill in the two placeholders in CLAUDE.md

Open `CLAUDE.md` in any text editor (Notepad, TextEdit, VS Code, whatever you have) and find these two lines:

```
CALENDLY_LINK: [INSERT YOUR CALENDLY LINK HERE]
```

Replace `[INSERT YOUR CALENDLY LINK HERE]` with your actual Calendly booking URL.
Everything else in CLAUDE.md is already populated and ready.

---

## Step 6 — Launch Claude Code

In your terminal (make sure you're still in the `tradie-voice-mate-website` folder):

```bash
claude
```

**First launch only:** Claude Code will ask you to log in. Select the option to use your claude.ai account and follow the prompts in your browser. You only do this once.

After logging in, you'll see the Claude Code prompt — a `>` cursor waiting for your input.

---

## Step 7 — Select Opus 4.7

Type this command and press Enter:

```
/model claude-opus-4-7
```

Claude Code will confirm the model switch. You're now running on Opus 4.7 for the entire session.

---

## Step 8 — Give it the build prompt

Copy and paste this exactly into the Claude Code prompt and press Enter:

```
Read CLAUDE.md fully before doing anything else. Then read all referenced files: tradie_voice_mate_website_plan.md, tvm_hero_c_brief.md, and tvm_arborist_call_transcript.md. Once you have a complete picture of the project, initialise a new Astro project in this directory and build the full Tradie Voice Mate website. Work section by section, completing each component before moving to the next. Prioritise the hero section and interactive demo widget — these are the most important elements. After each major section is built, confirm what you've completed and what's next.
```

Then leave it alone and let it work. This will take a while — a full site build with Opus 4.7 can take 20–60 minutes depending on complexity. Don't interrupt it unless it asks you a question or gets stuck.

---

## Step 9 — Preview the site as it builds

Open a second terminal window (same folder) and run:

```bash
npm run dev
```

This starts a local preview server. Open your browser and go to:

```
http://localhost:4321
```

You'll see the site live as Claude Code builds it. Refresh as sections complete.

---

## What to do if Claude Code gets stuck

If it stops mid-build, seems confused, or you see an error:

**Option A — Keep going (best first try):**
```
Continue building where you left off. What's the next section to complete?
```

**Option B — Compact the context (if responses get slow):**
```
/compact
```
This compresses the conversation history. Then remind it what's left.

**Option C — Check what's built so far:**
```
List every file you've created so far and confirm which sections of the website are complete.
```

---

## Step 10 — Build for production

Once you're happy with how the site looks locally, run:

```bash
npm run build
```

This compiles everything into a `dist/` folder. This is the folder you upload to SiteGround.

---

## Step 11 — Upload to SiteGround

### Option A — Via File Manager (easiest)

1. Log in to your SiteGround account → Go to **cPanel** → **File Manager**
2. Navigate to **public_html** (or the folder for `tradievoicemate.com.au` if it's an addon domain)
3. Upload **all the contents** of your local `dist/` folder (not the folder itself — the files inside it)
4. Open `tradievoicemate.com.au` in a browser to confirm it's live

### Option B — Via FTP (for larger uploads)

1. Download **FileZilla** (free) from filezilla-project.org
2. In SiteGround cPanel → **FTP Accounts** → create or find your FTP credentials (host, username, password)
3. Connect FileZilla using those credentials
4. Drag the contents of your local `dist/` folder into the `public_html` folder on the right

---

## Key Claude Code commands to know

| Command | What it does |
|---|---|
| `/model claude-opus-4-7` | Switch to Opus 4.7 |
| `/model` | Open the model picker |
| `/compact` | Compress conversation to free up context |
| `/clear` | Start a completely fresh conversation |
| `/help` | See all available commands |
| `Ctrl+C` | Stop Claude Code mid-response |

---

## Tips for getting the best result

**Let it plan first.** If it asks whether to start with the project structure or jump straight to code — let it structure first. It produces better output when it's mapped the full task upfront.

**Don't interrupt during builds.** If it's generating a long component, wait for it to finish before giving feedback. Interrupting mid-generation causes it to lose track.

**Commit to git regularly.** After each section looks good, run:
```bash
git add .
git commit -m "Hero section complete"
```
This means you can always roll back if something goes wrong.

**Preview constantly.** Keep `npm run dev` running in a second terminal so you can see changes in real time.

**If it asks a question you can't answer** — for anything technical, just say "use best practice" and it will make the right call.

---

## Folder structure overview (what Claude Code will create)

```
tradie-voice-mate-website/
├── CLAUDE.md                       ← You added this
├── [reference docs]                ← You added these
├── public/
│   └── assets/
│       ├── Tradie_Voice_Mate_Icon.png
│       └── Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── DemoWidget.astro        ← The interactive audio player
│   │   ├── SocialProof.astro
│   │   ├── Problem.astro
│   │   ├── HowItWorks.astro
│   │   ├── Features.astro
│   │   ├── Integrations.astro
│   │   ├── WiderThanTrades.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   ├── FinalCTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Re-opening the project later

Every time you want to work on the site again:

```bash
# 1. Open terminal and navigate to the project
cd tradie-voice-mate-website

# 2. Launch Claude Code
claude

# 3. Set the model
/model claude-opus-4-7

# 4. Tell it what you want to change or add
```

That's it. Claude Code remembers the project structure from the files — you don't need to re-explain anything, just tell it what to do.

---

*Setup guide prepared for Tradie Voice Mate — Tradie Web Mate project.*
*Stack: Astro + Tailwind CSS + Alpine.js + GSAP*
*Model: Claude Opus 4.7*
*Hosting: SiteGround static files → tradievoicemate.com.au*
