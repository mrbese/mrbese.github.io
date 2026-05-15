# mrbese.com

Personal website. Static HTML, GitHub Pages from `mrbese/mrbese.github.io`. No build step. Single `index.html` (with `applying/index.html` as a sub-page).

## Design System

Always read `DESIGN.md` before making any visual or UI decisions. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit user approval.

In QA or design-review mode, flag any code that does not match `DESIGN.md`.

## Iron rules

- **No em dashes anywhere on the site OR in commits, PRs, or this CLAUDE.md.** Use periods, commas, or parentheses instead. This rule applies to all written output for this repo.
- The OMER BESE wordmark with portrait composited inside the O is the memorable thing. Do not redesign the hero composite without explicit approval.
- **Inter (body) and Space Grotesk (display) only.** Do not introduce a third font without explicit approval.
- The accent color `#FF0055` is rare. One or two uses per section by default.

## File layout

- `index.html` — main page, single-file (HTML + inline CSS + inline JS)
- `applying/index.html` — sub-page, public job-search log
- `img/` — assets. Note: `portrait-circle.png` (6.4M) and `portrait-cutout.png` (1.9M) are unreferenced; safe to delete in a future cleanup commit.
- `DESIGN.md` — design system, source of truth
- `CNAME`, `robots.txt`, `sitemap.xml` — GitHub Pages config

## Deployment

Push to `main`. GitHub Pages serves automatically. No CI gates beyond what GitHub provides. Live site at `https://mrbese.com`.
