"use client";

import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} <span className="footer-name">{profile.alias}</span>. ALL RIGHTS RESERVED.
        </p>
        <p className="footer-subtext">
          MADE WITH 💥 AND 🕸️
        </p>
      </div>
    </footer>
  );
}
