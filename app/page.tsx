import { Fragment } from "react";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { TransitionLink } from "@/components/TransitionLink";
import { PROOF } from "@/lib/content";

const TITLE: { t: string; why?: boolean }[] = [
  { t: "I" },
  { t: "ask" },
  { t: "why", why: true },
  { t: "for" },
  { t: "a living." },
];

const FACTS: [string, string][] = [
  ["Location", "West Hollywood, CA"],
  ["Focus", "Energy transition"],
  ["Now", "Applying in public"],
];

export default function HomePage() {
  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      {/* hero */}
      <section className="hero">
        <div className="hero__rail">
          <div className="status">
            <span className="status__dot" />
            <span className="status__label">Open to work</span>
          </div>
          {FACTS.map(([k, v]) => (
            <div className="fact" key={k}>
              <div className="fact__k">{k}</div>
              <div className="fact__v">{v}</div>
            </div>
          ))}
        </div>

        <div className="hero__body">
          <h1 className="hero__title">
            {TITLE.map((word, i) => (
              <Fragment key={i}>
                <span
                  className={`w${word.why ? " hero__why" : ""}`}
                  style={{ "--wi": i } as CSSProperties}
                >
                  {word.t}
                </span>
                {i < TITLE.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </h1>
          <p className="hero__lede">
            Energy systems engineer, founder turned operator. I look for the
            frozen assumption nobody revisits, then rebuild around it. It is the
            reason I read a battery spec sheet and see an operating manual.
          </p>
          <div className="hero__cta">
            <TransitionLink href="/blog" className="row-link" data-magnetic>
              Read the research{" "}
              <span className="ext" aria-hidden="true">
                →
              </span>
            </TransitionLink>
            <TransitionLink href="/projects" className="row-link" data-magnetic>
              See what I build{" "}
              <span className="ext" aria-hidden="true">
                →
              </span>
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* proof strip (optional track record) */}
      <Reveal as="section" className="cv-row cv-row--first">
        <div className="cv-row__label">
          <span>Proof</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <div className="proof-grid">
            {PROOF.map((line, i) => (
              <div className="proof-item" key={i}>
                <span className="proof-item__mark" aria-hidden="true">
                  ★
                </span>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ledger */}
      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>01 / Retera</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <p className="row-teaser">
            <span className="ph">
              〔Retera in one line: what it is and who it is for〕
            </span>
            .{" "}
            <span className="ph">〔The bet, one sentence〕</span>. Right now:{" "}
            <span className="ph">
              〔status, e.g. raising a pre-seed / applying to accelerators〕
            </span>
            .
          </p>
          <TransitionLink href="/retera" className="row-link" data-magnetic>
            About Retera{" "}
            <span className="ext" aria-hidden="true">
              →
            </span>
          </TransitionLink>
        </div>
      </Reveal>

      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>02 / Writing</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <p className="row-teaser">
            Primary-source deep dives on the energy transition. Sixty-plus hours
            per piece, every number cited, nothing softened. Latest: what I would
            do at Base Power and at Pila Energy.
          </p>
          <TransitionLink href="/blog" className="row-link" data-magnetic>
            Read the writing{" "}
            <span className="ext" aria-hidden="true">
              →
            </span>
          </TransitionLink>
        </div>
      </Reveal>

      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>03 / Building</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <p className="row-teaser">
            Open-source tools for home energy. LiDAR audits, battery ROI math,
            and the full HAZMAT decision tree for shipping lithium cells. Built
            because the spreadsheet should be public.
          </p>
          <TransitionLink href="/projects" className="row-link" data-magnetic>
            See the tools{" "}
            <span className="ext" aria-hidden="true">
              →
            </span>
          </TransitionLink>
        </div>
      </Reveal>

      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>04 / Services</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <p className="row-teaser">
            Four things I do well enough to charge for: home energy audits,
            smart-home setup, OpenClaw, and the credit-card points game.
          </p>
          <TransitionLink href="/services" className="row-link" data-magnetic>
            Work with me{" "}
            <span className="ext" aria-hidden="true">
              →
            </span>
          </TransitionLink>
        </div>
      </Reveal>

      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>05 / Elsewhere</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <p className="row-teaser">
            I am applying in public. The whole search, in the open.
          </p>
          <TransitionLink href="/applying" className="row-link" data-magnetic>
            #ApplyingInPublic{" "}
            <span className="ext" aria-hidden="true">
              →
            </span>
          </TransitionLink>
        </div>
      </Reveal>
    </div>
  );
}
