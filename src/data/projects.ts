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
    tagline: 'B2B Rebate Engine for Grid Capacity',
    year: '2026',
    // Repo is private; the link points at the live app (wattshed.co once it serves).
    repoUrl: 'https://negawatt-one.vercel.app',
    description:
      'Grid capacity does not have to be generated, it can be freed. WattShed is an end-to-end rebate creation and clearing engine for whoever needs grid headroom (a utility, a data-center developer, any large load): the funder pays for permanent demand reduction, residents get home upgrades, and the rebate goes straight to the contractor. Built in two days for OpenAI Build Week and customized as if OpenAI were the client: GPT-vision home inspection, with offers priced from Texas TRM v13.0 deemed savings by a deterministic engine the model cannot override. Live as a staged demo serving Milam County, Texas.',
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
