"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProjectsTab from "../ProjectTabs";
import type { Project } from "@/domains/Project";
import { cn } from "@/lib/utils";

/** Single section of the projects page passed in from the server component. */
export interface ProjectSection {
  id: string;
  title: string;
  subtitle: string;
  projects: Project[];
}

interface ProjectsViewProps {
  sections: ProjectSection[];
}

/**
 * Lower-cases and trims input, splits on whitespace.
 * Empty queries return an empty token array, signaling "match everything".
 */
function tokenize(query: string): string[] {
  const cleaned = query.toLowerCase().trim();
  if (!cleaned) return [];
  return cleaned.split(/\s+/).filter(Boolean);
}

/** True if every token is a substring of the searchable haystack. */
function matchesQuery(project: Project, tokens: string[]): boolean {
  if (tokens.length === 0) return true;
  const haystack = [
    project.name,
    project.company,
    project.description,
    project.detailedDescription ?? "",
    ...project.technologies,
  ]
    .join(" ")
    .toLowerCase();
  return tokens.every((t) => haystack.includes(t));
}

/**
 * Client wrapper for the /projects page. Owns the live search query, filters
 * each section's projects in place, drives the sticky toolbar (search input
 * plus section jump links), and tracks the active section via
 * IntersectionObserver to underline the current entry in the nav.
 */
export default function ProjectsView({ sections }: ProjectsViewProps) {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [shortcutHint, setShortcutHint] = useState("⌘K");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isMac = navigator.platform.toLowerCase().includes("mac");
    setShortcutHint(isMac ? "⌘K" : "Ctrl+K");
  }, []);

  const tokens = useMemo(() => tokenize(query), [query]);

  const filtered = useMemo(
    () =>
      sections.map((s) => ({
        ...s,
        projects: s.projects.filter((p) => matchesQuery(p, tokens)),
      })),
    [sections, tokens],
  );

  const visible = filtered.filter((s) => s.projects.length > 0);
  const totalMatches = visible.reduce((sum, s) => sum + s.projects.length, 0);
  const isFiltering = tokens.length > 0;

  /** Focus the search input. Used by the global keybinding handler. */
  const focusSearch = useCallback(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  /** Global keyboard listeners — "/" and "⌘K" / "Ctrl+K" focus the input. */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        focusSearch();
        return;
      }
      if (e.key === "/" && !isTyping) {
        e.preventDefault();
        focusSearch();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [focusSearch]);

  /**
   * Scroll-spy: highlight whichever section is roughly in the upper third
   * of the viewport. Re-runs whenever the visible sections change so we
   * don't observe sections that have been filtered out.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio.
        const candidates = entries.filter((e) => e.isIntersecting);
        if (candidates.length === 0) return;
        candidates.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveId(candidates[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    visible.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [visible]);

  const handleJumpTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const clear = useCallback(() => {
    setQuery("");
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col gap-12">
      <div className="sticky top-16 z-30 -mx-4 px-4 pb-2 pt-3 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="relative">
          <Search
            aria-hidden
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
          />
          <Input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tech, year…"
            className="pl-9 pr-20"
            aria-label="Search projects"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex items-center gap-1 rounded border border-border px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
            {shortcutHint}
          </kbd>
          {query && (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={clear}
              aria-label="Clear search"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 md:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <nav
          aria-label="Project sections"
          className="mt-2 flex items-center gap-1 overflow-x-auto whitespace-nowrap text-sm"
        >
          {filtered.map((s, i) => {
            const hidden = s.projects.length === 0;
            const isActive = !hidden && s.id === activeId;
            return (
              <span key={s.id} className="flex items-center">
                {i > 0 && <span className="text-muted-foreground/40 mx-2">·</span>}
                <button
                  type="button"
                  onClick={() => handleJumpTo(s.id)}
                  disabled={hidden}
                  className={cn(
                    "py-1 transition-colors",
                    hidden && "text-muted-foreground/40 cursor-not-allowed",
                    !hidden && !isActive && "text-muted-foreground hover:text-foreground",
                    isActive && "text-foreground border-b-2 border-primary",
                  )}
                >
                  {s.title}
                  {isFiltering && !hidden && (
                    <span className="ml-1 text-xs text-muted-foreground">({s.projects.length})</span>
                  )}
                </button>
              </span>
            );
          })}
        </nav>
      </div>

      {totalMatches === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border py-12 text-center">
          <p className="text-sm text-muted-foreground">
            No projects match <span className="font-medium text-foreground">{query}</span>.
          </p>
          <Button type="button" variant="outline" size="sm" onClick={clear}>
            Clear search
          </Button>
        </div>
      ) : (
        filtered.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={cn(
              "scroll-mt-32 flex flex-col gap-6",
              section.projects.length === 0 && "hidden",
            )}
          >
            <header className="flex flex-col gap-1 border-b border-border pb-3">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-sm text-muted-foreground">{section.subtitle}</p>
            </header>
            <ProjectsTab projects={section.projects} />
          </section>
        ))
      )}
    </div>
  );
}
