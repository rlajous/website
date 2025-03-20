"use client";

import { MailIcon } from "lucide-react";
import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

interface EmailLinkProps {
  email: string;
  showText?: boolean;
  iconSize?: IconSize;
}

export function EmailLink({
  email,
  showText = true,
  iconSize = "md",
}: EmailLinkProps) {
  return (
    <SocialLink
      href={`mailto:${email}`}
      icon={<MailIcon className={iconSizeClasses[iconSize]} />}
      label="Send Email"
      showText={showText}
      text={email}
      data-umami-event="Email Link"
    />
  );
}
