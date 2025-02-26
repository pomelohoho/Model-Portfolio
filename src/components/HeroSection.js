import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; // We'll create this CSS file below

function HeroSection() {
  return (
    <div className="hero">
      {/* The dark overlay is handled by CSS pseudo-element */}
      <div className="hero-text">
        <h1>POM DAO</h1>
        <nav className="hero-nav">
            <Link to="/gallery">GALLERY</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="https://pomelohoho.github.io/Pom-Full-stack-developer-portfolio/">SEE SWE PORTFOLIO</Link>
        </nav>
      </div>
    </div>
  );
}

export default HeroSection;
