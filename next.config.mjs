/**
 * Content Security Policy. Next.js injects inline bootstrap scripts and styles, so
 * 'unsafe-inline' stays until we move to nonces. External origins: Umami analytics
 * (script + beacon), YouTube embeds on talk pages, and Vercel's preview toolbar.
 * Talk slides are same-origin PDFs in an iframe, hence frame-ancestors 'self'.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cloud.umami.is https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://cloud.umami.is https://api-gateway.umami.dev https://vercel.live wss://ws-us3.pusher.com",
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://vercel.live",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Baseline security headers for every route. The CSP is production-only because
 * `next dev` needs eval for Fast Refresh. HSTS is already set by Vercel.
 */
const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY }]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      {
        source: "/projects/quipu-front",
        destination: "/projects/quipu-token-market",
        permanent: true,
      },
      {
        source: "/projects/quipu-back",
        destination: "/projects/quipu-token-market",
        permanent: true,
      },
      {
        source: "/projects/quipu-angular-rapid-test",
        destination: "/projects/quipu-token-market",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
