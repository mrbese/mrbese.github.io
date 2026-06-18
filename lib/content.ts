// Single source of truth for nav, contact, and the cross-page bits.
// Copy comes from the user's COPYDECK.md. Anything still unknown is left as an
// obvious 〔bracketed〕 placeholder in the pages (see project/CLAUDE.md).
// House rule from the deck: no em dashes anywhere.

export const BRAND = {
  name: "Omer Bese",
  tagline: "Energy systems engineer",
};

export const CONTACT = {
  email: "omer@manoros.com",
  location: "West Hollywood, CA",
};

// "home" lives on the wordmark, so it is not a nav item.
export const NAV: { href: string; label: string }[] = [
  { href: "/retera", label: "retera" },
  { href: "/blog", label: "blog" },
  { href: "/projects", label: "projects" },
  { href: "/services", label: "services" },
];

export const ELSEWHERE: {
  label: string;
  href: string;
  external: boolean;
}[] = [
  { label: "Email", href: "mailto:omer@manoros.com", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/omerbese", external: true },
  { label: "X", href: "https://x.com/mrbese", external: true },
  { label: "GitHub", href: "https://github.com/mrbese", external: true },
  { label: "Public search log", href: "/applying", external: false },
];

// Optional track-record one-liners (COPYDECK "proof" strip).
export const PROOF: string[] = [
  "Jason Calacanis broke two of his own rules (“no solo founders,” “no service businesses”) to write the first check.",
  "Amazon medical-device launch in 3 months. Category average is 10 to 16 months at a 90% rejection rate. They called back six months later to ask how.",
  "30% electricity-bill drop at the Jonathan Club after a two-day LED upgrade.",
  "180-person waitlist at Bonjuur, built by cleaning houses myself every weekday for six months and redesigning the workflow from the ground up.",
];
