"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "./TransitionLink";
import { ThemeToggle } from "./ThemeToggle";
import { BRAND, NAV } from "@/lib/content";

export function Masthead() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="masthead">
      <TransitionLink href="/" className="masthead__brand" data-magnetic>
        <span className="masthead__name">{BRAND.name}</span>
        <span className="masthead__tag">{BRAND.tagline}</span>
      </TransitionLink>

      <nav className="masthead__nav" aria-label="Primary">
        {NAV.map((n) => (
          <TransitionLink
            key={n.href}
            href={n.href}
            className="nav-link"
            aria-current={isActive(n.href) ? "page" : undefined}
            data-magnetic
          >
            {n.label}
          </TransitionLink>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
