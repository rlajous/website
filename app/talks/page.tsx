import React from "react";
import { Metadata } from "next";
import { talks } from "@/services/talks";
import TalkCard from "./components/TalkCard";

export const metadata: Metadata = {
  title: "Talks | Rodrigo Manuel Navarro Lajous",
  description:
    "Speaking engagements and conference talks by Rodrigo Manuel Navarro Lajous, including presentations at Devconnect and other blockchain conferences.",
};

export default function TalksPage() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 md:py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Talks & Speaking</h1>
        <p className="text-md mt-2">
          Conference talks and presentations sharing knowledge with the
          community
        </p>
      </div>
      <div className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col gap-6">
        {talks.map((talk) => (
          <TalkCard key={talk.id} {...talk} />
        ))}
      </div>
    </div>
  );
}
