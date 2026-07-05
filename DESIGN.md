# Design System. mrbese.com

> **Status: LIVE SYSTEM.** Approved 2026-07-04 via /design-consultation (direction "Private Press", variant C3), motion layer approved 2026-07-05 (variant C4), implemented and deployed 2026-07-05. The previous Editorial Instrument system (Space Grotesk, rail-and-rows, true black) is fully retired. Reference mockups: `~/.gstack/projects/mrbese/designs/design-system-20260704/direction-c3.html` (base system) and `direction-c4.html` (C3 + motion layer + live copy; screenshots `variant-C3.png`, `variant-C4.png`).

## Product Context

- **What this is:** Personal website for Omer Bese. An operator's record of work, kept honestly. Doubles as a hiring artifact for startup roles in energy and AI.
- **Who it's for:** Hiring managers and founders at energy companies and frontier AI labs. Secondary: investors, collaborators, peers. They scan fast; the site must answer "who is this and can they ship" in seconds.
- **Project type:** Editorial personal site. Astro static build, Cloudflare Pages.
- **Live:** https://mrbese.com

## Memorable Thing

The OMER BESE wordmark hero with the portrait composited inside the O. Single raster artwork, full-bleed at the top of every variant considered, never redesigned. Sacred. Confirmed again 2026-07-04.

**Secondary signature: the red dot.** The Filament accent appears as a terminal period on display headlines and as the small round status dot. It is the one recurring gesture that ties the quiet pages back to the loud hero.

## Aesthetic Direction

- **Direction:** Private Press. A dark literary journal register: one offset text column, whitespace instead of rules, folio numbers, dotted-leader indexes, a drop cap. The page reads like a privately printed record of work, not a portfolio.
- **Decoration level:** Minimal. No cards, no borders around content, no chips, no icons. Typography and whitespace do all the work; the hero and the red dot are the only loud elements.
- **Mood:** Confident, literary, unhurried. The design says: this person's evidence can afford to be quiet.
- **Why this direction:** Chosen 2026-07-04 over (A) sharpening the existing Editorial Instrument system and (B) an industrial "Substation at Night" direction. Research across admired 2026 personal sites (Freiberg, Kowalski, Chiang, Comeau, Graham, Rauch) showed the field splits between single-sans minimalism and cloned dark-portfolio templates; a serif-led literary system with a face-forward hero has no analog in that set.

## Typography

Three fonts, self-hosted via Fontsource (repo convention). Space Grotesk retires at migration.

- **Display:** **Instrument Serif** (roman and italic). Standfirst, display headlines, project names, article titles in indexes. Italic is allowed at display size in this direction (approved after an explicit calm-font review round); roman for headlines that need more weight.
- **Prose:** **Newsreader** (variable, optical sizing, 300 to 600, plus italics). All reading text: essays, descriptions, support lines.
- **Instrument:** **IBM Plex Mono** (400). Folios, nav, dates, status lines, colophon links. Tabular numerals wherever numbers align.

### Scale (one size per role, tokenize at migration)

| Token | Value | Role |
|---|---|---|
| `--t-standfirst` | clamp(26px, 3.2vw, 36px) | Instrument Serif italic opening line under the hero |
| `--t-display` | clamp(30px, 3.4vw, 40px) | Instrument Serif section headlines |
| `--t-essay` | 19.5px / 1.78 | Newsreader reading prose |
| `--t-support` | 18px / 1.75 | Newsreader support paragraphs (about line, services sentence) |
| `--t-item` | 20px | Index item names (Instrument Serif) |
| `--t-note` | 16px / 1.65 | Index item descriptions (Newsreader) |
| `--t-toc` | 18.5px | Writing index titles (Instrument Serif italic) |
| `--t-label` | 11px / .18em tracking, uppercase | Mono folios, nav, status lines |

Never hardcode a px size for these roles; use the token.

## Color

- **Approach:** Restrained to the point of austerity. One warm near-black, a four-step warm ink ladder, one accent.
- **Paper:** `#0A0908` warm near-black (not pure #000; warmth keeps the hero artwork bleeding seamlessly into the page).
- **Ink ladder:** `--ink #EFE9DC` (primary), `--mid #C9C0AE` (reading prose), `--dim #8E8574` (secondary), `--faint #5C554A` (folios, leaders, fine print).
- **Ladder discipline:** essential mono text (nav links, eyebrows, the open-to-work status line) sits at `--dim` or brighter; `--faint` (~2.7:1 contrast) is reserved for non-essential ornament: folio kickers, dotted leaders, years, fine print. In repo tokens: `--ink-0/1/2/3` map to ink/mid/dim/faint.
- **Accent, Filament:** `#FF0155`. Usage is a closed list: (1) the red-period signature on the standfirst, display headlines, and colophon sign-off; (2) the round status dot (open to work); (3) link hover color. Nothing else. No fills, no backgrounds, no accent text runs.
- **Semantic colors:** none. The only status on this site is "live/open", and the red dot carries it.
- **Dark only.** No light mode, no toggle. The hero is a dark artwork; a light theme would frame it instead of bleeding it. If a light mode is ever demanded, design it from scratch.

## Spacing

- **Rhythm:** generous verticals, no rules. Sections are separated by 128px of whitespace on desktop, 80px on mobile (raised from 88px with variant C4, 2026-07-05), with a mono folio marking each entry. Within sections: 18 to 26px gaps.
- **Column:** max-width 660px, offset left with `margin-left: max(8vw, 90px)`. The page is deliberately asymmetric; the right side stays empty on wide screens.
- **Density:** spacious. When in doubt, add whitespace rather than a rule.

## Layout

- **Approach:** single-column editorial, composition over components. Full-bleed hero, then one offset column to the colophon.
- **Structure per page:** hero artwork (home only), standfirst + small mono nav, numbered sections (folio kicker then content), colophon (hairline 64px rule, mono links, one italic fine-print line).
- **Patterns:**
  - **Folio kicker:** `№ 0N · section name` in mono, faint.
  - **Essay:** drop cap on the first paragraph (Instrument Serif), Newsreader body.
  - **Writing index:** title, dotted leader, mono date (`05.26`). No tags, no chips.
  - **Project index:** Instrument Serif italic name + mono year, one-line Newsreader description. No stack pills, no repo cards.
  - **Services:** one Newsreader sentence, bolded service names inline. Never a pill row (chips are the most-cloned pattern in this genre; banned). The sentence wording is content: keep the live service names verbatim and get the connecting words approved before shipping.
- **Border radius:** none, except the status dot (round). No rounded cards exist because no cards exist.

## Motion

- **Approach:** refined-functional (variant C4, approved 2026-07-05). Exactly three gestures:
  1. **Scroll reveal:** `.reveal` elements fade up with a 30px translate, 0.6s ease-out, triggered at 20% viewport intersection, once. List items may stagger via `--d` transition-delay in 0.07s steps (max ~0.14s).
  2. **Standfirst rise (home only):** the opening line rises out of an overflow mask on load, 0.9s `cubic-bezier(.19,1,.22,1)`.
  3. **Hover micro-interactions:** color-only transitions at ~150ms; dotted leaders brighten one ladder step; mono dates and years turn Filament (hover is already in the closed accent list).
- The hero never moves, fades, or parallaxes. No video backgrounds, no parallax layers, no glow or tilt effects (suggested by the 2026-07-05 craft article; rejected as off-register).
- **Reduced motion:** the global `prefers-reduced-motion` kill switch shows everything instantly. Reveals are gated on a `.js` root class so no-JS clients and crawlers see full content.

## Imagery

- **Hero composite (`src/assets/hero-banner-dark.png`):** sacred, served via `astro:assets` Picture (AVIF/WebP variants). Do not redesign.
- No other imagery. No stock photos, no decorative graphics. If a post needs a figure, it earns its place as evidence.

## Accessibility

- Warm ink on near-black exceeds WCAG AA at every ladder step used for text (verify `--faint` is used only for non-essential fine print).
- Focus rings: `:focus-visible` 2px Filament outline, kept from the legacy system.
- Keep the skip link, `<main>` landmark, single h1 per page, and UTC-pinned dates from the 2026-07-04 audit. The redesign must not regress any audit fix.

## Iron rules

0. **This is a DESIGN system, not a copy rewrite. All site text stays exactly as it is live.** The "the human." essay (all three paragraphs), ledes, project taglines and descriptions, service names, section names (about / writing / building / services / elsewhere), and the footer line are untouched by the migration. The mockup's copy (the standfirst sentence, "Ten years of asking why.", rewritten project descriptions, the services sentence wording) was illustrative only and must NOT ship. Where the target layout has a slot the live site has no copy for (the standfirst), use existing site copy or leave the slot out; any new sentence needs Omer's explicit approval first.
1. **No em dashes anywhere on the site, in commits, PRs, or repo files.** Periods, commas, or parentheses.
2. **The hero composite is sacred.** No redesign without explicit approval.
3. **Three fonts only: Instrument Serif, Newsreader, IBM Plex Mono.** Space Grotesk is legacy and leaves at migration. No fourth font without explicit approval.
4. **Filament `#FF0155` usage is the closed list above.** A page using the accent outside the red-period signature, the status dot, or hover states needs justification.
5. **No pills, chips, tag badges, or icon grids.** No purple gradients, no centered-everything, no gradient CTAs, no card grids. The services sentence and mono labels replace all chip use cases.
6. **Every public claim stays literally true.** Applies to any future pattern that surfaces facts (dates, statuses, metrics).
7. **Positioning: operator/builder leads.** "Energy systems engineer" is the proof clause, never the headline.
8. **No personal email addresses on the site.** Contact via GitHub/X/LinkedIn links only.

## Migration map (legacy → Private Press)

Implemented 2026-07-05; kept as a record of what changed and why.

| Legacy (live today) | Target |
|---|---|
| `tokens.css` surface/ink/type tokens | rewrite to the palette + scale above |
| `.wrap` bordered column + `--rail` grid | single offset column, no side borders |
| `Row.astro` (label rail + h2) | folio kicker + section block |
| `Nav.astro` masthead | small mono nav under the standfirst; keep aria-current behavior |
| `Rail.astro` facts | fold into the standfirst/status line; keep "open to work" with the red dot |
| `PostRow.astro` | dotted-leader index row |
| `ProjectItem.astro` | project index item (serif italic name, mono year) |
| `Tag.astro` pills | delete; services become one sentence |
| `PullQuote.astro` | restyle: Instrument Serif italic, no left border, whitespace framing |
| Space Grotesk imports | remove; add `@fontsource/instrument-serif` |

## Considered and not adopted (2026-07-04)

- **Fault-record lines on projects** (public failure + fix, from directions A/B): strong trust move, may return as a content feature inside the Private Press index style. Not part of the approved system.
- **Scroll-linked filament pulse** along a rule: rejected with the rules themselves; the system has no rules to animate.
- **Substation at Night** (warm carbon `#121110`, busbar copper, spec plates, Big Shoulders/Instrument Sans/Fragment Mono): full mockup at `direction-b.html` in the designs directory if ever wanted.
- **Copper or green auxiliary colors:** rejected; Filament stays the only accent.

## Decisions Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-15 | DESIGN.md created for the static-HTML site. | Prevent drift. (Superseded.) |
| 2026-05-15 | Editorial redesign explored and rejected. | The then-identity was the strength. (Superseded by 2026-07-04 approval below.) |
| 2026-07-04 | Direction "Private Press" (variant C3) approved as the target system via /design-consultation. | Chosen over sharpening the live system (A) and an industrial direction (B) on a comparison board of real HTML mockups. Serif-led literary register with the sacred hero has no analog among admired 2026 personal sites. |
| 2026-07-04 | The red dot promoted to system signature. | User call: "just the red dot from option A." Filament periods on display headlines + the status dot; closed usage list. |
| 2026-07-04 | Instrument Serif kept after a calm-font review round. | An italic-free variant (C2) was rendered and compared; user confirmed original C typography. |
| 2026-07-04 | Services pills banned; services become a sentence. | Chips are the single most-cloned dev-portfolio pattern (competitive research, 6 sites). |
| 2026-07-04 | Migration scoped to design only; all live copy frozen. | User call: "this is design update not context." Mockup copy was illustrative; the human essay and all site text ship unchanged. |
| 2026-07-05 | Variant C4 approved: motion layer + wider section rhythm, from a shared craft article. | Adopted: scroll reveals (30px / 0.6s ease-out / 20% intersection), hover micro-interactions, 128px section spacing. Rejected: AI hero imagery, video loops, parallax, glow/tilt. Mockup `direction-c4.html`, built from live copy only. |
| 2026-07-05 | Standfirst slot filled with existing site copy. | "I ask why for a living." (site.ts hero line) satisfies iron rule 0; no new sentence was written. |
| 2026-07-05 | Migration implemented and deployed. | Copy freeze verified byte-identical by an independent review pass. Sanctioned deltas: Rail facts folded into the sig block (labels Location/Focus/Now dropped, all values kept, per the migration map) and factual mono years (2026) added to the project index per the C4 pattern. |
| 2026-07-05 | Essential mono text raised from `--faint` to `--dim` after review. | Nav, eyebrows, and the open-to-work line were at ~2.7:1 contrast, contradicting the Accessibility section; `--faint` is now ornament-only. |
