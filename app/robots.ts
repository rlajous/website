import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/routes";

/** AI training crawlers, AI search indexers and on-demand assistant fetchers. */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

/**
 * Configures crawler rules for the site.
 *
 * Allows all paths except `/api/` (but keeps `/api/project-banner/`, the og:image of
 * projects without a banner) and points to the XML sitemap. AI crawlers and
 * assistant fetchers are listed by name so that allowing them is an explicit choice:
 * the site wants to be found and summarized by LLMs (see `/llms.txt`).
 * Used by Next.js to produce `/robots.txt`.
 *
 * @returns Robots configuration object.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: ["/", "/api/project-banner/"], disallow: "/api/" },
      { userAgent: AI_CRAWLERS, allow: ["/", "/api/project-banner/"], disallow: "/api/" },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
