// Public resume, rendered at /resume, with /Omer-Bese-Resume.pdf as the download.
// Text follows the public resume built on 2026-11-10 (career-ops output/public-cv/v003). Keep the two in sync: a change
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
  'Energy systems engineer and founder. Work from the primary text: read the tariff, power contract or statute, find the clause that decides the cost, and build the tool that prices it. Most recent: an independent case study of the power contract for the Hawesville, Kentucky campus Anthropic has leased, built with Claude from public filings. Started on contractor-side LADWP rebate projects, then co-launched an industrial energy-audit program at the Istanbul Chamber of Industry. Built WattShed independently; now looking to do this work inside a team.';

export const jobs: ResumeJob[] = [
  {
    org: 'WattShed',
    role: 'Founder and Engineer',
    period: 'July 2026 to present',
    location: 'Los Angeles',
    link: { label: 'wattshed.co', href: 'https://wattshed.co' },
    intro: ['Community energy programs for data centers.'],
    points: [
      'Published the Hawesville power contract case study (wattshed.co/case-study/hancock-county), an independent reading of the power contract for the 482 MW Hawesville, Kentucky campus that TeraWulf is building and Anthropic has leased, from public filings (Kentucky PSC case 2026-00115): a live model and a 2-page memo. The billing floor starts once a 30-minute peak passes 50 MW, or at a completion notice if earlier, so on an assumed nine-month ramp the campus is billed at least $9.7M for power not yet drawn; a 241 MW start would pay $3.2M of floor charges instead of $9.7M.',
      "Built Lens (wattshed.co/lens), the model behind the study, as an MCP server. Claude prices any term live, pulls one power assumptions sheet (when power arrives, how much, how reliable, at what cost) and reads the stakeholder record: 10 parties including the PSC and the Attorney General, 10 deciding dates including MISO's answer to FERC's large-load show-cause order (EL26-70) and Kentucky's 2027 session (a possible HB 593 successor), each graded by source, and 7 unknowns.",
      "Also priced in the study (modeled): the capacity charge sits outside the floor and is set on a seasonal peak the campus names by each 1 October, so naming a summer peak 10% lower and holding to it nets about $1.7M a year. The campus buys MISO energy at the hourly price, and gas set MISO's real-time price in 63% of intervals in 2024, so each $1 per MMBtu adds about $17M a year to its power bill.",
      "Ratepayer test in the study, on a $10M household program (734 homes): about $123K a year is shifted to other Big Rivers customers if the credit is valued at Virginia's assumed $120 per kW-year; nothing is shifted if it is set at what the grid avoids.",
      "Wrote the Wythe County, Virginia case study (wattshed.co/case-study/wythe-county) in four days, in a market not worked in before: from Appalachian Power's Tariff 28, the SCC's large-load order and Va. Code 56-596.7, priced a $10M home upgrade and battery program near Fluidstack's campus at $5.1M to $8.5M net over 14 years, depending on the credit rule, and named the three terms in Appalachian Power's January 2027 filing that move the net cost most.",
      'Built the program runtime, live in production: funders set terms, households apply, contractors document the work, reviewers clear it, funders pay on verified results. About 2,000 unit tests.',
    ],
  },
  {
    org: 'Bonjuur',
    role: 'Founder',
    period: 'April 2022 to December 2025',
    location: 'New York and Los Angeles',
    points: [
      'Built a housekeeping service and raised $90,000, $25,000 of it from Jason Calacanis after his pre-accelerator (one of roughly four funded from a cohort of about 150), getting him to break both of his rules: no solo founders, no service businesses.',
    ],
  },
  {
    org: 'Tulip Haus',
    role: 'Co-Founder',
    period: 'March 2020 to October 2025',
    location: 'New York',
    points: [
      'Imported handmade Turkish home goods with a co-founder: sourcing, customs brokerage and tariff classification, ocean freight and fulfillment. Personally handled every invoice and import document.',
    ],
  },
  {
    org: 'Spirohome',
    role: 'Business Developer',
    period: 'April 2019 to November 2019',
    location: 'Ankara, Turkey',
    points: [
      'Oversaw FDA-clearance work for a battery-powered IoT medical device, coordinating hardware engineering, regulatory and sales; the company obtained clearance during the role. Opened its Amazon UK and EU stores in a restricted medical-device category in three months (usually ten).',
    ],
  },
  {
    org: 'Istanbul Chamber of Industry',
    role: 'Associate Specialist, Energy & Environment',
    period: 'January 2018 to March 2019',
    location: 'Istanbul, Turkey',
    points: [
      "Co-developed an industrial energy-audit program for a Chamber of more than 18,000 member manufacturers and launched it after about a year of approvals: the Chamber funded the equipment, Yıldız Technical University students audited member factories at no charge on real data, and professors oversaw the reports. Supervised the first audit, at Sümer Plastik's 12,000 m² factory.",
    ],
  },
  {
    org: 'Nularis',
    role: 'Energy Efficiency Engineer',
    period: 'November 2016 to November 2017',
    location: 'Los Angeles',
    points: [
      "Worked at a small contractor on LADWP's preferred list for the Commercial Lighting Incentive Program. Ran rebate projects from application and LADWP pre-inspection to the post-installation audit before LADWP released funds, several at once over four-to-six-month cycles, at sites from small garages to the Four Seasons.",
    ],
  },
];

// Built with AI agents, 2026. Solo except PowerUP (hackathon team of four).
export const projects: ResumeItem[] = [
  {
    name: 'PowerUP',
    links: [
      { label: 'GitHub', href: 'https://github.com/mrbese/PowerUp' },
      { label: 'live demo', href: 'https://mrbese.github.io/PowerUp/' },
    ],
    text: "Neighborhood islands for a home-battery fleet, hackathon build, October 2026. Top 20 at USC's InnovateLA Dual-Use Hackathon, on the Energy and Grid Hardening track sponsored by Base Power, in a team of four. Owned the energy design and directed the build with Claude Code: homes behind an SCE line switch run as one island on their batteries, SCE opens the switch and bills, and a utility officer approves the recharge. In the simulated replay at clear-sky solar, the 456-home pilot carries all 16 historical shutoffs.",
  },
  {
    name: 'ManorOS',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/manoros/id6759580676' }],
    text: "Home energy auditor iOS app, live on the App Store. For the peak-shaving release that follows the App Store build, built a demand-tariff dataset of 165 utilities in 34 states from NREL, OpenEI URDB and the tariff sheets: 73 verified with the governing sentence quoted and linked, after three research and four verification rounds re-checked 96 claims. Includes a bill check for LADWP's Power Access Charge, in effect a demand ratchet measured in kWh.",
  },
  {
    name: 'Re_Tera',
    links: [{ label: 'getretera.com', href: 'https://getretera.com' }],
    text: 'Insurance-policy app on a 50-state insurance-statute corpus. Checks every statute citation against the corpus text. A study of whether amendments can be found automatically (75 verified amendments, five states) surfaced a missed Alaska omnibus insurance act (SB 132).',
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
    period: '2015 to 2016',
    note: 'Coursework in Energy Markets and Innovation and Solar Project Development. WWF capstone: all nine teammates rejected the UHT-milk proposal at first; after weeks of added evidence, WWF selected it for implementation.',
  },
  {
    org: 'Istanbul Bilgi University',
    role: 'B.S. Energy Systems Engineering',
    period: '2010 to 2014',
    note: "Geothermal thesis on the Seferihisar field, sizing a hypothetical 2 MW plant on proprietary well data that Ormat's regional director handed over with permission to publish. Attended the Stanford Geothermal Workshop.",
  },
];

export const skills = [
  { label: 'Building with AI agents', text: 'Claude Code, Codex and Cursor, with agent-written test suites and cross-model reviews (Claude and Codex); deterministic engines and MCP servers.' },
  { label: 'Energy markets and programs', text: 'MISO and Kentucky (Hawesville), PJM and Virginia (Wythe), ERCOT (Base Power essay), CAISO and SCE data (PowerUP), LADWP rebate programs.' },
];
