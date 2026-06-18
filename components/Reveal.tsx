"use client";

import { createElement, useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  /** stagger, in seconds */
  delay?: number;
  style?: CSSProperties;
  children?: ReactNode;
} & Record<string, unknown>;

/**
 * Reveals its element when it scrolls into view (translateY + fade, once).
 * Hidden-by-default styling is gated behind `html.js`, so without JS or with
 * reduced motion the content is simply visible. Pass `as` to keep semantics
 * and merge layout classes (e.g. `as="div" className="cv-row"`).
 */
export function Reveal({
  as = "div",
  className = "",
  delay = 0,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: `reveal ${className}${inView ? " is-in" : ""}`.trim(),
      style: { ["--rd" as string]: `${delay}s`, ...style },
      ...rest,
    },
    children
  );
}
