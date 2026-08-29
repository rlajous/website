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
    website: "https://agents.navarrolajous.com",
    period: "2026",
    description:
      "Git Workflow — a host-neutral framework of slash commands, subagents, and hooks that lets AI agents ship software through a structured, inspectable delivery loop while keeping decisions human. Zero-config and framework-agnostic.",
    detailedDescription:
      "Git Workflow (v2.7.0) is a host-neutral framework for shipping software with AI agents while keeping decisions human — \"Ship software with agents. Keep decisions human.\" It gives agents one operating model that turns an issue into a release through a five-step delivery loop: start (issue → branch), commit (a verifiable history of diffs), finish (branch → pull request with context and validation), review (evidence weighed into an actionable decision), and release (validate, document what shipped, and sync branches). Every step leaves inspectable proof instead of hiding work inside an agent session, and review surfaces decision briefs — business rules, diagrams, and evidence a human can act on — rather than ceremony. The same 21 shared skills run across Claude Code and Codex, distributed via plugin marketplaces.",
    features: [
      "Five-step delivery loop — start → commit → finish → review → release — that turns issues into releases.",
      "Visible delivery loop: every step leaves inspectable proof (branches, commits, PRs, review decisions, releases) instead of hidden agent sessions.",
      "Evidence, not ceremony: decision briefs with business rules, diagrams, and proof, plus local notifications a human can act on.",
      "21 shared skills across four categories — shape the change, prove the change, deliver the change, and stay in the loop.",
      "Host-neutral: one operating model spanning Claude Code (terminal) and Codex, distributed via plugin marketplaces.",
      "Zero-config, framework-agnostic, and MIT licensed.",
    ],
    impact:
      "Released as v2.7.0 and published to plugin marketplaces, with ~30 GitHub stars and a public landing page at agents.navarrolajous.com.",
    technologies: ["Claude Code", "Codex", "Shell", "Markdown", "Git", "GitHub Actions"],
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
    detailedDescription:
      "A domain-specific language and compiler for matrix mathematics, built for ITBA's compiler-design course. Lexical analysis with Lex/Flex and grammar parsing with Yacc/Bison feed an abstract syntax tree that is translated into compilable C, letting users express matrix operations in a concise high-level syntax instead of hand-writing the equivalent C.",
    features: [
      "A custom grammar for declaring matrices and expressing matrix arithmetic (addition, multiplication, transposition, and scalar operations).",
      "A lexer built with Lex/Flex and a parser built with Yacc/Bison that produce an abstract syntax tree.",
      "A code-generation stage that emits compilable C from the source language.",
      "Compile-time semantic checks for matrix dimension compatibility.",
    ],
    challenges: [
      "Designing an unambiguous grammar that Yacc could parse cleanly without shift/reduce conflicts.",
      "Validating matrix dimension compatibility at compile time rather than letting it fail at runtime.",
      "Managing memory for intermediate matrix results in the generated C code.",
    ],
    impact:
      "Exercised the full compiler pipeline end to end — lexing, parsing, AST construction, semantic analysis, and code generation — in a single project.",
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
    detailedDescription:
      "An x86 operating system written from scratch in C and Assembly for ITBA's Operating Systems course. It covers the full path from power-on to a running kernel: a custom bootloader hands control to a kernel that sets up the low-level plumbing the rest of the system depends on.",
    features: [
      "A custom bootloader that prepares the CPU and loads the kernel into memory.",
      "A kernel entry point bridging the Assembly boot stage and the C runtime.",
      "Low-level interrupt and device handling to reach an interactive state.",
      "A Makefile-driven build that produces a bootable disk image.",
    ],
    challenges: [
      "Transitioning the CPU from 16-bit real mode into 32-bit protected mode during boot.",
      "Coordinating the handoff between Assembly and C across the boot boundary.",
      "Debugging at the hardware level with no operating system underneath to lean on.",
    ],
    impact:
      "Built first-hand intuition for the hardware/software boundary — from the bootloader up to a running kernel.",
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
    detailedDescription:
      "A companion project to Complex-OS for ITBA's Operating Systems track. It pares an operating system down to its essential boot-to-kernel path in C and Assembly, kept deliberately small and readable as a learning reference. Released openly under the BSD-3-Clause license.",
    features: [
      "A minimal bootloader and kernel entry point written in Assembly and C.",
      "A focused, readable codebase intended as a reference for OS fundamentals.",
      "A Makefile build that produces a bootable image.",
    ],
    challenges: [
      "Reducing an operating system to its essential boot and kernel-entry steps without breaking correctness.",
      "Coordinating Assembly and C across the boot handoff in as little code as possible.",
    ],
    impact:
      "Distilled OS coursework into a minimal, reusable reference and shared it openly under BSD-3.",
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
    detailedDescription:
      "A POP3 mail-retrieval server implemented in C for ITBA's networking course. It follows the POP3 protocol's command/response state machine over TCP sockets, serving mail clients exactly as the specification prescribes.",
    features: [
      "Implements core POP3 commands (USER, PASS, STAT, LIST, RETR, DELE, QUIT) across the AUTHORIZATION, TRANSACTION, and UPDATE states.",
      "Handles multiple simultaneous client connections over TCP sockets.",
      "Follows the POP3 RFC so standard mail clients can connect unmodified.",
    ],
    challenges: [
      "Implementing the POP3 state machine so commands are only accepted in valid states.",
      "Multiplexing many concurrent client connections without blocking.",
      "Parsing and answering the line-based protocol exactly as clients expect.",
    ],
    impact:
      "Deepened a practical understanding of application-layer protocols and socket programming in C.",
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
    company: "ITBA",
    type: "early-work",
    github: "https://github.com/rlajous/kubernetes",
    website: "",
    period: "2021",
    description:
      "University project exploring container orchestration with Kubernetes and Docker.",
    detailedDescription:
      "A hands-on lab exploring container orchestration: containerizing a small application with Docker and deploying it to a Kubernetes cluster to study how scheduling, scaling, and service networking work in practice.",
    features: [
      "Dockerized application images paired with Kubernetes manifests (deployments and services).",
      "Experiments with horizontal scaling and replica/self-healing behavior.",
      "Service discovery and networking between pods inside the cluster.",
    ],
    challenges: [
      "Understanding the Kubernetes object model — pods, deployments, services — and how the pieces compose.",
      "Configuring container networking and exposing services correctly.",
    ],
    impact:
      "Built practical grounding in the container-orchestration concepts that underpin modern cloud deployments.",
    technologies: ["Kubernetes", "Docker", "JavaScript"],
    banner: "",
    logos: ["/assets/companies/itba.png"],
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
    detailedDescription:
      "A joint master's thesis completed across two institutions — Instituto Tecnológico de Buenos Aires and Fachhochschule Technikum Wien — as part of a dual-degree program spanning Argentina and Austria. Written and typeset entirely in LaTeX and version-controlled on GitHub.",
    features: [
      "Dual-institution master's research bridging programs in Buenos Aires and Vienna.",
      "Fully typeset in LaTeX with a reproducible document build.",
      "Version-controlled on GitHub for a transparent revision history.",
    ],
    challenges: [
      "Meeting the academic requirements and formatting standards of two universities at once.",
      "Maintaining a large, structured LaTeX document with consistent citations and cross-references.",
    ],
    impact:
      "Capstone of a dual master's program spanning Argentina and Austria.",
    technologies: ["LaTeX"],
    banner: "",
    logos: [
      "/assets/companies/itba.png",
      "/assets/companies/technikum-wien.png",
    ],
  },
];
