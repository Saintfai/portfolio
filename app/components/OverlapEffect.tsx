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
  const spacerRef = useRef<HTMLDivElement>(null);
  const overlapRef = useRef<HTMLDivElement>(null);
  const isFixed = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    
    const onScroll = () => {
      if (!mainRef.current || !spacerRef.current || !overlapRef.current) return;
      
      const overlapRect = overlapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // When the overlap section starts entering the viewport from the bottom
      if (overlapRect.top <= windowHeight) {
        if (!isFixed.current) {
          // Freeze main content exactly where it is visually!
          const mainRect = mainRef.current.getBoundingClientRect();
          
          spacerRef.current.style.height = `${mainRect.height}px`;
          spacerRef.current.style.display = "block";
          
          mainRef.current.style.position = "fixed";
          mainRef.current.style.top = `${mainRect.top}px`;
          mainRef.current.style.left = `${mainRect.left}px`;
          mainRef.current.style.width = `${mainRect.width}px`;
          mainRef.current.style.bottom = "";
          mainRef.current.style.transform = "none";
          
          isFixed.current = true;
        }
      } else {
        if (isFixed.current) {
          // Unfreeze main content
          mainRef.current.style.position = "relative";
          mainRef.current.style.top = "";
          mainRef.current.style.left = "";
          mainRef.current.style.width = "";
          
          spacerRef.current.style.display = "none";
          
          isFixed.current = false;
        }
      }
    };

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth 60fps performance
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(onScroll);
    };

    const handleResize = () => {
      // If window resizes, we must reset the fixed state to recalculate properly
      if (isFixed.current && mainRef.current && spacerRef.current) {
        mainRef.current.style.position = "relative";
        mainRef.current.style.top = "";
        mainRef.current.style.left = "";
        mainRef.current.style.width = "";
        spacerRef.current.style.display = "none";
        isFixed.current = false;
      }
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={spacerRef} style={{ display: "none", pointerEvents: "none", overflowAnchor: "none" }} />
      <div 
        ref={mainRef} 
        className="page-wrapper halftone-bg"
        style={{ 
          position: "relative", 
          zIndex: 0,
          overflowAnchor: "none"
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
