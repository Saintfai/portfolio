import { portfolioData } from "../data/portfolio";

export default function HeroSection() {
  const { profile } = portfolioData;
  return (
    <section className="hero-section shear-bottom fade-in-up speed-lines speed-lines-hero">
      {/* Decorative Background Bubbles */}
      <div className="bg-decorations">
        <div className="decor-caption" style={{ top: "8%", left: "3%" }}>
          MEANWHILE...
        </div>
        <div className="decor-burst-wrap float-slow" style={{ top: "15%", right: "3%" }}>
          <div className="decor-burst decor-burst-red">BANG!</div>
        </div>
        <div className="decor-bubble decor-thought float-slower" style={{ bottom: "12%", left: "2%" }}>
          WHO IS THIS DEV?!
        </div>
        <div className="decor-symbol float-slow" style={{ bottom: "30%", left: "3%" }}>
          !?
        </div>
      </div>
      <div className="grid-container">
        <div className="col-8">
          <h1 className="hero-title rotate-text">
            <span className="text-stroke">{profile.heroName}</span>
            <br />
            <span style={{ color: "var(--color-spiderman-red)" }}>{profile.role}</span>
          </h1>
          <p className="hero-subtitle">
            {profile.description}
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary rotate-text-alt">Hire Me Now!</a>
          </div>
        </div>
        <div className="col-4">
          <div className="hard-shadow hard-shadow-primary rotate-text-alt hero-illustration-container">
            <div className="heavy-border hero-illustration-box">
              <div className="hero-illustration-text">
                [ Hero Illustration ]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
