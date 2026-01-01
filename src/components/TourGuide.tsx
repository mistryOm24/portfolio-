"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { portfolioData } from "@/data/portfolio";

export default function TourGuide() {
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { steps } = portfolioData.tour;

  useEffect(() => {
    setMounted(true);
    
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Only show tour on desktop
    const hasSeenTour = localStorage.getItem("portfolio-tour-seen");
    if (!hasSeenTour && window.innerWidth >= 768) {
      setTimeout(() => setShowTour(true), 2000);
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateSpotlight = (stepIndex: number) => {
    if (!steps[stepIndex]) return;
    
    const element = document.getElementById(steps[stepIndex].target);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
      
      setSpotlight({
        x: rect.left + scrollLeft + rect.width / 2,
        y: rect.top + scrollTop + rect.height / 2,
        width: 500, 
        height: 300
      });
    }
  };

  useEffect(() => {
    if (showTour && steps[currentStep]) {
      // Scroll to element with 'nearest' to avoid forced centering
      const element = document.getElementById(steps[currentStep].target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      // Update spotlight continuously during scroll
      const handleUpdate = () => updateSpotlight(currentStep);
      
      // Initial update after a small delay
      const initialTimer = setTimeout(() => {
        updateSpotlight(currentStep);
      }, 100);

      // Continue updating during scroll animation
      const scrollTimer = setTimeout(() => {
        updateSpotlight(currentStep);
      }, 300);
      
      const finalTimer = setTimeout(() => {
        updateSpotlight(currentStep);
      }, 600);

      // Also track scroll and resize
      window.addEventListener("scroll", handleUpdate, { passive: true });
      window.addEventListener("resize", handleUpdate, { passive: true });

      // Cleanup after animation completes
      const cleanup = setTimeout(() => {
        window.removeEventListener("scroll", handleUpdate);
        window.removeEventListener("resize", handleUpdate);
      }, 1000);

      return () => {
        clearTimeout(initialTimer);
        clearTimeout(scrollTimer);
        clearTimeout(finalTimer);
        clearTimeout(cleanup);
        window.removeEventListener("scroll", handleUpdate);
        window.removeEventListener("resize", handleUpdate);
      };
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

  if (!mounted || !showTour || !steps[currentStep] || isMobile) return null;

  // Use createPortal to render directly into document.body to avoid stacking context issues
  const documentHeight = typeof document !== 'undefined' ? Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  ) : 0;

  return createPortal(
    <div 
      className="absolute top-0 left-0 w-full z-[100] pointer-events-none"
      style={{ height: `${documentHeight}px` }}
    >
      {/* Spotlight Box with Giant Shadow Overlay */}
      <div 
        className="absolute transition-all duration-500 ease-out z-[100]"
        style={{
          left: spotlight.x - (spotlight.width / 2),
          top: spotlight.y - (spotlight.height / 2),
          width: spotlight.width,
          height: spotlight.height,
          borderRadius: '12px',
          boxShadow: '0 0 0 9999px rgba(0,0,0,0.7)', // The Overlay
          border: '2px solid rgba(59, 130, 246, 0.5)'
        }}
      />
      
      {/* Animated cursor pointer */}
      <div 
        className="absolute w-8 h-8 z-[101] pointer-events-none transition-all duration-500 ease-out"
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
        className="absolute z-[102] glass-strong rounded-xl p-4 max-w-xs animate-fade-in-up pointer-events-auto transition-all duration-500 ease-out"
        style={{
          left: Math.min(spotlight.x + 150, (typeof window !== 'undefined' ? window.innerWidth : 1200) - 300),
          top: Math.max(spotlight.y - -70, 20)
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
    </div>,
    document.body
  );
}