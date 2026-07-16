import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import OverlapEffect from "./components/OverlapEffect";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <OverlapEffect 
        mainContent={
          <>
            <Navbar />
            <HeroSection />
            <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
            <AboutSection />
            <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
            <TechStackSection />
            <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
            <ProjectsSection />
            <ScrollReveal className="panel-gutter" animationClass="scroll-reveal-simple" threshold={0.5} />
          </>
        }
        overlapContent={
          <>
            <ContactSection />
            <Footer />
          </>
        }
      />
    </main>
  );
}
