import { Metadata } from "next";
import { DISPLAY_NAME } from "@/constants/profile";

/** Metadata for the experience section (title, description, canonical URL). */
export const metadata: Metadata = {
  title: `Experience | ${DISPLAY_NAME}`,
  description:
    `Professional journey of ${DISPLAY_NAME}, showcasing his work experience and roles.`,
  alternates: {
    canonical: "/experience",
  },
};

/**
 * Layout wrapper for the experience section providing section-level metadata.
 * Renders children without additional visual chrome.
 *
 * @param props.children - The experience page content.
 */
export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
