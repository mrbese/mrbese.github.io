export interface RecordLine {
  year: string;
  line: string;
}

// A dated ledger of outcomes. Every line must stay literally true and
// checkable; no claims, no adjectives, no entries without a verified year.
export const record: RecordLine[] = [
  {
    year: '2014',
    line: 'Ormat let me publish proprietary well data my own government did not have.',
  },
  {
    year: '2016',
    line: 'WWF chose to implement the capstone my team voted down nine to zero.',
  },
  {
    year: '2019',
    line: 'Launched on Amazon UK and EU as a Class II medical device in three months, against a ten-to-sixteen-month norm. The founder called six months later to ask how.',
  },
  {
    year: '2020',
    line: 'Paused a six-figure SoHo lease on March 12. The city locked down eight days later.',
  },
  {
    year: '2022',
    line: 'Jason Calacanis broke two of his own rules, no solo founders and no service businesses, to write the first check.',
  },
  {
    year: '2022',
    line: 'The Techstars partner who rejected Bonjuur referred its first paying customer within 24 hours.',
  },
  {
    year: '2026',
    line: 'Re_Tera: 1,049 solo commits, first Swift commit to App Store approval in three weeks.',
  },
  {
    year: '2026',
    line: 'WattShed: zero to live in seven days, with a 257-test suite.',
  },
];
