"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealWrapper({ children }: { children: React.ReactNode }) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Spacer to push scroll down by the exact height of the footer */}
      <div style={{ height: `${height}px` }} aria-hidden="true" className="reveal-spacer" />
      {/* Fixed content that sits at the bottom, revealed when scrolling past spacer */}
      <div 
        ref={ref}
        style={{ 
          position: "fixed", 
          bottom: 0, 
          left: 0, 
          right: 0, 
          zIndex: -1 
        }}
        className="reveal-content"
      >
        {children}
      </div>
    </>
  );
}
