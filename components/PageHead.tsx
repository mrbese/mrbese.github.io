import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  status?: string;
  facts?: [string, ReactNode][];
};

/** The masthead band for an inner page: rail (status + facts) | eyebrow, title, lede. */
export function PageHead({ eyebrow, title, lede, status, facts = [] }: Props) {
  return (
    <section className="page-head">
      <div className="page-head__rail">
        {status && (
          <div className="status">
            <span className="status__dot" />
            <span className="status__label">{status}</span>
          </div>
        )}
        {facts.map(([k, v]) => (
          <div className="fact" key={k}>
            <div className="fact__k">{k}</div>
            <div className="fact__v">{v}</div>
          </div>
        ))}
      </div>
      <div className="page-head__body">
        <div className="page-head__index">{eyebrow}</div>
        <h1 className="page-head__title">{title}</h1>
        {lede && <p className="page-head__lede">{lede}</p>}
      </div>
    </section>
  );
}
