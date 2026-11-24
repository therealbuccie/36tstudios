import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Lock } from "lucide-react";
import { StudioLogo } from "../brand/StudioLogo";

export function StudioFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#07080B] text-zinc-400 relative overflow-hidden">
      {/* Subtle corner ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59247]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#00E5FF]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pb-12 border-b border-white/[0.08]">
          
          {/* Column 1: Corporate Entity & Ownership */}
          <div className="space-y-4">
            <StudioLogo size="md" />
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light pt-1">
              36T Studios designs, engineers, and operates the J-Platforms digital ecosystem. Full-cycle application engineering and media productions.
            </p>
            <div className="text-[11px] font-mono text-zinc-500 space-y-1">
              <div>Studio: 36T Studios // J-Platforms</div>
              <div>Digital Product Engineering &amp; Systems</div>
            </div>
          </div>

          {/* Column 2: Ecosystem Navigation */}
          <div className="space-y-3.5">
            <div className="text-xs font-semibold text-white tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              Ecosystem &amp; Services
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li>
                <Link href="/#capabilities" className="hover:text-white transition-colors">Client Engineering</Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">Commercial Terms &amp; Pricing</Link>
              </li>
              <li>
                <a 
                  href="https://jstreams.pro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>JStreams Live TV</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-[#00E5FF] transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://studio.jstreams.pro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>JStreams Studio</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-[#00E5FF] transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://jevents.online" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  <span>JEvents Ticketing</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-[#00E5FF] transition-colors" />
                </a>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">Media Lab &amp; Cinema</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory Compliance */}
          <div className="space-y-3.5">
            <div className="text-xs font-semibold text-white tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59247]" />
              Merchant Compliance
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-light">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">//</span>
                  <span>Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">//</span>
                  <span>Privacy Policy (NDPA 2023)</span>
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">//</span>
                  <span>Refund &amp; Cancellation Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/fulfillment-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">//</span>
                  <span>Delivery &amp; Fulfillment Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-zinc-600">//</span>
                  <span>Billing Inquiries &amp; Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Offices & Inquiries */}
          <div className="space-y-3.5">
            <div className="text-xs font-semibold text-white tracking-wider uppercase flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              Global Studios &amp; Offices
            </div>
            <div className="space-y-3 text-xs font-mono text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block font-sans text-xs">USA Headquarters</strong>
                  1209 North Orange Street<br />
                  Wilmington, DE 19801, USA
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F59247] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white block font-sans text-xs">Nigeria Center</strong>
                  Danbide Millennium Estate<br />
                  22/23 Doherty St, Alausa, Lagos
                </span>
              </div>
              <div className="pt-1.5 space-y-1.5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F59247] shrink-0" />
                  <a href="mailto:support@36tstudios.org" className="hover:text-white transition-colors">support@36tstudios.org</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                  <a href="mailto:billing@36tstudios.org" className="hover:text-white transition-colors">billing@36tstudios.org</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 text-center sm:text-left">
          <div className="font-mono text-[11px] sm:text-xs">
            © 2026 36T Studios. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono">
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
            <span className="text-zinc-700">·</span>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
            <span className="text-zinc-700">·</span>
            <Link href="/refund-policy" className="hover:text-zinc-300 transition-colors">Refunds</Link>
            <span className="text-zinc-700">·</span>
            <Link href="/fulfillment-policy" className="hover:text-zinc-300 transition-colors">Fulfillment</Link>
          </div>
        </div>

        {/* Mandatory Processor Security Strip */}
        <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.08] text-[10px] sm:text-[11px] font-mono text-zinc-400 text-center">
            <Lock className="w-3 h-3 text-[#00E5FF] shrink-0" />
            <span>256-BIT SSL ENCRYPTION ACTIVE // PCI-DSS LEVEL 1 COMPLIANT TRANSACTION GATEWAY // REGISTERED COMMERCIAL ENTITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
