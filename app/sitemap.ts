import { MetadataRoute } from "next";
import { jobs, startups } from "@/services/experience";
import { education } from "@/services/education";
import { freelance, hobby, opensource } from "@/services/projects";
import { talks } from "@/services/talks";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://navarrolajous.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/talks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Generate experience detail pages
  const experiencePages: MetadataRoute.Sitemap = [...jobs, ...startups].map(
    (exp) => ({
      url: `${baseUrl}/experience/${exp.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  // Generate education detail pages
  const educationPages: MetadataRoute.Sitemap = education.map((edu) => ({
    url: `${baseUrl}/education/${edu.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Generate project detail pages
  const projectPages: MetadataRoute.Sitemap = [
    ...freelance,
    ...hobby,
    ...opensource,
  ].map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Generate talk detail pages
  const talkPages: MetadataRoute.Sitemap = talks.map((talk) => ({
    url: `${baseUrl}/talks/${talk.slug}`,
    lastModified: new Date(),
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
