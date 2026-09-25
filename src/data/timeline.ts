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
    role: 'Founder and Engineer',
    period: '2026 - Present',
    location: 'Los Angeles',
    note: 'Software that creates, verifies and pays residential energy efficiency rebates.',
  },
  {
    org: 'Bonjuur',
    role: 'Founder',
    period: '2022 - 2025',
    location: 'NY to LA',
    note: 'A daily housekeeping service built on short visits. Built a 180-person waitlist by cleaning houses myself for six months. First check from Jason Calacanis. Raised $90K, navigated the trough of sorrow, returned to energy.',
  },
  {
    org: 'Tulip Haus',
    role: 'Co-Founder',
    period: '2020 - 2025',
    location: 'New York',
    note: 'Artisan home decor from Turkey. Days from a NYC retail lease when COVID hit, pivoted to e-commerce. When a crane hit the first container in Spain and the marine insurer walked away on jurisdiction, I read the primary sources and partially recovered the damages from the port operator directly. B2C failed, survived via B2B.',
  },
  {
    org: 'SpiroHome',
    role: 'Business Developer',
    period: '2019',
    location: 'Ankara',
    note: 'Medical IoT. Oversaw FDA clearance and the Amazon UK and EU launch, coordinating hardware, regulatory, and commercial teams.',
  },
  {
    org: 'Istanbul Chamber of Industry',
    role: 'Energy and Environment',
    period: '2018 - 2019',
    location: 'Istanbul',
    note: 'Helped build a program supplying industrial measurement devices to students for factory energy-efficiency analyses, and supervised its first audit. Learned that bureaucracy takes a full year to launch a basic program.',
  },
  {
    org: 'NULARIS',
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
  'Camp Lightbulb nonprofit (2024 - Present)',
];
