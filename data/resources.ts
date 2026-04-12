export type Tier = "free" | "paid";
export type Category =
  | "Finance"
  | "AI Frameworks"
  | "Prompt Packs"
  | "Templates"
  | "Tools"
  | "Reading"
  | "Productivity";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: Category;
  tier: Tier;
  link: string;
  downloadLabel?: string;
  badge?: string;
  fileType?: string;
}

export const resources: Resource[] = [
  // ── FREE ─────────────────────────────────────────────────────────────────
  {
    id: "r1",
    title: "Personal Budget Starter",
    description:
      "A clean spreadsheet template to track income, expenses, and savings goals month-by-month.",
    category: "Templates",
    tier: "free",
    link: "https://cashandcache.substack.com",
    downloadLabel: "Download Template",
    fileType: "XLSX",
    badge: "Popular",
  },
  {
    id: "r2",
    title: "The Money Mindset Reading List",
    description:
      "10 books every personal finance enthusiast should read — curated by the Cash & Cache team.",
    category: "Reading",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },
  {
    id: "r3",
    title: "Compound Interest Calculator",
    description:
      "Enter principal, rate, and time horizon to see exactly how your money compounds over decades.",
    category: "Tools",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },
  {
    id: "r4",
    title: "Emergency Fund Calculator",
    description:
      "Calculate your ideal emergency fund size based on monthly expenses and personal risk tolerance.",
    category: "Finance",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },
  {
    id: "r5",
    title: "Weekly Financial Review Checklist",
    description:
      "A 10-minute weekly routine to stay on top of finances without obsessing over every penny.",
    category: "Productivity",
    tier: "free",
    link: "https://cashandcache.substack.com",
    downloadLabel: "Download PDF",
    fileType: "PDF",
  },
  {
    id: "r6",
    title: "AI Tools Stack for Investors (2025)",
    description:
      "The exact apps, APIs, and automation tools used to research investments and track markets faster.",
    category: "Tools",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },

  // ── PAID — AI FRAMEWORKS & PRACTITIONER TOOLS ────────────────────────────
  {
    id: "r7",
    title: "AI Agent Starter Kit",
    description:
      "Production-ready Python scaffolding for building autonomous AI agents — includes tool calling, memory, and loop control patterns using the Claude API.",
    category: "AI Frameworks",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Kit",
    fileType: "ZIP",
    badge: "Most Loved",
  },
  {
    id: "r8",
    title: "Prompt Engineering Master Pack",
    description:
      "80+ battle-tested prompts for financial analysis, tax prep, investment research, and AI product ideation — structured for Claude, GPT-4, and Gemini.",
    category: "Prompt Packs",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Pack",
    fileType: "MD",
    badge: "New",
  },
  {
    id: "r9",
    title: "RAG Pipeline Template (Finance)",
    description:
      "End-to-end Retrieval-Augmented Generation template for building a personal finance knowledge base. Uses LangChain + Chroma + Claude. Plug-and-play ready.",
    category: "AI Frameworks",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Framework",
    fileType: "ZIP",
  },
  {
    id: "r10",
    title: "LLM Evaluation Scorecard",
    description:
      "Structured Notion + spreadsheet framework for evaluating LLM outputs across accuracy, tone, hallucination rate, and cost — built for real deployment decisions.",
    category: "Templates",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Template",
    fileType: "XLSX",
  },
  {
    id: "r11",
    title: "Cursor Rules Library for Finance Builders",
    description:
      "A curated set of .cursorrules files for AI-assisted coding of fintech apps, budget tools, and data dashboards. Drop in and build 3× faster.",
    category: "AI Frameworks",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Rules",
    fileType: "ZIP",
    badge: "New",
  },
  {
    id: "r12",
    title: "Net Worth Tracker (Advanced)",
    description:
      "Multi-account net worth dashboard with automated charts, asset allocation breakdown, and year-over-year growth tracking across investments, crypto, and real estate.",
    category: "Templates",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Template",
    fileType: "XLSX",
  },
  {
    id: "r13",
    title: "Multi-Agent Financial Research Framework",
    description:
      "Orchestrator + worker agent system for automated equity research: ticker scraping, sentiment analysis, earnings summarisation, and PDF report generation.",
    category: "AI Frameworks",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Framework",
    fileType: "ZIP",
    badge: "Advanced",
  },
  {
    id: "r14",
    title: "Creator Economy Revenue Dashboard",
    description:
      "Track income streams across Substack, YouTube, sponsorships, and courses — with MRR, churn, and runway projections built in.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Dashboard",
    fileType: "XLSX",
  },
  {
    id: "r15",
    title: "Side Income Tax Prep Kit",
    description:
      "Everything freelancers and creators need to track deductions, quarterly taxes, and self-employment income — ready to hand to your accountant.",
    category: "Finance",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Kit",
    fileType: "PDF",
    badge: "Seasonal",
  },
  {
    id: "r16",
    title: "AI Product Ideation Prompt Deck",
    description:
      "50 structured prompts for founders and PMs to validate AI product ideas, write PRDs, generate landing page copy, and design monetisation models.",
    category: "Prompt Packs",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Download Deck",
    fileType: "MD",
  },
];

export const categories: Category[] = [
  "AI Frameworks",
  "Prompt Packs",
  "Finance",
  "Templates",
  "Tools",
  "Productivity",
  "Reading",
];
