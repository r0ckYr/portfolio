import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Home from "./Home";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black">
      <Navigation
        isOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Portfolio;
