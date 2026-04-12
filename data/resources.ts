export type Tier = "free" | "paid";
export type Category =
  | "Finance"
  | "AI Frameworks"
  | "Prompt Packs"
  | "Templates"
  | "Tools"
  | "Skills"
  | "Notion"
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

  // ── PAID — AI TOOL EVALUATOR (direct link) ───────────────────────────────
  {
    id: "r-evaluator",
    title: "AI Tool Evaluator",
    description:
      "Interactive web app to evaluate and compare AI tools across capability, cost, integration ease, reliability, vendor risk, and AI safety — scored side-by-side so you can make fast, confident decisions.",
    category: "Tools",
    tier: "paid",
    link: "https://product-research-tool-rho.vercel.app/?code=prt-xK9mW4vQ7nBz",
    downloadLabel: "Open Tool",
    badge: "Live Tool",
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
    downloadLabel: "Download Pack",
    fileType: "MD",
  },

  // ── PAID — CLAUDE CODE SKILL FILES ───────────────────────────────────────
  {
    id: "r17",
    title: "Financial Analysis Skill",
    description:
      "A Claude Code skill that turns any conversation into a structured financial analysis session. Covers personal finance, startup runway, investment research, and AI cost modelling.",
    category: "Skills",
    tier: "paid",
    link: "/downloads/financial-analysis-skill.md",
    downloadLabel: "Download Skill",
    fileType: "SKILL",
    badge: "New",
  },
  {
    id: "r18",
    title: "AI Tool Evaluator Skill",
    description:
      "Claude Code skill that scores any AI tool across 6 dimensions — capability, cost, integration, reliability, vendor risk, and AI safety. Outputs a structured Buy / Trial / Avoid verdict.",
    category: "Skills",
    tier: "paid",
    link: "/downloads/ai-tool-evaluator-skill.md",
    downloadLabel: "Download Skill",
    fileType: "SKILL",
  },
  {
    id: "r19",
    title: "Newsletter Research Skill",
    description:
      "Claude Code skill trained on the Cash & Cache editorial voice. Research, structure, and draft full newsletter sections on any AI or finance topic — ready to publish.",
    category: "Skills",
    tier: "paid",
    link: "/downloads/newsletter-research-skill.md",
    downloadLabel: "Download Skill",
    fileType: "SKILL",
  },

  // ── PAID — NOTION TEMPLATES ───────────────────────────────────────────────
  {
    id: "r20",
    title: "AI Project OS (Notion)",
    description:
      "Full Notion workspace for managing AI projects: experiment tracker, prompt library, cost log, model comparison database, and weekly review system. Duplicate and build immediately.",
    category: "Notion",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Get Template",
    fileType: "NOTION",
    badge: "Popular",
  },
  {
    id: "r21",
    title: "Personal Finance Dashboard (Notion)",
    description:
      "Track net worth, monthly budgets, investment positions, and financial goals in one clean Notion workspace. Pre-built formulas, linked databases, and a monthly review template.",
    category: "Notion",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Get Template",
    fileType: "NOTION",
  },
  {
    id: "r22",
    title: "Creator Business HQ (Notion)",
    description:
      "All-in-one Notion OS for newsletter creators: content calendar, sponsorship CRM, revenue tracker, subscriber growth log, and idea backlog. Built for Substack and beyond.",
    category: "Notion",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    downloadLabel: "Get Template",
    fileType: "NOTION",
    badge: "New",
  },
];

export const categories: Category[] = [
  "AI Frameworks",
  "Prompt Packs",
  "Skills",
  "Notion",
  "Finance",
  "Templates",
  "Tools",
  "Productivity",
  "Reading",
];
