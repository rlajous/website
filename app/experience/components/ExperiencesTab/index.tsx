"use client";

import { Experience } from "@/domains/Experience";
import ExperienceCard from "../ExperienceCard";

/**
 * Props for the {@link ExperiencesTab} component.
 */
interface ExperiencesTabProps {
  /** Array of experience entries to display as cards. */
  experiences: Experience[];
  /** True for the tab shown on first load, so its first card's logo is prioritized as the LCP image. */
  priority?: boolean;
}

/**
 * Renders a vertical list of {@link ExperienceCard} components for a given category.
 * Used within the Tabs on the `/experience` page.
 *
 * Client component — rendered inside a tab panel.
 */
const ExperiencesTab: React.FC<ExperiencesTabProps> = ({ experiences, priority = false }) => (
  <div className="relative mt-6">
    {/* Shared career timeline rail — aligns with the right edge of each card's period column */}
    <div
      aria-hidden
      className="hidden md:block absolute top-2 bottom-2 w-px bg-border"
      style={{ left: "calc(25% + 24px - 1px)" }}
    />
    <div className="flex flex-col items-center gap-6">
      {experiences.map((experience, index) => (
        <div
          key={experience.id}
          className="w-full animate-fade-in-up"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <ExperienceCard {...experience} priority={priority && index === 0} />
        </div>
      ))}
    </div>
  </div>
);

export default ExperiencesTab;
