import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, AlertCircle, CheckCircle2, Clock, Mail } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy // 36T Studios",
  description: "Official Refund, Cancellation, and Dispute Resolution Policy for J-Platforms subscriptions and custom engineering projects.",
};

export default function RefundPolicyPage() {
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.12] bg-white/[0.03] text-[10px] sm:text-xs font-mono text-[#F59247]">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>COMMERCIAL POLICY // REFUNDS &amp; DISPUTE RESOLUTION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-zinc-400">
            Last Updated: November 24, 2026 • Billing Desk: billing@36tstudios.org
          </p>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            This Policy sets forth the terms governing subscription cancellations, milestone deposit refunds, and transaction dispute resolutions for services provided by <strong className="text-white font-semibold">36T Studios</strong>.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">

          {/* Section 1: Pre-Dispute Notification Banner */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-[#F59247]/40 space-y-3 shadow-[0_0_30px_rgba(245,146,71,0.06)]">
            <div className="flex items-center gap-2 text-[#F59247] font-mono text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Mandatory Pre-Dispute Resolution SLA</span>
            </div>
            <p className="text-white font-medium">
              Cardholders and clients agree to contact our dedicated Billing Resolution Desk at <a href="mailto:billing@36tstudios.org" className="text-[#00E5FF] underline font-mono">billing@36tstudios.org</a> prior to filing any formal bank chargeback or payment gateway dispute.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400">
              Our accounting department operates with a <strong className="text-white">twenty-four (24) hour response SLA</strong> to directly resolve duplicate charges, invoice reconciliations, or cancellation requests without formal banking escalation.
            </p>
          </section>

          {/* Section 2: J-Platforms Subscriptions */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">01.</span>
              J-Platforms SaaS Subscriptions
            </h2>
            <p>
              For self-serve applications across the J-Platforms ecosystem (including JStreams Studio, JEvents, Jposta, and Whisppr developer tiers):
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Cancellation at Any Time:</strong> You may cancel recurring monthly or annual platform subscriptions at any time directly through the respective application dashboard. Upon cancellation, your access remains active until the end of the current paid billing cycle.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">7-Day Money-Back Window (First-Time Subscriptions):</strong> First-time subscribers are eligible for a 100% full refund within seven (7) calendar days of purchase, provided that the account has not actively consumed high-volume live video bandwidth, broadcast encoding minutes, or deployed custom edge topologies during that period.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Renewal Cycles:</strong> Recurring renewal charges are non-refundable once the billing period has commenced; however, cancelling prevents any future charges.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Client Engineering & Sprints */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">02.</span>
              Custom Client Engineering &amp; Sprints
            </h2>
            <p>
              Bespoke software architecture, touch interfaces, and enterprise platform builds are governed by detailed, milestone-based Statements of Work (SOW):
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Completed &amp; Approved Milestones:</strong> Once a project sprint or milestone deliverable has been deployed to staging, reviewed by the client, and approved (or released into production), payments allocated to that milestone are fully earned and non-refundable.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Contract Termination &amp; Unallocated Deposits:</strong> If a client terminates an ongoing SOW prior to project completion, engineering work halts immediately. Any advance retainer funds or unallocated deposits that have not yet been earned through delivered milestones will be calculated, audited, and refunded in full within <strong className="text-white">ten (10) business days</strong> to the client&rsquo;s original payment instrument.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Code Delivery on Termination:</strong> The client retains ownership of all approved and paid code created up to the date of formal contract termination.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Refund Processing */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">03.</span>
              Refund Method &amp; Currency
            </h2>
            <p>
              Approved refunds are credited directly back to the original card, bank account, or payment gateway account utilized during purchase. Please note that banking processors generally require three (3) to five (5) business days to post refunded balances to your account statement following our authorization.
            </p>
          </section>

          {/* Section 5: Contact Desk */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">04.</span>
              Billing Desk &amp; Invoicing Inquiries
            </h2>
            <div className="font-mono text-xs text-zinc-300 space-y-1">
              <div>Invoicing Desk: <a href="mailto:billing@36tstudios.org" className="text-[#00E5FF]">billing@36tstudios.org</a></div>
              <div>Client Support: <a href="mailto:support@36tstudios.org" className="text-[#00E5FF]">support@36tstudios.org</a></div>
              <div>Telephone: <span className="text-white">+234 816 019 7013</span></div>
              <div>Corporate Entity: 36T Studios</div>
              <div>Nigeria Center: Danbide Millennium, 22/23 Doherty Street, Alausa, Ikeja, Lagos, Nigeria</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
