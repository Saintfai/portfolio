"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Only show once per session
    const hasSeenSplash = sessionStorage.getItem("splash-shown");
    if (hasSeenSplash) return;

    setVisible(true);
    document.body.classList.add("splash-active");

    // Start fade-out after 2.2s
    const fadeTimer = setTimeout(() => {
      setHiding(true);
      document.body.classList.remove("splash-active");
      document.body.classList.add("splash-revealed");
    }, 2200);

    // Fully remove after animation completes
    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splash-shown", "true");
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.classList.remove("splash-active", "splash-revealed");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash-overlay ${hiding ? "splash-hiding" : ""}`} aria-hidden="true">
      {/* Speed lines burst background */}
      <div className="splash-speed-lines" />

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
