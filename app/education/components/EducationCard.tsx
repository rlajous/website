"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Education } from "@/domains/Education";
import { School, Calendar } from "lucide-react";

/**
 * Card displaying an education entry summary (degree, institution, period, specialization, tech badges).
 *
 * Links to the detail page at `/education/[slug]`. The period is shown in a left sidebar
 * on desktop and inline with a calendar icon on mobile. Props match the {@link Education} interface.
 *
 * Client component — uses interactive link behavior.
 */
const EducationCard: React.FC<Education> = ({
  slug,
  degree,
  institution,
  institutionLogo,
  period,
  specialization,
  technologies,
}) => {
  return (
    <Link href={`/education/${slug}`} className="block group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col md:flex-row w-full hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 cursor-pointer border-l-2 border-l-transparent hover:border-l-primary">
        <div className="md:w-1/4 pr-4 border-r hidden md:block">
          <h2 className="text-xl font-semibold">{period}</h2>
        </div>
        <div className="md:w-3/4 md:pl-4">
          <div className="flex items-start gap-3">
            {institutionLogo && (
              <div className="shrink-0 mt-0.5">
                <Image
                  src={institutionLogo}
                  alt={`${institution} logo`}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-md object-contain bg-white dark:bg-white/95 border border-border/60 p-1"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold leading-tight">{degree}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <School className="h-4 w-4" />
                <span className="text-sm">{institution}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground md:hidden">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{period}</span>
              </div>
            </div>
          </div>
          {specialization && (
            <p className="mt-2 text-sm text-muted-foreground">
              Specialization: {specialization}
            </p>
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
    </Link>
  );
};

export default EducationCard;
