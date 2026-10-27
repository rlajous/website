import { hobby, opensource, earlyWork } from "@/services/projects";
import { Project } from "@/domains/Project";
import UrlTabs from "@/components/UrlTabs";
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
  { key: "opensource", title: "Open Source", projects: opensource },
  { key: "hobby", title: "Side Projects", projects: hobby },
  { key: "early-work", title: "Early Work", projects: earlyWork },
];

const DEFAULT_TAB = "opensource";

/**
 * Projects list page. Server component so every tab's cards are in the initial
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
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-primary" />
        <p className="text-base mt-3 text-muted-foreground">Open source work, side projects, and early experiments.</p>
      </div>
      <UrlTabs
        className="w-full max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
        listClassName="mb-6"
        defaultTab={currentTab}
        tabs={TABS.map(({ key, title, projects }) => ({
          key,
          title,
          // Only the visible tab's first banner is the LCP candidate, so only it loads eagerly.
          panel: <ProjectsTab projects={projects} priority={key === currentTab} />,
        }))}
      />
    </div>
  );
}
