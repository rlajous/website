"use client";

import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface TwitterLinkProps {
  username: string;
  showText?: boolean;
  iconSize?: IconSize;
}

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
