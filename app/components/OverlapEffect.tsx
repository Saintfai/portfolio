"use client";

import { useEffect, useRef, useState } from "react";

export default function OverlapEffect({ 
  mainContent, 
  overlapContent 
}: { 
  mainContent: React.ReactNode; 
  overlapContent: React.ReactNode; 
}) {
  const overlapRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (overlapRef.current) {
        setSpacerHeight(overlapRef.current.offsetHeight);
      }
    };
    
    // Use ResizeObserver for perfect dynamic height tracking
    const observer = new ResizeObserver(updateHeight);
    if (overlapRef.current) {
      observer.observe(overlapRef.current);
    }
    
    updateHeight();
    window.addEventListener("resize", updateHeight);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <div 
        className="page-wrapper halftone-bg"
        style={{ 
          position: "relative", 
          zIndex: 1, 
          backgroundColor: "var(--bg-gutter)" 
        }}
      >
        {mainContent}
      </div>
      
      {/* Spacer to allow scrolling past the main content to reveal the fixed footer */}
      <div style={{ height: `${spacerHeight}px`, pointerEvents: "none" }} />
      
      <div 
        ref={overlapRef} 
        className="overlap-wrapper"
        style={{ 
          position: "fixed", 
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 0
        }}
      >
        {overlapContent}
      </div>
    </>
  );
}
