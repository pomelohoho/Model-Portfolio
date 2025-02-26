import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AlbumGrid from "./components/AlbumGrid";
import Album from "./components/Album";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import "./App.css"; // global styles

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page (Hero) */}
        <Route path="/" element={<HeroSection />} />
        <Route 
          path="/gallery" 
          element={
            <>
              <Navbar />
              <Gallery />
            </>
          } 
        />
        <Route 
          path="/album/:id" 
          element={
            <>
              <Navbar />
              <Album />
            </>
          } 
        />        
        <Route 
          path="/about" 
          element={
            <>
              <Navbar />
              <About />
            </>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <>
              <Navbar />
              <Contact />
            </>
          } 
        />      
      </Routes>
    </Router>
  );
}

export default App;
