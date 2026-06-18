import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Applying in public",
  description: "The whole search, in the open. #ApplyingInPublic",
};

export default function ApplyingPage() {
  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      <PageHead
        eyebrow="#ApplyingInPublic"
        title={
          <>
            Applying in{" "}
            <span className="hero__why">public</span>.
          </>
        }
        status="Open to work"
        facts={[
          ["Location", "West Hollywood, CA"],
          ["Focus", "Energy transition"],
        ]}
        lede={<>The whole search, in the open. Every role, every outcome.</>}
      />

      <Reveal as="section" className="cv-row cv-row--first">
        <div className="cv-row__label">
          <span>The log</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <div className="prose">
            <p className="ph">
              〔The public log: roles I am pursuing, who I have talked to, dates,
              and outcomes. Port from the running thread.〕
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>Follow along</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <div className="ext-links">
            <a
              className="ext-link"
              href="https://x.com/mrbese"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
            >
              x.com/mrbese{" "}
              <span className="ext" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
