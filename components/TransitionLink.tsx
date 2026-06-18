"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useRouter, usePathname } from "next/navigation";
import { pendingTransitions } from "@/lib/viewTransition";

type Props = ComponentProps<typeof Link>;

/**
 * A drop-in <Link> that morphs between pages with the View Transitions API.
 * Falls back to ordinary client navigation when the API is unavailable, the
 * user prefers reduced motion, the target is the current route, or the click
 * is a modified/middle click.
 */
export function TransitionLink({ href, onClick, ...rest }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick: Props["onClick"] = (e) => {
    onClick?.(e);

    const url = typeof href === "string" ? href : href.toString();
    const doc = document as Document & {
      startViewTransition?: (cb: () => void | Promise<void>) => unknown;
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0 ||
      !doc.startViewTransition ||
      reduce ||
      url === pathname
    ) {
      return; // let Next handle it normally
    }

    e.preventDefault();
    doc.startViewTransition(
      () =>
        new Promise<void>((resolve) => {
          const done = () => resolve();
          pendingTransitions.push(done);
          // safety net: never let a transition hang
          window.setTimeout(() => {
            const i = pendingTransitions.indexOf(done);
            if (i >= 0) pendingTransitions.splice(i, 1);
            resolve();
          }, 800);
          router.push(url);
        })
    );
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
