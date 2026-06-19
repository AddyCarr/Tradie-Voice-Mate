---
name: tradie-voice-mate-design
description: Use this skill to generate well-branded interfaces and assets for Tradie Voice Mate (a digital voice receptionist for Australian tradies — a Tradie Web Mate product), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colours, type, fonts, the logo, foundation cards, reusable React components, and a full marketing-site UI kit for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill first — it is the full design guide (company context, CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY, and a file index). Then explore the other available files:

- `styles.css` + `tokens/` — link `styles.css` to inherit every colour, type, spacing token and the self-hosted webfonts.
- `assets/` — the logo mark.
- `guidelines/` — foundation specimen cards (colour, type, spacing, brand).
- `components/` — reusable React primitives (Button, Eyebrow, Tag, Tick, Card, FeatureColumn, StarRating, TranscriptBubble, SMSNotification). Each has a `.prompt.md` with usage.
- `ui_kits/marketing-site/` — a full one-page marketing-site recreation with the signature hero demo widget; the best reference for how the brand composes at full scale.

Non-negotiable brand rules:
- **Never call the product "AI"** — always "digital receptionist".
- Trades-native, warm, direct-"you" copy. Short punchy sentences. No tech-hype words.
- Flat colour blocks, no gradients (except inside the logo mark). Staatliches headlines, DM Sans body, Forest-Green uppercase eyebrows, pill-shaped teal CTAs.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and apply the rules here to design as an expert in this brand.

If the user invokes this skill without other guidance, ask what they want to build or design, ask a few focused questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.
