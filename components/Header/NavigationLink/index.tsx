"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavigationLinkProps {
  href: string;
  name: string;
  isExternal?: boolean;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  name,
  isExternal,
}) => {
  const isActive = usePathname() === href;
  const linkClass = cn("text-sm font-semibold py-2 inline-block border-b-2", {
    "border-transparent": !isActive,
    "border-primary": isActive,
  });

  return (
    <Link
      href={href}
      className={linkClass}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-umami-event={`Navigate to ${name}`}
    >
      {name}
    </Link>
  );
};

export default NavigationLink;
