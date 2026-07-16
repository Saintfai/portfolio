import Navbar from "./components/Navbar";
import RevealWrapper from "./components/RevealWrapper";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <div className="page-wrapper halftone-bg" style={{ position: "relative", zIndex: 1, backgroundColor: "var(--bg-gutter)", boxShadow: "0px 15px 30px rgba(0,0,0,0.5)" }}>
        <Navbar />
        <HeroSection />
        <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
        <AboutSection />
        <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
        <TechStackSection />
        <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
        <ProjectsSection />
        <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
      </div>
      <RevealWrapper>
        <ContactSection />
        <Footer />
      </RevealWrapper>
    </main>
  );
}
