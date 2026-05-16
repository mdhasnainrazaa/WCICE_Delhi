import React from "react";

interface UniversitySchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  city: string;
  country?: string;
  established?: string;
  faqs?: { q: string; a: string }[];
}

export function UniversitySchema({ 
  name, 
  description, 
  url, 
  image, 
  city, 
  country = "Kyrgyzstan", 
  established,
  faqs 
}: UniversitySchemaProps) {
  const universitySchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": name,
    "description": description,
    "url": url,
    "logo": "https://wciec.org/logo.png",
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": country
    },
    ...(established && { "foundingDate": established })
  };

  const faqSchema = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(universitySchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
