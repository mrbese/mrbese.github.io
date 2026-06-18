import type { ReactNode } from "react";
import { Masthead } from "./Masthead";
import { SiteFooter } from "./SiteFooter";
import { MagneticCursor } from "./MagneticCursor";
import { MotionInit } from "./MotionInit";
import { RouteTransitionWatcher } from "./RouteTransitionWatcher";

/** The persistent grid: outer frame + masthead + content + footer. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="shell">
        <div className="shell-frame" aria-hidden="true">
          <span className="fl-top" />
          <span className="fl-right" />
          <span className="fl-bottom" />
          <span className="fl-left" />
        </div>
        <Masthead />
        <main>{children}</main>
        <SiteFooter />
      </div>
      <MagneticCursor />
      <MotionInit />
      <RouteTransitionWatcher />
    </>
  );
}
