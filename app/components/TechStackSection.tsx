"use client";

import { portfolioData } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

// Inline SVGs for all tech stacks to ensure they load instantly and reliably
const techIcons: { [key: string]: React.ReactNode } = {
  React: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" stroke="currentColor" strokeWidth="2" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16L12 8L8 16" />
      <path d="M12 11h4" />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M14.3 2.3L5 11.6l2.8 2.8 9.3-9.3z" />
      <path d="M14.3 9.3L9.6 14l2.8 2.8 4.7-4.7z" />
      <path d="M14.3 16.3l-1.9 1.9 2.8 2.8 1.9-1.9z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M6 8h6v2H9v6H7v-6H6V8zm7 0h5v2h-4v1h3v2h-3v1h4v2h-5V8z" fill="var(--color-pure-white)" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M11 15c0 1.5-.7 2-2 2s-2-.5-2-1.5h1.8c0 .3.1.5.2.5s.2 0 .2-.2v-4.6h1.8V15zm5.5.8c0 .5-.2.7-.6.7s-.6-.2-.6-.7v-3.6h-1.8v3.8c0 1.5.8 2 2.2 2s2.2-.5 2.2-2v-3.8h-1.8v3.6z" fill="var(--color-pure-black)" />
    </svg>
  ),
  Dart: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10v10l10-5V7l-10 5zm0 0l-10-5v10l10 5V12z" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M8 2h4v4H8z" />
      <circle cx="14" cy="4" r="2" />
      <path d="M8 8h8v4H8z" />
      <path d="M8 14h4v4H8z" />
      <path d="M14 14a2 2 0 0 1-2 2h-2v-2h4z" />
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M2 2h20l-2 18-8 2-8-2L2 2zm10 15.2l3.6-1 0.4-4.2H8.8l-0.2-2.3h7.8l0.2-2.3H6.2l0.6 6.8h5.2v3z" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M2 2h20l-2 18-8 2-8-2L2 2zm8 15.2l-3.6-1-0.2-2.3H8.8l0.1 1.2 3.1 0.8V13H7l-0.2-2.3h5.2V8.4H6.4L6.2 6.1h8.8l-0.4 4.5H12v2.4h3.6l-0.4 4.7-3.2 0.9v-1.4z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-1 14.5l-3-1.7V11l3 1.7v3.8zm5-2.8l-3 1.7V11.6l3-1.7v3.8z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 2.2.7 4.2 2 5.8l1.4-1.4A8 8 0 0 1 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.8-.6 3.5-1.6 4.8l1.4 1.4c1.3-1.6 2.2-3.6 2.2-6.2A10 10 0 0 0 12 2zm-1 5h2v6h-2V7zm0 8h2v2h-2v-2z" />
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16v16H4z" />
      <path d="M12 4v16" />
      <path d="M4 12h16" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H9v-2h4v2zm0-4H9v-2h4v2zm2-4H9V6h6v2z" />
    </svg>
  ),
  NestJS: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 10v10l10-5V7l-10 5z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M19.17 12L12 4.83a.92.92 0 0 0-1.3 0L3.83 11.7a.92.92 0 0 0 0 1.3l7.17 7.17a.92.92 0 0 0 1.3 0l6.87-6.87a.92.92 0 0 0 0-1.3zM9 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M4.5 6h4.5a3 3 0 0 1 0 6H6v6H4V6zm2 2v2h2.5a1 1 0 0 0 0-2H6.5zm7-2h2v5h3V6h2v12h-2v-5h-3v5h-2V6zm8 0h4.5a3 3 0 0 1 0 6h-3v6h-2V6zm2 2v2h2.5a1 1 0 0 0 0-2h-2.5z" />
    </svg>
  ),
  C: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 8a6 6 0 1 0 0 8" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
      <path d="M12 3v10a4 4 0 0 1-4 4H4v4h4a8 8 0 0 0 8-8V3h-4z" />
      <path d="M16 12a4 4 0 0 1-4-4V4H8v4a8 8 0 0 0 8 8h4v-4h-4z" />
    </svg>
  )
};

const fallbackIcon = (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

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

      <div className="grid-container" style={{ paddingBottom: 0, paddingTop: 0 }}>
        <div className="col-12 text-center" style={{ marginBottom: "1rem" }}>
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
                  <div className="conveyor-card-icon-container" style={{ color: tech.color }}>
                    {techIcons[tech.name] || fallbackIcon}
                  </div>
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
                  <div className="conveyor-card-icon-container" style={{ color: tech.color }}>
                    {techIcons[tech.name] || fallbackIcon}
                  </div>
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
