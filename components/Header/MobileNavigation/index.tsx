import React from "react";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { HEADER_ROUTES, ROUTES } from "@/constants/routes";
import NavigationLink from "../NavigationLink";
import Logo from "@/components/icons/Logo";
import Link from "next/link";

const MobileNavigation: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden" data-umami-event="Mobile Menu Toggle">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link href={ROUTES.HOME} data-umami-event="Mobile Logo Click">
          <Logo className="h-11" />
        </Link>
        <div className="grid gap-2 py-6">
          {HEADER_ROUTES.map(({ path, name, isExternal }) => (
            <NavigationLink
              key={name}
              href={path}
              name={name}
              isExternal={isExternal}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
