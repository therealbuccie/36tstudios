"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Tv, 
  Video, 
  Ticket, 
  Users, 
  Mail, 
  MessageSquare, 
  Sliders, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  ShieldCheck,
  Layers,
  Cpu,
  Clapperboard,
  Activity,
  Globe,
  ExternalLink
} from "lucide-react";
import { platformsData, platformSuites, Product } from "@/data/platformsData";

export default function PlatformsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    { label: "ALL ECOSYSTEM", value: "ALL" },
    { label: "Streaming & Media", value: "Streaming" },
    { label: "Events & Gatherings", value: "Events" },
    { label: "Communication", value: "Communication" },
    { label: "Operations & AI", value: "Operations & AI" },
    { label: "Cinema & Media Lab", value: "Cinema" },
  ];

  const filteredProducts = activeCategory === "ALL" 
    ? platformsData 
    : platformsData.filter((p) => p.category === activeCategory);

  const getProductIcon = (id: string) => {
    switch (id) {
      case "jstreams-tv": return Tv;
      case "jstreams-studio": return Video;
      case "jevents": return Ticket;
      case "jconference": return Users;
      case "whisppr": return MessageSquare;
      case "jposta": return Mail;
      case "jai": return Bot;
      case "jcontrol": return Sliders;
      case "ive-got-it": return Clapperboard;
      case "casting-portal": return Users;
      default: return Cpu;
    }
  };

  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "Live":
        return {
          label: "LIVE // DEPLOYED",
          classes: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]",
          dot: "bg-emerald-400",
        };
      case "In Development":
        return {
          label: "IN DEVELOPMENT",
          classes: "text-[#FF8A00] bg-[#FF8A00]/10 border-[#FF8A00]/30",
          dot: "bg-[#FF8A00]",
        };
      case "Beta":
        return {
          label: "PRIVATE BLUEPRINT",
          classes: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30",
          dot: "bg-[#00E5FF]",
        };
      case "Studio Production":
        return {
          label: "STUDIO PRODUCTION",
          classes: "text-[#F59247] bg-[#F59247]/10 border-[#F59247]/30",
          dot: "bg-[#F59247]",
        };
      case "Internal System":
        return {
          label: "INTERNAL SYSTEM",
          classes: "text-zinc-400 bg-white/[0.04] border-white/[0.12]",
          dot: "bg-zinc-400",
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F4F4F6] relative overflow-x-hidden w-full max-w-full">
      
      {/* Ambient Color Splashes */}
      <div className="absolute top-0 right-1/4 w-[340px] sm:w-[750px] h-[350px] sm:h-[450px] bg-[#00E5FF]/12 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] -left-48 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-[#FF8A00]/8 rounded-full blur-[140px] sm:blur-[170px] pointer-events-none -z-10" />

      {/* Header Banner */}
      <section className="px-4 sm:px-6 pt-20 pb-12 sm:pt-32 sm:pb-16 max-w-6xl mx-auto">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] text-[11px] sm:text-xs font-mono text-[#00E5FF]">
            <Layers className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>J-PLATFORMS // PROPRIETARY SOFTWARE ECOSYSTEM</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-sans">
            The J-Platforms Suite
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            Proprietary digital streaming, event architecture, communication protocols, and operational AI infrastructure engineered and maintained by 36T Studios.
          </p>
        </div>

        {/* Blueprint Architecture Diagram (Matching Master Spec) */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0C0F17] border border-white/[0.08] shadow-2xl overflow-x-auto">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2 text-zinc-400">
              <Activity className="w-3.5 h-3.5 text-[#00E5FF]" />
              Ecosystem Architecture &amp; Platform Taxonomy
            </span>
            <span className="text-zinc-600 hidden sm:inline">Delaware, USA · Studio Foundry</span>
          </div>

          <div className="min-w-[620px] py-4 px-2 text-center font-mono">
            {/* Tree Top */}
            <div className="inline-block px-5 py-2 rounded-xl bg-white/[0.04] border border-[#00E5FF]/40 text-[#00E5FF] text-xs font-bold shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              [ J-PLATFORMS ] Proprietary Software Ecosystem by 36T Studios
            </div>

            {/* Tree Connector */}
            <div className="h-6 w-[1px] bg-white/20 mx-auto" />
            <div className="w-[88%] h-[1px] bg-white/20 mx-auto relative">
              <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-[#00E5FF]" />
              <div className="absolute -top-1 left-1/3 w-2 h-2 rounded-full bg-[#FF8A00]" />
              <div className="absolute -top-1 left-2/3 w-2 h-2 rounded-full bg-[#00E5FF]" />
              <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-[#FF8A00]" />
            </div>

            {/* 4 Suites */}
            <div className="grid grid-cols-4 gap-2 pt-4 text-left">
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-bold text-[#00E5FF] mb-1">STREAMING &amp; MEDIA</div>
                <div className="text-[11px] text-zinc-300">● JStreams Live TV</div>
                <div className="text-[11px] text-zinc-300">● JStreams Studio</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-bold text-[#FF8A00] mb-1">EVENTS &amp; GATHERINGS</div>
                <div className="text-[11px] text-zinc-300">● JEvents Ticketing</div>
                <div className="text-[11px] text-zinc-300">● JConference Mesh</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-bold text-[#00E5FF] mb-1">COMMUNICATION</div>
                <div className="text-[11px] text-zinc-300">● Whisppr Protocol</div>
                <div className="text-[11px] text-zinc-300">● Jposta Asynchr.</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-[10px] font-bold text-[#FF8A00] mb-1">OPERATIONS &amp; AI</div>
                <div className="text-[11px] text-zinc-300">● JAI Support Desk</div>
                <div className="text-[11px] text-zinc-300">● JControl Console</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 pt-8 sm:pt-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full transition-all text-xs font-mono whitespace-nowrap min-h-[38px] ${
                activeCategory === cat.value
                  ? "bg-[#00E5FF] text-black font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  : "bg-[#101216] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="px-4 sm:px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const Icon = getProductIcon(product.id);
            const badge = getStatusBadge(product.status);

            return (
              <div
                key={product.id}
                id={product.id}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#101216] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6 shadow-xl hover:shadow-[0_0_35px_rgba(0,229,255,0.08)] group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Status Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#00E5FF] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-semibold px-3 py-1 rounded-full border ${badge.classes}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${badge.dot} animate-pulse`} />
                      {badge.label}
                    </span>
                  </div>

                  {/* Header Titles */}
                  <div>
                    <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">
                      {product.suite || `${product.category} PLATFORM`}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      {product.name}
                    </h2>
                    <div className="text-xs sm:text-sm font-medium text-[#FF8A00] mt-1 mb-3">
                      {product.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Telemetry / Metrics pills */}
                  {product.metrics && (
                    <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                      {product.metrics.map((m, idx) => (
                        <div key={idx} className="p-2 rounded-xl bg-black/40 border border-white/[0.04]">
                          <span className="text-zinc-500 block text-[9px] uppercase">{m.label}</span>
                          <span className="text-white font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Capabilities */}
                  <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                      Key Technical Capabilities:
                    </div>
                    {product.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3">
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#00E5FF]/10 hover:bg-[#00E5FF] text-[#00E5FF] hover:text-black border border-[#00E5FF]/30 text-xs font-mono font-semibold transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)] min-h-[40px]"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Launch {new URL(product.url).hostname}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 py-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{product.status === "Internal System" ? "Private Studio Access" : "In-House Protocol Mesh"}</span>
                    </div>
                  )}

                  <Link
                    href={`/contact?scope=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors py-2"
                  >
                    <span>License / Integrate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Commission Banner */}
        <div className="mt-16 sm:mt-20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.12] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#00E5FF] block mb-1">
              Enterprise Integration &amp; Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need custom deployment or enterprise white-labeling of the J-Platforms core?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
              Our engineering foundry licenses proprietary protocols and designs bespoke solutions for enterprise partners.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#33EAFF] text-black text-sm font-bold tracking-wide transition-all whitespace-nowrap flex items-center justify-center gap-2 shrink-0 shadow-[0_0_25px_rgba(0,229,255,0.4)] min-h-[44px]"
          >
            <span>Inquire for Enterprise Licensing</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </div>

      </section>

    </div>
  );
}
