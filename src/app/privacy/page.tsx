import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy // 36T Studios & Danbide Millennium",
  description: "Privacy Policy, NDPA 2023 compliance, and PCI-DSS Level 1 payment protection statement for 36T Studios and Danbide Millennium.",
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>NDPA 2023 &amp; PCI-DSS LEVEL 1 COMPLIANT POLICY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-zinc-400">
            Last Updated: November 24, 2026 • Statutory Reference: NDPA 2023 / NDPR
          </p>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            This Privacy Policy outlines how <strong className="text-white font-semibold">Danbide Millennium (Trading as 36T Studios)</strong> collects, processes, and protects your personal data and commercial records when you interact with <code className="text-[#00E5FF]">36tstudios.org</code> and the J-Platforms application suite.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">

          {/* Section 1: Statutory Framework */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">01.</span>
              Data Protection Regulatory Framework
            </h2>
            <p>
              Danbide Millennium is committed to safeguarding personal information in strict compliance with the <strong className="text-white">Nigeria Data Protection Act (NDPA) 2023</strong>, the Nigeria Data Protection Regulation (NDPR), and applicable international privacy benchmarks (including GDPR-aligned data subject protections for global clientele).
            </p>
            <p className="text-xs text-zinc-400">
              Data Controller: Danbide Millennium (Trading as 36T Studios) • 22/23 Doherty Street, Alausa, Ikeja, Lagos, Nigeria.
            </p>
          </section>

          {/* Section 2: MANDATORY PCI-DSS PAYMENT DISCLOSURE */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-[#00E5FF]/30 space-y-4 shadow-[0_0_30px_rgba(0,229,255,0.06)]">
            <div className="flex items-center gap-2.5 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Mandatory Payment Card &amp; PCI-DSS Level 1 Disclosure</span>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-black/60 border border-[#00E5FF]/20 text-sm sm:text-base text-white leading-relaxed font-mono">
              &ldquo;Danbide Millennium / 36T Studios processes all electronic transactions via PCI-DSS Level 1 certified payment infrastructure. We never store raw cardholder details, debit/credit card numbers, CVV codes, or bank authorization PINs on our servers.&rdquo;
            </div>
            <p className="text-xs sm:text-sm text-zinc-300">
              All card data entered during subscription checkout or milestone invoice settlement is directly encrypted and tokenized by audited, bank-grade payment gateways (including Stripe, Flutterwave, and authorized merchant acquiring processors) using end-to-end 256-bit SSL encryption.
            </p>
          </section>

          {/* Section 3: Data Collection */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">03.</span>
              Information We Collect &amp; Purpose of Processing
            </h2>
            <p>We collect and retain only the minimal personal and commercial data strictly necessary to fulfill contractual obligations:</p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Identity &amp; Contact Information:</strong> Name, professional title, company name, billing email, telephone number, and physical office address.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Commercial &amp; Billing Records:</strong> Project Statements of Work (SOW), subscription tier history, transaction reference IDs, and automated invoicing ledgers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-1" />
                <span><strong className="text-white">Technical Telemetry:</strong> IP addresses, browser agents, access timestamps, and API usage logs collected solely for system security, fraud mitigation, and edge routing.</span>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#F59247]">
              Notice: We NEVER sell, monetize, broker, or rent your personal data to advertisers or third-party marketing brokers.
            </div>
          </section>

          {/* Section 4: Data Retention & Security */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">04.</span>
              Data Retention &amp; Security Measures
            </h2>
            <p>
              Your personal information is encrypted at rest using AES-256 and transmitted exclusively over HTTPS/TLS 1.3. We retain transaction and invoice data for the mandatory statutory period required under commercial tax and anti-fraud regulations, after which records are cryptographically erased.
            </p>
          </section>

          {/* Section 5: Data Subject Rights */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">05.</span>
              Your Data Subject Rights (NDPA 2023)
            </h2>
            <p>
              Under the Nigeria Data Protection Act 2023 and international privacy standards, you are entitled to:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-zinc-300 text-sm">
              <li>Request access to the personal information we hold about you;</li>
              <li>Request correction or updating of inaccurate data;</li>
              <li>Request restriction or complete deletion of non-statutory records (&ldquo;Right to be Forgotten&rdquo;);</li>
              <li>Withdraw consent for optional communications at any time.</li>
            </ul>
            <p className="pt-2">
              To exercise any of these rights, please submit a formal request to our dedicated Data Protection Desk at: <a href="mailto:privacy@36tstudios.org" className="text-[#00E5FF] underline font-mono">privacy@36tstudios.org</a>. Requests are acknowledged and resolved within forty-eight (48) hours.
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#0D0E15] border border-white/[0.08] space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#00E5FF] font-mono text-sm">06.</span>
              Data Protection Inquiries
            </h2>
            <div className="font-mono text-xs text-zinc-300 space-y-1">
              <div>Privacy Officer: <a href="mailto:privacy@36tstudios.org" className="text-[#00E5FF]">privacy@36tstudios.org</a></div>
              <div>General Support Desk: <a href="mailto:support@36tstudios.org" className="text-[#00E5FF]">support@36tstudios.org</a></div>
              <div>Telephone: <span className="text-white">+234 816 019 7013</span></div>
              <div>Physical Address: Danbide Millennium, 22/23 Doherty Street, Alausa, Ikeja, Lagos, Nigeria</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
