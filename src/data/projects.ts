export interface Project {
  name: string;
  tagline: string;
  year?: string;
  // Omit while a repo is private. A missing repoUrl renders the card unlinked
  // instead of pointing the public at a 404.
  repoUrl?: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: 'WattShed',
    tagline: 'Rebate Program Designer and Evidence Workflow',
    year: '2026',
    // Repo is private; the link points at the live app, wattshed.co.
    repoUrl: 'https://wattshed.co',
    description:
      'WattShed is live national rebate-program software with a public, no-login designer for all 50 states and DC. Its deterministic engine combines degree-day and modified-bin estimates with location-appropriate deemed methodologies where available. A Milam County case study demonstrates evidence review, qualification, quote approval, completion clearance, and payment-instruction records. Settlement remains simulated. WattShed has no payment processor, does not custody funds, and moves no money.',
    stack: ['Next.js 16', 'React 19', 'Firebase', 'OpenAI vision', 'Deterministic qualification engine'],
  },
  {
    name: 'Re_Tera',
    tagline: 'AI Insurance Copilot for Homeowners and Renters',
    year: '2026',
    repoUrl: 'https://apps.apple.com/us/app/re-tera-insurance-copilot/id6776045760',
    description:
      'A native iOS policy-investigation and home-inventory product for homeowners and renters, available on the Apple App Store for iPhone and iPad. Re_Tera helps users inspect coverage gaps, sublimits, and exclusions against their own policy and organize documentation for inventory export.',
    stack: ['Swift', 'SwiftUI', 'Firebase', 'OpenAI', 'Apple Vision', 'RevenueCat'],
  },
  {
    name: 'ManorOS',
    tagline: 'iOS Home Energy Auditor',
    year: '2026',
    description:
      'A home energy assessment tool that uses LiDAR room scanning via Apple RoomPlan, HVAC equipment logging with on-device OCR via Apple Vision, appliance detection, window assessment, and ACCA Manual J BTU calculations. Generates tiered upgrade recommendations with payback periods and battery synergy insights. Code opens up when it ships.',
    stack: ['Swift', 'SwiftUI', 'SwiftData', 'ARKit', 'RoomPlan', 'AVFoundation', 'Vision OCR', 'CoreLocation', 'PDFKit'],
  },
  {
    name: 'CellSense',
    tagline: 'Battery ROI Calculator',
    year: '2026',
    repoUrl: 'https://github.com/mrbese/cellsense',
    description:
      'Compare Tesla Powerwall 3, Enphase IQ 5P, Pila Mesh, and Base Power side by side. Supports 16 utilities, 32 rate plans, NEM 3.0, and VPP earnings projections for ELRP, ConnectedSolutions, and ERCOT.',
    stack: ['Vanilla JavaScript', 'Zero dependencies', 'Canvas charts'],
  },
  {
    name: 'HazShip',
    tagline: 'Lithium Battery HAZMAT Shipping Classifier',
    year: '2026',
    repoUrl: 'https://github.com/mrbese/HazShip',
    description:
      'Encodes the entire regulatory decision tree for 49 CFR 173.185, IATA DGR 66th Edition, and IMDG Code Amendment 42-24. Outputs UN numbers, packing instructions, labels, and documentation checklists. Built from direct experience shipping lithium-ion medical devices through FDA clearance.',
    stack: ['SwiftUI (iOS 17+)', 'Pure engine pattern', 'Zero dependencies', 'Fully offline'],
  },
];
