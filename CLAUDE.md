# CLAUDE.md — Tradie Voice Mate Website
### Master project brief for autonomous build with Claude Opus 4.7

---

## Autonomous operation instructions

This build may run overnight unattended. Treat every session as potentially
the first session after a limit reset. At the start of any session:

1. Immediately read PROGRESS.md
2. Run `git log --oneline` to confirm what is committed
3. Continue from the first incomplete item — do not ask for confirmation,
   do not summarise what you're about to do, just build

Commit to git and update PROGRESS.md after EVERY component, not just
after every section. The more granular the commits, the less work is
lost if a limit is hit mid-section.

Use /compact proactively every 30–40 minutes to extend the session as
long as possible before limits are reached.

---

## Read these files first — in this order

Before writing a single line of code, read the following files completely:

1. `tradie_voice_mate_website_plan.md` — Full website copy, all 12 sections, all CTAs
2. `tvm_hero_c_brief.md` — Hero section interactive demo widget spec
3. `tvm_arborist_call_transcript.md` — Audio sync timestamps for the hero widget

These are your source of truth for copy and interactive behaviour. Do not invent copy — use what is in these files.

---

## Session continuity

This project may be built across multiple Claude Code sessions due to usage limits.

At the start of every session:
1. Run `git log --oneline` to see what's committed
2. Read `PROGRESS.md` to see what's marked complete
3. Read the existing files in `src/components/` to understand what's built
4. Continue from the first incomplete item — never rebuild completed work

After completing each section:
1. Update PROGRESS.md to mark it done
2. Run: git add . && git commit -m "[section name] complete"
3. Then move to the next section

If you are interrupted mid-section, leave a note in PROGRESS.md:
- [ ] Demo widget — IN PROGRESS — waveform idle state done, play handler not started

## Model routing

This project uses the `opusplan` alias. Do not manually switch models during
the build — opusplan handles routing automatically. Opus is used for reading
briefs, planning component structure, and architecture decisions. Sonnet handles
code generation, file writing, and implementation. If asked to `/model` switch
manually, decline and stay on opusplan.

---

## Project summary

Build a single-page marketing website for **Tradie Voice Mate** — a digital voice receptionist SaaS product for Australian trade businesses and small service businesses. The site's job is to make a visitor immediately understand what the product does, hear it in action, trust it, and sign up for a trial.

The tone is trades-native, straight-talking, and warm — not corporate, not tech-startup. The product is never referred to as "AI" — always "digital receptionist."

**Live domain:** `tradievoicemate.com.au`
**Hosting:** SiteGround static files — build output goes to `dist/`, no server-side rendering needed
**Parent brand:** Tradie Web Mate (`tradiewebmate.com.au`)

---

## Tech stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Astro (latest stable) | Static output, component-based |
| Styling | Tailwind CSS v3 | Utility-first, configure design tokens |
| Interactivity | Alpine.js (CDN) | State management for FAQ, nav, demo widget |
| Animation | GSAP (CDN) | Waveform animation, scroll triggers, premium transitions |
| Fonts | Google Fonts CDN | Staatliches + DM Sans |

**Install Astro with:**
```bash
npm create astro@latest . -- --template minimal --install --no-git
npx astro add tailwind
```

**Load Alpine.js and GSAP via CDN in Layout.astro** — do not install as npm packages unless there is a specific reason.

---

## Design tokens

Configure all of these in `tailwind.config.mjs` as custom colours and extend the default theme.

### Colour palette

```js
colors: {
  'near-black':   '#08081A',   // Primary background — hero, dark sections
  'deep-teal':    '#00A87C',   // Primary CTA, active elements, waveform
  'forest-green': '#16A34A',   // Eyebrow text, accent labels, tick icons, SMS indicators
  'deep-violet':  '#4C1D95',   // Logo gradient, secondary accents, dividers
  'pale-mint':    '#ECFDF5',   // Light section backgrounds, card fills
}
```

### Typography

Load from Google Fonts in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Staatliches&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

Configure in Tailwind:
```js
fontFamily: {
  display: ['Staatliches', 'sans-serif'],   // Headlines, large numerals, eyebrow labels
  body:    ['DM Sans', 'sans-serif'],        // Body copy, transcript, UI labels
}
```

### Usage rules
- All section headlines use `font-display`
- All body copy, sub-copy, descriptions use `font-body`
- Eyebrow labels (small caps above headlines) use `font-body uppercase tracking-widest` in `forest-green`
- CTA buttons use `font-body font-semibold`

---

## Assets

All assets are in `public/assets/`. Reference them in code as `/assets/filename`.

| File | How to use |
|---|---|
| `Tradie_Voice_Mate_Icon.png` | Logo icon — used in nav and footer. The icon is a white phone handset on a dark navy circle with a green-to-violet gradient shadow. Use at 36px height in nav, 48px in footer. |
| `Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3` | Demo audio for the hero widget — 1 min 10 seconds. Referenced as `/assets/Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3`. |

**Favicon:** Use the logo PNG as the favicon in `<head>`:
```html
<link rel="icon" type="image/png" href="/assets/Tradie_Voice_Mate_Icon.png">
```

---

## Global links and CTAs

| Reference | URL |
|---|---|
| Trial signup (Stripe) | `https://buy.stripe.com/8x24gAf7seyOgki0Ir3ks00?prefilled_promo_code=FIRSTMONTH80` |
| Demo booking (Calendly) | `calendly.com/tradievoicemate` ← Replace with actual Calendly URL before build |
| Demo phone number | `(07) 4519 0301` |
| Contact phone | `0419 720 285` |
| Parent site | `https://tradiewebmate.com.au` |

**Two CTA variants used throughout the page:**
- **Primary:** "Start your trial" → links to Stripe trial URL
- **Secondary:** "Reserve your demo" → links to Calendly URL

On the hero section the CTAs are:
- "Start your trial →" (primary, teal background)
- "Reserve your demo" (secondary, ghost/outline)
- A large, clearly visible play button on the demo widget itself (separate from the nav CTAs)

---

## Page structure

Build these sections in order. Each section is its own Astro component in `src/components/`.

```
01 Nav              (sticky, transparent → solid on scroll)
02 Hero             (dark, split layout — text left, demo widget right)
03 Social proof     (orange/teal ticker strip)
04 Problem          (light section — pain points)
05 How it works     (dark — 3 steps)
06 Features         (large number columns style — see website plan)
07 Integrations     (light — logos + copy)
08 Wider than trades (teal/forest-green section)
09 Pricing          (dark — single card)
10 FAQ              (light — accordion, Alpine.js)
11 Final CTA        (teal — closing punch)
12 Footer           (dark)
```

Read `tradie_voice_mate_website_plan.md` for the complete copy for each section. Do not paraphrase — use the copy as written.

---

## Navigation component

**Behaviour:** Transparent background when at top of page. Transitions to `near-black` background on scroll (add `bg-near-black` class via Alpine.js or GSAP ScrollTrigger after 80px scroll). Sticky (`position: sticky; top: 0; z-index: 50`).

**Contents:**
- Left: Logo icon (`Tradie_Voice_Mate_Icon.png`) + wordmark text "Tradie Voice Mate" in white, `font-body font-semibold`
- Centre: Nav links — How It Works · Features · Integrations · Pricing · FAQ (hidden on mobile, visible md:)
- Right: "Start your trial" button — `deep-teal` background, white text, rounded-full

**Mobile:** Hamburger menu (Alpine.js toggle). Links stack vertically in a dropdown overlay on `near-black` background.

---

## Hero section — CRITICAL — read tvm_hero_c_brief.md

The hero is the most important section on the page. It must be built to spec. Refer to `tvm_hero_c_brief.md` for the full brief. Summary of key requirements:

### Layout
- Dark `near-black` background, full viewport height
- **Left column (55%):** Eyebrow label in `forest-green` + large Staatliches headline + body copy + two CTA buttons + trust indicators
- **Right column (45%):** The interactive demo widget (see below)

### Hero copy (from website plan)
```
Eyebrow:    "Your digital receptionist · 24/7"
Headline:   "While You're On The Job,\nIt's Got The Phone."
Sub-copy:   "Tradie Voice Mate answers every missed call for you — takes down the job details, handles the questions, and texts you a summary. Whether you're on the tools, in the ute, or it's 10pm on a Sunday."
CTA 1:      "Start your trial →" (deep-teal, primary)
CTA 2:      "Reserve your demo" (ghost outline)
Trust tags: "✓ No setup fee   ✓ No lock-in contract   ✓ First month 80% off"
```

### Interactive demo widget

This is the hero section's signature element. It sits in the right column of the hero as a dark, self-contained panel.

**Idle state (before play is pressed):**
- Dark panel with rounded corners and a subtle border (`deep-violet` at low opacity, ~15%)
- A pulsing "incoming call" indicator at the top — green dot pulsing with CSS animation
- An animated GSAP waveform — smooth, fluid SVG bars in `deep-teal`, breathing gently at rest (not bouncing — slow sine wave motion across all bars)
- A large, clearly visible play button in the centre — circular, `deep-teal` background, white play icon, with a soft pulse ring animation around it. Text label: "▶ Hear a live call"
- The play button must be the visual focal point — it's the primary interaction on the page

**On click (play pressed):**

Audio begins: `/assets/Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3`

The widget animates through 4 phases in sync with the audio. Refer to `tvm_arborist_call_transcript.md` for exact timestamps. Summary of phases:

**Phase 1 (0:00–0:10):** Call connecting → waveform activates and animates reactively. Show a call timer counting up. The pulsing indicator turns solid green. "LIVE CALL" label appears.

**Phase 2 (0:11–0:43):** Transcript builds. Messages appear line by line timed to the audio:
- Caller messages: left-aligned, dark background bubble, light text
- Agent (receptionist) messages: right-aligned, `deep-teal` background, white text
- Each message fades/slides in — do not show all at once
- Use the transcript from `tvm_arborist_call_transcript.md` for exact lines and timestamps

**Phase 3 (0:29–0:51):** As key data is captured, show small data pills populating alongside the transcript — Name: John, Job: [tree issue], Postcode: [4xxx], Callback: [Next Thursday 5pm]. These appear subtly as the relevant line is spoken.

**Phase 4 (1:05–end):** Call ends → waveform drops to flat. Timer stops. "Call ended" state shown briefly. Then after 0.8s, an SMS notification slides in from the right — styled as a real iOS/Android notification:

```
📋  New lead — Tradie Voice Mate

Name:       John
Job:        Large tree leaning near house — urgent
Postcode:   [from transcript]
Callback:   Next Thursday ~5pm
Phone:      [from transcript]
```

**Scroll fade-out:** If audio is playing and the user scrolls past the hero section, fade the audio out over 1.5 seconds using GSAP ScrollTrigger as the section leaves the viewport. Audio stops completely once faded. Widget returns to idle if user scrolls back.

**Implementation notes:**
- Use the Web Audio API for real-time waveform visualisation if possible. If not, animate a pre-defined GSAP waveform timeline in sync with the audio timestamps.
- Message timestamps should be hardcoded from the transcript file — do not try to do real-time transcription
- Alpine.js for state management (idle / playing / ended states)
- GSAP for all animations (waveform, message reveals, SMS slide-in, scroll fade)

---

## Features section — large number columns style

Use Feature Style 2 from the design brief: large `deep-teal` numerals (Staatliches, very large), feature headline below, short body text below that. Dark `near-black` background. Four columns separated by subtle dividers.

Columns:
1. 01 · 24/7 coverage · "On site, in the ute, or 10pm Sunday — every call answered."
2. 02 · SMS in 30 seconds · "Full lead summary to your phone the moment the call ends."
3. 03 · CRM connected · "Plugs straight into ServiceM8, Monday.com, and Formitize."
4. 04 · Flags the urgent ones · "Emergency jobs go straight to the top of your list."

Full copy and additional features are in `tradie_voice_mate_website_plan.md`.

---

## FAQ section

Alpine.js accordion. Each item has a question that toggles the answer open/close. Use `x-data`, `x-show`, `x-transition`. Smooth expand/collapse. Plus/minus icon rotates on toggle.

---

## SEO meta tags

Add to `Layout.astro` `<head>`:

```html
<title>Tradie Voice Mate — Your Digital Receptionist, 24/7</title>
<meta name="description" content="Never miss a job again. Tradie Voice Mate answers your missed calls, captures lead details, and texts you a summary — 24/7, while you're on the tools.">
<meta property="og:title" content="Tradie Voice Mate — Your Digital Receptionist, 24/7">
<meta property="og:description" content="Never miss a job again. Tradie Voice Mate answers your missed calls, captures lead details, and texts you a summary — 24/7.">
<meta property="og:image" content="/assets/Tradie_Voice_Mate_Icon.png">
<meta property="og:url" content="https://tradievoicemate.com.au">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://tradievoicemate.com.au">
```

---

## Things to avoid — hard constraints

- **Never use the word "AI"** — always "digital receptionist" or "your receptionist"
- **No tech-startup visual clichés** — no glowing neural networks, no robot imagery, no particle effects
- **No gradients on the Tailwind widget chrome** — the palette is flat, except for the logo gradient which is an image asset
- **No Lorem Ipsum** — all copy comes from `tradie_voice_mate_website_plan.md`
- **No auto-playing audio** — the demo widget only plays when the user clicks the play button
- **Do not exceed 4 JavaScript libraries** — Tailwind (CSS), Alpine.js (CDN), GSAP (CDN), and optionally one icon library. No React, no Vue, no jQuery.
- **Mobile-first responsive** — every section must look correct on a 375px mobile viewport as well as 1280px desktop
- **Keep `dist/` output fully static** — no server-side rendering, no API routes, pure HTML/CSS/JS

---

## Responsive breakpoints

Use Tailwind's default breakpoints. Key layout shifts:
- **Mobile (< 768px):** All sections stack vertically. Hero is single column — widget below the copy. Nav collapses to hamburger.
- **Tablet (768px–1024px):** Hero widget is visible alongside copy. Features shift to 2×2 grid.
- **Desktop (1024px+):** Full layout as specified per section.

---

## Build and output

```bash
# Development (live preview)
npm run dev          → http://localhost:4321

# Production build
npm run build        → outputs to dist/

# Preview production build locally
npm run preview      → http://localhost:4321
```

Upload all contents of `dist/` to SiteGround `public_html` folder for `tradievoicemate.com.au`.

---
## Progress tracking

Maintain a file called PROGRESS.md in the project root. After completing each item
in the build order, update PROGRESS.md to mark it done with a timestamp.
Format:

- [x] Nav component — done
- [x] Hero copy — done
- [ ] Demo widget — in progress
- [ ] Social proof — not started

Update this file before every git commit. This file is how a new session
knows exactly where to resume without needing conversation history.
---
## Build order recommendation

Work through sections in this order to maintain momentum:

1. Project init + Tailwind config + Layout.astro (fonts, meta, CDN imports)
2. Nav component
3. Hero copy column (left side only — no widget yet)
4. Social proof ticker
5. Problem section
6. How it works
7. Features (large numbers style)
8. Integrations
9. Wider than trades
10. Pricing
11. FAQ (accordion)
12. Final CTA
13. Footer
14. **Hero demo widget (DemoWidget.astro)** — build last, after all other sections are solid
15. Mobile responsiveness pass across all sections
16. Final QA: check all links, audio playback, scroll fade, animations

---

## Definition of done

The site is complete when:
- All 12 sections are built with copy matching `tradie_voice_mate_website_plan.md`
- The hero demo widget plays the audio, shows transcript in sync, and displays the SMS notification
- Scroll fade-out works when audio is playing
- All CTA buttons link to correct URLs (Stripe, Calendly)
- The site is fully responsive at 375px and 1280px
- `npm run build` completes without errors
- The `dist/` folder is ready for SiteGround upload

---

*Project: Tradie Voice Mate — tradievoicemate.com.au*
*Built with: Astro + Tailwind CSS + Alpine.js + GSAP*
*Model: opusplan (Opus for planning and architecture, auto-routes to Sonnet for implementation)*
*Prepared by: Tradie Web Mate*
