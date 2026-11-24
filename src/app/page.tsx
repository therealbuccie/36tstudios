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
  Video,
  Camera,
  Layers
} from "lucide-react";

export default function HomePage() {
  const [reelModalOpen, setReelModalOpen] = useState(false);

  const jPlatforms = [
    {
      name: "JStreams Live TV",
      category: "Media & Streaming",
      status: "Active Pilot",
      tagline: "Live video and streaming broadcast platform.",
      description: "Web-based viewing experience with modern video infrastructure and customer-branded streaming delivery.",
      icon: Tv,
      color: "#F59247",
      href: "/platforms#jstreams",
    },
    {
      name: "JEvents",
      category: "Events & Operations",
      status: "Built & Deployed",
      tagline: "Event ticketing and on-site operations.",
      description: "Complete ticket workflows, QR check-in operations, and payment processing for organizers and attendees.",
      icon: Ticket,
      color: "#00D4F0",
      href: "/platforms#jevents",
    },
    {
      name: "Whisppr",
      category: "Communication",
      status: "Design Blueprint",
      tagline: "Minimal, low-cognitive-load messaging.",
      description: "A calm communication platform prioritizing essential conversation without feature clutter.",
      icon: MessageSquare,
      color: "#F59247",
      href: "/platforms#whisppr",
    },
    {
      name: "JAI",
      category: "Operations & AI",
      status: "Built / Integrating",
      tagline: "AI-assisted customer support infrastructure.",
      description: "Embeddable support widget, intelligent agent handover, and real-time conversation management.",
      icon: Bot,
      color: "#00D4F0",
      href: "/platforms#jai",
    },
  ];

  const services = [
    {
      title: "Video Production",
      desc: "Concept development, filming, and production coordination for brands, events, and original projects.",
      icon: Video,
    },
    {
      title: "Live Streaming & Broadcast",
      desc: "Multi-camera live streaming workflows, event coverage, and high-performance digital distribution.",
      icon: Radio,
    },
    {
      title: "Editing & Post-Production",
      desc: "Video editing, color grading, sound finishing, and multi-format content repurposing.",
      icon: Clapperboard,
    },
    {
      title: "Production Photography",
      desc: "Commercial, event, portrait, and promotional photography for brands and productions.",
      icon: Camera,
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F4F4F6] relative overflow-hidden">
      
      {/* Ambient Color Splashes: Solar Amber & Electric Cyan */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[480px] bg-gradient-to-tr from-[#F59247]/15 via-[#FF7A00]/10 to-[#00D4F0]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[900px] -left-40 w-[500px] h-[500px] bg-[#F59247]/8 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[1700px] -right-40 w-[600px] h-[600px] bg-[#00D4F0]/8 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* 1. Hero Section: Punchy, Explanatory & Catchy */}
      <section className="relative px-6 pt-24 pb-20 sm:pt-36 sm:pb-32 max-w-5xl mx-auto text-center">
        
        {/* Pronunciation & Identity Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-md text-xs font-medium text-zinc-200 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#F59247] shadow-[0_0_8px_#F59247] animate-pulse" />
          <span>36T Studios <span className="text-zinc-400 font-normal">(pronounced &ldquo;360 Studios&rdquo;)</span> · Media &amp; Technology</span>
        </div>

        {/* Catchy, Highly Explanatory Hero Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-8">
          We Create Content.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9F59] via-[#F59247] to-[#00D4F0]">
            We Build Platforms.
          </span>
        </h1>

        {/* Crystal-clear subheadline for first-time visitors */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-300 font-light leading-relaxed mb-10">
          From original films and live broadcast production to our J-Platforms digital software ecosystem, we bring creative production and technology together under one roof.
        </p>

        {/* Primary Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setReelModalOpen(true)}
            className="px-7 py-3.5 rounded-full bg-[#F59247] hover:bg-[#FF9F59] text-black text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(245,146,71,0.4)]"
          >
            <Play className="w-4 h-4 fill-current text-black" />
            <span>Watch Movie BTS Teaser</span>
          </button>

          <Link
            href="/platforms"
            className="px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/40 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2"
          >
            <span>Explore J-Platforms</span>
            <ArrowRight className="w-4 h-4 text-[#F59247]" />
          </Link>
        </div>

        {/* Core Value Props Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/[0.08] text-xs text-zinc-400 max-w-4xl mx-auto">
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <span className="text-white font-semibold block mb-0.5">Creative &amp; Media</span>
            <span>Video, Editing &amp; Photography</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <span className="text-white font-semibold block mb-0.5">Live Production</span>
            <span>Live Streaming &amp; Events</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <span className="text-white font-semibold block mb-0.5">J-Platforms</span>
            <span>Streaming, Tickets &amp; Tools</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
            <span className="text-white font-semibold block mb-0.5">Original Films</span>
            <span>&ldquo;I&apos;ve Got It&rdquo; (Dec 2026)</span>
          </div>
        </div>
      </section>

      {/* 2. Section 1: Featured Film Release — "I'VE GOT IT" */}
      <section id="movie" className="px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59247]">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>01 // Original Feature Film</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Upcoming Christmas Feature Film
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-xl font-light">
                A studio-owned narrative project written and directed by Buchi Onyechere. Supported by custom casting workflows and volunteer production craft.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#F59247] transition-colors"
            >
              <span>View Film, Cast &amp; BTS</span>
              <ArrowRight className="w-4 h-4 text-[#F59247]" />
            </Link>
          </div>
        </div>

        {/* Cinematic Card with Real Landscape Poster */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/[0.12] hover:border-[#F59247]/40 bg-[#111216] aspect-[16/9] sm:aspect-[2.39/1] flex flex-col justify-between p-6 sm:p-10 shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(245,146,71,0.15)]">
          
          <div className="absolute inset-0 z-0">
            <Image
              src="/movies/ive-got-it/poster-landscape.jpg"
              alt="I'VE GOT IT — 36T Studios Presents"
              fill
              className="object-cover object-center opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />
          </div>

          <div className="relative z-20 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/15 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59247] animate-pulse" />
              Original Production // 36T Studios
            </span>
            <span className="text-xs font-bold text-[#F59247] px-3 py-1 rounded-full bg-black/60 border border-[#F59247]/30 flex items-center gap-1.5 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5" />
              Coming December 2026
            </span>
          </div>

          <div className="relative z-20 flex items-center justify-center my-auto">
            <button
              onClick={() => setReelModalOpen(true)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 hover:bg-[#F59247] text-white hover:text-black border border-white/20 hover:border-[#F59247] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_35px_rgba(245,146,71,0.6)]"
              aria-label="Play BTS Video"
            >
              <Play className="w-7 h-7 fill-current ml-1" />
            </button>
          </div>

          <div className="relative z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#F59247] mb-1">
                A Film by Buchi Onyechere
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                I&apos;VE GOT IT
              </h3>
              <p className="text-sm text-zinc-200 max-w-lg mt-1 font-light italic">
                &ldquo;Integrity has an invoice.&rdquo;
              </p>
            </div>
            <Link
              href="/work"
              className="px-5 py-2.5 rounded-full bg-[#F59247] text-black text-xs font-bold tracking-wide transition-all whitespace-nowrap self-start sm:self-auto shadow-md hover:bg-[#FF9F59]"
            >
              Meet the Cast &amp; Crew →
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Section 2: J-Platforms (Digital Product Ecosystem) */}
      <section id="platforms" className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08] relative">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D4F0]">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // Digital Product Ecosystem</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                The J-Platforms Family
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-xl font-light">
                Software tools built under the studio for streaming, ticketing, communication, and customer support.
              </p>
            </div>
            <Link
              href="/platforms"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#00D4F0] transition-colors"
            >
              <span>Explore All J-Platforms</span>
              <ArrowRight className="w-4 h-4 text-[#00D4F0]" />
            </Link>
          </div>
        </div>

        {/* 4 J-Platform Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jPlatforms.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-[#111216] border border-white/[0.08] hover:border-white/[0.18] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/[0.04] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#F59247]" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                        {platform.category}
                      </span>
                      <span className="text-[11px] font-semibold text-[#00D4F0] px-2.5 py-0.5 rounded-full bg-[#00D4F0]/10 border border-[#00D4F0]/20">
                        {platform.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {platform.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#F59247] mt-0.5 mb-2">
                      {platform.tagline}
                    </div>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] mt-6">
                  <Link
                    href={platform.href}
                    className="text-xs font-semibold text-white hover:text-[#F59247] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Platform Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F59247]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Section 3: Studio Services & Capabilities */}
      <section id="services" className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59247]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // Studio Services</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Creative Production &amp; Digital Craft
              </h2>
              <p className="mt-2 text-base text-zinc-400 max-w-xl font-light">
                Professional creative services for brands, events, conferences, and original productions.
              </p>
            </div>
            <Link
              href="/studio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#F59247] transition-colors"
            >
              <span>Learn About Our Studio</span>
              <ArrowRight className="w-4 h-4 text-[#F59247]" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const SrvIcon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#111216] border border-white/[0.08] hover:border-[#F59247]/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/[0.04] text-[#F59247] flex items-center justify-center">
                  <SrvIcon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Section 4: Friendly Inquiries CTA Strip */}
      <section className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#111216] via-[#16171D] to-[#111216] border border-white/[0.12] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F59247]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-lg relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Have a Project, Event, or Platform in Mind?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              We partner with businesses, event organizers, and creative leaders to produce content and build digital experiences that perform.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#F59247] hover:bg-[#FF9F59] text-black text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(245,146,71,0.4)] hover:shadow-[0_0_35px_rgba(245,146,71,0.6)] shrink-0 relative z-10"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Video Modal Playing the Real BTS Video */}
      {reelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="w-full max-w-4xl bg-[#111216] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#08080A]">
              <div className="text-sm font-medium text-white flex items-center gap-2">
                <Play className="w-4 h-4 text-[#F59247] fill-current" />
                <span>I&apos;VE GOT IT // Behind The Scenes (BTS)</span>
              </div>
              <button
                onClick={() => setReelModalOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full bg-black relative">
              <video
                src="/movies/ive-got-it/bts-video.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="px-6 py-4 bg-[#08080A] border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
              <span className="text-[#F59247] font-semibold">In Theaters December 2026</span>
              <Link
                href="/work"
                onClick={() => setReelModalOpen(false)}
                className="text-white hover:text-[#F59247] font-medium flex items-center gap-1"
              >
                <span>View Full Cast &amp; Film Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
