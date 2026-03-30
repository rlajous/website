import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import SchemaOrgScripts from "@/components/SchemaOrgScripts";
import { SITE_URL } from "@/constants/routes";

const inter = Inter({ subsets: ["latin"] });

/**
 * Site-wide default metadata including OpenGraph, Twitter cards, SEO keywords, and canonical base URL.
 */
export const metadata: Metadata = {
  title: "Rodrigo Manuel Navarro Lajous | Software Engineer & Digital Nomad",
  description:
    "Rodrigo Manuel Navarro Lajous is a Software Engineer and Digital Nomad, passionate about technology and innovation, building things that make a difference.",
  keywords: [
    "Rodrigo Manuel Navarro Lajous",
    "Rodrigo Lajous",
    "Rodrigo Navarro",
    "Software Engineer",
    "Digital Nomad",
    "Web Developer",
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Next.js",
  ],
  authors: [
    { name: "Rodrigo Manuel Navarro Lajous", url: SITE_URL },
  ],
  creator: "Rodrigo Manuel Navarro Lajous",
  publisher: "Rodrigo Manuel Navarro Lajous",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Rodrigo Manuel Navarro Lajous | Software Engineer & Digital Nomad",
    description:
      "Software Engineer and Digital Nomad, passionate about technology and innovation, building things that make a difference.",
    url: SITE_URL,
    siteName: "Rodrigo Manuel Navarro Lajous",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Manuel Navarro Lajous | Software Engineer & Digital Nomad",
    description:
      "Software Engineer and Digital Nomad, passionate about technology and innovation, building things that make a difference.",
    creator: "@ro_lajous",
    site: "@ro_lajous",
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
        <SchemaOrgScripts />
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
