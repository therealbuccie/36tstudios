export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "Streaming" | "Events" | "Communication" | "Operations & AI" | "Cinema";
  status: "Live" | "In Development" | "Beta" | "Studio Production" | "Internal System";
  url?: string;
  description: string;
  capabilities: string[];
  metrics?: { label: string; value: string }[];
  suite?: string;
}

export interface PlatformSuite {
  id: string;
  title: string;
  code: string;
  tagline: string;
  color: string;
}

export const platformSuites: PlatformSuite[] = [
  {
    id: "Streaming",
    title: "Streaming & Broadcast Infrastructure",
    code: "SUITE A",
    tagline: "High-throughput linear web television and cloud broadcast engines",
    color: "#00E5FF",
  },
  {
    id: "Events",
    title: "Events & Real-Time Conferences",
    code: "SUITE B",
    tagline: "Turnkey digital ticketing, admissions, and virtual summit mesh",
    color: "#FF8A00",
  },
  {
    id: "Communication",
    title: "Next-Gen Communication Protocols",
    code: "SUITE C",
    tagline: "Low-cognitive-load messaging and high-speed asynchronous mail",
    color: "#00E5FF",
  },
  {
    id: "Operations & AI",
    title: "Enterprise Operations & AI Infrastructure",
    code: "SUITE D",
    tagline: "Centralized autonomous resolution and unified administrative control",
    color: "#FF8A00",
  },
  {
    id: "Cinema",
    title: "Studio Productions & Narrative Lab",
    code: "MEDIA WING",
    tagline: "Original narrative feature cinema and custom production software",
    color: "#F59247",
  },
];

export const platformsData: Product[] = [
  // SUITE A: STREAMING & BROADCAST INFRASTRUCTURE
  {
    id: "jstreams-tv",
    name: "JStreams Live TV",
    tagline: "High-Throughput Digital Streaming & Live Network Engine",
    category: "Streaming",
    status: "Live",
    url: "https://jstreams.pro",
    description: "JStreams Live TV is a proprietary streaming ecosystem engineered for high-fidelity live broadcasts and web-based video delivery. Built on low-latency distribution infrastructure, it powers modern linear web television, on-demand programming, and scalable video distribution with zero playback buffering.",
    capabilities: [
      "Live Broadcast Delivery",
      "Low-Latency Playback",
      "Video CDN Integrations",
      "Custom Player Controls",
      "Enterprise Viewing Architecture",
    ],
    metrics: [
      { label: "Throughput", value: "Sub-Second" },
      { label: "Deployment", value: "jstreams.pro" },
    ],
    suite: "SUITE A // STREAMING",
  },
  {
    id: "jstreams-studio",
    name: "JStreams Studio",
    tagline: "Browser-Based Mobile-First Live Broadcast Suite",
    category: "Streaming",
    status: "Live",
    url: "https://studio.jstreams.pro",
    description: "A modern, hardware-free live broadcast control room that runs entirely in the browser. Tailored for mobile-first creators and live producers, JStreams Studio prioritizes portrait streaming workflows while providing instant controls for scenes, multi-feed switching, and broadcast output.",
    capabilities: [
      "Pure Browser WebRTC Production",
      "Mobile-Portrait Broadcast Pipelines",
      "Single-Operator Control Workspace",
      "Instant Stream Distribution",
      "Multi-Feed Switching",
    ],
    metrics: [
      { label: "Interface", value: "Portrait-First" },
      { label: "Engine", value: "WebRTC Browser" },
    ],
    suite: "SUITE A // STREAMING",
  },

  // SUITE B: EVENTS & REAL-TIME CONFERENCES
  {
    id: "jevents",
    name: "JEvents",
    tagline: "Turnkey Event Architecture & Digital Ticketing Infrastructure",
    category: "Events",
    status: "Live",
    url: "https://jevents.online",
    description: "An end-to-end ticketing and event management platform built for modern organizers and attendees. JEvents unifies ticket tiers, automated checkout, instantaneous attendee confirmations, and real-time revenue analytics into a clean, minimal interface.",
    capabilities: [
      "Multi-Tier Ticket Sales",
      "Automated Order Fulfillment",
      "Secure Payment Gateways",
      "Attendee Check-In Dashboards",
      "Administrative Fee Control",
    ],
    metrics: [
      { label: "Fulfillment", value: "Instantaneous" },
      { label: "Checkout", value: "PCI-DSS Compliant" },
    ],
    suite: "SUITE B // EVENTS",
  },
  {
    id: "jconference",
    name: "JConference",
    tagline: "Secure Virtual Summits & Interactive Video Gathering",
    category: "Events",
    status: "In Development",
    url: "https://jconference.live",
    description: "A purpose-built video gathering platform engineered for digital summits, workshops, and private conferences. Backed by dedicated video transport infrastructure, JConference pairs interactive multi-party video with native ticketing and monetization for premium online gatherings.",
    capabilities: [
      "Low-Latency Video Mesh",
      "Integrated Access Paywalls",
      "Interactive Audience Stages",
      "Dedicated Session Rooms",
      "Enterprise Monetization",
    ],
    metrics: [
      { label: "Topology", value: "Video Mesh" },
      { label: "Access", value: "Native Paywall" },
    ],
    suite: "SUITE B // EVENTS",
  },

  // SUITE C: NEXT-GEN COMMUNICATION PROTOCOLS
  {
    id: "whisppr",
    name: "Whisppr",
    tagline: "Minimalist, Low-Cognitive-Load Peer-to-Peer Messaging",
    category: "Communication",
    status: "Beta",
    description: "A calm, clutter-free messaging environment designed around essential human connection. Rejecting unnecessary feature bloat and digital noise, Whisppr strips away friction to provide a fast, secure, and visually quiet communication experience.",
    capabilities: [
      "Essential Messaging Topology",
      "Distraction-Free Interface",
      "Privacy-First Data Handling",
      "Lightweight Payload Footprint",
      "Zero-Cognitive Clutter",
    ],
    metrics: [
      { label: "Latency", value: "< 12ms Edge" },
      { label: "Protocol", value: "Proprietary P2P" },
    ],
    suite: "SUITE C // COMMUNICATION",
  },
  {
    id: "jposta",
    name: "Jposta",
    tagline: "Reimagined Asynchronous Mail Architecture",
    category: "Communication",
    status: "In Development",
    url: "https://jposta.com",
    description: "An independent email platform engineered to modernize everyday inbox dynamics. Built on proprietary delivery infrastructure, Jposta rethinks desktop and mobile mail management with a focus on speed, typography, and focused communication.",
    capabilities: [
      "Custom Mail Routing Core",
      "Distraction-Free Ergonomics",
      "Secure Message Transport",
      "Streamlined Productivity Workflows",
      "High-Speed Asynchronous Delivery",
    ],
    metrics: [
      { label: "Protocol", value: "Modern SMTP/IMAP" },
      { label: "Typography", value: "Swiss Focus" },
    ],
    suite: "SUITE C // COMMUNICATION",
  },

  // SUITE D: ENTERPRISE OPERATIONS & AI INFRASTRUCTURE
  {
    id: "jai",
    name: "JAI",
    tagline: "Intelligent Multi-Tenant Support & Autonomous Agent Infrastructure",
    category: "Operations & AI",
    status: "Live",
    url: "https://jai.jposta.com",
    description: "The centralized artificial intelligence support backbone powering the entire 36T ecosystem. JAI blends conversational automated resolution with human agent escalation, shared ticketing, and real-time conversation transfers across any connected application.",
    capabilities: [
      "Embeddable Lightweight Client Widget",
      "Autonomous Conversation Resolution",
      "Agent Desk with Live Handover",
      "Multi-Platform SDK",
      "Cross-App Support Synchronization",
    ],
    metrics: [
      { label: "Resolution", value: "Autonomous + Escalation" },
      { label: "Deployment", value: "Multi-Tenant SDK" },
    ],
    suite: "SUITE D // OPERATIONS & AI",
  },
  {
    id: "jcontrol",
    name: "JControl",
    tagline: "Unified Administrative Command & Platform Governance",
    category: "Operations & AI",
    status: "Internal System",
    description: "The internal operations cockpit for managing services, system health, user provisioning, and operational workflows across the J-Platforms portfolio.",
    capabilities: [
      "Global Telemetry Oversight",
      "Platform Permission Tiers",
      "Unified Billing Diagnostics",
      "Centralized Administrative Controls",
      "System Health Monitoring",
    ],
    metrics: [
      { label: "Scope", value: "Portfolio Governance" },
      { label: "Access", value: "Private Command" },
    ],
    suite: "SUITE D // OPERATIONS & AI",
  },

  // MEDIA WING: ORIGINAL PRODUCTIONS
  {
    id: "ive-got-it",
    name: "I’VE GOT IT",
    tagline: "An Original Holiday Narrative Feature",
    category: "Cinema",
    status: "Studio Production",
    description: "An original feature-length holiday drama developed and produced under the 36T Studios banner. Anchored by character-driven storytelling, the production represents the studio’s cinematic vision, bringing together screenwriting, cinematic direction, and global distribution strategy.",
    capabilities: [
      "Original Screenplay Development",
      "Principal Photography",
      "International Casting & Direction",
      "Global Theatrical Distribution",
      "Cinematic Pipeline Integration",
    ],
    metrics: [
      { label: "Format", value: "Feature Film (2.39:1)" },
      { label: "Timeline", value: "December 2026" },
    ],
    suite: "MEDIA WING // CINEMA",
  },
  {
    id: "casting-portal",
    name: "36T Casting Gateway",
    tagline: "Production Management & Digital Audition Gateway",
    category: "Cinema",
    status: "Live",
    url: "https://casting.36tstudios.org",
    description: "A custom-engineered casting and talent pipeline software built to streamline auditions for original studio productions. Enables talent discovery, video submission pipelines, and private reviewer evaluation dashboards.",
    capabilities: [
      "Character Roster Directory",
      "Audition Reel Ingestion",
      "Encrypted Candidate Data Profiles",
      "Private Reviewer Dashboards",
      "Casting Director Workflows",
    ],
    metrics: [
      { label: "Endpoint", value: "casting.36tstudios.org" },
      { label: "Security", value: "Encrypted Talent Mesh" },
    ],
    suite: "MEDIA WING // CINEMA",
  },
];
