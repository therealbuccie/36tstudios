"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  ArrowRight, 
  ArrowUpRight, 
  Search, 
  Cpu, 
  Zap, 
  Radio, 
  Layers, 
  X, 
  CheckCircle2, 
  Send 
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [reelModalOpen, setReelModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Software Architecture",
    message: "",
  });

  const services = [
    {
      id: "media",
      category: "Original Media & Film",
      title: "Video Production",
      subtitle: "High-stakes narrative feature films, commercial cinematography, and complete studio post-production.",
      image: "/neomathic/capabilities/camera-3d.jpg",
      link: "/media",
      isExternal: false,
    },
    {
      id: "software",
      category: "Platform Engineering",
      title: "Software Architecture",
      subtitle: "Custom mobile apps, low-latency WebRTC communications, and full-stack enterprise cloud platforms.",
      image: "/neomathic/capabilities/code-3d.jpg",
      link: "/platforms",
      isExternal: false,
    },
    {
      id: "design",
      category: "Visual Systems",
      title: "Brand Direction",
      subtitle: "Agency-grade vector marks, custom typographic design systems, and digital packaging architecture.",
      image: "/neomathic/capabilities/design-3d.jpg",
      link: "/design",
      isExternal: false,
    },
    {
      id: "streaming",
      category: "J-Platforms Infrastructure",
      title: "Streaming Networks",
      subtitle: "Scalable CDN delivery, browser-based portrait live studios, and real-time interactive broadcast tools.",
      image: "/neomathic/capabilities/streaming-3d.jpg",
      link: "https://jstreams.pro",
      isExternal: true,
    },
  ];

  const capabilitiesStats = [
    {
      value: "100%",
      label: "Proprietary Codebase & Custom Architecture",
      icon: <Cpu className="w-5 h-5 text-[#00E5FF]" />,
    },
    {
      value: "< 20ms",
      label: "Ultra-Low Global Edge Mesh Latency",
      icon: <Zap className="w-5 h-5 text-[#00E5FF]" />,
    },
    {
      value: "99.98%",
      label: "Platform SLA & Stream Availability",
      icon: <Radio className="w-5 h-5 text-[#00E5FF]" />,
    },
    {
      value: "4+",
      label: "Core Production & Software Disciplines",
      icon: <Layers className="w-5 h-5 text-[#C084FC]" />,
    },
  ];

  const projects = [
    {
      id: "proj-photo",
      title: "Photography Showcase",
      tag: "Photography",
      image: "/neomathic/project-photo.png",
      link: "/work",
    },
    {
      id: "proj-video",
      title: "Video Production Studio",
      tag: "Video Production",
      image: "/neomathic/project-video.png",
      link: "https://studio.jstreams.pro",
    },
    {
      id: "proj-web",
      title: "Web Development Ecosystem",
      tag: "Web Development",
      image: "/neomathic/project-laptop.png",
      link: "https://jstreams.pro",
    },
  ];

  const filteredServices = searchQuery.trim() === ""
    ? services
    : services.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0A14] text-[#FFFFFF] relative overflow-x-hidden selection:bg-[#C084FC] selection:text-black">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Pristine Ultra-HD 3D Composition)        */}
      {/* ======================================================== */}
      <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto min-h-[96vh] flex flex-col justify-between overflow-hidden">
        
        {/* Full Ultra-HD Background Scene (Pristine 3D Render) */}
        <div className="absolute inset-0 pointer-events-none select-none -z-10">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/neomathic/hero-hires.jpg"
              alt="Neomathic 3D Arch and Crystal Scene"
              fill
              className="object-cover object-[center_right] sm:object-right-top drop-shadow-[0_25px_60px_rgba(192,132,252,0.35)]"
              priority
              quality={98}
            />
          </div>

          {/* Atmospheric Overlays for maximum text contrast and seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A14]/95 via-[#0B0A14]/65 to-transparent w-full sm:w-[65%]" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0B0A14]/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0B0A14] via-[#0B0A14]/85 to-transparent" />
        </div>

        {/* Top-Right Floating Script & Pagination (Exact Match) */}
        <div className="absolute top-24 sm:top-28 right-6 sm:right-12 hidden md:flex flex-col items-end text-right z-10 select-none">
          <span className="font-serif italic text-2xl lg:text-3xl tracking-wide bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-md">
            Create<br />Build<br />Grow
          </span>
          <div className="flex items-center gap-2 mt-4 text-[11px] font-mono text-zinc-400">
            <span className="text-white font-bold">01</span>
            <span className="w-4 h-[1px] bg-white/40" />
            <span>02</span>
            <span>03</span>
          </div>
        </div>

        {/* Hero Left Content Block */}
        <div className="max-w-2xl relative z-10 pt-4 sm:pt-8">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-xl mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] shadow-[0_0_8px_#C084FC] animate-pulse" />
            <span className="font-mono text-[10px] xs:text-xs uppercase tracking-widest text-zinc-200 font-medium">
              CREATIVE · DIGITAL · MODERN
            </span>
          </div>

          {/* Monolithic Headline */}
          <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[5.25rem] font-black tracking-tight leading-[1.04] font-sans">
            <span className="block text-white">Ideas into</span>
            <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#E9D5FF] to-[#C084FC] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(192,132,252,0.4)]">
              Amazing
            </span>
            <span className="block bg-gradient-to-r from-[#D8B4FE] via-[#C084FC] to-[#818CF8] bg-clip-text text-transparent">
              Experiences.
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-zinc-300 text-sm xs:text-base sm:text-lg max-w-xl leading-relaxed font-light">
            We design, develop and create digital experiences that make brands stand out.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-4">
            <a
              href="#services"
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] transition-all flex items-center justify-center gap-2 group min-h-[46px]"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => setReelModalOpen(true)}
              className="px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-sm backdrop-blur-xl transition-all flex items-center justify-center gap-2.5 min-h-[46px]"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current text-white ml-0.5" />
              </div>
              <span>Watch Showreel</span>
            </button>
          </div>

        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SECTION: "OUR CAPABILITIES // WHAT WE DO"              */}
      {/* ======================================================== */}
      <section id="services" className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase block mb-2">
              OUR CAPABILITIES // 01
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight font-sans">
              What <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">We Do</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:max-w-md">
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              From proprietary cloud infrastructure to original cinema, we engineer scalable digital experiences under one roof.
            </p>
            <Link
              href="/platforms"
              className="text-xs font-mono text-zinc-300 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5 backdrop-blur-sm"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Floating Interactive Search & Filter Capsule */}
        <div className="mb-10 sm:mb-12 w-full max-w-2xl mx-auto relative z-20">
          <div className="backdrop-blur-2xl bg-white/[0.06] border border-white/15 rounded-full p-2 pl-5 sm:pl-6 shadow-2xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                type="text"
                placeholder="Search platforms, services, productions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-zinc-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 flex items-center justify-center transition-colors text-xs"
                  title="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
              <span className="bg-black/80 text-white text-xs px-4 py-2 rounded-full border border-white/10 font-mono flex items-center gap-1.5 shrink-0 select-none">
                <span>2025</span>
                <span className="text-[10px] text-zinc-500">⌄</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4 Responsive Glassmorphism 2.0 Capabilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const CardInner = (
              <div className="glass-card-2 p-6 flex flex-col justify-between relative overflow-hidden group h-full">
                {/* Tactile Chassis Corner Screw Dots */}
                <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-white/20 border border-white/10" />
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/20 border border-white/10" />

                {/* 3D Asset Placement */}
                <div className="bg-black/30 rounded-2xl border border-white/5 aspect-square overflow-hidden p-3 flex items-center justify-center relative w-full mb-5 shadow-inner">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Card Information */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#00E5FF] font-medium block mb-1">
                      {service.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-white transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 font-light leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Micro-Interaction Action Bottom Bar */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      0{index + 1} // DISCIPLINE
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/12 text-zinc-300 flex items-center justify-center shrink-0 group-hover:bg-[#00E5FF] group-hover:text-black group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.45)] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                {service.isExternal ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full cursor-pointer focus:outline-none"
                    aria-label={`Explore ${service.title}`}
                  >
                    {CardInner}
                  </a>
                ) : (
                  <Link
                    href={service.link}
                    className="block h-full cursor-pointer focus:outline-none"
                    aria-label={`Explore ${service.title}`}
                  >
                    {CardInner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Full-Width Connected Glass Metrics Ribbon (Section 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 rounded-3xl p-6 sm:px-8 sm:py-6 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-white/12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0 sm:divide-x divide-white/[0.08]"
        >
          {capabilitiesStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 px-2 sm:px-6 py-2 sm:py-0">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,229,255,0.1)] group-hover:border-[#00E5FF]/40 transition-colors">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400 font-light mt-0.5 leading-snug">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </section>

      {/* ======================================================== */}
      {/* 3. SECTION: "FEATURED WORK / RECENT PROJECTS"             */}
      {/* ======================================================== */}
      <section id="projects" className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto relative border-t border-white/[0.08]">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Recent <span className="text-[#C084FC]">Projects</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-white tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 backdrop-blur-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Large Showcase Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <Link
              key={proj.id}
              href={proj.link}
              target={proj.link.startsWith("http") ? "_blank" : undefined}
              rel={proj.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-3xl p-3 sm:p-3.5 bg-[#151326]/70 border border-white/10 hover:border-white/25 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Top-Right External Link Pill */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Tag Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[11px] font-mono text-zinc-200">
                    {proj.tag}
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </section>

      {/* ======================================================== */}
      {/* 4. SECTION: "LET'S WORK TOGETHER / BRING YOUR VISION"    */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-7xl mx-auto relative">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#17142E] via-[#1D183B] to-[#120F24] p-8 sm:p-14 lg:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
          
          {/* Background Arch Art Slice */}
          <div className="absolute top-0 right-0 w-full sm:w-[60%] h-full pointer-events-none select-none opacity-40 sm:opacity-90 -z-0">
            <Image
              src="/neomathic/cta-arch.png"
              alt="Twilight Sunset Archway"
              fill
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#17142E] via-[#17142E]/70 to-transparent" />
          </div>

          {/* Left Content Area */}
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D8B4FE] font-bold block">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
              Bring Your<br />
              <span className="bg-gradient-to-r from-[#FFFFFF] via-[#E9D5FF] to-[#C084FC] bg-clip-text text-transparent">
                Vision to Life.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light max-w-md pt-1">
              Creative solutions for a brighter digital future.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] transition-all inline-flex items-center gap-2 group shadow-xl"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. MODALS: SHOWREEL & DIRECT INTAKE FORM                 */}
      {/* ======================================================== */}

      {/* Behind-The-Scenes / Showreel Modal Player */}
      {reelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#141226] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C084FC] animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider text-white">
                  36T MEDIA LAB // BEHIND THE SCENES SHOWREEL
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

            <div className="p-4 sm:p-6 bg-[#0B0A14] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <div>
                <span className="text-white font-semibold block">I&apos;VE GOT IT — Production Slate</span>
                <span className="text-zinc-400 font-light">Original Narrative Cinema · 36T Media Division</span>
              </div>
              <Link
                href="/work"
                onClick={() => setReelModalOpen(false)}
                className="text-[#C084FC] hover:underline font-semibold"
              >
                View Full Production Ledger →
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Interactive Get in Touch / Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#151326] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C084FC]" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                  Direct Foundry Commission
                </span>
              </div>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="p-1 text-zinc-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-[#C084FC]/10 border border-[#C084FC]/30 text-[#C084FC] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Dispatched</h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  Thank you, <span className="text-[#C084FC] font-semibold">{formData.name}</span>. An engineering director will reach back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setQuoteModalOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold mt-4"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">Start a Project</h3>
                  <p className="text-xs text-zinc-400 font-light">
                    Tell us what you are building and we will configure the platform scope.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#C084FC]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#C084FC]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Project Type</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#C084FC]"
                  >
                    <option value="Web Development">Web &amp; Cloud Platform Development</option>
                    <option value="Graphic Design">Design Systems &amp; Brand Architecture</option>
                    <option value="Video Production">Video Production &amp; Streaming Ingestion</option>
                    <option value="Platform Licensing">J-Platforms Ecosystem Licensing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400">Brief Description</label>
                  <textarea
                    rows={3}
                    placeholder="Details about your timeline, platforms or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-[#C084FC] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white hover:bg-zinc-100 text-black text-sm font-bold tracking-wide transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Project Brief</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
