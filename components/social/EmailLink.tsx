"use client";

import { MailIcon } from "lucide-react";
import { SocialLink } from "./SocialLink";
import { IconSize, iconSizeClasses } from "@/utils/iconUtils";

/**
 * Props for the {@link EmailLink} component.
 */
interface EmailLinkProps {
  /** Email address to link to via `mailto:`. */
  email: string;
  /** Whether to display the email address text. Defaults to true. */
  showText?: boolean;
  /** Icon size token. Defaults to "md". */
  iconSize?: IconSize;
}

/**
 * Email link component that opens the user's mail client via `mailto:`.
 * Composes {@link SocialLink} with a mail icon from lucide-react.
 */
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
