import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { education } from "@/services/education";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  ArrowLeft,
  GraduationCap,
  ExternalLink,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface EducationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return education.map((edu) => ({
    slug: edu.slug,
  }));
}

export async function generateMetadata({
  params,
}: EducationPageProps): Promise<Metadata> {
  const edu = education.find((e) => e.slug === params.slug);

  if (!edu) {
    return {
      title: "Education Not Found",
    };
  }

  return {
    title: `${edu.degree} at ${edu.institution} | Rodrigo Manuel Navarro Lajous`,
    description: edu.specialization
      ? `${edu.degree} with specialization in ${edu.specialization}`
      : edu.degree,
    keywords: [
      ...edu.technologies,
      edu.institution,
      edu.degree,
      "education",
      "academic",
    ],
    openGraph: {
      title: `${edu.degree} at ${edu.institution}`,
      description: edu.specialization
        ? `Specialization in ${edu.specialization}`
        : edu.degree,
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: `${edu.degree} at ${edu.institution}`,
      description: edu.specialization
        ? `Specialization in ${edu.specialization}`
        : edu.degree,
      creator: "@arlequin_eth",
    },
  };
}

export default function EducationPage({ params }: EducationPageProps) {
  const edu = education.find((e) => e.slug === params.slug);

  if (!edu) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center gap-8 py-8 md:py-12 px-4">
      {/* Back Button */}
      <div className="w-full max-w-4xl">
        <Link
          href="/education"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to education</span>
        </Link>
      </div>

      {/* Banner */}
      {edu.banner && (
        <div className="w-full max-w-4xl">
          <Image
            width={1200}
            height={600}
            alt={`${edu.institution} banner`}
            className="object-cover w-full rounded-lg"
            src={edu.banner}
            priority
            style={{
              aspectRatio: "2 / 1",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Education Header */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl md:text-4xl font-bold">{edu.degree}</h1>
          </div>

          {edu.institutionUrl ? (
            <a
              href={edu.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-2"
            >
              {edu.institution}
              <ExternalLink className="w-5 h-5" />
            </a>
          ) : (
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400">
              {edu.institution}
            </h2>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 text-gray-600 dark:text-gray-300">
          <div className="inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{edu.period}</span>
          </div>
          {edu.location && (
            <div className="inline-flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{edu.location}</span>
            </div>
          )}
        </div>

        {/* Specialization */}
        {edu.specialization && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Specialization</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {edu.specialization}
            </p>
          </div>
        )}

        {/* Thesis */}
        {edu.thesis && (
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Thesis
            </h3>
            <h4 className="text-lg font-medium mb-2 text-blue-600 dark:text-blue-400">
              {edu.thesis.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {edu.thesis.description}
            </p>
            {edu.thesis.link && (
              <a
                href={edu.thesis.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Thesis</span>
              </a>
            )}
          </div>
        )}

        {/* Coursework */}
        {edu.coursework && edu.coursework.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Coursework</h3>
            <ul className="list-disc list-inside space-y-2">
              {edu.coursework.map((course, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {edu.achievements && edu.achievements.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Achievements & Honors</h3>
            <ul className="list-disc list-inside space-y-2">
              {edu.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies & Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {edu.technologies.map((tech, index) => (
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
