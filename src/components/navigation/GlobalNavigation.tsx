"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { StudioLogo } from "../brand/StudioLogo";

export const GlobalNavigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/platforms" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0B0A14]/80 backdrop-blur-2xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo with Modern Studio Wordmark */}
          <div className="flex items-center gap-3">
            <StudioLogo size="md" />
          </div>

          {/* Desktop Center Navigation Links (Neomathic Style) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {links.map((item) => {
              const isActive = 
                (item.href === "/" && pathname === "/") ||
                (item.href === "/#services" && pathname === "/" && typeof window !== "undefined" && window.location.hash === "#services") ||
                (item.href === "/#projects" && pathname === "/" && typeof window !== "undefined" && window.location.hash === "#projects") ||
                (item.href === "/platforms" && pathname === "/platforms") ||
                (item.href === "/contact" && pathname === "/contact");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm tracking-wide transition-all relative py-1 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C084FC] to-[#00E5FF] rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Search Icon + Solid White "Get a Quote →" Pill */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#search-bar"
              className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-white transition-all backdrop-blur-md"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wide hover:bg-zinc-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all flex items-center gap-1.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className="text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full bg-white text-black hover:bg-zinc-100 flex items-center gap-1 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <span>Quote</span>
              <ArrowRight className="w-3 h-3 text-black" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-1 text-zinc-300 hover:text-white transition-colors rounded-lg active:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0B0A14]/98 backdrop-blur-3xl flex flex-col justify-between p-6 animate-in fade-in duration-200">
          
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <StudioLogo size="md" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg active:bg-white/5"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="py-8 space-y-2 flex-1 flex flex-col justify-center">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 text-2xl font-light tracking-tight rounded-xl transition-all text-zinc-300 hover:text-white hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <ArrowRight className="w-5 h-5 opacity-40" />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="space-y-4 pt-6 border-t border-white/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-white text-black text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-[0.98] transition-transform"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
            <p className="text-[11px] text-zinc-500 text-center font-mono">
              36T Studios LLC · Delaware, United States
            </p>
          </div>

        </div>
      )}
    </>
  );
};
