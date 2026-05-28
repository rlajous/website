import { ImageResponse } from "next/og";
import { hobby, opensource, earlyWork } from "@/services/projects";
import type { Project } from "@/domains/Project";
import { SITE_URL } from "@/constants/routes";

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

const ALL_PROJECTS: Project[] = [...hobby, ...opensource, ...earlyWork];

const TYPE_LABEL: Record<Project["type"], string> = {
  opensource: "Open Source",
  hobby: "Side Projects",
  "early-work": "Early Work",
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
  const origin = new URL(SITE_URL).origin;
  const logos =
    project.logos
      ?.filter((path) => path.startsWith("/"))
      .map((path) => new URL(path, origin).toString()) ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
          background: `radial-gradient(ellipse at center, hsl(${hue} 40% 22%) 0%, #1a1410 70%, #100a08 100%)`,
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#f5a60f",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {typeLabel}
        </div>
        <div
          style={{
            display: "flex",
            width: 80,
            height: 4,
            background: "#f5a60f",
            marginTop: 28,
            marginBottom: 28,
            borderRadius: 2,
          }}
        />
        {logos.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 48,
              marginBottom: 32,
            }}
          >
            {logos.map((src, i) => (
              <div
                key={src}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 48,
                }}
              >
                {i > 0 && (
                  <div
                    style={{
                      display: "flex",
                      fontSize: 48,
                      color: "rgba(255, 255, 255, 0.35)",
                      fontWeight: 300,
                    }}
                  >
                    ×
                  </div>
                )}
                <img
                  src={src}
                  alt=""
                  width={120}
                  height={120}
                  style={{
                    objectFit: "contain",
                    background: "rgba(255, 255, 255, 0.95)",
                    borderRadius: 16,
                    padding: 16,
                  }}
                />
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -3,
            maxWidth: 1000,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.7)",
            marginTop: 24,
            fontWeight: 500,
          }}
        >
          {project.company} · {project.period}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
