"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Video, 
  Radio, 
  Clapperboard, 
  Camera, 
  Calendar, 
  Cpu, 
  MessageSquare, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2,
  Layers,
  Film
} from "lucide-react";

export default function StudioPage() {
  const threeAreas = [
    {
      title: "01 // Creative & Media",
      desc: "Producing and shaping visual content—video production, multi-camera live streaming, professional editing, photography, and creative execution.",
      icon: Video,
      color: "#F59247",
    },
    {
      title: "02 // Digital Experiences",
      desc: "Engineering in-house digital platforms (the J-Platforms ecosystem) for live streaming, event ticketing, online conferences, and team communication.",
      icon: Cpu,
      color: "#00D4F0",
    },
    {
      title: "03 // Original Projects",
      desc: "Developing original narrative feature films, formats, and studio-owned entertainment projects, starting with the December release 'I've Got It'.",
      icon: Film,
      color: "#F59247",
    },
  ];

  const services = [
    {
      title: "Video Production",
      desc: "Concept development, filming, production coordination, and delivery of video content for brands, organizations, and original projects.",
      icon: Video,
    },
    {
      title: "Live Streaming & Broadcast",
      desc: "Live-stream production workflows, multi-camera event coverage, streaming infrastructure, and digital broadcast distribution.",
      icon: Radio,
    },
    {
      title: "Video Editing & Post-Production",
      desc: "Editing, finishing, color grading, sound design, and content repurposing for digital and broadcast channels.",
      icon: Clapperboard,
    },
    {
      title: "Production Photography",
      desc: "Event, portrait, commercial, and promotional photography supporting productions and brand campaigns.",
      icon: Camera,
    },
    {
      title: "Event Planning & Production",
      desc: "Planning and supporting conferences, live experiences, and activations, including all media and digital components.",
      icon: Calendar,
    },
    {
      title: "Web & Software Product Development",
      desc: "Designing and building web-based products, platforms, and supporting systems (including the J-Platforms family).",
      icon: Cpu,
    },
    {
      title: "Digital Communication Tools",
      desc: "Platforms and tools that support audience communication, event ticketing, and customer collaboration.",
      icon: MessageSquare,
    },
  ];

  const brandPillars = [
    {
      title: "Premium & Modern",
      desc: "Refined design, clean typography, and purposeful visual choices across both creative content and software.",
    },
    {
      title: "Creative & Technical",
      desc: "Content production and digital platforms are equal partners, operating together under one roof.",
    },
    {
      title: "Practical & Ambitious",
      desc: "We build useful tools and produce meaningful films, continuously testing and refining them through real-world use.",
    },
    {
      title: "Studio-Led",
      desc: "Our work spans client commissions, original studio-owned productions, and in-house digital products.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F4F4F6] relative overflow-hidden">
      
      {/* Ambient Color Splash */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[450px] bg-[#F59247]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header Banner */}
      <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-6xl mx-auto">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-zinc-300">
            <Building2 className="w-3.5 h-3.5 text-[#F59247]" />
            <span>Company Overview // 36T Studios (pronounced &ldquo;360 Studios&rdquo;)</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            Where Creative Production Meets Technology
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            36T Studios is a media, creative-production, and technology studio. We produce the visual content people see, while also engineering the digital systems and platforms that help those experiences reach audiences and grow.
          </p>
        </div>
      </section>

      {/* The 3 Connected Areas of Work */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="space-y-4 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#00D4F0]">
            The Studio Model
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Three Connected Focus Areas
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-xl">
            More than a traditional production company and more than a software house.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#111216] border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] text-[#F59247] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services & Capabilities Menu */}
      <section id="services" className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59247]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Spectrum Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Services &amp; Capabilities
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl font-light">
            End-to-end production and development services delivered with creative and technical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const SrvIcon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#111216] border border-white/[0.08] hover:border-[#F59247]/30 transition-all space-y-3"
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

      {/* Brand Character & Principles */}
      <section className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-4 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#00D4F0]">
            Our Standards
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Brand Character &amp; Working Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {brandPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#111216] border border-white/[0.08] space-y-2"
            >
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F59247]" />
                <span>{pillar.title}</span>
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed pl-6">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#111216] via-[#16171D] to-[#111216] border border-white/[0.12] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F59247]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-lg relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let&apos;s Build Something Together.
            </h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Whether you need live broadcast production, custom video content, or want to partner on a digital platform, our studio is ready.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#F59247] hover:bg-[#FF9F59] text-black text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(245,146,71,0.4)] shrink-0 relative z-10"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
