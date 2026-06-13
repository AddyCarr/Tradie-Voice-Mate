# Tradie Voice Mate — Hero Section Brief
### Interactive Demo Widget (Hero C)

---

## What this section needs to do

A visitor lands on the page and within 10–15 seconds should understand:

1. There is a digital receptionist that answers their calls for them
2. It has a real, natural conversation with the caller
3. A clean summary SMS lands on their phone immediately after
4. The whole thing is effortless — it just works

The hero should feel like product proof, not a product pitch.

---

## Layout

**Left side — copy and context**

Standard hero text column. Eyebrow, headline, short sub-copy, two CTAs. Trust indicators (no setup fee, no lock-in, 80% off first month). This side is static.

**Right side — the interactive demo widget**

This is the centrepiece of the page. A dark, sleek, self-contained panel that lives in the hero. It should feel like you're looking at the product itself, not a screenshot of it.

---

## The Widget — Idle State

Before the user interacts, the widget is alive but waiting. Show:

- A phone/call interface with a pulsing incoming call indicator
- A premium animated waveform — smooth, breathing, ambient. Not bouncing bars. Think audio visualiser at rest: slow, fluid, elegant. Teal (`#00A87C`) primary colour.
- A clear, inviting play/call trigger — something like "▶ Hear a live call" or a large pulsing play button
- Enough visual detail to suggest something interesting is about to happen

The idle state should make it obvious this is interactive and worth pressing.

---

## On Click — The Sequence

When the user hits play, the actual audio recording of the demo receptionist call begins playing. Simultaneously, the widget comes to life and walks through the full product story in sync with the audio:

**Phase 1 — Call connects**
The waveform activates and responds to the audio in real time (or simulated in sync with the recording). Show the call is live — something like a timer ticking up, the waveform animating with the voice.

**Phase 2 — Conversation appears**
As the audio plays, the transcript builds line by line, message by message — caller's words on one side, the receptionist's responses on the other. Messages arrive naturally, timed to the audio. This shows the conversation happening, not just the outcome.

Each line should feel like it's being typed/received in real time — unhurried, natural, matching the audio.

**Phase 3 — Data being captured**
As key pieces of information are spoken (name, job, postcode, callback time), subtly surface them being recorded. Could be a small field populating alongside the transcript, or a soft highlight on the captured data. The goal is to show the system is extracting the right information automatically.

**Phase 4 — Call ends, SMS arrives**
When the call wraps, show:
- The call ending cleanly
- A brief pause
- An SMS notification sliding in — a real-looking phone notification showing the lead summary (name, job, location, number)
- Optionally, a CRM record populating to show it's also gone into their system

This is the payoff moment. It should feel satisfying — like watching the whole machine click into place.

---

## What the widget is NOT

- Not a chatbot or live interface the user actually types into
- Not a product tour with numbered steps
- Not autoplaying — user initiates it
- Not cluttered — the visual hierarchy is: waveform → conversation → SMS. Clean at every stage.

---

## Audio

The actual voice receptionist demo audio plays through the widget.

**File:** `Digital Voice Receptionist - Arborist Full Example`
**Duration:** ~1 min 10 seconds

A real arborist enquiry scenario — caller contacts the business, the receptionist handles it naturally, captures all the details, and wraps the call. Transcript and SMS content in the widget should be derived directly from this call.

**Scroll fade-out behaviour:** If the audio is playing and the user scrolls past the hero section, the audio should fade out gradually and gracefully — not cut abruptly. The fade should feel premium: slow, smooth, over roughly 1–2 seconds as the hero exits the viewport. Once fully faded, audio stops. If the user scrolls back up to the hero, the widget returns to its idle state (does not auto-resume).

---

## Visual and brand reference

**Confirmed palette — all five colours in use:**

| Swatch | Hex | Role |
|---|---|---|
| Near Black | `#08081A` | Primary background — hero, dark sections, widget panel |
| Deep Teal | `#00A87C` | Primary CTA buttons, waveform colour, active UI elements |
| Forest Green | `#16A34A` | Eyebrow text, accent labels, SMS confirmation indicators, tick icons |
| Deep Violet | `#4C1D95` | Logo gradient origin, secondary accents — section dividers, subtle border highlights, gradient pairing with teal |
| Pale Mint | `#ECFDF5` | Light section backgrounds, card fills, text on dark for low-emphasis elements |

The violet (`#4C1D95`) should be used consistently with how it appears in the TWM family — most visibly in the logo gradient (violet → teal), and as a secondary accent layer throughout. It is not a dominant colour but provides depth when paired against the near-black background. Good candidate uses: the logo mark gradient, a gradient pill/badge on pricing, subtle inner borders on the demo widget panel, and any section that needs a third colour beyond teal and green.

**Typefaces:** Staatliches (headlines, large numerals, eyebrow labels) · DM Sans (body copy, transcript text, UI labels)

**Waveform style:** Premium, fluid — closer to Spotify/audio-app quality than a simple bar chart. Smooth curves, real-time feel. Primary colour teal (`#00A87C`), with violet (`#4C1D95`) as a secondary layer or trailing glow if a gradient waveform is used.

**Tone:** Sleek and confident. Not playful, not corporate. The widget should feel like a well-made tool.

---

## End goal

A prospect watches this once and immediately thinks: *"I get it. It answers my calls, talks to my customers properly, and texts me the details. I want that."*

No explainer video needed. No wall of text. The demo does the job.

---

*Brief prepared for Tradie Voice Mate — pass to development with full website plan document.*
*Hero layout: Option C — Live Call Feed*
*Version 1.0 — June 2026*
