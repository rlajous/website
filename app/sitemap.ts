import { MetadataRoute } from "next";
import { jobs, startups, freelance } from "@/services/experience";
import { education } from "@/services/education";
import { hobby, opensource, earlyWork } from "@/services/projects";
import { talks } from "@/services/talks";
import { SITE_URL } from "@/constants/routes";

/**
 * Stable "last content update" date for the static, non-detail pages.
 *
 * Hardcoded (not `new Date()`) so the sitemap's `<lastmod>` values stay constant
 * across builds and deploys — a sitemap that claims every page changed on every
 * deploy trains crawlers to ignore `lastmod`. Bump this only when the static
 * pages or overall site structure meaningfully change.
 */
const SITE_CONTENT_UPDATED = new Date("2026-06-07");

/**
 * Derives a stable `lastModified` date from a human-readable period string by
 * taking the latest 4-digit year it contains (e.g. "2019-2020" → 2020-12-31).
 *
 * Falls back to {@link SITE_CONTENT_UPDATED} when no year can be parsed. Using a
 * content-derived, build-stable date keeps `<lastmod>` trustworthy.
 *
 * @param period - Human-readable date range (e.g. "2019-2020", "2024", "Jan 2022 - Present").
 * @returns A stable Date for the entry's last modification.
 */
function lastModifiedFromPeriod(period: string): Date {
  const years = period.match(/\d{4}/g);
  if (!years || years.length === 0) {
    return SITE_CONTENT_UPDATED;
  }
  const latestYear = Math.max(...years.map(Number));
  // December 31 of the latest year — stable and unambiguous.
  return new Date(Date.UTC(latestYear, 11, 31));
}

/**
 * Generates the XML sitemap for all static pages and dynamic detail pages
 * (experience, education, projects, talks).
 *
 * Used by Next.js to produce `/sitemap.xml`. Aggregates data from all service
 * modules to include every detail page route. Detail-page `lastModified` values
 * are derived from each entry's data (period / uploadDate) so they remain stable
 * across builds.
 *
 * @returns Array of sitemap entries with URL, lastModified, changeFrequency, and priority.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/talks`,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Generate experience detail pages
  const experiencePages: MetadataRoute.Sitemap = [...jobs, ...startups, ...freelance].map(
    (exp) => ({
      url: `${baseUrl}/experience/${exp.slug}`,
      lastModified: lastModifiedFromPeriod(exp.period),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Generate education detail pages
  const educationPages: MetadataRoute.Sitemap = education.map((edu) => ({
    url: `${baseUrl}/education/${edu.slug}`,
    lastModified: lastModifiedFromPeriod(edu.period),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Generate project detail pages
  const projectPages: MetadataRoute.Sitemap = [
    ...hobby,
    ...opensource,
    ...earlyWork,
  ].map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: lastModifiedFromPeriod(project.period),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Generate talk detail pages — prefer the precise uploadDate when present.
  const talkPages: MetadataRoute.Sitemap = talks.map((talk) => ({
    url: `${baseUrl}/talks/${talk.slug}`,
    lastModified: talk.uploadDate
      ? new Date(talk.uploadDate)
      : lastModifiedFromPeriod(talk.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...experiencePages,
    ...educationPages,
    ...projectPages,
    ...talkPages,
  ];
}
