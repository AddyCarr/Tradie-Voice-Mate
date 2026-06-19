Pill-shaped call-to-action button — use for every CTA ("Start your trial", "Reserve your demo"). Always rounded-full.

```jsx
<Button variant="primary" size="lg" href="#trial" trailingArrow>Start your trial</Button>
<Button variant="secondary">Reserve your demo</Button>
```

Variants: `primary` (Deep Teal fill, teal glow) for the main action; `secondary` (ghost outline) on dark backgrounds; `inverted` (white fill) and `inverted-ghost` (white outline) on the teal Final-CTA section. Sizes `sm | md | lg`. Set `trailingArrow` for the signature "→". Pass `href` to render an anchor.
