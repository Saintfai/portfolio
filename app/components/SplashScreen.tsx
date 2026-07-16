"use client";

import { useEffect, useState } from "react";

type SplashPhase = "panels" | "collapsing" | "merged" | "hiding" | "done";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<SplashPhase>("panels");

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splash-shown");
    if (hasSeenSplash) {
      setVisible(false);
      setPhase("done");
      return;
    }

    document.body.classList.add("splash-active");

    // Phase 1: Panels slam in (0–1.5s) — handled by CSS stagger delays
    // Phase 2: Collapse to center (1.8s)
    const collapseTimer = setTimeout(() => {
      setPhase("collapsing");
    }, 1800);

    // Phase 3: Show merged panel (2.5s)
    const mergedTimer = setTimeout(() => {
      setPhase("merged");
    }, 2500);

    // Phase 4: Fade out (3.0s)
    const fadeTimer = setTimeout(() => {
      setPhase("hiding");
      document.body.classList.remove("splash-active");
      document.body.classList.add("splash-revealed");
    }, 3000);

    // Phase 5: Remove from DOM (3.8s)
    const removeTimer = setTimeout(() => {
      setVisible(false);
      setPhase("done");
      sessionStorage.setItem("splash-shown", "true");
    }, 3800);

    return () => {
      clearTimeout(collapseTimer);
      clearTimeout(mergedTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.classList.remove("splash-active", "splash-revealed");
    };
  }, []);

  if (!visible) return null;

  const overlayClass = [
    "splash-overlay",
    phase === "collapsing" ? "splash-collapsing" : "",
    phase === "merged" ? "splash-merged-phase" : "",
    phase === "hiding" ? "splash-hiding" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={overlayClass} aria-hidden="true">
      {/* Speed lines background */}
      <div className="splash-speed-lines" />

      {/* Panel Grid — 3 columns × 2 rows */}
      <div className="splash-grid">
        {/* Panel 1: THE */}
        <div className="splash-panel splash-panel-1">
          <span className="splash-panel-icon">⚡</span>
          <span className="splash-panel-text-big">THE</span>
        </div>

        {/* Panel 2: FAIRUZ SHEVA */}
        <div className="splash-panel splash-panel-2">
          <span className="splash-panel-text-name">FAIRUZ</span>
          <span className="splash-panel-text-name splash-panel-text-accent">
            SHEVA
          </span>
        </div>

        {/* Panel 3: Developer icon */}
        <div className="splash-panel splash-panel-3">
          <span className="splash-panel-code">&lt; /&gt;</span>
          <span className="splash-panel-label">DEVELOPER</span>
        </div>

        {/* Panel 4: Designer */}
        <div className="splash-panel splash-panel-4">
          <span className="splash-panel-icon">🎨</span>
          <span className="splash-panel-label">DESIGNER</span>
        </div>

        {/* Panel 5: HEAVY INK */}
        <div className="splash-panel splash-panel-5">
          <span className="splash-panel-text-hero">HEAVY</span>
          <span className="splash-panel-text-hero">INK</span>
        </div>

        {/* Panel 6: Halftone loading */}
        <div className="splash-panel splash-panel-6">
          <div className="splash-halftone-dots" />
          <span className="splash-panel-label splash-loading-label">
            LOADING
          </span>
          <div className="splash-loading-bar">
            <div className="splash-loading-fill" />
          </div>
        </div>
      </div>

      {/* Merged final panel — shown after collapse */}
      <div className="splash-merged-panel">
        <span className="splash-merged-title">THE HEAVY INK</span>
        <span className="splash-merged-sub">PORTFOLIO</span>
      </div>
    </div>
  );
}
