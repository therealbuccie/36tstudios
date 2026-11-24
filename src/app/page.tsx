"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  ArrowUpRight, 
  ArrowRight, 
  Tv, 
  MessageSquare, 
  Layers, 
  X, 
  Clapperboard, 
  Code2, 
  Server, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Calendar,
  Send,
  Boxes,
  Cpu
} from "lucide-react";
import { SoftwarePeek } from "@/components/home/SoftwarePeek";

export default function HomePage() {
  const [reelModalOpen, setReelModalOpen] = useState(false);
  
  // Interactive Project Intake Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formScope, setFormScope] = useState<"custom" | "license" | "design">("custom");
  const [formTimeline, setFormTimeline] = useState<"q1" | "q2" | "flexible">("q1");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F4F4F6] relative overflow-hidden">
      
      {/* Ambient Color Splashes: Cold Electric Cyan (#00E5FF) & Warm Solar Amber (#FF8A00) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[520px] bg-gradient-to-tr from-[#00E5FF]/15 via-[#00D4F0]/10 to-[#FF8A00]/12 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[1100px] -left-48 w-[550px] h-[550px] bg-[#00E5FF]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[2300px] -right-48 w-[600px] h-[600px] bg-[#FF8A00]/8 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* ======================================================== */}
      {/* 1. HERO COMPONENT: Software Architecture & Product Foundry */}
      {/* ======================================================== */}
      <section className="relative px-6 pt-24 pb-12 sm:pt-36 sm:pb-16 max-w-6xl mx-auto text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.14] bg-white/[0.04] backdrop-blur-md text-xs font-mono font-medium text-zinc-200 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse" />
          <span>● Software Architecture &amp; Product Foundry</span>
        </div>

        {/* Master Headline: Line 1 Solid White, Line 2 Amber-to-Cyan Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.92] mb-8 font-sans">
          Software Architecture.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#F59247] to-[#00E5FF]">
            Built Without Compromise.
          </span>
        </h1>

        {/* Studio Positioning Subhead */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-10">
          36T Studios builds proprietary digital platforms and partners with ambitious enterprises to engineer custom mobile applications, real-time systems, and scalable infrastructure.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#33EAFF] text-black text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </a>

          <a
            href="#products"
            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/40 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Monospaced Capability Ribbon */}
        <div className="max-w-4xl mx-auto py-3 px-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-[11px] sm:text-xs font-mono text-zinc-400 tracking-wider overflow-x-auto whitespace-nowrap mb-6 scrollbar-none">
          <span>ENTERPRISE APP DEVELOPMENT</span>
          <span className="text-[#00E5FF] mx-3">//</span>
          <span>WEBRTC REAL-TIME AUDIO</span>
          <span className="text-[#00E5FF] mx-3">//</span>
          <span>CUSTOM TOUCH ENVIRONMENTS</span>
          <span className="text-[#00E5FF] mx-3">//</span>
          <span>PROPRIETARY IP LICENSING</span>
        </div>

        {/* Scroll Hook: Top 180px of hardware-grade interface peeking above the fold */}
        <div className="relative">
          <SoftwarePeek />
        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SECTION 1: PROPRIETARY APPLICATIONS (Ready to License)*/}
      {/* ======================================================== */}
      <section id="products" className="px-6 py-20 sm:py-28 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-16 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
            <Cpu className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>01 // In-House Intellectual Property</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                Proprietary Platforms
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-2xl font-light">
                In-house software available for enterprise licensing, direct SDK integration, and turnkey deployment.
              </p>
            </div>
            <Link
              href="/platforms"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#00E5FF] transition-colors"
            >
              <span>Explore Technical Whitepapers</span>
              <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
            </Link>
          </div>
        </div>

        {/* 3 Core Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Product 1: Whisppr */}
          <div className="group rounded-3xl p-8 bg-[#101216] border border-white/[0.08] hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,229,255,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                  Available for License / SDK
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Whisppr</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                Edge-native encrypted voice and video calling architecture powered by low-latency WebRTC and hardware-accelerated codecs.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Latency</span>
                  <span className="text-white font-semibold">&lt; 12ms Edge</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Encryption</span>
                  <span className="text-emerald-400 font-semibold">AES-256 GCM</span>
                </div>
              </div>
              <a 
                href="#contact"
                onClick={() => setFormScope("license")}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00E5FF] group-hover:translate-x-1 transition-transform"
              >
                <span>Request SDK Access</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product 2: JStream */}
          <div className="group rounded-3xl p-8 bg-[#101216] border border-white/[0.08] hover:border-[#FF8A00]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(255,138,0,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00]">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#FF8A00]/10 text-[#FF8A00] border border-[#FF8A00]/30">
                  Enterprise Infrastructure
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">JStream</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                Distributed media streaming and content delivery core designed for sub-second live ingestion, multi-region relays, and client-branded playback.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Ingestion</span>
                  <span className="text-white font-semibold">Sub-Second</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Architecture</span>
                  <span className="text-[#FF8A00] font-semibold">Multi-Region Edge</span>
                </div>
              </div>
              <a 
                href="#contact"
                onClick={() => setFormScope("license")}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#FF8A00] group-hover:translate-x-1 transition-transform"
              >
                <span>Inquire for Deployment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product 3: jOS */}
          <div className="group rounded-3xl p-8 bg-[#101216] border border-white/[0.08] hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,229,255,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.12]">
                  Core Research
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">jOS</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                Experimental planar mobile operating system shell. Replaces rigid application silos with spatial fluid physics and continuous interaction canvases.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Interaction</span>
                  <span className="text-white font-semibold">Planar Spatial</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Kernel</span>
                  <span className="text-[#00E5FF] font-semibold">Micro-Engine</span>
                </div>
              </div>
              <Link 
                href="/platforms#jos"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00E5FF] group-hover:translate-x-1 transition-transform"
              >
                <span>Read Research Paper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SECTION 2: CLIENT ENGINEERING ("Build With Us")       */}
      {/* ======================================================== */}
      <section id="engineering" className="px-6 py-20 sm:py-28 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF8A00]">
            <Code2 className="w-3.5 h-3.5 text-[#FF8A00]" />
            <span>02 // Client Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Client Engineering &amp; Ventures
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl font-light">
            We partner with visionary founders and enterprises to architect, design, and deploy mission-critical software.
          </p>
        </div>

        {/* 3 Service Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4 hover:border-white/20 transition-all">
            <div className="text-xs font-mono text-[#00E5FF] font-semibold">
              01 // FULL-STACK FOUNDRY
            </div>
            <h3 className="text-xl font-bold text-white">Complete Platform Build</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Turnkey engineering from wireframes and technical scoping to cloud deployment, automated CI/CD pipelines, and app store submissions.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-mono text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                iOS / Android Native &amp; Cross-Platform
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                TypeScript / Rust / Next.js Full-Stack
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                SOC-2 Compliant Cloud Architecture
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4 hover:border-white/20 transition-all">
            <div className="text-xs font-mono text-[#FF8A00] font-semibold">
              02 // SYSTEMS &amp; INFRASTRUCTURE
            </div>
            <h3 className="text-xl font-bold text-white">Real-Time Infrastructure</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Custom low-latency WebRTC pipelines, distributed media ingestion, edge caching, and scalable websocket microservices.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-mono text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                Sub-20ms Audio/Video Transport
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                Edge Compute &amp; Serverless Workflows
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                Autonomous AI Agent Handover
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4 hover:border-white/20 transition-all">
            <div className="text-xs font-mono text-[#00E5FF] font-semibold">
              03 // PRODUCT DESIGN
            </div>
            <h3 className="text-xl font-bold text-white">Design Systems &amp; Brand</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Monolithic vector marks, custom typography scales, high-density telemetry interfaces, and tactile design systems.
            </p>
            <ul className="space-y-2 pt-2 text-xs font-mono text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                Swiss-German Typographic Hierarchy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                Framer / Figma / Code Connect Tokens
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                Hardware Chassis &amp; Industrial Mockups
              </li>
            </ul>
          </div>

        </div>

        {/* Client Booking CTA Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.12] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#FF8A00] block mb-1">
              Commission Availability
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Have a product in mind? We are currently booking Q1/Q2 client commissions.
            </h3>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-sm font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-2 shrink-0 shadow-xl"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SECTION 3: NARRATIVE & CREATIVE LAB (Film Division)   */}
      {/* ======================================================== */}
      <section id="media" className="px-6 py-20 sm:py-28 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
            <Clapperboard className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>03 // Narrative &amp; Cinema Division</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                Narrative &amp; Visual Media
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-2xl font-light">
                Beyond software, we produce original cinema. 36T Media develops character-driven feature films for international theatrical and streaming distribution.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#00E5FF] transition-colors"
            >
              <span>Explore Anonymized Slate</span>
              <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
            </Link>
          </div>
        </div>

        {/* 16:9 Cinematic Video Frame with Anonymized Release Slate */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/[0.12] hover:border-[#00E5FF]/40 bg-[#101216] aspect-[16/9] sm:aspect-[2.39/1] flex flex-col justify-between p-6 sm:p-10 shadow-2xl transition-all duration-500">
          
          <div className="absolute inset-0 z-0">
            <Image
              src="/movies/ive-got-it/poster-landscape.jpg"
              alt="36T Media Narrative Slate"
              fill
              className="object-cover object-center opacity-65 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-300">
            <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              ORIGINAL THEATRICAL RELEASE SLATE // DECEMBER 2026
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40 backdrop-blur-md font-semibold">
              IN PRODUCTION
            </span>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-12">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#FF8A00] block mb-1">
                A 36T Media Original
              </span>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                I&apos;VE GOT IT
              </h3>
              <p className="text-sm text-zinc-300 font-light mt-1 italic">
                &ldquo;Integrity has an invoice.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setReelModalOpen(true)}
                className="px-6 py-3 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current text-black" />
                <span>Watch Showreel</span>
              </button>
              <Link
                href="/work"
                className="px-6 py-3 rounded-full bg-black/70 hover:bg-black border border-white/20 text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                View Slate
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. PROJECT INTAKE FORM: MetaLab & ustwo-Style Foundry Form*/}
      {/* ======================================================== */}
      <section id="contact" className="px-6 py-20 sm:py-28 max-w-4xl mx-auto border-t border-white/[0.08] relative">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] text-xs font-mono text-[#00E5FF]">
            <Sparkles className="w-3 h-3" />
            <span>Direct Foundry Intake</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Start a Project
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-lg mx-auto">
            Tell us about your upcoming software build, platform licensing requirements, or custom engineering commission.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-10 rounded-3xl bg-[#101216] border border-[#00E5FF]/40 text-center space-y-4 shadow-[0_0_50px_rgba(0,229,255,0.15)] animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">Project Brief Dispatched</h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto font-light leading-relaxed">
              Thank you, <span className="text-[#00E5FF] font-semibold">{formData.name}</span>. An engineering director from our Delaware office will review your scope and respond within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4"
              >
                Submit another project inquiry
              </button>
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-8 shadow-2xl"
          >
            {/* Scope Selection Pills */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                01 // Select Project Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFormScope("custom")}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-mono transition-all ${
                    formScope === "custom"
                      ? "bg-[#00E5FF]/10 border-[#00E5FF] text-white shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                      : "bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <span className="block font-semibold text-white mb-0.5">Build Custom Software</span>
                  <span className="text-[10px] text-zinc-400">Turnkey engineering</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormScope("license")}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-mono transition-all ${
                    formScope === "license"
                      ? "bg-[#FF8A00]/10 border-[#FF8A00] text-white shadow-[0_0_15px_rgba(255,138,0,0.2)]"
                      : "bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <span className="block font-semibold text-white mb-0.5">License Platform IP</span>
                  <span className="text-[10px] text-zinc-400">Whisppr / JStream SDK</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormScope("design")}
                  className={`p-3.5 rounded-2xl text-left border text-xs font-mono transition-all ${
                    formScope === "design"
                      ? "bg-[#00E5FF]/10 border-[#00E5FF] text-white shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                      : "bg-white/[0.02] border-white/[0.08] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <span className="block font-semibold text-white mb-0.5">Design Systems &amp; Brand</span>
                  <span className="text-[10px] text-zinc-400">High-density interfaces</span>
                </button>
              </div>
            </div>

            {/* Client Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                  Client / Lead Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00E5FF] transition-colors"
                />
              </div>
            </div>

            {/* Timeline Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                02 // Target Timeline
              </label>
              <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setFormTimeline("q1")}
                  className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                    formTimeline === "q1"
                      ? "bg-white/10 border-white text-white font-semibold"
                      : "bg-black/30 border-white/[0.08] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  Q1 2026 (Immediate)
                </button>
                <button
                  type="button"
                  onClick={() => setFormTimeline("q2")}
                  className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                    formTimeline === "q2"
                      ? "bg-white/10 border-white text-white font-semibold"
                      : "bg-black/30 border-white/[0.08] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  Q2 2026 (1-3 Mos)
                </button>
                <button
                  type="button"
                  onClick={() => setFormTimeline("flexible")}
                  className={`py-2.5 px-3 rounded-xl border text-center transition-all ${
                    formTimeline === "flexible"
                      ? "bg-white/10 border-white text-white font-semibold"
                      : "bg-black/30 border-white/[0.08] text-zinc-400 hover:border-white/20"
                  }`}
                >
                  Exploration
                </button>
              </div>
            </div>

            {/* Project Overview Message */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                03 // Project Scope &amp; Technical Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Describe your product architecture, target platforms, or licensing requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#00E5FF] hover:bg-[#33EAFF] text-black text-sm font-bold tracking-wide transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Submit Project Brief</span>
            </button>
          </form>
        )}
      </section>

      {/* Behind-The-Scenes / Showreel Modal Player */}
      {reelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#101216] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider text-white">
                  36T MEDIA LAB // BEHIND THE SCENES
                </span>
              </div>
              <button
                onClick={() => setReelModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full bg-black relative flex items-center justify-center">
              <video
                src="/movies/ive-got-it/bts-video.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-4 sm:p-6 bg-[#07080A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <div>
                <span className="text-white font-semibold block">I&apos;VE GOT IT — Production Slate</span>
                <span className="text-zinc-400 font-light">Original Narrative Cinema · 36T Media Division</span>
              </div>
              <Link
                href="/work"
                onClick={() => setReelModalOpen(false)}
                className="text-[#00E5FF] hover:underline font-semibold"
              >
                View Full Production Ledger →
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
