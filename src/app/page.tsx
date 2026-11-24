"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  ArrowRight, 
  ArrowUpRight, 
  Search, 
  Users, 
  Folder, 
  Trophy, 
  Heart, 
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
      id: "video",
      category: "Original Media & Film",
      title: "Video Production",
      subtitle: "Shooting, Editing, Motion Graphics",
      image: "/neomathic/capabilities/camera-3d.jpg",
      link: "/media",
      isExternal: false,
    },
    {
      id: "web",
      category: "Platform Engineering",
      title: "Web Development",
      subtitle: "Modern, Responsive Platforms",
      image: "/neomathic/capabilities/code-3d.jpg",
      link: "/platforms",
      isExternal: false,
    },
    {
      id: "design",
      category: "Visual Systems",
      title: "Digital Art & Design",
      subtitle: "Brand Identity & Product Design",
      image: "/neomathic/capabilities/design-3d.jpg",
      link: "/design",
      isExternal: false,
    },
    {
      id: "streaming",
      category: "J-Platforms Infrastructure",
      title: "Live Streaming",
      subtitle: "Infrastructure, Video Delivery",
      image: "/neomathic/capabilities/streaming-3d.jpg",
      link: "https://jstreams.pro",
      isExternal: true,
    },
  ];

  const capabilitiesStats = [
    {
      value: "150+",
      label: "Happy Clients",
      sublabel: "100% Proprietary Codebase",
      icon: <Users className="w-5 h-5 text-[#C084FC]" />,
      aura: "bg-[#7C3AED]/20 border-[#7C3AED]/30",
    },
    {
      value: "300+",
      label: "Projects Completed",
      sublabel: "< 20ms Global Mesh Latency",
      icon: <Folder className="w-5 h-5 text-[#FF8A00]" />,
      aura: "bg-[#FF8A00]/20 border-[#FF8A00]/30",
    },
    {
      value: "5+",
      label: "Years Experience",
      sublabel: "99.98% Platform SLA",
      icon: <Trophy className="w-5 h-5 text-[#F59247]" />,
      aura: "bg-[#F59247]/20 border-[#F59247]/30",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      sublabel: "4+ Core Production Disciplines",
      icon: <Heart className="w-5 h-5 text-[#F472B6]" />,
      aura: "bg-[#EC4899]/20 border-[#EC4899]/30",
    },
  ];

  const projects = [
    {
      id: "proj-cinema",
      title: "I'VE GOT IT (Feature Film)",
      tag: "Cinema Production",
      subtitle: "Original studio holiday feature production.",
      image: "/neomathic/projects/feature-film.jpg",
      link: "/media",
    },
    {
      id: "proj-software",
      title: "J-Platforms Software",
      tag: "Platform Engineering",
      subtitle: "Enterprise platform architecture & edge mesh.",
      image: "/neomathic/projects/jplatforms-software.jpg",
      link: "/platforms",
    },
    {
      id: "proj-streaming",
      title: "JStreams Live Broadcast",
      tag: "Live Streaming",
      subtitle: "Browser-native portrait live studio & video CDN delivery.",
      image: "/neomathic/projects/jstreams-broadcast.jpg",
      link: "https://studio.jstreams.pro",
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
    <div className="min-h-screen bg-[#07080B] text-[#FFFFFF] relative overflow-x-hidden selection:bg-[#C084FC] selection:text-black">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Pristine Ultra-HD 3D Composition)        */}
      {/* ======================================================== */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-[96vh] flex flex-col justify-between overflow-hidden">
        
        {/* Full Ultra-HD Background Scene (Pristine 3D Render) */}
        <div className="absolute inset-0 pointer-events-none select-none -z-10">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/neomathic/hero-hires.jpg"
              alt="36T Studios 3D Arch and Crystal Lake Scene"
              fill
              className="object-cover object-[center_right] sm:object-right-top drop-shadow-[0_25px_60px_rgba(192,132,252,0.35)]"
              priority
              quality={98}
            />
          </div>

          {/* Atmospheric Overlays for maximum text contrast and seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080B]/95 via-[#07080B]/70 to-transparent w-full sm:w-[65%]" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#07080B]/90 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#07080B] via-[#07080B]/85 to-transparent" />
        </div>

        {/* Top-Right Floating Script & Pagination (Exact Match) */}
        <div className="absolute top-24 sm:top-28 right-6 sm:right-12 hidden md:flex flex-col items-end text-right z-10 select-none">
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
            <span className="font-mono text-[10px] xs:text-xs uppercase tracking-widest text-zinc-200 font-medium">
              ✦ MEDIA // TECH // SYSTEM ENGINE
            </span>
          </div>

          {/* Monolithic Headline */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[4.75rem] font-black tracking-tight leading-[1.04] font-sans">
            <span className="block text-white">Software</span>
            <span className="block text-white">Architecture.</span>
            <span className="block text-[#F59247] drop-shadow-[0_0_35px_rgba(245,146,71,0.35)]">
              BUILT WITHOUT
            </span>
            <span className="block text-[#00E5FF] drop-shadow-[0_0_35px_rgba(0,229,255,0.35)]">
              COMPROMISE.
            </span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-zinc-300 text-sm xs:text-base sm:text-lg max-w-xl leading-relaxed font-light">
            36T Studios builds proprietary digital platforms and partners with ambitious enterprises to engineer custom software, real-time systems, and media infrastructure.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-4">
            <a
              href="#services"
              className="px-7 py-3.5 rounded-full bg-[#00E5FF] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.45)] transition-all flex items-center justify-center gap-2 group min-h-[46px]"
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

        {/* Floating Interactive Search Bar Capsule (Bridging Hero and Services) */}
        <div id="search-bar" className="mt-14 sm:mt-18 w-full max-w-2xl mx-auto relative z-20">
          <div className="rounded-full p-2 pl-5 sm:pl-6 bg-[#151326]/90 border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                type="text"
                placeholder="Search projects, systems..."
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
                <span>2026</span>
                <span className="text-[10px] text-zinc-500">⌄</span>
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 2. SECTION: "OUR SERVICES // WHAT WE DO"                  */}
      {/* ======================================================== */}
      <section id="services" className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What <span className="text-[#C084FC]">We Do</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:max-w-md">
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              From creative design to powerful digital solutions, we help your ideas come to life.
            </p>
            <Link
              href="/platforms"
              className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-semibold text-white tracking-wide transition-all whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5 backdrop-blur-sm"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D8B4FE] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 font-light leading-snug">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Micro-Interaction Action Bottom Bar */}
                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-wider">
                      0{index + 1} // DISCIPLINE
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/12 text-zinc-300 flex items-center justify-center shrink-0 group-hover:bg-[#00E5FF] group-hover:text-black group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.45)] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

        {/* Horizontal Frosted Glass Stats Metrics Ribbon (Section 3) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-10 rounded-2xl sm:rounded-full p-6 sm:px-10 sm:py-5 bg-[#151326]/85 border border-white/10 backdrop-blur-2xl shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 items-center"
        >
          {capabilitiesStats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3.5">
              <div className={`w-11 h-11 rounded-full ${stat.aura} border flex items-center justify-center shrink-0 shadow-sm`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-300 font-light">
                  {stat.label}
                </div>
                <div className="text-[10px] text-zinc-500 font-mono hidden sm:block">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </section>

      {/* ======================================================== */}
      {/* 4. SECTION: "FEATURED WORK / RECENT PROJECTS"             */}
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
              className="group rounded-3xl p-3 sm:p-3.5 bg-[#151326]/70 border border-white/10 hover:border-[#00E5FF]/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
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
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 border border-white/15 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-black group-hover:bg-[#00E5FF] group-hover:border-[#00E5FF] transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Tag Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[11px] font-mono text-zinc-200">
                    {proj.tag}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="px-2 pt-4 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-light leading-snug">
                  {proj.subtitle}
                </p>
              </div>

            </Link>
          ))}
        </div>

      </section>

      {/* ======================================================== */}
      {/* 5. SECTION: "LET'S WORK TOGETHER / BRING YOUR VISION"    */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-7xl mx-auto relative">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#17142E] via-[#1D183B] to-[#120F24] p-8 sm:p-14 lg:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
          
          {/* Background Arch Art Slice */}
          <div className="absolute top-0 right-0 w-full sm:w-[65%] h-full pointer-events-none select-none opacity-50 sm:opacity-90 -z-0">
            <Image
              src="/neomathic/cta-hires.jpg"
              alt="Twilight Sunset Archway"
              fill
              className="object-cover object-right"
              quality={95}
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
                className="px-8 py-3.5 rounded-full bg-[#00E5FF] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all inline-flex items-center gap-2 group shadow-xl"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. MODALS: SHOWREEL & DIRECT INTAKE FORM                 */}
      {/* ======================================================== */}

      {/* Behind-The-Scenes / Showreel Modal Player */}
      {reelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#141226] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wider text-white">
                  36T MEDIA LAB // BEHIND THE SCENES SHOWREEL
                </span>
              </div>
              <button 
                onClick={() => setReelModalOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-8">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <video 
                  controls 
                  autoPlay 
                  playsInline 
                  poster="/neomathic/projects/feature-film.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/media_1795511833648_508e0ad3.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>FORMAT: 4K PRORES · WEBRTC BROADCAST CORE</span>
                <span>STATUS: ARCHIVAL REEL</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Direct Quote / Inquiry Modal Form */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#141226] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest font-semibold">
                  DIRECT PROJECT INQUIRY
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Get a Quote</h3>
              </div>
              <button
                onClick={() => {
                  setQuoteModalOpen(false);
                  setFormSubmitted(false);
                }}
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                  Our architecture team will review your specifications and contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setQuoteModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00E5FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00E5FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Discipline
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1833] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00E5FF] transition-colors"
                  >
                    <option value="Software Architecture">Software Architecture & Cloud Platforms</option>
                    <option value="Video Production">Original Cinema & Video Production</option>
                    <option value="Live Streaming">JStreams Live Broadcast & CDN Mesh</option>
                    <option value="Digital Art & Design">Visual Systems & Brand Direction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Project Scope / Brief
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your timeline, targets, and architecture..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#00E5FF] text-black font-semibold text-xs tracking-wide hover:shadow-[0_0_25px_rgba(0,229,255,0.45)] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
