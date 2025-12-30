"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  const [statsRef, statsVisible] = useScrollAnimation(0.3);
  const [cardRef, cardVisible] = useScrollAnimation(0.2);

  const { about } = portfolioData;

  return (
    <section id="about" className="py-32 max-w-6xl mx-auto px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-float delay-500"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl animate-morph"></div>
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8">
          {/* Title */}
          <div 
            ref={titleRef as any}
            className={`transition-all duration-1000 ${
              titleVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-glow-text">
              {about.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-gradient"></div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef as any}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
            }`}
          >
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-white/80 leading-relaxed hover-slide">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div 
            ref={statsRef as any}
            className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 delay-400 ${
              statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
            }`}
          >
            {about.stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center glass-strong rounded-xl p-4 hover-lift hover-glow animate-bounce-in delay-${(index + 1) * 100}`}
              >
                <div className={`text-2xl font-bold ${stat.color} animate-pulse-custom`}>{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div 
          ref={cardRef as any}
          className={`transition-all duration-1000 delay-300 ${
            cardVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'
          }`}
        >
          <div className="relative">
            {/* Main card */}
            <div className="glass-strong rounded-2xl p-8 hover-lift hover-glow animate-float-slow">
              <div className="space-y-6">
                {about.features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`flex items-center gap-4 animate-fade-in-left delay-${(index + 1) * 100} hover-slide`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center hover-rotate animate-pulse-custom`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg animate-glow-text">{feature.title}</h3>
                      <p className="text-white/60 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float particle"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full animate-float delay-500 particle"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500/20 rounded-full animate-float delay-700 particle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}