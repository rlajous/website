import React from "react";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const Experience: React.FC<ExperienceProps> = ({
  position,
  company,
  period,
  responsibilities,
  technologies,
}) => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="md:w-1/4 pr-4 border-r">
        <h2 className="text-xl font-semibold">{period}</h2>
      </div>
      <div className="md:w-3/4 pl-4">
        <h3 className="text-lg font-semibold">
          {position} · {company}
        </h3>
        {responsibilities.map((item, itemIndex) => (
          <p key={itemIndex} className="mt-2 text-sm">
            {item}
          </p>
        ))}
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
