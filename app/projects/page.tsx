"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, Suspense } from "react";
import { freelance, hobby, opensource } from "@/services/projects";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Project } from "@/domains/Project";
import ProjectsTab from "./components/ProjectTabs";

/** Configuration for a project category tab. */
interface Tab {
  /** URL query parameter value for this tab. */
  key: string;
  /** Display label shown on the tab trigger. */
  title: string;
  /** Project entries displayed when this tab is active. */
  projects: Project[];
}

const TABS: Tab[] = [
  { key: "freelance", title: "Freelance", projects: freelance },
  { key: "hobby", title: "Hobby", projects: hobby },
  { key: "opensource", title: "Open Source", projects: opensource },
];

const VALID_TAB_KEYS = TABS.map((tab) => tab.key);
const DEFAULT_TAB = "freelance";

/**
 * Client component managing tab state via URL search params for shareable/bookmarkable tab selection.
 * Renders Freelance, Hobby, and Open Source tabs using the project data from the service layer.
 */
function ProjectsContent() {
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
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-primary" />
        <p className="text-md mt-3 text-muted-foreground">A list of all my projects</p>
      </div>
      <Tabs
        className="w-full max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col"
        value={currentTab}
        onValueChange={handleTabChange}
      >
        <TabsList className="flex p-1 space-x-1 rounded-2xl m-auto mb-6">
          {TABS.map(({ key, title }) => (
            <TabsTrigger key={key} className="flex-1 rounded-xl" value={key}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map(({ key, projects }) => (
          <TabsContent key={key} value={key}>
            <ProjectsTab projects={projects} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

/**
 * Projects list page wrapping {@link ProjectsContent} in Suspense
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
      <ProjectsContent />
    </Suspense>
  );
}
