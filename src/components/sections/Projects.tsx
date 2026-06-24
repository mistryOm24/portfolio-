"use client";
import { useState, useRef, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

const TABS = ["All", "Professional", "Personal"] as const;
type Tab = (typeof TABS)[number];

const COLS = 3;

export default function Projects() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [page, setPage] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animating, setAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeTab === "All"
      ? projects.list
      : projects.list.filter(
          (p) => p.category?.toLowerCase() === activeTab.toLowerCase()
        );

  const totalPages = Math.ceil(filtered.length / COLS);
  const visible = filtered.slice(page * COLS, page * COLS + COLS);

  function goTo(p: number) {
    if (animating) return;
    setDirection(p > page ? "right" : "left");
    setAnimating(true);
    setPage(p);
    setAnimKey((k) => k + 1);
  }

  function handleTab(tab: Tab) {
    setDirection("right");
    setAnimKey((k) => k + 1);
    setActiveTab(tab);
    setPage(0);
  }

  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => setAnimating(false), 650);
      return () => clearTimeout(t);
    }
  }, [animating]);

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6 relative">
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 id="projects-title" className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        {/* Tab Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-xl p-1 flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev Button */}
          {totalPages > 1 && (
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-white hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Grid */}
          <div
            ref={gridRef}
            key={animKey}
            style={{
              animation: `slideIn${direction === "right" ? "Right" : "Left"} 0.65s cubic-bezier(0.25,0.46,0.45,0.94) both`,
            }}
            className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
          >
            {visible.map((project, index) => {
              const isLive = project.links?.live?.startsWith("http");
              const isComingSoon = !project.tech?.length;

              if (isComingSoon) {
                return (
                  <article
                    key={project.title}
                    className="group glass rounded-2xl overflow-hidden flex flex-col border border-dashed border-white/10"
                  >
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500/40 to-pink-500/40" />
                    <div className="p-7 flex flex-col flex-1 items-center justify-center text-center gap-4 min-h-[280px]">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                        🚧
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-white/80">{project.title}</h3>
                        <p className="text-sm text-white/40">{project.description}</p>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400">
                        Coming Soon
                      </span>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={project.title}
                  className="group glass rounded-2xl overflow-hidden hover-lift transition-all duration-500 flex flex-col"
                >
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        isLive
                          ? "bg-green-500/10 text-green-400 border-green-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}>
                        {isLive ? "● Live" : "⏳ In Development"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {project.highlights?.length > 0 && (
                      <ul className="space-y-1.5 mb-5">
                        {project.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/65">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 hover:border-blue-500/40 hover:text-white transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-4">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.links?.live && (
                        isLive ? (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 group/link"
                          >
                            View Live
                            <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          <span className="ml-auto text-sm text-amber-400/70 font-medium">Coming Soon</span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Next Button */}
          {totalPages > 1 && (
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages - 1}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-white hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Dot Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 h-2 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20 animate-fade-in-up delay-800">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Interested in working together?</h3>
            <p className="text-white/60 mb-6 text-sm">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
