"use client";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import Logo from "../icons/Logo";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import styles from "./Header.module.css";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/">
            <Logo className={cn("h-11", styles.logo)} />
            <span className="sr-only">2</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              rel="noopener noreferrer"
              target="_blank"
              href="/resume.pdf"
            >
              Resume
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="/">
        <Logo className={cn("h-11", styles.logo)} />
        <span className="sr-only">2</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuLink asChild>
            <Link
              className="text-sm font-semibold"
              href="/resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center gap-4">
        <ModeToggle />
      </div>
    </header>
  );
}
