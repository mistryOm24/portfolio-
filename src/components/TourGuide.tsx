"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export default function TourGuide() {
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const { steps } = portfolioData.tour;

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("portfolio-tour-seen");
    if (!hasSeenTour) {
      setTimeout(() => setShowTour(true), 2000);
    }
  }, []);

  useEffect(() => {
    if (showTour && steps[currentStep]) {
      setTimeout(() => {
        const element = document.getElementById(steps[currentStep].target);
        if (element) {
          const rect = element.getBoundingClientRect();
          setSpotlight({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          });
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [currentStep, showTour, steps]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      closeTour();
    }
  };

  const closeTour = () => {
    setShowTour(false);
    localStorage.setItem("portfolio-tour-seen", "true");
  };

  if (!showTour || !steps[currentStep]) return null;

  return (
    <>
      {/* Dark overlay with spotlight */}
      <div 
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle 300px at ${spotlight.x}px ${spotlight.y}px, transparent 0%, transparent 40%, rgba(0,0,0,0.6) 100%)`
        }}
      />
      
      {/* Section highlight border */}
      <div 
        className="fixed z-45 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: spotlight.x - 150,
          top: spotlight.y - 100,
          width: '300px',
          height: '200px',
          border: '2px solid rgba(59, 130, 246, 0.5)',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
        }}
      />
      
      {/* Animated cursor pointer */}
      <div 
        className="fixed w-8 h-8 z-50 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: spotlight.x - 16,
          top: spotlight.y - 16
        }}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>

      {/* Floating text */}
      <div 
        className="fixed z-50 glass-strong rounded-xl p-4 max-w-xs animate-fade-in-up pointer-events-auto"
        style={{
          left: Math.min(spotlight.x + 50, (typeof window !== 'undefined' ? window.innerWidth : 1200) - 300),
          top: Math.max(spotlight.y - 50, 20)
        }}
      >
        <p className="text-white text-sm mb-3">{steps[currentStep].text}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-white/60">{currentStep + 1}/{steps.length}</span>
          <div className="space-x-2">
            <button onClick={closeTour} className="text-xs text-white/60 hover:text-white">
              Skip
            </button>
            <button onClick={nextStep} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-lg hover-lift">
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}