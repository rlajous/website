import { Metadata } from "next";

/** Metadata for the experience section (title, description, canonical URL). */
export const metadata: Metadata = {
  title: "Experience | Rodrigo Manuel Navarro Lajous",
  description:
    "Professional journey of Rodrigo Manuel Navarro Lajous, showcasing his work experience and roles.",
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
