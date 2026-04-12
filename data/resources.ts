export type Tier = "free" | "paid";
export type Category =
  | "Finance"
  | "Tech"
  | "Productivity"
  | "Templates"
  | "Tools"
  | "Reading";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: Category;
  tier: Tier;
  link: string;
  badge?: string;
}

export const resources: Resource[] = [
  // FREE
  {
    id: "r1",
    title: "Personal Budget Starter",
    description:
      "A simple spreadsheet template to track income, expenses, and savings goals on a monthly basis.",
    category: "Templates",
    tier: "free",
    link: "https://cashandcache.substack.com",
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
      "Enter your principal, rate, and time to see exactly how your money grows over decades.",
    category: "Tools",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },
  {
    id: "r4",
    title: "Tech Stack for the Modern Investor",
    description:
      "The exact apps, brokerages, and automation tools we use to manage money efficiently in 2025.",
    category: "Tech",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },
  {
    id: "r5",
    title: "Emergency Fund Calculator",
    description:
      "Figure out your ideal emergency fund size based on your monthly expenses and risk tolerance.",
    category: "Finance",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },
  {
    id: "r6",
    title: "Weekly Financial Review Checklist",
    description:
      "A 10-minute weekly routine to stay on top of your finances without obsessing over every penny.",
    category: "Productivity",
    tier: "free",
    link: "https://cashandcache.substack.com",
  },
  // PAID
  {
    id: "r7",
    title: "Net Worth Tracker (Advanced)",
    description:
      "Multi-account net worth dashboard with automated charts, asset allocation breakdown, and year-over-year growth tracking.",
    category: "Templates",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    badge: "Most Loved",
  },
  {
    id: "r8",
    title: "AI Prompts for Financial Planning",
    description:
      "50+ battle-tested prompts to use with ChatGPT or Claude for budgeting, tax prep, and investment research.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    badge: "New",
  },
  {
    id: "r9",
    title: "Debt Payoff Optimizer",
    description:
      "Avalanche vs snowball comparison tool that models your exact debt payoff timeline and total interest saved.",
    category: "Templates",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
  },
  {
    id: "r10",
    title: "Side Income Tax Prep Kit",
    description:
      "Everything freelancers and creators need to track deductions, quarterly taxes, and self-employment income.",
    category: "Finance",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    badge: "Seasonal",
  },
  {
    id: "r11",
    title: "Investment Research Template",
    description:
      "Structured Notion template for researching stocks, ETFs, and crypto — with built-in scoring rubrics.",
    category: "Templates",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
  },
  {
    id: "r12",
    title: "The $0-to-$1K Savings Automation Playbook",
    description:
      "Step-by-step system to automate your savings using modern banking tools, with IFTTT and Zapier recipes included.",
    category: "Productivity",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
  },
  {
    id: "r13",
    title: "Creator Economy Revenue Dashboard",
    description:
      "Track income streams across Substack, YouTube, sponsorships, and courses — with MRR and runway projections.",
    category: "Tools",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
    badge: "New",
  },
  {
    id: "r14",
    title: "Annual Financial Review Framework",
    description:
      "A guided 12-question process to review your year financially and set meaningful goals for the next one.",
    category: "Finance",
    tier: "paid",
    link: "https://cashandcache.substack.com/subscribe",
  },
];

export const categories: Category[] = [
  "Finance",
  "Tech",
  "Productivity",
  "Templates",
  "Tools",
  "Reading",
];
