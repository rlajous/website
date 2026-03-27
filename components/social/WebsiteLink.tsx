"use client";

import { Globe } from "lucide-react";
import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

/**
 * Props for the {@link WebsiteLink} component.
 */
interface WebsiteLinkProps {
  /** Full URL of the website to link to. */
  url: string;
  /** Whether to display the label text. Defaults to true. */
  showText?: boolean;
  /** Display text shown next to the icon. Defaults to "Website". */
  label?: string;
  /** Icon size token. Defaults to "md". */
  iconSize?: IconSize;
}

/**
 * External website link component with a globe icon.
 * Composes {@link SocialLink} with the lucide-react Globe icon.
 */
export function WebsiteLink({
  url,
  showText = true,
  label = "Website",
  iconSize = "md",
}: WebsiteLinkProps) {
  return (
    <SocialLink
      href={url}
      icon={<Globe className={iconSizeClasses[iconSize]} />}
      label={label}
      showText={showText}
      text={label}
      data-umami-event="Website Link"
    />
  );
}
