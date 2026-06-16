"use client";

import { portfolioData } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function TechStackSection() {
  const { techStack = [], techStackRow2 = [] } = portfolioData as any;

  // Duplicate items to ensure a seamless looping animation
  const row1Items = [...techStack, ...techStack, ...techStack];
  const row2Items = [...techStackRow2, ...techStackRow2, ...techStackRow2];

  return (
    <section id="techstack" className="techstack-section">
      {/* Decorative background captions/bursts */}
      <div className="bg-decorations">
        <div className="decor-caption" style={{ top: "8%", right: "4%" }}>
          EQUIPPED WITH DANGEROUS TOOLS...
        </div>
        <div className="decor-bubble decor-thought float-slow" style={{ bottom: "5%", left: "3%" }}>
          SO MANY LANGUAGES!
        </div>
      </div>

      <div className="grid-container" style={{ paddingBottom: 0 }}>
        <div className="col-12 text-center" style={{ marginBottom: "1.5rem" }}>
          <ScrollReveal animationClass="scroll-reveal-simple">
            <h2 className="section-title rotate-text">
              My Arsenal
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* Conveyor Belt Wrapper */}
      <div className="conveyor-container">
        {/* Row 1: Left to Right */}
        <div className="conveyor-track conveyor-track-right">
          <div className="conveyor-inner scroll-right">
            {row1Items.map((tech, idx) => (
              <div 
                className="conveyor-card hard-shadow" 
                key={`r1-${tech.name}-${idx}`}
                style={{ "--card-accent": tech.color } as React.CSSProperties}
              >
                <div className="conveyor-card-border-top" style={{ backgroundColor: tech.color }} />
                <div className="conveyor-card-content-wrap">
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} icon`} 
                    className="conveyor-card-icon"
                    loading="lazy"
                  />
                  <span className="conveyor-card-name">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="conveyor-track conveyor-track-left">
          <div className="conveyor-inner scroll-left">
            {row2Items.map((tech, idx) => (
              <div 
                className="conveyor-card hard-shadow" 
                key={`r2-${tech.name}-${idx}`}
                style={{ "--card-accent": tech.color } as React.CSSProperties}
              >
                <div className="conveyor-card-border-top" style={{ backgroundColor: tech.color }} />
                <div className="conveyor-card-content-wrap">
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} icon`} 
                    className="conveyor-card-icon"
                    loading="lazy"
                  />
                  <span className="conveyor-card-name">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
