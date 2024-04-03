export const ROUTES = {
  HOME: '/',
  RESUME: '/resume.pdf',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  CONTACT: '/contact',
};

export interface HeaderRoute {
  path: string;
  name: string;
  isExternal?: boolean;
}

export const HEADER_ROUTES: HeaderRoute[] = [
  { path: ROUTES.RESUME, name: "Resume", isExternal: true },
  { path: ROUTES.EXPERIENCE, name: "Experience" },
  { path: ROUTES.PROJECTS, name: "Projects" },
  { path: ROUTES.CONTACT, name: "Contact" },
];