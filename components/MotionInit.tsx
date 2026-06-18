"use client";

import { useEffect } from "react";

/**
 * Removes the `first-load` flag once the opening choreography has finished, so
 * subsequent client-side navigations are carried purely by View Transitions.
 */
export function MotionInit() {
  useEffect(() => {
    const t = window.setTimeout(
      () => document.documentElement.classList.remove("first-load"),
      2000
    );
    return () => window.clearTimeout(t);
  }, []);

  return null;
}
