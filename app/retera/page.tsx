import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/components/PageHead";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Retera",
  description: "Retera. The startup.",
};

const SECTIONS: [string, string][] = [
  [
    "Why now",
    "〔The timing wedge. What changed in the market, the regulation, or the tech that makes this buildable today and not three years ago.〕",
  ],
  [
    "How it works",
    "〔The mechanism in plain language. What the user does, what Retera does, where the money is.〕",
  ],
  [
    "Where it is today",
    "〔Status and proof. What exists, what is live, any traction, what you have learned.〕",
  ],
];

export default function ReteraPage() {
  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      <PageHead
        eyebrow="Retera"
        title={<span className="ph">〔Retera. The one-line what.〕</span>}
        status="The startup"
        facts={[
          ["Role", "Founder"],
          ["Stage", <span className="ph" key="s">〔Stage〕</span>],
        ]}
        lede={
          <span className="ph">
            〔The problem, stated plainly. Who has it. Why it has stayed
            unsolved.〕
          </span>
        }
      />

      {SECTIONS.map(([label, body], i) => (
        <Reveal
          as="section"
          className={`cv-row${i === 0 ? " cv-row--first" : ""}`}
          key={label}
        >
          <div className="cv-row__label">
            <span>{label}</span>
          </div>
          <div className="cv-row__body cv-row__body--tight">
            <div className="prose">
              <p className="ph">{body}</p>
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>The ask</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <div className="prose">
            <p className="ph">
              〔What you want from a reader: an intro, a check, a pilot customer,
              a hire. Make it specific.〕
            </p>
          </div>
          <div className="cta-row">
            <a
              className="ob-btn ob-btn--primary ob-btn--lg"
              href={`mailto:${CONTACT.email}`}
              data-magnetic
            >
              email me{" "}
              <span className="ob-btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
            <span className="cta-note">{CONTACT.email}</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
