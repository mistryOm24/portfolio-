import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 id="projects-title" className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {projects.list.map((project, index) => (
            <article
              key={project.title}
              className={`group glass rounded-2xl p-8 hover-lift transition-all duration-500 animate-fade-in-up delay-${(index + 1) * 200}`}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  
                  {project.links?.live && (
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.links.live.startsWith("http") 
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400" 
                    }`}>
                      {project.links.live.startsWith("http") ? "Live" : "In Development"}
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/80 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-full font-medium hover:scale-105 transition-transform duration-200 animate-scale-in delay-${(index * 200) + (techIndex * 50)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white/80 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.highlights?.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              {project.links?.live && (
                <div className="pt-4 border-t border-white/10">
                  {!project.links.live.startsWith("http") ? (
                    <div className="flex items-center gap-2 text-yellow-400 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Coming Soon
                    </div>
                  ) : (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 group/link"
                    >
                      <span>View Live Project</span>
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up delay-800">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-white/70 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}