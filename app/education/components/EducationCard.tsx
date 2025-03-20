"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/domains/Experience";
import { School, Calendar } from "lucide-react";

const EducationCard: React.FC<Experience> = ({
  position,
  company,
  period,
  responsibilities,
  technologies,
}) => {
  return (
    <div className="bg-white text-black dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row w-full">
      <div className="md:w-1/4 pr-4 border-r hidden md:block">
        <h2 className="text-xl font-semibold">{period}</h2>
      </div>
      <div className="md:w-3/4 md:pl-4">
        <h3 className="text-lg font-semibold">{position}</h3>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <School className="h-4 w-4" />
          <span>{company}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 md:hidden">
          <Calendar className="h-4 w-4" />
          <span>{period}</span>
        </div>
        {responsibilities.length > 0 && (
          <ul className="list-disc ml-5 space-y-1 mt-2">
            {responsibilities.map((item, itemIndex) => (
              <li key={itemIndex} className="mt-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        )}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                data-umami-event="Education Tag Click"
                data-umami-event-skill={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
