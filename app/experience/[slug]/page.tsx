import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { jobs, startups } from "@/services/experience";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowLeft, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ExperiencePageProps {
  params: {
    slug: string;
  };
}

const allExperiences = [...jobs, ...startups];

export async function generateStaticParams() {
  return allExperiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const experience = allExperiences.find((exp) => exp.slug === params.slug);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.position} at ${experience.company} | Rodrigo Manuel Navarro Lajous`,
    description: experience.responsibilities.join(" "),
    keywords: [
      ...experience.technologies,
      experience.company,
      experience.position,
      experience.type === "job" ? "employment" : "startup",
    ],
    openGraph: {
      title: `${experience.position} at ${experience.company}`,
      description: experience.responsibilities.join(" "),
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${experience.position} at ${experience.company}`,
      description: experience.responsibilities.join(" "),
      creator: "@arlequin_eth",
    },
  };
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = allExperiences.find((exp) => exp.slug === params.slug);

  if (!experience) {
    notFound();
  }

  // Determine the correct tab based on type
  const tabParam = experience.type === "job" ? "jobs" : "startups";

  return (
    <div className="flex flex-col items-center gap-8 py-8 md:py-12 px-4">
      {/* Back Button */}
      <div className="w-full max-w-4xl">
        <Link
          href={`/experience?tab=${tabParam}`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to experience</span>
        </Link>
      </div>

      {/* Banner */}
      {experience.banner && (
        <div className="w-full max-w-4xl">
          <Image
            width={1200}
            height={600}
            alt={`${experience.company} banner`}
            className="object-cover w-full rounded-lg"
            src={experience.banner}
            priority
            style={{
              aspectRatio: "2 / 1",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Experience Header */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-bold">{experience.position}</h1>
            <Badge
              variant={experience.type === "job" ? "default" : "secondary"}
              className="text-sm"
            >
              {experience.type === "job" ? "Job" : "Startup"}
            </Badge>
          </div>

          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
            >
              {experience.company}
              <ExternalLink className="w-5 h-5" />
            </a>
          ) : (
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
              {experience.company}
            </h2>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 text-gray-600 dark:text-gray-300">
          <div className="inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{experience.period}</span>
          </div>
          {experience.location && (
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Responsibilities
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
            <ul className="list-disc list-inside space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Technologies & Skills</h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
