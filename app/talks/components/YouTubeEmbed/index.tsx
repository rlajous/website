"use client";

import React, { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
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
 * Shows the video thumbnail as a click-to-play facade and only mounts the
 * YouTube iframe after the click: the player ships ~1 MB of third-party JS
 * that dominated talk-page load time (Lighthouse `third-party-facades`).
 *
 * Client component — holds the facade/iframe toggle.
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
  const [playing, setPlaying] = useState(false);

  if (!videoId) {
    return (
      <div className="text-center p-4 bg-muted rounded-lg">
        <p>Invalid YouTube URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="space-y-4">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {playing ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group absolute inset-0 w-full h-full overflow-hidden rounded-lg bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            data-umami-event="Play YouTube Video"
            data-umami-event-talk={title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- remote thumbnail; next/image would need remotePatterns for one static URL */}
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
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
