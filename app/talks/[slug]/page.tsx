import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { talks } from "@/services/talks";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { blurDataURL } from "@/lib/utils";
import Link from "next/link";
import YouTubeEmbed from "../components/YouTubeEmbed";
import PDFViewer from "../components/PDFViewer";
import { SITE_URL } from "@/constants/routes";

/** Props for the talk detail page, receiving the slug from the dynamic route. */
interface TalkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Pre-renders all talk detail pages at build time from the talks data.
 *
 * @returns Array of slug params for static generation.
 */
export async function generateStaticParams() {
  return talks.map((talk) => ({
    slug: talk.slug,
  }));
}

/**
 * Generates dynamic SEO metadata (title, description, keywords, OpenGraph, video) from talk data.
 *
 * @param props - Page props containing the route slug.
 * @returns Metadata object for the talk detail page.
 */
export async function generateMetadata({ params }: TalkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const talk = talks.find((t) => t.slug === slug);

  if (!talk) {
    return {
      title: "Talk Not Found",
    };
  }

  return {
    title: `${talk.title} | Rodrigo Manuel Navarro Lajous`,
    description: talk.description,
    keywords: [...talk.topics, talk.event, "conference talk", "presentation"],
    alternates: {
      canonical: `/talks/${slug}`,
    },
    openGraph: {
      title: talk.title,
      description: talk.description,
      type: "article",
      images: talk.banner ? [`${SITE_URL}/assets${talk.banner}`] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: talk.title,
      description: talk.description,
      creator: "@arlequin_eth",
    },
  };
}

/**
 * Talk detail page rendering banner, title, event details, description, topic badges,
 * and optional {@link YouTubeEmbed} and {@link PDFViewer} for video and slides.
 *
 * Server component — statically generated at build time via {@link generateStaticParams}.
 *
 * @param props - Page props containing the route slug.
 */
export default async function TalkPage({ params }: TalkPageProps) {
  const { slug } = await params;
  const talk = talks.find((t) => t.slug === slug);

  if (!talk) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center gap-8 py-8 md:py-12 px-4 animate-fade-in-up">
      {/* Back Button */}
      <div className="w-full max-w-4xl">
        <Link
          href="/talks"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all talks</span>
        </Link>
      </div>

      {/* Banner */}
      {talk.banner && (
        <div className="w-full max-w-4xl">
          <Image
            width={1200}
            height={600}
            alt={talk.title}
            className="object-cover w-full rounded-lg"
            src={`/assets${talk.banner}`}
            priority
            placeholder="blur"
            blurDataURL={blurDataURL}
            style={{
              aspectRatio: "2 / 1",
            }}
          />
        </div>
      )}

      {/* Talk Header */}
      <div className="w-full max-w-4xl text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{talk.title}</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center md:justify-start">
          <div className="inline-flex items-center gap-2 text-lg font-semibold text-link">
            {talk.event}
          </div>
          <div className="inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{talk.date}</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{talk.location}</span>
          </div>
        </div>

        <p className="text-lg mb-6">{talk.description}</p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {talk.topics.map((topic, index) => (
            <Badge key={index} variant="secondary">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      {/* Video Section */}
      {talk.links?.video && (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Watch the Talk</h2>
          <YouTubeEmbed videoUrl={talk.links.video} title={talk.title} />
        </div>
      )}

      {/* Slides Section */}
      {talk.links?.slides && (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Presentation Slides</h2>
          <PDFViewer pdfUrl={talk.links.slides} title={talk.title} />
        </div>
      )}
    </div>
  );
}
