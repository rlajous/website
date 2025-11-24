import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Rodrigo Manuel Navarro Lajous",
  description:
    "Professional journey of Rodrigo Manuel Navarro Lajous, showcasing his work experience and roles.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
