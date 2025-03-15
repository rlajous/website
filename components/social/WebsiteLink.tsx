"use client";

import { Globe } from "lucide-react";
import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

interface WebsiteLinkProps {
  url: string;
  showText?: boolean;
  label?: string;
  iconSize?: IconSize;
}

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
      label="Project Website"
      showText={showText}
      text={label}
    />
  );
}
