"use client";
import { useEffect, useState } from "react";
import { MdClose, MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

const STORAGE_KEY = "lead_submitted";
const CLOSED_KEY = "lead_closed";

export default function LeadCaptureModal() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const wasClosedBefore = localStorage.getItem(CLOSED_KEY);
    const delay = wasClosedBefore ? 15000 : 30000;
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem(CLOSED_KEY, "1");
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (db) {
      await push(ref(db, "leads"), {
        ...form,
        submittedAt: new Date().toISOString(),
      });
    }
    localStorage.setItem(STORAGE_KEY, "1");
    localStorage.setItem("lead_user", JSON.stringify({ name: form.name, email: form.email }));
    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="glass w-full max-w-md rounded-2xl border border-white/10 p-6 relative animate-fade-in-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <MdClose size={22} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="text-4xl">🎉</div>
            <h3 className="text-xl font-bold gradient-text">Thanks for reaching out!</h3>
            <p className="text-white/60">I'll get back to you soon.</p>
            <button onClick={() => setVisible(false)} className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <h3 className="text-xl font-bold gradient-text">Let's Connect! 👋</h3>
              <p className="text-white/50 text-sm mt-1">Drop your details and I'll reach out.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                placeholder="Your Name *"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50"
              />
              <input
                required
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50"
              />
              <input
                type="tel"
                placeholder="Phone Number (optional)"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50"
              />
              <textarea
                placeholder="What's on your mind? (optional)"
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-5">
              <a href="mailto:mistryom18@gmail.com" className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors">
                <MdEmail size={15} /> mistryom18@gmail.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                <SiGithub size={15} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors">
                <FaLinkedin size={15} />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
