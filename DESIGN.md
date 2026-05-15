# Design System. mrbese.com

This document captures the existing visual identity. The site has its own face. Do not redesign without explicit approval. Use this as the source of truth for any future edit.

## Product Context

- **What this is:** Personal website for Omer Bese. Showcase of multilayered curiosity, projects, and deep dives. Doubles as a hiring artifact for startup roles in energy and AI.
- **Who it's for:** Hiring managers and founders at energy companies (Crux, Voltus, Lowercarbon portfolio, Base Power, Pila Energy) and frontier AI labs (Anthropic). Secondary: investors, collaborators, peers.
- **Project type:** Single-page personal portfolio. Static HTML, GitHub Pages, no build step.
- **Live:** [https://mrbese.com](https://mrbese.com)

## Memorable Thing

The OMER BESE wordmark with the portrait composited inside the O. Single PNG, raster. Sacred. Do not redesign. Optimize the file (responsive variants, AVIF/WebP) but preserve the artwork.

## Aesthetic Direction

- **Direction:** Confident dark personal site with one signature accent color.
- **Mood:** Direct, opinionated, builder-grade. Reads as a serious operator's home page, not a corporate portfolio.
- **Decoration level:** Intentional. Glassmorphic cards, subtle gradient surfaces, hairline borders. The hero composite and the magenta accent do most of the visual work; everything else is restrained.
- **Why this direction:** Already shipped. The pink-on-black with the hero composite IS the brand. The job here is to keep it coherent and tightened, not to redesign it.

## Typography

### Stack

- **Display / Hero / Headings:** **Space Grotesk** (Google Fonts). Weights used: 400, 500, 600, 700. Variable letter-spacing per use.
- **Body / UI / Eyebrows:** **Inter** (Google Fonts). Weights used: 300, 400, 500, 600.
- **Loading:** Single Google Fonts request, preconnect headers in place.

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Scale (current usage)

| Token | Value | Used for |
|---|---|---|
| `clamp(2.4rem, 6vw, 4.4rem)` | hero h1 | Hero headline |
| `clamp(2rem, 4vw, 3.5rem)` | section h2 | Section headings |
| `clamp(2.2rem, 4vw, 3rem)` | highlight stat | Big numeric callouts |
| `1.05rem` to `1.2rem` | body lede / intros | Section intro paragraphs |
| `1rem` (16px) | body default | Body copy |
| `0.7rem` to `0.75rem` | small caps eyebrow | Section labels, side nav |
| `0.6rem` | nav-label | Side nav labels |

### Voice and weight rules

- All caps with letter-spacing 0.15-0.3em is reserved for eyebrows and section labels. Never apply to body or section headings.
- Section headings (h2): Space Grotesk 700, no uppercase, sentence case allowed.
- Hero headline (h1): Space Grotesk 700, sentence case.
- Body: Inter 400. Inter 500 for emphasis. Inter 300 reserved for very large display contexts only (rare).

## Color

### Approach

Restrained. True black base, dark surface ladder, single signature magenta accent. The accent is rare and meaningful: it appears on section eyebrow labels, primary CTA, hero composite cues, side-nav active dot, link hovers, accent lines under headings. Nowhere else on a section by default.

### Tokens (extracted from current CSS, ~33 hardcoded uses of the accent)

```css
/* Suggested CSS custom properties for future migration */
:root {
  /* Surfaces */
  --bg-base: #000;          /* page hero, true black */
  --bg-dark: #0a0a0a;       /* default section bg */
  --bg-darker: #111;        /* alternating section */
  --bg-darkest: #1a1a1a;    /* nested cards, deepest tier */

  /* Card surfaces (linear-gradient backgrounds) */
  --card-1a: #0a0a0a;       /* gradient stop 1 */
  --card-1b: #18181c;       /* gradient stop 2 */
  --card-1c: #0e0e12;       /* gradient stop 3 */

  /* Text */
  --text-primary: #fff;
  --text-secondary: rgba(255, 255, 255, 0.75);
  --text-muted: rgba(255, 255, 255, 0.5);

  /* Signature accent */
  --accent: #FF0055;
  --accent-hover: #d80048;
  --accent-quiet: rgba(255, 0, 85, 0.06);   /* card top stripes, quiet borders */
  --accent-medium: rgba(255, 0, 85, 0.15);  /* hover borders */
  --accent-strong: rgba(255, 0, 85, 0.55);  /* primary CTA border */

  /* Borders */
  --border-hairline: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.18);
}
```

### Usage rules

- True black `#000` is the hero baseline. Sections alternate between `#0a0a0a` and `#111` for vertical rhythm.
- The accent appears at most a handful of times per viewport. If a section uses it more than 2-3 times, justify it.
- Card hovers: border lifts from `accent-quiet` (default) to `#333` (hover). The pink top stripe scales in on hover.
- Highlight cards use a 3-stop linear-gradient surface (`#0a0a0a` → `#18181c` → `#0e0e12`), giving subtle depth without overt skeuomorphism.

### Dark only

Site is dark-mode-only. No light mode planned. If one ever ships, design surfaces from scratch (do not invert).

## Spacing

### Base

The site uses ad-hoc rem values (no design tokens yet). The intent is generous vertical breathing between sections, tighter rhythm within sections.

### Current vertical rhythm targets (post-fix)

- `.section { padding: 5rem 2rem }` (was `8rem 2rem`, reduced for less dead space).
- `.section-label { margin-bottom: 1.5rem }` (was `3rem`).
- `.section-heading { margin-bottom: 1rem }` (was `2rem`).
- Heavy bands (#highlights, #polyglot, #background) get extra `padding-bottom: clamp(4rem, 9vw, 7rem)` (was `7rem-12rem`).
- Mobile: `.section { padding: 3.5rem 1.25rem }`.

### Measure

Body copy and section intros: max-width around 38-50rem (varies). Deep dive accordion bodies extend full content width because the dives are dense and benefit from horizontal room.

## Layout

### Approach

Hybrid. Each section is a `.section` container (max-width 1200px, centered). Cards within sections use CSS Grid with `auto-fit, minmax()` for responsive columns.

### Border radius

- `12px` for cards (highlight cards, project cards, polyglot accordions).
- `999px` (pill) for hero CTAs.
- `4px` for small elements (chips, mobile-jump links).

### Side nav

Fixed-position vertical dot list at `left: 1.5rem`, vertically centered, `z-index: 100`. Hidden until user scrolls past hero. Each item is dot + label. Label fades in on hover only (active state is just the scaled dot).

### Mobile

Below 600px viewport, the side nav is replaced by a horizontal sticky `.mobile-jump` bar at the bottom of the viewport.

## Motion

### Approach

Minimal-functional. The site is read, not interacted with. Motion is opacity/transform reveals on scroll and small color hover transitions. No transforms on hover for cards beyond a 4px lift on highlight cards.

### Tokens (extracted)

- `cubic-bezier(0.16, 1, 0.3, 1)` is the canonical reveal ease, used on `.reveal` opacity/translateY transitions.
- `0.3s ease` for color hovers.
- `0.4s` for highlight-card lift transitions.
- `0.8s` for the main reveal-on-scroll.

### Reduce motion

Currently no `prefers-reduced-motion` handling. **TODO:** add `@media (prefers-reduced-motion: reduce) { .reveal, .reveal-children > * { opacity: 1; transform: none; transition: none; } }`.

## Iconography

None. The site uses no icons. The polyglot section now uses small two-letter mono chips (`EN`, `OP`, `TH`, `FI`, `PO`, `LE`) as visual differentiators. Treat these as type-set glyphs, not icons.

## Imagery

- **Hero composite (`img/hero-banner-dark.png`, 349 KB):** sacred. Single raster PNG containing the OMER BESE wordmark with portrait inside the O. Optimize delivery (AVIF/WebP variants) but preserve the artwork.
- **OG / social card (`img/portrait.jpg`, 109 KB):** linked from meta tags. Used by Twitter / Open Graph crawlers.
- **Other photographs:** none in active use. `img/portrait-circle.png` (6.4 MB) and `img/portrait-cutout.png` (1.9 MB) are unreferenced legacy files. Safe to delete.

## Accessibility

- Contrast: pure white on near-black exceeds WCAG AAA.
- Focus rings: global `:focus-visible { outline: 2px solid #FF0055; outline-offset: 2px; }` rule. The mobile-jump bar uses a colored border in place of an outline (intentional).
- Keyboard navigation: all `<details>` accordions, links, and buttons are tab-reachable in DOM order.
- Heading order: h1 once (hero), h2 per section, h3 inside background and deep-dive sub-sections.
- Alt text: required on every `<img>`. Decorative images use `alt=""` explicitly.

## Iron rules

1. **No em dashes anywhere on the public site OR in commits, PRs, or any repo file.** Use periods, commas, or parentheses.
2. **The hero composite is sacred.** Do not redesign without explicit approval.
3. **Inter (body) and Space Grotesk (display) only.** Do not introduce a third font without explicit approval.
4. **The accent color (`#FF0055`) is rare.** A section using it more than 2-3 times needs justification.
5. **No purple gradients, no 3-column icon-in-circle feature grids, no centered-everything sections, no gradient CTA buttons (the accent is solid, not gradient).** AI-slop patterns. The site has avoided them; keep it that way.
6. **No new background colors outside the surface ladder.** Three section tiers (`#0a0a0a`, `#111`, `#1a1a1a`) plus true black `#000`. If you need a fifth, the ladder is the bug.

## Future polish (not blocking)

These are improvements deferred from prior eng/design reviews. Pick up when relevant:

- Migrate the 33+ hardcoded `#FF0055` uses (and the dark color literals) to CSS custom properties for one-place retuning.
- Ship responsive variants for `hero-banner-dark.png` (AVIF + WebP via `<picture>`) to drop the LCP byte cost.
- Add `content-visibility: auto` on `<details>` for first-paint cost reduction on the deep-dives section.
- Add `@media (prefers-reduced-motion: reduce)` override for the reveal transitions.
- Wire a Lighthouse CI GitHub Action for PRs.

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-15 | DESIGN.md created to document the current system. | Site has its own visual identity. Documenting it prevents accidental drift in future edits and gives agents a source of truth. |
| 2026-05-15 | Editorial redesign explored and rejected. | Considered switching to Fraunces / Geist / JetBrains Mono editorial direction. Decided the existing identity (dark + magenta + the hero composite) was the strength. UX/UI fixes within the current system instead. |
