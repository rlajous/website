import { Project } from "@/domains/Project";
import ProjectCard from "../ProjectCard";

interface ProjectsTabProps {
  projects: Project[];
}

const ProjectsTab: React.FC<ProjectsTabProps> = ({ projects }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsTab;
