"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Play, Pause, ChevronDown, Settings, Maximize2, Activity } from "lucide-react";

export const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Audio waveform heights representing a voice/sound stream
  const waveformBars = [
    18, 32, 45, 60, 38, 75, 95, 82, 100, 70, 88, 54, 92, 65, 48, 80, 96, 74,
    58, 85, 42, 68, 90, 52, 78, 62, 40, 72, 88, 50, 64, 46, 30, 22
  ];

  // Frequency spectrum bars on the right
  const spectrumBars = [
    12, 24, 38, 55, 70, 85, 60, 48, 65, 80, 95, 75, 50, 40, 60, 78, 90, 68,
    45, 30, 52, 64, 40, 28, 18, 14
  ];

  return (
    <section className="relative min-h-screen bg-[#07080A] bg-tech-grid text-white overflow-hidden flex flex-col justify-between pt-24 md:pt-32">
      
      {/* Ambient Radial Spotlight (Electric Cyan Focus) */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] opacity-25 blur-[130px] rounded-full -z-10"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, rgba(0, 229, 255, 0.25) 45%, transparent 70%)" }}
      />
      {/* Subtle Warm Amber Bleed on bottom-left for depth */}
      <div 
        className="pointer-events-none absolute top-96 left-1/4 w-[500px] h-[300px] opacity-15 blur-[140px] rounded-full bg-[#FF8A00] -z-10"
      />

      {/* Hero Center Block */}
      <div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center z-10">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
            Software Architecture &amp; Product Foundry
          </span>
        </div>

        {/* Monolithic Headline — Matching the Reference Precision */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.96] max-w-5xl font-sans uppercase">
          <span className="block text-white">SOFTWARE</span>
          <span className="block text-white mb-1">ARCHITECTURE.</span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#FFA43A] to-[#FF9224]">
              BUILT WITHOUT{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4F0] via-[#00E5FF] to-[#33EAFF]">
              COMPROMISE.
            </span>
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-7 text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
          36T Studios builds proprietary digital platforms and partners with ambitious enterprises to engineer custom mobile applications, real-time systems, and scalable infrastructure.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00E5FF] text-black font-bold text-sm shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:shadow-[0_0_50px_rgba(0,229,255,0.85)] hover:bg-[#33EAFF] transition-all duration-300"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </a>
          <a
            href="#products"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/15 bg-white/[0.04] text-white font-medium text-sm hover:bg-white/[0.08] hover:border-white/30 transition-all backdrop-blur-sm"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Capability Strip */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 px-6 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm">
          {["ENTERPRISE APP DEVELOPMENT", "WEBRTC REAL-TIME AUDIO", "CUSTOM TOUCH ENVIRONMENTS", "PROPRIETARY IP LICENSING"].map((tag, idx) => (
            <React.Fragment key={tag}>
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 font-medium">{tag}</span>
              {idx < 3 && <span className="text-zinc-600 text-[10px]">//</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Live Telemetry Cue */}
        <div className="flex items-center justify-center gap-2 mt-12 text-xs font-mono text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse" />
          <span className="tracking-widest uppercase text-[11px] text-zinc-300">LIVE TELEMETRY INTERFACE PREVIEW</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#00E5FF] animate-bounce" />
        </div>
      </div>

      {/* Below-the-Fold Visual Hook: Exact Hardware Frame from Reference */}
      <div className="relative w-full max-w-5xl mx-auto px-6 mt-6 z-10">
        <div className="relative rounded-t-3xl border-t border-x border-white/15 bg-[#0C0F17] p-5 sm:p-6 shadow-[0_-30px_90px_rgba(0,229,255,0.14)] overflow-hidden">
          
          {/* Header Bar of the Hardware Frame */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-5">
            {/* Left Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>

            {/* Center Status / Address Capsule */}
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400 font-mono text-[11px]">
              <Activity className="w-3 h-3 text-[#00E5FF]" />
              <span>whisppr-core // edge-mesh active</span>
            </div>

            {/* Right Window Controls */}
            <div className="flex items-center gap-3 text-zinc-500">
              <Settings className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
              <Maximize2 className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Player & Waveform Surface */}
          <div className="rounded-2xl border border-white/[0.06] bg-black/50 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Play Button + Glowing Audio Spectrum */}
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#00E5FF] text-black flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,229,255,0.6)] hover:bg-[#33EAFF] transition-all"
                aria-label="Toggle playback"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              {/* Dynamic Waveform Bars */}
              <div className="flex items-end gap-1 h-10 px-2 flex-1 md:w-64">
                {waveformBars.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full transition-all duration-300"
                    style={{
                      height: isPlaying ? `${height}%` : "15%",
                      backgroundColor: i > 6 && i < 20 ? "#00E5FF" : "rgba(255, 255, 255, 0.4)",
                      boxShadow: i > 6 && i < 20 ? "0 0 10px rgba(0, 229, 255, 0.6)" : "none",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Middle Audio Telemetry Info */}
            <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-zinc-400">
              <div className="text-left">
                <span className="block text-[10px] text-zinc-500 uppercase">Audio Stream</span>
                <span className="text-white font-semibold">100.0 // 60Hz</span>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div className="text-left">
                <span className="block text-[10px] text-zinc-500 uppercase">SYS_TIME</span>
                <span className="text-[#00E5FF] font-semibold">LOCK // 0.00%</span>
              </div>
            </div>

            {/* Right Mini Spectral Analyzer */}
            <div className="hidden lg:flex items-end gap-0.5 h-8 w-44 px-2 py-1 bg-black/40 rounded-lg border border-white/[0.04]">
              {spectrumBars.map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: idx % 3 === 0 ? "#00E5FF" : "rgba(255, 255, 255, 0.3)",
                  }}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
