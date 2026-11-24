"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  ArrowUpRight, 
  ArrowRight, 
  Tv, 
  Ticket, 
  Radio, 
  MessageSquare, 
  Bot, 
  Calendar,
  Sparkles,
  X,
  Clapperboard,
  ShieldCheck,
  Cpu,
  Layers,
  Compass,
  Boxes,
  Code2,
  Building2,
  Lock,
  Volume2,
  Terminal,
  Activity
} from "lucide-react";
import { SoftwarePeek } from "@/components/home/SoftwarePeek";

export default function HomePage() {
  const [reelModalOpen, setReelModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F4F4F6] relative overflow-hidden">
      
      {/* Ambient Color Splashes: Cold Cyan & Solar Amber */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[520px] bg-gradient-to-tr from-[#00E5FF]/15 via-[#00D4F0]/10 to-[#F59247]/12 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[1000px] -left-48 w-[550px] h-[550px] bg-[#00E5FF]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[2200px] -right-48 w-[600px] h-[600px] bg-[#F59247]/8 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* ======================================================== */}
      {/* 1. HERO SECTION (100% Tech-Focused)                      */}
      {/* ======================================================== */}
      <section className="relative px-6 pt-24 pb-12 sm:pt-36 sm:pb-16 max-w-6xl mx-auto text-center">
        
        {/* Top Tech Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.14] bg-white/[0.04] backdrop-blur-md text-xs font-mono font-medium text-zinc-200 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse" />
          <span>Software &amp; Systems Lab</span>
        </div>

        {/* Headline: Crisp White top line, Warm Amber to Cold Cyan bottom gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-8 font-sans">
          Next-Generation Platforms.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59247] via-[#00D4F0] to-[#00E5FF]">
            Engineered For Scale.
          </span>
        </h1>

        {/* Infrastructure & Software Subhead */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-10">
          36T Studios builds proprietary real-time communication protocols, planar touch operating interfaces, and high-throughput media infrastructure.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Link
            href="/platforms"
            className="px-8 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#33EAFF] text-black text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)]"
          >
            <span>Explore Platforms</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>

          <a
            href="#ecosystem"
            className="px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/40 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <span>View Ecosystem</span>
          </a>
        </div>

        {/* Software Peek Visual Hook (Top 220px peeking above the fold) */}
        <SoftwarePeek />

      </section>

      {/* ======================================================== */}
      {/* 2. SECTION 2: PROPRIETARY PLATFORMS (Flagship Products)  */}
      {/* ======================================================== */}
      <section id="ecosystem" className="px-6 py-20 sm:py-28 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-16 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>01 // Proprietary Platforms</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                The Software Ecosystem
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-2xl font-light">
                High-throughput, low-latency platforms engineered in-house for real-time human interaction, gestural interfaces, and edge media distribution.
              </p>
            </div>
            <Link
              href="/platforms"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#00E5FF] transition-colors"
            >
              <span>Explore All Specifications</span>
              <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
            </Link>
          </div>
        </div>

        {/* 3 Core Flagship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Whisppr */}
          <div className="group rounded-3xl p-8 bg-[#101216] border border-white/[0.08] hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,229,255,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-[#00E5FF] border border-[#00E5FF]/20">
                  REAL-TIME TRANSPORT
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Whisppr</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                Ultra-low latency acoustic and video transport powered by edge WebRTC and end-to-end security. Minimal cognitive load, zero-distraction protocol.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Latency</span>
                  <span className="text-white font-semibold">&lt; 15ms RTT</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Security</span>
                  <span className="text-emerald-400 font-semibold">AES-256 E2EE</span>
                </div>
              </div>
              <Link 
                href="/platforms#whisppr"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00E5FF] group-hover:translate-x-1 transition-transform"
              >
                <span>Read Blueprint Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: jOS */}
          <div className="group rounded-3xl p-8 bg-[#101216] border border-white/[0.08] hover:border-[#F59247]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(245,146,71,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F59247]/10 border border-[#F59247]/20 flex items-center justify-center text-[#F59247]">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-[#F59247] border border-[#F59247]/20">
                  TOUCH OS SHELL
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">jOS</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                An experimental planar touch operating environment built for unified gestural navigation on modern mobile hardware. Eliminates app silos through spatial physics.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Interface</span>
                  <span className="text-white font-semibold">Planar Fluid</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Architecture</span>
                  <span className="text-[#F59247] font-semibold">Micro-Kernel</span>
                </div>
              </div>
              <Link 
                href="/platforms#jos"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#F59247] group-hover:translate-x-1 transition-transform"
              >
                <span>Read Shell Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: JStream */}
          <div className="group rounded-3xl p-8 bg-[#101216] border border-white/[0.08] hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,229,255,0.12)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] text-[#00E5FF] border border-[#00E5FF]/20">
                  MEDIA DISTRIBUTION
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">JStream</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                High-throughput distributed media distribution engine optimized for real-time video delivery, live broadcasts, and customer-branded streaming delivery.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.06]">
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Ingestion</span>
                  <span className="text-white font-semibold">Sub-second</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-zinc-500 block text-[10px]">Distribution</span>
                  <span className="text-emerald-400 font-semibold">Global CDN</span>
                </div>
              </div>
              <Link 
                href="/platforms#jstreams"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00E5FF] group-hover:translate-x-1 transition-transform"
              >
                <span>View Engine Status</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Supplementary Ecosystem Row: JEvents, JAI, JConference */}
        <div className="rounded-2xl p-6 bg-white/[0.02] border border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Ticket className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-semibold text-white block">JEvents</span>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                Event ticketing, order workflows, and QR access operations engine.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Bot className="w-5 h-5 text-[#F59247] shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-semibold text-white block">JAI Support Protocol</span>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                Autonomous support architecture, widget, and dashboard integration.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Radio className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-semibold text-white block">JConference</span>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                High-density video meeting and interactive conference platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SECTION 3: DESIGN SYSTEMS (Visual Architecture)       */}
      {/* ======================================================== */}
      <section id="design" className="px-6 py-20 sm:py-28 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F59247]">
            <Boxes className="w-3.5 h-3.5 text-[#F59247]" />
            <span>02 // Visual Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Design Systems For Modern Software
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl font-light">
            Monolithic vector trademarks, typography frameworks, and identity suites engineered for software and modern brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
              <Compass className="w-5 h-5 text-[#F59247]" />
            </div>
            <h3 className="text-lg font-bold text-white">Vector Trademarks</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Pure geometric vector marks engineered to scale from 16px favicons to physical architectural signage with high visual contrast.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              POLYGONAL / MONOCHROME / PRECISION
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
              <Code2 className="w-5 h-5 text-[#00E5FF]" />
            </div>
            <h3 className="text-lg font-bold text-white">Typography Frameworks</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Rigorous typographic scales combining grotesque sans serifs with strict monospaced telemetry grids for high-density dashboards.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              SWISS-GERMAN / VARIABLE OPTICAL SIZES
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
              <Layers className="w-5 h-5 text-[#F59247]" />
            </div>
            <h3 className="text-lg font-bold text-white">Hardware &amp; Enclosures</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Industrial design, tactile button physicalities, and anodized aluminum enclosures for custom hardware prototypes and spatial devices.
            </p>
            <div className="pt-2 text-xs font-mono text-zinc-500">
              HARDWARE CHASSIS / SPATIAL ERGONOMICS
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SECTION 4: 36T MEDIA LAB (Cinema & Production)        */}
      {/* ======================================================== */}
      <section id="media" className="px-6 py-20 sm:py-28 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF]">
            <Clapperboard className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>03 // Narrative &amp; Cinema Lab</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                Cinema Built On Our Pipeline
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-2xl font-light">
                We engineer both the infrastructure and the narrative experiences that live on it. 36T Media writes and produces independent, character-driven feature films for international theatrical and streaming release.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#00E5FF] transition-colors"
            >
              <span>Full Production Slate &amp; Cast</span>
              <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
            </Link>
          </div>
        </div>

        {/* Clean 16:9 Widescreen Trailer Container with Minimal Letterbox */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/[0.12] hover:border-[#00E5FF]/40 bg-[#101216] aspect-[16/9] sm:aspect-[2.39/1] flex flex-col justify-between p-6 sm:p-10 shadow-2xl transition-all duration-500">
          
          {/* Background Image: Original Film Landscape Poster */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/movies/ive-got-it/poster-landscape.jpg"
              alt="I'VE GOT IT — 36T Studios Narrative Film"
              fill
              className="object-cover object-center opacity-65 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />
          </div>

          {/* Top Metadata */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-zinc-300">
            <span className="px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              ORIGINAL NARRATIVE FEATURE // DECEMBER 2026
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40 backdrop-blur-md font-semibold">
              IN PRODUCTION
            </span>
          </div>

          {/* Bottom Film Logline & Interactive Watch Showreel Trigger */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-12">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-[#F59247] block mb-1">
                A Film by Buchi Onyechere
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
                View Cast
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SECTION 5: SPATIAL & RESIDENCES                       */}
      {/* ======================================================== */}
      <section id="spatial" className="px-6 py-20 sm:py-24 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F59247]">
              <Building2 className="w-3.5 h-3.5 text-[#F59247]" />
              <span>04 // Spatial &amp; Residencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Curated Suites for Engineering &amp; Creative Teams
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Turnkey architectural residences and sound-isolated creative environments in prime technology hubs. Reserved for resident founders, touring cinema directors, and engineering task forces.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-4 text-xs font-mono text-zinc-300">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="block text-zinc-500 text-[10px]">Acoustics</span>
                <span className="font-semibold text-white">Sound-Isolated</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="block text-zinc-500 text-[10px]">Connectivity</span>
                <span className="font-semibold text-white">Dedicated 10Gbps</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#101216] border border-white/[0.08] space-y-4">
            <span className="text-xs font-mono uppercase text-[#00E5FF] tracking-wider block">
              Residency Charter
            </span>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              36T Living environments are managed spaces built to eliminate friction for teams shipping critical hardware, software releases, or narrative post-production.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-[#00E5FF] transition-colors"
              >
                <span>Inquire for Executive Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. BOTTOM INQUIRY CALL TO ACTION                         */}
      {/* ======================================================== */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center border-t border-white/[0.08]">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] block">
            Direct Departmental Transmission
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Ready to Build With 36T?
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Whether deploying on our J-Platforms infrastructure, licensing software protocols, or collaborating on narrative cinema, our engineering and production directors are standing by.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-sm font-bold tracking-wide transition-all inline-flex items-center gap-2 shadow-xl"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        </div>
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

            <div className="p-4 sm:p-6 bg-[#07080A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-white font-semibold block">I&apos;VE GOT IT — Production Footage</span>
                <span className="text-zinc-400 font-light">Written &amp; Directed by Buchi Onyechere · 36T Media Lab</span>
              </div>
              <Link
                href="/work"
                onClick={() => setReelModalOpen(false)}
                className="text-[#00E5FF] hover:underline font-semibold font-mono"
              >
                View Full Film &amp; Cast Page →
              </Link>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
