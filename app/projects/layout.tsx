import { Metadata } from "next";
import { DISPLAY_NAME } from "@/constants/profile";

/** Metadata for the projects section (title, description, canonical URL). */
export const metadata: Metadata = {
  title: `Projects | ${DISPLAY_NAME}`,
  description:
    `Portfolio of hobby and open source projects by ${DISPLAY_NAME}.`,
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
