import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Wrench, Users } from "lucide-react";
import HeroLogo from "@/components/HeroLogo";
import TierComparison from "@/components/TierComparison";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LockedCard from "@/components/LockedCard";
import { resources } from "@/data/resources";
import { fetchSubstackPosts, formatDate } from "@/lib/rss";

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await fetchSubstackPosts();
  const teaserResources = resources.filter((r) => r.tier === "paid").slice(0, 3);

  return (
    <div className="relative overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background grid */}
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none"
          aria-hidden="true"
        />
        {/* Orange spotlight */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#FF8C42] opacity-[0.06] blur-3xl pointer-events-none" aria-hidden="true" />
        {/* Cyan spotlight */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00D9FF] opacity-[0.08] blur-3xl pointer-events-none" aria-hidden="true" />
        {/* Orange lamp glow – top right */}
        <div className="absolute -top-16 -right-10 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #FFA726 0%, #FF8C42 30%, transparent 70%)", opacity: 0.07, filter: "blur(40px)" }} aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,217,255,0.3)] bg-[rgba(0,217,255,0.07)] w-fit">
              <Zap className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span className="text-[#00D9FF] text-sm font-bold tracking-wide">AI Implementation for Builders</span>
            </div>

            <h1 style={{ fontSize: "var(--tweak-title-size, 72px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--tweak-title-color, #FFFFFF)", whiteSpace: "nowrap" }}>
              Cash &amp; Cache
            </h1>

            <p style={{ fontSize: "var(--tweak-subtitle-size, 26px)", fontWeight: 500, color: "rgba(255,255,255,0.80)", lineHeight: 1.4, maxWidth: 480, letterSpacing: "-0.01em" }}>
              Where Capital Meets Code
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://cashandcache.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-cyan"
                style={{ background: "var(--tweak-subscribe-bg, #00D9FF)", color: "var(--tweak-subscribe-color, #0A1628)" }}
              >
                Subscribe — It&apos;s Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/library"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base hover:opacity-80 transition-opacity"
                style={{ border: "1px solid var(--tweak-browse-border, rgba(255,140,66,0.4))", color: "var(--tweak-browse-text, #FF8C42)" }}
              >
                Browse the Library
              </Link>
            </div>

            {/* Social proof numbers */}
            <div className="flex gap-9 pt-2">
              {[
                { n: "1,200+", l: "Subscribers" },
                { n: "Weekly", l: "Issues" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="text-2xl font-extrabold text-white">{n}</div>
                  <div className="text-xs text-white/45 uppercase tracking-widest">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero logo */}
          <HeroLogo />
        </div>
      </section>

      {/* SVG wave divider */}
      <div aria-hidden="true" className="-mt-1">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12" fill="none">
          <path d="M0 60 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" fill="rgba(30,58,95,0.25)" />
        </svg>
      </div>

      {/* ── WHAT YOU GET ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#FFF9F5] mb-3">What you get with Cash &amp; Cache</h2>
            <p className="text-[#FFF9F5]/50 max-w-lg mx-auto text-sm">Practical resources built for people who build with AI and think about money.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Zap className="w-5 h-5" />,      color: "#00D9FF", title: "AI Frameworks",      desc: "Python kits, agent scaffolds, RAG pipelines, and Cursor rules — ready to use in production." },
              { icon: <BookOpen className="w-5 h-5" />,  color: "#9B72FF", title: "Prompt Engineering", desc: "80+ structured prompts for financial analysis, research, and AI product building." },
              { icon: <Wrench className="w-5 h-5" />,    color: "#FF8C42", title: "Strategy Templates", desc: "Implementation playbooks, evaluation scorecards, and decision frameworks for AI leaders." },
              { icon: <Users className="w-5 h-5" />,     color: "#D4A574", title: "Weekly Insights",    desc: "Curated breakdowns of AI breakthroughs and tech trends that actually matter to builders." },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} className="rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(30,58,95,0.25)] p-5 backdrop-blur-sm hover:border-[rgba(0,217,255,0.2)] transition-colors">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}20`, color }}>
                  {icon}
                </div>
                <h3 className="font-semibold text-[#FFF9F5] text-sm mb-2">{title}</h3>
                <p className="text-[#FFF9F5]/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAID TIER TEASERS ────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#9B72FF] animate-glow-pulse" />
                <span className="text-[#9B72FF] text-xs font-semibold uppercase tracking-widest">Paid Tier Preview</span>
              </div>
              <h2 className="text-2xl font-bold text-[#FFF9F5]">A taste of what&apos;s behind the curtain</h2>
            </div>
            <Link
              href="/library"
              className="inline-flex items-center gap-1.5 text-[#00D9FF] text-sm font-semibold hover:underline flex-shrink-0"
            >
              See full library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teaserResources.map((r) => (
              <LockedCard key={r.id} resource={r} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://cashandcache.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9B72FF] to-[#00D9FF] text-[#0A1628] font-bold text-sm hover:opacity-90 transition-opacity shadow-purple"
            >
              Unlock Everything — Upgrade to Paid
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SVG wave divider */}
      <div aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12" fill="none">
          <path d="M0 20 Q360 60 720 30 Q1080 0 1440 40 L1440 60 L0 60 Z" fill="rgba(30,58,95,0.2)" />
        </svg>
      </div>

      {/* ── TIER COMPARISON ──────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#FFF9F5] mb-3">Free vs Paid</h2>
            <p className="text-[#FFF9F5]/50 text-sm max-w-md mx-auto">See exactly what you unlock when you go paid.</p>
          </div>
          <TierComparison />
        </div>
      </section>

      {/* ── CREATOR RECOMMENDATIONS ──────────────────────────────── */}
      <section className="py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 mb-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#FFF9F5] mb-3">What creators are saying</h2>
            <p className="text-[#FFF9F5]/50 text-sm">Recommended by Substack creators and AI practitioners.</p>
          </div>
        </div>
        <TestimonialsCarousel />
      </section>

      {/* ── RECENT POSTS ─────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00D9FF]" />
                <span className="text-[#00D9FF] text-xs font-semibold uppercase tracking-widest">From the Newsletter</span>
              </div>
              <h2 className="text-2xl font-bold text-[#FFF9F5]">Recent issues</h2>
            </div>
            <a
              href="https://cashandcache.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00D9FF] text-sm font-semibold hover:underline flex-shrink-0"
            >
              All issues <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[rgba(0,217,255,0.1)] bg-[rgba(30,58,95,0.2)] p-5 flex flex-col gap-3 hover:border-[rgba(0,217,255,0.3)] hover:bg-[rgba(30,58,95,0.35)] transition-all backdrop-blur-sm"
              >
                <div className="text-[10px] text-[#FFF9F5]/35 uppercase tracking-wide">{formatDate(post.pubDate)}</div>
                <h3 className="text-sm font-semibold text-[#FFF9F5] leading-snug group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#FFF9F5]/50 leading-relaxed line-clamp-3">{post.description}</p>
                <div className="mt-auto flex items-center gap-1.5 text-[#00D9FF] text-xs font-medium">
                  Read issue <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative rounded-3xl border border-[rgba(0,217,255,0.2)] bg-[rgba(30,58,95,0.4)] backdrop-blur-sm p-12 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-[#9B72FF] opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-[#00D9FF] opacity-10 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="text-4xl mb-4">⚡</div>
              <h2 className="text-3xl font-bold text-[#FFF9F5] mb-4">Ready to build smarter?</h2>
              <p className="text-[#FFF9F5]/55 mb-8 text-sm leading-relaxed">
                Join 1,200+ AI practitioners and tech leaders getting weekly insights, downloadable tools, and frameworks straight to their inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://cashandcache.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl bg-[#00D9FF] text-[#0A1628] font-bold text-sm hover:bg-[#4DD0E1] transition-colors shadow-cyan"
                >
                  Subscribe Free
                </a>
                <a
                  href="https://cashandcache.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl border border-[rgba(155,114,255,0.4)] text-[#9B72FF] font-semibold text-sm hover:bg-[rgba(155,114,255,0.1)] transition-colors"
                >
                  Go Paid — $8/mo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
