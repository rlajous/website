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
      "Launched pay-per-call API access for AI agents (x402, USDC on Base, no API key) from spike to mainnet in three weeks, and led Webacy's MCP server with OAuth 2.1 sign-in and per-tool metering.",
      "Built enterprise custom plans and self-serve billing (per-org contracts, metered overage, monthly/annual plans) and fixed checkout creating duplicate Stripe customers.",
      "Shipped the stablecoin, RWA and vault due-diligence API (A+ to F grades with per-criterion breakdowns) and depeg alerts over signed webhooks, cutting repeat alerts from ~30 a week per token to one per episode.",
      "Expanded risk scoring to 13 chains (EVM, Solana, TON, Sui, Tron, Stellar, Bitcoin), unlocking enterprise integrations with leading wallets, DEX aggregators and a top LatAm marketplace.",
      "Led the labeling-system redesign through an org-wide RFC (76 comments across teams) and shipped the type-safe label taxonomy that Webacy's risk explanations are built on.",
      "Shipped @webacy-xyz/sdk and @webacy-xyz/cli and moved docs to Mintlify with OpenAPI 3.0, cutting partner integration time from days to hours.",
      "Designed the event-driven workers architecture (ECS Fargate, SQS/SNS) and Datadog APM, resolving 21 P1/P2 incidents, including recurring out-of-memory crashes that turned cold scans into 502s.",
      "Cut third-party data queries ~98% (about 600 a day to 8) with in-house analyzers, and led SOC 2 hardening: short-lived deploy credentials and production infrastructure under AWS CDK.",
      "Spoke at DuneCon and the DSS Security Summit, generating 12 qualified leads; closed an enterprise deal end to end and retained a key customer through a production outage.",
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
      "AWS CDK",
      "Stripe",
      "PostHog",
      "x402",
      "MCP",
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
