import { SITE_URL } from "@/constants/routes";
import {
  DISPLAY_NAME,
  FULL_NAME,
  GITHUB_URL,
  HEADLINE,
  LINKEDIN_URL,
  X_URL,
} from "@/constants/profile";
import { jobs, startups, freelance, skills } from "@/services/experience";
import { responsibilityText, type Experience, type Responsibility } from "@/domains/Experience";
import { education } from "@/services/education";
import { hobby, opensource, earlyWork } from "@/services/projects";
import { talks } from "@/services/talks";
import type { Project } from "@/domains/Project";

/**
 * Date the portfolio content was last reviewed, printed in both llms files so
 * crawlers can judge freshness. Bump it when the content in `services/` changes.
 */
const CONTENT_UPDATED = "2026-10-29";

/** Resolves a site path (e.g. a talk page) to an absolute URL; absolute URLs pass through. */
function absoluteUrl(url: string): string {
  return url.startsWith("http") ? url : `${SITE_URL}${url}`;
}

/**
 * Renders a bullet with its evidence links appended as Markdown, so AI readers can
 * check the claim the same way a human can on the detail page.
 */
function responsibilityMarkdown(responsibility: Responsibility): string {
  if (typeof responsibility === "string") return responsibility;
  const links = responsibility.evidence
    .map((link) => `[${link.label}](${absoluteUrl(link.url)})`)
    .join(", ");
  return `${responsibility.text} (Evidence: ${links})`;
}

/**
 * Period shown next to an entry in the short index. For entries with sub-roles it
 * is the current role's period, so the index never pairs a title with dates when a
 * different title was held.
 */
function currentPeriod(experience: Experience): string {
  return experience.roles?.[0]?.period ?? experience.period;
}

/** Shared header for both llms files: name, summary blockquote and naming note. */
function headerLines(): string[] {
  return [
    `# ${DISPLAY_NAME} (${FULL_NAME})`,
    "",
    `> ${HEADLINE}, building developer platforms, SDKs, and multi-chain infrastructure. I work across Engineering, Product, and Customers — from roadmap and RFCs to delivery, partner programs, docs, and DevRel.`,
    "",
    `Goes by "${DISPLAY_NAME}" professionally; "${FULL_NAME}" is the full legal name. Content last updated ${CONTENT_UPDATED}.`,
    "",
  ];
}

/** Shared "About" section with the site's entry points and public profiles. */
function aboutLines(): string[] {
  return [
    "## About",
    `- [Home](${SITE_URL}/): Personal portfolio and introduction`,
    `- [Resume](${SITE_URL}/resume.pdf): Downloadable CV`,
    `- [Contact](${SITE_URL}/contact): Get in touch`,
    `- [LinkedIn](${LINKEDIN_URL}): Professional profile`,
    `- [GitHub](${GITHUB_URL}): Code`,
    `- [X](${X_URL}): Posts`,
    "",
  ];
}

/**
 * Generates a concise Markdown summary of the portfolio following the llms.txt convention.
 *
 * Aggregates data from all services (experience, education, talks, projects, skills)
 * into a compact one-line-per-entry format. Served at the `/llms.txt` route.
 *
 * @returns Plain-text Markdown string suitable for LLM consumption.
 *
 * @see https://llmstxt.org/
 */
export function generateLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(...headerLines(), ...aboutLines());

  // Experience
  lines.push("## Experience");
  const experienceGroups: { label: string; entries: Experience[] }[] = [
    { label: "Job", entries: jobs },
    { label: "Startup", entries: startups },
    { label: "Freelance", entries: freelance },
  ];
  for (const group of experienceGroups) {
    for (const job of group.entries) {
      const url = `${SITE_URL}/experience/${job.slug}`;
      const summary = responsibilityText(job.responsibilities[0]);
      lines.push(
        `- [${job.position} at ${job.company}](${url}): ${group.label}. ${summary} (${currentPeriod(job)})`
      );
    }
  }
  lines.push("");

  // Education
  lines.push("## Education");
  for (const edu of education) {
    const url = `${SITE_URL}/education/${edu.slug}`;
    const detail = edu.specialization
      ? `Specialization in ${edu.specialization}`
      : edu.technologies.slice(0, 3).join(", ");
    lines.push(
      `- [${edu.degree} at ${edu.institution}](${url}): ${detail} (${edu.period})`
    );
  }
  lines.push("");

  // Talks
  lines.push("## Talks");
  for (const talk of talks) {
    const url = `${SITE_URL}/talks/${talk.slug}`;
    const summary =
      talk.description.length > 120
        ? talk.description.slice(0, 117) + "..."
        : talk.description;
    lines.push(
      `- [${talk.title} at ${talk.event}](${url}): ${summary} (${talk.date})`
    );
  }
  lines.push("");

  // Skills
  lines.push("## Skills");
  for (const skill of skills) {
    lines.push(`- ${skill.category}: ${skill.technologies.join(", ")}`);
  }
  lines.push("");

  // Optional: skippable detail per llms.txt convention
  lines.push("## Optional");
  lines.push(
    `- [Full version](${SITE_URL}/llms-full.txt): Every bullet with evidence links, talk abstracts, thesis and project details`
  );
  for (const project of [...hobby, ...opensource, ...earlyWork]) {
    const url = `${SITE_URL}/projects/${project.slug}`;
    lines.push(`- [${project.name} — ${project.company}](${url}): ${project.description}`);
  }

  return lines.join("\n");
}

/**
 * Generates a comprehensive Markdown document with full detail for each portfolio section.
 *
 * Unlike {@link generateLlmsTxt}, this version includes responsibilities, thesis details,
 * talk descriptions, project features, and more. Served at the `/llms-full.txt` route.
 *
 * @returns Plain-text Markdown string with expanded content for each entry.
 *
 * @see https://llmstxt.org/
 */
export function generateLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push(...headerLines(), ...aboutLines());

  // Experience — Jobs
  lines.push("## Experience");
  lines.push("");
  for (const job of jobs) {
    lines.push(`### ${job.position} at ${job.company}`);
    lines.push("");
    lines.push(`- **Period**: ${job.period}`);
    for (const role of job.roles ?? []) {
      lines.push(`- **Role**: ${role.position} (${role.period})`);
    }
    if (job.location) lines.push(`- **Location**: ${job.location}`);
    if (job.companyUrl) lines.push(`- **Company**: [${job.company}](${job.companyUrl})`);
    lines.push(`- **Detail page**: [${SITE_URL}/experience/${job.slug}](${SITE_URL}/experience/${job.slug})`);
    lines.push("");
    lines.push("**Responsibilities:**");
    for (const r of job.responsibilities) {
      lines.push(`- ${responsibilityMarkdown(r)}`);
    }
    lines.push("");
    lines.push(`**Technologies:** ${job.technologies.join(", ")}`);
    lines.push("");
  }

  // Experience — Startups
  lines.push("### Startups");
  lines.push("");
  for (const startup of startups) {
    lines.push(`#### ${startup.position} at ${startup.company}`);
    lines.push("");
    lines.push(`- **Period**: ${startup.period}`);
    if (startup.location) lines.push(`- **Location**: ${startup.location}`);
    lines.push(`- **Detail page**: [${SITE_URL}/experience/${startup.slug}](${SITE_URL}/experience/${startup.slug})`);
    lines.push("");
    lines.push("**Responsibilities:**");
    for (const r of startup.responsibilities) {
      lines.push(`- ${responsibilityMarkdown(r)}`);
    }
    lines.push("");
    lines.push(`**Technologies:** ${startup.technologies.join(", ")}`);
    lines.push("");
  }

  // Experience — Freelance
  lines.push("### Freelance");
  lines.push("");
  for (const gig of freelance) {
    lines.push(`#### ${gig.position} at ${gig.company}`);
    lines.push("");
    lines.push(`- **Period**: ${gig.period}`);
    if (gig.location) lines.push(`- **Location**: ${gig.location}`);
    lines.push(`- **Detail page**: [${SITE_URL}/experience/${gig.slug}](${SITE_URL}/experience/${gig.slug})`);
    lines.push("");
    lines.push("**Responsibilities:**");
    for (const r of gig.responsibilities) {
      lines.push(`- ${responsibilityMarkdown(r)}`);
    }
    lines.push("");
    lines.push(`**Technologies:** ${gig.technologies.join(", ")}`);
    lines.push("");
  }

  // Education
  lines.push("## Education");
  lines.push("");
  for (const edu of education) {
    lines.push(`### ${edu.degree} at ${edu.institution}`);
    lines.push("");
    lines.push(`- **Period**: ${edu.period}`);
    if (edu.location) lines.push(`- **Location**: ${edu.location}`);
    if (edu.institutionUrl)
      lines.push(`- **Institution**: [${edu.institution}](${edu.institutionUrl})`);
    if (edu.specialization)
      lines.push(`- **Specialization**: ${edu.specialization}`);
    lines.push(`- **Detail page**: [${SITE_URL}/education/${edu.slug}](${SITE_URL}/education/${edu.slug})`);
    if (edu.thesis) {
      lines.push("");
      lines.push(`**Thesis:** ${edu.thesis.title}`);
      lines.push("");
      lines.push(edu.thesis.description);
    }
    lines.push("");
    lines.push(`**Technologies:** ${edu.technologies.join(", ")}`);
    lines.push("");
  }

  // Talks
  lines.push("## Talks");
  lines.push("");
  for (const talk of talks) {
    lines.push(`### ${talk.title}`);
    lines.push("");
    lines.push(`- **Event**: ${talk.event}`);
    lines.push(`- **Date**: ${talk.date}`);
    lines.push(`- **Location**: ${talk.location}${talk.country ? `, ${talk.country}` : ""}`);
    lines.push(`- **Detail page**: [${SITE_URL}/talks/${talk.slug}](${SITE_URL}/talks/${talk.slug})`);
    if (talk.links?.slides) lines.push(`- **Slides**: [Download](${SITE_URL}${talk.links.slides})`);
    if (talk.links?.video) lines.push(`- **Video**: [Watch](${talk.links.video})`);
    lines.push("");
    lines.push(talk.description);
    lines.push("");
    lines.push(`**Topics:** ${talk.topics.join(", ")}`);
    lines.push("");
  }

  // Projects
  lines.push("## Projects");
  lines.push("");

  const projectSections: { label: string; projects: Project[] }[] = [
    { label: "Hobby", projects: hobby },
    { label: "Open Source", projects: opensource },
    { label: "Early Work", projects: earlyWork },
  ];

  for (const section of projectSections) {
    if (section.projects.length === 0) continue;
    lines.push(`### ${section.label}`);
    lines.push("");
    for (const project of section.projects) {
      lines.push(`#### ${project.name} — ${project.company}`);
      lines.push("");
      lines.push(`- **Period**: ${project.period}`);
      if (project.website) lines.push(`- **Website**: [${project.website}](${project.website})`);
      if (project.github) lines.push(`- **GitHub**: [${project.github}](${project.github})`);
      lines.push(`- **Detail page**: [${SITE_URL}/projects/${project.slug}](${SITE_URL}/projects/${project.slug})`);
      lines.push("");
      lines.push(project.description);
      if (project.detailedDescription) {
        lines.push("");
        lines.push(project.detailedDescription);
      }
      if (project.features && project.features.length > 0) {
        lines.push("");
        lines.push("**Features:**");
        for (const f of project.features) {
          lines.push(`- ${f}`);
        }
      }
      lines.push("");
      lines.push(`**Technologies:** ${project.technologies.join(", ")}`);
      lines.push("");
    }
  }

  // Skills
  lines.push("## Skills");
  lines.push("");
  for (const skill of skills) {
    lines.push(`- **${skill.category}**: ${skill.technologies.join(", ")}`);
  }

  return lines.join("\n");
}
