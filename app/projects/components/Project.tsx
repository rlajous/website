import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Github from "@/components/icons/Github";
import { cn } from "@/lib/utils";
import styles from "./Project.module.css";

interface ProjectProps {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  position,
  company,
  period,
  description,
  technologies,
}) => {
  return (
    <a href="#">
      <div className="bg-white text-black dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="pr-4 border-r hidden md:block">
          <img
            alt="Project 1"
            className="object-cover w-64 h-44"
            src="https://generated.vusercontent.net/placeholder.svg"
            style={{
              aspectRatio: "200/300",
              objectFit: "cover",
            }}
          />
        </div>
        <div className="md:w-3/4 pl-4">
          <h3 className="text-lg font-semibold">
            {position} · {company}
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
          <div className="flex flex-wrap gap-2 mt-3">
            <Link className="underline text-blue-600" href="#">
              <Github className={cn("h-5", styles.github)} />
            </Link>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
