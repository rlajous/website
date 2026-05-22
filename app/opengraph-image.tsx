import { ImageResponse } from "next/og";

/**
 * Site-wide OpenGraph image — rendered at build time by Next.js at `/opengraph-image`.
 *
 * Generated dynamically with `next/og` so we don't ship a binary asset and the
 * preview always reflects the latest positioning copy.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
 */
export const alt = "Rodrigo Manuel Navarro Lajous — Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
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
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2a1f15 50%, #1f3a3a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#f59e0b",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Rodrigo Manuel Navarro Lajous
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 32,
          }}
        >
          Product Engineer
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.75)",
            lineHeight: 1.35,
            maxWidth: 1000,
          }}
        >
          Building developer platforms, SDKs, and multi-chain infrastructure
          across Engineering, Product, and Customers.
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
          navarrolajous.com
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
