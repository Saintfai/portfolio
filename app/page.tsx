import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="halftone-bg" style={{ minHeight: "100vh", position: "relative" }}>
      <div className="page-wrapper">
        <Navbar />
        <HeroSection />
        <div className="panel-gutter" />
        <AboutSection />
        <div className="panel-gutter" />
        <ProjectsSection />
        <div className="panel-gutter" />
        <ContactSection />
      </div>
    </main>
  );
}
