import { Check, X, Lock } from "lucide-react";

const features = [
  { label: "Weekly newsletter issues", free: true, paid: true },
  { label: "Free tools & calculators", free: true, paid: true },
  { label: "Curated reading lists", free: true, paid: true },
  { label: "Community access", free: true, paid: true },
  { label: "Downloadable Excel & PDF templates", free: false, paid: true },
  { label: "AI Agent Starter Kits (Python)", free: false, paid: true },
  { label: "Prompt Engineering Packs (80+ prompts)", free: false, paid: true },
  { label: "RAG Pipeline Frameworks", free: false, paid: true },
  { label: "Cursor Rules Library for builders", free: false, paid: true },
  { label: "LLM Evaluation Scorecards", free: false, paid: true },
  { label: "Multi-agent financial research framework", free: false, paid: true },
  { label: "Priority access to new tools", free: false, paid: true },
];

export default function TierComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {/* Free */}
      <div className="rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(30,58,95,0.25)] p-6 backdrop-blur-sm">
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4DD0E1]">Free</span>
          <div className="mt-2 text-3xl font-bold text-[#FFF9F5]">$0 <span className="text-sm font-normal text-[#FFF9F5]/50">/ forever</span></div>
          <p className="mt-2 text-sm text-[#FFF9F5]/60">A great starting point for curious readers.</p>
          <a
            href="https://cashandcache.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center w-full py-2.5 rounded-xl border border-[rgba(0,217,255,0.3)] text-[#00D9FF] text-sm font-semibold hover:bg-[rgba(0,217,255,0.08)] transition-colors"
          >
            Subscribe Free
          </a>
        </div>
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-sm">
              {f.free ? (
                <Check className="w-4 h-4 text-[#4DD0E1] flex-shrink-0" />
              ) : (
                <X className="w-4 h-4 text-[#FFF9F5]/20 flex-shrink-0" />
              )}
              <span className={f.free ? "text-[#FFF9F5]/80" : "text-[#FFF9F5]/30 line-through"}>
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Paid */}
      <div className="rounded-2xl border border-[rgba(0,217,255,0.35)] bg-[rgba(30,58,95,0.45)] p-6 backdrop-blur-sm relative overflow-hidden shadow-cyan">
        {/* Glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#00D9FF] opacity-10 blur-2xl pointer-events-none" />
        <div className="mb-6 relative">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF8C42]">Paid</span>
            <span className="px-2 py-0.5 rounded-full bg-[#FF8C42]/15 text-[#FF8C42] text-[10px] font-bold uppercase tracking-wide">Best Value</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-[#FFF9F5]">$9 <span className="text-sm font-normal text-[#FFF9F5]/50">/ month</span></div>
          <p className="mt-2 text-sm text-[#FFF9F5]/60">Full access to the library, kits, and every tool we build.</p>
          <a
            href="https://cashandcache.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center w-full py-2.5 rounded-xl bg-[#00D9FF] text-[#0A1628] text-sm font-bold hover:bg-[#4DD0E1] transition-colors"
          >
            Upgrade to Paid
          </a>
        </div>
        <ul className="space-y-3 relative">
          {features.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-sm">
              {f.paid ? (
                <Check className="w-4 h-4 text-[#00D9FF] flex-shrink-0" />
              ) : (
                <Lock className="w-4 h-4 text-[#FFF9F5]/30 flex-shrink-0" />
              )}
              <span className="text-[#FFF9F5]/85">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
