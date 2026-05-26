import { opensource, hobby, interview, academic } from "@/services/projects";
import { Project } from "@/domains/Project";
import ProjectsTab from "./components/ProjectTabs";

/** Configuration for a project section on the scrollable projects page. */
interface Section {
  /** Anchor id used for scroll-to and URL hash navigation. */
  id: string;
  /** Section heading text. */
  title: string;
  /** One-line description shown below the heading. */
  subtitle: string;
  /** Projects rendered in this section. */
  projects: Project[];
}

const SECTIONS: Section[] = [
  {
    id: "open-source",
    title: "Open Source",
    subtitle: "Libraries and tooling I've published.",
    projects: opensource,
  },
  {
    id: "side-projects",
    title: "Side Projects",
    subtitle: "Personal experiments and creative builds.",
    projects: hobby,
  },
  {
    id: "interview",
    title: "Interview Project",
    subtitle: "The take-home that turned into my first engineering role.",
    projects: interview,
  },
  {
    id: "academic",
    title: "Academic",
    subtitle:
      "University projects from ITBA — C kernels, a Yacc compiler, a POP3 server, a Kubernetes lab, plus my joint master's thesis with Technikum Wien.",
    projects: academic,
  },
];

/**
 * Projects list page — a single scrollable page with one section per project category.
 * Replaces the former tab-based layout to improve content visibility and SEO.
 *
 * Server component — no client-side state required at the page level.
 */
export default function Page() {
  return (
    <div className="flex flex-col items-center gap-12 py-8 md:py-12">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-primary" />
        <p className="text-base mt-3 text-muted-foreground">
          Open source work, side projects, and early experiments.
        </p>
      </div>
      <div className="w-full max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col gap-16">
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 flex flex-col gap-6">
            <header className="flex flex-col gap-1 border-b border-border pb-3">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-sm text-muted-foreground">{section.subtitle}</p>
            </header>
            <ProjectsTab projects={section.projects} />
          </section>
        ))}
      </div>
    </div>
  );
}
