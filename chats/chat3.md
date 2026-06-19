# Not Just For Tradies Redesign

_Started 2026-06-16 01:22 UTC_

---

## User

redesign this "not just for tradies" section. The current way the text is right aligned but has awkward gap is strange. Additionally the left side should be re-envisioned to be more captivating. redesign this section like a highly paid professional web designer, it should feel premium yet minimal in its design. Use typography to create nicely balanced composition. Feel free to use a secondary colour in this section if it fits (perhaps the lighter mint green)

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now I have everything I need. Let me redesign the section — replacing the icon-box grid with an editorial typographic list on the left, left-aligning the copy, and bringing in `--tvm-teal-300` (lighter mint) as the accent.

_[tool: str_replace_edit]_

Now the CSS updates:

_[tool: str_replace_edit]_

Now add the responsive rule for the section:

_[tool: str_replace_edit]_

_[tool: done]_

Here's what changed in the section:

**Left column — Editorial typographic list**
- Replaced the icon-box grid with a clean stacked list of industry names in display type (~40px), each row separated by a hairline rule
- Ordinal numbers (01–08) sit quietly right-aligned in tiny muted type — creating a subtle Swiss typographic rhythm
- *Restaurants* and *Salons* are highlighted in `--tvm-teal-300` (lighter mint), which reinforces the "not just tradies" message by visually calling out the non-trade industries
- Hover brightens each row name to white — gives the list a quiet interactive quality
- A muted "+ many more Aussie businesses" footer note closes the list

**Right column — copy**
- Removed `text-align: right` — now left-aligned, which eliminates the awkward gap
- Added a 32px mint-green bar (`--tvm-teal-300`) above the eyebrow as a grounding visual accent
- Body copy max-width tightened slightly so it reads as a considered column

**Grid** — nudged to `1.05fr / 0.95fr` with a wider `80px` gap to give both sides more air.

## User

Address these comments from my teammates:

**Adam** (on `ui_kits/marketing-site/index.html` at `[data-comment-anchor="2bf62f3e66-div"]`):
<teammate-comment>This section is a bit cramped. Re-envision how to display these 4 steps in a more clean minmal presentation on this section. Given teh section above as a scroll to reveal dynamic, I dont want to use that again, but I do want to make this section less visaully busy and cramped. Redesign this as a award winning designer of minimalist typographic based websites. Keep the icon stlyes and header texts. The body texts can be cut down if really needed. This section also blends in with the next, as they have the same backgrounda and header text allignment, create som seperation here. 

We are currently over using the standard flat section colour change between sections. I want to reduc the amount of these flat horizontal colour changes of the backgrounds between sections</teammate-comment>

**Adam** (on `ui_kits/marketing-site/index.html` at `[data-comment-anchor="91d3020834-span"]`):
<teammate-comment>get rid of the secondary mint blue colour here. make all these industry titles the same colour. Also make the titles less heavy on the page. Either change them to a non header font or reduce their size some more.</teammate-comment>

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Got everything I need. Now executing all changes in parallel — steps redesign, section separation, and industry list fix.

_[tool: str_replace_edit]_

Now the CSS:

_[tool: str_replace_edit]_

_[tool: done]_

Here's what changed across both comments:

**"How It Works" (Adam's steps comment)**
- Replaced the cramped 4-column grid with full-width typographic rows — each step is a clean 3-column layout: huge muted ordinal number / icon + heading / body text, separated by hairline rules
- The oversized numbers (01–04) sit at ~72px in the display font at near-invisible opacity — purely typographic scaffolding, not decorative noise
- Body copy trimmed to a single punchy line each
- Arrow connectors removed — the numbered rows carry the sequence implicitly
- Section separation: Features now has `padding-top` restored and a `1px` border-top rule — creates clear breathing room between the two dark sections without introducing a new background colour

**Industry list (Adam's mint colour comment)**
- Removed `ind-mint` from Restaurants and Salons — all eight names now the same muted white
- `.ind-name` switched from display font to body font, reduced from `clamp(24–40px)` to `clamp(14–17px)` at weight 500 — the list now reads as a refined index rather than a typographic headline, which lets the right-column copy do the heavy lifting

## User

Address these comments from my teammates:

**Adam** (on `ui_kits/marketing-site/index.html` at `[data-comment-anchor="4d20812eb0-p"]`):
<teammate-comment>remove this text "We hand-pick a small number of businesses to work with. If we reach out, take us up on it."

Change it witha  different sentance which gives some time pressure for sales. something along the lines of : limited time offer for this new technology to select small aussie businesses</teammate-comment>

**Adam** (on `ui_kits/marketing-site/index.html` at `[data-comment-anchor="ba6c10145b-span"]`):
<teammate-comment>Add simple minimal icons to the left of each of these industries to represent them. ie (wrench for plumber, power plug for electricians etc etc). Have the icons be subtle and in the same colour and opacity as the text.</teammate-comment>

**Adam** (on `ui_kits/marketing-site/index.html` at `[data-comment-anchor="3ccf2207ed-div"]`):
<teammate-comment>Have these 4 step process rows each slide and emerge downwards under each other in a smooth fade in a premium qubic bezier animation as the user scrolls them into view</teammate-comment>

**Adam** (on `ui_kits/marketing-site/index.html` at `[data-comment-anchor="2bf62f3e66-div"]`):
<teammate-comment>condense the padding on this 4 step vertical layout section. I want the 4 steps to be a bit closer together, it seems to space out. Also make the titles of the steps one increment larger.</teammate-comment>

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now I have everything. All four changes in parallel — HTML (icons + quote), CSS (animation + padding + icon styles), and JS (IntersectionObserver):

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

All four changes applied:

**Price quote** — replaced the "hand-pick" line with urgency copy: *"Early-access pricing — available now to a limited number of Aussie small businesses while this offer lasts."*

**Industry icons** — each row now has a matching Lucide icon (wrench, zap, trees, bug, hard-hat, utensils, scissors, car) sitting left of the label at 13px. Color is `rgba(255,255,255,0.52)` — slightly softer than the text so they read as supporting detail, not competing with the names.

**Step row animation** — `IntersectionObserver` adds `js-ready` to the list on load (enabling the CSS hidden state only when JS runs — no invisible-if-no-JS risk), then triggers each row with a 115ms stagger as it enters the viewport. The transition is `cubic-bezier(0.16, 1, 0.3, 1)` — the same spring curve used throughout the page — at 68–72ms so it feels snappy but weighted. Reduced-motion users see the rows statically.

**Condensed padding + larger headings** — row padding reduced from `34px` → `22px` so the four steps sit closer together, and h3 bumped from `clamp(18–24px)` → `clamp(20–28px)`.

