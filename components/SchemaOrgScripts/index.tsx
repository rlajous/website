"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const SchemaOrgScripts = () => {
  const pathname = usePathname();

  // Home page schema
  if (pathname === "/") {
    return (
      <Script
        id="schema-person"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rodrigo Manuel Navarro Lajous",
            "url": "https://navarrolajous.com",
            "jobTitle": "Software Engineer",
            "sameAs": [
              "https://github.com/rlajous",
              "https://www.linkedin.com/in/rodrigo-lajous",
              "https://twitter.com/arlequin_eth"
            ],
            "description": "Software Engineer and Digital Nomad, passionate about technology and innovation."
          }
        `}
      </Script>
    );
  }

  // Education page schema
  if (pathname === "/education") {
    return (
      <Script
        id="schema-education"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": "Education of Rodrigo Manuel Navarro Lajous",
            "mainEntity": {
              "@type": "Person",
              "name": "Rodrigo Manuel Navarro Lajous",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Fachhochschule Technikum Wien",
                  "sameAs": "https://www.technikum-wien.at/"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Instituto Tecnológico de Buenos Aires (ITBA)",
                  "sameAs": "https://www.itba.edu.ar/"
                }
              ]
            }
          }
        `}
      </Script>
    );
  }

  // Resume page schema
  if (pathname === "/resume") {
    return (
      <Script
        id="schema-resume"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rodrigo Manuel Navarro Lajous",
            "url": "https://navarrolajous.com",
            "jobTitle": "Staff Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "Webacy"
            },
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Instituto Tecnológico de Buenos Aires (ITBA)",
                "sameAs": "https://www.itba.edu.ar/"
              },
              {
                "@type": "EducationalOrganization",
                "name": "Fachhochschule Technikum Wien",
                "sameAs": "https://www.technikum-wien.at/"
              }
            ],
            "knowsAbout": ["Software Engineering", "Blockchain", "Web Development", "Smart Contracts"],
            "sameAs": [
              "https://github.com/rlajous",
              "https://www.linkedin.com/in/rodrigo-lajous",
              "https://twitter.com/arlequin_eth"
            ]
          }
        `}
      </Script>
    );
  }

  // Talks page schema
  if (pathname === "/talks") {
    return (
      <>
        <Script
          id="schema-talks-event-1"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Patterns in Chaos: Cross-Chain Forensics at Scale",
              "description": "An in-depth exploration of multi-chain forensics challenges and solutions. Presented 5 key forensic patterns including sniper detection, cross-chain attribution, function signature risks, behavioral attacks, and bonding curve concentration.",
              "startDate": "2025-11-19",
              "endDate": "2025-11-19",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "DuneCon 25",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Buenos Aires",
                  "addressCountry": "Argentina"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Dune Analytics",
                "url": "https://dune.com/dunecon"
              },
              "performer": {
                "@type": "Person",
                "name": "Rodrigo Manuel Navarro Lajous",
                "jobTitle": "Staff Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Webacy"
                }
              },
              "recordedIn": {
                "@type": "VideoObject",
                "name": "Patterns in Chaos: Cross-Chain Forensics at Scale",
                "description": "DuneCon 25 talk by Rodrigo Navarro Lajous",
                "thumbnailUrl": "https://navarrolajous.com/assets/talks/dunecon-banner.jpeg",
                "contentUrl": "https://youtu.be/2t7ICJPKWnE",
                "uploadDate": "2025-11-19"
              }
            }
          `}
        </Script>
        <Script
          id="schema-talks-event-2"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "AI and the Future of On-Chain Trust and Safety",
              "description": "Building security detection at scale for Web3. Explored the massive threat landscape of 100+ blockchains and 100M+ daily transactions. Demonstrated how AI and behavioral analysis can detect scams before users are impacted.",
              "startDate": "2025-11-21",
              "endDate": "2025-11-21",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "DeFi Security Summit",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Buenos Aires",
                  "addressCountry": "Argentina"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "DeFi Security Summit",
                "url": "https://defisecuritysummit.org/"
              },
              "performer": {
                "@type": "Person",
                "name": "Rodrigo Manuel Navarro Lajous",
                "jobTitle": "Staff Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Webacy"
                }
              },
              "recordedIn": {
                "@type": "VideoObject",
                "name": "AI and the Future of On-Chain Trust and Safety",
                "description": "DSS talk by Rodrigo Navarro Lajous",
                "thumbnailUrl": "https://navarrolajous.com/assets/talks/dss-banner.jpeg",
                "contentUrl": "https://www.youtube.com/watch?v=dkVCX-inxFI",
                "uploadDate": "2025-11-21"
              }
            }
          `}
        </Script>
      </>
    );
  }

  // Default website schema
  return (
    <Script
      id="schema-website"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Rodrigo Manuel Navarro Lajous",
          "url": "https://navarrolajous.com",
          "description": "Personal website and portfolio of Rodrigo Manuel Navarro Lajous, Software Engineer and Digital Nomad",
          "author": {
            "@type": "Person",
            "name": "Rodrigo Manuel Navarro Lajous",
            "url": "https://navarrolajous.com"
          }
        }
      `}
    </Script>
  );
};

export default SchemaOrgScripts;
