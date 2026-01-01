"use client";

import { skills } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function Skills() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.1);
  const [tagsRef, tagsVisible] = useScrollAnimation(0.2);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgPattern: "animate-float"
    },
    {
      title: "Styling",
      skills: ["Tailwind CSS", "Material UI"],
      color: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4V5z" />
        </svg>
      ),
      bgPattern: "animate-float delay-200"
    },
    {
      title: "State & Backend",
      skills: ["Redux", "Zustand", "Firebase", "REST APIs"],
      color: "from-green-500 to-emerald-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      bgPattern: "animate-float delay-400"
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div 
          ref={headerRef as any}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[50px]'
          }`}
        >
          <h2 id="skills-title" className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-glow-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 animate-gradient"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-typewriter">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div 
          ref={skillsRef as any}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`glass-strong rounded-2xl p-8 hover-lift hover-glow transition-all duration-1000 ${
                skillsVisible ? `animate-flip-in delay-${(categoryIndex + 1) * 200}` : 'opacity-0'
              }`}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center hover-rotate animate-pulse-custom ${category.bgPattern}`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 animate-glow-text">{category.title}</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`group transition-all duration-500 delay-${(categoryIndex * 200) + (skillIndex * 100)} ${
                      skillsVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-30px]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-lg">{skill}</span>
                      <span className="text-sm text-white/60 animate-blink">Expert</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden relative">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-2000 ease-out animate-gradient ${
                          hoveredCategory === categoryIndex ? 'animate-pulse-custom' : ''
                        }`}
                        style={{
                          width: skillsVisible ? '92%' : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 150)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-gradient"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating particles for each card */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-float particle"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-float delay-300 particle"></div>
            </div>
          ))}
        </div>

        {/* All Skills Tags */}
        <div 
          ref={tagsRef as any}
          className={`transition-all duration-1000 delay-600 ${
            tagsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text animate-glow-text">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={skill} 
                className={`px-6 py-3 glass-strong rounded-full text-sm font-medium hover:scale-110 hover-glow transition-all duration-300 animate-bounce-in hover-slide delay-${index * 75}`}
                style={{
                  animationDelay: tagsVisible ? `${index * 75}ms` : '0ms'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-6 h-6 bg-blue-400/20 rounded-full animate-float delay-100 particle"></div>
        <div className="absolute bottom-1/3 left-10 w-4 h-4 bg-purple-400/20 rounded-full animate-float delay-500 particle"></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-green-400/20 rounded-full animate-float delay-700 particle"></div>
      </div>
    </section>
  );
}