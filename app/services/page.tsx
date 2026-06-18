import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/components/PageHead";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Consulting and setup work, priced by project. Energy audits, smart home, OpenClaw, points.",
};

type Service = { name: string; what: ReactNode; who: ReactNode };

const SERVICES: Service[] = [
  {
    name: "Energy audit consultancy",
    what: "A LiDAR-based home energy assessment. I scan the space, log the equipment, run the Manual J load math, and hand you an upgrade plan with payback periods. The same engine behind ManorOS, run for you.",
    who: "Homeowners deciding whether to add a battery, swap HVAC, or seal the envelope first (usually the envelope first).",
  },
  {
    name: "Smart home consultancy",
    what: "Design and setup of a home that actually works. Not a pile of gadgets, a system: lighting, climate, energy, and the automations that make them quiet.",
    who: "People who bought the devices and never got the payoff.",
  },
  {
    name: "OpenClaw setup",
    what: (
      <span className="ph">
        〔One line on what OpenClaw is and what “setup” includes. I do not have
        the details, fill this in.〕
      </span>
    ),
    who: <span className="ph">〔who〕</span>,
  },
  {
    name: "Credit card points consultancy",
    what: "The points game, played properly. Card strategy, spend routing, and redemptions that turn ordinary spending into outsized travel.",
    who: "People who travel and suspect they are leaving money on the table (they are).",
  },
];

export default function ServicesPage() {
  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      <PageHead
        eyebrow="Services"
        title="Work with me"
        status="Available"
        facts={[
          ["Pricing", "By project"],
          ["Based", "West Hollywood"],
        ]}
        lede={
          <>
            Consulting and setup work, priced by project. The short version of
            two decades of being curious about how buildings, power, and points
            actually work.
          </>
        }
      />

      {SERVICES.map((s, i) => (
        <Reveal
          as="section"
          className={`cv-row${i === 0 ? " cv-row--first" : ""}`}
          key={s.name}
        >
          <div className="cv-row__label">
            <span>{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="cv-row__body cv-row__body--tight">
            <article className="svc">
              <h2 className="svc__name">{s.name}</h2>
              <div className="svc__pair">
                <div className="svc__k">What it is</div>
                <div className="svc__v">{s.what}</div>
              </div>
              <div className="svc__pair">
                <div className="svc__k">Who it is for</div>
                <div className="svc__v">{s.who}</div>
              </div>
              <a
                className="row-link svc__cta"
                href={`mailto:${CONTACT.email}`}
                data-magnetic
              >
                Email me{" "}
                <span className="ext" aria-hidden="true">
                  →
                </span>
              </a>
            </article>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
