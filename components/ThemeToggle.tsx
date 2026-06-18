"use client";

import { useEffect, useState } from "react";

/** "lights off / lights on" — toggles the warm dark theme with a soft crossfade. */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggle() {
    const next = document.documentElement.dataset.theme !== "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next ? "dark" : "light";
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
      setDark(next);
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<unknown> };
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !reduce) {
      document.documentElement.classList.add("theming");
      const t = doc.startViewTransition(apply);
      t.finished.finally(() =>
        document.documentElement.classList.remove("theming")
      );
    } else {
      apply();
    }
  }

  return (
    <button
      type="button"
      className="ob-theme-toggle"
      aria-pressed={dark}
      aria-label={dark ? "Turn the lights on" : "Turn the lights off"}
      onClick={toggle}
      data-magnetic
    >
      <span aria-hidden="true">{dark ? "☼" : "☾"}</span>
      <span>{dark ? "lights on" : "lights off"}</span>
    </button>
  );
}
