import { TransitionLink } from "@/components/TransitionLink";

export default function NotFound() {
  return (
    <div className="cv-region">
      <div className="rail-line" aria-hidden="true" />

      <section className="page-head">
        <div className="page-head__rail">
          <div className="status">
            <span className="status__dot" />
            <span className="status__label">Error 404</span>
          </div>
        </div>
        <div className="page-head__body">
          <div className="page-head__index">Not found</div>
          <h1 className="page-head__title">
            Lost the <span className="hero__why">thread</span>.
          </h1>
          <p className="page-head__lede">
            That page does not exist. Probably my fault. I was busy asking why
            about something else.
          </p>
          <div className="cta-row">
            <TransitionLink
              href="/"
              className="ob-btn ob-btn--secondary ob-btn--lg"
              data-magnetic
            >
              back home{" "}
              <span className="ob-btn__arrow" aria-hidden="true">
                →
              </span>
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
