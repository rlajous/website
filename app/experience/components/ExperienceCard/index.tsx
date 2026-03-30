"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/domains/Experience";

/**
 * Card displaying an experience summary (position, company, period, responsibilities, tech badges).
 *
 * Links to the detail page at `/experience/[slug]`. The period is shown in a left sidebar
 * on desktop and inline on mobile. Props match the {@link Experience} interface.
 *
 * Client component — uses interactive link behavior.
 */
const ExperienceCard: React.FC<Experience> = ({
  slug,
  position,
  company,
  period,
  responsibilities,
  technologies,
}) => {
  return (
    <Link href={`/experience/${slug}`} className="block group">
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col md:flex-row hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 cursor-pointer border-l-2 border-l-transparent hover:border-l-primary">
        <div className="md:w-1/4 pr-4 border-r hidden md:block">
          <h2 className="text-xl font-semibold">{period}</h2>
        </div>
        <div className="md:w-3/4 md:pl-4">
          <h3 className="text-lg font-semibold">
            {position} · {company}
          </h3>
          <p className="text-muted-foreground md:hidden">{period}</p>
          <ul className="list-disc ml-5 space-y-1">
            {responsibilities.slice(0, 3).map((item, itemIndex) => (
              <li key={itemIndex} className="mt-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
          {responsibilities.length > 3 && (
            <p className="text-sm text-link mt-1 ml-5">
              +{responsibilities.length - 3} more
            </p>
          )}
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
    </Link>
  );
};

export default ExperienceCard;
