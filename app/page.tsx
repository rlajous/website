import { Button } from "@/components/ui/button";
import { GitHubLink } from "@/components/social/GitHubLink";
import { LinkedInLink } from "@/components/social/LinkedInLink";

export default function Home() {
  const githubUsername = "rlajous";
  const linkedInProfile = "rodrigo-lajous";

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center md:px-8 lg:px-16 xl:px-32 row-span-8 lg:row-span-11 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
        Hi, I&apos;m Rodrigo 👋
      </h1>
      <p className="mt-2 text-4xl md:text-5xl lg:text-6xl font-black">
        Engineering the code <br className="hidden lg:inline" />
        behind innovation, solutions
        <br className="hidden lg:inline" /> and growth.
      </p>
      <p className="mt-4 text-base md:text-lg lg:text-xl">
        A Software Engineer and Master of Science in Engineering.
        <br className="hidden md:inline" />
        With experience in the design, installation, testing,
        <br className="hidden md:inline" /> and maintenance of web systems.
      </p>

      <div className="flex items-center space-x-8 mt-6">
        <GitHubLink username={githubUsername} showText={false} iconSize="lg" />
        <LinkedInLink
          profile={linkedInProfile}
          showText={false}
          iconSize="lg"
        />
      </div>

      <Button asChild className="mt-8" variant="default">
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </Button>
    </div>
  );
}
