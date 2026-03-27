/**
 * Base URL for canonical links, metadata, and sitemap generation.
 * Can be overridden via the `NEXT_PUBLIC_SITE_URL` environment variable.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://navarrolajous.com';

/**
 * Centralized path constants for all top-level pages.
 * Referenced by navigation components, sitemap generation, and internal links.
 */
export const ROUTES = {
  HOME: "/",
  RESUME: "/resume.pdf",
  EXPERIENCE: "/experience",
  PROJECTS: "/projects",
  CONTACT: "/contact",
  EDUCATION: "/education",
  TALKS: "/talks",
};

/**
 * Constructs the detail page path for an experience entry.
 *
 * @param slug - URL-safe identifier of the experience.
 * @returns The absolute path to the experience detail page.
 */
export const EXPERIENCE_DETAIL = (slug: string) => `${ROUTES.EXPERIENCE}/${slug}`;

/**
 * Constructs the detail page path for a project entry.
 *
 * @param slug - URL-safe identifier of the project.
 * @returns The absolute path to the project detail page.
 */
export const PROJECT_DETAIL = (slug: string) => `${ROUTES.PROJECTS}/${slug}`;

/**
 * Constructs the detail page path for an education entry.
 *
 * @param slug - URL-safe identifier of the education entry.
 * @returns The absolute path to the education detail page.
 */
export const EDUCATION_DETAIL = (slug: string) => `${ROUTES.EDUCATION}/${slug}`;

/**
 * Constructs the detail page path for a talk entry.
 *
 * @param slug - URL-safe identifier of the talk.
 * @returns The absolute path to the talk detail page.
 */
export const TALK_DETAIL = (slug: string) => `${ROUTES.TALKS}/${slug}`;

/**
 * Configuration for a navigation item rendered in the site header.
 */
export interface HeaderRoute {
  /** Route path or URL to navigate to. */
  path: string;
  /** Display label shown in the navigation menu. */
  name: string;
  /** When true, opens the link in a new tab (e.g. for the Resume PDF). */
  isExternal?: boolean;
}

/**
 * Ordered list of navigation items rendered in the desktop and mobile header menus.
 */
export const HEADER_ROUTES: HeaderRoute[] = [
  { path: ROUTES.RESUME, name: "Resume", isExternal: true },
  { path: ROUTES.EXPERIENCE, name: "Experience" },
  { path: ROUTES.EDUCATION, name: "Education" },
  { path: ROUTES.TALKS, name: "Talks" },
  { path: ROUTES.PROJECTS, name: "Projects" },
  { path: ROUTES.CONTACT, name: "Contact" },
];
