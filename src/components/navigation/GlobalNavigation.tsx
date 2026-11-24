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
    { label: "Work", href: "/work" },
    { label: "Platforms", href: "/platforms" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#08080A]/85 backdrop-blur-xl transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Official 36T Studio Logo */}
          <StudioLogo size="md" />

          {/* Desktop Navigation Links: Work | Platforms | Studio | Contact */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((item) => {
              const isActive = 
                pathname === item.href || 
                (item.href === "/work" && pathname === "/cinema") || 
                (item.href === "/platforms" && (pathname === "/technology" || pathname === "/systems"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide transition-all ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="block h-[2px] bg-[#F59247] mt-1 rounded-full shadow-[0_0_8px_rgba(245,146,71,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Rounded Pill "Let's Talk" */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="text-xs font-semibold tracking-wide px-4 py-2 rounded-full border border-white/20 text-white hover:border-[#F59247] hover:text-[#F59247] hover:shadow-[0_0_20px_rgba(245,146,71,0.25)] transition-all flex items-center gap-1.5"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F59247]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#08080A]/98 backdrop-blur-2xl pt-24 px-6 pb-10 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-6 pt-4">
            <div className="space-y-4">
              {links.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-2xl font-light tracking-tight transition-colors ${
                      isActive ? "text-[#F59247] font-medium" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/[0.08]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-[#F59247] text-black text-sm font-bold tracking-wide flex items-center justify-center gap-1.5 shadow-[0_0_25px_rgba(245,146,71,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-zinc-500 text-center">
              Independent Design & Technology Studio.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
