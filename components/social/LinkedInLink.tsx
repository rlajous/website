"use client";

import { SocialLink } from "./SocialLink";
import { LinkedinIcon } from "@/components/icons/SocialBrands";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

/**
 * Props for the {@link LinkedInLink} component.
 */
interface LinkedInLinkProps {
  /** LinkedIn profile slug (e.g. "rodrigo-navarro-lajous"). */
  profile: string;
  /** Whether to display the profile slug text. Defaults to true. */
  showText?: boolean;
  /** Icon size token. Defaults to "md". */
  iconSize?: IconSize;
}

/**
 * LinkedIn profile link component.
 * Constructs the URL from the profile slug (e.g. `linkedin.com/in/{profile}`).
 * Composes {@link SocialLink} with the {@link LinkedinIcon} brand mark.
 */
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
      data-umami-event="LinkedIn Link"
      data-umami-id={`linkedin-${profile}`}
    />
  );
}
