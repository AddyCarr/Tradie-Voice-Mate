# Tradie Voice Mate — Design System

> **Your calls, covered.** The brand system for Tradie Voice Mate — a digital voice receptionist for Australian trade and small-service businesses. A *Tradie Web Mate* product.

This repository is a design system, not a website. It holds the brand's foundations (colour, type, spacing tokens), reusable React component primitives, foundation specimen cards, and a full one-page marketing-site UI kit. Consuming projects link one file — `styles.css` — and pull components from the compiled bundle.

---

## What is Tradie Voice Mate?

A **digital voice receptionist** that answers a tradie's missed calls 24/7, has a natural conversation with the caller, captures the job details (name, job, postcode, callback time, urgency), and texts the tradie a lead summary the moment the call ends. It plugs into job-management software (ServiceM8, Monday.com, Formitize).

The product is sold one job at a time: *the first tradie to answer gets the job.* Every missed call is a competitor's invoice. The site's whole purpose is to let a busy tradie understand that in ten seconds, hear it work (the hero demo widget), and start a trial.

**Hard rule that defines the brand:** the product is **never** called "AI". It is always a "digital receptionist" or "your receptionist".

### Source material
This system was built from the brief and assets in the GitHub repo:
- **`AddyCarr/Tradie-Voice-Mate`** — https://github.com/AddyCarr/Tradie-Voice-Mate
  - `tradie_voice_mate_website_plan_v2.md` — full section-by-section copy + design brief
  - `tvm_hero_c_brief.md` — the hero demo-widget specification
  - `tvm_arborist_call_transcript.md` — timestamped call transcript driving the widget
  - `CLAUDE.md` — build brief (intended stack: Astro + Tailwind + Alpine.js + GSAP)
  - `public/assets/Tradie_Voice_Mate_Icon.png` — the logo mark (imported here)

The website itself had not been built in the repo (only `env.d.ts` existed under `src/`), so the marketing-site UI kit here is constructed faithfully from the written brief and copy. Explore the repo above to go deeper — the copy in the plan document is the source of truth and should not be paraphrased.

- Parent brand: **Tradie Web Mate** — https://tradiewebmate.com.au
- Product domain: `tradievoicemate.com.au`

---

## CONTENT FUNDAMENTALS

The voice is **trades-native, straight-talking, and warm** — like a mate who knows the product works and doesn't need to oversell it. It is the opposite of corporate SaaS copy.

**Person & address.** Always direct second person — **"you"**, never "businesses", "users", or "clients". *"While you're on the job, it's got the phone."*

**Sentence shape.** Short. Punchy. One idea per sentence. Fragments are fine for rhythm. *"On site, in the ute, or 10pm Sunday — every call answered."* When in doubt, cut it.

**Trades vernacular** is used deliberately and warmly: *on the tools · in the ute · on site · flat out · get the job · give me a buzz · beauty · legends · no worries · sound good?* Australian spelling throughout (colour, customise, organise).

**The forbidden list.** Never:
- the word **"AI"** (→ "digital receptionist")
- tech-hype: *revolutionary, cutting-edge, game-changing, AI-powered, leverage, optimise your workflow, seamless, robust, next-gen*
- corporate filler: *solutions, synergy, empower, unlock, supercharge*

**Casing.** Headlines are Title Case in Staatliches (the font is all-caps by design, so they read as confident display type). Eyebrow labels are sentence-case strings rendered UPPERCASE via CSS. Body is sentence case.

**Numbers & specifics earn trust.** Concrete beats vague: *"$58 for your first month", "SMS in 30 seconds", "live within 24 hours", "set up in 2 minutes"*. Don't invent stats.

**Tone by section.** Problem section twists the knife gently (the lost job, the 9pm phone tag). Everything after the hero simply *confirms a decision the demo already made.* The close is generous, not pushy: *"If it doesn't earn its keep, walk away — no hard feelings."*

**Emoji.** Not used in the finished visual design. The brief's plan document uses emoji (📵 ⏰ 💸) as *placeholders* for section icons; in this system those are replaced by Lucide line icons (see Iconography). Don't ship emoji as UI.

**Example voice — the hero:**
> Eyebrow: `Your digital receptionist · 24/7`
> Headline: **While You're On The Job, It's Got The Phone.**
> Sub: *"Tradie Voice Mate answers every missed call for you — takes down the job details, handles the questions, and texts you a summary. Whether you're on the tools, in the ute, or it's 10pm on a Sunday."*

---

## VISUAL FOUNDATIONS

**Overall feel.** Premium, flat, confident, purposeful. "A well-made tool — nothing wasted, nothing decorative for its own sake." Dark-first, with light sections as clean breaks. No tech-startup gloss, no AI clichés.

**Colour.** Five flat brand colours (see `tokens/colors.css`):
- **Near Black `#08081A`** — the primary background (hero, nav, footer, dark sections).
- **Deep Teal `#00A87C`** — the single action colour: CTAs, the waveform, active states, the social-proof and final-CTA sections.
- **Forest Green `#16A34A`** — accent only: eyebrow labels, tick marks, SMS/confirmation indicators. Never a full section background.
- **Deep Violet `#4C1D95`** — used sparingly and boldly: the logo-mark gradient and the one "Wider Than Trades" section background. Its rare appearance makes it memorable.
- **Pale Mint `#ECFDF5`** — light section backgrounds and card fills.

White (`#FFFFFF`) for headlines/body on dark and coloured backgrounds. Dark and light sections **alternate** down the page for rhythm. Derived shades (`teal-700` hover, `ink-800` dark card, `mint-200` light border) are in the tokens.

**Gradients.** There are **none** anywhere in the UI — every surface is a flat colour block. The *only* gradient in the entire brand is inside the logo mark (green → teal → violet behind the phone handset).

**Type.** Two families (see `tokens/typography.css`):
- **Staatliches** — all headlines, large feature numerals (01/02/03), and eyebrow labels. Tall, condensed, high-impact caps. Set very large with tight leading (`0.95`) and slight tracking.
- **DM Sans** (400/500/600/700) — body, sub-copy, UI labels, transcript text. Clean and legible.
Eyebrows are DM Sans, uppercase, `0.18em` tracking, Forest Green. CTAs are DM Sans 600.

**Spacing & layout.** Generous. 4px base scale; sections use a large `clamp()` vertical rhythm (`--section-y`). Content max-width 1200px. Two-column hero (≈55/45), three-up problem/steps/feature grids that stack to one column under 920px.

**Shape & radius.** CTAs, tags, chips and the social-proof testimonials are **pill-shaped** (`rounded-full`, `--radius-pill`). Cards use `14px`, large panels (the demo widget, pricing card) use `22px`. The brand reads as "rounded but not bubbly".

**Borders.** Hairlines do a lot of work: `1px` white-at-14% dividers on dark, `1px` mint on light cards, and a signature `1px` Deep-Violet-at-15% border on the demo widget. The pricing card gets a `2px` Deep Teal border to single it out.

**Elevation.** Mostly flat — shadows are used sparingly. `--shadow-card`/`--shadow-lift` for the few panels that need to float (demo widget, pricing card, SMS notification). The primary CTA carries a soft teal glow (`--shadow-teal`), the only "lit" element.

**Animation.** Subtle and meaningful, never decorative. Easing is a custom ease-out `cubic-bezier(0.22, 1, 0.36, 1)`. The hero demo widget is the *one* complex animation (breathing → reactive waveform, line-by-line transcript reveal, SMS slide-in). Elsewhere: the social-proof ticker scroll, the pulsing "incoming call" ring, gentle fade/slide section reveals. Respects `prefers-reduced-motion`.

**Hover / press.** Buttons lift `1px` and darken to ~94% brightness on hover; the play button scales up `1.05` on hover and `0.96` on press. Nav links go from 72%→100% white. No colour-inverting flips.

**Imagery direction.** Real Australian tradespeople — on-site, hands dirty, tools in hand, phones in hi-vis pockets. Diverse trades, genders, ages. Rugged work phones, not pristine flagships, for product/SMS mockups. **Zero** AI clichés (no glowing brains, robot hands, neural nets, particle fields). Imagery is warm and real, not cool/corporate stock. Client-supplied photos live in `assets/img/` and appear in the pricing section. *Future: the client wants background-masked (cut-out) versions of these photos for floating-subject treatments — swap them in when available.*

---

## ICONOGRAPHY

The source brief had **no icon assets** — its plan document used **emoji as placeholders** (📵 missed call, ⏰ time, 💸 lost money, 📲 forward, 🎙️ talk, 📋 summary, 🔧⚡🌳🐛 trades).

**Decision (flagged substitution):** this system uses **[Lucide](https://lucide.dev)** line icons — clean, consistent `2px` stroke, geometric, no fill — loaded from CDN (`unpkg.com/lucide`). They sit naturally with the premium, flat, tool-like aesthetic and avoid the toy feel of emoji. Default icon colour is Deep Teal on light chips / dark step tiles; white on the violet section.

Mapping used across the kit and cards:
| Use | Lucide icon |
|---|---|
| Missed / incoming call | `phone-missed`, `phone-incoming`, `phone-forwarded` |
| Conversation / voice | `mic`, `audio-lines` |
| SMS summary | `message-square-text`, `message-square` |
| 24/7 / time | `clock` |
| Lost revenue | `trending-down` |
| Tick / inclusion | `check` |
| Urgent flag | `zap` |
| CRM connection | `plug` |
| Trades row | `wrench`, `zap`, `trees`, `bug`, `hard-hat`, `utensils`, `scissors`, `car` |

If you need an icon not in Lucide, match the stroke weight and fill style — do not mix icon systems, and do not hand-draw SVGs or ship emoji as UI. **If real branded icons become available, copy them into `assets/` and update this section.**

The **tick mark** is the one icon drawn inline as SVG (in the `Tick` component and pricing list) so it can always be Forest Green regardless of CDN — a deliberate, single exception.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — the entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so this folder works as a downloadable Claude skill.

**`tokens/`** — `fonts.css` (@font-face), `colors.css`, `typography.css`, `spacing.css`.
**`fonts/`** — `Staatliches-Regular.ttf`, `DMSans-Regular.ttf` (variable 400–700), fetched from Google Fonts.
**`assets/`** — `Tradie_Voice_Mate_Icon.png` (the logo mark).

**`guidelines/`** — foundation specimen cards (Design System tab):
- Colors: brand palette · section surfaces · text-on-dark · derived tints
- Type: display · feature numerals · eyebrow · body ramp
- Spacing: scale · radius & pills · elevation
- Brand: logo lockup · iconography

**`components/`** — reusable React primitives (compiled into the bundle):
- `core/` — **Button** (pill CTA: primary/secondary/inverted), **Eyebrow**, **Tag** (data/solid/outline/urgent chips), **Tick**
- `content/` — **Card** (light/dark/pricing), **FeatureColumn** (large-number layout), **StarRating**
- `widget/` — **TranscriptBubble** (caller/agent), **SMSNotification** (lead summary)

**`ui_kits/marketing-site/`** — the full one-page site recreation with the live hero demo widget. See its own `README.md`.

---

## Fonts — substitution note
Staatliches and DM Sans are the specified brand fonts and are the **real** families (downloaded from Google Fonts and self-hosted in `fonts/`). No substitution was needed. DM Sans ships as a single variable TTF covering weights 400–700.

## Open items / asks for the user
1. **Background-masked imagery** — the client has asked for cut-out (background-removed) versions of the supplied tradie photos for floating-subject treatments. When supplied, drop them into `assets/img/` and swap into the pricing photo (and optionally float in the hero / violet sections).
2. **More photography** — additional on-site shots would let imagery extend into the Problem and "Wider Than Trades" sections.
