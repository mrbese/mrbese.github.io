export interface Service {
  name: string;
  blurb: string;
}

export const services: Service[] = [
  {
    name: 'OpenClaw setup',
    blurb:
      'I get an agentic browser assistant running on your machine, wired to your accounts and the boring tasks you keep putting off.',
  },
  {
    name: 'Smart home',
    blurb:
      'Sensors, energy monitoring, and the unglamorous wiring that makes automation reliable instead of a party trick.',
  },
  {
    name: 'Credit-card points',
    blurb:
      'Which cards, which categories, and how to redeem for real value instead of hoarding a balance you never use.',
  },
  {
    name: 'Energy audits',
    blurb:
      'The ManorOS method for your home: where your kilowatts actually go, and which upgrades pay themselves back.',
  },
];
