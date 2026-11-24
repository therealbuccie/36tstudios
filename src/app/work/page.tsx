"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Film, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Calendar, 
  Users, 
  Clapperboard, 
  Sparkles,
  Maximize2
} from "lucide-react";

export default function WorkPage() {
  const [screenerModalOpen, setScreenerModalOpen] = useState(false);
  const [screenerSent, setScreenerSent] = useState(false);
  const [selectedCast, setSelectedCast] = useState<{
    name: string;
    role?: string;
    image: string;
  } | null>(null);

  const [screenerForm, setScreenerForm] = useState({
    name: "",
    organization: "",
    email: "",
    role: "Theatrical Distributor",
  });

  const castMembers = [
    {
      name: "Priscilla Chukwuji",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/priscilla-chukwuji.jpg",
    },
    {
      name: "Richard Akinwale",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/richard-akinwale.jpg",
    },
    {
      name: "David Adelodun",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/david-adelodun.jpg",
    },
    {
      name: "Yvonne Okpala",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/yvonne-okpala.jpg",
    },
    {
      name: "Anita",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/anita.jpg",
    },
    {
      name: "Chimamaka Nwaigwe",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/chimamaka-nwaigwe.jpg",
    },
    {
      name: "Brilla Daniel",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/brilla-daniel.jpg",
    },
    {
      name: "Lilian Obinezim",
      role: "Lead Cast",
      image: "/movies/ive-got-it/cast/lilian-obinezim.jpg",
    },
    {
      name: "Ijeoma Aniebo",
      role: "Special Appearance",
      image: "/movies/ive-got-it/cast/ijeoma-aniebo.jpg",
    },
  ];

  const handleScreenerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScreenerSent(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FFFFFF] relative overflow-hidden">
      
      {/* Ambient Color Splash */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[450px] bg-[#F59247]/12 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header Banner */}
      <section className="px-6 pt-20 pb-14 sm:pt-28 sm:pb-16 max-w-6xl mx-auto">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-zinc-300">
            <Film className="w-3.5 h-3.5 text-[#F59247]" />
            <span>36T Pictures // Media Division</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            Original Narrative Cinema
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Character-driven dramas and high-stakes cinema engineered for theatrical and digital release. Introducing our flagship December premiere.
          </p>
        </div>
      </section>

      {/* Flagship Production Feature: "I'VE GOT IT" */}
      <section id="flagship" className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/[0.12] hover:border-[#F59247]/30 bg-[#141418] p-6 sm:p-12 space-y-10 shadow-2xl transition-all duration-300 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59247]/8 rounded-full blur-3xl pointer-events-none" />

          {/* Top Title Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.06] relative z-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F59247] flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#F59247] animate-pulse" />
                Featured December 2026 Premiere
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
                I&apos;VE GOT IT
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-light italic mt-1">
                &ldquo;Integrity has an invoice.&rdquo; — A 36T Studios Original Feature
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
              <a
                href="https://casting.36tstudios.org"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#00E5FF]/10 hover:bg-[#00E5FF] text-[#00E5FF] hover:text-black border border-[#00E5FF]/40 text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                <span>Casting Gateway</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setScreenerModalOpen(true)}
                className="px-6 py-3 rounded-full bg-[#F59247] hover:bg-[#FF9F59] text-black text-xs font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(245,146,71,0.35)]"
              >
                Request Screener Access →
              </button>
            </div>
          </div>

          {/* Main Visual Display: Dual Poster & Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* Left: Vertical Key Art Poster */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] bg-black shadow-2xl group">
              <Image
                src="/movies/ive-got-it/poster-main.jpg"
                alt="I've Got It - Official Movie Poster"
                fill
                className="object-cover object-center group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs text-white font-medium bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                  Official Key Art // 36T Studios Presents
                </span>
              </div>
            </div>

            {/* Right: Embedded BTS Video Player & Synopsis */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Native Behind The Scenes Player */}
              <div className="rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl relative">
                <div className="p-3 bg-[#0A0A0C] border-b border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-2 text-white font-semibold">
                    <Clapperboard className="w-3.5 h-3.5 text-[#F59247]" />
                    Behind The Scenes (BTS) Featurette
                  </span>
                  <span className="text-[#F59247] text-[11px] font-bold">December 2026</span>
                </div>

                <div className="aspect-[16/9] w-full bg-black relative">
                  <video
                    src="/movies/ive-got-it/bts-video.mp4"
                    controls
                    className="w-full h-full object-contain"
                    poster="/movies/ive-got-it/poster-landscape.jpg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Synopsis & Narrative Framing */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Story & Premise
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  <em>I&apos;ve Got It</em> is a tense, character-driven corporate drama exploring the razor-thin boundary between ambition, personal compromise, and systemic accountability. When a lucrative high-stakes deal exposes deep institutional deception, each player is confronted with the true invoice of their integrity.
                </p>
              </div>

              {/* Production Ledger Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0A0A0C] border border-white/[0.06] text-xs">
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">STUDIO DIRECTION</div>
                  <div className="text-white font-semibold mt-0.5">36T Media Lab</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">PRODUCTION</div>
                  <div className="text-white font-semibold mt-0.5">36T Studios LLC</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">RELEASE WINDOW</div>
                  <div className="text-[#F59247] font-bold mt-0.5">December 2026</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">COSTUME DESIGN</div>
                  <div className="text-zinc-300 mt-0.5">Nkechi Ezedigbo</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">SOUND DESIGN</div>
                  <div className="text-zinc-300 mt-0.5">Peterson</div>
                </div>
                <div>
                  <div className="text-zinc-500 text-[10px] uppercase">LICENSING</div>
                  <div className="text-zinc-300 mt-0.5">36tstudios.com</div>
                </div>
              </div>

            </div>

          </div>

          {/* Section: Meet the Stars! (Official Cast Gallery) */}
          <div className="pt-8 border-t border-white/[0.06] relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59247] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Starring Ensemble
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  Meet the Stars
                </h3>
              </div>
              <span className="text-xs text-zinc-500 hidden sm:inline">
                Click any portrait to inspect
              </span>
            </div>

            {/* Cast Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {castMembers.map((actor, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCast(actor)}
                  className="group rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-[#F59247]/50 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(245,146,71,0.2)]"
                >
                  <div className="relative aspect-[3/4] w-full bg-black overflow-hidden">
                    <Image
                      src={actor.image}
                      alt={actor.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 space-y-0.5">
                    <div className="text-xs font-bold text-white group-hover:text-[#F59247] transition-colors truncate">
                      {actor.name}
                    </div>
                    <div className="text-[11px] text-zinc-400 font-light truncate">
                      {actor.role || "Cast"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Balanced Future Slate (Kept clean so movies don't fill the entire website) */}
      <section className="px-6 py-16 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-3 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Pipeline // Future Releases
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Upcoming Production Slate (2027)
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-2xl">
            Selected feature projects currently in development and post-production, following the December premiere of <em>I&apos;ve Got It</em>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-[#141418] border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#00D8F6] font-semibold">Post-Production</span>
              <span className="text-zinc-500 font-mono">2027</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              RECTIFIED ZERO
            </h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              An architect uncovers a clandestine subterranean network embedded within a corporate metropolis, triggering a high-stakes containment protocol.
            </p>
            <div className="text-xs text-zinc-500">2.39:1 Large Format // Spatial Ambisonics</div>
          </div>

          <div className="p-8 rounded-3xl bg-[#141418] border border-white/[0.08] space-y-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#00D8F6] font-semibold">Principal Photography</span>
              <span className="text-zinc-500 font-mono">2027</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              SILENT PROTOCOL
            </h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              A deep-sea acoustic research team records an impossible harmonic pulse originating beneath an offshore seismic fault line.
            </p>
            <div className="text-xs text-zinc-500">65mm High-Gate Anamorphic // Festival Circuit</div>
          </div>
        </div>
      </section>

      {/* Cast Zoom Modal */}
      {selectedCast && (
        <div 
          onClick={() => setSelectedCast(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150 cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#141418] border border-[#F59247]/40 rounded-3xl overflow-hidden shadow-2xl cursor-default"
          >
            <div className="relative aspect-[3/4] w-full bg-black">
              <Image
                src={selectedCast.image}
                alt={selectedCast.name}
                fill
                className="object-cover object-top"
              />
              <button
                onClick={() => setSelectedCast(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 bg-[#0A0A0C] flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">{selectedCast.name}</h4>
                <p className="text-xs text-zinc-400 font-light">Cast in &ldquo;I&apos;ve Got It&rdquo; (December 2026)</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F59247]/10 text-[#F59247] border border-[#F59247]/20">
                36T Star
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Screener Request Modal */}
      {screenerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-lg bg-[#141418] border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <h3 className="text-lg font-bold text-white">
                Request Screener: &ldquo;I&apos;VE GOT IT&rdquo;
              </h3>
              <button
                onClick={() => setScreenerModalOpen(false)}
                className="text-zinc-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {screenerSent ? (
              <div className="space-y-4 text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  Screener Request Dispatched
                </h4>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto font-light">
                  Thank you. Your request for <em>I&apos;ve Got It</em> has been sent to the 36T Pictures distribution syndicate. A watermarked digital screener pass will be issued upon verification.
                </p>
                <button
                  onClick={() => {
                    setScreenerSent(false);
                    setScreenerModalOpen(false);
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#F59247] text-black text-xs font-bold tracking-wide"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleScreenerSubmit} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="text-zinc-400 block">YOUR NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="First & Last Name"
                    value={screenerForm.name}
                    onChange={(e) => setScreenerForm({ ...screenerForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0C] border border-white/10 text-white focus:outline-none focus:border-[#F59247]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-400 block">ORGANIZATION / FESTIVAL / OUTLET *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Cinema Chain, Film Festival, Press"
                    value={screenerForm.organization}
                    onChange={(e) => setScreenerForm({ ...screenerForm, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0C] border border-white/10 text-white focus:outline-none focus:border-[#F59247]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-400 block">WORK EMAIL *</label>
                  <input
                    required
                    type="email"
                    placeholder="acquisitions@organization.com"
                    value={screenerForm.email}
                    onChange={(e) => setScreenerForm({ ...screenerForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0C] border border-white/10 text-white focus:outline-none focus:border-[#F59247]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-400 block">ROLE / CAPACITY</label>
                  <select
                    value={screenerForm.role}
                    onChange={(e) => setScreenerForm({ ...screenerForm, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0C] border border-white/10 text-white focus:outline-none focus:border-[#F59247]"
                  >
                    <option>Theatrical Distributor / Buyer</option>
                    <option>Film Festival Programmer</option>
                    <option>Film Critic / Accredited Press</option>
                    <option>Sales Agent / Rights Broker</option>
                  </select>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setScreenerModalOpen(false)}
                    className="px-4 py-2 text-zinc-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#F59247] hover:bg-[#FF9F59] text-black font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(245,146,71,0.4)]"
                  >
                    Submit Request
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
