"use client";

import { Experience } from "@/domains/Experience";
import ExperienceCard from "../ExperienceCard";

/**
 * Props for the {@link ExperiencesTab} component.
 */
interface ExperiencesTabProps {
  /** Array of experience entries to display as cards. */
  experiences: Experience[];
}

/**
 * Renders a vertical list of {@link ExperienceCard} components for a given category.
 * Used within the Tabs on the `/experience` page.
 *
 * Client component — rendered inside a tab panel.
 */
const ExperiencesTab: React.FC<ExperiencesTabProps> = ({ experiences }) => (
  <div className="flex flex-col items-center gap-6 mt-6">
    {experiences.map((experience, index) => (
      <div
        key={experience.id}
        className="w-full animate-fade-in-up"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <ExperienceCard {...experience} />
      </div>
    ))}
  </div>
);

export default ExperiencesTab;
