import { Experience } from "@/domains/Experience";

export const jobs: Experience[] = [
  {
    id: 1,
    position: "Staff Software Engineer",
    company: "Webacy",
    period: "April 2024 — Present",
    responsibilities: [
      "Leading the development of secure Web3 recovery and safety solutions",
      "Building innovative blockchain security technologies for cryptocurrency wallet protection",
      "Developing secure multi-party computation protocols for digital asset recovery",
      "Implementing cutting-edge security features to protect users' digital assets",
    ],
    technologies: [
      "Blockchain",
      "Web3",
      "Security",
      "TypeScript",
      "React",
      "Next.js",
      "Solidity",
      "Smart Contracts",
      "Multi-party Computation",
    ],
  },
  {
    id: 2,
    position: "Senior Software Engineer",
    company: "POAP",
    period: "May 2021 — April 2024",
    responsibilities: [
      "Led a team of engineers to build a new project from ideation to production, improving onboarding efficiency by 40%.",
      "Created and published POAP.js, an open-source library that reduced integration time by 50%.",
      "Implemented Freeze Token functionality on the Upgradable POAP Smart Contract, enhancing token migration security by 30%.",
      "Developed internal tooling that reduced service deployment time by 60%, improving scalability and reliability.",
      "Generated and maintained a public library called POAP.js, where people could integrate with the ecosystem seamlessly.",
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
    position: "Full Stack Developer",
    company: "Quipu Market",
    period: "April 2020 — May 2021",
    responsibilities: [
      "Developed courses that reduced onboarding time for new developers by 50%.",
      "Created a public component library that accelerated development speed by 30% across multiple projects.",
      "Designed and implemented CI/CD pipelines, decreasing deployment errors by 40%.",
      "Created the standard for the Front-end design system with CSS.",
      "Developed a series of courses for all other developers to understand how the library worked.",
      "Created a private components library, which was shared between all apps.",
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
    position: "Full Stack Developer",
    company: "Turismocity",
    period: "October 2019 — April 2020",
    responsibilities: [
      "Integrated five external APIs, improving system response speed by 20%.",
      "Collaborated with stakeholders to ensure seamless API integrations, increasing data consistency by 25%.",
      "Gained extensive experience in using and developing proprietary API and integration with external API.",
      "Worked to meet the expectations of stakeholders and users continually.",
      "In charge of all new page designs.",
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
    position: "Frontend Developer",
    company: "WOLOX",
    period: "June 2018 — October 2019",
    responsibilities: [
      "Expanded my skill set by constantly changing technology in Front-end tools such as Angular, React, and Vue.js, which has given me great adaptability.",
    ],
    technologies: ["Angular", "React", "Vue.js", "Bash", "AWS"],
  },
];

export const startups: Experience[] = [
  {
    id: 1,
    position: "Founding Member",
    company: "Dome",
    period: "April 2022 — December 2022",
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
    position: "Founding Member",
    company: "PLOTI",
    period: "July 2018 — March 2019",
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

export const education: Experience[] = [
  {
    id: 1,
    position: "Master of Science in Engineering (MSc)",
    company: "Fachhochschule Technikum Wien",
    period: "February 2022 — July 2023",
    responsibilities: [
      "Specialization: Software Engineering.",
      "Thesis: Zero-Knowledge Proof of owning a Non-Fungible Token (NFT) on the blockchain.",
    ],
    technologies: [
      "Software Engineering",
      "Zero-Knowledge Proofs",
      "Blockchain",
      "NFTs",
    ],
  },
  {
    id: 2,
    position: "Software Engineering",
    company: "Instituto Tecnológico de Buenos Aires (ITBA)",
    period: "July 2015 — July 2023",
    responsibilities: [],
    technologies: ["Software Engineering"],
  },
];

export const skills: { category: string; technologies: string[] }[] = [
  {
    category: "Frontend",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "CSS"],
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "DynamoDB",
    ],
  },
  {
    category: "Blockchain",
    technologies: [
      "Ethereum",
      "Solidity",
      "Web3.js",
      "Ethers.js",
      "Hardhat",
      "WalletConnect",
      "Smart Contract Audits",
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Cloudflare",
    ],
  },
  {
    category: "Security",
    technologies: [
      "OAuth2",
      "JWT",
      "Cryptography",
      "Zero-Knowledge Proofs (ZK)",
    ],
  },
];
