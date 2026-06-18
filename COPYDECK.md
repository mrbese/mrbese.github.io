# mrbese.com — Copy Deck (Design B, Minimal CV)

Hand this to the builder. Every block below is the literal text for a section, labeled by page and slot.

**How to read it**
- `〔 〕` = placeholder you need to fill (I do not have the fact). Everything outside those brackets is final copy you can ship.
- The word `*why*` in italics marks the Newsreader-italic accent word with the red underline.
- No em dashes anywhere, on purpose. House rule.
- Voice: restrained and editorial to match Design B, still first-person and a little irreverent. Confident, no corporate filler.

---

## GLOBAL (repeats on every page)

**Masthead / wordmark**
OMER BESE  (the composite O is the logo)

**Nav**
Retera · Blog · Projects · Services

**Footer band ("Elsewhere")**
Eyebrow: ELSEWHERE
Line: West Hollywood, CA
Links:
- omer@manoros.com  → label: Email
- linkedin.com/in/omerbese  → label: LinkedIn
- x.com/mrbese  → label: X
- github.com/mrbese  → label: GitHub
- #ApplyingInPublic  → label: Public search log  (links to /applying)
Bottom line: © 2026 Omer Bese

---

## PAGE 1 — HOME

### Hero
Headline (the big line):
I ask *why* for a living.

Sub-lede (one or two lines under it):
Energy systems engineer, founder turned operator. I look for the frozen assumption nobody revisits, then rebuild around it. It is the reason I read a battery spec sheet and see an operating manual.

CTA row:
- Read the research → /blog
- See what I build → /projects

### Ledger (the scroll-reveal rows). Each row: rail label, one teaser, one link.

**Row 01 — Retera**  〔spotlight, top priority〕
Rail label: 01 / RETERA
Teaser: 〔Retera in one line: what it is and who it is for〕. 〔The bet, one sentence〕. Right now: 〔status, e.g. raising a pre-seed / applying to accelerators〕.
Link: About Retera → /retera

**Row 02 — Writing**
Rail label: 02 / WRITING
Teaser: Primary-source deep dives on the energy transition. Sixty-plus hours per piece, every number cited, nothing softened. Latest: what I would do at Base Power and at Pila Energy.
Link: Read the writing → /blog

**Row 03 — Building**
Rail label: 03 / BUILDING
Teaser: Open-source tools for home energy. LiDAR audits, battery ROI math, and the full HAZMAT decision tree for shipping lithium cells. Built because the spreadsheet should be public.
Link: See the tools → /projects

**Row 04 — Services**
Rail label: 04 / SERVICES
Teaser: Four things I do well enough to charge for: home energy audits, smart-home setup, OpenClaw, and the credit-card points game.
Link: Work with me → /services

**Row 05 — Elsewhere**
Rail label: 05 / ELSEWHERE
Teaser: I am applying in public. The whole search, in the open.
Link: #ApplyingInPublic → /applying

---

## PAGE 2 — RETERA

> I do not have the facts on Retera yet, so this page is scaffolding with placeholders. Tell me what Retera is in one or two sentences and I will write the whole page for real. Structure below is what the accelerator and investor audience expects.

Eyebrow: RETERA
H1: 〔Retera. The one-line what.〕
Lede (2 to 3 lines): 〔The problem, stated plainly. Who has it. Why it has stayed unsolved.〕

Section A — Why now
〔The timing wedge. What changed in the market, the regulation, or the tech that makes this buildable today and not three years ago.〕

Section B — How it works
〔The mechanism in plain language. What the user does, what Retera does, where the money is.〕

Section C — Where it is today
〔Status and proof. What exists, what is live, any traction, what you have learned.〕

Section D — The ask
〔What you want from a reader: an intro, a check, a pilot customer, a hire. Make it specific.〕
CTA: omer@manoros.com

---

## PAGE 3 — BLOG (Writing)

### Index intro
Eyebrow: WRITING
H1: Deep dives
Lede: For people who want the full analysis. Primary-source research on the energy transition. All numbers cited. Nothing softened.

### Post list (each: title, dek, meta, link)

**Post 1**
Title: What I Would Do at Base Power
Dek: Verticalize further, then buy the cost-of-capital arbitrage California gives away.
Meta: 60+ hours of primary-source research. ERCOT filings, Potomac Economics, Modo Energy, CPUC, CAISO, IRS guidance.
Link: Read →

**Post 2**
Title: What I Would Do at Pila Energy
Dek: Pull the two operational levers already on the balance sheet. Both unlock distribution Pila is paying for and not using.
Meta: Three weeks of source research. Founder interviews, spec pages, portfolio theses, NEC 2023 Article 706, the Hacker News thread where the founder defended the design live.
Link: Read →

**Post 3** 〔next piece〕
Title: 〔Next deep dive title〕
Dek: 〔one line〕
Link: Read →

> Note for the builder: the full bodies of Post 1 and Post 2 already exist, written and cited, in the current site's "Deep Dives" section (index.html, `#deepdives`). Port them as the article pages. They are structured as "What I Learned About X" followed by "What I Would Do at X" and that structure should carry over.

---

## PAGE 4 — PROJECTS (Building)

### Intro
Eyebrow: BUILDING
H1: Energy tools
Lede: Open-source tools I built to answer my own questions about home energy. Zero dependencies where I can manage it. All on GitHub.

### Project 1 — ManorOS
Tagline: iOS home energy auditor
Description: An open-source home energy assessment tool. LiDAR room scanning via Apple RoomPlan, HVAC equipment logging with on-device OCR via Apple Vision, appliance detection, window assessment, and ACCA Manual J BTU calculations. It generates tiered upgrade recommendations with payback periods and battery-synergy insights. The thesis: an inefficient building envelope directly cannibalizes home-battery ROI during peak grid events ($2,000 to $5,000 per MWh).
Stack: Swift, SwiftUI, SwiftData, ARKit, RoomPlan, AVFoundation, Vision OCR, CoreLocation, PDFKit
Link: github.com/mrbese/ManorOS

### Project 2 — CellSense
Tagline: Battery ROI calculator
Description: Compare Tesla Powerwall 3, Enphase IQ 5P, Pila Mesh, and Base Power side by side. Supports 16 utilities, 32 rate plans, NEM 3.0, and VPP earnings projections for ELRP, ConnectedSolutions, and ERCOT.
Stack: Pure vanilla JavaScript. Zero dependencies. Dark glassmorphism UI with canvas-based charts.
Link: github.com/mrbese/cellsense

### Project 3 — HazShip
Tagline: Lithium battery HAZMAT shipping classifier
Description: Encodes the entire regulatory decision tree for 49 CFR 173.185, IATA DGR 66th Edition, and IMDG Code Amendment 42-24. Outputs UN numbers, packing instructions, labels, and documentation checklists. Built from direct experience shipping lithium-ion medical devices through FDA clearance.
Stack: SwiftUI (iOS 17+). Pure engine pattern. Zero dependencies. Fully offline.
Link: github.com/mrbese/HazShip

---

## PAGE 5 — SERVICES

### Intro
Eyebrow: SERVICES
H1: Work with me
Lede: Consulting and setup work, priced by project. The short version of two decades of being curious about how buildings, power, and points actually work.

### Service 1 — Energy audit consultancy
What it is: A LiDAR-based home energy assessment. I scan the space, log the equipment, run the Manual J load math, and hand you an upgrade plan with payback periods. The same engine behind ManorOS, run for you.
Who it is for: Homeowners deciding whether to add a battery, swap HVAC, or seal the envelope first (usually the envelope first).
CTA: Email me → omer@manoros.com

### Service 2 — Smart home consultancy
What it is: Design and setup of a home that actually works. Not a pile of gadgets, a system: lighting, climate, energy, and the automations that make them quiet.
Who it is for: People who bought the devices and never got the payoff.
CTA: Email me → omer@manoros.com

### Service 3 — OpenClaw setup
What it is: 〔One line on what OpenClaw is and what "setup" includes. I do not have the details, fill this in.〕
Who it is for: 〔who〕
CTA: Email me → omer@manoros.com

### Service 4 — Credit card points consultancy
What it is: The points game, played properly. Card strategy, spend routing, and redemptions that turn ordinary spending into outsized travel.
Who it is for: People who travel and suspect they are leaving money on the table (they are).
CTA: Email me → omer@manoros.com

---

## OPTIONAL: "proof" strip for the Home hero or Retera page

If you want the track-record numbers somewhere (they are strong, and accelerators like them), here they are as four one-liners. They fit a thin row under the hero or near the Retera ask.

- Jason Calacanis broke two of his own rules ("no solo founders," "no service businesses") to write the first check.
- Amazon medical-device launch in 3 months. Category average is 10 to 16 months at a 90% rejection rate. They called back six months later to ask how.
- 30% electricity-bill drop at the Jonathan Club after a two-day LED upgrade.
- 180-person waitlist at Bonjuur, built by cleaning houses myself every weekday for six months and redesigning the workflow from the ground up.

---

### What I need from you to finish
1. **Retera**: one or two sentences on what it is, who it is for, and the current ask. Then Page 2 writes itself.
2. **OpenClaw**: one line on what it is, so Service 3 is real.
3. **Services rates**: keep "priced by project" or give numbers?
