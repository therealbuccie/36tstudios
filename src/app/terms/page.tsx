import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Scale, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service // 36T Studios & Danbide Millennium",
  description: "Terms of Service governing use of 36tstudios.org and J-Platforms services operated by Danbide Millennium.",
};

export default function TermsPage() {
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
            <Scale className="w-3.5 h-3.5" />
            <span>COMMERCIAL AGREEMENT // STATUTORY TERMS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm font-mono text-zinc-400">
            Last Updated: November 24, 2026 • Effective Date: January 1, 2026
          </p>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Customer&rdquo;, &ldquo;Client&rdquo;, or &ldquo;User&rdquo;) and <strong className="text-white font-semibold">Danbide Millennium (Trading as 36T Studios)</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), governing your access to and use of <code className="text-[#00E5FF]">36tstudios.org</code>, the J-Platforms software suite, and associated engineering and media services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
          
          {/* Section 1 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">01.</span>
              Legal Relationship &amp; Operational Entity
            </h2>
            <p>
              36T Studios and the J-Platforms digital ecosystem are wholly owned, operated, and billed by <strong className="text-white">Danbide Millennium</strong>, a registered commercial entity operating from:
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs text-zinc-300">
              <span className="text-zinc-500 block uppercase text-[10px] mb-1">Operating Headquarters</span>
              Danbide Millennium (Trading as 36T Studios)<br />
              22/23 Doherty Street, Alausa, Ikeja, Lagos, Nigeria<br />
              Registration Status: Active Commercial Entity<br />
              Official Support: support@36tstudios.org • Billing: billing@36tstudios.org
            </div>
            <p className="text-xs text-zinc-400 pt-1">
              By accessing our website, creating an account, or authorizing an invoice or electronic payment, you agree to comply with and be bound by these Terms in full.
            </p>
          </section>

          {/* Section 2 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">02.</span>
              Scope of Services &amp; Digital Ecosystem
            </h2>
            <p>
              Danbide Millennium / 36T Studios provides two primary categories of technical solutions:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Proprietary Software &amp; SaaS Platforms (J-Platforms):</strong> Cloud-based streaming, live broadcasting, event management, messaging, and automation software (including JStreams Live TV, JStreams Studio, JEvents, Whisppr Core SDK, Jposta, and JAI).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Client Product Engineering &amp; Media Production:</strong> Turnkey software development, custom touch interfaces, WebRTC streaming topologies, and digital studio media production executed under individual Statements of Work (SOW).</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">03.</span>
              Intellectual Property Rights &amp; Code Ownership
            </h2>
            <p>
              <strong className="text-white">Proprietary Assets:</strong> All intellectual property, trademarks, design systems, algorithms, source code, and underlying architecture powering 36T Studios, J-Platforms, and the Whisppr protocol remain the exclusive property of Danbide Millennium. Nothing in these Terms grants any user an ownership interest in our pre-existing proprietary IP.
            </p>
            <p>
              <strong className="text-white">Custom Client Deliverables:</strong> For bespoke engineering engagements conducted under an authorized SOW, ownership of custom front-end interfaces, client-specific business logic, and custom application code explicitly created for the client will transfer to the client upon <strong className="text-white">full and final settlement</strong> of all agreed milestone invoices.
            </p>
          </section>

          {/* Section 4 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">04.</span>
              Acceptable Use &amp; Cardholder Obligations
            </h2>
            <p>When interacting with our systems, payment gateways, and applications, you agree that you shall NOT:</p>
            <ul className="space-y-1.5 list-disc list-inside text-zinc-300 text-sm">
              <li>Use fraudulent, stolen, or unauthorized payment credentials or instruments;</li>
              <li>Attempt to reverse-engineer, decompile, or extract the source code of our proprietary software engines;</li>
              <li>Deploy automated bots, scrapers, or DDoS attacks against 36T Studios infrastructure or edge relays;</li>
              <li>Utilize our platforms to transmit malicious code, unlawful material, or unauthorized broadcast streams;</li>
              <li>Circumvent account tier restrictions or billing enforcement mechanisms.</li>
            </ul>
            <p className="text-xs text-zinc-400">
              Violations will result in immediate termination of account access and may be reported to relevant law enforcement and regulatory authorities.
            </p>
          </section>

          {/* Section 5 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">05.</span>
              Commercial Billing &amp; Payment Processing
            </h2>
            <p>
              All transactions are billed electronically in United States Dollars (USD) or localized statutory currency equivalents. Electronic invoices and automated payment receipts are transmitted via email upon transaction settlement. Payments are processed through PCI-DSS Level 1 certified processors.
            </p>
            <p>
              For cancellation and refund inquiries, users must adhere to the terms set forth in our <Link href="/refund-policy" className="text-[#00E5FF] underline hover:text-white transition-colors">Refund &amp; Cancellation Policy</Link>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">06.</span>
              Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the commercial and civil laws applicable to Danbide Millennium. Both parties agree that any dispute or claim arising from these Terms or our services shall first be submitted to good-faith amicable negotiation by contacting <a href="mailto:billing@36tstudios.org" className="text-[#00E5FF] underline">billing@36tstudios.org</a> before pursuing formal arbitration.
            </p>
          </section>

          {/* Section 7 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">07.</span>
              Contact Information
            </h2>
            <p>For questions regarding these Terms of Service, please contact our legal desk:</p>
            <div className="font-mono text-xs text-zinc-300 space-y-1 pt-1">
              <div>Email: <a href="mailto:support@36tstudios.org" className="text-[#00E5FF]">support@36tstudios.org</a></div>
              <div>Billing Desk: <a href="mailto:billing@36tstudios.org" className="text-[#00E5FF]">billing@36tstudios.org</a></div>
              <div>Telephone: <span className="text-white">+234 816 019 7013</span></div>
              <div>Physical Address: Danbide Millennium, 22/23 Doherty Street, Alausa, Ikeja, Lagos, Nigeria</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
