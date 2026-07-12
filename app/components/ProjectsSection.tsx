"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { portfolioData } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";
import ComicCard from "./ComicCard";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  
  // Design elements mapped to project index (shuffled/randomized order)
  const themeColors = ["bg-blue", "bg-black", "bg-red", "bg-black", "bg-blue"];
  const shadowClasses = ["hard-shadow-tertiary", "hard-shadow-primary", "hard-shadow-primary", "hard-shadow-tertiary", "hard-shadow-primary"];
  const tagClasses = ["info", "new", "urgent", "info", "new"];

  return (
    <ScrollReveal 
      as="section" 
      id="projects" 
      animationClass="scroll-fade-bg" 
      className="projects-section speed-lines speed-lines-blue"
    >
      {/* Decorative Background Bubbles */}
      <div className="bg-decorations">
        <div className="decor-caption" style={{ top: "6%", left: "2%" }}>
          LATEST PROJECT ON SALE...
        </div>
        <div className="decor-burst-wrap float-slower" style={{ top: "15%", left: "2%" }}>
          <div className="decor-burst decor-burst-blue">WHAM!</div>
        </div>
        <div className="decor-symbol decor-symbol-blue float-slow" style={{ top: "40%", right: "2%" }}>
          *#@!
        </div>
        <div className="decor-burst-wrap float-slow" style={{ bottom: "10%", left: "2%" }}>
          <div className="decor-burst decor-burst-red">BOOM!</div>
        </div>
        <div className="decor-bubble decor-speech float-slow" style={{ bottom: "15%", right: "2%" }}>
          MUST SEE ISSUES!
        </div>
      </div>
      <div className="grid-container">
        <div className="col-12 text-center projects-title-container">
          <h2 className="rotate-text-alt projects-title">
            Latest Project
          </h2>
        </div>
        
        {projects.map((project, index) => {
          const primaryTagClass = tagClasses[index % themeColors.length];

          return (
            <div className="col-4" key={project.id}>
              <ScrollReveal
                animationClass="scroll-reveal-simple scroll-shadow-reveal"
                className="hard-shadow h-full"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedProject(project)}
                delay={index * 100}
              >
                <ComicCard className="card-uniform card-image-top">
                  <div className="card-image">
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className="project-image-placeholder" style={{ height: "100%" }}>
                        <span className="comic-placeholder-text">NO ART</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="card-content">
                    <div className="kicker">
                      {project.inProgress ? `W.I.P // #${index + 1}` : `Issue #${index + 1}`}
                    </div>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.description}</p>
                    
                    {project.inProgress && typeof project.progress === "number" && (
                      <div className="comic-progress-container">
                        <div className="comic-progress-bar" style={{ width: `${project.progress}%` }}></div>
                        <span className="comic-progress-label">DEV: {project.progress}%</span>
                      </div>
                    )}
                    
                    <div className="card-footer">
                      {project.tags.slice(0, 3).map((tech, idx) => (
                        <span className={`chip ${idx === 0 ? primaryTagClass : ""}`} key={idx}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </ComicCard>
              </ScrollReveal>
            </div>
          );
        })}
      </div>

      {/* Comic Detail Modal — rendered via Portal to escape ScrollReveal transform */}
      {mounted && selectedProject && createPortal(
        <div className="comic-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="comic-modal-card hard-shadow" onClick={(e) => e.stopPropagation()}>
            <button className="comic-modal-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            
            <div className="comic-modal-layout">
              {/* Left Column: Image / Cover Art */}
              <div className="comic-modal-left">
                {selectedProject.image ? (
                  <div className="comic-modal-image-container">
                    <img src={selectedProject.image} alt={selectedProject.title} className="comic-modal-image" />
                  </div>
                ) : (
                  <div className="comic-modal-placeholder">
                    <span className="comic-placeholder-text">NO COVER ART</span>
                  </div>
                )}
              </div>

              {/* Right Column: Details */}
              <div className="comic-modal-right">
                {/* Find theme class based on selected index */}
                {(() => {
                  const selectedIdx = projects.findIndex(p => p.id === selectedProject.id);
                  const themeColor = selectedIdx !== -1 ? themeColors[selectedIdx % themeColors.length] : "bg-red";
                  return (
                    <div className={`comic-modal-header ${themeColor}`}>
                      <span className="comic-modal-kicker">
                        {selectedProject.inProgress
                          ? `PROJECT DOSSIER // WORK IN PROGRESS`
                          : `PROJECT DOSSIER // ${selectedProject.year}`}
                      </span>
                      <h2 className="comic-modal-title">{selectedProject.title}</h2>
                    </div>
                  );
                })()}

                <div className="comic-modal-content">
                  <div className="comic-modal-body">
                    {selectedProject.inProgress && typeof selectedProject.progress === "number" && (
                      <div style={{ marginBottom: "1.5rem" }}>
                        <h4 className="comic-modal-section-title">Production Status</h4>
                        <div className="comic-progress-container" style={{ height: "28px" }}>
                          <div className="comic-progress-bar" style={{ width: `${selectedProject.progress}%` }}></div>
                          <span className="comic-progress-label" style={{ fontSize: "0.85rem" }}>
                            STILL COOKING // {selectedProject.progress}% COMPLETED
                          </span>
                        </div>
                      </div>
                    )}
                    <h4 className="comic-modal-section-title">Description</h4>
                    <p className="comic-modal-full-desc">{selectedProject.fullDescription}</p>
                    
                    <h4 className="comic-modal-section-title">Equipped Tech Stack</h4>
                    <div className="comic-modal-tags">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="chip info">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {selectedProject.githubUrl && (
                  <div className="comic-modal-footer">
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                      style={{ width: "100%", display: "block", textAlign: "center" }}
                    >
                      Access Files on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </ScrollReveal>
  );
}
