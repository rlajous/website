/**
 * Represents a portfolio project (hobby project or open-source contribution).
 *
 * Used by the projects service data arrays and rendered on `/projects` (list) and `/projects/[slug]` (detail).
 * The {@link type} field (`'hobby' | 'opensource' | 'early-work'`) determines which tab displays the project on the list page.
 */
export interface Project {
  /** Unique numeric identifier used for ordering. */
  id: number;
  /** URL-safe identifier used in the `/projects/[slug]` route. */
  slug: string;
  /** Display name of the project. */
  name: string;
  /** Company or organization the project was built for. */
  company: string;
  /** Categorization that determines which tab displays this project on the list page. */
  type: 'hobby' | 'opensource' | 'early-work';
  /** GitHub repository URL. Empty string if not publicly available. */
  github: string;
  /** Live website URL. Empty string if not deployed or applicable. */
  website: string;
  /** Optional npm registry URL for published packages. */
  npm?: string;
  /** Optional documentation site URL. */
  docs?: string;
  /** Human-readable date range (e.g. "Jan 2023 - Mar 2023"). */
  period: string;
  /** Short summary shown on the project card in the list view. */
  description: string;
  /** Extended description shown on the detail page. Falls back to {@link description} if omitted. */
  detailedDescription?: string;
  /** Technology names rendered as badges on both the card and detail page. */
  technologies: string[];
  /** Path to the banner image relative to the `/public` directory. */
  banner: string;
  /** Optional logos rendered inside the dynamically generated banner (when {@link banner} is empty). */
  logos?: string[];
  /** Paths to screenshot images shown in the detail page gallery. */
  screenshots?: string[];
  /** Key features highlighted on the detail page. */
  features?: string[];
  /** Technical challenges described on the detail page. */
  challenges?: string[];
  /** Business or user impact statement shown on the detail page. */
  impact?: string;
}
