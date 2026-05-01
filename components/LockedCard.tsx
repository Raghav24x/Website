import { Lock, Download, ExternalLink, BookOpen } from "lucide-react";
import { Resource } from "@/data/resources";

const categoryColors: Record<string, string> = {
  "AI Frameworks": "text-[#9B72FF] bg-[rgba(155,114,255,0.15)] border-[rgba(155,114,255,0.3)]",
  "Prompt Packs": "text-[#00D9FF] bg-[rgba(0,217,255,0.1)] border-[rgba(0,217,255,0.25)]",
  Notion: "text-[#FFA726] bg-[rgba(255,167,38,0.12)] border-[rgba(255,167,38,0.3)]",
  Guides: "text-[#4DD0E1] bg-[rgba(77,208,225,0.1)] border-[rgba(77,208,225,0.25)]",
  Tools: "text-[#FF8C42] bg-[rgba(255,140,66,0.1)] border-[rgba(255,140,66,0.25)]",
  Productivity: "text-[#B388FF] bg-[rgba(179,136,255,0.1)] border-[rgba(179,136,255,0.25)]",
  Reading: "text-[#D4A574] bg-[rgba(212,165,116,0.1)] border-[rgba(212,165,116,0.25)]",
};

const fileTypeBg: Record<string, string> = {
  ZIP:   "bg-[rgba(155,114,255,0.2)] text-[#B388FF]",
  XLSX:  "bg-[rgba(77,208,225,0.2)] text-[#4DD0E1]",
  PDF:   "bg-[rgba(255,140,66,0.2)] text-[#FF8C42]",
  MD:    "bg-[rgba(0,217,255,0.2)] text-[#00D9FF]",
  NOTION:"bg-[rgba(255,167,38,0.2)] text-[#FFA726]",
};

// Cards with a direct link (not a paywall redirect) open straight to the resource
const isDirectLink = (link: string) =>
  !link.includes("substack.com/subscribe");

function CTAIcon({ fileType, label }: { fileType?: string; label?: string }) {
  if (label === "Open Tool") return <ExternalLink className="w-3.5 h-3.5" />;
  if (fileType === "NOTION")  return <BookOpen className="w-3.5 h-3.5" />;
  return <Download className="w-3.5 h-3.5" />;
}

export default function LockedCard({ resource }: { resource: Resource }) {
  const isPaid = resource.tier === "paid";
  const direct = isPaid && isDirectLink(resource.link);
  const catClass =
    categoryColors[resource.category] ??
    "text-[#FFF9F5]/50 bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)]";
  const ftClass = resource.fileType
    ? (fileTypeBg[resource.fileType] ?? "bg-[rgba(255,255,255,0.1)] text-[#FFF9F5]/70")
    : "";

  return (
    <div
      className={`relative rounded-2xl border overflow-hidden flex flex-col transition-all duration-200 backdrop-blur-sm ${
        isPaid
          ? "border-[rgba(155,114,255,0.25)] bg-[rgba(30,58,95,0.3)] hover:border-[rgba(155,114,255,0.5)]"
          : "border-[rgba(0,217,255,0.15)] bg-[rgba(30,58,95,0.25)] hover:border-[rgba(0,217,255,0.35)]"
      }`}
    >
      {/* Badge */}
      {resource.badge && (
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#FF8C42]/20 border border-[rgba(255,140,66,0.4)] text-[#FF8C42] text-[10px] font-bold uppercase tracking-wide z-10">
          {resource.badge}
        </div>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Category + file type */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wide ${catClass}`}>
            {resource.category}
          </span>
          {resource.fileType && (
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ftClass}`}>
              {resource.fileType}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-semibold text-sm leading-snug ${
            isPaid && !direct ? "text-[#FFF9F5]/50" : "text-[#FFF9F5]"
          }`}
        >
          {resource.title}
        </h3>

        {/* Description — blurred for non-direct paid cards */}
        <div className="relative">
          <p
            className={`text-xs leading-relaxed ${
              isPaid && !direct
                ? "text-[#FFF9F5]/40 blur-[3px] select-none"
                : "text-[#FFF9F5]/60"
            }`}
          >
            {resource.description}
          </p>
          {isPaid && !direct && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#9B72FF]" />
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        {isPaid && direct ? (
          /* Paid + direct link — cyan "open" button */
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[rgba(0,217,255,0.12)] border border-[rgba(0,217,255,0.4)] text-[#00D9FF] text-xs font-semibold hover:bg-[rgba(0,217,255,0.22)] transition-all"
          >
            <CTAIcon fileType={resource.fileType} label={resource.downloadLabel} />
            {resource.downloadLabel ?? "Open"}
          </a>
        ) : isPaid ? (
          /* Paid + paywall redirect */
          <a
            href="https://cashandcache.substack.com/subscribe?coupon=f12e9091"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[rgba(155,114,255,0.4)] text-[#9B72FF] text-xs font-semibold hover:bg-[rgba(155,114,255,0.1)] hover:border-[rgba(155,114,255,0.7)] transition-all"
          >
            <Lock className="w-3.5 h-3.5" />
            Upgrade to Unlock
          </a>
        ) : (
          /* Free */
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[rgba(0,217,255,0.1)] border border-[rgba(0,217,255,0.3)] text-[#00D9FF] text-xs font-semibold hover:bg-[rgba(0,217,255,0.2)] transition-all"
          >
            <CTAIcon fileType={resource.fileType} label={resource.downloadLabel} />
            {resource.downloadLabel ?? "View Resource"}
          </a>
        )}
      </div>
    </div>
  );
}
