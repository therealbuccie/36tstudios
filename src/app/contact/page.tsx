"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [topic, setTopic] = useState("Film Distribution & Licensing");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const topics = [
    "Film Distribution & Licensing",
    "Software & Platform APIs",
    "Brand & Design Systems",
    "Private Executive Residences",
    "General Studio Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FFFFFF] relative overflow-hidden">
      
      {/* Ambient Color Splash */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[350px] bg-[#F59247]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Banner */}
      <section className="px-6 pt-20 pb-12 sm:pt-28 sm:pb-16 max-w-5xl mx-auto">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#F59247] shadow-[0_0_6px_#F59247]" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Let&apos;s Talk.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Have a project in mind, want to license our platforms, or inquire about our film slate? Send us a note and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Studio Details */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-3xl bg-[#141418] border border-white/20 text-center space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#F59247]/20 text-[#F59247] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Received
                </h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for contacting 36T Studios. Your note regarding <strong>{topic}</strong> has been routed to our team. We will review your message and reply within one business day.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", organization: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#F59247] text-black text-xs font-bold tracking-wide hover:bg-[#FF9F59] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-[#141418] border border-white/[0.08] hover:border-[#F59247]/20 transition-colors space-y-6 shadow-2xl">
                
                {/* Topic Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-300 block">
                    HOW CAN WE COLLABORATE?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTopic(t)}
                        className={`p-3.5 rounded-xl border text-xs font-medium text-left transition-all ${
                          topic === t
                            ? "bg-[#F59247] text-black border-[#F59247] font-bold shadow-[0_0_15px_rgba(245,146,71,0.3)]"
                            : "bg-[#0A0A0C] border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.18]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400 block">YOUR NAME *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0C] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F59247] text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-400 block">EMAIL ADDRESS *</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0C] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F59247] text-sm"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400 block">ORGANIZATION / COMPANY</label>
                  <input
                    type="text"
                    placeholder="Studio, Fund, or Company Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0C] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F59247] text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-400 block">YOUR MESSAGE *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your project, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#0A0A0C] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#F59247] text-sm leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F59247] hover:bg-[#FF9F59] text-black text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,146,71,0.35)] disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right: Clean Studio Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#141418] border border-white/[0.08] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59247]/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-white relative z-10">
                Direct Channels
              </h3>

              <div className="space-y-4 text-sm font-light relative z-10">
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    General Inquiries
                  </div>
                  <a
                    href="mailto:hello@36tstudios.com"
                    className="text-white hover:text-[#F59247] transition-colors flex items-center gap-1 font-normal"
                  >
                    <span>hello@36tstudios.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F59247]" />
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    Theatrical & Festival Licensing
                  </div>
                  <a
                    href="mailto:licensing@36tstudios.com"
                    className="text-white hover:text-[#F59247] transition-colors flex items-center gap-1 font-normal"
                  >
                    <span>licensing@36tstudios.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F59247]" />
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    Headquarters
                  </div>
                  <div className="text-zinc-300">
                    Delaware, United States
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-500 leading-relaxed font-light relative z-10">
                All communications are handled with discretion and confidentiality. We typically respond within 24 hours.
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
