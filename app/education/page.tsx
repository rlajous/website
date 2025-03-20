import React from "react";
import { Metadata } from "next";
import { education } from "@/services/experience";
import EducationCard from "./components/EducationCard";

export const metadata: Metadata = {
  title: "Education | Rodrigo Manuel Navarro Lajous",
  description:
    "Academic background of Rodrigo Manuel Navarro Lajous, including his master's in software engineering and bachelor's degree.",
};

export default function EducationPage() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 md:py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Education</h1>
        <p className="text-md mt-2">My academic journey</p>
      </div>
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col gap-6">
        {education.map((edu) => (
          <EducationCard key={edu.id} {...edu} />
        ))}
      </div>
    </div>
  );
}
