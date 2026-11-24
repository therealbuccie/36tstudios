"use client";

import React from "react";
import Link from "next/link";
import { StudioLogo } from "./StudioLogo";
import { 
  Cpu, 
  Radio, 
  Layers, 
  Activity, 
  Video, 
  Share2, 
  Terminal, 
  Sparkles 
} from "lucide-react";

export function LogoRun() {
  const logos = [
    {
      name: "36T Studios",
      category: "Creative Foundry",
      type: "brand",
      href: "/",
    },
    {
      name: "36T Systems",
      category: "Edge Cloud & Topology",
      icon: <Cpu className="w-5 h-5 text-[#00E5FF]" />,
      href: "/platforms#systems",
    },
    {
      name: "Whisppr Core",
      category: "Real-Time Audio SDK",
      icon: <Activity className="w-5 h-5 text-[#F59247]" />,
      href: "/platforms#whisppr",
    },
    {
      name: "JStreams Studio",
      category: "Broadcast & Live Suite",
      icon: <Radio className="w-5 h-5 text-[#00E5FF]" />,
      href: "https://studio.jstreams.pro",
      isExternal: true,
    },
    {
      name: "jOS Planar Shell",
      category: "Spatial Touch UI",
      icon: <Layers className="w-5 h-5 text-[#FFA665]" />,
      href: "/platforms#jos",
    },
    {
      name: "J-Platforms",
      category: "Enterprise Software",
      icon: <Terminal className="w-5 h-5 text-[#00E5FF]" />,
      href: "/platforms",
    },
    {
      name: "36T Media Lab",
      category: "Cinema & Narrative",
      icon: <Video className="w-5 h-5 text-[#F59247]" />,
      href: "/work",
    },
    {
      name: "Edge Mesh Network",
      category: "Distributed Sync",
      icon: <Share2 className="w-5 h-5 text-[#00E5FF]" />,
      href: "/platforms#mesh",
    },
  ];

  // Duplicate for seamless 50% infinite translation
  const fullTrack = [...logos, ...logos];

  return (
    <section className="relative w-full border-y border-white/[0.08] bg-[#07080A]/95 py-6 sm:py-8 overflow-hidden select-none">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F59247]/[0.03] to-transparent pointer-events-none" />

      {/* Label Capsule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59247] shadow-[0_0_8px_#F59247] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 font-medium">
            36T Ecosystem &amp; Platform Architecture
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-[#F59247]" />
          <span>Proprietary Technology</span>
        </div>
      </div>

      {/* Edge Gradient Mask for Smooth Fade */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        {/* Infinite Moving Track */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-14 w-max">
          {fullTrack.map((item, idx) => {
            const itemKey = `${item.name}-${idx}`;

            if (item.type === "brand") {
              return (
                <div key={itemKey} className="shrink-0 flex items-center gap-3 px-3 py-1.5 opacity-80 hover:opacity-100 transition-opacity">
                  <StudioLogo size="sm" withLink={false} />
                </div>
              );
            }

            return (
              <Link
                key={itemKey}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className="shrink-0 group flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="p-1.5 rounded-lg bg-black/40 border border-white/[0.08] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors tracking-tight font-sans">
                    {item.name}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {item.category}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>

    </section>
  );
}
