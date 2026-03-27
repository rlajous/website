/**
 * Represents a professional role (employment or startup venture).
 *
 * Used by the experience service and rendered on `/experience` (list) and `/experience/[slug]` (detail).
 * The {@link type} field determines which tab displays the entry on the list page.
 * Also consumed by {@link SchemaOrgScripts} to generate JobPosting structured data.
 */
export interface Experience {
  /** Unique numeric identifier used for ordering. */
  id: number;
  /** URL-safe identifier used in the `/experience/[slug]` route. */
  slug: string;
  /** Job title or role held at the company. */
  position: string;
  /** Name of the employer or startup. */
  company: string;
  /** Human-readable date range (e.g. "Jan 2022 - Present"). */
  period: string;
  /** Discriminator between employment (`'job'`) and entrepreneurial (`'startup'`) tabs. */
  type: 'job' | 'startup';
  /** City and country of the role. */
  location?: string;
  /** URL of the company's website. Rendered as a link on the detail page. */
  companyUrl?: string;
  /** Key responsibilities and duties. Used as summary text in metadata generation. */
  responsibilities: string[];
  /** Technology names rendered as badges on both the card and detail page. */
  technologies: string[];
  /** Notable accomplishments in this role, shown on the detail page. */
  achievements?: string[];
  /** Path to the banner image relative to the `/public` directory. */
  banner?: string;
}
