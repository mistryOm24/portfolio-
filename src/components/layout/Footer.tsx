import LiveUsers from "@/components/LiveUsers";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: <SiGithub size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin size={20} />,
    },
    {
      name: "Email",
      href: "mailto:mistryom024@gmail.com",
      icon: <MdEmail size={20} />,
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-t from-black/50 to-transparent">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Om Mistry
              </h3>
              <p className="text-white/60">Frontend Developer</p>
            </div>
            <p className="text-white/70 leading-relaxed">
              Building modern web applications with React, TypeScript, and
              cutting-edge technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 glass rounded-lg flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-all duration-300 animate-scale-in delay-${(index + 1) * 100}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-200">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-white/70 hover:text-white transition-colors duration-300 animate-fade-in-left delay-${(index + 1) * 100}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-400">
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <MdEmail size={16} className="text-white" />
                </div>
                <a
                  href="mailto:mistryom18@gmail.com"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                >
                  mistryom18@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MdLocationOn size={16} className="text-white" />
                </div>
                <span className="text-white/70">Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50 animate-fade-in-up delay-600">
              © {currentYear} Om Mistry. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/50 animate-fade-in-up delay-700">
              <LiveUsers />
              <span>Built with Next.js & Tailwind CSS</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <AiFillHeart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
