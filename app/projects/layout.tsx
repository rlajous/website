import { Metadata } from "next";

/** Metadata for the projects section (title, description, canonical URL). */
export const metadata: Metadata = {
  title: "Projects | Rodrigo Manuel Navarro Lajous",
  description:
    "Portfolio of projects by Rodrigo Manuel Navarro Lajous, including freelance, hobby, and open source work.",
  alternates: {
    canonical: "/projects",
  },
};

/**
 * Layout wrapper for the projects section providing section-level metadata.
 * Renders children without additional visual chrome.
 *
 * @param props.children - The projects page content.
 */
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
