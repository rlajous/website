import React from "react";
import { Metadata } from "next";
import { education } from "@/services/education";
import EducationCard from "./components/EducationCard";

/** Metadata for the education page (title, description, canonical URL). */
export const metadata: Metadata = {
  title: "Education | Rodrigo Manuel Navarro Lajous",
  description:
    "Academic background of Rodrigo Manuel Navarro Lajous, including his master's in software engineering and bachelor's degree.",
  alternates: {
    canonical: "/education",
  },
};

/**
 * Education list page rendering all education entries as {@link EducationCard} components.
 * Server component — data is imported statically from the education service.
 */
export default function EducationPage() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 md:py-12">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold">Education</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-primary" />
        <p className="text-md mt-3 text-muted-foreground">My academic journey</p>
      </div>
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col gap-6">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <EducationCard {...edu} />
          </div>
        ))}
      </div>
    </div>
  );
}
