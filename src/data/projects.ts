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
      'Community energy programs for data centers: software that creates, verifies and pays household efficiency rebates. A public, no-login program designer covers all 50 states and DC, vision AI audits each home from video, and a deterministic engine prices every rebate, so the model never decides the money. 30 of its 40 modules run as public tools, with an MCP server over the pricing engine.',
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
    home: true,
  },
  {
    name: 'PowerUP',
    tagline: 'Neighborhood Islands for a Home-Battery Fleet',
    year: '2026',
    repoUrl: 'https://github.com/mrbese/PowerUp',
    description:
      'Built in a team of four at the InnovateLA Dual-Use Hackathon (USC, October 2026) on the Base Power track; top 20 and poster day. I owned the energy design: homes that go dark only because their feeder runs through fire country run as one opt-in island behind an existing SCE switch, with a wildfire-shutoff dispatcher replayed on the real October 2026 Malibu shutoff and a guard that checks every order to the fleet.',
    stack: ['JavaScript', 'SCE, CEC and CAISO data', 'ArcGIS open data', 'Dynamic programming dispatch'],
    home: true,
  },
  {
    name: 'ManorOS',
    tagline: 'iOS Home Energy Auditor',
    year: '2026',
    repoUrl: 'https://apps.apple.com/us/app/manoros/id6759580676',
    description:
      'A home energy auditor on the App Store: LiDAR room scanning via Apple RoomPlan, simplified Manual J room load estimates, HVAC nameplate OCR via Apple Vision, utility-bill and tariff checks, and upgrade recommendations with payback periods. No account; audit data stays on the device.',
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
  },
  {
    name: 'HazShip',
    tagline: 'Lithium Battery HAZMAT Shipping Classifier',
    year: '2026',
    repoUrl: 'https://github.com/mrbese/HazShip',
    description:
      'Encodes the entire regulatory decision tree for 49 CFR 173.185, IATA DGR 66th Edition, and IMDG Code Amendment 42-24. Outputs UN numbers, packing instructions, labels, and documentation checklists. Grew out of preparing UN 38.3 lithium-battery shipping compliance for a medical device.',
    stack: ['SwiftUI (iOS 17+)', 'Pure engine pattern', 'Zero dependencies', 'Fully offline'],
  },
  {
    name: 'shitster',
    tagline: 'Consumer Self-Help Campaigns',
    year: '2026',
    // Internal page, not a repo link: /shitster.
    repoUrl: '/shitster',
    description:
      'BMW pushed a Spider-Man ad to the dashboard of cars people own, on a screen it once called a private space. I read the 28-page contract they wrote, found the clause that gives every owner who sends a notice of dispute an individual conference with BMW, and built the tools that generate those letters in the browser. Zero accounts, zero stored data, open source. First campaign: DashOff.',
    stack: [],
  },
  {
    name: '1Relay',
    tagline: 'API Key Wallet for AI Services',
    year: '2026',
    // Repo is private; the link points at the live product.
    repoUrl: 'https://1relay.com',
    description:
      'An API key wallet with a zero-knowledge vault, and a proxy for AI services, with budget and rate limiting across OpenAI and Anthropic. Keys are encrypted at rest and decrypted only inside a V8 isolate on Cloudflare Workers.',
    stack: ['TypeScript', 'Cloudflare Workers', 'Hono', 'Drizzle', 'D1', 'Next.js'],
  },
];
