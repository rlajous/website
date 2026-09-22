import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LlmBrandIcon } from "@/components/icons/LlmBrands";
import { buildAskLlmLinks } from "@/lib/askLlms";

/**
 * Row of buttons that open the visitor's own LLM chat with a prompt prefilled
 * to read this site's `/llms-full.txt` bio and answer questions about Rodrigo.
 *
 * Server component — the links are static, and each one runs in the visitor's
 * own assistant, so no backend or API key is involved.
 */
const AskLlms: React.FC = () => {
  const links = buildAskLlmLinks();

  return (
    <section
      className="mt-6 md:mt-8 animate-fade-in-up [animation-delay:400ms]"
      aria-labelledby="ask-llms-heading"
    >
      <h2
        id="ask-llms-heading"
        className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        Ask AI about Rodrigo
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
        {links.map(({ id, name, url }) => (
          <Button key={id} asChild size="sm" variant="outline" className="px-2.5 sm:px-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="Ask LLM"
              data-umami-event-provider={name}
              aria-label={`Ask ${name} about Rodrigo Manuel Navarro Lajous`}
            >
              <LlmBrandIcon id={id} className="h-4 w-4 sm:mr-2" />
              <span className="sr-only sm:not-sr-only">{name}</span>
            </a>
          </Button>
        ))}
      </div>

      <p className="mt-2 hidden sm:block text-xs text-muted-foreground">
        Opens your own chat with a prompt that reads my{" "}
        <a
          href="/llms-full.txt"
          className="hover:text-foreground underline underline-offset-4 transition-colors duration-200"
        >
          llms-full.txt
        </a>{" "}
        bio.
      </p>
    </section>
  );
};

export default AskLlms;
