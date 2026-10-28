"use client";

import { SocialLink } from "./SocialLink";
import { XIcon } from "@/components/icons/SocialBrands";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

/**
 * Props for the {@link TwitterLink} component.
 */
interface TwitterLinkProps {
  /** X/Twitter username without the @ prefix (e.g. "rodrigo_codes"). */
  username: string;
  /** Whether to display the @username text. Defaults to true. */
  showText?: boolean;
  /** Icon size token. Defaults to "md". */
  iconSize?: IconSize;
}

/**
 * X (formerly Twitter) profile link component.
 * Constructs the URL from the username (e.g. `x.com/{username}`).
 * Composes {@link SocialLink} with the {@link XIcon} brand mark.
 */
export function TwitterLink({
  username,
  showText = true,
  iconSize = "md",
}: TwitterLinkProps) {
  return (
    <SocialLink
      href={`https://x.com/${username}`}
      icon={<XIcon className={iconSizeClasses[iconSize]} />}
      label="X Profile"
      showText={showText}
      text={`@${username}`}
      data-umami-event="X Link"
    />
  );
}
