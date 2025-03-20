import { Button } from "@/components/ui/button";
import { GitHubLink } from "@/components/social/GitHubLink";
import { LinkedInLink } from "@/components/social/LinkedInLink";
import Script from "next/script";

export default function Home() {
  const githubUsername = "rlajous";
  const linkedInProfile = "rodrigo-lajous";

  return (
    <section
      className="flex flex-col items-center justify-center px-4 text-center md:px-8 lg:px-16 xl:px-32 row-span-8 lg:row-span-11"
      aria-label="Introduction"
    >
      <Script id="schema-person" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rodrigo Manuel Navarro Lajous",
            "url": "https://navarrolajous.com",
            "jobTitle": "Software Engineer",
            "sameAs": [
              "https://github.com/${githubUsername}",
              "https://www.linkedin.com/in/${linkedInProfile}"
            ],
            "description": "Software Engineer and Digital Nomad, passionate about technology and innovation."
          }
        `}
      </Script>
      <h1 className="text-sm md:text-lg lg:text-xl font-bold">
        Hi, I&apos;m{" "}
        <span className="block md:inline">Rodrigo Manuel Navarro Lajous</span>{" "}
        👋
      </h1>
      <p className="mt-2 text-4xl md:text-5xl lg:text-6xl font-black">
        <span className="sr-only">I am a </span>
        Software Engineer & <br className="hidden lg:inline" />
        Digital Nomad
      </p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
        Passionate about technology and innovation.
        <br className="hidden md:inline" />I love to build things that make a
        difference.
      </p>

      <div
        className="flex items-center space-x-8 mt-6"
        aria-label="Social media links"
      >
        <GitHubLink username={githubUsername} showText={false} iconSize="lg" />
        <LinkedInLink
          profile={linkedInProfile}
          showText={false}
          iconSize="lg"
        />
      </div>

      <Button asChild className="mt-8" variant="default">
        <a
          href="/resume.pdf"
          download
          data-umami-event="Download Resume"
          data-umami-event-type="PDF"
          aria-label="Download my resume in PDF format"
        >
          Download Resume
        </a>
      </Button>
    </section>
  );
}
