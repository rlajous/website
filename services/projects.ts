/**
 * @module services/projects
 * @description Portfolio project data categorized by engagement type.
 * Consumed by the projects pages, LLM text generation, and Schema.org scripts.
 */
import { Project } from "@/domains/Project";

/**
 * Personal hobby and side projects displayed on the Hobby tab of `/projects`.
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
  },
];
