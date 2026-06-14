"use client";

import { ReactNode, useRef, useState, useEffect } from "react";

const COMIC_ACTIONS = ["ZAP!", "WHAM!", "BOOM!", "POW!", "BAM!"];

interface ComicCardProps {
  className?: string;
  children: ReactNode;
}

export default function ComicCard({ className = "", children }: ComicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPopping, setIsPopping] = useState(false);
  const [currentAction, setCurrentAction] = useState(COMIC_ACTIONS[0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Pick a random action word
    const randomAction = COMIC_ACTIONS[Math.floor(Math.random() * COMIC_ACTIONS.length)];
    setCurrentAction(randomAction);
    
    // Set the pop-up coordinate exactly at the point of entry
    const rect = cardRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    // Mencegah teks muncul terlalu mentok di sisi pinggir kartu (Clamping)
    const paddingX = Math.min(100, rect.width / 3);
    const paddingY = Math.min(60, rect.height / 3);
    
    x = Math.max(paddingX, Math.min(x, rect.width - paddingX));
    y = Math.max(paddingY, Math.min(y, rect.height - paddingY));
    
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    
    // Trigger animation
    setIsPopping(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      setIsPopping(false);
    }, 700);
  };
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`comic-card ${className} ${isPopping ? 'show-action' : ''}`}
      data-comic-action={currentAction}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
}
