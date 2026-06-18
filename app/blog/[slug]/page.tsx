import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PageHead } from "@/components/PageHead";
import { TransitionLink } from "@/components/TransitionLink";
import { POSTS, getPost, type DeepGroup } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post
    ? { title: post.title, description: post.dek }
    : { title: "Writing" };
}

function DeepDive({
  label,
  group,
  first,
}: {
  label: string;
  group: DeepGroup;
  first?: boolean;
}) {
  return (
    <Reveal as="section" className={`cv-row${first ? " cv-row--first" : ""}`}>
      <div className="cv-row__label">
        <span>{label}</span>
      </div>
      <div className="cv-row__body cv-row__body--tight">
        {group.intro && <p className="dd-lead">{group.intro}</p>}
        <div className="dd-list">
          {group.items.map((it, i) => (
            <details className="dd" key={i}>
              <summary className="dd__summary">
                <span>{it.summary}</span>
                <span className="dd__mark" aria-hidden="true">
                  +
                </span>
              </summary>
              <div
                className="dd__body"
                dangerouslySetInnerHTML={{ __html: it.content }}
              />
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      <PageHead
        eyebrow="Writing"
        title={post.title}
        status="Deep dive"
        facts={[
          ["Research", post.research],
          ["Sources", "Primary, cited"],
        ]}
        lede={post.dek}
      />

      <DeepDive label="What I learned" group={post.learned} first />
      <DeepDive label="What I would do" group={post.wouldDo} />

      <Reveal as="section" className="cv-row">
        <div className="cv-row__label">
          <span>More</span>
        </div>
        <div className="cv-row__body cv-row__body--tight">
          <TransitionLink href="/blog" className="row-link" data-magnetic>
            All writing{" "}
            <span className="ext" aria-hidden="true">
              →
            </span>
          </TransitionLink>
        </div>
      </Reveal>
    </div>
  );
}
