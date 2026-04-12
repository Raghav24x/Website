export interface RSSPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export async function fetchSubstackPosts(): Promise<RSSPost[]> {
  try {
    const res = await fetch(
      "https://cashandcache.substack.com/feed",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return getFallbackPosts();
    const xml = await res.text();
    return parseRSS(xml);
  } catch {
    return getFallbackPosts();
  }
}

function parseRSS(xml: string): RSSPost[] {
  const items: RSSPost[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const pubDate = extractTag(block, "pubDate");
    const description = stripHtml(extractTag(block, "description")).slice(0, 160);
    if (title && link) {
      items.push({ title, link, pubDate, description });
    }
    if (items.length >= 4) break;
  }
  return items.length > 0 ? items : getFallbackPosts();
}

function extractTag(xml: string, tag: string): string {
  const cdataMatch = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`).exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();
  const match = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`).exec(xml);
  return match ? match[1].trim() : "";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ").trim();
}

function getFallbackPosts(): RSSPost[] {
  return [
    {
      title: "How I Automated My Entire Financial Life in a Weekend",
      link: "https://cashandcache.substack.com",
      pubDate: "Mon, 07 Apr 2025 10:00:00 GMT",
      description:
        "From bank transfers to investment rebalancing — the exact tools and workflows I use to run my finances on autopilot.",
    },
    {
      title: "The Cache Behind the Cash: AI Tools That Actually Save Money",
      link: "https://cashandcache.substack.com",
      pubDate: "Mon, 31 Mar 2025 10:00:00 GMT",
      description:
        "A curated breakdown of AI-powered apps worth paying for — and the ones that are just hype.",
    },
    {
      title: "Why Your Emergency Fund Strategy Is Probably Wrong",
      link: "https://cashandcache.substack.com",
      pubDate: "Mon, 24 Mar 2025 10:00:00 GMT",
      description:
        "The 3–6 month rule was designed for a different era. Here's how to rethink it for today's gig economy reality.",
    },
    {
      title: "The Creator's Guide to Tax Season (Without the Panic)",
      link: "https://cashandcache.substack.com",
      pubDate: "Mon, 17 Mar 2025 10:00:00 GMT",
      description:
        "Everything freelancers, newsletter writers, and side-hustlers need to know before filing — from someone who learned the hard way.",
    },
  ];
}

export function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
