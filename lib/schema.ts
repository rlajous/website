/**
 * @module lib/schema
 * @description Pure builders for Schema.org JSON-LD structured data.
 *
 * Each function returns a plain object (including `@context`) that is rendered
 * server-side via {@link "@/components/JsonLd".JsonLd} so crawlers read the
 * structured data in the initial HTML. Serialization/escaping is handled by
 * `JSON.stringify` in the renderer — no manual string escaping is needed here.
 */
import { SITE_URL } from "@/constants/routes";
import { Experience } from "@/domains/Experience";
import { Education } from "@/domains/Education";
import { Project } from "@/domains/Project";
import { Talk } from "@/domains/Talk";

/** Full name used as the canonical author/person across all schemas. */
const PERSON_NAME = "Rodrigo Manuel Navarro Lajous";

/** Social profile URLs used for the Person `sameAs` field. */
const SAME_AS = [
  "https://github.com/rlajous",
  "https://www.linkedin.com/in/rodrigo-lajous",
  "https://twitter.com/ro_lajous",
];

/**
 * Builds the sitewide WebSite schema rendered on every route via the root layout.
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PERSON_NAME,
    url: SITE_URL,
    description: `Personal website and portfolio of ${PERSON_NAME}, Product Engineer`,
    author: {
      "@type": "Person",
      name: PERSON_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Builds the Person schema for the home page.
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON_NAME,
    url: SITE_URL,
    jobTitle: "Product Engineer",
    sameAs: SAME_AS,
    description:
      "Product Engineer building developer platforms, SDKs, and multi-chain infrastructure.",
  };
}

/**
 * Builds the ProfilePage schema for the education list page.
 */
export function getEducationProfileSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `Education of ${PERSON_NAME}`,
    mainEntity: {
      "@type": "Person",
      name: PERSON_NAME,
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Fachhochschule Technikum Wien",
          sameAs: "https://www.technikum-wien.at/",
        },
        {
          "@type": "EducationalOrganization",
          name: "Instituto Tecnológico de Buenos Aires (ITBA)",
          sameAs: "https://www.itba.edu.ar/",
        },
      ],
    },
  };
}

/**
 * Builds a JobPosting schema for an experience detail page.
 *
 * @param experience - The experience entry to describe.
 */
export function getExperienceSchema(experience: Experience) {
  const employmentType =
    experience.type === "job"
      ? "FULL_TIME"
      : experience.type === "freelance"
      ? "CONTRACTOR"
      : "SELF_EMPLOYED";

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: experience.position,
    description: experience.responsibilities.join(" "),
    hiringOrganization: {
      "@type": "Organization",
      name: experience.company,
      ...(experience.companyUrl && { url: experience.companyUrl }),
    },
    datePosted: experience.period.split("—")[0].trim(),
    employmentType,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: experience.location || "Remote",
      },
    },
    skills: experience.technologies,
  };
}

/**
 * Builds an EducationalOccupationalCredential schema for an education detail page.
 *
 * @param edu - The education entry to describe.
 */
export function getEducationSchema(edu: Education) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: edu.degree,
    credentialCategory: "degree",
    recognizedBy: {
      "@type": "EducationalOrganization",
      name: edu.institution,
      ...(edu.institutionUrl && { url: edu.institutionUrl }),
    },
    educationalLevel: "Graduate",
    about: edu.specialization || edu.degree,
    competencyRequired: edu.technologies,
  };
}

/**
 * Builds a CreativeWork schema for a project detail page.
 *
 * @param project - The project entry to describe.
 */
export function getProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.detailedDescription || project.description,
    author: {
      "@type": "Person",
      name: PERSON_NAME,
    },
    dateCreated: project.period,
    keywords: project.technologies.join(", "),
    ...(project.github && { codeRepository: project.github }),
    ...(project.website && { url: project.website }),
    ...(project.banner && { image: `${SITE_URL}/assets${project.banner}` }),
  };
}

/**
 * Extracts the date portion ("YYYY-MM-DD") from an ISO 8601 timestamp.
 *
 * @param uploadDate - ISO 8601 timestamp (e.g. "2025-11-19T12:00:00Z").
 */
function extractISODate(uploadDate: string): string {
  return uploadDate.split("T")[0];
}

/**
 * Extracts the city/locality from a location string.
 *
 * Handles "City, Country" format and multi-word cities like "Buenos Aires".
 *
 * @param location - Location string (e.g. "Buenos Aires, Argentina").
 */
function extractLocality(location: string): string {
  if (location.includes(",")) {
    const parts = location.split(",");
    if (parts.length >= 2) {
      return parts[parts.length - 2].trim();
    }
  }
  const words = location.trim().split(/\s+/);
  if (words.length >= 2) {
    return words.slice(-2).join(" ");
  }
  return location;
}

/**
 * Attempts to extract the country from a "City, Country" location string.
 *
 * @param location - Location string (e.g. "Buenos Aires, Argentina").
 * @returns The country name, or null if it cannot be parsed.
 */
function parseCountryFromLocation(location: string): string | null {
  if (location.includes(",")) {
    const parts = location.split(",");
    if (parts.length >= 2) {
      return parts[parts.length - 1].trim();
    }
  }
  return null;
}

/**
 * Builds Event schemas (with optional VideoObject / Offer) for every talk that
 * has an `uploadDate`. Talks without an `uploadDate` are skipped, since the
 * Event schema requires a `startDate` derived from it.
 *
 * @param allTalks - The talks to describe.
 * @returns An array of Event schema objects (one per eligible talk).
 */
export function getTalkSchemas(allTalks: Talk[]): Record<string, unknown>[] {
  return allTalks
    .filter((talk) => Boolean(talk.uploadDate))
    .map((talk) => {
      const uploadDate = talk.uploadDate as string;
      const isoDate = extractISODate(uploadDate);
      const country = talk.country || parseCountryFromLocation(talk.location);

      const address: Record<string, string> = {
        "@type": "PostalAddress",
        addressLocality: extractLocality(talk.location),
      };
      if (country) {
        address.addressCountry = country;
      }

      const eventSchema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: talk.title,
        description: talk.description,
        startDate: isoDate,
        endDate: isoDate,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: talk.event,
          address,
        },
        organizer: {
          "@type": "Organization",
          name: talk.event,
          ...(talk.organizerUrl && { url: talk.organizerUrl }),
        },
        performer: {
          "@type": "Person",
          name: PERSON_NAME,
          jobTitle: "Product Engineer",
          worksFor: {
            "@type": "Organization",
            name: "Webacy",
          },
        },
      };

      if (talk.banner) {
        eventSchema.image = `${SITE_URL}/assets${talk.banner}`;
      }

      if (talk.offers) {
        eventSchema.offers = {
          "@type": "Offer",
          price: talk.offers.price,
          priceCurrency: talk.offers.priceCurrency,
          availability: talk.offers.availability,
          url: talk.offers.url,
          validFrom: uploadDate,
        };
      }

      if (talk.links?.video) {
        const videoObject: Record<string, string> = {
          "@type": "VideoObject",
          name: talk.title,
          description: `${talk.event} talk by ${PERSON_NAME}`,
          contentUrl: talk.links.video,
          uploadDate,
        };
        if (talk.banner) {
          videoObject.thumbnailUrl = `${SITE_URL}/assets${talk.banner}`;
        }
        eventSchema.recordedIn = videoObject;
      }

      return eventSchema;
    });
}
