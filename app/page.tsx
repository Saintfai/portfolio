import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="halftone-bg" style={{ minHeight: "100vh", position: "relative" }}>
      <div className="page-wrapper">
        <Navbar />
        <HeroSection />
        <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
        <AboutSection />
        <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
        <ProjectsSection />
        <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
