"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pendingTransitions } from "@/lib/viewTransition";

/** Resolves any in-flight View Transition once the new route has painted. */
export function RouteTransitionWatcher() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pendingTransitions.length) return;
    const fns = pendingTransitions.splice(0, pendingTransitions.length);
    // wait one frame so the new content is committed before the "new" snapshot
    requestAnimationFrame(() => fns.forEach((f) => f()));
  }, [pathname]);

  return null;
}
