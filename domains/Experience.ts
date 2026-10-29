/**
 * A sub-role within an Experience — used for LinkedIn-style nested role timelines
 * when the user held multiple titles at the same company.
 */
export interface ExperienceRole {
  /** Job title held during this sub-period. */
  position: string;
  /** Human-readable date range for this sub-role (e.g. "Apr 2026 — Present"). */
  period: string;
}

/**
 * A public link backing an experience bullet (docs, package, talk, repo),
 * so a reader can check the claim instead of taking it on trust.
 */
export interface EvidenceLink {
  /** Short link text (e.g. "Docs", "npm", "Talk"). */
  label: string;
  /** Absolute URL, or a site path for internal pages such as talks. */
  url: string;
}

/**
 * One experience bullet. A plain string when there is no public evidence,
 * or an object pairing the text with the links that back it.
 */
export type Responsibility = string | { text: string; evidence: EvidenceLink[] };

/**
 * Returns the bullet text of a {@link Responsibility}, for metadata, schema and llms.txt
 * output that only needs the words.
 */
export function responsibilityText(responsibility: Responsibility): string {
  return typeof responsibility === "string" ? responsibility : responsibility.text;
}

/**
 * Represents a professional role (employment or startup venture).
 *
 * Used by the experience service and rendered on `/experience` (list) and `/experience/[slug]` (detail).
 * The {@link type} field determines which tab displays the entry on the list page.
 * Also consumed by the schema builders in `lib/schema.ts` to generate the experience page structured data.
 */
export interface Experience {
  /** Unique numeric identifier used for ordering. */
  id: number;
  /** URL-safe identifier used in the `/experience/[slug]` route. */
  slug: string;
  /** Job title or role held at the company (most-recent role when {@link roles} is set). */
  position: string;
  /** Name of the employer or startup. */
  company: string;
  /** Human-readable date range (e.g. "Jan 2022 - Present"). Represents total tenure when {@link roles} is set. */
  period: string;
  /** Discriminator between employment (`'job'`), entrepreneurial (`'startup'`), and client (`'freelance'`) tabs. */
  type: 'job' | 'startup' | 'freelance';
  /** City and country of the role. */
  location?: string;
  /** URL of the company's website. Rendered as a link on the detail page. */
  companyUrl?: string;
  /** Key responsibilities and duties, optionally with evidence links. Used as summary text in metadata generation. */
  responsibilities: Responsibility[];
  /** Technology names rendered as badges on both the card and detail page. */
  technologies: string[];
  /** Notable accomplishments in this role, shown on the detail page. */
  achievements?: string[];
  /** Path to the banner image relative to the `/public` directory. */
  banner?: string;
  /** Path to the company logo image relative to the `/public` directory (e.g. "/assets/companies/webacy.png"). */
  companyLogo?: string;
  /**
   * Optional sub-roles in reverse-chronological order (most recent first).
   * When present and length > 1, the card and detail page render a LinkedIn-style
   * nested timeline under the company name instead of a single position heading.
   */
  roles?: ExperienceRole[];
}
