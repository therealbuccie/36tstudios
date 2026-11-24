"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Globe, Wifi } from "lucide-react";

export function LiveSystemBar() {
  const [utcTime, setUtcTime] = useState<string>("");
  const [ping, setPing] = useState<number>(18);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(
        now.toISOString().replace("T", " ").substring(0, 19) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Subtle edge latency jitter (16-24ms)
    const pingInterval = setInterval(() => {
      setPing(Math.floor(16 + Math.random() * 8));
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#060709] text-zinc-400 text-xs">
      {/* Primary Global Telemetry Ribbon */}
      <div className="border-b border-white/[0.06] bg-[#0E1015]/40 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 font-mono text-[11px]">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              CURRENT BUILD: <strong className="text-white">v4.2.0</strong>
            </span>
            <span className="text-zinc-600 hidden sm:inline">//</span>
            <span className="text-zinc-300">
              STATUS: <span className="text-emerald-400">PRODUCTION LOCK</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">//</span>
            <span className="text-zinc-300">
              NETWORK: <span className="text-cyan-400">GLOBAL EDGE</span>
            </span>
            <span className="text-zinc-600 hidden md:inline">//</span>
            <span className="text-zinc-400 hidden md:inline">
              HEADQUARTERS: <span className="text-zinc-200">DELAWARE, USA</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3 h-3 text-[#00E5FF]" />
              <span>{ping}ms (IAD / ASHBURN)</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-zinc-300">
              <Globe className="w-3 h-3 text-zinc-500" />
              <span>{utcTime || "SYNCHRONIZING..."}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Institutional Charter Block */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-mono text-sm tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              36T STUDIOS
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Multidisciplinary media conglomerate and software design laboratory. Operating at the intersection of narrative cinema, proprietary operating systems, real-time communications engineering, and high-end brand architecture.
            </p>
            <div className="text-[11px] font-mono text-zinc-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>EXECUTIVE GOVERNANCE // CRYPTOGRAPHICALLY SECURED</span>
              </div>
              <div>REGISTRY: DELAWARE CORPORATION ENTITY #36T-GLOBAL</div>
            </div>
          </div>

          {/* Divisions */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] text-white tracking-widest uppercase font-semibold">DIVISIONS</div>
            <ul className="space-y-2 text-[12px]">
              <li>
                <Link href="/cinema" className="hover:text-[#00E5FF] transition-colors">36T Pictures (Cinema)</Link>
              </li>
              <li>
                <Link href="/systems" className="hover:text-[#00E5FF] transition-colors">36T Systems (Software)</Link>
              </li>
              <li>
                <Link href="/design" className="hover:text-[#00E5FF] transition-colors">36T Design Lab (Identity)</Link>
              </li>
              <li>
                <Link href="/living" className="hover:text-[#00E5FF] transition-colors">36T Living (Residences)</Link>
              </li>
            </ul>
          </div>

          {/* Systems Products */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] text-white tracking-widest uppercase font-semibold">ECOSYSTEM</div>
            <ul className="space-y-2 text-[12px]">
              <li>
                <Link href="/systems#whisppr" className="hover:text-[#00E5FF] transition-colors">Whisppr Transport</Link>
              </li>
              <li>
                <Link href="/systems#jos" className="hover:text-[#00E5FF] transition-colors">jOS Planar Shell</Link>
              </li>
              <li>
                <Link href="/systems#jstream" className="hover:text-[#00E5FF] transition-colors">JStream Media Core</Link>
              </li>
              <li>
                <Link href="/cinema#theatrical-slate" className="hover:text-[#00E5FF] transition-colors">Theatrical Slate 2026</Link>
              </li>
            </ul>
          </div>

          {/* Directorate & Inquiries */}
          <div className="space-y-3 font-mono">
            <div className="text-[11px] text-white tracking-widest uppercase font-semibold">DIRECTORATE</div>
            <ul className="space-y-2 text-[12px]">
              <li>
                <Link href="/studio" className="hover:text-white transition-colors">Executive Office of 36T</Link>
              </li>
              <li>
                <Link href="/studio#engineering" className="hover:text-white transition-colors">The Engineering Directorate</Link>
              </li>
              <li>
                <Link href="/studio#creative" className="hover:text-white transition-colors">The Creative Board</Link>
              </li>
              <li>
                <Link href="/dispatch" className="hover:text-white transition-colors">Studio Dispatch & Press</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#00E5FF] hover:underline flex items-center gap-1 pt-1">
                  Transmissions Gateway →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Institutional Notation */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-4">
          <div>
            © 2026 36T STUDIOS GLOBAL HOLDINGS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/studio" className="hover:text-zinc-300 transition-colors">INSTITUTIONAL CHARTER</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">CRYPTOGRAPHIC PGP</Link>
            <span>/</span>
            <span className="text-[#00E5FF]">UNITED STATES JURISDICTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
