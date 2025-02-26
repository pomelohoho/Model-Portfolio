// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>POM</h1>
      </div>
      <nav className="navbar-right">
        {/* Replace with your actual routes/links */}
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/">HOME</Link>
        <Link to="/gallery">GALLERY</Link>
      </nav>
    </header>
  );
}
