import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lock, Download, ExternalLink, BookOpen } from "lucide-react";
import { resources } from "@/data/resources";

export function generateStaticParams() {
  return resources.map((r) => ({ id: r.id }));
}

const catStyle: Record<string, { text: string; bg: string; border: string }> = {
  Tools:        { text: "#FF8C42", bg: "rgba(255,140,66,0.1)",    border: "rgba(255,140,66,0.25)" },
  "Skill File": { text: "#9B72FF", bg: "rgba(155,114,255,0.15)", border: "rgba(155,114,255,0.3)" },
  Templates:    { text: "#FFA726", bg: "rgba(255,167,38,0.12)",  border: "rgba(255,167,38,0.3)" },
  Guides:       { text: "#4DD0E1", bg: "rgba(77,208,225,0.1)",   border: "rgba(77,208,225,0.25)" },
  Frameworks:   { text: "#B388FF", bg: "rgba(179,136,255,0.1)",  border: "rgba(179,136,255,0.25)" },
};

function CTAIcon({ fileType, label }: { fileType?: string; label?: string }) {
  if (label?.toLowerCase().includes("tool")) return <ExternalLink className="w-4 h-4" />;
  if (fileType === "NOTION") return <BookOpen className="w-4 h-4" />;
  return <Download className="w-4 h-4" />;
}

export default function ResourcePage({ params }: { params: { id: string } }) {
  const resource = resources.find((r) => r.id === params.id);
  if (!resource) notFound();

  const isPaid = resource.tier === "paid";
  const cs = catStyle[resource.category] ?? { text: "#FFF9F5", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" };
  const ctaHref = isPaid
    ? "https://cashandcache.substack.com/subscribe?coupon=f12e9091"
    : resource.link;

  const related = resources
    .filter((r) => r.id !== resource.id && r.category === resource.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">

      {/* Back nav */}
      <div className="border-b border-[rgba(0,217,255,0.08)]">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link href="/library" className="inline-flex items-center gap-2 text-[#FFF9F5]/45 hover:text-[#00D9FF] text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[rgba(0,217,255,0.08)]">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" aria-hidden="true" />
        <div className={`absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.06] blur-3xl pointer-events-none ${isPaid ? "bg-[#9B72FF]" : "bg-[#00D9FF]"}`} />

        <div className="relative mx-auto max-w-4xl px-6 py-16">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span
              className="px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide"
              style={{ color: cs.text, background: cs.bg, borderColor: cs.border }}
            >
              {resource.category}
            </span>
            {isPaid ? (
              <span className="px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide" style={{ color: "#9B72FF", background: "rgba(155,114,255,0.1)", borderColor: "rgba(155,114,255,0.3)" }}>
                Premium
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide" style={{ color: "#00D9FF", background: "rgba(0,217,255,0.08)", borderColor: "rgba(0,217,255,0.25)" }}>
                Free
              </span>
            )}
          </div>

          <h1
            className="font-extrabold text-[#FFF9F5] leading-tight mb-5"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", letterSpacing: "-0.02em" }}
          >
            {resource.title}
          </h1>

          <p className="text-[#FFF9F5]/70 text-base leading-relaxed max-w-2xl mb-8">
            {resource.description}
          </p>

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
            style={
              isPaid
                ? { background: "linear-gradient(90deg, #9B72FF, #00D9FF)", color: "#0A1628" }
                : { background: "#00D9FF", color: "#0A1628" }
            }
          >
            {isPaid ? (
              <Lock className="w-4 h-4" />
            ) : (
              <CTAIcon fileType={resource.fileType} label={resource.downloadLabel} />
            )}
            {isPaid ? "Unlock — Upgrade to Premium" : (resource.downloadLabel ?? "Get this")}
            <ArrowRight className="w-4 h-4" />
          </a>

          {isPaid && (
            <p className="mt-3 text-[#FFF9F5]/30 text-xs">
              Premium subscription required · $8/mo or $70/yr
            </p>
          )}
        </div>
      </div>

      {/* Related resources */}
      {related.length > 0 && (
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-lg font-bold text-[#FFF9F5] mb-6">
            More in <span style={{ color: cs.text }}>{resource.category}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => {
              const rc = catStyle[r.category] ?? { text: "#FFF9F5", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" };
              return (
                <Link
                  key={r.id}
                  href={`/library/${r.id}`}
                  className="rounded-2xl border border-[rgba(0,217,255,0.1)] bg-[rgba(30,58,95,0.25)] p-5 flex flex-col gap-3 hover:border-[rgba(0,217,255,0.3)] transition-all backdrop-blur-sm group"
                >
                  <span
                    className="px-2.5 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wide w-fit"
                    style={{ color: rc.text, background: rc.bg, borderColor: rc.border }}
                  >
                    {r.category}
                  </span>
                  <h3 className="text-sm font-semibold text-[#FFF9F5] leading-snug group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-[#FFF9F5]/50 leading-relaxed line-clamp-2">{r.description}</p>
                  <div className="mt-auto flex items-center gap-1 text-[#00D9FF] text-xs font-medium">
                    View resource <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
