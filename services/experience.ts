/**
 * @module services/experience
 * @description Professional experience data used across experience pages, LLM text generation,
 * and Schema.org structured data scripts.
 */
import { Experience } from "@/domains/Experience";

/**
 * Employment positions ordered by most recent first.
 * Rendered as {@link ExperienceCard} components on the Jobs tab of `/experience`.
 */
export const jobs: Experience[] = [
  {
    id: 1,
    slug: "webacy",
    position: "Product Engineer",
    company: "Webacy",
    companyLogo: "/assets/companies/webacy.png",
    period: "April 2025 — Present",
    type: "job",
    location: "Remote",
    companyUrl: "https://webacy.com",
    roles: [
      { position: "Product Engineer", period: "April 2026 — Present" },
      { position: "Staff Engineer", period: "April 2025 — April 2026" },
    ],
    responsibilities: [
      "Architected the 9-chain risk-scoring expansion (ETH, SOL, ARB, POL, OPT, BASE, BSC, TON, SUI), unlocking enterprise integrations with 1inch, WalletConnect, Mercado Libre, SUI, Cetus, and Metamask.",
      "Led the labeling-system redesign via an org-wide RFC (76 cross-team comments) and shipped the type-safe label taxonomy — the platform's highest-volume ticket by commits and the foundation for how Webacy explains and ships risk data.",
      "Shipped @webacy-xyz/sdk (TypeScript monorepo: core / threat / trading) and migrated documentation to Mintlify with OpenAPI 3.0, cutting partner integration time from days to hours.",
      "Spoke at DuneCon and the DSS Security Summit, converting external visibility into 12 qualified business leads; closed the Agio enterprise deal end-to-end and retained Velvet Capital with an emergency IndexedDB migration during a production outage.",
      "Designed the event-driven workers architecture (AWS ECS Fargate + SQS/SNS) and the 'Eye of Sauron' Datadog APM stack, resolving 21 P1/P2 production incidents including Redis pool exhaustion and Solana sniper-detection false positives.",
      "Operated across four functions (Engineering, Product, Sales Engineering, and DevRel) — 23+ self-initiated initiatives over 12 months on a high-impact distributed team.",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "AWS ECS Fargate",
      "SQS",
      "SNS",
      "Lambda",
      "Datadog",
      "Mintlify",
      "OpenAPI 3.0",
      "Turborepo",
      "Multi-chain",
      "Web3",
    ],
  },
  {
    id: 2,
    slug: "poap",
    position: "Senior Software Engineer",
    company: "POAP",
    companyLogo: "/assets/companies/poap.png",
    period: "May 2021 — April 2025",
    type: "job",
    location: "Remote",
    companyUrl: "https://poap.xyz",
    responsibilities: [
      "Led a new product line end-to-end, from roadmap and stakeholder alignment to delivery, improving onboarding efficiency by 40%.",
      "Shipped POAP.js, the public SDK that cut partner integration time by 50%.",
      "Drove the Freeze Token smart-contract upgrade, improving token-migration security by 30%.",
    ],
    technologies: [
      "Solidity",
      "Node.js",
      "AWS",
      "Next.js",
      "TypeScript",
      "NPM",
      "Cloudflare",
      "Docker",
      "AWS CDK",
      "CI/CD",
      "HardHat",
      "Jest",
      "Blockchain",
      "Web3",
    ],
  },
  {
    id: 3,
    slug: "quipu-market",
    position: "Full Stack Developer",
    company: "Quipu Market",
    companyLogo: "/assets/companies/quipu.png",
    period: "April 2020 — May 2021",
    type: "job",
    location: "Buenos Aires, Argentina",
    companyUrl: "https://quipu.com.co/",
    responsibilities: [
      "Built the front-end design system, shared component library, and CI/CD pipeline, accelerating dev velocity 30% and cutting deployment errors 40%.",
    ],
    technologies: [
      "Angular",
      "NPM",
      "Firebase",
      "CSS",
      "JavaScript",
      "CI/CD",
      "Library Development",
      "Front-end Design Systems",
    ],
  },
  {
    id: 4,
    slug: "turismocity",
    position: "Full Stack Developer",
    company: "Turismocity",
    companyLogo: "/assets/companies/turismocity.png",
    period: "October 2019 — April 2020",
    type: "job",
    location: "Buenos Aires, Argentina",
    companyUrl: "https://www.turismocity.com.ar/",
    responsibilities: [
      "Integrated five external APIs, improving system response speed 20% and data consistency 25%.",
    ],
    technologies: [
      "APIs",
      "JavaScript",
      "Vue.js",
      "Stakeholder Management",
      "Front-end Design",
      "System Integration",
    ],
  },
  {
    id: 5,
    slug: "wolox",
    position: "Frontend Developer",
    company: "WOLOX",
    companyLogo: "/assets/companies/wolox.png",
    period: "June 2018 — October 2019",
    type: "job",
    location: "Buenos Aires, Argentina",
    companyUrl: "https://github.com/wolox",
    responsibilities: [
      "Expanded my skill set by constantly changing technology in Front-end tools such as Angular, React, and Vue.js, which has given me great adaptability.",
    ],
    technologies: ["Angular", "React", "Vue.js", "Bash", "AWS"],
  },
];

/**
 * Startup and entrepreneurial ventures ordered by most recent first.
 * Rendered on the Startups tab of `/experience`.
 */
export const startups: Experience[] = [
  {
    id: 1,
    slug: "dome",
    position: "Founding Member",
    company: "Dome",
    companyLogo: "/assets/companies/dome.png",
    period: "April 2022 — December 2022",
    type: "startup",
    location: "Remote",
    responsibilities: [
      "Created the whole application from scratch, including CI/CD pipelines for both front-end and back-end applications.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Nest.js",
      "Management",
      "AWS",
      "Vercel",
      "Leadership",
      "Blockchain",
    ],
  },
  {
    id: 2,
    slug: "ploti",
    position: "Founding Member",
    company: "PLOTI",
    companyLogo: "/assets/companies/ploti.png",
    period: "July 2018 — March 2019",
    type: "startup",
    location: "Buenos Aires, Argentina",
    responsibilities: [
      "Managed front-end and back-end development.",
      "Worked to solve complex problems using the latest Cloud, Mobile, and Web Technologies.",
    ],
    technologies: [
      "AWS",
      "React.js",
      "Express.js",
      "Management",
      "Cloud Services",
      "Leadership",
      "GPS Technologies",
    ],
  },
];

/**
 * Freelance client engagements ordered by most recent first.
 * Rendered on the Freelance tab of `/experience`.
 */
export const freelance: Experience[] = [
  {
    id: 1,
    slug: "lukto-landing",
    position: "Lukto Landing Page",
    company: "Gamkat",
    period: "2021",
    type: "freelance",
    location: "Remote",
    companyUrl: "https://lukto.navarrolajous.com",
    companyLogo: "/assets/companies/gamkat.png",
    responsibilities: [
      "Designed and shipped an animated landing page for Gamkat's Lukto game, end-to-end.",
      "Set up AWS hosting (S3 + CloudFront + Route 53) and a CI/CD pipeline via GitHub Actions for one-click deploys.",
    ],
    technologies: [
      "Vue.js",
      "S3",
      "CloudFront",
      "Route 53",
      "SCSS",
      "GitHub Actions",
    ],
    banner: "/assets/Lukto.png",
  },
  {
    id: 2,
    slug: "bepanthene-landing",
    position: "Bepanthene Landing Page",
    company: "Bepanthene",
    period: "2020",
    type: "freelance",
    location: "Remote",
    companyUrl: "https://bepanthene.navarrolajous.com",
    companyLogo: "/assets/companies/bepanthene.png",
    responsibilities: [
      "Added the /desafio page to the existing Bepanthene marketing site, including a full standardization pass and responsive layout.",
      "Brought a previously source-less page under version control and shipped it through a reproducible AWS deploy.",
    ],
    technologies: [
      "Vue.js",
      "S3",
      "CloudFront",
      "Route 53",
      "SCSS",
      "GitHub Actions",
    ],
    banner: "/assets/bepanthene.png",
  },
  {
    id: 3,
    slug: "seeds-landing",
    position: "Seeds Landing Page",
    company: "Seeds",
    period: "2020",
    type: "freelance",
    location: "Remote",
    companyUrl: "https://weareseeders.navarrolajous.com",
    companyLogo: "/assets/companies/seeds.png",
    responsibilities: [
      "Built the Seeds marketing landing page from scratch and wired up a contact form delivering submissions via SMTP.",
      "Provisioned AWS hosting (S3 + CloudFront + Route 53) and a CircleCI deploy pipeline.",
    ],
    technologies: [
      "Nuxt",
      "Vue.js",
      "S3",
      "CloudFront",
      "Route 53",
      "SCSS",
      "CircleCI",
    ],
    banner: "/assets/seeds.png",
  },
];

/**
 * Skill categories with associated technologies.
 * Used by {@link generateLlmsTxt} and {@link generateLlmsFullTxt} for the Skills section.
 */
export const skills: { category: string; technologies: string[] }[] = [
  {
    category: "Product & Program",
    technologies: [
      "Roadmapping",
      "RFCs",
      "OKRs",
      "Stakeholder Management",
      "Partner Programs",
      "Linear",
      "Notion",
      "Figma",
    ],
  },
  {
    category: "Engineering",
    technologies: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    category: "Platform & DevEx",
    technologies: [
      "SDK & API Design",
      "OpenAPI 3.0",
      "Mintlify",
      "Technical Docs",
      "DevRel",
      "Datadog",
    ],
  },
  {
    category: "Cloud",
    technologies: [
      "AWS ECS",
      "SQS",
      "SNS",
      "Lambda",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];
