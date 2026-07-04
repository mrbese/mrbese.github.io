# mrbese.com

Personal website. Astro static site in `mrbese/mrbese.github.io`, served through Cloudflare Pages at `https://mrbese.com`. The pre-2026-07 hand-written static HTML version is archived at tag `archive/static-v1.5` (the root `index.html`, `applying/index.html`, `sitemap.xml`, `robots.txt` are leftovers from it and are NOT served).

## Design System

Always read `DESIGN.md` before making any visual or UI decisions. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit user approval.

In QA or design-review mode, flag any code that does not match `DESIGN.md`.

## Iron rules

- **No em dashes anywhere on the site OR in commits, PRs, or this CLAUDE.md.** Use periods, commas, or parentheses instead. This rule applies to all written output for this repo.
- The OMER BESE wordmark with portrait composited inside the O is the memorable thing. Do not redesign the hero composite without explicit approval.
- **Space Grotesk (display/UI), Newsreader (serif prose), IBM Plex Mono (mono) only.** Do not introduce a fourth font without explicit approval.
- The accent color `--filament: #FF0155` is rare. One or two uses per section by default.
- Positioning: operator/builder leads; "energy systems engineer" is a supporting proof clause, never the headline identity (titles, taglines, JSON-LD jobTitle included).
- No personal email addresses anywhere on the site. Contact is GitHub/X/LinkedIn links only.

## File layout

- `src/pages/`: routes (`index`, `about`, `applying`, `projects`, `retera`, `services`, `writing`, `404`, `rss.xml.js`)
- `src/layouts/`: `BaseLayout.astro` (head, favicon, canonical, Person JSON-LD, skip link, `<main>`), `ArticleLayout.astro` (article OG + BlogPosting JSON-LD)
- `src/components/`: Nav, Footer, Row (section rows with h2 labels), ProjectItem (repoUrl optional; omit for private repos), HeroBanner, PostRow, Rail, Tag, PullQuote
- `src/content/blog/`: posts (frontmatter `date` is the single source of truth for both on-page dates and RSS pubDate; all date formatting must pass `timeZone: 'UTC'` or the two drift)
- `src/data/`: site.ts (title/lede/chip copy), projects.ts, services.ts, social.ts, timeline.ts, stats.ts, languages.ts
- `public/`: `_headers`, `_redirects` (Cloudflare Pages), favicon.svg/.ico, apple-touch-icon.png, robots.txt, img/
- `DESIGN.md`: design system, source of truth

## Conventions

- Canonical URLs use the trailing-slash form (Cloudflare Pages 308s the bare form; the sitemap declares slashes). `BaseLayout` normalizes the `path` prop; pass either form.
- Meta descriptions stay under about 160 characters.
- Keep every public claim literally true (example: never say "all open source" while any linked repo is private).

## Deployment

The Cloudflare Pages project `mrbese-site` is NOT git-connected. Pushing to `main` records the source but does not deploy. To ship:

```
npm ci
npx astro build
npx wrangler pages deploy dist --project-name=mrbese-site --branch=main --commit-hash=$(git rev-parse HEAD)
```

wrangler is already authenticated on this machine (account Mr.Bese). DNS: `mrbese.com` and `www` are proxied CNAMEs to `mrbese-site.pages.dev`. The repo's GitHub Pages config and `CNAME` file are relics of the old static site; GitHub Pages shows status "errored" and serves nothing. Verify at `https://mrbese.com` after deploy.
