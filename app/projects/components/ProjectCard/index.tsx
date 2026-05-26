"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project } from "@/domains/Project";
import { GitHubLink } from "@/components/social/GitHubLink";
import { WebsiteLink } from "@/components/social/WebsiteLink";
import { SocialLink } from "@/components/social/SocialLink";
import Image from "next/image";
import { blurDataURL } from "@/lib/utils";
import { Package, BookOpen } from "lucide-react";

/**
 * Card displaying a project summary with banner image, description, tech badges,
 * and optional GitHub/website links.
 *
 * The entire card links to `/projects/[slug]`. GitHub and website links use `z-20`
 * to escape the card's overlay link and remain independently clickable.
 * Parses the GitHub username and repository from the full URL.
 *
 * When `project.featured` is true, renders a hero variant: banner spans the full card
 * width on top, content sits below in a single column, and the title is larger.
 *
 * Client component — uses interactive link behavior.
 */
const ProjectCard: React.FC<Project> = ({
  slug,
  name,
  company,
  website,
  github,
  npm,
  docs,
  period,
  description,
  technologies,
  banner,
  featured,
}) => {
  let githubUsername = "";
  let githubRepository = "";

  if (github) {
    const githubParts = github.replace("https://github.com/", "").split("/");
    githubUsername = githubParts[0] || "";
    githubRepository = githubParts[1] || "";
  }

  const linksRow = (
    <div className="flex flex-wrap gap-4 mt-3 relative z-20">
      {github && (
        <span onClick={(e) => e.stopPropagation()}>
          <GitHubLink
            username={githubUsername}
            repository={githubRepository}
            showText={false}
            iconSize="sm"
          />
        </span>
      )}
      {npm && (
        <span onClick={(e) => e.stopPropagation()}>
          <SocialLink
            href={npm}
            icon={<Package className="h-5 w-5" />}
            label={`npm package: ${name}`}
            showText={false}
            data-umami-event="Project NPM Click"
          />
        </span>
      )}
      {docs && (
        <span onClick={(e) => e.stopPropagation()}>
          <SocialLink
            href={docs}
            icon={<BookOpen className="h-5 w-5" />}
            label={`Docs: ${name}`}
            showText={false}
            data-umami-event="Project Docs Click"
          />
        </span>
      )}
      {website && (
        <span onClick={(e) => e.stopPropagation()}>
          <WebsiteLink url={website} showText={false} iconSize="sm" />
        </span>
      )}
    </div>
  );

  if (featured) {
    return (
      <div className="w-full bg-card text-card-foreground rounded-lg shadow-lg relative group hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 border-l-2 border-l-transparent hover:border-l-primary overflow-hidden">
        <Link
          href={`/projects/${slug}`}
          className="absolute inset-0 z-10"
          aria-label={`View project ${name}`}
        >
          <span className="sr-only">View project {name}</span>
        </Link>

        <div className="relative w-full aspect-[2/1]">
          <Image
            fill
            alt={name}
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            src={banner ? `/assets${banner}` : `/api/project-banner/${slug}`}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-semibold leading-tight">{name}</h3>
          {company && name !== company && (
            <p className="text-sm text-muted-foreground">{company}</p>
          )}
          <p className="text-xs text-muted-foreground mt-0.5">{period}</p>
          <p className="mt-2 text-sm line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.slice(0, 5).map((tech, techIndex) => (
              <Badge key={techIndex} variant="secondary">
                {tech}
              </Badge>
            ))}
            {technologies.length > 5 && (
              <span className="text-xs text-link self-center">
                +{technologies.length - 5} more
              </span>
            )}
          </div>
          {linksRow}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-card text-card-foreground p-4 md:p-6 rounded-lg shadow-lg flex flex-row relative group hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 border-l-2 border-l-transparent hover:border-l-primary">
      <Link
        href={`/projects/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View project ${name}`}
      >
        <span className="sr-only">View project {name}</span>
      </Link>

      <div className="md:pr-4 md:border-r shrink-0">
        <div className="relative w-24 sm:w-32 md:w-[22rem] aspect-[2/1] rounded-md md:rounded-none overflow-hidden">
          <Image
            fill
            alt={name}
            sizes="(min-width: 768px) 352px, (min-width: 640px) 128px, 96px"
            className="object-cover"
            src={banner ? `/assets${banner}` : `/api/project-banner/${slug}`}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
      </div>
      <div className="flex-1 min-w-0 pl-3 md:pl-4">
        <h3 className="text-base sm:text-lg font-semibold leading-tight">{name}</h3>
        {company && name !== company && (
          <p className="text-xs sm:text-sm text-muted-foreground">{company}</p>
        )}
        <p className="text-xs text-muted-foreground mt-0.5">{period}</p>
        <p className="mt-2 text-xs sm:text-sm line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
          {technologies.slice(0, 5).map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="secondary"
              className={techIndex >= 3 ? "hidden sm:inline-flex" : ""}
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 3 && (
            <span className="text-xs text-link self-center sm:hidden">
              +{technologies.length - 3} more
            </span>
          )}
          {technologies.length > 5 && (
            <span className="text-xs text-link self-center hidden sm:inline">
              +{technologies.length - 5} more
            </span>
          )}
        </div>
        {linksRow}
      </div>
    </div>
  );
};

export default ProjectCard;
