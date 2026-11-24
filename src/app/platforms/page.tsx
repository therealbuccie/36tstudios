"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Tv, 
  Video, 
  Ticket, 
  Users, 
  Mail, 
  MessageSquare, 
  Sliders, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Smartphone,
  Layers,
  ArrowUpRight
} from "lucide-react";

export default function PlatformsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const platforms = [
    {
      id: "jstreams",
      name: "JStreams Live TV",
      category: "Media & Streaming",
      status: "Active Pilot",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      headline: "Streaming and live-video platform.",
      description: "The core streaming platform and first active pilot product under 36T Studios. Includes an intuitive web-based viewing experience, modern video infrastructure, and a direction toward customer-branded streaming distribution.",
      features: [
        "Web-based responsive player interface",
        "Modern cloud hosting & video service integrations",
        "Customer-branded streaming workflows",
        "Ongoing infrastructure stabilization",
      ],
      icon: Tv,
    },
    {
      id: "jstreams-studio",
      name: "JStreams Studio",
      category: "Media & Streaming",
      status: "Prototype / In Development",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      headline: "Creator & broadcaster production workspace.",
      description: "A mobile-first streaming studio concept designed around content and controls. Built to support live production workflows with portrait-first controls and landscape expansion when needed.",
      features: [
        "Portrait-first live production controls",
        "Single-user verified workflow",
        "Low-friction stream configuration",
        "Creator-focused broadcast tools",
      ],
      icon: Video,
    },
    {
      id: "jevents",
      name: "JEvents",
      category: "Events & Operations",
      status: "Built & Iteratively Developed",
      statusColor: "text-[#00D4F0] bg-[#00D4F0]/10 border-[#00D4F0]/20",
      headline: "Event ticketing and operations platform.",
      description: "A dedicated platform for event organizers and attendees. Powers complete ticket ordering, payment processing, automated confirmations, on-site QR-oriented check-ins, and flexible platform fee logic.",
      features: [
        "End-to-end ticketing & order workflows",
        "Integrated secure payment processing",
        "QR code on-site attendee check-in",
        "Organizer payout and reporting logic",
      ],
      icon: Ticket,
    },
    {
      id: "jconference",
      name: "JConference",
      category: "Events & Operations",
      status: "In Development",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      headline: "Online meetings and conference experience.",
      description: "A specialized conference and video-meeting product developed around its own application experience, custom backend architecture, and seamless registration & ticketing integrations.",
      features: [
        "Live interactive video conference rooms",
        "Integrated event registration & access",
        "Audience Q&A and collaboration tools",
        "Purpose-built meeting infrastructure",
      ],
      icon: Users,
    },
    {
      id: "whisppr",
      name: "Whisppr",
      category: "Communication",
      status: "Approved Design Blueprint",
      statusColor: "text-[#F59247] bg-[#F59247]/10 border-[#F59247]/20",
      headline: "Minimal, low-cognitive-load communication.",
      description: "A messaging product with a deliberately minimal philosophy. Whisppr prioritizes essential communication, calmness, clarity, and zero feature bloat over noisy complexity.",
      features: [
        "Calm, distraction-free messaging interface",
        "Low cognitive load UX hierarchy",
        "End-to-end encrypted private transport",
        "Mobile-first responsive interaction",
      ],
      icon: MessageSquare,
    },
    {
      id: "jposta",
      name: "Jposta",
      category: "Communication",
      status: "Work in Progress",
      statusColor: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
      headline: "Next-generation email & messaging platform.",
      description: "An email platform concept with the product ambition to rethink everyday email management, audience correspondence, and modern delivery infrastructure.",
      features: [
        "Reimagined inbox experience",
        "Integrated delivery infrastructure",
        "Team communication workflows",
        "Clean, clutter-free reading pane",
      ],
      icon: Mail,
    },
    {
      id: "jai",
      name: "JAI",
      category: "Operations & Support",
      status: "Built / Ongoing Integration",
      statusColor: "text-[#00D4F0] bg-[#00D4F0]/10 border-[#00D4F0]/20",
      headline: "AI-assisted customer support infrastructure.",
      description: "A customer support system designed to serve the J-platforms family. Includes an embeddable website widget, support dashboard, intelligent human agent handover, and escalation workflows.",
      features: [
        "Embeddable customer chat widget",
        "Admin conversation dashboard",
        "Automated AI response & human agent handover",
        "Supabase-backed session management",
      ],
      icon: Bot,
    },
    {
      id: "jcontrol",
      name: "JControl",
      category: "Operations & Support",
      status: "Concept / Development",
      statusColor: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
      headline: "Platform administration & management workflows.",
      description: "The management umbrella platform for administrative control, cross-product permissions, and unified analytics across the entire J-platforms family.",
      features: [
        "Centralized administrative console",
        "User permissions and access control",
        "Cross-platform operational analytics",
        "Ecosystem configuration tools",
      ],
      icon: Sliders,
    },
  ];

  const categories = ["ALL", "Media & Streaming", "Events & Gatherings", "Communication", "Operations & Support"];

  const filteredPlatforms = activeCategory === "ALL" 
    ? platforms 
    : platforms.filter((p) => {
        if (activeCategory === "Events & Gatherings") return p.category === "Events & Operations";
        return p.category === activeCategory;
      });

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F4F4F6] relative overflow-hidden">
      
      {/* Ambient Color Splash */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[450px] bg-[#00D4F0]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Header Banner */}
      <section className="px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-6xl mx-auto">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-zinc-300">
            <Layers className="w-3.5 h-3.5 text-[#00D4F0]" />
            <span>Digital Product Ecosystem</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
            The J-Platforms Family
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            A portfolio of independent digital products built under 36T Studios. Each platform serves a distinct purpose across streaming, event ticketing, communication, and operational workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 pt-8 font-medium text-xs overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#F59247] text-black font-bold shadow-[0_0_15px_rgba(245,146,71,0.3)]"
                  : "bg-[#111216] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/[0.18]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.id}
                id={platform.id}
                className="p-8 sm:p-10 rounded-3xl bg-[#111216] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] text-[#F59247] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${platform.statusColor}`}>
                      {platform.status}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[#00D4F0] uppercase tracking-wider mb-1">
                      {platform.category}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {platform.name}
                    </h2>
                    <div className="text-sm font-semibold text-[#F59247] mt-1 mb-3">
                      {platform.headline}
                    </div>
                    <p className="text-sm text-zinc-300 font-light leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-2">
                    {platform.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-400 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F59247] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-zinc-500">36T Studios Product Ecosystem</span>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-white hover:text-[#F59247] flex items-center gap-1 transition-colors"
                  >
                    <span>Partner / Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Tools Spotlight: Casting Portal & Infrastructure */}
      <section className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="space-y-4 mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#F59247]">
            Built Around Studio Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Custom Production &amp; Operational Tools
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl font-light">
            Beyond standalone consumer platforms, 36T Studios builds custom internal tools that streamline creative and operational workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-[#111216] border border-white/[0.08] space-y-3">
            <h3 className="text-xl font-bold text-white">
              I&apos;VE GOT IT Casting Portal
            </h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Mobile-first casting and audition intake build with an online character directory, audition video submission, and a private reviewer dashboard used for casting our December feature film.
            </p>
            <div className="text-xs text-[#00D4F0] font-medium pt-2">
              Character Directory · Video Submissions · Admin Roster
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#111216] border border-white/[0.08] space-y-3">
            <h3 className="text-xl font-bold text-white">
              Live Video Streaming Architecture
            </h3>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Proprietary video delivery workflows engineered with modern cloud hosting and low-latency encoding pipelines, designed to support live conferences and creator broadcasts.
            </p>
            <div className="text-xs text-[#00D4F0] font-medium pt-2">
              Edge Ingress · Web Viewing Shell · Adaptive Bitrate
            </div>
          </div>
        </div>
      </section>

      {/* Clean Bottom Contact CTA */}
      <section className="px-6 py-20 max-w-6xl mx-auto border-t border-white/[0.08]">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#111216] via-[#16171D] to-[#111216] border border-white/[0.12] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="space-y-2 max-w-lg relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Looking to Build or Deploy a Digital Product?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              We collaborate with founders, organizations, and event organizers to build scalable web products and streaming infrastructure.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#F59247] hover:bg-[#FF9F59] text-black text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(245,146,71,0.4)] shrink-0 relative z-10"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
