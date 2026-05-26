import { ImageResponse } from "next/og";
import { hobby, opensource, academic, interview } from "@/services/projects";
import type { Project } from "@/domains/Project";

/**
 * Dynamic project banner generator.
 *
 * Renders a 1200x600 PNG per slug using `next/og` for any project whose
 * `banner` field is empty. The hue rotates per-slug so each card is
 * visually distinct while staying in the site's amber-on-dark palette.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/image-response
 */

/** Use Node.js runtime so `next/og` can access the file system for font loading. */
export const runtime = "nodejs";

const ALL_PROJECTS: Project[] = [...hobby, ...opensource, ...academic, ...interview];

const TYPE_LABEL: Record<Project["type"], string> = {
  opensource: "Open Source",
  hobby: "Side Projects",
  academic: "Academic",
  interview: "Interview Project",
};

/**
 * Deterministic hue value derived from a slug string using the djb2 hash algorithm.
 * Returns a value in the range [0, 359] for use in HSL color generation.
 *
 * @param slug - The project slug to hash
 * @returns A hue angle in degrees (0–359)
 */
function hueFromSlug(slug: string): number {
  let h = 5381;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) + h + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % 360;
}

/** Route context type for Next.js dynamic route handlers with async params (Next 15+). */
interface RouteContext {
  params: Promise<{ slug: string }>;
}

/**
 * GET handler — generates a 1200×600 OG image for the given project slug.
 *
 * @param _req - The incoming request (unused)
 * @param context - Route context containing the dynamic `slug` param
 * @returns A 1200×600 PNG `ImageResponse`, or a 404 plain-text response for unknown slugs
 */
export async function GET(_req: Request, { params }: RouteContext) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return new Response("Not found", { status: 404 });
  }

  const hue = hueFromSlug(slug);
  const typeLabel = TYPE_LABEL[project.type];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: `linear-gradient(135deg, #1a1a1a 0%, hsl(${hue} 35% 18%) 50%, #1f1410 100%)`,
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 80,
            fontSize: 24,
            color: "#f5a60f",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {typeLabel}
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 1040,
            marginTop: 32,
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255, 255, 255, 0.75)",
            marginTop: 16,
          }}
        >
          {project.company}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 24,
            color: "rgba(255, 255, 255, 0.5)",
            letterSpacing: 2,
          }}
        >
          {project.period}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            width: 64,
            height: 4,
            background: "#f5a60f",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
