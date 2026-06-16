"use client";

import { portfolioData } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

// Pure monochrome SVGs (using currentColor so they adapt to theme)
const techIcons: { [key: string]: React.ReactNode } = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(150 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5l-3.2-4.5v4.5H9V8h1.8l3.2 4.5V8h1.8v8.5H13z" />
    </svg>
  ),
  Flutter: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.3 2.3L5 11.6l2.8 2.8 9.3-9.3z" />
      <path d="M14.3 9.3L9.6 14l2.8 2.8 4.7-4.7z" />
      <path d="M14.3 16.3l-1.9 1.9 2.8 2.8 1.9-1.9z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM10.7 17.5c0 .6-.2 1.1-.6 1.4-.4.3-1 .5-1.7.5-.7 0-1.2-.2-1.7-.5-.4-.3-.7-.8-.8-1.4h1.7c.1.3.2.5.4.6.2.1.4.2.7.2.3 0 .5-.1.6-.2.1-.1.2-.3.2-.6v-6.3h1.7v6.3zm7.3-4.3c0 .8-.3 1.4-.8 1.8-.5.4-1.2.6-2 .6-.6 0-1.1-.1-1.6-.4-.5-.3-.8-.7-1-1.3h1.7c.1.3.3.5.5.6.2.1.5.2.8.2.3 0 .5-.1.7-.2.2-.1.3-.3.3-.6 0-.2-.1-.4-.2-.5-.1-.1-.4-.2-.8-.4-.6-.2-1.1-.4-1.4-.7-.3-.3-.5-.7-.5-1.3 0-.7.3-1.3.8-1.7.5-.4 1.1-.6 1.9-.6.6 0 1.1.1 1.6.4.5.3.8.7.9 1.3h-1.7c-.1-.3-.2-.4-.4-.5-.2-.1-.4-.2-.7-.2-.3 0-.5.1-.6.2-.1.1-.2.2-.2.4 0 .2.1.3.2.4.1.1.4.2.9.4.6.2 1 .4 1.3.7.3.3.5.8.5 1.4z" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM11.5 17.5c0 1.3-.8 2-2.2 2-1.4 0-2.2-.7-2.2-2H8.9c0 .6.3.8.7.8.4 0 .6-.2.6-.8v-6.3h1.3v6.3zm7.3.2c0 .8-.5 1.3-1.3 1.3-.8 0-1.3-.5-1.3-1.3v-3.8h-1.3v4c0 1.3.9 2.2 2.6 2.2 1.7 0 2.6-.9 2.6-2.2v-4h-1.3v3.8z" />
    </svg>
  ),
  Dart: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.4 8.7L12 2.1 2.6 8.7c-.4.3-.6.7-.6 1.2v6.2c0 .5.2.9.6 1.2l9.4 6.6 9.4-6.6c.4-.3.6-.7.6-1.2V9.9c0-.5-.2-.9-.6-1.2zm-9.4 11.2L5.2 15V9l6.8 4.9v6zm0-7.2L5.2 7.8 12 3l6.8 4.8-6.8 4.9zm6.8 3l-6.8 4.9v-6l6.8-4.9v6z" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.5 18C6.567 18 5 16.433 5 14.5S6.567 11 8.5 11H12v7H8.5zM12 2h-3.5C6.567 2 5 3.567 5 5.5S6.567 9 8.5 9H12V2zm0 9H8.5C6.567 11 5 12.567 5 14.5S6.567 18 8.5 18H12v-7zm3.5-9C13.567 2 12 3.567 12 5.5V9h3.5C17.433 9 19 7.433 19 5.5S17.433 2 15.5 2zm0 9C13.567 11 12 12.567 12 14.5v3.5c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-1.933-1.567-3.5-3.5-3.5z" />
    </svg>
  ),
  HTML5: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 5l1.6 14.2 8.4 2.8 8.4-2.8L22 5 12 2zm4.8 6.4h-7.6l.2 2h7.2l-.4 4.5-4.2 1.1-4.2-1.1-.3-2.6h2l.1 1.1 2.4.6 2.4-.6.2-2.1H7.8l-.6-6.4h9.8l-.4 3z" />
    </svg>
  ),
  CSS3: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 5l1.6 14.2 8.4 2.8 8.4-2.8L22 5 12 2zm4.5 4.5H7.7l.2 2h6.4l-.2 2H7.5l.2 2H14l-.4 4-3.6 1-3.6-1-.2-2h-2l.3 4 5.5 1.5 5.5-1.5.8-9.5z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm7.6 13.9l-7.6 4.4-7.6-4.4V8.1l7.6-4.4 7.6 4.4v7.8zM12 6.5l-5.6 3.2V16L12 12.8v6.4l5.6-3.2V9.7L12 6.5z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9 2c-2.7 0-2.5 1.2-2.5 1.2v1.3H12v.6H9.4c-1.5 0-2.5.9-2.5 2.5v1.9c0 .7.6 1.3 1.3 1.3h1.3v-1.3c0-1.5 1.2-2.5 2.5-2.5h2.5V4.5S14.6 2 11.9 2zm2.7 4.4H12v.6h2.6c1.5 0 2.5-.9 2.5-2.5V2.6c0-.7-.6-1.3-1.3-1.3h-1.3v1.3c0 1.5-1.2 2.5-2.5 2.5H9.5v2.5s2.5 0 5.1-.2z" />
      <path d="M12 22c2.7 0 2.5-1.2 2.5-1.2v-1.3H12v-.6h2.6c1.5 0 2.5-.9 2.5-2.5v-1.9c0-.7-.6-1.3-1.3-1.3h-1.3v1.3c0 1.5-1.2 2.5-2.5 2.5H9.5v2.5s2.5.1 5.1.1zm-2.7-4.4H12v-.6H9.4c-1.5 0-2.5.9-2.5 2.5v1.9c0 .7.6 1.3 1.3 1.3h1.3v-1.3c0-1.5 1.2-2.5 2.5-2.5h2.5v-2.5s-2.5.1-5.1.1z" />
    </svg>
  ),
  Laravel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15.5h-2v-6.3h2v6.3zm0-7.7h-2V7.5h2v2.3zm5 7.7h-2V7.5h2v10z" />
    </svg>
  ),
  NestJS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 3l8 4.5v9L12 21L4 16.5v-9L12 3z" />
      <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 15V9a4 4 0 0 0-4-4H9" />
      <path d="M6 9v6" />
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="12" cy="12" rx="10" ry="6" />
      <path d="M8 9v6M8 12h3a2.5 2.5 0 0 0 0-5H8M14 9v6M14 12h3a2.5 2.5 0 0 0 0-5h-3" />
    </svg>
  ),
  C: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M16 7a5 5 0 1 0 0 10" />
    </svg>
  ),
  Tailwind: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v10a4 4 0 0 1-4 4H4v4h4a8 8 0 0 0 8-8V3h-4z" />
      <path d="M16 12a4 4 0 0 1-4-4V4H8v4a8 8 0 0 0 8 8h4v-4h-4z" />
    </svg>
  )
};

const fallbackIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
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
        <div className="col-12 text-center" style={{ marginBottom: "1.2rem" }}>
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
              <div className="conveyor-item" key={`r1-${tech.name}-${idx}`}>
                <div className="conveyor-icon-box">
                  {techIcons[tech.name] || fallbackIcon}
                </div>
                <span className="conveyor-item-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="conveyor-track conveyor-track-left">
          <div className="conveyor-inner scroll-left">
            {row2Items.map((tech, idx) => (
              <div className="conveyor-item" key={`r2-${tech.name}-${idx}`}>
                <div className="conveyor-icon-box">
                  {techIcons[tech.name] || fallbackIcon}
                </div>
                <span className="conveyor-item-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
