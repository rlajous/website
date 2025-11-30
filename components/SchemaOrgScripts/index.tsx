"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { jobs, startups } from "@/services/experience";
import { education } from "@/services/education";
import { freelance, hobby, opensource } from "@/services/projects";
import { talks } from "@/services/talks";
import { SITE_URL } from "@/constants/routes";

// Helper function to escape strings for safe JSON-LD embedding
function escapeJsonString(str: string): string {
  return str
    .replace(/\\/g, "\\\\") // Escape backslashes
    .replace(/"/g, '\\"') // Escape double quotes
    .replace(/\n/g, "\\n") // Escape newlines
    .replace(/\r/g, "\\r") // Escape carriage returns
    .replace(/\t/g, "\\t") // Escape tabs
    .replace(/\f/g, "\\f"); // Escape form feeds
}

// Helper function to extract ISO date from uploadDate
// Extracts "2025-11-19" from "2025-11-19T12:00:00Z"
// No timezone conversion - direct string split
function extractISODate(uploadDate: string): string {
  return uploadDate.split("T")[0];
}

// Helper function to extract locality from location string
// Handles multi-word cities like "Buenos Aires" correctly
function extractLocality(location: string): string {
  // If location contains a comma, take text after the last comma
  if (location.includes(",")) {
    const parts = location.split(",");
    return parts[parts.length - 1].trim();
  }

  // If multiple words, return last two words to preserve multi-word cities
  const words = location.trim().split(/\s+/);
  if (words.length >= 2) {
    return words.slice(-2).join(" ");
  }

  // Otherwise return full location
  return location;
}

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
            "url": "${SITE_URL}",
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
            "url": "${SITE_URL}",
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

  // Experience detail page schema
  if (pathname?.startsWith("/experience/")) {
    const slug = pathname.split("/experience/")[1];
    const allExperiences = [...jobs, ...startups];
    const experience = allExperiences.find((exp) => exp.slug === slug);

    if (experience) {
      return (
        <Script
          id="schema-experience-detail"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "${escapeJsonString(experience.position)}",
              "description": "${escapeJsonString(experience.responsibilities.join(" "))}",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "${escapeJsonString(experience.company)}"${experience.companyUrl ? `,\n                "url": "${escapeJsonString(experience.companyUrl)}"` : ""}
              },
              "datePosted": "${escapeJsonString(experience.period.split("—")[0].trim())}",
              "employmentType": "${experience.type === "job" ? "FULL_TIME" : "SELF_EMPLOYED"}",
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "${escapeJsonString(experience.location || "Remote")}"
                }
              },
              "skills": ${JSON.stringify(experience.technologies)}
            }
          `}
        </Script>
      );
    }
  }

  // Education detail page schema
  if (pathname?.startsWith("/education/")) {
    const slug = pathname.split("/education/")[1];
    const edu = education.find((e) => e.slug === slug);

    if (edu) {
      return (
        <Script
          id="schema-education-detail"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOccupationalCredential",
              "name": "${escapeJsonString(edu.degree)}",
              "credentialCategory": "degree",
              "recognizedBy": {
                "@type": "EducationalOrganization",
                "name": "${escapeJsonString(edu.institution)}"${edu.institutionUrl ? `,\n                "url": "${escapeJsonString(edu.institutionUrl)}"` : ""}
              },
              "educationalLevel": "Graduate",
              "about": "${escapeJsonString(edu.specialization || edu.degree)}",
              "competencyRequired": ${JSON.stringify(edu.technologies)}
            }
          `}
        </Script>
      );
    }
  }

  // Project detail page schema
  if (pathname?.startsWith("/projects/")) {
    const slug = pathname.split("/projects/")[1];
    const allProjects = [...freelance, ...hobby, ...opensource];
    const project = allProjects.find((p) => p.slug === slug);

    if (project) {
      return (
        <Script
          id="schema-project-detail"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "${escapeJsonString(project.name)}",
              "description": "${escapeJsonString(project.detailedDescription || project.description)}",
              "author": {
                "@type": "Person",
                "name": "Rodrigo Manuel Navarro Lajous"
              },
              "dateCreated": "${escapeJsonString(project.period)}",
              "keywords": ${JSON.stringify(project.technologies.join(", "))}${project.github ? `,\n              "codeRepository": "${escapeJsonString(project.github)}"` : ""}${project.website ? `,\n              "url": "${escapeJsonString(project.website)}"` : ""}${project.banner ? `,\n              "image": "${SITE_URL}/assets${escapeJsonString(project.banner)}"` : ""}
            }
          `}
        </Script>
      );
    }
  }

  // Talks page schema - dynamically generate Event schemas for talks with videos
  if (pathname === "/talks") {
    // Filter talks that have video links
    const talksWithVideos = talks.filter((talk) => talk.links?.video);

    return (
      <>
        {talksWithVideos.map((talk, index) => {
          // Extract ISO date from uploadDate (no timezone conversion)
          // uploadDate is required and already in ISO format (e.g., "2025-11-19T12:00:00Z")
          if (!talk.uploadDate) {
            throw new Error(`Talk "${talk.title}" is missing required uploadDate field`);
          }
          const uploadDate = talk.uploadDate;
          const isoDate = extractISODate(uploadDate);

          return (
            <Script
              key={talk.id}
              id={`schema-talks-event-${index + 1}`}
              type="application/ld+json"
              strategy="afterInteractive"
            >
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "Event",
                  "name": "${escapeJsonString(talk.title)}",
                  "description": "${escapeJsonString(talk.description)}",
                  "startDate": "${isoDate}",
                  "endDate": "${isoDate}",
                  "eventStatus": "https://schema.org/EventScheduled",
                  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                  "location": {
                    "@type": "Place",
                    "name": "${escapeJsonString(talk.event)}",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "${escapeJsonString(extractLocality(talk.location))}",
                      "addressCountry": "Argentina"
                    }
                  },
                  "organizer": {
                    "@type": "Organization",
                    "name": "${escapeJsonString(talk.event)}"
                  },
                  "performer": {
                    "@type": "Person",
                    "name": "Rodrigo Manuel Navarro Lajous",
                    "jobTitle": "Staff Software Engineer",
                    "worksFor": {
                      "@type": "Organization",
                      "name": "Webacy"
                    }
                  },${talk.offers ? `
                  "offers": {
                    "@type": "Offer",
                    "price": "${talk.offers.price}",
                    "priceCurrency": "${talk.offers.priceCurrency}",
                    "availability": "${talk.offers.availability}",
                    "url": "${talk.offers.url}"
                  },` : ''}
                  "recordedIn": {
                    "@type": "VideoObject",
                    "name": "${escapeJsonString(talk.title)}",
                    "description": "${escapeJsonString(talk.event)} talk by Rodrigo Navarro Lajous",
                    "thumbnailUrl": "${SITE_URL}/assets${escapeJsonString(talk.banner || "")}",
                    "contentUrl": "${escapeJsonString(talk.links?.video || "")}",
                    "uploadDate": "${uploadDate}"
                  }
                }
              `}
            </Script>
          );
        })}
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
          "url": "${SITE_URL}",
          "description": "Personal website and portfolio of Rodrigo Manuel Navarro Lajous, Software Engineer and Digital Nomad",
          "author": {
            "@type": "Person",
            "name": "Rodrigo Manuel Navarro Lajous",
            "url": "${SITE_URL}"
          }
        }
      `}
    </Script>
  );
};

export default SchemaOrgScripts;
