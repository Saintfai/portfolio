"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const { contacts } = portfolioData;
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setStatus("loading");
    setResult("Transmitting message to someone who can help...");

    const formData = new FormData(formElement);
    formData.append("access_key", "6ea507dc-e643-4b49-8d13-c4073f3ad79f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message transmitted successfully!");
        formElement.reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message || "Transmission failed.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
      setResult("Transmission failed due to network error.");
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

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem 0', position: 'relative', zIndex: 10 }}>
        <ScrollReveal
          animationClass="scroll-reveal-simple scroll-shadow-reveal"
          style={{ width: '100%', maxWidth: '500px' }}
        >
          <form onSubmit={handleSubmit} className="speech-bubble-card">
            <div className="speech-bubble-header">
              <h3 className="speech-bubble-title">What's on your mind?</h3>
              <p className="speech-bubble-subtitle">Shoot me a direct message!</p>
            </div>

            <div className="speech-bubble-input-group">
              <label className="speech-bubble-label" htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" className="speech-bubble-input" placeholder="Peter Parker" required />
            </div>
            <div className="speech-bubble-input-group">
              <label className="speech-bubble-label" htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" className="speech-bubble-input" placeholder="peter@example.com" required />
            </div>
            <div className="speech-bubble-input-group">
              <label className="speech-bubble-label" htmlFor="message">Your Message</label>
              <textarea id="message" name="message" className="speech-bubble-input" rows={4} placeholder="Write your message here..." required></textarea>
            </div>
            <div className="submit-btn-container">
              <button 
                type="submit" 
                className="speech-bubble-btn"
                disabled={status === "loading"}
              >
                <span className="btn-text">{status === "loading" ? "SENDING..." : "SAY IT!"}</span>
              </button>
            </div>
            {result && (
              <div className={`chip text-center w-full ${
                status === "success" ? "new" : status === "error" ? "urgent" : "info"
              }`} style={{ display: "block", margin: "16px 0 0 0" }}>
                {result}
              </div>
            )}
          </form>
        </ScrollReveal>
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
