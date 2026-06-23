"use client";

import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { FiMonitor, FiPenTool, FiTool } from "react-icons/fi";

export default function Skills() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.1);
  const [tagsRef, tagsVisible] = useScrollAnimation(0.2);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animFrames = useRef<number[]>([]);

  const { skills: skillsData } = portfolioData;

  useEffect(() => {
    scrollRefs.current.forEach((el, i) => {
      if (!el) return;
      let pos = 0;
      const speed = 0.2;
      const step = () => {
        if (!el) return;
        const isHovered = hoveredCategory === i;
        if (!isHovered) {
          pos += speed;
          if (pos >= el.scrollHeight - el.clientHeight) pos = 0;
          el.scrollTop = pos;
        }
        animFrames.current[i] = requestAnimationFrame(step);
      };
      animFrames.current[i] = requestAnimationFrame(step);
    });
    return () => animFrames.current.forEach(id => cancelAnimationFrame(id));
  }, [hoveredCategory]);

  // Configuration for visuals (Icons and Patterns) based on category name
  const categoryConfig: Record<string, { icon: React.ReactNode; bgPattern: string }> = {
    Frontend: {
      icon: <FiMonitor className="w-8 h-8 text-white" size={32} />,
      bgPattern: "animate-float",
    },
    "Styling & UI": {
      icon: <FiPenTool className="w-8 h-8 text-white" size={32} />,
      bgPattern: "animate-float delay-200",
    },
    "Tools & Others": {
      icon: <FiTool className="w-8 h-8 text-white" size={32} />,
      bgPattern: "animate-float delay-400",
    },
  };

  // Derive all technologies from the categories
  const allTechnologies = skillsData.categories.flatMap(cat =>
    cat.skills.map(s => s.name)
  );

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
            headerVisible
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-[50px]"
          }`}
        >
          <h2
            id="skills-title"
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-glow-text"
          >
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6 animate-gradient"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-typewriter">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef as any} className="grid md:grid-cols-3 gap-8 mb-20">
          {skillsData.categories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`glass-strong rounded-2xl p-8 hover-lift hover-glow transition-all duration-1000 ${
                skillsVisible
                  ? `animate-flip-in delay-${(categoryIndex + 1) * 200}`
                  : "opacity-0"
              }`}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mx-auto mb-4 flex items-center justify-center hover-rotate animate-pulse-custom ${categoryConfig[category.name]?.bgPattern || ""}`}
                >
                  {categoryConfig[category.name]?.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 animate-glow-text">
                  {category.name}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
              </div>

              <div
                ref={el => {
                  scrollRefs.current[categoryIndex] = el;
                }}
                className="space-y-4 max-h-72 overflow-y-auto pr-2 scrollbar-visible-none scrollbar scrollbar-w-0.5 scrollbar-thumb-white/20 scrollbar-track-transparent"
                style={{ scrollbarWidth: "none" }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={Date.now() + skill.name}
                    className={`group transition-all duration-500 delay-${categoryIndex * 200 + skillIndex * 100} ${
                      skillsVisible
                        ? "animate-fade-in-left"
                        : "opacity-0 translate-x-[-30px]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-lg">{skill.name}</span>
                      <span className="text-sm text-white/60 animate-blink">
                        Expert
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden relative">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-2000 ease-out animate-gradient ${
                          hoveredCategory === categoryIndex
                            ? "animate-pulse-custom"
                            : ""
                        }`}
                        style={{
                          width: skillsVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 150}ms`,
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
            tagsVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text animate-glow-text">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {allTechnologies.map((skill, index) => (
              <span
                key={skill}
                className={`px-6 py-3 glass-strong rounded-full text-sm font-medium hover:scale-110 hover-glow transition-all duration-300 animate-bounce-in hover-slide delay-${index * 75}`}
                style={{
                  animationDelay: tagsVisible ? `${index * 75}ms` : "0ms",
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
