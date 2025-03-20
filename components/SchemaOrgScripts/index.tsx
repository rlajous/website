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
              "https://twitter.com/rodri_lajous"
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
            "jobTitle": "Senior Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "POAP"
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
              "https://twitter.com/rodri_lajous"
            ]
          }
        `}
      </Script>
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
