import React from "react";
import { Metadata } from "next";
import { talks } from "@/services/talks";
import TalkCard from "./components/TalkCard";

/** Metadata for the talks page (title, description, canonical URL). */
export const metadata: Metadata = {
  title: "Talks | Rodrigo Manuel Navarro Lajous",
  description:
    "Speaking engagements and conference talks by Rodrigo Manuel Navarro Lajous, including presentations at Devconnect and other blockchain conferences.",
  alternates: {
    canonical: "/talks",
  },
};

/**
 * Talks list page rendering all speaking engagements as {@link TalkCard} components.
 * Server component — data is imported statically from the talks service.
 */
export default function TalksPage() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 md:py-12">
      <div className="text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold">Talks & Speaking</h1>
        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-primary" />
        <p className="text-base mt-3 text-muted-foreground">
          Conference talks and presentations sharing knowledge with the
          community
        </p>
      </div>
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col gap-6">
        {talks.map((talk, index) => (
          <div
            key={talk.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <TalkCard {...talk} />
          </div>
        ))}
      </div>
    </div>
  );
}
