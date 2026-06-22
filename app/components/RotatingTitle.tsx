"use client";

import { useEffect, useState } from "react";

interface RotatingTitleProps {
  roles: string[];
  /** How long each word stays before swapping (ms). */
  interval?: number;
}

export default function RotatingTitle({ roles, interval = 2600 }: RotatingTitleProps) {
  const [index, setIndex] = useState(0);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    if (roles.length <= 1) return;

    const id = setInterval(() => {
      // Trigger the ink/glitch burst, then swap the word mid-burst.
      setGlitching(true);
      const swap = setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
      }, 180);
      const settle = setTimeout(() => setGlitching(false), 420);

      return () => {
        clearTimeout(swap);
        clearTimeout(settle);
      };
    }, interval);

    return () => clearInterval(id);
  }, [roles.length, interval]);

  const current = roles[index] ?? "";

  return (
    <p className="rotating-title" aria-live="polite">
      <span className="rotating-title-label">I AM A</span>{" "}
      <span
        key={index}
        className={`rotating-title-word${glitching ? " is-glitching" : ""}`}
        data-text={current}
      >
        {current}
      </span>
    </p>
  );
}
