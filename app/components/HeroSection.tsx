"use client";

import { portfolioData } from "../data/portfolio";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const { profile } = portfolioData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 70, damping: 20 } 
    }
  };

  return (
    <motion.section 
      className="hero-section shear-bottom speed-lines speed-lines-hero"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative Background Bubbles */}
      <div className="bg-decorations">
        <motion.div variants={itemVariants} className="decor-caption" style={{ top: "8%", left: "3%" }}>
          MEANWHILE...
        </motion.div>
        <motion.div variants={itemVariants} className="decor-burst-wrap float-slow" style={{ top: "15%", right: "3%" }}>
          <div className="decor-burst decor-burst-red">BANG!</div>
        </motion.div>
        <motion.div variants={itemVariants} className="decor-bubble decor-thought float-slower" style={{ bottom: "12%", left: "2%" }}>
          WHO IS THIS DEV?!
        </motion.div>
        <motion.div variants={itemVariants} className="decor-symbol float-slow" style={{ bottom: "30%", left: "3%" }}>
          !?
        </motion.div>
      </div>
      <div className="grid-container">
        <div className="col-8">
          <motion.h1 variants={itemVariants} className="hero-title rotate-text">
            <span className="text-stroke">{profile.heroName}</span>
            <br />
            <span style={{ color: "var(--color-spiderman-red)" }}>{profile.role}</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            {profile.description}
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#contact" className="btn btn-primary rotate-text-alt">Hire Me Now!</a>
          </motion.div>
        </div>
        <div className="col-4">
          <motion.div variants={itemVariants} className="hard-shadow hard-shadow-primary rotate-text-alt hero-illustration-container">
            <div className="heavy-border hero-illustration-box">
              <div className="hero-illustration-text">
                [ Hero Illustration ]
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
