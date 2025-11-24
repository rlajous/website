export const ROUTES = {
  HOME: "/",
  RESUME: "/resume.pdf",
  EXPERIENCE: "/experience",
  PROJECTS: "/projects",
  CONTACT: "/contact",
  EDUCATION: "/education",
  TALKS: "/talks",
};

// Helper functions for detail routes
export const EXPERIENCE_DETAIL = (slug: string) => `/experience/${slug}`;
export const PROJECT_DETAIL = (slug: string) => `/projects/${slug}`;
export const EDUCATION_DETAIL = (slug: string) => `/education/${slug}`;
export const TALK_DETAIL = (slug: string) => `/talks/${slug}`;

export interface HeaderRoute {
  path: string;
  name: string;
  isExternal?: boolean;
}

export const HEADER_ROUTES: HeaderRoute[] = [
  { path: ROUTES.RESUME, name: "Resume", isExternal: true },
  { path: ROUTES.EXPERIENCE, name: "Experience" },
  { path: ROUTES.EDUCATION, name: "Education" },
  { path: ROUTES.TALKS, name: "Talks" },
  { path: ROUTES.PROJECTS, name: "Projects" },
  { path: ROUTES.CONTACT, name: "Contact" },
];
