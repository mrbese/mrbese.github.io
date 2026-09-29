// Public resume, rendered at /resume, with /Omer-Bese-Resume.pdf as the download.
// Text is the verified public resume of 2026-09-28. Keep the two in sync: a change
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
  "Energy systems engineer, founder, builder, operator. Started on the contractor side of LADWP's commercial lighting rebate program, counting fixtures one by one and checking installs in person. Now builds software to run such programs end to end, with vision AI reading the evidence: WattShed, rebate-program software for private funders, built daily with Claude Code and Codex agents. Also shipped Re_Tera, an AI insurance-policy auditor, to the web and the App Store, solo.";

export const jobs: ResumeJob[] = [
  {
    org: 'WattShed',
    role: 'Founder and Engineer',
    period: '2026 to present',
    location: 'Los Angeles',
    link: { label: 'wattshed.co', href: 'https://wattshed.co' },
    intro: [
      'Software that lets a company outside the utility, such as a data center developer, fund household efficiency upgrades, then verify the work and clear the rebate, end to end.',
      'As demand rises, the party that benefits from a community using less electricity is no longer only the utility: whoever needs the freed capacity gets its own return on every kilowatt a household stops drawing. WattShed gives that funder the tools to act on it:',
    ],
    points: [
      'Design: a funder sets the fund and the price per kilowatt of peak removed. A free, no-login program designer covers all 50 states and DC with degree-day and modified-bin savings models, plus deemed savings where a verified deemed pack exists.',
      "Verify: a household applies with its own photos and video. Vision AI reads the home's condition before the work, and completion evidence is checked against the approved scope before a reviewer signs off; a deterministic engine qualifies the upgrades and prices every rebate, so the model never decides the money.",
      "Clear: the funder pays the contractor directly, with an optional advance on the approved quote and the balance on verified completion. Each verified installation's engine-calculated peak kW rolls up to the program, so the funder sees the peak its fund is modeled to free.",
    ],
  },
  {
    org: 'Bonjuur, Inc.',
    role: 'Founder',
    period: 'April 2022 to December 2025',
    location: 'New York and Los Angeles',
    points: [
      'Daily short-visit housekeeping instead of the three-hour minimum. Cleaned houses personally every weekday for six months, more than 500 service visits, to find the bottlenecks before writing software or hiring; built a 180-person waitlist.',
      'Raised $90,000, including $25,000 from Jason Calacanis after his pre-accelerator, against his two stated rules: no solo founders, no service businesses.',
      'Wound the service down at the end of 2024 and pivoted the company in 2025 to AI estate management: bodycams plus vision AI overseeing in-home service work. First time building with vision AI on physical work.',
    ],
  },
  {
    org: 'Tulip Haus',
    role: 'Co-Founder',
    period: 'March 2020 to October 2025',
    location: 'New York',
    points: [
      'Co-founded, with a childhood friend, a two-person importer of handmade Turkish home goods, prepared as a SoHo retail store. Held off signing the six-figure lease in March 2020; the city locked down eight days later and it was never signed.',
      'Pivoted to e-commerce, then to B2B wholesale as the exclusive US representative of a couple of Turkish brands, since handmade goods do not sell without in-person touch. Ran the full chain with the co-founder: artisans, customs brokerage and tariff classification, ocean freight, inventory, last-mile delivery, Shopify.',
    ],
  },
  {
    org: 'Spirohome',
    role: 'Business Developer',
    period: 'April 2019 to November 2019',
    location: 'Ankara, Turkey',
    points: [
      'Battery-powered IoT spirometer, FDA clearance obtained during the role. Opened Amazon UK and EU stores in the restricted Medical Device II category in three months, against a usual ten months and about 90% seller rejection, by assembling the UN 38.3, CE marking and EU medical-device documentation before Amazon asked.',
    ],
  },
  {
    org: 'Istanbul Chamber of Industry',
    role: 'Associate Specialist, Energy and Environment',
    period: 'January 2018 to March 2019',
    location: 'Istanbul',
    points: [
      "Joined to bring US efficiency rebate and incentive practice to Turkish industry, which had no equivalent. Co-developed and launched an industrial energy-audit program with Yıldız Technical University: the Chamber (18,000+ member manufacturers) funded the audit and measurement equipment, engineering students audited member factories on site at no charge using the factories' real data, and professors oversaw the reports.",
      "Supervised the program's first audit, at Sümer Plastik's 12,000 m² factory in Sultanbeyli, after about a year on the team taking the program through institutional approvals.",
    ],
  },
  {
    org: 'Nularis',
    role: 'Energy Efficiency Engineer',
    period: 'November 2016 to November 2017',
    location: 'Los Angeles',
    points: [
      "Ran LADWP Commercial Lighting Incentive Program rebate projects end to end for a contractor on the utility's preferred list, from fixture-by-fixture audits and savings in kW, kWh and GHG against California Title 24 and ASHRAE to in-person installation checks and coordinating LADWP's post-installation audit that released the funds.",
      "A one-to-two-day install sat inside a four-to-six-month rebate cycle, so projects ran in parallel at different stages, from small garages to the Jonathan Club, the Sofitel and the Four Seasons. Replaced about half the Jonathan Club's bulbs personally when crews ran short. Most clients saw at least a 30% reduction.",
    ],
  },
];

export const projects: ResumeItem[] = [
  {
    name: 'Re_Tera',
    links: [
      { label: 'getretera.com', href: 'https://getretera.com' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/re-tera-insurance-copilot/id6776045760' },
    ],
    text: 'AI insurance-policy auditor. Flags coverage gaps, sublimits and exclusions against the insurance statutes of 58 states and territories. Native SwiftUI rewrite from first commit to the App Store in three weeks (June 2026), solo.',
  },
  {
    name: 'ManorOS',
    links: [{ label: 'TestFlight' }],
    text: 'Native iOS home energy auditor with LiDAR room scanning (ARKit, RoomPlan), Manual J and ASHRAE load calculations, HVAC nameplate OCR, and tiered upgrade recommendations with payback periods.',
  },
  {
    name: 'CellSense',
    links: [{ label: 'github.com/mrbese/cellsense', href: 'https://github.com/mrbese/cellsense' }],
    text: 'Home battery economics model across four battery systems, 16 utilities and 35 rate plans, as a web calculator and a SwiftUI app.',
  },
  {
    name: 'HazShip',
    links: [{ label: 'github.com/mrbese/HazShip', href: 'https://github.com/mrbese/HazShip' }],
    text: 'Swift app classifying lithium battery shipments under 49 CFR 173.185, IATA DGR and the IMDG Code, entirely on device.',
  },
  {
    name: 'BESE, OpenAI Parameter Golf',
    links: [{ label: 'PR #1327', href: 'https://github.com/openai/parameter-golf/pull/1327' }],
    text: 'Custom tokenizer from T9 keypads, letter frequencies and QWERTY co-occurrence; 287-entry vocabulary, about 72% smaller than baseline, 1.1276 bits per byte in 15.3 MB (PR open, score self-reported).',
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
    note: 'Capstone with WWF: a UHT milk supply chain proposal, selected by WWF for implementation.',
  },
  {
    org: 'Istanbul Bilgi University',
    role: 'B.S. Energy Systems Engineering',
    period: '2014',
    note: 'Thesis on geothermal feasibility using proprietary well data obtained directly from Ormat.',
  },
];

export const skills = [
  { label: 'Code', text: 'TypeScript, Next.js, Zod, vitest, Swift and SwiftUI, ARKit, RoomPlan, Firebase (Auth, Firestore, Storage, App Hosting), OpenAI Responses API.' },
  { label: 'AI', text: 'Claude Code, Codex, Cursor, multi-agent orchestration, vision AI on field photos and video, live-capture verification.' },
  { label: 'Field', text: 'Building audits, utility rebate programs, contractor scheduling, installation checks, compliance packages.' },
  { label: 'Energy modeling', text: 'Degree-day, modified-bin and deemed-savings methods, Manual J, ASHRAE.' },
];
