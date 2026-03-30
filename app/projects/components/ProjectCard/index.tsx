"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project } from "@/domains/Project";
import { GitHubLink } from "@/components/social/GitHubLink";
import { WebsiteLink } from "@/components/social/WebsiteLink";
import Image from "next/image";
import { blurDataURL } from "@/lib/utils";

/**
 * Card displaying a project summary with banner image, description, tech badges,
 * and optional GitHub/website links.
 *
 * The entire card links to `/projects/[slug]`. GitHub and website links use `z-20`
 * to escape the card's overlay link and remain independently clickable.
 * Parses the GitHub username and repository from the full URL.
 *
 * Client component — uses interactive link behavior.
 */
const ProjectCard: React.FC<Project> = ({
  slug,
  name,
  company,
  website,
  github,
  period,
  description,
  technologies,
  banner,
}) => {
  let githubUsername = "";
  let githubRepository = "";

  if (github) {
    const githubParts = github.replace("https://github.com/", "").split("/");
    githubUsername = githubParts[0] || "";
    githubRepository = githubParts[1] || "";
  }

  return (
    <div className="w-full bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col md:flex-row relative group hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 border-l-2 border-l-transparent hover:border-l-primary">
      <Link
        href={`/projects/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View project ${name}`}
      >
        <span className="sr-only">View project {name}</span>
      </Link>

      <div className="md:pr-4 md:border-r md:block">
        <Image
          width={300}
          height={150}
          alt={name}
          className="object-cover w-full md:w-auto md:h-44"
          src={`/assets${banner}`}
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{
            aspectRatio: "2 / 1",
          }}
        />
      </div>
      <div className="md:w-3/4 pt-4 md:pt-0 md:pl-4 h-full">
        <h3 className="text-lg font-semibold">
          {name} {company && <>· {company}</>}
        </h3>
        <p className="text-muted-foreground">{period}</p>
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
          {website && (
            <span onClick={(e) => e.stopPropagation()}>
              <WebsiteLink url={website} showText={false} iconSize="sm" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
