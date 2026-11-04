// Public resume, rendered at /resume, with /Omer-Bese-Resume.pdf as the download.
// Text follows the public resume built from cv.md on 2026-11-04 (career-ops output/public-cv). Keep the two in sync: a change
// here needs the PDF re-rendered, and the reverse. The PDF also prints a one-line
// descriptor per publication; the page links to the articles themselves.

export interface ResumeJob {
  org: string;
  role: string;
  period: string;
  location: string;
  link?: { label: string; href: string };
  intro?: string[];
  points: string[];
}

export interface ResumeItem {
  name: string;
  href?: string;
  links?: { label: string; href?: string }[];
  text: string;
}

export const summary =
  "Energy systems engineer, founder, builder, operator. Started in the field on LADWP's commercial lighting rebate program, running projects from bulb counts to utility sign-off, then helped launch an industrial energy-audit program at the Istanbul Chamber of Industry. Founded Bonjuur in 2022 and raised $90K. Since 2026, building and shipping software with AI agents, mostly solo: WattShed, Re_Tera and ManorOS. Built WattShed independently; now looking to build products like it inside a team.";

export const jobs: ResumeJob[] = [
  {
    org: 'WattShed',
    role: 'Founder and Engineer',
    period: 'July 2026 to present',
    location: 'Los Angeles',
    link: { label: 'wattshed.co', href: 'https://wattshed.co' },
    intro: ['Community energy programs for data centers.'],
    points: [
      "Thesis: a rebate priced per kilowatt saved, set against the funder's own return rather than a utility's rate case; audited with vision AI rather than a truck roll; settled in weeks; and visible to the household on next month's bill. Target buyers: hyperscalers and data center developers, companies like Base Power, and government agencies and utilities.",
      'Built the first prototype solo at OpenAI Build Week (July 2026), then made it a product. A deterministic TypeScript engine applies the rules and AI structures the inspection evidence; a vitest suite asserts that every figure on the methodology page equals a live call to that engine.',
      'Built the program runtime, live in production: funders set the terms, households apply, contractors quote and document the work, reviewers clear it, and funders pay on verified results. The whole journey passed end to end on production in October 2026.',
      "A public, no-login program designer for all 50 states and DC (degree-day, modified-bin and deemed-savings methods). A vision AI auditor estimates the house's current efficiency from video and pre-approves upgrades; a liveness check verifies that before-and-after video was captured live in that session.",
      'Split the platform into 40 modules across six suites; 30 run as public, no-login tools. Built a live MCP server over the pricing engine (wattshed.co/mcp) and published the Mitchell County, Texas case study (modeled: 641 homes, about 2.06 MW of peak off the local grid).',
    ],
  },
  {
    org: 'Bonjuur',
    role: 'Founder',
    period: 'April 2022 to December 2025',
    location: 'New York and Los Angeles',
    points: [
      'A housekeeping service built around short daily visits instead of the three-hour minimum. Cleaned houses personally every weekday for six months, more than 500 service visits, to experience the bottlenecks firsthand; built a 180-person waitlist.',
      'Raised $90,000, including $25,000 from Jason Calacanis after his pre-accelerator, getting him to break both of his rules: no solo founders, no service businesses. First customer: Jordan Fliegel, Managing Director of Techstars NYC.',
      'Pivot (2025): AI estate management, with bodycams and vision AI to automate oversight of in-home service work, then refocused ManorOS on home energy.',
    ],
  },
  {
    org: 'Tulip Haus',
    role: 'Co-Founder',
    period: 'March 2020 to October 2025',
    location: 'New York',
    points: [
      'Co-founded a two-person business importing handmade, high-end Turkish home goods. Was set to sign a six-figure SoHo retail lease on March 12, 2020, but decided to wait on COVID; the city locked down eight days later. Pivoted to e-commerce, then to B2B wholesale as the exclusive US representative of a couple of Turkish brands.',
      "Ran the full chain with a co-founder: sourcing from artisans in Turkey, customs brokerage and tariff classification, ocean freight, inventory in NYC's Starrett-Lehigh Building, last-mile delivery and the Shopify store.",
    ],
  },
  {
    org: 'Spirohome',
    role: 'Business Developer',
    period: 'April 2019 to November 2019',
    location: 'Ankara, Turkey',
    points: [
      'Oversaw FDA-clearance work for a battery-powered IoT medical device, coordinating hardware engineering, regulatory and sales; the company obtained clearance during the role.',
      'Launched the Amazon UK and EU stores in the restricted Medical Device II category in three months, against a usual ten, by preparing the UN 38.3, CE marking and EU medical-device documentation before Amazon asked for it.',
    ],
  },
  {
    org: 'Istanbul Chamber of Industry',
    role: 'Associate Specialist, Energy and Environment',
    period: 'January 2018 to March 2019',
    location: 'Istanbul',
    points: [
      "Helped develop and launch an industrial energy-audit program with Yıldız Technical University: the Chamber funded audit and measurement equipment, students audited member factories at no charge using the factories' real data, and professors oversaw the reports. Supervised the program's first audit, at Sümer Plastik's 12,000 m² factory.",
    ],
  },
  {
    org: 'Nularis',
    role: 'Energy Efficiency Engineer',
    period: 'November 2016 to November 2017',
    location: 'Los Angeles',
    points: [
      "Ran LADWP Commercial Lighting Incentive Program rebate projects end to end for a contractor on the utility's preferred list, from small garages to the Jonathan Club, the Sofitel and the Four Seasons: fixture-by-fixture audits to California Title 24 and ASHRAE, savings in kW, kWh and GHG equivalents, installation checks and the post-installation audits before LADWP released funds.",
      "Personally replaced about half of the Jonathan Club's bulbs with LEDs when crews were short-staffed. Most clients saw at least a 30% reduction in lighting energy use.",
    ],
  },
];

export const projects: ResumeItem[] = [
  {
    name: 'PowerUP',
    links: [{ label: 'GitHub', href: 'https://github.com/mrbese/PowerUp' }],
    text: 'InnovateLA Dual-Use Hackathon (USC, October 2026), Base Power track, team of four; top 20 and poster day. Owned the energy design and build direction: an opt-in neighborhood island behind an existing SCE switch for 456 homes, a wildfire-shutoff dispatcher replayed on the real October 2026 Malibu shutoff, and a guard that passes every order to the fleet through eight checks.',
  },
  {
    name: 'Re_Tera',
    links: [
      { label: 'getretera.com', href: 'https://getretera.com' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/re-tera-insurance-copilot/id6776045760' },
    ],
    text: 'Insurance-policy app: explains coverage in plain language and flags gaps, sublimits and exclusions against a 50-state insurance-statute corpus, with a citation validator. Native SwiftUI rewrite from first commit to the App Store in three weeks (June 2026), solo.',
  },
  {
    name: 'ManorOS',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/manoros/id6759580676' }],
    text: 'Native iOS home energy auditor with LiDAR room scanning (ARKit, RoomPlan), simplified Manual J room load estimates, HVAC nameplate OCR, utility-bill and tariff checks, and upgrade recommendations with payback periods. Live on the App Store since October 2026.',
  },
  {
    name: 'CellSense',
    links: [{ label: 'github.com/mrbese/cellsense', href: 'https://github.com/mrbese/cellsense' }],
    text: 'Home battery economics across four battery systems, 16 utilities and 35 rate plans, as a web calculator and a SwiftUI app.',
  },
  {
    name: 'HazShip',
    links: [{ label: 'github.com/mrbese/HazShip', href: 'https://github.com/mrbese/HazShip' }],
    text: 'Lithium battery shipping classification under 49 CFR 173.185, the IATA DGR and the IMDG Code, entirely on device.',
  },
  {
    name: 'BESE, OpenAI Parameter Golf',
    links: [{ label: 'PR #1327', href: 'https://github.com/openai/parameter-golf/pull/1327' }],
    text: 'Custom tokenizer from T9 keypads, letter frequencies and QWERTY co-occurrence; 287-entry vocabulary, about 72% smaller than baseline, 1.1276 bits per byte in 15.3 MB (PR open, score self-reported).',
  },
  {
    name: '1Relay',
    links: [{ label: '1relay.com', href: 'https://1relay.com' }],
    text: 'API key wallet with a zero-knowledge vault, and proxy for AI services, with budget and rate limiting across OpenAI and Anthropic.',
  },
];

export const publications = [
  { title: 'Geothermal Is in "Heat", and this time, buyer is moving in', date: '08.26', href: '/writing/geothermal-heat/' },
  { title: 'Current War II: Tesla vs Edison', date: '07.26', href: '/writing/war-of-the-currents/' },
  { title: 'What I Learned About Base Power', date: '05.26', href: '/writing/base-power/' },
  { title: 'Pila Energy: The Permissionless Insight, Not the Battery', date: '05.26', href: '/writing/pila-energy/' },
];

export const education = [
  {
    org: 'Columbia University',
    role: 'M.S. Sustainability Management',
    period: '2016',
    note: 'Capstone with WWF: proposed UHT milk in place of refrigerated milk, selected by WWF for implementation.',
  },
  {
    org: 'Istanbul Bilgi University',
    role: 'B.S. Energy Systems Engineering',
    period: '2014',
    note: 'Thesis on geothermal power in the Seferihisar field, built on proprietary well data obtained directly from Ormat Technologies.',
  },
];

export const skills = [
  { label: 'Energy', text: 'Building audits, utility rebate programs, deemed-savings, degree-day and modified-bin methods, simplified Manual J, demand-charge billing and tariffs, home-battery payback, battery dispatch, GIS on utility open data.' },
  { label: 'AI and software', text: 'AI agents (Claude Code, Codex, Cursor) and multi-agent orchestration, vision AI, retrieval-augmented generation, MCP servers, TypeScript, Next.js, Swift and SwiftUI, Firebase, Google Cloud, Cloudflare, Playwright, Vitest, GitHub Actions.' },
  { label: 'Operations', text: 'Field operations, importing and customs, e-commerce and B2B wholesale, regulated-category marketplace launches, FDA clearance.' },
];
