export type Tier = "free" | "paid";
export type Category = "Tools" | "Prompt Packs" | "Notion" | "Guides";

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

  // ── PREMIUM ────────────────────────────────────────────────────────────

  {
    id: "r-autoresearch",
    title: "AutoResearch for Claude Skills",
    description:
      "Two slash commands — /eval-suite-wizard and /auto-research — that auto-generate a binary eval suite for any SKILL.md file, then run a self-improving loop: test → score → patch → retest until your skill hits a target pass rate or iteration cap.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/i/193982189/how-autoresearch-actually-works",
    downloadLabel: "Get this",
    badge: "Claude Skill",
  },
  {
    id: "r-pipeline",
    title: "Build a Custom AI Pipeline in 10 Minutes",
    description:
      "The /build-my-pipeline wizard interviews you about your workflow, then auto-generates a complete chained multi-skill orchestrator — all stage skill files included — so you go from idea to running AI pipeline in one session.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/i/194215625/build-your-own-pipeline-in-10-minutes",
    downloadLabel: "Get this",
    badge: "New",
  },
  {
    id: "r-second-opinion",
    title: "The Second Opinion System",
    description:
      "A 4-prompt decision stress-testing framework: Steelman → Assumption Audit → Stress Test → Commitment Test. Run it before any product launch, pricing call, or strategic pivot. Available as a Markdown template and a one-click Claude Skill.",
    category: "Prompt Packs",
    tier: "paid",
    link: "https://cashandcache.substack.com/i/193440166/the-investigation-kit",
    downloadLabel: "Get this",
    fileType: "MD",
    badge: "Framework",
  },
  {
    id: "r-daily-intel",
    title: "Daily Intelligence Agent (Autonomous Briefing)",
    description:
      "A Claude Cowork scheduled agent that runs every morning: searches the web, deduplicates against your Notion memory, applies an Intelligence Analyst skill to synthesise findings, and auto-delivers a tight briefing straight to Slack — no manual steps.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/i/191859255/step-3-build-your-autonomous-research-agent",
    downloadLabel: "Get this",
    badge: "Autonomous",
  },
  {
    id: "r-product-research",
    title: "Product Research Tool",
    description:
      "A custom Claude plugin with /evaluate and /compare commands that scores any AI tool across 8 capability dimensions and returns a calibrated workflow-fit verdict — structured, repeatable product research in seconds.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/i/190234208/introducing-the-product-research-tool-beta",
    downloadLabel: "Get this",
    badge: "Plugin",
  },
  {
    id: "r-bmad",
    title: "BMAD Method Orchestrator",
    description:
      "Full orchestrator file for the Breakthrough Method of Agile Development — 4-phase lifecycle (Analysis → Planning → Solutioning → Implementation), 7 specialist AI agents, quality gates, and slash-command workflows. Download and run in your own environment.",
    category: "Notion",
    tier: "paid",
    link: "https://raghavmhra.gumroad.com/l/bmad?_gl=1*colcv0*_ga*MTkwODk1MDAwMC4xNzc1OTg0NjE2*_ga_6LJN6D94N6*czE3Nzc2NTc2NzEkbzIkZzAkdDE3Nzc2NTc2NzEkajYwJGwwJGgw",
    downloadLabel: "Get on Gumroad",
    fileType: "NOTION",
    badge: "Framework",
  },

  // ── FREE ────────────────────────────────────────────────────────────────

  {
    id: "r-transferable-prompting",
    title: "Build Transferable AI Prompting Skills",
    description:
      "A 10-minute interview prompt that generates a personalised 5-prompt framework built around your work, audience, and specific frustrations — reusable across any AI tool without starting from scratch every session.",
    category: "Prompt Packs",
    tier: "free",
    link: "https://www.notion.so/How-to-build-transferable-AI-Prompting-Skills-353c43f66c248036a955fef4348ab98f",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Prompt",
  },
  {
    id: "r-costar",
    title: "CO-STAR Framework Builder",
    description:
      "A structured Notion template that applies the CO-STAR prompting method inside Perplexity Computer — get sharper, more targeted outputs without inflating your token bill or burning through credits.",
    category: "Notion",
    tier: "free",
    link: "https://www.notion.so/Using-Perplexity-Computer-without-wasting-token-credits-353c43f66c248052a249e1c2fe4278ed",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Template",
  },
  {
    id: "r-intel-dashboard",
    title: "Build Your Own AI Intelligence Dashboard",
    description:
      "Step-by-step Notion guide for building a personal news aggregator that monitors any industry vertical and automatically surfaces relevant developments — structured workflow, no code required.",
    category: "Notion",
    tier: "free",
    link: "https://www.notion.so/Build-your-own-AI-Intelligence-Dashboard-353c43f66c2480feac7edf1162a07b38",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Template",
  },
  {
    id: "r-cowork-pipeline",
    title: "Claude Cowork Newsletter Pipeline",
    description:
      "Exact workflow for producing a 2,000-word article, 5 Substack Notes, and a LinkedIn post in a single Cowork session — includes the folder structure, master prompt, and two-round editorial loop used to build a real Cash & Cache issue.",
    category: "Guides",
    tier: "free",
    link: "https://cashandcache.substack.com/i/189055326/creating-a-newsletter-pipeline-the-use-case-for-my-cowork-application",
    downloadLabel: "Read Guide",
    badge: "Workflow",
  },
  {
    id: "r-excel-model",
    title: "Build a Financial Model with Claude in Excel",
    description:
      "Three tested Claude-in-Excel workflows — dirty data cleanup, a 15,000-row Olympic dataset dashboard, and a 3-year SaaS P&L — with copy-paste prompts and an audit checklist for catching broken formula links before you present.",
    category: "Guides",
    tier: "free",
    link: "https://cashandcache.substack.com/i/188294856/build-a-business-model",
    downloadLabel: "Read Guide",
    badge: "Workflow",
  },
  {
    id: "r-gemini-workspace",
    title: "The Executive Assistant: Gemini + Google Workspace",
    description:
      "Notion guide for connecting Gemini to Gmail, Google Drive, and Google Calendar — so it can schedule meetings, triage emails, and organise files on plain-language command, without switching between apps.",
    category: "Notion",
    tier: "free",
    link: "https://www.notion.so/The-Executive-Assistant-Gemini-Google-Workspace-353c43f66c24805b9340cb98ba5b8580",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Template",
  },
  {
    id: "r-gemini-intel",
    title: "Build an Intelligence System with Gemini",
    description:
      "Full walkthrough for a Gemini-powered research system that gathers intel, maps strategic plans, and produces visual infographics and interactive designs — from a single end-to-end workflow you can run repeatedly.",
    category: "Guides",
    tier: "free",
    link: "https://cashandcache.substack.com/p/building-santas-intelligence-system",
    downloadLabel: "Read Guide",
    badge: "Guide",
  },
  {
    id: "r-claude-design",
    title: "Claude Design for Non-Designers",
    description:
      "Practical guide to going from a rough idea to a polished visual using Claude Design — covers layout, colour, and asset generation end-to-end with no design background required.",
    category: "Guides",
    tier: "free",
    link: "https://cashandcache.substack.com/p/claude-design-for-non-designers-a",
    downloadLabel: "Read Guide",
    badge: "Guide",
  },
  {
    id: "r-claude-code-non-dev",
    title: "Claude Code Isn't Just for Developers",
    description:
      "Five Claude Code workflows — file manipulation, research automation, and life organisation — that require zero coding. Built for knowledge workers and operators, not engineers.",
    category: "Guides",
    tier: "free",
    link: "https://cashandcache.substack.com/p/claude-code-isnt-just-for-developers",
    downloadLabel: "Read Guide",
    badge: "Guide",
  },
  {
    id: "r-skills-fixes",
    title: "40+ Claude Skills Failures: The 5 Fixes",
    description:
      "The five root-cause fixes from analysing over 40 Claude Skills failures — covering activation reliability, output consistency, and long-term maintenance so your skills keep working as your workflow evolves.",
    category: "Guides",
    tier: "free",
    link: "https://cashandcache.substack.com/p/i-analyzed-40-claude-skills-failures",
    downloadLabel: "Read Guide",
    badge: "Guide",
  },
  {
    id: "r-perplexity-comet",
    title: "Perplexity Comet as a Newsletter Assistant",
    description:
      "A week-long real test of Perplexity Comet across 4 newsletter workflows — research automation, content analysis, and more — with copy-paste prompt templates and an honest verdict on where it delivers vs. falls short.",
    category: "Guides",
    tier: "free",
    link: "https://cashandcache.substack.com/p/i-used-perplexity-comet-as-my-newsletter",
    downloadLabel: "Read Guide",
    badge: "Guide",
  },
  {
    id: "r-tool-graveyard",
    title: "The Tool Graveyard Audit",
    description:
      "A structured Notion audit template for identifying which AI tools you're actually using versus just paying for — includes a decision framework for cutting, consolidating, or committing to each tool in your stack.",
    category: "Notion",
    tier: "free",
    link: "https://www.notion.so/The-Tool-Graveyard-Audit-2c5c43f66c2480569582c6d68d5ff518",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Template",
  },
  {
    id: "r-idea-funneling",
    title: "Idea Funneling and Filtering Prompt",
    description:
      "Consultant-style divergence and convergence prompt sequence — go from wide ideation to a clear, defensible decision without losing creative range along the way. Structured for real strategic decisions, not brainstorming fluff.",
    category: "Prompt Packs",
    tier: "free",
    link: "https://www.notion.so/Idea-Funneling-and-Filtering-Prompt-2bcc43f66c2480afada6f8a92753af79",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Prompt",
  },
  {
    id: "r-precision-research",
    title: "Precision Research Prompt",
    description:
      "A concise prompt that scopes and focuses any research task to your exact requirements — eliminates broad outputs and filler so every response is targeted, relevant, and immediately usable.",
    category: "Prompt Packs",
    tier: "free",
    link: "https://www.notion.so/Precision-Research-Prompt-2b8c43f66c24808ebc55c38419d2e0a1",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Prompt",
  },
  {
    id: "r-chief-content",
    title: "Chief Content Creator Framework",
    description:
      "A multi-stage content framework guiding you through research, iteration, quality testing, and voice development — so your output sounds like you, not a generic AI template, and improves with every cycle.",
    category: "Prompt Packs",
    tier: "free",
    link: "https://www.notion.so/Chief-Content-Creator-2bbc43f66c248072a9aedc7e31939b4c",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Prompt",
  },
];

export const categories: Category[] = ["Tools", "Prompt Packs", "Notion", "Guides"];
