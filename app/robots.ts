import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/routes";

/**
 * Configures crawler rules for the site.
 *
 * Allows all paths except `/api/` and points to the XML sitemap.
 * Used by Next.js to produce `/robots.txt`.
 *
 * @returns Robots configuration object.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
