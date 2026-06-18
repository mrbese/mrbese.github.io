import { TransitionLink } from "./TransitionLink";
import { CONTACT, ELSEWHERE } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="ApplyingInPublic">
      <div className="site-footer__top">
        <div className="site-footer__where">
          <span className="ob-label">Elsewhere</span>
          <span className="site-footer__loc">{CONTACT.location}</span>
        </div>

        <div className="site-footer__links">
          {ELSEWHERE.map((l) =>
            l.external ? (
              <a
                key={l.label}
                className="ext-link"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
              >
                {l.label}{" "}
                <span className="ext" aria-hidden="true">
                  ↗
                </span>
              </a>
            ) : (
              <TransitionLink
                key={l.label}
                className="ext-link"
                href={l.href}
                data-magnetic
              >
                {l.label}{" "}
                <span className="ext" aria-hidden="true">
                  →
                </span>
              </TransitionLink>
            )
          )}
        </div>
      </div>

      <div className="site-footer__bottom">© 2026 Omer Bese</div>
    </footer>
  );
}
