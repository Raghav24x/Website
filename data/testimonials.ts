export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  platform: string;
  quote: string;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Nair",
    handle: "@priya_builds",
    platform: "Twitter / X",
    quote:
      "Cash & Cache changed how I think about money. The AI prompts template alone saved me hours every tax season. Mandatory read for anyone building on the internet.",
    initials: "PN",
    color: "bg-purple-600",
  },
  {
    id: "t2",
    name: "Marcus Webb",
    handle: "@marcuswebb",
    platform: "LinkedIn",
    quote:
      "The net worth tracker is the best free financial tool I've ever used. The paid version? Absolutely worth it — the automation alone pays for itself.",
    initials: "MW",
    color: "bg-blue-600",
  },
  {
    id: "t3",
    name: "Sofia Chen",
    handle: "@sofiafinds",
    platform: "Substack",
    quote:
      "I've been reading finance newsletters for years. Cash & Cache hits differently — it's the only one that bridges personal finance and tech in a way that actually makes sense.",
    initials: "SC",
    color: "bg-rose-600",
  },
  {
    id: "t4",
    name: "Jordan Okafor",
    handle: "@jordanbuilds",
    platform: "Twitter / X",
    quote:
      "The debt payoff optimizer helped me visualize paying off $18k in student loans 14 months earlier than I expected. This newsletter is criminally underrated.",
    initials: "JO",
    color: "bg-amber-600",
  },
  {
    id: "t5",
    name: "Leila Rahimi",
    handle: "@leilarahimi_",
    platform: "Instagram",
    quote:
      "As a first-generation investor, Cash & Cache made the financial world feel approachable. The reading list alone is worth subscribing for.",
    initials: "LR",
    color: "bg-teal-600",
  },
];
