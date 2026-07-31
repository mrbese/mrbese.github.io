export interface Service {
  name: string;
  blurb: string;
}

export const services: Service[] = [
  {
    name: 'Energy audits',
    blurb:
      'The ManorOS method for your home: where your kilowatts actually go, and which upgrades pay themselves back.',
  },
  {
    name: 'Smart home',
    blurb:
      'Sensors, energy monitoring, and the unglamorous wiring that makes automation reliable instead of a party trick.',
  },
];
