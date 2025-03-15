"use client";

import { LinkedinIcon } from "lucide-react";
import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

interface LinkedInLinkProps {
  profile: string;
  showText?: boolean;
  iconSize?: IconSize;
}

export function LinkedInLink({
  profile,
  showText = true,
  iconSize = "md",
}: LinkedInLinkProps) {
  return (
    <SocialLink
      href={`https://www.linkedin.com/in/${profile}`}
      icon={<LinkedinIcon className={iconSizeClasses[iconSize]} />}
      label="LinkedIn Profile"
      showText={showText}
      text={`/${profile}`}
    />
  );
}
