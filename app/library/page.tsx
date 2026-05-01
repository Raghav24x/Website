"use client";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Lock, Unlock } from "lucide-react";
import LockedCard from "@/components/LockedCard";
import { resources, categories, Category, Tier } from "@/data/resources";

const tierOptions: { label: string; value: "all" | Tier }[] = [
  { label: "All", value: "all" },
  { label: "Free", value: "free" },
  { label: "Premium", value: "paid" },
];

export default function LibraryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [activeTier, setActiveTier] = useState<"all" | Tier>("all");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchSearch =
        !search ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.category.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "All" || r.category === activeCategory;
      const matchTier = activeTier === "all" || r.tier === activeTier;
      return matchSearch && matchCat && matchTier;
    });
  }, [search, activeCategory, activeTier]);

  const freeCount = resources.filter((r) => r.tier === "free").length;
  const paidCount = resources.filter((r) => r.tier === "paid").length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative border-b border-[rgba(0,217,255,0.1)] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#9B72FF] opacity-[0.06] blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#00D9FF]" />
            <span className="text-[#00D9FF] text-xs font-semibold uppercase tracking-widest">Resource Library</span>
          </div>
          <h1 className="text-4xl font-extrabold text-[#FFF9F5] mb-3">
            The Cash &amp; Cache Library
          </h1>
          <p className="text-[#FFF9F5]/55 text-sm max-w-lg leading-relaxed">
            Templates, AI frameworks, prompt packs, and tools — built for AI practitioners and strategic builders. Free resources open immediately. Premium resources require a subscription.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Unlock className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[#FFF9F5]/60 text-sm"><span className="text-[#FFF9F5] font-semibold">{freeCount}</span> free</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#9B72FF]" />
              <span className="text-[#FFF9F5]/60 text-sm"><span className="text-[#FFF9F5] font-semibold">{paidCount}</span> premium</span>
            </div>
            <div className="text-[#FFF9F5]/60 text-sm">
              <span className="text-[#FFF9F5] font-semibold">{resources.length}</span> total
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 border-b border-[rgba(0,217,255,0.08)] bg-[rgba(10,22,40,0.9)] backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FFF9F5]/30" />
            <input
              type="text"
              placeholder="Search resources…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[rgba(30,58,95,0.4)] border border-[rgba(0,217,255,0.15)] text-[#FFF9F5] text-sm placeholder:text-[#FFF9F5]/30 focus:outline-none focus:border-[rgba(0,217,255,0.45)] transition-colors"
            />
          </div>

          {/* Tier filter */}
          <div className="flex items-center gap-1">
            <SlidersHorizontal className="w-4 h-4 text-[#FFF9F5]/30 mr-1" />
            {tierOptions.map((t) => (
              <button
                key={t.value}
                onClick={() => setActiveTier(t.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTier === t.value
                    ? "bg-[rgba(0,217,255,0.15)] text-[#00D9FF] border border-[rgba(0,217,255,0.4)]"
                    : "text-[#FFF9F5]/50 hover:text-[#FFF9F5] border border-transparent"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5">
            {(["All", ...categories] as (Category | "All")[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-[#00D9FF] text-[#0A1628]"
                    : "bg-[rgba(30,58,95,0.4)] text-[#FFF9F5]/50 hover:text-[#FFF9F5] border border-[rgba(255,255,255,0.07)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-[#FFF9F5]/40 text-sm">No resources match your filters.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); setActiveTier("all"); }}
              className="mt-4 text-[#00D9FF] text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-[#FFF9F5]/30 text-xs mb-6">
              Showing {filtered.length} of {resources.length} resources
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((r) => (
                <a key={r.id} href={`/library/${r.id}`} className="block">
                  <LockedCard resource={r} />
                </a>
              ))}
            </div>
          </>
        )}

        {/* Paid upgrade banner */}
        {activeTier !== "paid" && (
          <div className="mt-16 rounded-2xl border border-[rgba(155,114,255,0.25)] bg-[rgba(30,58,95,0.35)] p-8 text-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#9B72FF] opacity-10 blur-2xl pointer-events-none" />
            <Lock className="w-8 h-8 text-[#9B72FF] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#FFF9F5] mb-2">Unlock premium subscribers&apos; benefits</h3>
            <p className="text-[#FFF9F5]/50 text-sm mb-6 max-w-md mx-auto">
              AI agent kits, prompt packs, templates, RAG frameworks, and more — all downloadable, all yours for $8/month.
            </p>
            <a
              href="https://cashandcache.substack.com/subscribe?coupon=f12e9091"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[#9B72FF] to-[#00D9FF] text-[#0A1628] font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Upgrade to Premium — $8/mo
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
