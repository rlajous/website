"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, Suspense } from "react";
import { jobs, startups } from "@/services/experience";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Experience } from "@/domains/Experience";
import ExperiencesTab from "./components/ExperiencesTab";

/** Configuration for an experience category tab. */
interface Tab {
  /** URL query parameter value for this tab. */
  key: string;
  /** Display label shown on the tab trigger. */
  title: string;
  /** Experience entries displayed when this tab is active. */
  experiences: Experience[];
}

const TABS: Tab[] = [
  { key: "jobs", title: "Jobs", experiences: jobs },
  { key: "startups", title: "Startups", experiences: startups },
];

const VALID_TAB_KEYS = TABS.map((tab) => tab.key);
const DEFAULT_TAB = "jobs";

/**
 * Client component managing tab state via URL search params for shareable/bookmarkable tab selection.
 * Renders Jobs and Startups tabs using the experience data from the service layer.
 */
function ExperienceContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get("tab");
  const currentTab = tabParam && VALID_TAB_KEYS.includes(tabParam) ? tabParam : DEFAULT_TAB;

  const handleTabChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", value);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  return (
    <div className="flex flex-col items-center gap-6 py-8 md:py-12">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold">Experience</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-primary" />
        <p className="text-base mt-3 text-muted-foreground">A timeline of my professional journey</p>
      </div>
      <Tabs
        className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col"
        value={currentTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="flex p-1 space-x-1 rounded-2xl m-auto">
          {TABS.map(({ key, title }) => (
            <TabsTrigger key={key} className="flex-1 rounded-xl" value={key}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map(({ key, experiences }) => (
          <TabsContent key={key} value={key}>
            <ExperiencesTab experiences={experiences} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

/**
 * Experience list page wrapping {@link ExperienceContent} in Suspense
 * for `useSearchParams` compatibility.
 */
export default function Page() {
  return (
    <Suspense fallback={
        <div className="flex flex-col items-center gap-6 py-8 md:py-12">
          <div className="animate-pulse space-y-4 w-full max-w-3xl px-4">
            <div className="h-8 bg-muted rounded w-1/3 mx-auto" />
            <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
            <div className="h-10 bg-muted rounded w-2/3 mx-auto mt-4" />
            <div className="space-y-4 mt-6">
              <div className="h-36 bg-muted rounded" />
              <div className="h-36 bg-muted rounded" />
              <div className="h-36 bg-muted rounded" />
            </div>
          </div>
        </div>
      }>
      <ExperienceContent />
    </Suspense>
  );
}
