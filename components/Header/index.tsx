"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "../icons/Logo";
import NavigationLink from "./NavigationLink";
import MobileNavigation from "./MobileNavigation";
import { HEADER_ROUTES, ROUTES } from "@/constants/routes";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = observerRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel is not intersecting, we're scrolled down
        setScrolled(!entry.isIntersecting);
      },
      {
        // Small rootMargin means we detect the intersection earlier
        rootMargin: "-10px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, []);

  return (
    <>
      {/* Invisible element at the top of the page that we observe */}
      <div ref={observerRef} className="absolute top-0 h-[1px] w-full" />

      <header
        className={cn(
          "sticky top-0 z-10 flex h-20 w-full shrink-0 items-center px-4 md:px-6 transition-all duration-200",
          scrolled && "bg-background/80 backdrop-blur-md shadow-sm"
        )}
      >
        <MobileNavigation />
        <Link
          className="mr-6 hidden lg:flex"
          href={ROUTES.HOME}
          data-umami-event="Logo Click"
        >
          <Logo className="h-11" />
        </Link>
        <div className="flex ml-auto items-center gap-4">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex space-x-4">
              {HEADER_ROUTES.map(({ path, name, isExternal }) => (
                <NavigationMenuLink key={path} asChild>
                  <NavigationLink
                    key={name}
                    href={path}
                    name={name}
                    isExternal={isExternal}
                  />
                </NavigationMenuLink>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
        </div>
      </header>
    </>
  );
};

export default Header;
