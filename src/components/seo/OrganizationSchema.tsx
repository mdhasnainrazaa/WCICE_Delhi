import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "WCIEC Organization",
    "alternateName": "World Choice International Education Consultant Private Limited",
    "url": "https://wciec.org",
    "logo": "https://wciec.org/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-1234567890",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/wciec",
      "https://www.instagram.com/wciec",
      "https://www.linkedin.com/company/wciec"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
