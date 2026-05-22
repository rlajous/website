"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/domains/Experience";
import { ChevronRight } from "lucide-react";

const MAX_TECH_BADGES = 8;
const MAX_BULLETS = 3;

/**
 * Computes a human-readable tenure (e.g. "1 yr 2 mos") from a period string
 * formatted as "MMM YYYY — MMM YYYY" or "MMM YYYY — Present".
 *
 * Returns `null` when the period can't be parsed (e.g. year-only ranges).
 */
function computeTenure(period: string): string | null {
  const normalized = period.replace(/\s*—\s*/g, " - ").replace(/\s*–\s*/g, " - ");
  const parts = normalized.split(" - ");
  if (parts.length !== 2) return null;

  const parseEnd = (s: string): Date | null => {
    if (s.trim().toLowerCase() === "present") return new Date();
    const d = new Date(s.trim());
    return isNaN(d.getTime()) ? null : d;
  };

  const start = parseEnd(parts[0]);
  const end = parseEnd(parts[1]);
  if (!start || !end || end < start) return null;

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (months < 1) return null;

  const years = Math.floor(months / 12);
  months = months % 12;

  const yLabel = years === 1 ? "yr" : "yrs";
  const mLabel = months === 1 ? "mo" : "mos";

  if (years && months) return `${years} ${yLabel} ${months} ${mLabel}`;
  if (years) return `${years} ${yLabel}`;
  return `${months} ${mLabel}`;
}

/**
 * Card displaying an experience summary (position, company, period, responsibilities, tech badges).
 *
 * Links to the detail page at `/experience/[slug]`. Renders a LinkedIn-style nested
 * role timeline when `roles.length > 1`. Otherwise stacks position over a muted company.
 *
 * Client component — uses interactive link behavior.
 */
const ExperienceCard: React.FC<Experience> = ({
  slug,
  position,
  company,
  companyLogo,
  period,
  responsibilities,
  technologies,
  roles,
}) => {
  const hasMultipleRoles = roles && roles.length > 1;
  const tenure = computeTenure(period);
  const extraBullets = responsibilities.length - MAX_BULLETS;
  const extraTech = technologies.length - MAX_TECH_BADGES;

  return (
    <Link href={`/experience/${slug}`} className="block group">
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col md:flex-row hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 cursor-pointer border-l-2 border-l-transparent hover:border-l-primary">
        {/* Period column with timeline dot */}
        <div className="md:w-1/4 pr-4 border-r hidden md:block relative">
          <span
            aria-hidden
            className="absolute -right-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-card"
          />
          <p className="text-sm font-medium leading-tight">{period}</p>
          {tenure && (
            <p className="text-xs text-muted-foreground mt-1">{tenure}</p>
          )}
        </div>

        <div className="md:w-3/4 md:pl-4 flex flex-col">
          {/* Heading with logo */}
          <div className="flex items-start gap-3">
            {companyLogo && (
              <div className="shrink-0 mt-0.5">
                <Image
                  src={companyLogo}
                  alt={`${company} logo`}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-md object-contain bg-background border border-border/60 p-1"
                />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold leading-tight">{company}</h3>
              <p className="text-sm text-muted-foreground">{position}</p>
              <p className="text-xs text-muted-foreground md:hidden mt-0.5">
                {period}
                {tenure && ` · ${tenure}`}
              </p>
            </div>
          </div>

          {hasMultipleRoles && (
            <>
              <ol className="mt-3 ml-1 border-l border-border space-y-2 pl-4 mb-2">
                {roles!.map((r, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[19px] top-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-card" />
                    <div className="text-sm font-medium leading-tight">
                      {r.position}
                    </div>
                    <div className="text-xs text-muted-foreground">{r.period}</div>
                  </li>
                ))}
              </ol>
              <hr className="my-3 border-border/60" />
            </>
          )}

          {/* Bullets */}
          <ul className="list-disc ml-5 space-y-1 mt-2">
            {responsibilities.slice(0, MAX_BULLETS).map((item, itemIndex) => (
              <li key={itemIndex} className="mt-2 text-sm">
                {item}
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.slice(0, MAX_TECH_BADGES).map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                data-umami-event="Experience Tag Click"
                data-umami-event-skill={tech}
              >
                {tech}
              </Badge>
            ))}
            {extraTech > 0 && (
              <Badge variant="outline" className="text-muted-foreground">
                +{extraTech}
              </Badge>
            )}
          </div>

          {/* Footer affordance */}
          <div className="flex items-center justify-end mt-4 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {extraBullets > 0 && (
              <span className="mr-auto text-xs">
                +{extraBullets} more {extraBullets === 1 ? "highlight" : "highlights"}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              View details
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
