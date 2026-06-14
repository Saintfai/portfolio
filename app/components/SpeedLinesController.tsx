"use client";

import { useEffect } from "react";

export default function SpeedLinesController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let lastTime = Date.now();
    let velocity = 0;
    let rotation = 0;
    let rafId: number;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const updateSpeedLines = () => {
      const currentTime = Date.now();
      const timeDiff = Math.max(1, currentTime - lastTime);

      // Smoothly interpolate current scroll towards target scroll (lerp)
      const prevScrollY = currentScrollY;
      currentScrollY = currentScrollY * 0.8 + targetScrollY * 0.2;

      // If they are extremely close, snap them
      if (Math.abs(currentScrollY - targetScrollY) < 0.1) {
        currentScrollY = targetScrollY;
      }

      // Calculate distance traveled in this frame
      const distance = Math.abs(currentScrollY - prevScrollY);
      
      // Calculate velocity (pixels per millisecond)
      const rawVelocity = distance / timeDiff;

      // Smooth the velocity representation
      if (distance > 0.05) {
        velocity = velocity * 0.85 + rawVelocity * 0.15;
      } else {
        velocity = velocity * 0.9;
      }

      if (velocity < 0.001) velocity = 0;

      // Cap the velocity to avoid extreme distortions
      const cappedVelocity = Math.min(velocity, 3);

      // Base rotation (idle) is slow, accelerates significantly based on velocity
      const rotationIncrement = 0.03 + cappedVelocity * 2.5;
      rotation = (rotation + rotationIncrement) % 360;

      // Scale up when scrolling fast (creates a zoom/tunnel effect)
      const scale = 1 + cappedVelocity * 0.12;

      const doc = document.documentElement;
      doc.style.setProperty("--speed-lines-rotate", `${rotation.toFixed(2)}deg`);
      doc.style.setProperty("--speed-lines-scale", `${scale.toFixed(3)}`);

      lastTime = currentTime;
      rafId = requestAnimationFrame(updateSpeedLines);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafId = requestAnimationFrame(updateSpeedLines);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
