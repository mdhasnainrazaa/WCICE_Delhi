import React from "react";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wciecdelhi.com/#website",
    "name": "WCIEC Delhi",
    "url": "https://wciecdelhi.com/",
    "publisher": {
      "@id": "https://wciecdelhi.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://wciecdelhi.com/search/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
