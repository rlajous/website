/**
 * Represents an academic credential or degree.
 *
 * Used by the education service and rendered on `/education` (list) and `/education/[slug]` (detail).
 * Also consumed by {@link SchemaOrgScripts} to generate EducationalOccupationalCredential structured data.
 */
export interface Education {
  /** Unique numeric identifier used for ordering. */
  id: number;
  /** URL-safe identifier used in the `/education/[slug]` route. */
  slug: string;
  /** Full degree title (e.g. "Bachelor of Science in Computer Science"). */
  degree: string;
  /** Name of the university or institution. */
  institution: string;
  /** Human-readable date range (e.g. "2016 - 2021"). */
  period: string;
  /** City and country of the institution. */
  location?: string;
  /** URL of the institution's website. Rendered as a link on the detail page. */
  institutionUrl?: string;
  /** Area of specialization or concentration within the degree. */
  specialization?: string;
  /** Thesis or capstone project details shown on the detail page. */
  thesis?: {
    /** Title of the thesis or capstone project. */
    title: string;
    /** Summary of the thesis topic and findings. */
    description: string;
    /** URL to the full thesis document or repository. */
    link?: string;
  };
  /** Relevant courses completed, displayed as a list on the detail page. */
  coursework?: string[];
  /** Academic honors or notable accomplishments. */
  achievements?: string[];
  /** Technology names rendered as badges on both the card and detail page. */
  technologies: string[];
  /** Path to the banner image relative to the `/public` directory. */
  banner?: string;
}
