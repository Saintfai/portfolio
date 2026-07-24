"use client";

import { useEffect, useRef, useState } from "react";

interface TypingDescriptionProps {
  texts: string[];
  /** Typing speed in ms per character */
  typingSpeed?: number;
  /** Pause before erasing (ms) */
  pauseDuration?: number;
  /** Erasing speed in ms per character */
  erasingSpeed?: number;
}

export default function TypingDescription({
  texts,
  typingSpeed = 38,
  pauseDuration = 2200,
  erasingSpeed = 18,
}: TypingDescriptionProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [inkBurst, setInkBurst] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentText = texts[textIndex] ?? "";

    const clear = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    if (phase === "typing") {
      if (charIndex < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase("pausing"), pauseDuration);
      }
    } else if (phase === "pausing") {
      // ink burst effect before erasing
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInkBurst(true);
      timeoutRef.current = setTimeout(() => {
        setInkBurst(false);
        setPhase("erasing");
      }, 400);
    } else if (phase === "erasing") {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, erasingSpeed);
      } else {
        // Move to next text
        const next = (textIndex + 1) % texts.length;
        setTextIndex(next);
        setCharIndex(0);
        setDisplayedText("");
        setPhase("typing");
      }
    }

    return clear;
  }, [phase, charIndex, textIndex, texts, typingSpeed, pauseDuration, erasingSpeed]);

  return (
    <span className="typing-description-wrapper" aria-live="polite">
      {/* Hidden texts to reserve the width of the longest role */}
      {texts.map((text, i) => (
        <span key={i} className="typing-sizer" aria-hidden="true">
          {text}
        </span>
      ))}
      {/* Visible typing text overlaid on top */}
      <span className={`typing-description${inkBurst ? " ink-burst" : ""}`}>
        {displayedText}
        <span className="typing-cursor" aria-hidden="true">|</span>
      </span>
    </span>
  );
}
