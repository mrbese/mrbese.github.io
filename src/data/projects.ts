export interface Project {
  name: string;
  tagline: string;
  year?: string;
  // Omit while a repo is private. A missing repoUrl renders the card unlinked
  // instead of pointing the public at a 404.
  repoUrl?: string;
  description: string;
  stack: string[];
  // Homepage "building" index. Entries without it live on /projects only.
  home?: boolean;
}

export const projects: Project[] = [
  {
    name: 'WattShed',
    tagline: 'Rebate Program Designer and Evidence Workflow',
    year: '2026',
    // Repo is private; the link points at the live app, wattshed.co.
    repoUrl: 'https://wattshed.co',
    description:
      'WattShed is live national software that creates, verifies and pays residential energy efficiency rebates. A public, no-login program designer covers all 50 states and DC. A deterministic engine combines degree-day and modified-bin estimates with location-appropriate deemed methodologies where available, and payment moves only against reviewed evidence.',
    stack: ['Next.js 16', 'React 19', 'Firebase', 'OpenAI vision', 'Deterministic qualification engine'],
    home: true,
  },
  {
    name: 'Re_Tera',
    tagline: 'AI Insurance Copilot for Homeowners and Renters',
    year: '2026',
    // Internal page, not a repo link: /retera. It carries the App Store link.
    repoUrl: '/retera',
    description:
      "A native iOS insurance policy app for homeowners and renters, on the Apple App Store for iPhone and iPad. Re_Tera reads your policy, explains coverage in plain English, and flags gaps, sublimits and exclusions against your state's insurance code. It also keeps the records a claim asks for.",
    stack: ['Swift', 'SwiftUI', 'Firebase', 'OpenAI', 'Apple Vision', 'RevenueCat'],
  },
  {
    name: 'ManorOS',
    tagline: 'iOS Home Energy Auditor',
    year: '2026',
    description:
      'A home energy assessment tool that uses LiDAR room scanning via Apple RoomPlan, HVAC equipment logging with on-device OCR via Apple Vision, appliance detection, window assessment, and ACCA Manual J BTU calculations. Generates tiered upgrade recommendations with payback periods and battery synergy insights.',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'ARKit', 'RoomPlan', 'AVFoundation', 'Vision OCR', 'CoreLocation', 'PDFKit'],
    home: true,
  },
  {
    name: 'CellSense',
    tagline: 'Battery ROI Calculator',
    year: '2026',
    repoUrl: 'https://github.com/mrbese/cellsense',
    description:
      'Compare Tesla Powerwall 3, Enphase IQ 5P, Pila Mesh, and Base Power side by side. Supports 16 utilities, 35 rate plans, NEM 3.0, and VPP earnings projections for ELRP, ConnectedSolutions, and ERCOT.',
    stack: ['Vanilla JavaScript', 'Zero dependencies', 'Canvas charts'],
    home: true,
  },
  {
    name: 'HazShip',
    tagline: 'Lithium Battery HAZMAT Shipping Classifier',
    year: '2026',
    repoUrl: 'https://github.com/mrbese/HazShip',
    description:
      'Encodes the entire regulatory decision tree for 49 CFR 173.185, IATA DGR 66th Edition, and IMDG Code Amendment 42-24. Outputs UN numbers, packing instructions, labels, and documentation checklists. Built from direct experience shipping lithium-ion medical devices through FDA clearance.',
    stack: ['SwiftUI (iOS 17+)', 'Pure engine pattern', 'Zero dependencies', 'Fully offline'],
    home: true,
  },
  {
    name: 'shitster',
    tagline: 'Consumer Self-Help Campaigns',
    year: '2026',
    // Internal page, not a repo link: /shitster.
    repoUrl: '/shitster',
    description:
      'BMW pushed a Spider-Man ad to the dashboard of cars people own, on a screen it once called a private space. I read the 28-page contract they wrote, found the clause where they obligate themselves to call every complaining owner back individually, and built the tool that generates those letters in the browser. Zero accounts, zero stored data, open source. First campaign: DashOff.',
    stack: [],
  },
];
