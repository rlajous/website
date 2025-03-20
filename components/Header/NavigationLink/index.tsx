"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigationLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  href: string;
  name: string;
  isExternal?: boolean;
}

const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ href, name, isExternal, ...props }, ref) => {
    const isActive = usePathname() === href;
    const linkClass = cn("text-sm font-semibold py-2 inline-block border-b-2", {
      "border-transparent": !isActive,
      "border-primary": isActive,
    });

    return (
      <Link
        ref={ref}
        href={href}
        className={linkClass}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        data-umami-event={`Navigate to ${name}`}
        {...props}
      >
        {name}
      </Link>
    );
  }
);

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
