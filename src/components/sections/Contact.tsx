"use client";

import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { contact } = portfolioData;

  const socialIcons = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  };

  const contactIcons = {
    email: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    phone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    location: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-left">
            <div className="glass rounded-2xl p-5 sm:p-8">
              <h3 id="contact-get-in-touch" className="text-2xl font-bold mb-6 sm:mb-8 text-center lg:text-left">Get In Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contact.methods.map((method, index) => (
                  <div key={method.label} className={`animate-fade-in-up delay-${(index + 1) * 100}`}>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group text-center sm:text-left"
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {contactIcons[method.label.toLowerCase() as keyof typeof contactIcons]}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/60 mb-1">{method.label}</p>
                          <p className="text-lg font-medium group-hover:text-blue-400 transition-colors duration-300 break-all sm:break-normal">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 p-4 text-center sm:text-left">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          {contactIcons[method.label.toLowerCase() as keyof typeof contactIcons]}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/60 mb-1">{method.label}</p>
                          <p className="text-lg font-medium break-all sm:break-normal">{method.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-5 sm:p-8 animate-fade-in-up delay-400">
              <h3 className="text-xl font-bold mb-6 text-center lg:text-left">Connect With Me</h3>
              <div className="flex gap-4 justify-center lg:justify-start">
                {contact.social.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 glass rounded-xl flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-all duration-300 animate-scale-in delay-${(index + 1) * 100}`}
                    aria-label={social.name}
                  >
                    {socialIcons[social.icon as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Card */}
          <div className="animate-fade-in-right delay-300">
            <div className="glass rounded-2xl p-8 hover-lift">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto flex items-center justify-center animate-float">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">{contact.cta.title}</h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {contact.cta.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      const email = 'mistryom024@gmail.com';
                      
                      // Try modern clipboard API first
                      if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard.writeText(email).then(() => {
                          const button = document.activeElement as HTMLButtonElement;
                          const originalText = button.textContent;
                          button.textContent = 'Email Copied!';
                          setTimeout(() => {
                            button.textContent = originalText;
                          }, 2000);
                        }).catch(() => {
                          // Fallback to old method
                          copyToClipboardFallback(email);
                        });
                      } else {
                        // Fallback for older browsers or non-secure contexts
                        copyToClipboardFallback(email);
                      }
                      
                      function copyToClipboardFallback(text: string) {
                        const textArea = document.createElement('textarea');
                        textArea.value = text;
                        textArea.style.position = 'fixed';
                        textArea.style.opacity = '0';
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        
                        try {
                          document.execCommand('copy');
                          const button = document.activeElement as HTMLButtonElement;
                          const originalText = button?.textContent || 'Copy Email';
                          if (button) {
                            button.textContent = 'Email Copied!';
                            setTimeout(() => {
                              button.textContent = originalText;
                            }, 2000);
                          }
                        } catch (err) {
                          console.log('Copy failed, showing email');
                          alert(`Email: ${text}`);
                        } finally {
                          document.body.removeChild(textArea);
                        }
                      }
                    }}
                    className="block w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-glow"
                  >
                    Copy Email
                  </button>
                  
                  <a
                    href={contact.cta.resume}
                    download
                    className="block w-full px-8 py-4 glass border border-white/20 rounded-xl font-semibold hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                  >
                    Download Resume
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-white/50">
                    Response time: {contact.cta.responseTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}