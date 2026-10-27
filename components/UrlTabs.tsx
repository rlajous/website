"use client";

import { ReactNode, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

/** One tab: its `?tab=` key, trigger label and server-rendered panel. */
export interface UrlTab {
  /** URL query parameter value for this tab. */
  key: string;
  /** Display label shown on the tab trigger. */
  title: string;
  /** Panel content, rendered on the server and passed in as a React node. */
  panel: ReactNode;
}

/**
 * Props for the {@link UrlTabs} component.
 */
interface UrlTabsProps {
  /** Tabs in display order. */
  tabs: UrlTab[];
  /** Key of the tab selected on first render (resolved from `?tab=` by the page). */
  defaultTab: string;
  /** Extra classes for the tabs root. */
  className?: string;
  /** Extra classes for the trigger list. */
  listClassName?: string;
}

/**
 * Tab switcher that keeps every panel in the server HTML and mirrors the
 * selected tab in `?tab=` so the URL stays shareable.
 *
 * Panels use `forceMount` and are hidden with CSS when inactive: Radix unmounts
 * inactive panels by default, which would leave crawlers with only one tab's
 * content. The URL is updated with `history.replaceState`, which the App Router
 * picks up without a server round trip.
 */
export default function UrlTabs({ tabs, defaultTab, className, listClassName }: UrlTabsProps) {
  const [current, setCurrent] = useState(defaultTab);

  const handleTabChange = (value: string) => {
    setCurrent(value);
    const params = new URLSearchParams(window.location.search);
    params.set("tab", value);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  return (
    <Tabs className={cn("flex flex-col", className)} value={current} onValueChange={handleTabChange}>
      <TabsList className={cn("flex p-1 space-x-1 rounded-2xl m-auto", listClassName)}>
        {tabs.map(({ key, title }) => (
          <TabsTrigger key={key} className="flex-1 rounded-xl" value={key}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ key, panel }) => (
        <TabsContent key={key} value={key} forceMount className="data-[state=inactive]:hidden">
          {panel}
        </TabsContent>
      ))}
    </Tabs>
  );
}
