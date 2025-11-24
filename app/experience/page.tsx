"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { jobs, startups } from "@/services/experience";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { Experience } from "@/domains/Experience";
import ExperiencesTab from "./components/ExperiencesTab";

interface Tab {
  key: string;
  title: string;
  experiences: Experience[];
}

const TABS: Tab[] = [
  { key: "jobs", title: "Jobs", experiences: jobs },
  { key: "startups", title: "Startups", experiences: startups },
];

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTab = searchParams.get("tab") || "jobs";

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
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="text-md mt-2">A timeline of my professional journey</p>
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
