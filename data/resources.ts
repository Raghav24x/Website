export type Tier = "free" | "paid";
export type Category = "Tools" | "Prompt Packs" | "Notion";

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
  {
    id: "r-autoresearch",
    title: "AutoResearch for Claude Skills",
    description:
      "Two slash commands — /eval-suite-wizard and /auto-research — that auto-generate a binary eval suite for any SKILL.md file, then run a self-improving loop: test → score → patch → retest until your skill hits a target pass rate or iteration cap.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/i/193982189/how-autoresearch-actually-works",
    downloadLabel: "Read Article",
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
    downloadLabel: "Read Article",
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
    downloadLabel: "Read Article",
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
    downloadLabel: "Read Article",
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
    downloadLabel: "Read Article",
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
];

export const categories: Category[] = ["Tools", "Prompt Packs", "Notion"];
