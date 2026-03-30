"use client";

import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Props for the {@link PDFViewer} component.
 */
interface PDFViewerProps {
  /** URL or path to the PDF file to display. */
  pdfUrl: string;
  /** Title used for the iframe's `title` attribute and Umami event tracking. */
  title: string;
}

/**
 * Inline PDF viewer for talk slide decks with a download button.
 *
 * Renders the PDF in a 600px-tall iframe with a "Download Slides" button below.
 * Tracks download clicks via Umami analytics.
 *
 * Client component — renders an iframe.
 */
const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  return (
    <div className="space-y-4">
      <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] border rounded-lg overflow-hidden bg-muted">
        <iframe
          src={pdfUrl}
          className="w-full h-full"
          title={`${title} - Slides`}
        />
      </div>
      <div className="flex justify-center">
        <Button asChild variant="default">
          <a
            href={pdfUrl}
            download
            data-umami-event="Download Slides"
            data-umami-event-talk={title}
            className="inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Slides (PDF)</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PDFViewer;
