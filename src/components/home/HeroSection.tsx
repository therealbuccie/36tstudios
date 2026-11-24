import React from "react";
import { ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="-mt-20 relative min-h-screen w-full bg-[#07080B] overflow-hidden flex items-center">
      {/* 3D Background Image */}
      <img
        src="/assets/hero-bg-right-aligned.jpg"
        alt="36T Studios 3D Canvas"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
      />

      {/* Left Vignette Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080B]/95 via-[#07080B]/60 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full flex flex-col items-start text-left">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
            Web Platforms • Mobile Apps • Real-Time Systems
          </span>
        </div>

        {/* Two-Line High-Impact Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.06] max-w-2xl text-white">
          <span>WE DESIGN & BUILD YOUR APPS.</span>
          <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            YOU SCALE YOUR BUSINESS.
          </span>
        </h1>

        {/* Clear Deliverable Subhead */}
        <p className="mt-6 text-zinc-300 text-base sm:text-lg max-w-xl leading-relaxed">
          Full-cycle digital product development. We create the interfaces, write the code, and launch the platforms your company needs to grow.
        </p>

        {/* Conversion Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl"
          >
            Hire Us to Build
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm hover:bg-white/10 transition-all"
          >
            See Platforms In Action
          </a>
        </div>
      </div>
    </section>
  );
};
