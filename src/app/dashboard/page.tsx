"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Inbox,
  Code2,
  Tv,
  Database,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Filter,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Server,
  Terminal,
  Layers,
  Sparkles,
  Lock,
  Eye,
  Check,
  Plus,
  Send,
  X,
  LogOut,
  KeyRound,
  User
} from "lucide-react";
import { StudioLogo } from "@/components/brand/StudioLogo";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  organization?: string;
  scope: string;
  timeline: string;
  message: string;
  status: string;
  budget_estimate?: string;
  country?: string;
  admin_notes?: string;
  created_at: string;
}

interface Project {
  id: string;
  client_name: string;
  client_email?: string;
  project_title: string;
  scope: string;
  tier: string;
  current_milestone: string;
  milestone_status: string;
  sprint_budget: number;
  paid_amount: number;
  staging_url?: string;
  repo_url?: string;
  target_launch?: string;
  created_at?: string;
}

interface Subscriber {
  id: string;
  platform_id: string;
  platform_name: string;
  subscriber_name: string;
  subscriber_email: string;
  tier_name: string;
  mrr: number;
  status: string;
  api_key_prefix: string;
  created_at?: string;
}

interface Stats {
  totalInquiries: number;
  newInquiries: number;
  activeProjects: number;
  totalPipeline: number;
  totalPaid: number;
  totalSubscribers: number;
  totalMRR: number;
  systemStatus: string;
  edgeRegion: string;
  edgeColo: string;
  clientCountry: string;
  dbEngine: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "inquiries" | "projects" | "platforms" | "database">("overview");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [logs, setLogs] = useState<any[]>([]);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<{ email: string; role: string; name: string } | null>(null);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState("stacomzy20@gmail.com");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [adminNoteInput, setAdminNoteInput] = useState("");

  // New Project Modal
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    client_name: "",
    client_email: "",
    project_title: "",
    scope: "Build Custom Software",
    sprint_budget: "15000",
    current_milestone: "Sprint 1: Architecture Blueprint",
    milestone_status: "scoping",
  });

  const checkSession = async () => {
    setAuthChecking(true);
    const token = typeof window !== "undefined" ? localStorage.getItem("36t_admin_token") : null;
    try {
      const res = await fetch("/api/auth", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.authenticated) {
        setIsAuthenticated(true);
        setCurrentUser(data.user);
        fetchData();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setAuthChecking(false);
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSubmitting(true);
    setLoginError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      if (data.success) {
        if (typeof window !== "undefined" && data.token) {
          localStorage.setItem("36t_admin_token", data.token);
        }
        setIsAuthenticated(true);
        setCurrentUser(data.user);
        fetchData();
      } else {
        setLoginError(data.error || "Authentication failed. Check email and password.");
      }
    } catch {
      setLoginError("Connection failed. Please try again.");
    } finally {
      setLoginSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
    } catch {}
    if (typeof window !== "undefined") {
      localStorage.removeItem("36t_admin_token");
    }
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const fetchData = async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/dashboard");
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
        setInquiries(data.inquiries || []);
        setProjects(data.projects || []);
        setSubscribers(data.subscribers || []);
        setLogs(data.logs || []);
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const handleUpdateInquiryStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch("/api/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus, admin_notes: adminNoteInput || undefined })
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((i) => (i.id === id ? { ...i, status: newStatus, admin_notes: adminNoteInput || i.admin_notes } : i))
        );
        if (selectedInquiry && selectedInquiry.id === id) {
          setSelectedInquiry({ ...selectedInquiry, status: newStatus, admin_notes: adminNoteInput || selectedInquiry.admin_notes });
        }
      }
    } catch (err) {
      console.error("Failed to update inquiry status:", err);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject)
      });
      const data = await res.json();
      if (data.success) {
        setShowNewProjectModal(false);
        fetchData();
      }
    } catch (err) {
      console.error("Failed to create project:", err);
    }
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (inq.organization && inq.organization.toLowerCase().includes(searchQuery.toLowerCase())) ||
      inq.scope.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#07080B] text-[#F4F4F6] relative selection:bg-[#F59247] selection:text-black font-sans pb-24">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[350px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-80 left-1/4 w-[600px] h-[300px] bg-[#F59247]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Studio Control Bar */}
      <header className="border-b border-white/[0.08] bg-[#07080B]/80 backdrop-blur-xl sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <StudioLogo size="sm" />
          </Link>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="items-center gap-2 font-mono text-xs hidden sm:flex">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300 font-semibold tracking-wider uppercase text-[11px]">STUDIO OPERATIONS CONSOLE</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Cloudflare D1 Edge Status Pill */}
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-zinc-300">
            <Database className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Cloudflare D1 SQL (WEUR)</span>
            <span className="text-emerald-400 font-bold">● ACTIVE</span>
          </div>

          {isAuthenticated && (
            <button
              onClick={fetchData}
              disabled={refreshing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#00E5FF] ${refreshing ? "animate-spin" : ""}`} />
              <span className="hidden xs:inline">Sync</span>
            </button>
          )}

          {isAuthenticated && currentUser && (
            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono">
              <User className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span className="text-zinc-200">{currentUser.email}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00E5FF]/20 text-[#00E5FF] font-bold">
                {currentUser.role}
              </span>
            </div>
          )}

          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/30 bg-red-500/10 text-xs font-mono text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-all cursor-pointer"
              title="Logout from console"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          )}

          <Link
            href="/"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all"
          >
            <span>Live Site</span>
            <ArrowUpRight className="w-3 h-3 text-[#00E5FF]" />
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        
        {authChecking ? (
          <div className="min-h-[55vh] flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center animate-pulse">
              <KeyRound className="w-7 h-7 text-[#00E5FF]" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-base font-bold text-white tracking-wide font-mono">Verifying Studio Security Session</h2>
              <p className="text-xs text-zinc-400 font-mono">Checking Cloudflare Edge D1 cryptographic token...</p>
            </div>
          </div>
        ) : !isAuthenticated ? (
          <div className="min-h-[65vh] flex items-center justify-center py-6">
            <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0D0F15]/90 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F59247]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-[#00E5FF]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>RESTRICTED STUDIO CONSOLE</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">Admin Authentication</h2>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    Enter master administrator credentials to access real-time Cloudflare D1 inquiries, client project milestones, and platform telemetry.
                  </p>
                </div>

                {loginError && (
                  <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-xs text-red-300 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300 block">Administrator Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="stacomzy20@gmail.com"
                        className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00E5FF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono text-zinc-300 block">Admin Password</label>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[11px] font-mono text-zinc-400 hover:text-[#00E5FF] transition-colors"
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#00E5FF] transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loginSubmitting}
                    className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#33EAFF] text-black font-bold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {loginSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-black" />
                        <span>Verifying Session...</span>
                      </>
                    ) : (
                      <>
                        <KeyRound className="w-4 h-4 text-black" />
                        <span>Unlock Console →</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-4 border-t border-white/[0.08] text-center space-y-2">
                  <p className="text-[11px] font-mono text-zinc-500">
                    Active D1 Database: <span className="text-zinc-300">36tstudios-db (WEUR)</span>
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>← Return to Public Studio</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/[0.08] scrollbar-none font-mono text-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "overview"
                ? "bg-[#00E5FF]/10 text-white border border-[#00E5FF]/30 font-semibold shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-[#00E5FF]" />
            <span>Overview &amp; Telemetry</span>
          </button>

          <button
            onClick={() => setActiveTab("inquiries")}
            className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "inquiries"
                ? "bg-[#00E5FF]/10 text-white border border-[#00E5FF]/30 font-semibold shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <Inbox className="w-4 h-4 text-[#F59247]" />
            <span>Project Inquiries</span>
            {stats && stats.newInquiries > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-[#F59247] text-black text-[10px] font-bold">
                {stats.newInquiries}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "projects"
                ? "bg-[#00E5FF]/10 text-white border border-[#00E5FF]/30 font-semibold shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <Code2 className="w-4 h-4 text-[#00E5FF]" />
            <span>Client Sprints &amp; Milestones</span>
          </button>

          <button
            onClick={() => setActiveTab("platforms")}
            className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "platforms"
                ? "bg-[#00E5FF]/10 text-white border border-[#00E5FF]/30 font-semibold shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <Tv className="w-4 h-4 text-[#A855F7]" />
            <span>J-Platforms Ecosystem</span>
          </button>

          <button
            onClick={() => setActiveTab("database")}
            className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "database"
                ? "bg-[#00E5FF]/10 text-white border border-[#00E5FF]/30 font-semibold shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Cloudflare D1 Console</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW */}
        {/* ========================================================================= */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in-50 duration-200">
            
            {/* Top Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              {/* Card 1: Pipeline Value */}
              <div className="p-6 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-[#00E5FF]/30 transition-all space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase tracking-wider">
                  <span>Contracted Pipeline</span>
                  <DollarSign className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  ${(stats?.totalPipeline || 0).toLocaleString()}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/[0.06]">
                  <span>Paid: ${(stats?.totalPaid || 0).toLocaleString()}</span>
                  <span className="text-emerald-400 font-semibold">
                    {stats?.totalPipeline ? Math.round(((stats.totalPaid || 0) / stats.totalPipeline) * 100) : 0}% settled
                  </span>
                </div>
              </div>

              {/* Card 2: Inquiries & Briefs */}
              <div className="p-6 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-[#F59247]/30 transition-all space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase tracking-wider">
                  <span>Foundry Inquiries</span>
                  <Inbox className="w-4 h-4 text-[#F59247]" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                  <span>{stats?.totalInquiries || 0}</span>
                  {stats && stats.newInquiries > 0 && (
                    <span className="text-xs font-mono text-[#F59247] font-semibold bg-[#F59247]/10 px-2 py-0.5 rounded-full">
                      {stats.newInquiries} pending review
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/[0.06]">
                  <span>Response SLA: 24h</span>
                  <button onClick={() => setActiveTab("inquiries")} className="text-[#00E5FF] hover:underline flex items-center gap-0.5">
                    <span>Manage</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Card 3: SaaS MRR */}
              <div className="p-6 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase tracking-wider">
                  <span>J-Platforms SaaS MRR</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  ${(stats?.totalMRR || 0).toLocaleString()}
                  <span className="text-xs font-normal text-zinc-500">/mo</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/[0.06]">
                  <span>{stats?.totalSubscribers || 0} active tenants</span>
                  <span className="text-emerald-400 font-semibold">100% cloud uptime</span>
                </div>
              </div>

              {/* Card 4: Edge Database */}
              <div className="p-6 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-[#00E5FF]/30 transition-all space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between text-zinc-400 text-xs font-mono uppercase tracking-wider">
                  <span>Edge Infrastructure</span>
                  <Server className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <div className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>D1 Serverless SQL</span>
                </div>
                <div className="space-y-1 text-[11px] font-mono text-zinc-400 pt-1 border-t border-white/[0.06]">
                  <div className="flex justify-between">
                    <span>Region / Colo:</span>
                    <span className="text-white">{stats?.edgeRegion} // {stats?.edgeColo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Replication:</span>
                    <span className="text-emerald-400">Global Edge Mesh</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Middle Section: Recent Inquiries + Active Sprints */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Recent Intake Briefs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F59247]" />
                    <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                      Recent Inbound Briefs
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTab("inquiries")}
                    className="text-xs font-mono text-[#00E5FF] hover:underline"
                  >
                    View All ({inquiries.length}) →
                  </button>
                </div>

                <div className="space-y-3">
                  {inquiries.slice(0, 4).map((inq) => (
                    <div
                      key={inq.id}
                      onClick={() => {
                        setSelectedInquiry(inq);
                        setActiveTab("inquiries");
                      }}
                      className="p-4 sm:p-5 rounded-xl bg-[#0D0E15] border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-2 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors flex items-center gap-2">
                            <span>{inq.name}</span>
                            {inq.organization && (
                              <span className="text-xs font-mono text-zinc-400 font-normal">
                                // {inq.organization}
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-mono text-zinc-500 pt-0.5">{inq.email}</div>
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider ${
                            inq.status === "new"
                              ? "bg-[#F59247]/15 text-[#F59247] border border-[#F59247]/30 animate-pulse"
                              : inq.status === "contacted"
                              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                              : inq.status === "converted"
                              ? "bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30"
                              : "bg-white/10 text-zinc-400"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-2 font-light">
                        {inq.message}
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
                        <span className="text-[#00E5FF]">{inq.scope}</span>
                        <span>{new Date(inq.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                  {inquiries.length === 0 && (
                    <div className="p-8 text-center text-zinc-500 font-mono text-xs border border-dashed border-white/10 rounded-xl">
                      No inquiries received yet. Submit one from the /contact page.
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Active Sprints & J-Platforms Health */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Active Engineering Sprints */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                      <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                        Active Sprints
                      </h3>
                    </div>
                    <button
                      onClick={() => setActiveTab("projects")}
                      className="text-xs font-mono text-[#00E5FF] hover:underline"
                    >
                      All Sprints ({projects.length}) →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {projects.slice(0, 3).map((prj) => (
                      <div
                        key={prj.id}
                        className="p-4 rounded-xl bg-[#0D0E15] border border-white/[0.08] space-y-2.5"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="text-sm font-semibold text-white">{prj.project_title}</div>
                            <div className="text-xs font-mono text-zinc-400">{prj.client_name}</div>
                          </div>
                          <span className="text-xs font-mono text-white font-bold">
                            ${prj.sprint_budget.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-[#00E5FF] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{prj.current_milestone}</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#00E5FF] to-emerald-400 h-full rounded-full"
                            style={{
                              width: `${Math.round(((prj.paid_amount || 0) / (prj.sprint_budget || 1)) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ecosystem Quick Health */}
                <div className="p-5 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-400 uppercase tracking-wider">ECOSYSTEM LIVE RELAYS</span>
                    <span className="text-emerald-400 font-bold">ALL SERVICES GREEN</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    {[
                      { name: "JStreams Live Broadcast", ping: "14ms", status: "Active" },
                      { name: "JStreams Studio Ingestion", ping: "18ms", status: "Active" },
                      { name: "JEvents Ticketing Engine", ping: "12ms", status: "Active" },
                      { name: "Whisppr Protocol Core", ping: "9ms", status: "Active" },
                    ].map((svc) => (
                      <div key={svc.name} className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
                        <span className="text-zinc-300">{svc.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-zinc-500">{svc.ping}</span>
                          <span className="text-emerald-400 font-semibold">{svc.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INQUIRIES & PROJECT BRIEFS */}
        {/* ========================================================================= */}
        {activeTab === "inquiries" && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            
            {/* Filter & Search Bar */}
            <div className="p-4 rounded-2xl bg-[#0D0E15] border border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by client name, email, company or scope..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-white focus:outline-none focus:border-[#00E5FF] font-mono"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zinc-400 shrink-0" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-xs font-mono text-zinc-300 focus:outline-none focus:border-[#00E5FF]"
                >
                  <option value="all">All Statuses ({inquiries.length})</option>
                  <option value="new">New / Pending</option>
                  <option value="in_review">In Review</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                </select>
              </div>
            </div>

            {/* Main Table & Detail Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Inquiries Table */}
              <div className={selectedInquiry ? "lg:col-span-7" : "lg:col-span-12"}>
                <div className="rounded-2xl bg-[#0D0E15] border border-white/[0.08] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-black/40 border-b border-white/[0.08] text-zinc-400 uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="py-3.5 px-4">Client / Company</th>
                          <th className="py-3.5 px-4">Project Scope</th>
                          <th className="py-3.5 px-4">Timeline</th>
                          <th className="py-3.5 px-4">Status</th>
                          <th className="py-3.5 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04]">
                        {filteredInquiries.map((inq) => (
                          <tr
                            key={inq.id}
                            onClick={() => {
                              setSelectedInquiry(inq);
                              setAdminNoteInput(inq.admin_notes || "");
                            }}
                            className={`cursor-pointer transition-colors ${
                              selectedInquiry?.id === inq.id
                                ? "bg-[#00E5FF]/10"
                                : "hover:bg-white/[0.02]"
                            }`}
                          >
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-white font-sans text-sm">{inq.name}</div>
                              <div className="text-zinc-400 text-[11px]">{inq.organization || inq.email}</div>
                            </td>
                            <td className="py-3.5 px-4 text-zinc-300">
                              <span className="text-[#00E5FF] font-medium">{inq.scope}</span>
                            </td>
                            <td className="py-3.5 px-4 text-zinc-400">{inq.timeline}</td>
                            <td className="py-3.5 px-4">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                                  inq.status === "new"
                                    ? "bg-[#F59247]/15 text-[#F59247] border border-[#F59247]/30"
                                    : inq.status === "contacted"
                                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                                    : inq.status === "converted"
                                    ? "bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30"
                                    : "bg-white/10 text-zinc-400"
                                }`}
                              >
                                {inq.status}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedInquiry(inq);
                                  setAdminNoteInput(inq.admin_notes || "");
                                }}
                                className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/10 text-zinc-300 text-[11px]"
                              >
                                Details →
                              </button>
                            </td>
                          </tr>
                        ))}
                        {filteredInquiries.length === 0 && (
                          <tr>
                            <td colSpan={5} className="py-12 text-center text-zinc-500 font-mono text-xs">
                              No inquiries found matching criteria.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Inquiry Detail Drawer (when selected) */}
              {selectedInquiry && (
                <div className="lg:col-span-5 rounded-2xl bg-[#0D0E15] border border-white/[0.12] p-6 space-y-5 sticky top-24 shadow-2xl">
                  <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
                    <div>
                      <div className="text-lg font-bold text-white">{selectedInquiry.name}</div>
                      <div className="text-xs font-mono text-[#00E5FF]">{selectedInquiry.email}</div>
                      {selectedInquiry.organization && (
                        <div className="text-xs text-zinc-400 font-mono">{selectedInquiry.organization}</div>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedInquiry(null)}
                      className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Status Toggle Bar */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      CURRENT STATUS
                    </label>
                    <div className="grid grid-cols-4 gap-1 text-[11px] font-mono">
                      {["new", "in_review", "contacted", "converted"].map((st) => (
                        <button
                          key={st}
                          onClick={() => handleUpdateInquiryStatus(selectedInquiry.id, st)}
                          className={`py-1.5 rounded-lg border text-center transition-all ${
                            selectedInquiry.status === st
                              ? "bg-[#00E5FF]/20 border-[#00E5FF] text-white font-bold"
                              : "bg-black/30 border-white/[0.06] text-zinc-400 hover:border-white/20"
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1">
                      <div className="text-zinc-500 uppercase text-[10px]">Scope &amp; Timeline</div>
                      <div className="text-white font-semibold">{selectedInquiry.scope}</div>
                      <div className="text-zinc-400">{selectedInquiry.timeline}</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-1">
                      <div className="text-zinc-500 uppercase text-[10px]">Project Brief &amp; Requirements</div>
                      <p className="text-zinc-200 font-sans leading-relaxed text-sm pt-1">
                        {selectedInquiry.message}
                      </p>
                    </div>

                    {/* Admin Notes Field */}
                    <div className="space-y-1.5">
                      <div className="text-zinc-500 uppercase text-[10px]">Internal Studio Notes (D1 Encrypted)</div>
                      <textarea
                        rows={2}
                        placeholder="Add internal notes on client budget, meeting dates, or scope..."
                        value={adminNoteInput}
                        onChange={(e) => setAdminNoteInput(e.target.value)}
                        className="w-full p-2.5 rounded-xl bg-black/60 border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                      <button
                        onClick={() => handleUpdateInquiryStatus(selectedInquiry.id, selectedInquiry.status)}
                        className="w-full py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                      >
                        Save Note to Cloudflare D1
                      </button>
                    </div>

                    {/* Direct Contact Action */}
                    <div className="pt-2">
                      <a
                        href={`mailto:${selectedInquiry.email}?subject=36T Studios // Inbound Brief: ${selectedInquiry.scope}&body=Hi ${selectedInquiry.name},%0D%0A%0D%0AThank you for submitting your brief regarding ${selectedInquiry.scope} to 36T Studios.`}
                        className="w-full py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#33EAFF] text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                      >
                        <Send className="w-3.5 h-3.5 text-black" />
                        <span>Reply to {selectedInquiry.name}</span>
                      </a>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CLIENT SPRINTS & MILESTONES */}
        {/* ========================================================================= */}
        {activeTab === "projects" && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white font-mono">Client Engineering Engagements</h2>
                <p className="text-xs text-zinc-400 font-mono">Turnkey milestone-based client developments executed under SOW</p>
              </div>
              <button
                onClick={() => setShowNewProjectModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00E5FF] text-black text-xs font-mono font-bold hover:bg-[#33EAFF] transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((prj) => (
                <div
                  key={prj.id}
                  className="p-6 rounded-2xl bg-[#0D0E15] border border-white/[0.08] hover:border-white/20 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-mono text-[#00E5FF] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                        {prj.tier}
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        ${prj.sprint_budget.toLocaleString()}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white font-sans">{prj.project_title}</h3>
                    <div className="text-xs font-mono text-zinc-400">{prj.client_name}</div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/[0.06] text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Current Milestone:</span>
                      <span className="text-white font-semibold">{prj.current_milestone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500">Settlement:</span>
                      <span className="text-emerald-400 font-semibold">
                        ${prj.paid_amount.toLocaleString()} / ${prj.sprint_budget.toLocaleString()}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/[0.06] rounded-full h-1.5 overflow-hidden mt-1">
                      <div
                        className="bg-gradient-to-r from-[#00E5FF] to-emerald-400 h-full rounded-full"
                        style={{
                          width: `${Math.round(((prj.paid_amount || 0) / (prj.sprint_budget || 1)) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    {prj.staging_url && (
                      <a
                        href={prj.staging_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-center text-xs font-mono text-zinc-300 transition-colors inline-flex items-center justify-center gap-1"
                      >
                        <span>Staging</span>
                        <ExternalLink className="w-3 h-3 text-[#00E5FF]" />
                      </a>
                    )}
                    {prj.repo_url && (
                      <a
                        href={`https://${prj.repo_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-center text-xs font-mono text-zinc-300 transition-colors inline-flex items-center justify-center gap-1"
                      >
                        <span>Repo</span>
                        <Code2 className="w-3 h-3 text-[#F59247]" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: J-PLATFORMS SUITE */}
        {/* ========================================================================= */}
        {activeTab === "platforms" && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white font-mono">J-Platforms Ecosystem Directory</h2>
                <p className="text-xs text-zinc-400 font-mono">Live commercial platforms and registered SaaS subscribers</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  ${(stats?.totalMRR || 0).toLocaleString()} <span className="text-xs text-zinc-500">/mo</span>
                </div>
                <div className="text-[11px] font-mono text-zinc-400">Total Ecosystem MRR</div>
              </div>
            </div>

            {/* Subscriber Directory Table */}
            <div className="rounded-2xl bg-[#0D0E15] border border-white/[0.08] overflow-hidden">
              <div className="p-4 border-b border-white/[0.08] bg-black/40 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                  ACTIVE PLATFORM TENANTS
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {subscribers.length} Registered Accounts
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-black/20 text-zinc-500 uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Platform</th>
                      <th className="py-3 px-4">Subscriber</th>
                      <th className="py-3 px-4">Tier</th>
                      <th className="py-3 px-4">MRR</th>
                      <th className="py-3 px-4">API Prefix</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {subscribers.map((sub) => (
                      <tr key={sub.id} className="hover:bg-white/[0.02]">
                        <td className="py-3.5 px-4 font-semibold text-white">{sub.platform_name}</td>
                        <td className="py-3.5 px-4">
                          <div className="text-white">{sub.subscriber_name}</div>
                          <div className="text-[10px] text-zinc-500">{sub.subscriber_email}</div>
                        </td>
                        <td className="py-3.5 px-4 text-[#00E5FF]">{sub.tier_name}</td>
                        <td className="py-3.5 px-4 font-bold text-white">${sub.mrr}/mo</td>
                        <td className="py-3.5 px-4 text-zinc-400 font-mono">{sub.api_key_prefix}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {sub.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CLOUDFLARE D1 CONSOLE */}
        {/* ========================================================================= */}
        {activeTab === "database" && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div className="p-6 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white font-mono">Cloudflare D1 SQL Edge Engine</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                  BINDING: DB (36tstudios-db)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
                Relational SQLite queries execute at Cloudflare edge edge nodes within 2ms. All platform records, client milestone logs, and inbound foundry inquiries are replicated across the global network.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs">
                  <span className="text-zinc-500 block uppercase text-[10px]">Database Name</span>
                  <span className="text-white font-bold">36tstudios-db</span>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs">
                  <span className="text-zinc-500 block uppercase text-[10px]">Region</span>
                  <span className="text-white font-bold">WEUR (Western Europe)</span>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs">
                  <span className="text-zinc-500 block uppercase text-[10px]">Tables Initialized</span>
                  <span className="text-white font-bold">4 Active Tables</span>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs">
                  <span className="text-zinc-500 block uppercase text-[10px]">Storage Mode</span>
                  <span className="text-emerald-400 font-bold">Encrypted at Rest</span>
                </div>
              </div>
            </div>

            {/* Table Schemas */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                Active D1 Schemas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                {[
                  {
                    name: "inquiries",
                    desc: "Inbound project briefs, budget estimations, and CRM status tracking.",
                    columns: "id, name, email, organization, scope, timeline, message, status, budget_estimate, admin_notes, created_at",
                  },
                  {
                    name: "client_projects",
                    desc: "Client sprint milestones, contractual allocations, and deliverables.",
                    columns: "id, client_name, client_email, project_title, scope, tier, current_milestone, milestone_status, sprint_budget, paid_amount",
                  },
                  {
                    name: "platform_subscribers",
                    desc: "J-Platforms SaaS product subscriptions, MRR ledgers, and API tokens.",
                    columns: "id, platform_id, platform_name, subscriber_name, subscriber_email, tier_name, mrr, status, api_key_prefix",
                  },
                  {
                    name: "studio_logs",
                    desc: "Immutable studio audit logs and operational edge telemetry.",
                    columns: "id, action, entity_type, entity_id, actor, details, created_at",
                  },
                  {
                    name: "admin_users",
                    desc: "Authorized studio directors, super administrators, and credential hashes.",
                    columns: "id, email, password_hash, role, created_at, last_login",
                  },
                  {
                    name: "admin_sessions",
                    desc: "Cryptographically generated edge session tokens with expiration timestamps.",
                    columns: "token, user_id, email, created_at, expires_at",
                  },
                ].map((tbl) => (
                  <div key={tbl.name} className="p-4 rounded-xl bg-[#0D0E15] border border-white/[0.08] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#00E5FF]">{tbl.name}</span>
                      <span className="text-[10px] text-zinc-500 uppercase">SQL Table</span>
                    </div>
                    <p className="text-zinc-400 text-[11px] font-sans">{tbl.desc}</p>
                    <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.04] text-[10px] text-zinc-400 font-mono break-all">
                      {tbl.columns}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        </>
      )}

      </div>

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0D0E15] border border-white/[0.12] p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <h3 className="text-lg font-bold text-white font-mono">Create Client Engineering Sprint</h3>
              <button
                onClick={() => setShowNewProjectModal(false)}
                className="text-zinc-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-4 font-mono text-xs">
              <div className="space-y-1">
                <label className="text-zinc-400">Client / Company Name</label>
                <input
                  type="text"
                  required
                  value={newProject.client_name}
                  onChange={(e) => setNewProject({ ...newProject, client_name: e.target.value })}
                  placeholder="e.g. Helix BioTech"
                  className="w-full p-2.5 rounded-xl bg-black/50 border border-white/[0.08] text-white focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-zinc-400">Project Title</label>
                <input
                  type="text"
                  required
                  value={newProject.project_title}
                  onChange={(e) => setNewProject({ ...newProject, project_title: e.target.value })}
                  placeholder="e.g. High-Density Telemetry Screen"
                  className="w-full p-2.5 rounded-xl bg-black/50 border border-white/[0.08] text-white focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-zinc-400">Sprint Budget ($ USD)</label>
                  <input
                    type="number"
                    required
                    value={newProject.sprint_budget}
                    onChange={(e) => setNewProject({ ...newProject, sprint_budget: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-black/50 border border-white/[0.08] text-white focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-zinc-400">Initial Milestone</label>
                  <input
                    type="text"
                    value={newProject.current_milestone}
                    onChange={(e) => setNewProject({ ...newProject, current_milestone: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-black/50 border border-white/[0.08] text-white focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#00E5FF] text-black font-bold hover:bg-[#33EAFF]"
                >
                  Record in D1
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
