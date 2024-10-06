import { Project } from "@/domains/Project";

export const freelance: Project[] = [
  {
    id: 1,
    name: "Landing Page",
    company: "Lukto",
    github: "",
    website: "https://lukto.navarrolajous.com",
    period: "2021",
    description: "Animated landing page for a game called Lukto.",
    technologies: [
      "Vue.js",
      "S3",
      "Cloudfront",
      "Route 53",
      "SCSS",
      "Github Actions",
    ],
    banner: "/Lukto.png",
  },
  {
    id: 2,
    name: "Landing Page",
    company: "Bepanthene",
    github: "",
    website: "https://bepanthene.navarrolajous.com",
    period: "2020",
    description:
      "Added /desafio page to the existing Bepanthene website. The page wasn't even on a repo, I had to standarize it and make it responsive.",
    technologies: [
      "Vue.js",
      "S3",
      "Cloudfront",
      "Route 53",
      "SCSS",
      "Github Actions",
    ],
    banner: "/bepanthene.png",
  },
  {
    id: 3,
    name: "Landing Page",
    company: "Seeds",
    github: "",
    website: "https:/weareseeders.navarrolajous.com",
    period: "2020",
    description:
      "Created a landing page for Seeds, a company that helps other companies to grow. Created the contact form that sended them an email via smtp server.",
    technologies: [
      "Nuxt",
      "Vue.js",
      "S3",
      "Cloudfront",
      "Route 53",
      "SCSS",
      "CircleCI",
    ],
    banner: "/seeds.png",
  },
];

export const hobby: Project[] = [
  {
    id: 1,
    name: "Personal Website",
    company: "V1",
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
    name: "Funnis",
    company: "University Project",
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
    name: "Windows 98 - Web 3 Edition",
    company: "Personal Project",
    github: "https://github.com/rlajous/windows-98-web3",
    website: "https://windows98.navarrolajous.com",
    period: "2024",
    description: "A web version of Windows 98 with a Web 3 twist.",
    technologies: ["Next.js", "React", "Wagmi", "Vercel"],
    banner: "/windows98.gif",
  },
];

export const opensource: Project[] = [
  {
    id: 1,
    name: "POAP.js",
    company: "POAP",
    github: "https://github.com/poap-xyz/poap.js",
    website: "https://sdk.poap.tech/",
    period: "2023-2024",
    description:
      "The POAP.js is a collection of SDKs and utilities for interacting with the POAP ecosystem. The library provides a set of classes and methods to simplify working with them.",
    technologies: [
      "NPM",
      "Typescrypt",
      "Rollup",
      "Yarn",
      "Jest",
      "Github Actions",
    ],
    banner: "/sdk.png",
  },
];
