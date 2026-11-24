import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StudioLogo } from "../brand/StudioLogo";

export function StudioFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#08080A] text-zinc-400 relative overflow-hidden">
      {/* Subtle corner ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59247]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#00D4F0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 sm:py-20">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Column with Official Logo */}
          <div className="md:col-span-2 space-y-4">
            <StudioLogo size="md" />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-light pt-1">
              Independent American Design & Technology Studio. We engineer modern digital platforms, visual systems, and original narrative media.
            </p>
            <div className="pt-2">
              <a 
                href="mailto:inquiries@36tstudios.com" 
                className="text-xs text-white hover:text-[#F59247] transition-colors inline-flex items-center gap-1 group font-medium"
              >
                <span>inquiries@36tstudios.com</span>
                <ArrowUpRight className="w-3 h-3 text-[#F59247] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 1: Platforms */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-white tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4F0]" />
              Platforms
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/platforms#whisppr" className="hover:text-white transition-colors">Whisppr Transport</Link>
              </li>
              <li>
                <Link href="/platforms#jos" className="hover:text-white transition-colors">jOS Planar Shell</Link>
              </li>
              <li>
                <Link href="/platforms#jstream" className="hover:text-white transition-colors">JStream Engine</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Media */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-white tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59247]" />
              Narrative Media
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work#flagship" className="hover:text-white transition-colors">I&apos;ve Got It (Dec 2026)</Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Production Slate</Link>
              </li>
              <li>
                <Link href="/work#flagship" className="hover:text-white transition-colors">Screening Access</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Spaces */}
          <div className="space-y-4">
            <div className="text-xs font-semibold text-white tracking-wider uppercase">
              Studio & Spaces
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/studio" className="hover:text-white transition-colors">Studio Charter</Link>
              </li>
              <li>
                <Link href="/studio#design" className="hover:text-white transition-colors">Brand Systems</Link>
              </li>
              <li>
                <Link href="/studio#spaces" className="hover:text-white transition-colors">Executive Residences</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Direct Inquiries</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Master PRD Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © 2026 36T Studios LLC. Delaware, United States. Independent Design, Technology & Narrative Media.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/work" className="hover:text-zinc-300 transition-colors">Work</Link>
            <Link href="/platforms" className="hover:text-zinc-300 transition-colors">Platforms</Link>
            <Link href="/studio" className="hover:text-zinc-300 transition-colors">Studio</Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
