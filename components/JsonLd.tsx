import React from "react";

/**
 * Renders one or more Schema.org JSON-LD objects as server-rendered
 * `<script type="application/ld+json">` tags.
 *
 * Server component — the structured data is present in the initial HTML so
 * crawlers read it without executing JavaScript. `JSON.stringify` handles all
 * escaping; the `<` → `<` replacement prevents the serialized JSON from
 * prematurely closing the surrounding `<script>` tag (XSS safety).
 *
 * @param props.data - A single schema object or an array of schema objects.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
