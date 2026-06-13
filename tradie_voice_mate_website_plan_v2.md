# Tradie Voice Mate — One-Page Website Plan
### Full Copy, Section Structure & Design Brief
**Version 2.0 — June 2026**

---

## DESIGN BRIEF

### Concept Direction

This site has one job: get a busy tradie (or any small service business owner) to understand what Tradie Voice Mate does in under 10 seconds, experience it for themselves in the hero, and book a trial.

The design philosophy is clean, confident, and purposeful. Every element earns its place. The visual world should feel like a well-made tool — nothing wasted, nothing decorative for its own sake. It should balance effective product communication with eye-catching design execution, without tipping into tech-startup clichés or AI hype aesthetics.

The target market is actively resistant to corporate language and tech gimmickry. The site must speak their language, feel built for them, and look undeniably premium — while reading like it was made by someone who actually understands the trades.

The product is never referred to as "AI". Always "digital receptionist" or "your receptionist".

---

### Colour Palette

| Name | Hex | Role |
|---|---|---|
| **Near Black** | `#08081A` | Primary background — hero, dark sections, nav, footer |
| **Deep Teal** | `#00A87C` | Primary CTAs, active elements, waveform colour, social proof strip, final CTA section |
| **Forest Green** | `#16A34A` | Eyebrow text, accent labels, tick icons, SMS confirmation indicators |
| **Deep Violet** | `#4C1D95` | Logo gradient origin, "Wider Than Trades" section background, secondary accents, subtle border highlights |
| **Pale Mint** | `#ECFDF5` | Light section backgrounds, card fills |

**Usage notes:**
- Near Black and Pale Mint alternate as the primary dark/light section backgrounds throughout the page
- Deep Teal is the action colour — CTAs, interactive elements, the demo widget waveform
- Forest Green is the accent/emphasis colour — eyebrows, ticks, labels, not used for full section backgrounds
- Deep Violet is used sparingly and boldly — primarily in the logo gradient and as the "Wider Than Trades" section background, giving the brand's third colour a memorable moment on the page
- White (`#FFFFFF`) is used for headlines and body text on all dark and coloured backgrounds

---

### Typography

- **Display / Headlines / Large numerals / Eyebrow labels:** `Staatliches` — tall, confident, high-impact. Load from Google Fonts.
- **Body / Sub-copy / UI labels / Transcript text:** `DM Sans` (400–500 weight) — clean, legible, modern. Load from Google Fonts.

```html
<!-- Google Fonts import -->
<link href="https://fonts.googleapis.com/css2?family=Staatliches&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

**Type hierarchy:**
- Section headlines: Staatliches, very large
- Eyebrow labels: DM Sans, uppercase, wide letter-spacing, Forest Green
- Body/sub-copy: DM Sans 400–500
- CTA buttons: DM Sans 600
- Large feature numerals (01, 02, 03…): Staatliches, oversized, Deep Teal

---

### Logo

**File:** `Tradie_Voice_Mate_Icon.png`

A white phone handset icon on a deep navy circle, with a Forest Green → Deep Teal → Deep Violet gradient behind the handset. The gradient runs top-left (green) through mid (teal) to bottom-right (violet) — directly referencing the full brand palette in the logo mark.

**Usage:** Icon at 36px height in navigation, 48px in footer, alongside the wordmark "Tradie Voice Mate" in white DM Sans semibold.

---

### Imagery Direction

- **Real tradespeople** — not stock-photo models. On-site, hands dirty, tools in hand. Phones in hi-vis pockets, not on glass desks.
- **Diverse trades** — plumber under a sink, sparky up a ladder, arborist in a tree, pest tech suiting up, chef expediting orders. Mix of genders and ages.
- **No clichéd AI imagery** — no glowing brains, no robot hands, no neural network graphics. Zero.
- **UI mockups** — show the SMS summary landing on a real-looking work phone (an older Android or iPhone in a rugged case, not a pristine flagship). Show the CRM contact card populating. Make it feel like the actual product.
- **Animation** — used subtly and sparingly throughout. The hero demo widget contains the most complex animation on the page (waveform, transcript reveal, SMS notification). All other animations are lightweight: scroll-triggered section reveals, hover states, the social proof ticker. Never decorative for its own sake — every animation should communicate something or reward an interaction.

---

### Signature Element

The **Hero Demo Widget** — a self-contained interactive panel in the right column of the hero section. In its idle state, an animated waveform breathes gently with a large pulsing play button centred over it. On click, the actual demo audio plays, a conversation transcript builds line by line in sync with the audio, and an SMS lead summary slides in when the call ends. This is the moment the product sells itself. See `tvm_hero_c_brief.md` for the full widget specification.

---

---

## PAGE STRUCTURE & FULL COPY

---

### NAVIGATION

**Logo:** `Tradie_Voice_Mate_Icon.png` icon (36px height) + wordmark "Tradie Voice Mate" in white, DM Sans semibold

**Nav links (desktop only):** How It Works · Features · Integrations · Pricing · FAQ

**CTA Button (right):** "Start your trial" — Deep Teal fill (`#00A87C`), white text, DM Sans semibold, rounded-full pill shape

**Behaviour:** Transparent background when at top of page. Transitions to Near Black (`#08081A`) background on scroll past 80px. Sticky, `z-index: 50`. Mobile: hamburger menu collapses nav links into a full-width dropdown overlay.

---

### 01. HERO SECTION

**Background:** Near Black (`#08081A`). Full viewport height.

**Layout:** Two-column split. Left column (~55%) contains copy and CTAs. Right column (~45%) contains the interactive demo widget. Single column on mobile (copy above, widget below).

---

**LEFT COLUMN — Copy**

**Eyebrow label (DM Sans, uppercase, wide tracking, Forest Green `#16A34A`):**
```
Your digital receptionist · 24/7
```

**Headline (Staatliches, very large, white):**
```
While You're On The Job,
It's Got The Phone.
```

**Sub-copy (DM Sans, ~18–20px, light grey ~70% white opacity):**
```
Tradie Voice Mate answers every missed call for you — takes down the job details,
handles the questions, and texts you a summary. Whether you're on the tools,
in the ute, or it's 10pm on a Sunday.
```

**CTA Buttons (side by side, with gap):**
- Primary: `Start your trial →` — Deep Teal (`#00A87C`) fill, white text, DM Sans semibold, pill shape → links to Stripe trial URL
- Secondary: `Reserve your demo` — ghost/outline style (transparent fill, white border, white text) → links to Calendly

**Trust indicators (below buttons, small, Forest Green `#16A34A`):**
```
✓ No setup fee   ✓ No lock-in contract   ✓ First month 80% off
```

---

**RIGHT COLUMN — Interactive Demo Widget**

A dark, self-contained panel with rounded corners. Subtle border in Deep Violet (`#4C1D95`) at low opacity (~15%). This widget is the centrepiece of the page.

See `tvm_hero_c_brief.md` for the full detailed specification. Summary:

**Idle state:**
- Animated GSAP waveform — smooth, fluid SVG bars in Deep Teal (`#00A87C`), slow sine-wave breathing motion at rest
- Pulsing incoming call indicator (green dot)
- A large, clearly visible play button centred over the waveform — Deep Teal circular button, white play icon, soft pulse ring animation
- Label: "▶ Hear a live call"
- Secondary note below the play button (small, low-opacity): "Or call our demo line: (07) 4519 0301"

**On click — audio plays + widget animates through 4 phases:**
1. Call connecting — waveform activates, timer starts, "LIVE CALL" label appears
2. Transcript builds — caller and agent messages appear line by line in sync with audio
3. Data capture — name, job, postcode, callback time appear as small pills as spoken
4. Call ends — waveform drops, SMS notification slides in with full lead summary

**Scroll behaviour:** If audio is playing and the user scrolls past the hero, audio fades out over 1.5 seconds. Widget returns to idle on scroll back up.

**Audio file:** `Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3` (~1 min 10 sec)
**Timestamp sync data:** `tvm_arborist_call_transcript.md`

---

### 02. SOCIAL PROOF STRIP

**Background:** Deep Teal (`#00A87C`). Full width. Scrolling ticker on desktop, static on mobile.

**Content — rotating testimonials with star ratings:**

```
"Pays for itself the first week." — Plumber, QLD     ★★★★★

"It handled 6 calls on Saturday while I was flat out on a job. Legends." — Pest Control, NSW     ★★★★★

"My guys thought it was a real person answering." — Arborist, VIC     ★★★★★

"Set up in 10 minutes. Works perfectly." — Building Contractor, WA     ★★★★★
```

Text: white. Stars: white or pale mint.

---

### 03. THE PROBLEM SECTION

**Background:** Pale Mint (`#ECFDF5`) — clean break from the dark hero.

**Section eyebrow (DM Sans, uppercase, wide tracking, Forest Green `#16A34A`):**
```
The call you missed today
```

**Headline (Staatliches, large, Near Black `#08081A`):**
```
One Missed Call Is
One Lost Job.
```

**Three-column problem statements (icon + bold heading + body, Near Black text):**

**Column 1:**
```
📵

You're on site, can't answer.
They call your competitor instead.
The job's gone before you even know about it.
```

**Column 2:**
```
⏰

You're chasing leads at 9pm.
Writing down details on the back of your hand.
Playing phone tag all the next day.
```

**Column 3:**
```
💸

In trades, the first one to answer gets the job.
Every time you miss a call, that's someone else's invoice.
It adds up fast.
```

**Closing line (centred, DM Sans semibold, ~22px, Near Black):**
```
A digital receptionist doesn't care what time it is. It's always ready.
```

---

### 04. HOW IT WORKS

**Background:** Near Black (`#08081A`) — return to dark.

**Section eyebrow (DM Sans, uppercase, wide tracking, Forest Green `#16A34A`):**
```
Simple as
```

**Headline (Staatliches, large, white):**
```
Set Up In Minutes.
Runs Itself From There.
```

**Three-step flow (horizontal on desktop, vertical on mobile). Each step: icon + step number + heading + body copy:**

```
STEP 1                         STEP 2                         STEP 3
──────────────────────         ──────────────────────         ──────────────────────

📲                             🎙️                             📋

Forward your missed calls      It answers, has a real         You get an SMS summary
(takes 2 minutes).             conversation, and grabs        with the caller's name,
That's the setup done.         the details.                   job, and number.

                               Name, job, suburb,             Your CRM updates
                               callback time —                automatically. Ready
                               all captured.                  to call them back.
```

**Below steps, centred body text (DM Sans, grey):**
```
No scripts to write. No tech know-how needed.
We set up the system for your business — you just forward the calls.
```

---

### 05. FEATURES

**Background:** Near Black (`#08081A`) — continues dark, flows directly from How It Works.

**Section eyebrow (DM Sans, uppercase, wide tracking, Forest Green `#16A34A`):**
```
What it does for you
```

**Headline (Staatliches, large, white):**
```
A Receptionist That
Actually Earns Its Keep.
```

**Feature layout: Large Number Columns (6 features, 2 rows × 3 columns on desktop).**

Each feature: oversized Staatliches numeral in Deep Teal (`#00A87C`), bold white headline below, DM Sans body below that. Columns separated by subtle vertical dividers at low opacity.

```
01                          02                          03
──────────────              ──────────────              ──────────────
24/7 coverage               SMS in 30 seconds           Sounds like a real person

On site, in the ute,        Full lead details to         A natural, Australian-
or 10pm Sunday —            your phone the moment        accented conversation.
every call answered.        the call ends.               Callers don't feel
                                                         processed.

04                          05                          06
──────────────              ──────────────              ──────────────
Flags urgent jobs           Handles message              CRM connected
                            taking too

Emergency calls             For existing customers        Plugs into ServiceM8,
get priority-flagged        calling back, it             Monday.com, Formitize.
so you know what            switches to quick            Job details land
to action first.            message-taking mode.         automatically.
```

---

### 06. INTEGRATIONS

**Background:** Pale Mint (`#ECFDF5`) — light break.

**Section eyebrow (DM Sans, uppercase, wide tracking, Forest Green `#16A34A`):**
```
Works with your setup
```

**Headline (Staatliches, large, Near Black `#08081A`):**
```
Already Using Job Management Software?
Even Better.
```

**Body copy (DM Sans, Near Black):**
```
Tradie Voice Mate plugs straight into the tools you're already running.
No data re-entry. No double handling. The call happens, the details land
in your system automatically, and you get on with the job.
```

**Integration logo row:**
ServiceM8 · Monday.com · Formitize · [expandable: "and more — ask us"]

**Below logos, small text (DM Sans, muted):**
```
Don't see your software? Get in touch — we're adding integrations regularly.
```

---

### 07. WIDER THAN TRADES

**Background:** Deep Violet (`#4C1D95`) — bold brand moment, highest-contrast section on the page.

**Section eyebrow (DM Sans, uppercase, wide tracking, white at 70% opacity):**
```
Not just for tradies
```

**Headline (Staatliches, large, white):**
```
Any Aussie Business
That Lives Or Dies By The Phone.
```

**Body copy (DM Sans, white):**
```
Tradie Voice Mate was built for the tools-in-hand, on-site world —
but a digital receptionist works for any small business that can't always pick up.
Restaurants, salons, clinics, landscapers, cleaners, vets, mechanics.
If a missed call means a missed customer, this is for you.
```

**Small icon row (white icons + white labels):**
```
🔧 Plumbers   ⚡ Electricians   🌳 Arborists   🐛 Pest Control
🏗️ Builders   🍽️ Restaurants    💈 Salons      🔩 Mechanics
```

---

### 08. PRICING

**Background:** Near Black (`#08081A`) — dark return.

**Section eyebrow (DM Sans, uppercase, wide tracking, Forest Green `#16A34A`):**
```
Pricing
```

**Headline (Staatliches, large, white):**
```
Dead Simple.
No Surprises.
```

**Single pricing card (centred, white card on dark background):**

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   TRADIE VOICE MATE                                      │
│                                                          │
│   ~~$290~~/month    ★   FIRST MONTH: $58                │
│                         (80% off — no promo code needed) │
│                                                          │
│   ✓  Unlimited call answering, 24/7                      │
│   ✓  SMS summaries after every call                      │
│   ✓  CRM integration included                           │
│   ✓  Custom setup for your business                     │
│   ✓  No setup fee                                        │
│   ✓  No lock-in contract — cancel any time              │
│                                                          │
│      [ Start your $58 trial → ]   ← Deep Teal CTA       │
│      [ Reserve your demo ]        ← Ghost/outline CTA   │
│                                                          │
│   "We hand-pick a small number of businesses to          │
│    work with. If we reach out, take us up on it."        │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Below card, small text (DM Sans, Forest Green `#16A34A`):**
```
After the trial month, it's $290/month. No contracts, no lock-in.
If it's not making you money, cancel. Simple as that.
```

---

### 09. FAQ

**Background:** Pale Mint (`#ECFDF5`) — light section.

**Section eyebrow (DM Sans, uppercase, wide tracking, Forest Green `#16A34A`):**
```
Fair questions
```

**Headline (Staatliches, large, Near Black `#08081A`):**
```
Got A Question?
Good — Here's The Answers.
```

**Accordion items (Alpine.js, smooth expand/collapse):**

**Q: How does the call forwarding work?**
```
You set up a simple call-forward from your existing business number so that when
a call goes unanswered (after X rings), it forwards to your Tradie Voice Mate line.
Your existing number stays the same. Most providers take 2 minutes to set this up.
We walk you through it.
```

**Q: Will my customers know they're not talking to a real person?**
```
It discloses that it's a digital receptionist in the greeting — legally required
and the right thing to do. What surprises people is how natural the conversation
feels. Most callers say it sounds more helpful than being put on hold.
```

**Q: What if someone has a really unusual request?**
```
It's built to handle the common scenarios — new jobs, follow-ups, urgent calls,
message-taking. Anything it can't confidently handle gets flagged for you to call back.
It won't make things up.
```

**Q: What job management software does it work with?**
```
Right now, ServiceM8, Monday.com, and Formitize. More on the way.
If you're using something else, get in touch — we'll let you know what's coming.
```

**Q: What if I want to cancel?**
```
No problem. No contracts, no lock-in, no awkward cancellation process.
Just let us know.
```

**Q: Is this just for tradies?**
```
Nope. It works for any small business that relies on inbound calls —
restaurants, salons, clinics, any service-based business. The setup gets
tailored to your industry and the calls you typically receive.
```

**Q: How long does setup take?**
```
We build and configure your system — usually live within 24 hours of signing up.
The only thing you do is set up call forwarding, which takes about 2 minutes.
We'll walk you through it.
```

---

### 10. FINAL CTA

**Background:** Deep Teal (`#00A87C`) — energetic full-width close.

**Headline (Staatliches, very large, white):**
```
Stop Missing Jobs.
Start Your Trial Today.
```

**Sub-copy (DM Sans, white):**
```
$58 for your first month. No setup fee. No lock-in.
If it doesn't earn its keep, walk away — no hard feelings.
```

**CTA Buttons (side by side, centred):**
- Primary: `Start your trial →` — white fill, Near Black text (inverted for contrast on teal)
- Secondary: `Reserve your demo` — white outline, white text

**Below buttons, small text (DM Sans, white at 75% opacity):**
```
Or call us directly: 0419 720 285 — we're real people, always happy to chat.
```

---

### 11. FOOTER

**Background:** Near Black (`#08081A`).

**Left:** `Tradie_Voice_Mate_Icon.png` icon (48px) + wordmark "Tradie Voice Mate" in white DM Sans semibold + tagline in small muted text: *"Your calls, covered."*

**Centre — Quick links (DM Sans, muted white):**
```
How It Works · Features · Integrations · Pricing · FAQ
Privacy Policy · Terms of Service
```

**Right (DM Sans, muted white):**
```
A Tradie Web Mate product.
tradiewebmate.com.au

📞 0419 720 285
📧 info@tradiewebmate.com.au
```

**Bottom strip (DM Sans, very small, low-opacity white):**
```
© 2026 Tradie Voice Mate. ABN XX XXX XXX XXX. Built for Australian businesses.
Calls are answered on a recorded line. See Privacy Policy for full details.
```

---

---

## COPYWRITING PRINCIPLES

1. **Never say "AI"** — always "digital receptionist" or "your receptionist".
2. **Always trades-native** — "on the tools", "in the ute", "on site", "flat out", "get the job". Never "optimise workflow" or "leverage technology".
3. **Short sentences** — punchy. One idea per sentence. If in doubt, cut it.
4. **Direct address** — "you", not "businesses" or "users".
5. **The hero does the heavy lifting** — the interactive demo widget in the hero is the first thing people see and experience. It should sell the product before any copy is read. Every section below confirms the decision already made at the hero.
6. **No tech tropes** — no "cutting-edge", "revolutionary", "game-changing", "AI-powered". These words belong on competitor sites. We don't need them.
7. **Confidence, not hype** — the copy sounds like a mate who knows the product works and doesn't need to oversell it.

---

## LINKS & KEY INFORMATION

| Item | Value |
|---|---|
| Trial signup | `https://buy.stripe.com/8x24gAf7seyOgki0Ir3ks00?prefilled_promo_code=FIRSTMONTH80` |
| Demo booking | `[INSERT CALENDLY LINK]` |
| Demo phone | `(07) 4519 0301` |
| Contact phone | `0419 720 285` |
| Contact email | `info@tradiewebmate.com.au` |
| Parent brand | `tradiewebmate.com.au` |
| Live domain | `tradievoicemate.com.au` |

---

## PAGE SECTION ORDER (Summary)

```
NAV                Near Black → transparent to solid on scroll
01  HERO           Near Black — two-column: copy left, demo widget right
02  SOCIAL PROOF   Deep Teal — credibility ticker
03  PROBLEM        Pale Mint — hit the pain point
04  HOW IT WORKS   Near Black — simple 3-step process
05  FEATURES       Near Black — large number columns
06  INTEGRATIONS   Pale Mint — technical confidence
07  WIDER          Deep Violet — expand the market, bold brand moment
08  PRICING        Near Black — clear, confident pricing
09  FAQ            Pale Mint — remove objections
10  FINAL CTA      Deep Teal — energetic close
11  FOOTER         Near Black — professional wrap
```

**Total sections: 11 (plus Nav)**
**Estimated page scroll depth:** ~3,200–3,800px desktop / ~5,500px mobile
**Page load target:** < 2.5 seconds. No autoplay audio.

---

## REFERENCE FILES

| File | Purpose |
|---|---|
| `tvm_hero_c_brief.md` | Full spec for the hero interactive demo widget |
| `tvm_arborist_call_transcript.md` | Timestamped audio transcript for widget sync |
| `Tradie_Voice_Mate_Icon.png` | Brand logo icon |
| `Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3` | Demo audio (1:10) |

---

*Document prepared for Tradie Voice Mate — a Tradie Web Mate product.*
*Version 2.0 — June 2026*
*Stack: Astro + Tailwind CSS + Alpine.js + GSAP*
*Hosting: SiteGround static → tradievoicemate.com.au*
