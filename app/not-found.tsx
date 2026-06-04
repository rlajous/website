import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HEADER_ROUTES, ROUTES } from "@/constants/routes";
import { Home } from "lucide-react";

/**
 * Custom 404 page shown for unmatched routes.
 *
 * Provides a branded recovery experience with a link home and quick links to the
 * main sections, improving crawl signals and user navigation off dead URLs.
 *
 * Server component — renders static content only.
 */
export default function NotFound() {
  const sections = HEADER_ROUTES.filter((route) => !route.isExternal);

  return (
    <section
      className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center md:px-8"
      aria-labelledby="not-found-heading"
    >
      <p className="text-6xl md:text-7xl font-black text-primary" aria-hidden>
        404
      </p>
      <h1
        id="not-found-heading"
        className="mt-4 text-2xl md:text-3xl font-bold"
      >
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>

      <Button asChild className="mt-8">
        <Link href={ROUTES.HOME} aria-label="Go to the home page">
          <Home className="mr-2 h-4 w-4" />
          Back home
        </Link>
      </Button>

      <nav
        aria-label="Site sections"
        className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
      >
        {sections.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
