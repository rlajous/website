import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import JsonLd from "@/components/JsonLd";
import { getWebsiteSchema } from "@/lib/schema";
import { SITE_URL } from "@/constants/routes";
import { DISPLAY_NAME, FULL_NAME, HEADLINE, HEADLINE_SUMMARY } from "@/constants/profile";

const inter = Inter({ subsets: ["latin"] });

/** Default page title: display name plus the shared headline. */
const DEFAULT_TITLE = `${DISPLAY_NAME} | ${HEADLINE}`;

/** Default description used for the page, OpenGraph and Twitter cards. */
const DEFAULT_DESCRIPTION = `${DISPLAY_NAME} (${FULL_NAME}), ${HEADLINE}, ${HEADLINE_SUMMARY}`;

/**
 * Site-wide default metadata including OpenGraph, Twitter cards, SEO keywords, and canonical base URL.
 */
export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Rodrigo Lajous",
    "Lajous",
    "Rodrigo Manuel Navarro Lajous",
    "Rodrigo Navarro",
    "Product Engineer",
    "Product Management",
    "Webacy",
    "Developer Platform",
    "SDK",
    "DevRel",
    "Web3",
    "TypeScript",
    "Next.js",
  ],
  authors: [
    { name: DISPLAY_NAME, url: SITE_URL },
  ],
  creator: DISPLAY_NAME,
  publisher: DISPLAY_NAME,
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: DISPLAY_NAME,
    locale: "en_US",
    type: "website",
    // images intentionally omitted — populated automatically by app/opengraph-image.tsx (1200×630).
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@ro_lajous",
    site: "@ro_lajous",
    // images intentionally omitted — populated automatically by app/twitter-image.tsx (re-exports opengraph-image).
  },
};

/**
 * Root layout providing the HTML structure, Inter font, theme provider, header,
 * footer, toaster, Schema.org scripts, and Umami analytics.
 *
 * Wraps all pages and is rendered on every route.
 *
 * @param props.children - The page content rendered within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="713a1de9-3ad6-4aaf-a155-be6023b95c4f"
          data-auto-track="true"
          data-domains="navarrolajous.com,www.navarrolajous.com"
          data-cache="true"
          data-track-outbound="true"
          data-disable-adblocker="true"
        ></script>
      </head>
      <body className={inter.className}>
        <JsonLd data={getWebsiteSchema()} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-ring focus:rounded-md"
          >
            Skip to main content
          </a>
          <div className="flex flex-col min-h-svh">
            <Header />
            <main id="main-content" className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
