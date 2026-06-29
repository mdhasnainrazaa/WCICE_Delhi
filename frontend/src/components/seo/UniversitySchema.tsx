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
  // Normalize URL to be absolute on wciecdelhi.com with trailing slash
  const cleanPath = url
    .replace("https://wciec.org", "")
    .replace("https://wciecdelhi.com", "")
    .replace("https://www.wciecdelhi.com", "")
    .replace(/^\/+|\/+$/g, ""); // strip leading/trailing slashes

  const absoluteUrl = `https://wciecdelhi.com/${cleanPath}/`;
  const absoluteLogoUrl = "https://wciecdelhi.com/logos/wciec-logo.webp";
  
  // Normalize image URL to be absolute
  let absoluteImageUrl = image;
  if (image && !image.startsWith("http")) {
    absoluteImageUrl = `https://wciecdelhi.com${image.startsWith("/") ? "" : "/"}${image}`;
  }

  const universitySchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": `${absoluteUrl}#university`,
    "name": name,
    "description": description,
    "url": absoluteUrl,
    "logo": absoluteLogoUrl,
    "image": absoluteImageUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": country
    },
    ...(established && { "foundingDate": established })
  };

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${absoluteUrl}#educationalorganization`,
    "name": name,
    "description": description,
    "url": absoluteUrl,
    "logo": absoluteLogoUrl,
    "image": absoluteImageUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": country
    },
    ...(established && { "foundingDate": established })
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wciecdelhi.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Medical Universities",
        "item": "https://wciecdelhi.com/universities/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": name,
        "item": absoluteUrl
      }
    ]
  };

  const faqSchema = faqs && faqs.length > 0 ? {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
