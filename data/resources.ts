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
    id: "r-evaluator",
    title: "AI Tool Evaluator",
    description:
      "Interactive web app to evaluate and compare AI tools across capability, cost, integration ease, reliability, vendor risk, and AI safety — scored side-by-side so you can make fast, confident decisions.",
    category: "Tools",
    tier: "free",
    link: "https://product-research-tool-rho.vercel.app/?code=prt-xK9mW4vQ7nBz",
    downloadLabel: "Open Tool",
    badge: "Live Tool",
  },
  {
    id: "r-second-opinion",
    title: "The Second Opinion System",
    description:
      "A 4-prompt decision stress-testing framework: Steelman → Assumption Audit → Stress Test → Commitment Test. Paste into any LLM and run it before any product launch, pricing call, or strategic pivot.",
    category: "Prompt Packs",
    tier: "free",
    link: "/downloads/prompt-template-second-opinion-system.md",
    downloadLabel: "Download Template",
    fileType: "MD",
    badge: "New",
  },
  {
    id: "r-bmad",
    title: "BMAD Method Orchestrator",
    description:
      "Full orchestrator file for the Breakthrough Method of Agile Development — 4-phase lifecycle (Analysis → Planning → Solutioning → Implementation), 7 specialist AI agents, quality gates, and slash-command workflows. Duplicate into your Notion workspace and run.",
    category: "Notion",
    tier: "free",
    link: "https://rapid-begonia-4eb.notion.site/Orchestrator-File-for-BMAD-305c43f66c248003aa73ffe0e3a006a4?pvs=143",
    downloadLabel: "Open in Notion",
    fileType: "NOTION",
    badge: "Framework",
  },
];

export const categories: Category[] = ["Tools", "Prompt Packs", "Notion"];
