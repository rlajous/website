/**
 * Full legal name used in metadata, Schema.org data and generated text files.
 */
export const FULL_NAME = "Rodrigo Manuel Navarro Lajous";

/**
 * Name shown in titles, headings and previews. "Lajous" is the identifier Rodrigo
 * wants to be known by ("Rodrigo Navarro" is a very common name and hard to rank
 * for); the full name stays in Schema.org `name` and formal contexts.
 */
export const DISPLAY_NAME = "Rodrigo Lajous";

/**
 * Public headline shared by the site title, OpenGraph image, Person schema and llms.txt.
 * Kept in one place so the positioning doesn't drift between surfaces (and off-site
 * profiles on X, LinkedIn and GitHub, which are updated by hand to match).
 * Matches the official Webacy title (Product Engineer since April 2026).
 */
export const HEADLINE = "Product Engineer at Webacy";

/** Bare job title for Schema.org `jobTitle`; the employer lives in `worksFor`. */
export const JOB_TITLE = "Product Engineer";

/**
 * One-line summary of what the headline role covers, appended to the headline in
 * descriptions and summaries.
 */
export const HEADLINE_SUMMARY =
  "building developer platforms, SDKs, and multi-chain infrastructure across Engineering, Product, and Customers.";

/** Public X (formerly Twitter) profile. */
export const X_URL = "https://x.com/ro_lajous";

/** Public LinkedIn profile. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/rodrigo-lajous";

/** Public GitHub profile. */
export const GITHUB_URL = "https://github.com/rlajous";
