import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo Lajous",
  description:
    "Software Engineer, digital nomad, passionate about technology and innovation. I love to build things that make a difference.",
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
        data-domains="navarrolajous.com"
        data-do-not-track="true"
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
