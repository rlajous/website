import { Metadata } from "next";
import { GitHubLink } from "@/components/social/GitHubLink";
import { LinkedInLink } from "@/components/social/LinkedInLink";
import { TwitterLink } from "@/components/social/TwitterLink";
import { Button } from "@/components/ui/button";
import { Download, Newspaper } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const githubUsername = "rlajous";
  const linkedInProfile = "rodrigo-lajous";
  const twitterUsername = "ro_lajous";
  const substackUrl = process.env.NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL;

  return (
    <section
      className="flex-1 flex flex-col items-center justify-center px-4 pt-10 md:pt-20 pb-8 md:pb-12 text-center md:px-8 lg:px-16 xl:px-32"
      aria-label="Introduction"
    >
      <div className="max-w-3xl w-full py-4 md:py-12 lg:py-16">
        <h1 className="text-2xl md:text-xl lg:text-2xl font-bold">
          Hi, I&apos;m{" "}
          <span className="block md:inline">Rodrigo Manuel Navarro Lajous</span>{" "}
          👋
        </h1>
        <p className="mt-4 text-5xl md:text-5xl lg:text-6xl font-black leading-tight">
          <span className="sr-only">I am a </span>
          Software Engineer &<br className="md:hidden" />
          <span className="md:ml-2">Digital Nomad</span>
        </p>
        <p className="mt-6 text-xl md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
          Passionate about technology and innovation. I love to build things
          that make a difference.
        </p>

        <div
          className="flex items-center justify-center space-x-12 md:space-x-10 mt-10 md:mt-8"
          aria-label="Social media links"
        >
          <GitHubLink
            username={githubUsername}
            showText={false}
            iconSize="lg"
          />
          <LinkedInLink
            profile={linkedInProfile}
            showText={false}
            iconSize="lg"
          />
          <TwitterLink
            username={twitterUsername}
            showText={false}
            iconSize="lg"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Button asChild size="lg" className="w-full sm:w-auto" variant="default">
            <a href="/resume.pdf" download data-umami-event="Download Resume" data-umami-event-type="PDF" aria-label="Download my resume in PDF format">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          {substackUrl && (
            <Button asChild size="lg" className="w-full sm:w-auto" variant="outline">
              <a href={substackUrl} target="_blank" rel="noopener noreferrer" data-umami-event="Subscribe Newsletter" aria-label="Subscribe to my newsletter on Substack">
                <Newspaper className="mr-2 h-4 w-4" />
                Subscribe
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
