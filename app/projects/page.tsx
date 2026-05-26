import { opensource, hobby, interview, academic } from "@/services/projects";
import { Project } from "@/domains/Project";
import ProjectsView from "./components/ProjectsView";

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
      <ProjectsView sections={SECTIONS} />
    </div>
  );
}
