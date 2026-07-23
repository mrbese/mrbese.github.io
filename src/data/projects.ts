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
    name: 'NegaWatt',
    tagline: 'AI Rebate Clearinghouse for Home Efficiency',
    year: '2026',
    // Repo is private; the link points at the live app instead.
    repoUrl: 'https://negawatt-one.vercel.app',
    description:
      'A funder pays for permanent grid-demand reduction, residents get home upgrades with the rebate paid straight to the contractor. Built in two days for OpenAI Build Week: passwordless auth, a guided apply wizard, GPT-vision home inspection, and a deterministic offer engine priced from Texas TRM v13.0 deemed savings, so the model can never reprice or approve. Live as a staged demo serving Milam County, Texas.',
    stack: ['Next.js 16', 'React 19', 'Supabase', 'OpenAI vision', 'Texas TRM v13.0', '230-test Vitest suite'],
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
