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
import { blurDataURL } from "@/lib/utils";

/** Props for the education detail page, receiving the slug from the dynamic route. */
interface EducationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Pre-renders all education detail pages at build time from the education data.
 *
 * @returns Array of slug params for static generation.
 */
export async function generateStaticParams() {
  return education.map((edu) => ({
    slug: edu.slug,
  }));
}

/**
 * Generates dynamic SEO metadata (title, description, keywords) from education data.
 *
 * @param props - Page props containing the route slug.
 * @returns Metadata object for the education detail page.
 */
export async function generateMetadata({
  params,
}: EducationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const edu = education.find((e) => e.slug === slug);

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
    alternates: {
      canonical: `/education/${slug}`,
    },
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

/**
 * Education detail page rendering banner, degree, institution link, period,
 * location, specialization, thesis, coursework, achievements, and technology badges.
 *
 * Server component — statically generated at build time via {@link generateStaticParams}.
 *
 * @param props - Page props containing the route slug.
 */
export default async function EducationPage({ params }: EducationPageProps) {
  const { slug } = await params;
  const edu = education.find((e) => e.slug === slug);

  if (!edu) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center gap-8 py-8 md:py-12 px-4 animate-fade-in-up">
      {/* Back Button */}
      <div className="w-full max-w-4xl">
        <Link
          href="/education"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
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
            placeholder="blur"
            blurDataURL={blurDataURL}
            style={{
              aspectRatio: "2 / 1",
            }}
          />
        </div>
      )}

      {/* Education Header */}
      <div className="w-full max-w-4xl">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-link" />
            <h1 className="text-3xl md:text-4xl font-bold">{edu.degree}</h1>
          </div>

          {edu.institutionUrl ? (
            <a
              href={edu.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-link hover:underline inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {edu.institution}
              <ExternalLink className="w-5 h-5" />
            </a>
          ) : (
            <h2 className="text-xl md:text-2xl text-link">
              {edu.institution}
            </h2>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6 text-muted-foreground">
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
            <p className="text-lg text-muted-foreground">
              {edu.specialization}
            </p>
          </div>
        )}

        {/* Thesis */}
        {edu.thesis && (
          <div className="mb-6 p-4 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Thesis
            </h3>
            <h4 className="text-lg font-medium mb-2 text-link">
              {edu.thesis.title}
            </h4>
            <p className="text-muted-foreground mb-3">
              {edu.thesis.description}
            </p>
            {edu.thesis.link && (
              <a
                href={edu.thesis.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
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
                <li key={index} className="text-muted-foreground">
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
                <li key={index} className="text-muted-foreground">
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
