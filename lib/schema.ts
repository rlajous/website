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
import {
  DISPLAY_NAME,
  FULL_NAME,
  GITHUB_URL,
  HEADLINE,
  JOB_TITLE,
  HEADLINE_SUMMARY,
  LINKEDIN_URL,
  X_URL,
} from "@/constants/profile";
import { Experience, responsibilityText } from "@/domains/Experience";
import { Education } from "@/domains/Education";
import { Project } from "@/domains/Project";
import { Talk } from "@/domains/Talk";

/** Full name used as the canonical author/person across all schemas. */
const PERSON_NAME = FULL_NAME;

/**
 * Stable node id of the Person entity. Other schemas reference it so crawlers
 * merge every page's author/performer into one entity instead of many.
 */
const PERSON_ID = `${SITE_URL}/#person`;

/** Profile URLs used for the Person `sameAs` field (Knowledge Panel and LLM grounding). */
const SAME_AS = [
  X_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  "https://lajous.substack.com",
  "https://agents.navarrolajous.com",
];

/**
 * Reference to the Person entity for author/performer fields. The name is kept
 * next to the `@id` because pages other than home don't render the full Person node.
 */
const PERSON_REF = { "@type": "Person", "@id": PERSON_ID, name: PERSON_NAME };

/**
 * Builds the sitewide WebSite schema rendered on every route via the root layout.
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DISPLAY_NAME,
    url: SITE_URL,
    description: `Personal website and portfolio of ${PERSON_NAME}, ${HEADLINE}`,
    author: PERSON_REF,
  };
}

/**
 * Builds the Person schema for the home page.
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    alternateName: [DISPLAY_NAME, "Lajous", "Rodrigo Navarro Lajous", "Rodrigo Navarro", "ro_lajous"],
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    jobTitle: JOB_TITLE,
    worksFor: { "@type": "Organization", name: "Webacy", url: "https://webacy.com" },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Fachhochschule Technikum Wien",
        sameAs: "https://www.technikum-wien.at/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Instituto Tecnológico de Buenos Aires (ITBA)",
        sameAs: "https://www.itba.edu.ar/",
      },
    ],
    knowsAbout: [
      "Web3 security",
      "Developer platforms",
      "SDKs",
      "Next.js",
      "TypeScript",
      "Technical program management",
    ],
    sameAs: SAME_AS,
    description: `${HEADLINE}, ${HEADLINE_SUMMARY}`,
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
      "@id": PERSON_ID,
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

/** Maps lowercase English month names to their 1-based number. */
const MONTHS: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
};

/**
 * Converts one end of a human-readable period string into an ISO 8601 date
 * for Schema.org date fields such as `startDate`.
 *
 * Splits on any dash separator (em-dash, en-dash, or hyphen) and takes the
 * first (start) or last (end) segment, so a single-year period like "2021" is
 * both its own start and end. The result keeps the precision of the source
 * instead of inventing a day: "April 2025" → "2025-04", "2021" → "2021".
 * An open end ("Present") yields undefined.
 *
 * @param period - Human-readable date range (e.g. "April 2025 — Present", "2021").
 * @param part - Which end of the range to convert.
 * @returns An ISO 8601 date string, or undefined if no year can be parsed.
 */
function periodToISODate(
  period: string,
  part: "start" | "end"
): string | undefined {
  const segments = period.split(/[—–-]/);
  const segment = segments[part === "start" ? 0 : segments.length - 1].trim();
  const yearMatch = segment.match(/\d{4}/);
  if (!yearMatch) {
    return undefined;
  }
  const year = yearMatch[0];
  const monthToken = segment.toLowerCase().match(/[a-z]+/)?.[0];
  const month = monthToken
    ? Object.entries(MONTHS).find(([name]) => name.startsWith(monthToken))?.[1]
    : undefined;
  return month ? `${year}-${String(month).padStart(2, "0")}` : year;
}

/**
 * Builds a ProfilePage schema for an experience detail page: the Person with
 * one Role per position held, each under `worksFor` and dated with
 * `startDate`/`endDate` (no `endDate` while current).
 *
 * Not a JobPosting: that type is for open job offers, and Google Search Console
 * flagged these pages for missing salary, address and `validThrough` fields.
 * Jobs use `EmployeeRole`; startups and freelance work are not employment, so
 * they use the generic `OrganizationRole`.
 *
 * @param experience - The experience entry to describe.
 */
export function getExperienceSchema(experience: Experience) {
  const organization = {
    "@type": "Organization",
    name: experience.company,
    ...(experience.companyUrl && { url: experience.companyUrl }),
  };
  const roleType = experience.type === "job" ? "EmployeeRole" : "OrganizationRole";
  const positions = experience.roles ?? [
    { position: experience.position, period: experience.period },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${experience.position} at ${experience.company}`,
    description: experience.responsibilities.map(responsibilityText).join(" "),
    mainEntity: {
      ...PERSON_REF,
      worksFor: positions.map(({ position, period }) => {
        const startDate = periodToISODate(period, "start");
        const endDate = periodToISODate(period, "end");
        return {
          "@type": roleType,
          roleName: position,
          ...(startDate && { startDate }),
          ...(endDate && { endDate }),
          worksFor: organization,
        };
      }),
      knowsAbout: experience.technologies,
    },
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
    author: PERSON_REF,
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
        performer: PERSON_REF,
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
