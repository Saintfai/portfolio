"use client";

import { ReactNode, useState, HTMLAttributes } from "react";
import { motion } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion(as as any) as any;

  return (
    <MotionTag
      className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ 
        type: "spring",
        stiffness: 70, 
        damping: 20, 
        delay: delay / 1000 
      }}
      onViewportEnter={() => setIsVisible(true)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
