import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StudioLogo } from "../brand/StudioLogo";

export function StudioFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0B0A14] text-zinc-400 relative overflow-hidden">
      {/* Subtle corner ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C084FC]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#00E5FF]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/[0.06]">
          
          {/* Brand Column with Official Logo */}
          <div className="sm:col-span-2 md:col-span-2 space-y-4">
            <StudioLogo size="md" />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-light pt-1">
              Independent American Product Studio &amp; Software Foundry. We engineer proprietary digital platforms and partner with visionary enterprises on mission-critical applications.
            </p>
            <div className="pt-2">
              <a 
                href="mailto:inquiries@36tstudios.com" 
                className="text-xs text-white hover:text-[#00E5FF] transition-colors inline-flex items-center gap-1 group font-mono py-1"
              >
                <span>inquiries@36tstudios.com</span>
                <ArrowUpRight className="w-3 h-3 text-[#00E5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 1: Proprietary IP */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-white tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              Proprietary IP
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/platforms#whisppr" className="hover:text-white transition-colors">Whisppr SDK</Link>
              </li>
              <li>
                <Link href="/platforms#jstream" className="hover:text-white transition-colors">JStream Engine</Link>
              </li>
              <li>
                <Link href="/platforms#jos" className="hover:text-white transition-colors">jOS Planar Shell</Link>
              </li>
              <li>
                <Link href="/platforms#licensing" className="hover:text-white transition-colors">IP Licensing Desk</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Client Engineering */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-white tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
              Client Engineering
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#engineering" className="hover:text-white transition-colors">Complete Platform Build</Link>
              </li>
              <li>
                <Link href="/#engineering" className="hover:text-white transition-colors">Real-Time Infrastructure</Link>
              </li>
              <li>
                <Link href="/#engineering" className="hover:text-white transition-colors">Design Systems &amp; Brand</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Commission Scope</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Media Lab */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-white tracking-wider uppercase font-mono">
              Media Lab
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#media" className="hover:text-white transition-colors">Narrative Cinema</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Original Feature Slate</Link>
              </li>
              <li>
                <Link href="/work#flagship" className="hover:text-white transition-colors">Production Ledger</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Theatrical Inquiries</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Corporate Registration Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 text-center sm:text-left">
          <div className="font-mono text-[11px] sm:text-xs">
            © 2026 36T Studios LLC. Delaware, United States. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs">
            <Link href="/#products" className="hover:text-zinc-300 transition-colors py-1">Products</Link>
            <Link href="/#engineering" className="hover:text-zinc-300 transition-colors py-1">Client Engineering</Link>
            <Link href="/#media" className="hover:text-zinc-300 transition-colors py-1">Media Lab</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors py-1">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
