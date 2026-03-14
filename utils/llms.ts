import { SITE_URL } from "@/constants/routes";
import { jobs, startups, skills } from "@/services/experience";
import { education } from "@/services/education";
import { freelance, hobby, opensource } from "@/services/projects";
import { talks } from "@/services/talks";

export function generateLlmsTxt(): string {
  const lines: string[] = [];

  // Header
  lines.push("# Rodrigo Manuel Navarro Lajous");
  lines.push("");
  lines.push(
    "> Software Engineer and Digital Nomad. Specializing in blockchain security, Web3, and full-stack development."
  );
  lines.push("");

  // About
  lines.push("## About");
  lines.push(
    `- [Home](${SITE_URL}/): Personal portfolio and introduction`
  );
  lines.push(
    `- [Resume](${SITE_URL}/resume.pdf): Downloadable CV`
  );
  lines.push(
    `- [Contact](${SITE_URL}/contact): Get in touch`
  );
  lines.push("");

  // Experience
  lines.push("## Experience");
  for (const job of [...jobs, ...startups]) {
    const url = job.companyUrl || `${SITE_URL}/experience/${job.slug}`;
    const summary = job.responsibilities[0];
    lines.push(
      `- [${job.position} at ${job.company}](${url}): ${summary} (${job.period})`
    );
  }
  lines.push("");

  // Education
  lines.push("## Education");
  for (const edu of education) {
    const url = edu.institutionUrl || `${SITE_URL}/education/${edu.slug}`;
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

  // Projects
  lines.push("## Projects");
  for (const project of [...freelance, ...hobby, ...opensource]) {
    const url =
      project.website || project.github || `${SITE_URL}/projects/${project.slug}`;
    lines.push(`- [${project.name} — ${project.company}](${url}): ${project.description}`);
  }
  lines.push("");

  // Skills
  lines.push("## Skills");
  for (const skill of skills) {
    lines.push(`- ${skill.category}: ${skill.technologies.join(", ")}`);
  }

  return lines.join("\n");
}

export function generateLlmsFullTxt(): string {
  const lines: string[] = [];

  // Header
  lines.push("# Rodrigo Manuel Navarro Lajous");
  lines.push("");
  lines.push(
    "> Software Engineer and Digital Nomad. Specializing in blockchain security, Web3, and full-stack development."
  );
  lines.push("");

  // About
  lines.push("## About");
  lines.push(
    `- [Home](${SITE_URL}/): Personal portfolio and introduction`
  );
  lines.push(
    `- [Resume](${SITE_URL}/resume.pdf): Downloadable CV`
  );
  lines.push(
    `- [Contact](${SITE_URL}/contact): Get in touch`
  );
  lines.push("");

  // Experience — Jobs
  lines.push("## Experience");
  lines.push("");
  for (const job of jobs) {
    lines.push(`### ${job.position} at ${job.company}`);
    lines.push("");
    lines.push(`- **Period**: ${job.period}`);
    if (job.location) lines.push(`- **Location**: ${job.location}`);
    if (job.companyUrl) lines.push(`- **Company**: [${job.company}](${job.companyUrl})`);
    lines.push(`- **Detail page**: [${SITE_URL}/experience/${job.slug}](${SITE_URL}/experience/${job.slug})`);
    lines.push("");
    lines.push("**Responsibilities:**");
    for (const r of job.responsibilities) {
      lines.push(`- ${r}`);
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
      lines.push(`- ${r}`);
    }
    lines.push("");
    lines.push(`**Technologies:** ${startup.technologies.join(", ")}`);
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

  const projectSections: { label: string; projects: typeof freelance }[] = [
    { label: "Freelance", projects: freelance },
    { label: "Hobby", projects: hobby },
    { label: "Open Source", projects: opensource },
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
