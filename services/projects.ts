/**
 * @module services/projects
 * @description Portfolio project data categorized by engagement type.
 * Consumed by the projects pages, LLM text generation, and Schema.org scripts.
 */
import { Project } from "@/domains/Project";

/**
 * Personal hobby and side projects displayed on the Side Projects tab of `/projects`.
 */
export const hobby: Project[] = [
  {
    id: 1,
    slug: "portfolio-v1",
    name: "Personal Website",
    company: "V1",
    type: "hobby",
    github: "https://github.com/rlajous/portfolio",
    website: "https://v1.navarrolajous.com",
    period: "2021",
    description: "The first iteration of my personal website.",
    technologies: [
      "Nuxt",
      "Vue.js",
      "S3",
      "Cloudfront",
      "Route 53",
      "SCSS",
      "CircleCI",
      "SMTP",
    ],
    banner: "/v1.navarrolajous.com.png",
  },
  {
    id: 2,
    slug: "funnis-game",
    name: "Funnis",
    company: "University Project",
    type: "hobby",
    github: "",
    website: "https://funnis.navarrolajous.com",
    period: "2021",
    description:
      "A game made in Unity for a university project about soccer tennis.",
    technologies: ["Unity", "S3", "Cloudfront", "Route 53"],
    banner: "/funnis.png",
  },
  {
    id: 3,
    slug: "windows-98-web3",
    name: "Windows 98 - Web 3 Edition",
    company: "Personal Project",
    type: "hobby",
    github: "https://github.com/rlajous/windows-98-web3",
    website: "https://windows98.navarrolajous.com",
    period: "2024",
    description: "A web version of Windows 98 with a Web 3 twist.",
    technologies: ["Next.js", "React", "Wagmi", "Vercel"],
    banner: "/windows98.gif",
  },
  {
    id: 4,
    slug: "cv",
    name: "LaTeX CV Template",
    company: "Personal Project",
    type: "hobby",
    github: "https://github.com/rlajous/cv",
    website: "",
    period: "2024",
    description:
      "My personal CV written in LaTeX. Published as a reusable template for others to fork.",
    technologies: ["LaTeX"],
    banner: "",
  },
];

/**
 * Open-source contributions displayed on the Open Source tab of `/projects`.
 */
export const opensource: Project[] = [
  {
    id: 1,
    slug: "webacy-sdk",
    name: "@webacy-xyz/sdk",
    company: "Webacy",
    type: "opensource",
    github: "https://github.com/Webacy-Prod/sdk",
    website: "",
    npm: "https://www.npmjs.com/package/@webacy-xyz/sdk",
    docs: "https://docs.webacy.com/sdk/introduction",
    period: "2025-2026",
    description:
      "TypeScript SDK monorepo for the Webacy Risk Score API. Split into sdk-core, sdk-threat (address risk, sanctions, contracts, URL safety), and sdk-trading (holder analysis, sniper detection, bundler detection) for granular bundle size and clean per-domain APIs.",
    technologies: [
      "TypeScript",
      "pnpm",
      "Turborepo",
      "Vitest",
      "NPM",
      "OpenAPI 3.0",
    ],
    banner: "/webacy-sdk.png",
    logos: ["/assets/companies/webacy.png"],
  },
  {
    id: 2,
    slug: "poap-js",
    name: "@poap-xyz/poap-sdk",
    company: "POAP",
    type: "opensource",
    github: "https://github.com/poap-xyz/poap.js",
    website: "",
    npm: "https://www.npmjs.com/package/@poap-xyz/poap-sdk",
    docs: "https://sdk.poap.tech/",
    period: "2023-2024",
    description:
      "Public TypeScript SDK monorepo for the POAP ecosystem. Wraps POAP smart contracts, the GraphQL API, and drop / claim / mint flows behind a unified set of classes — cutting partner integration time by 50% and serving as the canonical entry point for third-party POAP developers.",
    technologies: [
      "TypeScript",
      "Rollup",
      "Yarn",
      "Jest",
      "GitHub Actions",
      "NPM",
      "GraphQL",
    ],
    banner: "/sdk.png",
    logos: ["/assets/companies/poap.png"],
  },
  {
    id: 3,
    slug: "claude-code-commands",
    name: "claude-code-commands",
    company: "Open Source",
    type: "opensource",
    github: "https://github.com/rlajous/claude-code-commands",
    website: "",
    period: "2026",
    description:
      "Production-ready slash commands, subagents, and hooks for Claude Code. Automates Git workflows, PR creation, releases, and QA testing. Zero-config and framework-agnostic.",
    technologies: ["Claude Code", "Shell", "Markdown", "Git"],
    banner: "",
  },
  {
    id: 4,
    slug: "ai-agent-tooling",
    name: "ai-agent-tooling",
    company: "Open Source",
    type: "opensource",
    github: "https://github.com/rlajous/ai-agent-tooling",
    website: "",
    period: "2026",
    description:
      "Earlier iteration of my Claude Code slash-command toolkit, superseded by claude-code-commands (https://github.com/rlajous/claude-code-commands). Kept public for posterity.",
    technologies: ["Claude Code", "Shell", "Markdown"],
    banner: "",
  },
];

/**
 * Academic coursework and early interview/professional projects displayed on the Early Work tab of `/projects`.
 * These entries chronicle the student-to-professional arc: OS kernels and compilers at ITBA →
 * a token market built as a take-home interview → containerisation experiments → Master's thesis.
 */
export const earlyWork: Project[] = [
  {
    id: 1,
    slug: "ymca-compiler",
    name: "YMCA Compiler",
    company: "ITBA",
    type: "early-work",
    github: "https://github.com/rlajous/YMCA",
    website: "",
    period: "2018",
    description:
      "Yet Another Matrix Compiler — a domain-specific language compiler for matrix operations built with Lex and Yacc.",
    technologies: ["C", "Lex", "Yacc"],
    banner: "",
    logos: ["/assets/companies/itba.png"],
  },
  {
    id: 2,
    slug: "complex-os",
    name: "Complex-OS",
    company: "ITBA",
    type: "early-work",
    github: "https://github.com/rlajous/Complex-OS",
    website: "",
    period: "2019",
    description:
      "University Operating Systems coursework: a small OS written in C and Assembly with custom kernel and bootloader.",
    technologies: ["C", "Assembly", "Makefile"],
    banner: "",
    logos: ["/assets/companies/itba.png"],
  },
  {
    id: 3,
    slug: "simple-so",
    name: "Simple-SO",
    company: "ITBA",
    type: "early-work",
    github: "https://github.com/rlajous/Simple-SO",
    website: "",
    period: "2019",
    description:
      "Companion Operating Systems coursework project — a simpler kernel exploration written in C and Assembly. BSD-3 licensed.",
    technologies: ["C", "Assembly"],
    banner: "",
    logos: ["/assets/companies/itba.png"],
  },
  {
    id: 4,
    slug: "pop3-server",
    name: "POP-3 Server",
    company: "ITBA",
    type: "early-work",
    github: "https://github.com/rlajous/POP-3",
    website: "",
    period: "2019",
    description:
      "A POP3 mail server implementation written in C for a university networking course.",
    technologies: ["C", "Makefile"],
    banner: "",
    logos: ["/assets/companies/itba.png"],
  },
  {
    id: 5,
    slug: "quipu-token-market",
    name: "Quipu — Token Market",
    company: "Interview Project",
    type: "early-work",
    github: "https://github.com/rlajous/QuipuFront",
    website: "https://quipu.navarrolajous.com",
    period: "2019-2020",
    description:
      "Token market built end-to-end as a take-home interview project — a Vue/JS frontend, a Node backend, and an Angular spike rebuilding the UI to evaluate the framework.",
    detailedDescription:
      "Built end-to-end for a job interview. Three repos make up the project: the frontend at https://github.com/rlajous/QuipuFront (deployed at quipu.navarrolajous.com), the Node backend at https://github.com/rlajous/Quipu-back, and an Angular rewrite spike at https://github.com/rlajous/Quipu-Angular-Rapid-Test (deployed at quipu-test.navarrolajous.com) used to compare frameworks.",
    technologies: ["JavaScript", "Vue", "Node.js", "Angular", "TypeScript"],
    banner: "",
    logos: ["/assets/companies/quipu.png"],
  },
  {
    id: 6,
    slug: "kubernetes",
    name: "Kubernetes Lab",
    company: "Personal Project",
    type: "early-work",
    github: "https://github.com/rlajous/kubernetes",
    website: "",
    period: "2021",
    description:
      "Hands-on lab exploring container orchestration with Kubernetes and Docker.",
    technologies: ["Kubernetes", "Docker", "JavaScript"],
    banner: "",
  },
  {
    id: 7,
    slug: "master-thesis",
    name: "Master's Thesis",
    company: "ITBA × Technikum Wien",
    type: "early-work",
    github: "https://github.com/rlajous/MasterThesis",
    website: "",
    period: "2023",
    description:
      "Joint master's thesis between ITBA (Buenos Aires) and Fachhochschule Technikum Wien (Vienna), written in LaTeX.",
    technologies: ["LaTeX"],
    banner: "",
    logos: [
      "/assets/companies/itba.png",
      "/assets/companies/technikum-wien.png",
    ],
  },
];
