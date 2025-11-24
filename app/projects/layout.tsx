import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rodrigo Manuel Navarro Lajous",
  description:
    "Portfolio of projects by Rodrigo Manuel Navarro Lajous, including freelance, hobby, and open source work.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
