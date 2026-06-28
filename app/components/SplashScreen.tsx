"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  // Start visible so the splash is part of the server-rendered HTML and covers
  // the page on the very first paint (prevents a flash of content beforehand).
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Only show once per session — if already seen, unmount immediately.
    const hasSeenSplash = sessionStorage.getItem("splash-shown");
    if (hasSeenSplash) {
      setVisible(false);
      return;
    }

    document.body.classList.add("splash-active");

    // Start fade-out after 2.2s
    const fadeTimer = setTimeout(() => {
      setHiding(true);
      document.body.classList.remove("splash-active");
      document.body.classList.add("splash-revealed");
    }, 2200);

    // Fully remove after animation completes (allow 1s for all reveal animations to finish)
    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splash-shown", "true");
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.classList.remove("splash-active", "splash-revealed");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-overlay ${hiding ? "splash-hiding" : ""}`} aria-hidden="true">
      {/* Center content */}
      <div className="splash-content">
        {/* Action word */}
        <span className="splash-pow">⚡</span>

        {/* Main title */}
        <h1 className="splash-title">PORTFOLIO</h1>

        {/* Subtitle */}
        <p className="splash-subtitle">Loading...</p>
      </div>

      {/* Corner decorations */}
      <span className="splash-corner splash-corner-tl">✦</span>
      <span className="splash-corner splash-corner-tr">✦</span>
      <span className="splash-corner splash-corner-bl">✦</span>
      <span className="splash-corner splash-corner-br">✦</span>
    </div>
  );
}
