import ComicCard from "./ComicCard";
import { portfolioData } from "../data/portfolio";

export default function AboutSection() {
  const { profile } = portfolioData;
  return (
    <section id="about" className="section-padding fade-in-up delay-100">
      {/* Decorative Background Bubbles */}
      <div className="bg-decorations">
        <div className="decor-caption" style={{ top: "8%", left: "3%" }}>
          SOMEWHERE, IN BANDUNG ...
        </div>
        <div className="decor-bubble decor-speech float-slow" style={{ top: "15%", right: "2%" }}>
          EXTRA! EXTRA!
        </div>
      </div>
      <div className="grid-container">
        <div className="col-12">
          <div className="hard-shadow">
            <ComicCard className="newspaper-card">
              {/* Masthead */}
            <header className="newspaper-masthead">
              <div className="newspaper-issue-info">
                <span>VOL. 1 — NO. 1</span>
                <span>NEW YORK CITY</span>
                <span>PRICE: FREE</span>
              </div>
              <h2 className="newspaper-title">THE DAILY BUGLE</h2>
              <div className="newspaper-headline-banner">
                <h3>EXCLUSIVE: THE IDENTITY OF A DEVELOPER HAS BEEN REVEALED!</h3>
              </div>
            </header>

            <div className="newspaper-content">
              {/* Left Column: Photo/Profile */}
              <div className="newspaper-sidebar">
                <div className="newspaper-photo-frame">
                  <div className="newspaper-photo-container">
                    <img 
                      src="/IMG_6489.JPG.jpeg" 
                      alt="Developer profile photo" 
                      className="newspaper-photo"
                    />
                  </div>
                  <p className="newspaper-caption">Photo: A developer caught in the act of building responsive UIs.</p>
                </div>
                <div className="newspaper-stats">
                  <h4 className="stats-title">CLASSIFIED FILES</h4>
                  <ul className="stats-list">
                    <li><strong>Alias:</strong> {profile.alias}</li>
                    <li><strong>University:</strong> {profile.University}</li>
                    <li><strong>Powers:</strong> {profile.skills.join(", ")}</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Article */}
              <div className="newspaper-article">
                <h4 className="article-title">THE PROFILE</h4>
                <div className="article-body">
                  {profile.bio.map((paragraph, idx) => {
                    if (idx === 0) {
                      return (
                        <p key={idx}>
                          <span className="dropcap">{paragraph.charAt(0)}</span>{paragraph.slice(1)}
                        </p>
                      );
                    }
                    return <p key={idx}>{paragraph}</p>;
                  })}
                </div>
              </div>
            </div>
            </ComicCard>
          </div>
        </div>
      </div>
    </section>
  );
}
