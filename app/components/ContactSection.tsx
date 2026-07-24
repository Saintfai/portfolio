"use client";

import { useRef, useEffect, useState } from "react";
import { portfolioData } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { contacts } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 20 } 
    }
  };

  return (
    <ScrollReveal 
      as="section" 
      id="contact" 
      animationClass="scroll-fade-bg" 
      className="contact-section ink-texture spiderman-theme"
    >
      {/* Full-section Spiderweb Backdrop */}
      <FullWeb />
      
      {/* Hanging Spider Easter Egg */}
      <HangingSpider />

      {/* Decorative Background Bubbles */}
      <div className="bg-decorations">
        <div className="decor-burst-wrap float-slow" style={{ top: "18%", right: "2%" }}>
          <div className="decor-burst">POW!</div>
        </div>
        <div className="decor-bubble decor-speech float-slower" style={{ bottom: "15%", left: "2%" }}>
          TRANSMITTING...
        </div>
        <div className="decor-caption" style={{ bottom: "5%", right: "3%" }}>
          TO BE CONTINUED...
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '4rem 1rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div 
          style={{ maxWidth: '600px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="rotate-text contact-title" style={{ margin: '0 auto 1.5rem auto' }}>
            Send a<br/><span className="contact-highlight">Signal</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="contact-description" style={{ margin: '0 auto 2.5rem auto' }}>
            Need a hero for your next project? Connect with me on my social channels!
          </motion.p>
          <motion.div variants={itemVariants} className="contact-social-row" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div className="social-btn-wrapper">
              <span className="social-tooltip">GitHub: {contacts.github}</span>
              <a 
                href={contacts.github.startsWith("http") ? contacts.github : `https://github.com/${contacts.github.replace("@", "")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn btn-github"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                </svg>
              </a>
              <div className="social-btn-shadow shadow-blue"></div>
            </div>

            <div className="social-btn-wrapper">
              <span className="social-tooltip">LinkedIn: {contacts.Linkedin.includes("/") ? "Profile" : contacts.Linkedin}</span>
              <a 
                href={contacts.Linkedin.startsWith("http") ? contacts.Linkedin : `https://linkedin.com/in/${contacts.Linkedin.replace("@", "")}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn btn-linkedin"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.8M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
                </svg>
              </a>
              <div className="social-btn-shadow shadow-yellow"></div>
            </div>

            {contacts.instagram && (
              <div className="social-btn-wrapper">
                <span className="social-tooltip">Instagram: {contacts.instagram}</span>
                <a 
                  href={contacts.instagram.startsWith("http") ? contacts.instagram : `https://instagram.com/${contacts.instagram.replace("@", "")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn btn-instagram"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>
                <div className="social-btn-shadow shadow-black"></div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

// Full background SVG Spiderweb
function FullWeb() {
  const width = 800;
  const height = 600;
  const cx = 240; // Offset to the left to align behind the title
  const cy = 280; // Offset vertically
  const numSpokes = 16;
  const numRings = 9;
  const maxR = 750; // Increased to ensure the offset web covers all edges
  const bowFactor = 0.95; // bows inward slightly
  
  const spokes: string[] = [];
  const rings: string[] = [];
  
  // Generate Spokes (radial lines)
  for (let i = 0; i < numSpokes; i++) {
    const angle = (i * Math.PI * 2) / numSpokes;
    const x2 = cx + Math.cos(angle) * maxR;
    const y2 = cy + Math.sin(angle) * maxR;
    spokes.push(`M ${cx} ${cy} L ${x2} ${y2}`);
  }
  
  // Generate Rings (curved spiderweb concentric circles)
  for (let j = 1; j <= numRings; j++) {
    const r = (j / numRings) * maxR;
    let ringPath = "";
    
    for (let i = 0; i < numSpokes; i++) {
      const a1 = (i * Math.PI * 2) / numSpokes;
      const a2 = ((i + 1) * Math.PI * 2) / numSpokes;
      
      const x1 = cx + Math.cos(a1) * r;
      const y1 = cy + Math.sin(a1) * r;
      const x2 = cx + Math.cos(a2) * r;
      const y2 = cy + Math.sin(a2) * r;
      
      const midAngle = (a1 + a2) / 2;
      const cpx = cx + Math.cos(midAngle) * r * bowFactor;
      const cpy = cy + Math.sin(midAngle) * r * bowFactor;
      
      if (i === 0) {
        ringPath += `M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`;
      } else {
        ringPath += ` Q ${cpx} ${cpy} ${x2} ${y2}`;
      }
    }
    rings.push(ringPath);
  }
  
  return (
    <svg 
      viewBox={`0 0 ${width} ${height}`} 
      className="spiderweb-backdrop-svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Spokes */}
      {spokes.map((d, i) => (
        <path key={`spoke-${i}`} d={d} />
      ))}
      {/* Rings */}
      {rings.map((d, i) => (
        <path key={`ring-${i}`} d={d} />
      ))}
    </svg>
  );
}

// Interactive Hanging Spider Component with drag-and-spring physics
function HangingSpider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const threadRef = useRef<SVGLineElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  
  // Physics states stored in refs to avoid re-renders at 60fps
  const pos = useRef({ x: 0, y: 110 });
  const vel = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);
  
  const restPos = { x: 0, y: 110 };
  const springK = 0.08;
  const damping = 0.9;
  
  useEffect(() => {
    const updatePhysics = () => {
      if (isDragging.current) {
        // Velocity during drag is calculated by the mouse movement
      } else {
        // Apply sine wave bobbing relative to rest position when idle
        const time = Date.now() * 0.0025;
        const idleBobY = Math.sin(time) * 4; // subtle 4px bobbing
        const currentRestY = restPos.y + idleBobY;

        // Apply spring force towards rest position
        const fx = (restPos.x - pos.current.x) * springK;
        const fy = (currentRestY - pos.current.y) * springK;
        
        vel.current.x = (vel.current.x + fx) * damping;
        vel.current.y = (vel.current.y + fy) * damping;
        
        pos.current.x += vel.current.x;
        pos.current.y += vel.current.y;
      }
      
      // Update DOM directly for maximum performance
      if (threadRef.current) {
        threadRef.current.setAttribute("x2", (20 + pos.current.x).toString());
        threadRef.current.setAttribute("y2", pos.current.y.toString());
      }
      if (bodyRef.current) {
        // Skew/tilt body slightly based on horizontal velocity for organic sway
        const tilt = Math.max(-25, Math.min(25, vel.current.x * 2.5));
        bodyRef.current.setAttribute("transform", `translate(${pos.current.x}, ${pos.current.y - 110}) rotate(${tilt}, 20, 110)`);
      }
      
      requestRef.current = requestAnimationFrame(updatePhysics);
    };
    
    requestRef.current = requestAnimationFrame(updatePhysics);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      dragOffset.current = {
        x: mouseX - (20 + pos.current.x),
        y: mouseY - pos.current.y
      };
    }
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = moveEvent.clientX - rect.left;
      const mouseY = moveEvent.clientY - rect.top;
      
      const targetX = mouseX - dragOffset.current.x - 20;
      const targetY = mouseY - dragOffset.current.y;
      
      // Limit horizontal and vertical stretch to prevent dragging outside bounding area
      const limitedX = Math.max(-60, Math.min(60, targetX));
      const limitedY = Math.max(30, Math.min(240, targetY));
      
      vel.current.x = limitedX - pos.current.x;
      vel.current.y = limitedY - pos.current.y;
      
      pos.current.x = limitedX;
      pos.current.y = limitedY;
    };
    
    const handleMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  
  return (
    <div 
      ref={containerRef} 
      className="hanging-spider" 
      style={{ width: 40, height: 260, cursor: "grab" }}
      onMouseDown={handleMouseDown}
    >
      <svg width="40" height="260" viewBox="0 0 40 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ overflow: "visible" }}>
        {/* Silk thread line */}
        <line ref={threadRef} x1="20" y1="0" x2="20" y2="110" className="hanging-spider-thread" />
        
        {/* Spider body (centered around x=20, y=110) */}
        <g ref={bodyRef} className="hanging-spider-body" style={{ pointerEvents: "all" }}>
          {/* Draggable hit area (invisible circle for easy grabbing) */}
          <circle cx="20" cy="112" r="24" fill="transparent" style={{ cursor: "grab" }} />
          
          {/* Left Legs */}
          <path d="M 17 108 Q 5 98 2 110" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 16 110 Q 3 107 1 118" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 16 112 Q 3 116 2 127" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 17 114 Q 6 124 7 134" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          
          {/* Right Legs */}
          <path d="M 23 108 Q 35 98 38 110" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 24 110 Q 37 107 39 118" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 24 112 Q 37 116 38 127" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 23 114 Q 34 124 33 134" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          
          {/* Cephalothorax (head) */}
          <ellipse cx="20" cy="107" rx="5" ry="5" fill="currentColor" />
          
          {/* Abdomen (body) */}
          <ellipse cx="20" cy="117" rx="7" ry="9" fill="currentColor" />
          
          {/* Glowing red Spidey eyes */}
          <circle cx="18" cy="104" r="0.8" fill="var(--color-spiderman-red)" />
          <circle cx="22" cy="104" r="0.8" fill="var(--color-spiderman-red)" />
        </g>
      </svg>
    </div>
  );
}
