"use client";

import { useState, useEffect } from "react";
import { scrollToSection, scrollToTop } from "@/utils/scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-in-top ${
      isScrolled 
        ? "glass backdrop-blur-md border-b border-white/20" 
        : "bg-transparent border-b border-white/10"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-bold text-xl animate-fade-in-left">
          <button onClick={scrollToTop} className="gradient-text hover:scale-105 transition-transform duration-300">
            Om Mistry
          </button>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm animate-fade-in-right">
          {navItems.map((item, index) => (
            <li key={item} className={`delay-${(index + 1) * 100}`}>
              <button 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative hover:text-white/70 transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 animate-fade-in-right"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden glass backdrop-blur-md border-b border-white/10 transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="px-6 py-4 space-y-4 text-sm">
          {navItems.map((item, index) => (
            <li key={item} className={`animate-fade-in-left delay-${(index + 1) * 100}`}>
              <button 
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left hover:text-white/70 transition-colors duration-300 py-2 hover:bg-white/5 rounded px-2"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}