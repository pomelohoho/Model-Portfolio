// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // or any other icons you prefer

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Left side: big photo */}
      <div className="contact-left" />

      {/* Right side: form + heading + icons */}
      <div className="contact-right">
        <h2 className="contact-heading">CONTACT</h2>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your name*</label>
            <input type="text" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your email*</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea id="message" rows="4" />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact number*</label>
            <input type="tel" id="contactNumber" required />
          </div>

          <button type="submit" className="contact-button">Send</button>
        </form>

        <div className="contact-icons">
          {/* Replace # with your actual links */}
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}
