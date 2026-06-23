"use client";

import { portfolioData } from "@/data/portfolio";
import { SiGithub, SiHackerrank, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { MdWork } from "react-icons/md";

export default function Contact() {
  const { contact } = portfolioData;

  const socialIcons = {
    github: <SiGithub size={24} />,
    linkedin: <FaLinkedin size={24} />,
    hackerrank: <SiHackerrank size={24} />,
    leetcode: <SiLeetcode size={24} />,
  };

  const contactIcons = {
    email: <MdEmail size={24} />,
    phone: <MdPhone size={24} />,
    location: <MdLocationOn size={24} />,
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
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          >
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
              <h3
                id="contact-get-in-touch"
                className="text-2xl font-bold mb-6 sm:mb-8 text-center lg:text-left"
              >
                Get In Touch
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {contact.methods.map((method, index) => (
                  <div
                    key={method.label}
                    className={`animate-fade-in-up delay-${(index + 1) * 100}`}
                  >
                    {method.href ? (
                      <a
                        href={method.href}
                        className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group text-center sm:text-left"
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                        >
                          {
                            contactIcons[
                              method.label.toLowerCase() as keyof typeof contactIcons
                            ]
                          }
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/60 mb-1">
                            {method.label}
                          </p>
                          <p className="text-lg font-medium group-hover:text-blue-400 transition-colors duration-300 break-all sm:break-normal">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 p-4 text-center sm:text-left">
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          {
                            contactIcons[
                              method.label.toLowerCase() as keyof typeof contactIcons
                            ]
                          }
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-white/60 mb-1">
                            {method.label}
                          </p>
                          <p className="text-lg font-medium break-all sm:break-normal">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-5 sm:p-8 animate-fade-in-up delay-400">
              <h3 className="text-xl font-bold mb-6 text-center lg:text-left">
                Connect With Me
              </h3>
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
                  <MdWork size={40} className="text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    {contact.cta.title}
                  </h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {contact.cta.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      const email = contact.cta.email;

                      // Try modern clipboard API first
                      if (navigator.clipboard && window.isSecureContext) {
                        navigator.clipboard
                          .writeText(email)
                          .then(() => {
                            const button =
                              document.activeElement as HTMLButtonElement;
                            const originalText = button.textContent;
                            button.textContent = "Email Copied!";
                            setTimeout(() => {
                              button.textContent = originalText;
                            }, 2000);
                          })
                          .catch(() => {
                            // Fallback to old method
                            copyToClipboardFallback(email);
                          });
                      } else {
                        // Fallback for older browsers or non-secure contexts
                        copyToClipboardFallback(email);
                      }

                      function copyToClipboardFallback(text: string) {
                        const textArea = document.createElement("textarea");
                        textArea.value = text;
                        textArea.style.position = "fixed";
                        textArea.style.opacity = "0";
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();

                        try {
                          document.execCommand("copy");
                          const button =
                            document.activeElement as HTMLButtonElement;
                          const originalText =
                            button?.textContent || "Copy Email";
                          if (button) {
                            button.textContent = "Email Copied!";
                            setTimeout(() => {
                              button.textContent = originalText;
                            }, 2000);
                          }
                        } catch (err) {
                          console.log("Copy failed, showing email");
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
