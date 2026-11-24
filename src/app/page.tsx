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
  Send,
  ShieldCheck,
  Code2,
  Building2,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import { LogoRun } from "@/components/brand/LogoRun";

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
      icon: <Users className="w-5 h-5 text-[#00E5FF]" />,
      aura: "bg-[#00E5FF]/15 border-[#00E5FF]/30",
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
      icon: <Heart className="w-5 h-5 text-[#FFA665]" />,
      aura: "bg-[#FFA665]/15 border-[#FFA665]/30",
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
    <div className="min-h-screen bg-[#0B0A14] text-[#FFFFFF] relative overflow-x-hidden selection:bg-[#F59247] selection:text-black">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <HeroSection />

      {/* ======================================================== */}
      {/* 1B. BRAND LOGO RUN & PLATFORM ECOSYSTEM MARQUEE          */}
      {/* ======================================================== */}
      <LogoRun />

      {/* ======================================================== */}
      {/* 2. SECTION: "OUR SERVICES // WHAT WE DO"                  */}
      {/* ======================================================== */}
      <section id="capabilities" className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto relative scroll-mt-20">
        <div id="services" className="absolute -top-24 left-0" />
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What <span className="text-[#F59247]">We Do</span>
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

                {/* 3D Asset Placement - Borderless & Mirrorless, Fills the Box */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Card Information */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFA665] transition-colors tracking-tight">
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
          className="mt-8 sm:mt-10 rounded-2xl sm:rounded-full p-6 sm:px-10 sm:py-5 bg-[#0C0F17]/90 border border-white/10 backdrop-blur-2xl shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 items-center"
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
      <section id="projects" className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Recent <span className="text-[#F59247]">Projects</span>
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
              className="group rounded-3xl p-3 sm:p-3.5 bg-[#0C0F17]/85 border border-white/10 hover:border-[#00E5FF]/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)]"
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
      {/* 4. SECTION: "COMMERCIAL TERMS // BILLING FRAMEWORK"      */}
      {/* ======================================================== */}
      <section id="pricing" className="px-4 sm:px-8 py-16 sm:py-24 max-w-7xl mx-auto relative scroll-mt-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] sm:text-xs font-mono text-[#F59247] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59247] animate-pulse" />
              <span>COMMERCIAL TERMS // BILLING FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Transparent Engagements.<br />
              <span className="text-[#00E5FF]">Predictable Delivery.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Whether accessing our proprietary software ecosystem or hiring 36T Studios to build custom digital products, all transactions are processed under transparent commercial agreements with instantaneous electronic receipts.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
            <span>PCI-DSS Level 1 Secure Billing</span>
          </div>
        </div>

        {/* 3-Card Commercial Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: J-Platforms Applications */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0C0F17]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#00E5FF] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-wider block">
                  Product-Specific Subscription &amp; Usage
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  J-Platforms Applications
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                  Each platform in the 36T ecosystem (JStreams, JEvents, Jposta, Whisppr) features transparent pricing activated directly within each product portal upon user login.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                {[
                  "Self-serve account tiers inside each app",
                  "Transparent pay-as-you-go & monthly plans",
                  "Direct billing dashboard for receipts & invoices",
                  "Instant electronic feature activation",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <a
                href="#capabilities"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs sm:text-sm transition-all"
              >
                <span>Explore Platforms</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Client Engineering & Sprints [FEATURED CARD] */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#131625] to-[#0A0C14] border-2 border-[#00E5FF]/40 hover:border-[#00E5FF] transition-all flex flex-col justify-between space-y-6 shadow-[0_0_50px_rgba(0,229,255,0.12)]">
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00E5FF] text-black font-mono text-[10px] font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,229,255,0.5)]">
              FEATURED // BESPOKE SOW BUILDS
            </div>

            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-semibold text-[#00E5FF] uppercase tracking-wider block">
                  Milestone-Based Custom Invoicing
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Client Engineering &amp; Sprints
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 font-light leading-relaxed">
                  Custom web applications, mobile platforms, and WebRTC streaming infrastructure. Billed via agreed milestones and formal statements of work.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                {[
                  "Structured milestone billing schedule",
                  "Detailed Statement of Work (SOW) per sprint",
                  "Direct electronic invoice payment via card or bank transfer",
                  "Weekly staging deployments & code releases",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-lg shadow-white/10"
              >
                <span>Request Scope Estimate</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Enterprise & Dedicated Cloud */}
          <div className="rounded-3xl p-6 sm:p-8 bg-[#0C0F17]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#F59247] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-semibold text-zinc-500 uppercase tracking-wider block">
                  Custom Annual Licensing &amp; SLAs
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Enterprise &amp; Dedicated Cloud
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 font-light leading-relaxed">
                  Dedicated cloud infrastructure, custom SDK licensing (Whisppr Core / JStreams Engine), and white-label deployments tailored for institutional security standards.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                {[
                  "Tailored enterprise licensing agreement",
                  "Dedicated edge infrastructure & priority nodes",
                  "99.98% uptime SLA with 24/7 technical desk",
                  "Custom compliance and data sovereignty",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F59247] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <Link
                href="/contact?scope=Enterprise%20Dedicated%20Cloud"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs sm:text-sm transition-all"
              >
                <span>Inquire Enterprise</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Compliance Assurance Banner */}
        <div className="mt-10 sm:mt-12 rounded-2xl p-4 sm:p-5 bg-black/40 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xs font-mono text-zinc-300">
              All service retainers and platform licenses are billed electronically with formal invoices, instant payment confirmations, and 256-bit SSL encryption. Processed by <span className="text-white font-bold">Danbide Millennium</span>.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-400 shrink-0">
            <Link href="/terms" className="hover:text-white transition-colors underline">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors underline">Privacy</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors underline">Refunds</Link>
            <Link href="/fulfillment-policy" className="hover:text-white transition-colors underline">Fulfillment</Link>
          </div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 5. SECTION: "LET'S WORK TOGETHER / BRING YOUR VISION"    */}
      {/* ======================================================== */}
      <section className="px-4 sm:px-8 py-14 sm:py-20 max-w-7xl mx-auto relative">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#0C0F17] via-[#141624] to-[#0A0C14] p-8 sm:p-14 lg:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">
          
          {/* Background Arch Art Slice */}
          <div className="absolute top-0 right-0 w-full sm:w-[65%] h-full pointer-events-none select-none opacity-50 sm:opacity-90 -z-0">
            <Image
              src="/neomathic/cta-hires.jpg"
              alt="Twilight Sunset Archway"
              fill
              className="object-cover object-right"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C0F17] via-[#0C0F17]/80 to-transparent" />
          </div>

          {/* Left Content Area */}
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFA665] font-bold block">
              LET&apos;S WORK TOGETHER
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.08]">
              Bring Your<br />
              <span className="bg-gradient-to-r from-white via-amber-100 to-[#F59247] bg-clip-text text-transparent">
                Vision to Life.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light max-w-md pt-1">
              Creative solutions for a brighter digital future.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] transition-all inline-flex items-center gap-2 group shadow-xl"
              >
                <span>Get in Touch</span>
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
