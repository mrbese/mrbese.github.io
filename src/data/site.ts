export const site = {
  name: 'Omer Bese',
  wordmark: 'omer bese',
  chip: 'energy systems engineer · founder · builder · operator',
  location: 'Los Angeles, California',
  focus: 'distributed energy · ops · software',
  // The standfirst is the homepage h1. The trailing period renders as the
  // red-period signature (sliced in index.astro), so keep it terminal.
  hero: 'I build energy tools and publish the research behind them.',
  lede:
    'Energy systems engineer, founder, builder and operator. Distributed energy, physical ops, and software, built from first principles.',
  url: 'https://mrbese.com',
  ogImage: '/img/portrait.jpg',
};

export type Site = typeof site;
