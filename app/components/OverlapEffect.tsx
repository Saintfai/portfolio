"use client";

import { useEffect, useRef } from "react";

export default function OverlapEffect({ 
  mainContent, 
  overlapContent 
}: { 
  mainContent: React.ReactNode; 
  overlapContent: React.ReactNode; 
}) {
  const mainRef = useRef<HTMLDivElement>(null);
  const overlapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const onScroll = () => {
      if (!mainRef.current || !overlapRef.current) return;
      
      const overlapRect = overlapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // When the overlap section starts entering the viewport from the bottom
      if (overlapRect.top < windowHeight) {
        // Calculate how much it has entered
        const overlapAmount = windowHeight - overlapRect.top;
        
        // Prevent translating more than the height of the overlap section
        const maxOverlap = overlapRect.height;
        const translateY = Math.min(overlapAmount, maxOverlap);
        
        // Translate the main content down by the exact amount the page has scrolled past it,
        // effectively "freezing" it in place while the overlap content slides over it.
        mainRef.current.style.transform = `translateY(${translateY}px)`;
      } else {
        mainRef.current.style.transform = `translateY(0px)`;
      }
    };

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth 60fps performance
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(onScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={mainRef} 
        className="page-wrapper halftone-bg"
        style={{ 
          position: "relative", 
          zIndex: 0, 
          willChange: "transform" 
        }}
      >
        {mainContent}
      </div>
      <div 
        ref={overlapRef} 
        className="overlap-wrapper"
        style={{ 
          position: "relative", 
          zIndex: 1, 
          backgroundColor: "var(--bg-gutter)", 
          boxShadow: "0px -15px 30px rgba(0,0,0,0.5)" 
        }}
      >
        {overlapContent}
      </div>
    </>
  );
}
