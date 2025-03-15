"use client";

import Github from "@/components/icons/Github";
import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

interface GitHubLinkProps {
  username: string;
  repository?: string;
  showText?: boolean;
  iconSize?: IconSize;
}

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
      label="GitHub Profile or Repository"
      showText={showText}
      text={displayText}
    />
  );
}
