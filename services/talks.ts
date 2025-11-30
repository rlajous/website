import { Talk } from "@/domains/Talk";

export const talks: Talk[] = [
  {
    id: 1,
    slug: "dunecon-2025",
    title: "Patterns in Chaos: Cross-Chain Forensics at Scale",
    event: "DuneCon 25",
    location: "Devconnect Buenos Aires",
    date: "November 19, 2025",
    uploadDate: "2025-11-19T12:00:00Z",
    description:
      "Attackers behave consistently across every chain, even when the ecosystems look chaotic. In this talk, Rodrigo breaks down the five behavioral patterns that reveal scams and exploits long before they happen—sniper bot dynamics, cross-chain identity leaks, dangerous function signature pairings, large-scale behavioral spam attacks, and bonding curve concentration risks. Using real multi-chain data, he shows how these patterns let Webacy detect threats at deploy-time instead of after the damage, giving users and protocols an early-warning system for on-chain risk.",
    topics: [
      "Blockchain Forensics",
      "Cross-Chain Security",
      "Threat Detection",
      "Behavioral Analysis",
      "Smart Contract Security",
      "Web3 Security",
      "Data Analytics",
    ],
    links: {
      slides: "/assets/talks/dunecon-cross-chain-forensics.pdf",
      video: "https://youtu.be/2t7ICJPKWnE",
    },
    banner: "/talks/dunecon-banner.jpeg",
  },
  {
    id: 2,
    slug: "defi-security-summit-2025",
    title: "AI and the Future of On-Chain Trust and Safety",
    event: "DeFi Security Summit",
    location: "Devconnect Buenos Aires",
    date: "November 21, 2025",
    uploadDate: "2025-11-21T12:00:00Z",
    description:
      "DeFi security has traditionally focused on post-incident forensics and code-level audits. This talk introduces a new attacker-behavior threat model designed for EVM ecosystems, built on repeatable patterns that appear before an exploit executes. Rodrigo walks through pre-deployment signals, attacker clustering, transaction-intent mismatches, and cross-actor correlations that reveal malicious intent early. The session equips protocols, wallets, and infra teams with practical methods to anticipate and block attacks at the moment of deployment, enabling a more proactive security posture across Ethereum and L2s.",
    topics: [
      "AI",
      "Machine Learning",
      "Web3 Security",
      "Blockchain",
      "Threat Detection",
      "Smart Contract Auditing",
      "On-Chain Analytics",
      "Rug Pull Prevention",
    ],
    links: {
      slides: "/assets/talks/dss-ai-onchain-trust-safety.pdf",
      video: "https://www.youtube.com/watch?v=dkVCX-inxFI",
    },
    banner: "/talks/dss-banner.jpeg",
  },
];
