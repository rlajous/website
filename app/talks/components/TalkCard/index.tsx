"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Talk } from "@/domains/Talk";
import { Presentation, Video, MapPin } from "lucide-react";

/**
 * Card displaying a talk summary with optional banner, event info, location,
 * topic badges, and availability indicators for slides and video.
 *
 * Links to the detail page at `/talks/[slug]`. Props match the {@link Talk} interface.
 *
 * Client component — uses interactive link behavior.
 */
const TalkCard: React.FC<Talk> = ({
  slug,
  title,
  event,
  location,
  date,
  description,
  topics,
  links,
  banner,
}) => {
  return (
    <Link href={`/talks/${slug}`} className="block group">
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg flex flex-col hover:shadow-xl hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-200 cursor-pointer border-l-2 border-l-transparent hover:border-l-primary">
        {banner && (
          <div className="mb-4">
            <Image
              width={800}
              height={400}
              alt={title}
              className="object-cover w-full rounded-lg"
              src={`/assets${banner}`}
              placeholder="blur"
              blurDataURL={blurDataURL}
              style={{
                aspectRatio: "2 / 1",
              }}
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 pr-4 md:border-r">
            <h2 className="text-xl font-semibold mb-2">{event}</h2>
            <p className="text-sm text-muted-foreground">{date}</p>
            <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          <div className="md:w-3/4 md:pl-4 mt-4 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-3 line-clamp-2">{description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {topics.map((topic, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  data-umami-event="Talk Topic Click"
                  data-umami-event-topic={topic}
                >
                  {topic}
                </Badge>
              ))}
            </div>

            {links && (links.slides || links.video) && (
              <div className="flex flex-wrap gap-4 mt-4">
                {links.slides && (
                  <span className="flex items-center gap-2 text-sm text-link">
                    <Presentation className="w-4 h-4" />
                    <span>Slides Available</span>
                  </span>
                )}
                {links.video && (
                  <span className="flex items-center gap-2 text-sm text-link">
                    <Video className="w-4 h-4" />
                    <span>Video Available</span>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TalkCard;
