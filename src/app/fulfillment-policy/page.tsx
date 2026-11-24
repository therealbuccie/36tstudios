import React from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle2, Zap, Server, FileCheck } from "lucide-react";

export const metadata = {
  title: "Delivery & Fulfillment Policy // 36T Studios",
  description: "Electronic Delivery, Digital SaaS Activation, and Custom Development Fulfillment Policy for 36T Studios.",
};

export default function FulfillmentPolicyPage() {
  return (
    <div className="min-h-screen bg-[#07080B] text-[#F4F4F6] relative overflow-hidden selection:bg-[#F59247] selection:text-black">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-96 left-1/4 w-[500px] h-[300px] bg-[#F59247]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-24 sm:pt-16 sm:pb-32">
        {/* Navigation Return Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all mb-8 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>← Back to Home</span>
        </Link>

        {/* Header Block */}
        <div className="space-y-4 mb-12 border-b border-white/[0.08] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] text-[10px] sm:text-xs font-mono text-[#00E5FF]">
            <Send className="w-3.5 h-3.5" />
            <span>COMMERCIAL POLICY // DIGITAL FULFILLMENT &amp; DELIVERY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Fulfillment &amp; Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-zinc-400">
            Last Updated: November 24, 2026 • Delivery Channel: 100% Electronic &amp; Digital
          </p>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            This Fulfillment and Delivery Policy describes how digital services, software licenses, platform access, and custom engineering code are provisioned and delivered to customers by <strong className="text-white font-semibold">36T Studios</strong>.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">

          {/* Section 1: Digital-Only Delivery Statement */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">01.</span>
              Digital-Only Service Delivery (No Physical Shipping)
            </h2>
            <p>
              36T Studios specializes exclusively in software engineering, digital platform infrastructure, cloud APIs, and studio media assets.
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-zinc-300 space-y-1">
              <div className="text-white font-bold uppercase tracking-wider">Notice to Cardholders &amp; Customers:</div>
              <div>We do NOT ship physical products, hardware, or postal packages. All deliverables are provisioned electronically via secure cloud infrastructure, automated emails, and private repository transfers.</div>
            </div>
          </section>

          {/* Section 2: J-Platforms SaaS Provisioning */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">02.</span>
              Software Subscriptions &amp; Instant Provisioning
            </h2>
            <p>
              For users purchasing tier upgrades or subscription access across the J-Platforms ecosystem (JStreams Studio, JEvents, Jposta, Whisppr Core):
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Instantaneous Electronic Activation:</strong> Upon successful payment confirmation by our PCI-DSS certified gateway, your account tier is activated immediately. Ingestion keys, live broadcast seats, and SDK credentials are provisioned in real-time.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Automated Delivery Confirmations:</strong> An automated confirmation containing your transaction receipt, service details, and access portal URL is transmitted to your registered billing email address within sixty (60) seconds of payment.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Custom Client Engineering Deliverables */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">03.</span>
              Custom Client Engineering Delivery Schedules
            </h2>
            <p>
              For bespoke software engineering, mobile applications, and enterprise architecture contracted under an executed Statement of Work (SOW):
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2">
                <Server className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Milestone Review &amp; Staging Environments:</strong> Deliverables are deployed to private, password-protected cloud staging environments (or dedicated test flight builds) according to agreed sprint timelines.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Source Code &amp; Manifest Release:</strong> Upon milestone client sign-off and invoice settlement, production assets, deployment manifests, Docker containers, and source code repositories are transferred via private Git repositories (GitHub / GitLab) or client-specified cloud infrastructure.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Billing Currencies & Receipts */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">04.</span>
              Billing Currencies &amp; Invoices
            </h2>
            <p>
              All service retainers, software licenses, and cloud usage fees are quoted and billed in United States Dollars (USD) or localized statutory currency equivalents. Formal electronic invoices, tax ledgers, and automated receipts are generated for every transaction and accessible inside your customer dashboard or via our billing desk.
            </p>
          </section>

          {/* Section 5: Delivery Support */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">05.</span>
              Technical Delivery Support &amp; Assistance
            </h2>
            <p>If you experience any delay in receiving digital credentials, invoice receipts, or staging access, please reach out directly:</p>
            <div className="font-mono text-xs text-zinc-300 space-y-1 pt-1">
              <div>Technical Support: <a href="mailto:support@36tstudios.org" className="text-[#00E5FF]">support@36tstudios.org</a></div>
              <div>Billing &amp; Invoicing: <a href="mailto:billing@36tstudios.org" className="text-[#00E5FF]">billing@36tstudios.org</a></div>
              <div>Telephone: <span className="text-white">+234 816 019 7013</span></div>
              <div>Operating Entity: 36T Studios</div>
              <div>Nigeria Center: Danbide Millennium, 22/23 Doherty Street, Alausa, Ikeja, Lagos, Nigeria</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
