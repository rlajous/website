import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { freelance, hobby, opensource } from "@/services/projects";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const allProjects = [...freelance, ...hobby, ...opensource];

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} - ${project.company} | Rodrigo Manuel Navarro Lajous`,
    description: project.detailedDescription || project.description,
    keywords: [...project.technologies, project.name, project.company, project.type],
    openGraph: {
      title: `${project.name} - ${project.company}`,
      description: project.detailedDescription || project.description,
      type: "website",
      images: project.banner ? [`https://navarrolajous.com/assets${project.banner}`] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} - ${project.company}`,
      description: project.detailedDescription || project.description,
      creator: "@arlequin_eth",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "freelance":
        return "Freelance";
      case "hobby":
        return "Hobby";
      case "opensource":
        return "Open Source";
      default:
        return type;
    }
  };

  const getTypeColor = (
    type: string
  ): "default" | "secondary" | "outline" | "destructive" => {
    switch (type) {
      case "freelance":
        return "default";
      case "hobby":
        return "secondary";
      case "opensource":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 py-8 md:py-12 px-4">
      {/* Back Button */}
      <div className="w-full max-w-4xl">
        <Link
          href={`/projects?tab=${project.type}`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to projects</span>
        </Link>
      </div>

      {/* Banner */}
      {project.banner && (
        <div className="w-full max-w-4xl">
          <Image
            width={1200}
            height={600}
            alt={`${project.name} banner`}
            className="object-cover w-full rounded-lg"
            src={`/assets${project.banner}`}
            priority
            style={{
              aspectRatio: "2 / 1",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Project Header */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
            <Badge variant={getTypeColor(project.type)} className="text-sm">
              {getTypeLabel(project.type)}
            </Badge>
          </div>

          <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
            {project.company}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 text-gray-600 dark:text-gray-300">
          <div className="inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{project.period}</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              data-umami-event="Project GitHub Click"
              data-umami-event-project={project.name}
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              data-umami-event="Project Website Click"
              data-umami-event-project={project.name}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Visit Website</span>
            </a>
          )}
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">About</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Technical Challenges</h3>
            <ul className="list-disc list-inside space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Impact */}
        {project.impact && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Impact & Results</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.impact}</p>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-3">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <Image
                  key={index}
                  width={600}
                  height={400}
                  alt={`${project.name} screenshot ${index + 1}`}
                  className="object-cover w-full rounded-lg"
                  src={`/assets${screenshot}`}
                  style={{
                    aspectRatio: "3 / 2",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
