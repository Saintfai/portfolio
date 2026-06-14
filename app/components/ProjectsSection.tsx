"use client";

import { useState } from "react";
import ComicCard from "./ComicCard";
import { portfolioData } from "../data/portfolio";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  // Design elements mapped to project index (shuffled/randomized order)
  const themeColors = ["bg-blue", "bg-black", "bg-red", "bg-black", "bg-blue"];
  const shadowClasses = ["hard-shadow-tertiary", "hard-shadow-primary", "hard-shadow-primary", "hard-shadow-tertiary", "hard-shadow-primary"];
  const tagClasses = ["info", "new", "urgent", "info", "new"];

  return (
    <section id="projects" className="projects-section fade-in-up delay-200 speed-lines speed-lines-blue">
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
          const themeColor = themeColors[index % themeColors.length];
          const shadowClass = shadowClasses[index % shadowClasses.length];
          const primaryTagClass = tagClasses[index % tagClasses.length];

          return (
            <div className="col-4" key={project.id} onClick={() => setSelectedProject(project)}>
              <div className={`hard-shadow h-full ${shadowClass}`} style={{ cursor: "pointer" }}>
                <ComicCard>
                  <div className="kicker">Issue #{index + 1}</div>
                  <div className={`comic-card-header ${themeColor}`}>
                    <h3 className="comic-card-title">{project.title}</h3>
                  </div>
                  <div className="comic-card-content">
                    {project.image ? (
                      <div className="heavy-border mb-4" style={{ width: "100%", height: "120px", overflow: "hidden" }}>
                        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ) : (
                      <div className="project-image-placeholder mb-4">
                        <span className="comic-placeholder-text">NO COVER ART</span>
                      </div>
                    )}
                    <p className="project-card-desc">{project.description}</p>
                    <div className="project-card-tags">
                      {project.tags.slice(0, 3).map((tech, idx) => (
                        <span className={`chip ${idx === 0 ? primaryTagClass : ""}`} key={idx}>{tech}</span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="chip-ellipsis">...</span>
                      )}
                    </div>
                  </div>
                </ComicCard>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comic Detail Modal */}
      {selectedProject && (
        <div className="comic-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="comic-modal-card hard-shadow" onClick={(e) => e.stopPropagation()}>
            <button className="comic-modal-close" onClick={() => setSelectedProject(null)}>
              &times;
            </button>
            
            {/* Find theme class based on selected index */}
            {(() => {
              const selectedIdx = projects.findIndex(p => p.id === selectedProject.id);
              const themeColor = selectedIdx !== -1 ? themeColors[selectedIdx % themeColors.length] : "bg-red";
              return (
                <div className={`comic-modal-header ${themeColor}`}>
                  <span className="comic-modal-kicker">PROJECT DOSSIER // {selectedProject.year}</span>
                  <h2 className="comic-modal-title">{selectedProject.title}</h2>
                </div>
              );
            })()}

            <div className="comic-modal-content">
              {selectedProject.image ? (
                <div className="comic-modal-image-container">
                  <img src={selectedProject.image} alt={selectedProject.title} className="comic-modal-image" />
                </div>
              ) : (
                <div className="comic-modal-placeholder">
                  <span className="comic-placeholder-text">NO COVER ART</span>
                </div>
              )}
              
              <div className="comic-modal-body">
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
      )}
    </section>
  );
}
