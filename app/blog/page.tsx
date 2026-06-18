import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/components/PageHead";
import { TransitionLink } from "@/components/TransitionLink";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Deep dives. Primary-source research on the energy transition. All numbers cited.",
};

export default function BlogPage() {
  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      <PageHead
        eyebrow="Writing"
        title="Deep dives"
        status="Writing"
        facts={[
          ["Method", "Primary sources"],
          ["Cadence", <span className="ph" key="c">〔Cadence〕</span>],
        ]}
        lede={
          <>
            For people who want the full analysis. Primary-source research on the
            energy transition. All numbers cited. Nothing softened.
          </>
        }
      />

      <Reveal as="section" className="cv-row cv-row--first">
        <div className="cv-row__label">
          <span>Latest</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <div className="entry-list">
            {POSTS.map((p) => (
              <article className="entry" key={p.slug}>
                <h3 className="entry__title">{p.title}</h3>
                <p className="entry__dek">{p.dek}</p>
                <p className="entry__meta">{p.learned.intro}</p>
                <TransitionLink
                  href={`/blog/${p.slug}`}
                  className="row-link entry__link"
                  data-magnetic
                >
                  Read{" "}
                  <span className="ext" aria-hidden="true">
                    →
                  </span>
                </TransitionLink>
              </article>
            ))}

            {/* next piece — placeholder */}
            <article className="entry">
              <h3 className="entry__title ph">〔Next deep dive title〕</h3>
              <p className="entry__dek ph">〔one line〕</p>
            </article>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
