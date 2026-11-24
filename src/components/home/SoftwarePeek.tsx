"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Activity, 
  Wifi, 
  Radio, 
  Cpu, 
  Layers, 
  Volume2, 
  Sparkles,
  ChevronDown,
  Maximize2
} from "lucide-react";

export function SoftwarePeek() {
  const [activeTab, setActiveTab] = useState<"whisppr" | "jos" | "jstream">("whisppr");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16">
      
      {/* Ambient Backlight Glow: Electric Cyan & Solar Amber */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4/5 h-36 bg-gradient-to-r from-[#00E5FF]/20 via-[#00D4F0]/15 to-[#F59247]/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Peek Indicator / Scroll Prompt */}
      <div className="flex items-center justify-center gap-2 mb-4 text-xs font-mono text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
        <span>LIVE TELEMETRY INTERFACE PREVIEW</span>
        <ChevronDown className="w-3.5 h-3.5 text-[#00E5FF] animate-bounce" />
      </div>

      {/* The Sleek Frameless App Mockup Chassis */}
      <div className="rounded-t-3xl border-t border-x border-white/[0.16] bg-[#0C0E14] shadow-[0_-25px_80px_rgba(0,229,255,0.12)] overflow-hidden transition-all duration-500">
        
        {/* Hardware-Grade Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#10121A] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59247]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <span className="hidden sm:inline-block text-zinc-500">|</span>
            <span className="text-zinc-200 font-semibold tracking-wide">
              WHISPPR // TRANSPORT PROTOCOL v2.4
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>AES-256-GCM</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#00E5FF] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              <span>8.4ms RTT</span>
            </div>
          </div>
        </div>

        {/* Live Interface Workspace Preview */}
        <div className="p-6 sm:p-8 bg-gradient-to-b from-[#0C0E14] via-[#0D0F17] to-[#08080A]">
          
          {/* Top Live Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Edge Cluster</span>
                <span className="text-sm font-semibold text-white font-mono">us-east-04</span>
              </div>
              <Wifi className="w-4 h-4 text-[#00E5FF]" />
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Codec Engine</span>
                <span className="text-sm font-semibold text-white font-mono">Opus / AV1 60fps</span>
              </div>
              <Cpu className="w-4 h-4 text-[#F59247]" />
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Packet Loss</span>
                <span className="text-sm font-semibold text-emerald-400 font-mono">0.00% Zero-Drop</span>
              </div>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Throughput</span>
                <span className="text-sm font-semibold text-white font-mono">1.48 Gbps</span>
              </div>
              <Radio className="w-4 h-4 text-[#00E5FF]" />
            </div>
          </div>

          {/* Acoustic Waveform & Real-Time Nodes */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#12141C] p-5 sm:p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-xs font-mono font-semibold text-zinc-200">
                  REAL-TIME ACOUSTIC MESH SPECTRUM // 48kHz LOSSLESS
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                OPTIMAL SYNCHRONY
              </span>
            </div>

            {/* Equalizer Visualizer Bars */}
            <div className="h-16 flex items-end justify-between gap-1 sm:gap-1.5 px-2 py-2 bg-black/40 rounded-xl border border-white/[0.04]">
              {[42, 68, 85, 52, 92, 45, 78, 95, 60, 88, 72, 96, 50, 75, 90, 62, 80, 48, 84, 98, 70, 54, 86, 92, 64, 40, 76, 88, 56, 72, 94, 60].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-all duration-300"
                  style={{
                    height: `${height}%`,
                    background: i % 4 === 0 
                      ? "#F59247" 
                      : i % 3 === 0 
                      ? "#00E5FF" 
                      : "rgba(255, 255, 255, 0.45)",
                    boxShadow: i % 3 === 0 ? "0 0 8px rgba(0,229,255,0.4)" : "none",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Interactive Platform Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/[0.06] text-xs font-mono">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTab("whisppr")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "whisppr" 
                    ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                01 Whisppr Voice Core
              </button>
              <button 
                onClick={() => setActiveTab("jos")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "jos" 
                    ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                02 jOS Planar Shell
              </button>
              <button 
                onClick={() => setActiveTab("jstream")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "jstream" 
                    ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                03 JStream Distribution
              </button>
            </div>

            <div className="text-zinc-500 flex items-center gap-2">
              <span>ACTIVE SESSION: 0x7E9A...B31</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
          </div>

        </div>

      </div>

      {/* Subtle bottom fade gradient to seamlessly guide visitor downward */}
      <div className="h-12 bg-gradient-to-b from-transparent to-[#07080A] pointer-events-none -mt-4 relative z-20" />

    </div>
  );
}
