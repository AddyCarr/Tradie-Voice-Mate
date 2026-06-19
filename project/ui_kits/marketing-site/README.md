# Marketing Site — UI Kit

A high-fidelity, click-through recreation of the **Tradie Voice Mate** one-page marketing site, built directly from the project brief (`tradie_voice_mate_website_plan_v2.md` + `tvm_hero_c_brief.md`). The real site had not been built when this system was authored — the repo contained only the brief, copy, and the logo — so this kit *is* the canonical visual reference for the product.

## Files
| File | What it is |
|---|---|
| `index.html` | The full one-pager. Self-contained vanilla HTML — links the design-system tokens (`../../styles.css`) and Lucide icons from CDN. |
| `site.css` | All section styles, expressed in the DS tokens. |
| `site.js` | Interactions: sticky-nav scroll state, the animated waveform, the hero demo-widget timeline, the social-proof ticker, and the FAQ accordion. |

## Sections (in order)
Nav (sticky, solid-on-scroll) · **Hero** with the live demo widget · Social-proof ticker (teal) · Problem (mint) · How It Works (dark) · Features — large-number columns (dark) · Integrations (mint) · Wider Than Trades (violet) · Pricing (single card, dark) · FAQ (accordion, mint) · Final CTA (teal) · Footer (dark).

## The signature element — Hero Demo Widget
The right column of the hero, set off by a soft teal/violet aura. Idle state shows a gently breathing waveform with a pulsing teal play button. On click it **plays the real call audio** (`assets/audio/arborist-call.mp3`, ~70s) and runs the synced timeline:
1. **Connecting** → waveform goes reactive, timer starts, "LIVE CALL".
2. **Live transcript** → a **single caption at a time** — receptionist (teal, left) and caller (dark, right) lines *replace* each other as each person speaks, so it reads as a live voice call being transcribed, not a back-and-forth chat.
3. **Data capture** → `Name · John`, `ASAP`, `Postcode · 3144`, `Phone`, `Callback` pills pop in along the bottom as they're spoken.
4. **Call ends** → the SMS lead-summary notification slides up.

Click the widget again after it ends to replay.

> **Audio sync.** Caption and pill timings are keyed to the real timestamps in `tvm_arborist_call_transcript.md`. The timeline polls `audio.currentTime`, so captions stay locked to the voice even if playback stalls or buffers. If autoplay is blocked (or the file is missing) it transparently falls back to a synthetic ~70s wall-clock timeline.

> **Note — no audio.** The brief's demo MP3 (`Digital_Voice_Receptionist_-_Arborist_Full_Example.mp3`) was **not** present in the source repo, so the widget runs a *synthetic* ~15-second timeline keyed to the timestamps in `tvm_arborist_call_transcript.md` rather than real audio playback. Drop the MP3 in and wire `new Audio()` to the timeline to make it sync to real sound. **Ask the user for this file.**

## Technical notes
- The timeline polls `audio.currentTime` on a `setInterval` (not `requestAnimationFrame`, which is paused offscreen); bubble/pill entrances use CSS `@keyframes`. Reliable even in a backgrounded tab.
- Real client photography lives in `assets/img/` and appears in the **pricing** section (tradie-on-the-phone with a floating lead-summary badge). Other sections are kept clean; more photos can extend imagery into the Problem and "Wider Than Trades" sections.
- Composes the same visual vocabulary as the React component primitives (`Button`, `TranscriptBubble`, `SMSNotification`, `FeatureColumn`, …); the kit is vanilla so it matches the brief's intended Astro/Alpine/GSAP static stack and stays dependency-light.

## Open items
- **Background-masked photos** — the client wants cut-out (background-removed) versions of the supplied images for floating-subject treatments. Swap them into the pricing photo / hero when available.
