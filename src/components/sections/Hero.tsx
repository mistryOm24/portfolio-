"use client";

import { portfolioData } from "@/data/portfolio";
import { scrollToSection } from "@/utils/scroll";

export default function Hero() {
  const { hero } = portfolioData;
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float delay-500"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        {/* Title Section */}
        <div className="mb-8 animate-fade-in-up">
          <p className="text-xl md:text-2xl text-white/60 mb-4">{hero.greeting}</p>
          <h1 id="hero-name" className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block gradient-text">{hero.name}</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {hero.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full animate-scale-in delay-200"></div>
        </div>

        {/* Description */}
        <div className="mb-12 animate-fade-in-up delay-300">
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            {hero.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-fade-in-up delay-500">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 animate-glow"
          >
            <span className="relative z-10 flex items-center gap-3">
              {hero.cta.primary}
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-5 glass border border-white/20 rounded-2xl font-semibold text-lg hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover-lift"
          >
            <span className="flex items-center gap-2">
              {hero.cta.secondary}
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up delay-700">
          <div className="flex flex-col items-center gap-3 text-white/50">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-float delay-200"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-float delay-400"></div>
      <div className="absolute bottom-32 right-16 w-2 h-2 bg-cyan-400/30 rounded-full animate-float delay-600"></div>
    </section>
  );
}