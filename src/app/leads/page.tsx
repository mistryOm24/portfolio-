"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { ref, onValue, remove } from "firebase/database";
import { MdEmail, MdPhone, MdAccessTime, MdMessage, MdPeople } from "react-icons/md";
import { FaGlobe, FaDesktop, FaTrash, FaUser } from "react-icons/fa";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  description?: string;
  submittedAt: string;
};

type Visitor = {
  id: string;
  name?: string;
  email?: string;
  browser: string;
  os: string;
  device: string;
  language: string;
  screenResolution: string;
  timezone: string;
  referrer: string;
  page: string;
  visitedAt: string;
};

type Tab = "leads" | "visitors";

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<Tab>("leads");

  const clearLeadLocalStorage = () =>
    ["lead_submitted", "lead_closed", "lead_user"].forEach(k => localStorage.removeItem(k));

  const clearCookieLocalStorage = () => localStorage.removeItem("cookie_consent");

  const handleClearLeads = async () => {
    if (!db || !confirm("Delete all leads?")) return;
    await remove(ref(db, "leads"));
    clearLeadLocalStorage();
  };

  const handleClearVisitors = async () => {
    if (!db || !confirm("Delete all visitors?")) return;
    await remove(ref(db, "visitors"));
    clearCookieLocalStorage();
  };

  const handleClearAll = async () => {
    if (!db || !confirm("Delete ALL data from both leads and visitors?")) return;
    await Promise.all([remove(ref(db, "leads")), remove(ref(db, "visitors"))]);
    clearLeadLocalStorage();
    clearCookieLocalStorage();
  };

  useEffect(() => {
    if (!db) { setLoading(false); return; }
    let leadsLoaded = false, visitorsLoaded = false;
    const done = () => { if (leadsLoaded && visitorsLoaded) setLoading(false); };
    onValue(ref(db, "leads"), (snap) => {
      const data = snap.val();
      setLeads(data ? Object.entries(data).map(([id, v]) => ({ id, ...(v as Omit<Lead, "id">) })).reverse() : []);
      leadsLoaded = true; done();
    });
    onValue(ref(db, "visitors"), (snap) => {
      const data = snap.val();
      setVisitors(data ? Object.entries(data).map(([id, v]) => ({ id, ...(v as Omit<Visitor, "id">) })).reverse() : []);
      visitorsLoaded = true; done();
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
            <p className="text-white/40 text-sm mt-1">Private — only visible to you</p>
          </div>
          <button
            onClick={handleClearAll}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 hover:border-red-500/40 rounded-xl transition-all"
          >
            <FaTrash size={11} /> Clear All
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="glass border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
              <MdPeople size={22} />
            </div>
            <div>
              <p className="text-3xl font-bold">{leads.length}</p>
              <p className="text-white/40 text-xs mt-0.5">Form Leads</p>
            </div>
          </div>
          <div className="glass border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
              <FaGlobe size={18} />
            </div>
            <div>
              <p className="text-3xl font-bold">{visitors.length}</p>
              <p className="text-white/40 text-xs mt-0.5">Cookie Accepted</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/10">
            {(["leads", "visitors"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  tab === t
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {t}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-md ${tab === t ? "bg-white/20" : "bg-white/10"}`}>
                  {t === "leads" ? leads.length : visitors.length}
                </span>
              </button>
            ))}
          </div>
          {tab === "leads" && leads.length > 0 && (
            <button onClick={handleClearLeads} className="flex items-center gap-1.5 px-3 py-2 text-xs bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-xl transition-all">
              <FaTrash size={10} /> Clear Leads
            </button>
          )}
          {tab === "visitors" && visitors.length > 0 && (
            <button onClick={handleClearVisitors} className="flex items-center gap-1.5 px-3 py-2 text-xs bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-xl transition-all">
              <FaTrash size={10} /> Clear Visitors
            </button>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-8 h-8 border-2 border-white/10 border-t-blue-500 rounded-full animate-spin" />
            <p className="text-white/30 text-sm">Loading data...</p>
          </div>
        )}

        {/* Leads Tab */}
        {!loading && tab === "leads" && (
          <div className="space-y-3">
            {leads.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-3">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                  <MdPeople size={26} className="text-white/20" />
                </div>
                <p className="text-white/30 text-sm">No leads yet</p>
              </div>
            ) : leads.map((lead) => (
              <div key={lead.id} className="glass border border-white/10 hover:border-white/20 rounded-2xl p-5 space-y-3 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <FaUser size={13} className="text-white/50" />
                    </div>
                    <div>
                      <p className="font-semibold text-base">{lead.name}</p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                        <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-blue-400 text-xs hover:underline">
                          <MdEmail size={13} /> {lead.email}
                        </a>
                        {lead.phone && (
                          <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-emerald-400 text-xs hover:underline">
                            <MdPhone size={13} /> {lead.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-white/25 flex items-center gap-1 whitespace-nowrap shrink-0">
                    <MdAccessTime size={12} />
                    {new Date(lead.submittedAt).toLocaleString()}
                  </span>
                </div>
                {lead.description && (
                  <div className="flex items-start gap-2 text-white/50 text-xs bg-white/5 border border-white/5 rounded-xl px-4 py-3">
                    <MdMessage size={13} className="mt-0.5 shrink-0 text-white/30" />
                    <p className="leading-relaxed">{lead.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Visitors Tab */}
        {!loading && tab === "visitors" && (
          <div className="space-y-3">
            {visitors.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 gap-3">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                  <FaGlobe size={22} className="text-white/20" />
                </div>
                <p className="text-white/30 text-sm">No visitors yet</p>
              </div>
            ) : visitors.map((v) => (
              <div key={v.id} className="glass border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <FaDesktop size={13} className="text-white/50" />
                    </div>
                    <div>
                      {v.name && <p className="font-semibold text-sm">{v.name}</p>}
                      {v.email && (
                        <a href={`mailto:${v.email}`} className="text-blue-400 text-xs hover:underline block">{v.email}</a>
                      )}
                      <p className="text-white/35 text-xs mt-0.5">{v.browser} · {v.os} · {v.device}</p>
                    </div>
                  </div>
                  <span className="text-xs text-white/25 flex items-center gap-1 whitespace-nowrap shrink-0">
                    <MdAccessTime size={12} />
                    {new Date(v.visitedAt).toLocaleString()}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { label: "Timezone", value: v.timezone },
                    { label: "Language", value: v.language },
                    { label: "Screen", value: v.screenResolution },
                    { label: "Page", value: v.page },
                    { label: "Referrer", value: v.referrer || "Direct", full: true },
                  ].map(({ label, value, full }) => (
                    <div key={label} className={`bg-white/5 rounded-xl px-3 py-2 ${full ? "col-span-2 sm:col-span-3" : ""}`}>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-white/60 text-xs truncate">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
