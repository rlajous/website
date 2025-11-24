import { Education } from "@/domains/Education";

export const education: Education[] = [
  {
    id: 1,
    slug: "msc-technikum-wien",
    degree: "Master of Science in Engineering (MSc)",
    institution: "Fachhochschule Technikum Wien",
    period: "February 2022 — July 2023",
    location: "Vienna, Austria",
    institutionUrl: "https://www.technikum-wien.at",
    specialization: "Software Engineering",
    thesis: {
      title: "Zero-Knowledge Proof of owning a Non-Fungible Token (NFT) on the blockchain",
      description:
        "Research and implementation of zero-knowledge proofs to verify NFT ownership without revealing sensitive information on the blockchain. Developed a proof-of-concept system demonstrating privacy-preserving NFT verification.",
    },
    technologies: [
      "Software Engineering",
      "Zero-Knowledge Proofs",
      "Blockchain",
      "NFTs",
      "Cryptography",
    ],
  },
  {
    id: 2,
    slug: "software-engineering-itba",
    degree: "Software Engineering",
    institution: "Instituto Tecnológico de Buenos Aires (ITBA)",
    period: "July 2015 — July 2023",
    location: "Buenos Aires, Argentina",
    institutionUrl: "https://www.itba.edu.ar",
    technologies: [
      "Software Engineering",
      "Computer Science",
      "Algorithms",
      "Data Structures",
    ],
  },
];
