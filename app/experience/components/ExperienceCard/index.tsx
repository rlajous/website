"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/domains/Experience";

const ExperienceCard: React.FC<Experience> = ({
  position,
  company,
  period,
  responsibilities,
  technologies,
}) => {
  return (
    <div className="bg-white text-black dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/4 pr-4 border-r hidden md:block">
        <h2 className="text-xl font-semibold">{period}</h2>
      </div>
      <div className="md:w-3/4 md:pl-4">
        <h3 className="text-lg font-semibold">
          {position} · {company}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 md:hidden">{period}</p>
        <ul className="list-disc ml-5 space-y-1">
          {responsibilities.map((item, itemIndex) => (
            <li key={itemIndex} className="mt-2 text-sm">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="secondary"
              data-umami-event="Experience Tag Click"
              data-umami-event-skill={tech}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
