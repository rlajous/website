"use client";

import { Project } from "@/domains/Project";
import ProjectCard from "../ProjectCard";

/**
 * Props for the {@link ProjectsTab} component.
 */
interface ProjectsTabProps {
  /** Array of projects to display, sorted by year (newest first). */
  projects: Project[];
}

/**
 * Renders {@link ProjectCard} components sorted by year (newest first).
 * Parses the year from each project's period string for sorting.
 * Used within the Tabs on the `/projects` page.
 *
 * Client component — rendered inside a tab panel.
 */
const ProjectsTab: React.FC<ProjectsTabProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {projects
        .sort(
          (a, b) =>
            parseInt(b.period.split("-")[0]) - parseInt(a.period.split("-")[0])
        )
        .map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
    </div>
  );
};

export default ProjectsTab;
