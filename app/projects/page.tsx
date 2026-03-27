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
      <div className="text-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-md mt-2">A list of all my projects</p>
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
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
