"use client";
import { useState } from "react";
import { Check, X } from "lucide-react";

const FREE_BENEFITS = [
  "Regular public posts",
  "Weekly newsletter issues",
  "Free tools & calculators",
  "Curated reading lists",
  "Community access",
];

const PAID_BENEFITS = [
  "Everything in Free",
  "Deeper implementation guides on AI workflows",
  "Ready-to-download templates to improve how you strategize with AI",
  "Full access to all tools, resource library & community chat threads",
  "AI Agent Starter Kits (Python)",
  "Prompt Engineering Packs (80+ prompts)",
  "RAG Pipeline Frameworks",
  "Cursor Rules Library for builders",
  "LLM Evaluation Scorecards",
  "Priority access to new tools",
];

const FOUNDING_BENEFITS = [
  "Everything in Paid",
  "Monthly 1:1 AI Workflow Session",
  "Flexible pricing — pay what you choose above $70/yr",
  "Founding Member recognition",
];

export default function TierComparison() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="space-y-6">
      {/* Monthly / Annual toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-[rgba(0,217,255,0.15)] bg-[rgba(30,58,95,0.3)]">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${!annual ? "bg-[#00D9FF] text-[#0A1628]" : "text-[#FFF9F5]/60 hover:text-[#FFF9F5]"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${annual ? "bg-[#00D9FF] text-[#0A1628]" : "text-[#FFF9F5]/60 hover:text-[#FFF9F5]"}`}
          >
            Annual
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${annual ? "bg-[#0A1628]/20 text-[#0A1628]" : "bg-[rgba(0,217,255,0.15)] text-[#00D9FF]"}`}>
              Save $26
            </span>
          </button>
        </div>
      </div>

      {/* 3-column grid */}
      <div className="grid md:grid-cols-3 gap-5">

        {/* ── FREE ── */}
        <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(30,58,95,0.25)] p-6 backdrop-blur-sm flex flex-col">
          <div className="mb-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4DD0E1]">Free</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#FFF9F5]">$0</span>
              <span className="text-sm text-[#FFF9F5]/50">/ forever</span>
            </div>
            <p className="mt-2 text-xs text-[#FFF9F5]/55 leading-relaxed">
              A great starting point for curious readers.
            </p>
            <a
              href="https://cashandcache.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center w-full py-2.5 rounded-xl border border-[rgba(0,217,255,0.3)] text-[#00D9FF] text-sm font-semibold hover:bg-[rgba(0,217,255,0.08)] transition-colors"
            >
              Subscribe Free
            </a>
          </div>
          <ul className="space-y-2.5 flex-1">
            {FREE_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-xs">
                <Check className="w-3.5 h-3.5 text-[#4DD0E1] flex-shrink-0 mt-0.5" />
                <span className="text-[#FFF9F5]/75">{b}</span>
              </li>
            ))}
            {PAID_BENEFITS.slice(1).map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-xs">
                <X className="w-3.5 h-3.5 text-[#FFF9F5]/18 flex-shrink-0 mt-0.5" />
                <span className="text-[#FFF9F5]/25 line-through">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── PAID ── */}
        <div className="rounded-2xl border border-[rgba(0,217,255,0.35)] bg-[rgba(30,58,95,0.45)] p-6 backdrop-blur-sm flex flex-col relative overflow-hidden shadow-cyan">
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#00D9FF] opacity-10 blur-2xl pointer-events-none" />
          <div className="mb-5 relative">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF8C42]">Paid</span>
              <span className="px-2 py-0.5 rounded-full bg-[rgba(255,140,66,0.15)] border border-[rgba(255,140,66,0.35)] text-[#FF8C42] text-[10px] font-bold uppercase tracking-wide">
                Best Value
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              {annual ? (
                <>
                  <span className="text-3xl font-bold text-[#FFF9F5]">$70.00</span>
                  <span className="text-sm text-[#FFF9F5]/50">/ year</span>
                </>
              ) : (
                <>
                  <span className="text-3xl font-bold text-[#FFF9F5]">$8.00</span>
                  <span className="text-sm text-[#FFF9F5]/50">/ month</span>
                </>
              )}
            </div>
            {annual && (
              <p className="mt-1 text-xs text-[#00D9FF]">$5.83/mo — save $26 vs monthly</p>
            )}
            <p className="mt-2 text-xs text-[#FFF9F5]/55 leading-relaxed">
              Full access to the library, kits, and every tool we build.
            </p>
            <a
              href="https://cashandcache.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center w-full py-2.5 rounded-xl bg-[#00D9FF] text-[#0A1628] text-sm font-bold hover:bg-[#4DD0E1] transition-colors"
            >
              Upgrade to Paid
            </a>
          </div>
          <ul className="space-y-2.5 flex-1 relative">
            {PAID_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-xs">
                <Check className="w-3.5 h-3.5 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                <span className="text-[#FFF9F5]/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── FOUNDING MEMBER ── */}
        <div className="rounded-2xl border border-[rgba(155,114,255,0.35)] bg-[rgba(30,58,95,0.40)] p-6 backdrop-blur-sm flex flex-col relative overflow-hidden" style={{ boxShadow: "0 0 32px rgba(155,114,255,0.12)" }}>
          <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#9B72FF] opacity-10 blur-2xl pointer-events-none" />
          <div className="mb-5 relative">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9B72FF]">Founding Member</span>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#FFF9F5]">$150.00</span>
              <span className="text-sm text-[#FFF9F5]/50">/ year</span>
            </div>
            <p className="mt-1 text-xs text-[#B388FF]">Flexible — pay what you choose above $70/yr</p>
            <p className="mt-2 text-xs text-[#FFF9F5]/55 leading-relaxed">
              For those who want to go deeper and support the mission.
            </p>
            <a
              href="https://cashandcache.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center w-full py-2.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #9B72FF, #00D9FF)", color: "#0A1628" }}
            >
              Become a Founding Member
            </a>
          </div>
          <ul className="space-y-2.5 flex-1 relative">
            {FOUNDING_BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-xs">
                <Check className="w-3.5 h-3.5 text-[#9B72FF] flex-shrink-0 mt-0.5" />
                <span className="text-[#FFF9F5]/85">{b}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
