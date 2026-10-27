import { jobs, startups, freelance } from "@/services/experience";
import { Experience } from "@/domains/Experience";
import UrlTabs from "@/components/UrlTabs";
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
  { key: "freelance", title: "Freelance", experiences: freelance },
];

const DEFAULT_TAB = "jobs";

/**
 * Experience list page. Server component so every tab's cards are in the initial
 * HTML for crawlers; only the tab switcher ({@link UrlTabs}) runs on the client.
 *
 * Reads `?tab=` to pick the initially selected tab (detail pages link back with it).
 *
 * @param props.searchParams - Query parameters; `tab` selects the initial tab.
 */
export default async function Page({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const { tab } = await searchParams;
  const currentTab = TABS.some(({ key }) => key === tab) ? tab! : DEFAULT_TAB;

  return (
    <div className="flex flex-col items-center gap-6 py-8 md:py-12">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold">Experience</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-primary" />
        <p className="text-base mt-3 text-muted-foreground">A timeline of my professional journey</p>
      </div>
      <UrlTabs
        key={currentTab}
        className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
        defaultTab={currentTab}
        tabs={TABS.map(({ key, title, experiences }) => ({
          key,
          title,
          panel: <ExperiencesTab experiences={experiences} />,
        }))}
      />
    </div>
  );
}
