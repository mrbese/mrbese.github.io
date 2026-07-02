export interface Lang {
  code: string;
  name: string;
  wonder: string;
}

// The Polyglot: six professional languages, not spoken ones.
// "I am not proficient in all of these. But with closed captions,
//  I am fluent enough to talk to the native speakers."
export const languages: Lang[] = [
  {
    code: 'EN',
    name: 'I speak engineering',
    wonder:
      'So I distrust frozen defaults. What constraint set this spec, and has that constraint changed since?',
  },
  {
    code: 'OP',
    name: 'I speak operations',
    wonder:
      'So I notice when field service sends the expensive licensed specialist for work that is 70% unlicensed. Ford took the assembly line from the slaughterhouses; decoupling the skilled from the unskilled labor is where the margin hides.',
  },
  {
    code: 'TH',
    name: 'I speak thermodynamics',
    wonder:
      'So I ask whether we should consume less before we store or generate more. Attic R-49, aerosol duct sealing, an ECM blower swap: a house becomes a thermal battery.',
  },
  {
    code: 'FI',
    name: 'I speak finance',
    wonder:
      'So I hedge volatile market revenue with bankable long-term contracts. Pair high-beta volatility with fixed capacity and the cost of capital drops.',
  },
  {
    code: 'PO',
    name: 'I speak policy',
    wonder:
      'So I see the split-incentive problem paralyzing whole sectors. Sweden solved it with warm rent. The U.S. has not even tried.',
  },
  {
    code: 'LE',
    name: 'I speak legal',
    wonder:
      'So I structure entities to match the vertical stack. Separate LLCs unlock R&D credits and grant eligibility the monolith forfeits.',
  },
];
