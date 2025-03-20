"use client";

import { Project } from "@/domains/Project";
import ProjectCard from "../ProjectCard";

interface ProjectsTabProps {
  projects: Project[];
}

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
