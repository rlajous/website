"use client";

import Github from "@/components/icons/Github";
import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

/**
 * Props for the {@link GitHubLink} component.
 */
interface GitHubLinkProps {
  /** GitHub username (e.g. "rlajous"). */
  username: string;
  /** Optional repository name. When provided, links to the repo instead of the profile. */
  repository?: string;
  /** Whether to display the username/repo text. Defaults to true. */
  showText?: boolean;
  /** Icon size token. Defaults to "md". */
  iconSize?: IconSize;
}

/**
 * GitHub profile or repository link component.
 * Constructs the URL from username and optional repository name.
 * Composes {@link SocialLink} with a custom GitHub SVG icon.
 */
export function GitHubLink({
  username,
  repository,
  showText = true,
  iconSize = "md",
}: GitHubLinkProps) {
  const href = repository
    ? `https://github.com/${username}/${repository}`
    : `https://github.com/${username}`;

  const displayText = repository
    ? `/${username}/${repository}`
    : `/${username}`;

  return (
    <SocialLink
      href={href}
      icon={<Github className={iconSizeClasses[iconSize]} />}
      label={`GitHub: ${username}`}
      showText={showText}
      text={displayText}
      data-umami-event="GitHub Link"
      data-umami-id={`github-${username}`}
    />
  );
}
