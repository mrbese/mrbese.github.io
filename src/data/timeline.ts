export interface Entry {
  org: string;
  role: string;
  period: string;
  location?: string;
  note?: string;
}

export const education: Entry[] = [
  {
    org: 'Columbia University',
    role: 'M.S. Sustainability Management',
    period: '2015 - 2016',
    location: 'New York',
    note: 'Solar project development, smart cities, energy markets. Capstone: reducing milk waste in NYC with WWF.',
  },
  {
    org: 'Istanbul Bilgi University',
    role: 'B.S. Energy Systems Engineering',
    period: '2010 - 2014',
    location: 'Istanbul',
    note: 'Thesis on geothermal power systems. Flew to the Stanford Geothermal Workshop to listen, learn and network. The well data was private, so I tracked down Ormat Technologies and got it over breakfast.',
  },
];

export const career: Entry[] = [
  {
    org: 'WattShed',
    role: 'Founder',
    period: '2025 - Present',
    location: 'Los Angeles',
    note: 'Energy software for three audiences. For data centers, software that creates, verifies and pays household efficiency rebates, with case studies from public filings. For homeowners, WattShed Home, a home energy management app on the App Store since October 2026, with peak shaving in beta. For commercial energy auditors, WattWalk, in TestFlight.',
  },
  {
    org: 'Bonjuur',
    role: 'Founder',
    period: '2022 - 2025',
    location: 'New York',
    note: 'A daily housekeeping service built on short visits. Built a 180-person waitlist by cleaning houses myself for six months. First check from Jason Calacanis. Raised $90K. Wound the service down at the end of 2024, pivoted in 2025 to vision AI for in-home service work, then wound the pivot down in June 2025 and returned to energy.',
  },
  {
    org: 'Tulip Haus',
    role: 'Co-Founder',
    period: '2020 - 2025',
    location: 'New York',
    note: 'Artisan home decor from Turkey. Days from a NYC retail lease when COVID hit, pivoted to e-commerce. When a crane hit the first container in Spain and the marine insurer walked away on jurisdiction, I read the fine print and pursued the claim with the shipyard operator directly. B2C failed, survived via B2B.',
  },
  {
    org: 'Spirohome',
    role: 'Business Developer',
    period: '2019',
    location: 'Ankara',
    note: 'Medical IoT. Oversaw the FDA clearance process and the Amazon UK and EU launch, coordinating hardware, regulatory, and commercial teams.',
  },
  {
    org: 'Istanbul Chamber of Industry',
    role: 'Associate Specialist, Energy & Environment',
    period: '2018 - 2019',
    location: 'Istanbul',
    note: 'Managed the development and launch of a program supplying industrial measurement devices to students for factory energy-efficiency analyses, and supervised its first audit. Learned that bureaucracy takes a full year to launch a basic program.',
  },
  {
    org: 'Nularis',
    role: 'Energy Efficiency Engineer',
    period: '2016 - 2017',
    location: 'Los Angeles',
    note: 'Audited buildings for the LADWP CLIP incentive program. Replaced about half the lightbulbs at the Jonathan Club myself when crews were short. Most clients saw at least a 30% reduction.',
  },
];

export const fellowships: string[] = [
  'On Deck #ODF17 (2023)',
  'All-In Summit Volunteer (2023)',
  'Angel Squad, Hustle Fund (2021)',
  'Camp Lightbulb nonprofit (2024)',
];
