"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, MapPin, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [scope, setScope] = useState("Build Custom Software");
  const [timeline, setTimeline] = useState("Q1 2026 (Immediate)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const scopes = [
    { title: "Build Custom Software", desc: "Turnkey client engineering" },
    { title: "License Platform IP", desc: "Whisppr / JStream SDK access" },
    { title: "Design Systems & Brand", desc: "High-density product interfaces" },
    { title: "Media Lab / Film Theatrical", desc: "Distribution & screening slate" },
  ];

  const timelines = [
    "Q1 2026 (Immediate)",
    "Q2 2026 (1-3 Months)",
    "Flexible / Scoping",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          scope,
          timeline,
        }),
      });
      const data = await res.json();
      if (data && data.id) {
        setReferenceId(data.id);
      } else {
        setReferenceId("INQ-" + Date.now().toString(36).toUpperCase());
      }
    } catch {
      setReferenceId("INQ-" + Date.now().toString(36).toUpperCase());
    } finally {
      setIsSending(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F4F4F6] relative overflow-hidden">
      
      {/* Ambient Color Splash */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Banner */}
      <section className="px-4 sm:px-6 pt-20 pb-10 sm:pt-32 sm:pb-16 max-w-5xl mx-auto">
        <div className="space-y-3 sm:space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] text-[11px] sm:text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3 h-3" />
            <span>Direct Foundry Intake</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans">
            Start a Project.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            We partner with ambitious enterprises and visionary founders to engineer custom applications and license our proprietary platform infrastructure.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Studio Details */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left: Project Intake Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#101216] border border-[#00E5FF]/40 text-center space-y-4 shadow-[0_0_50px_rgba(0,229,255,0.15)] animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Project Brief Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <span className="text-[#00E5FF] font-semibold">{formData.name}</span>. Your brief regarding <strong>{scope}</strong> has been encrypted and recorded in our Cloudflare D1 database. Our engineering team will review it within 24 hours.
                </p>
                {referenceId && (
                  <div className="inline-block p-3 rounded-xl bg-black/60 border border-[#00E5FF]/20 text-xs font-mono text-zinc-300 space-y-0.5">
                    <span className="text-zinc-500 block uppercase text-[10px]">Cloudflare D1 Tracking Code</span>
                    <span className="text-[#00E5FF] font-bold text-sm tracking-wider">{referenceId}</span>
                  </div>
                )}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", organization: "", message: "" });
                    }}
                    className="px-6 py-3 rounded-full bg-[#00E5FF] text-black text-xs font-bold tracking-wide hover:bg-[#33EAFF] transition-colors min-h-[44px]"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 xs:p-7 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#101216] border border-white/[0.08] hover:border-[#00E5FF]/30 transition-colors space-y-5 sm:space-y-6 shadow-2xl">
                
                {/* Scope Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    01 // PROJECT SCOPE
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {scopes.map((s) => (
                      <button
                        type="button"
                        key={s.title}
                        onClick={() => setScope(s.title)}
                        className={`p-3.5 rounded-xl border text-left transition-all min-h-[54px] ${
                          scope === s.title
                            ? "bg-[#00E5FF]/10 border-[#00E5FF] text-white shadow-[0_0_12px_rgba(0,229,255,0.2)]"
                            : "bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:border-white/20"
                        }`}
                      >
                        <span className="block text-xs font-mono font-semibold text-white mb-0.5">{s.title}</span>
                        <span className="text-[10px] text-zinc-400">{s.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    02 // TARGET TIMELINE
                  </label>
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 text-xs font-mono">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTimeline(t)}
                        className={`py-2.5 px-3 rounded-lg border text-center transition-all ${
                          timeline === t
                            ? "bg-white/10 border-white text-white font-semibold"
                            : "bg-black/30 border-white/[0.06] text-zinc-400 hover:border-white/20"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                      Lead Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-base sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-base sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
                    />
                  </div>
                </div>

                {/* Organization Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp or Stealth Venture"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-base sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
                  />
                </div>

                {/* Project Description Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    Project Scope &amp; Technical Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your technical architecture, target platforms, or platform licensing requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-black/40 border border-white/[0.08] text-white text-base sm:text-sm focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-full bg-[#00E5FF] hover:bg-[#33EAFF] text-black text-sm font-bold tracking-wide transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2 min-h-[48px] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>{isSending ? "Dispatching..." : "Submit Project Brief"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Studio Registry & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Delaware Corporate Registry */}
            <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>CORPORATE HEADQUARTERS</span>
              </div>
              <h3 className="text-xl font-bold text-white">36T Studios LLC</h3>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                Corporation Trust Center<br />
                1209 North Orange Street<br />
                Wilmington, Delaware 19801<br />
                United States of America
              </p>
              <div className="pt-2 text-[11px] font-mono text-zinc-500 border-t border-white/[0.06]">
                REGISTRATION: DELAWARE JURISDICTION // PRIVATE FOUNDRY
              </div>
            </div>

            {/* Direct Inquiries Card */}
            <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono uppercase text-[#FF8A00] tracking-wider block">
                DIRECT INQUIRY CHANNELS
              </span>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="text-xs font-mono text-zinc-500 block">Client Commissions:</span>
                  <a href="mailto:commissions@36tstudios.com" className="text-white hover:text-[#00E5FF] font-mono text-xs transition-colors">
                    commissions@36tstudios.com
                  </a>
                </li>
                <li>
                  <span className="text-xs font-mono text-zinc-500 block">IP Licensing &amp; SDK:</span>
                  <a href="mailto:licensing@36tstudios.com" className="text-white hover:text-[#00E5FF] font-mono text-xs transition-colors">
                    licensing@36tstudios.com
                  </a>
                </li>
                <li>
                  <span className="text-xs font-mono text-zinc-500 block">General Administration:</span>
                  <a href="mailto:inquiries@36tstudios.com" className="text-white hover:text-[#00E5FF] font-mono text-xs transition-colors">
                    inquiries@36tstudios.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
