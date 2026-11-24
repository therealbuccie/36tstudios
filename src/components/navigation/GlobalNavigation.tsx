"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { StudioLogo } from "../brand/StudioLogo";

export const GlobalNavigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Products", href: "/#products" },
    { label: "Client Engineering", href: "/#engineering" },
    { label: "Media Lab", href: "/#media" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#07080A]/92 backdrop-blur-xl transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Mathematically Perfect 1:1 Responsive Studio Logo */}
          <StudioLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((item) => {
              const isActive = 
                pathname === item.href ||
                (item.href === "/#products" && pathname === "/platforms") ||
                (item.href === "/#media" && (pathname === "/work" || pathname === "/cinema")) ||
                (item.href === "/contact" && pathname === "/contact");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm tracking-wide transition-all ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="block h-[2px] bg-[#00E5FF] mt-1 rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: "Start a Project ↗" on Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="text-xs font-semibold tracking-wide px-4 py-2 rounded-full bg-[#00E5FF] text-black hover:bg-[#33EAFF] hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-all flex items-center gap-1.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </Link>
          </div>

          {/* Mobile Right Bar: Quick Start Pill + Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/#contact"
              className="text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full bg-[#00E5FF] text-black hover:bg-[#33EAFF] flex items-center gap-1 shadow-[0_0_12px_rgba(0,229,255,0.3)]"
            >
              <span>Start</span>
              <ArrowUpRight className="w-3 h-3 text-black" />
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
        <div className="fixed inset-0 z-50 md:hidden bg-[#07080A]/98 backdrop-blur-2xl flex flex-col justify-between p-6 animate-in fade-in duration-200">
          
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

          {/* Nav Links with Large Touch Targets (min 48px) */}
          <div className="py-8 space-y-2 flex-1 flex flex-col justify-center">
            {links.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-2 text-2xl font-light tracking-tight rounded-xl transition-all ${
                    isActive 
                      ? "text-[#00E5FF] font-medium bg-white/[0.03]" 
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-40" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Action Area */}
          <div className="space-y-4 pt-6 border-t border-white/[0.08]">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-[#00E5FF] text-black text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.4)] active:scale-[0.98] transition-transform"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
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
