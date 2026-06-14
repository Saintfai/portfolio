"use client";

import { ReactNode, useEffect, useRef, useState, HTMLAttributes } from "react";

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  animationClass?: string;
  threshold?: number;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'nav' | 'main';
}

export default function ScrollReveal({
  children,
  className = "",
  animationClass = "scroll-reveal-simple",
  threshold = 0.1,
  delay = 0,
  as = "div",
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  const Tag = as;

  return (
    <Tag
      ref={ref as any}
      className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
