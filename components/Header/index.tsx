"use client";
import React from "react";
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

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-10 flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <MobileNavigation />
      <Link className="mr-6 hidden lg:flex" href={ROUTES.HOME}>
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
  );
};

export default Header;
