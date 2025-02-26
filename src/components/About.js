// src/components/About.js
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I just happen to love fashion (painting, cooking and traveling)
        </p>
        <div className="social-links">
          <a
            href="http://facebook.com/daopomelo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/pom.dao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@pomelohoho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok />
          </a>
        </div>
      </div>
      <div className="about-photo">
        {/* The big photo is set as a background via CSS */}
      </div>
    </div>
  );
}
