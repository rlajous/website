"use client";

import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  return (
    <div className="space-y-4">
      <div className="w-full h-[600px] border rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
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
