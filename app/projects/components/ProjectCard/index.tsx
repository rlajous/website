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
  logos,
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
        className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        aria-label={`View project ${name}`}
      >
        <span className="sr-only">View project {name}</span>
      </Link>

      <div className="md:pr-4 md:border-r md:block md:flex-shrink-0">
        <Image
          width={400}
          height={200}
          alt={name}
          className="object-cover w-full md:w-[280px] md:h-[140px] rounded-md"
          src={banner ? `/assets${banner}` : `/api/project-banner/${slug}`}
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{
            aspectRatio: "2 / 1",
          }}
        />
      </div>
      <div className="md:w-3/4 pt-4 md:pt-0 md:pl-4 h-full">
        <div className="flex items-start gap-3">
          {logos && logos.length > 0 && (
            <div className="shrink-0 mt-0.5 flex items-center gap-2">
              {logos.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-md object-contain bg-white dark:bg-white/95 border border-border/60 p-1"
                />
              ))}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold leading-tight">{name}</h2>
            {company && name !== company && (
              <p className="text-sm text-muted-foreground">{company}</p>
            )}
            <p className="text-xs text-muted-foreground mt-0.5">{period}</p>
          </div>
        </div>
        <p className="mt-2 text-sm line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.slice(0, 5).map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary">
              {tech}
            </Badge>
          ))}
          {technologies.length > 5 && (
            <span className="text-xs text-muted-foreground self-center">
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
      </div>
    </div>
  );
};

export default ProjectCard;
