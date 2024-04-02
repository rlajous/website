import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Github from "@/components/icons/Github";
import { Globe } from "lucide-react";
import { Project } from "@/domains/Project";

const ProjectCard: React.FC<Project> = ({
  name,
  company,
  website,
  github,
  period,
  description,
  technologies,
  banner,
}) => {
  return (
    <Link
      href={website || "#"}
      className="w-full"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="bg-white text-black dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row w-full">
        <div className="md:pr-4 md:border-r md:block">
          <img
            alt="Project 1"
            className="object-cover w-full md:w-auto  md:h-44"
            src={banner}
            style={{
              aspectRatio: "2 / 1",
              objectFit: "fill",
            }}
          />
        </div>
        <div className="md:w-3/4 pt-4 md:pt-0 md:pl-4 h-full">
          <h3 className="text-lg font-semibold">
            {name} {company && <>· {company}</>}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{period}</p>
          <p className="mt-2 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          {github && website && (
            <div className="flex flex-wrap gap-2 mt-3">
              <Link href={github}>
                <Github className="h-5" />
              </Link>
              <Link href={website}>
                <Globe />
              </Link>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
