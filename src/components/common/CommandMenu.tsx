"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Film, Cpu, Palette, Home, Shield, Radio, Terminal, X, ArrowRight, Volume2 } from "lucide-react";
import { useAudioAmbiance } from "./AudioAmbiance";

interface CommandItem {
  id: string;
  title: string;
  category: "Divisions" | "Platform" | "Transmissions" | "Commands";
  icon: React.ElementType;
  href?: string;
  badge?: string;
  action?: () => void;
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { toggleAudio, playBlip } = useAudioAmbiance();

  const items: CommandItem[] = [
    {
      id: "overview",
      title: "Global Nexus (Overview)",
      category: "Divisions",
      icon: Terminal,
      href: "/",
      badge: "ROOT",
    },
    {
      id: "cinema",
      title: "36T Pictures // Theatrical & Festival Slate",
      category: "Divisions",
      icon: Film,
      href: "/cinema",
      badge: "4K DCI",
    },
    {
      id: "systems",
      title: "36T Systems // Whisppr, jOS & JStream Core",
      category: "Divisions",
      icon: Cpu,
      href: "/systems",
      badge: "v4.2.0",
    },
    {
      id: "design",
      title: "36T Design Lab // Brand Identity & Vector Architecture",
      category: "Divisions",
      icon: Palette,
      href: "/design",
      badge: "PORTFOLIO",
    },
    {
      id: "living",
      title: "36T Living // Turnkey Executive Residences",
      category: "Divisions",
      icon: Home,
      href: "/living",
      badge: "SPATIAL",
    },
    {
      id: "studio",
      title: "The Enterprise // Studio Charter & Corporate Profile",
      category: "Platform",
      icon: Shield,
      href: "/studio",
      badge: "DELAWARE USA",
    },
    {
      id: "dispatch",
      title: "Studio Dispatch // Release Slates & Patch Logs",
      category: "Platform",
      icon: Radio,
      href: "/dispatch",
      badge: "NEWSFEED",
    },
    {
      id: "contact",
      title: "Global Desk // Department Cryptographic Inquiries",
      category: "Transmissions",
      icon: Terminal,
      href: "/contact",
      badge: "PGP GATEWAY",
    },
    {
      id: "cmd-audio",
      title: "Toggle Studio Acoustic Drone",
      category: "Commands",
      icon: Volume2,
      action: () => toggleAudio(),
      badge: "SYNTH ENGINE",
    },
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    (item.badge && item.badge.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (item: CommandItem) => {
    playBlip(750);
    setIsOpen(false);
    setQuery("");
    if (item.action) {
      item.action();
    } else if (item.href) {
      router.push(item.href);
    }
  };

  const handleNavigateKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      playBlip(500);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
      playBlip(600);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#0E1015] border border-white/[0.12] rounded-xl shadow-2xl overflow-hidden text-sm"
        onKeyDown={handleNavigateKey}
      >
        <div className="flex items-center px-4 py-3 border-b border-white/[0.08] bg-[#060709]/60">
          <Search className="w-4 h-4 text-[#00E5FF] mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command, division, or route..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-[#F3F4F6] placeholder-zinc-500 font-mono text-sm focus:outline-none"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-white p-1 rounded-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-white/[0.04]">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 font-mono text-xs">
              NO DIVISION OR TELEMETRY MATCH FOR &ldquo;{query}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                    isSelected ? "bg-white/[0.07] text-[#00E5FF]" : "text-zinc-300 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-md ${isSelected ? "bg-[#00E5FF]/20 text-[#00E5FF]" : "bg-white/[0.04] text-zinc-400"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-xs tracking-wide">{item.title}</div>
                      <div className="text-[10px] text-zinc-500 font-mono">{item.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400 border border-white/[0.06]">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "translate-x-0.5 text-[#00E5FF]" : "text-zinc-600 opacity-0"}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 bg-[#060709] border-t border-white/[0.06] text-[10px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span>↑↓ NAVIGATE</span>
            <span>↵ SELECT</span>
            <span>ESC CLOSE</span>
          </div>
          <span className="text-[#00E5FF]/80">36T GLOBAL DIRECTORY v4.2</span>
        </div>
      </div>
    </div>
  );
}
