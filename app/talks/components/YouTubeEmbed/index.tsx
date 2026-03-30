"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

/**
 * Props for the {@link YouTubeEmbed} component.
 */
interface YouTubeEmbedProps {
  /** Full YouTube URL (supports youtu.be, watch, embed, and other formats). */
  videoUrl: string;
  /** Title used for the iframe's `title` attribute and the external link text. */
  title: string;
}

/**
 * Responsive YouTube video embed with 16:9 aspect ratio.
 *
 * Extracts the video ID from various YouTube URL formats using regex.
 * Falls back to an error message for invalid URLs. Includes an external
 * "Watch on YouTube" link below the embed.
 *
 * Client component — renders an iframe.
 */
const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoUrl, title }) => {
  /**
   * Extracts the 11-character video ID from a YouTube URL.
   *
   * @param url - YouTube URL in any standard format.
   * @returns The video ID, or null if the URL is invalid.
   */
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return (
      <div className="text-center p-4 bg-muted rounded-lg">
        <p>Invalid YouTube URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="space-y-4">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="flex justify-center">
        <Link
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-link hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          data-umami-event="External YouTube Link"
          data-umami-event-talk={title}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Watch on YouTube</span>
        </Link>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
