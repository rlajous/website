import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

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
    { name: "Rodrigo Manuel Navarro Lajous", url: "https://navarrolajous.com" },
  ],
  creator: "Rodrigo Manuel Navarro Lajous",
  publisher: "Rodrigo Manuel Navarro Lajous",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://navarrolajous.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rodrigo Manuel Navarro Lajous | Software Engineer & Digital Nomad",
    description:
      "Software Engineer and Digital Nomad, passionate about technology and innovation, building things that make a difference.",
    url: "https://navarrolajous.com",
    siteName: "Rodrigo Manuel Navarro Lajous",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Manuel Navarro Lajous | Software Engineer & Digital Nomad",
    description:
      "Software Engineer and Digital Nomad, passionate about technology and innovation, building things that make a difference.",
    creator: "@rodri_lajous",
    site: "@rodri_lajous",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="713a1de9-3ad6-4aaf-a155-be6023b95c4f"
        data-auto-track="true"
        data-domains="navarrolajous.com,www.navarrolajous.com"
      ></script>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className="min-h-svh grid grid-rows-10 lg:grid-rows-12 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
