import { Metadata } from "next";
import { notFound } from "next/navigation";
import { universities } from "@/data/universities";
import { generateUniversityMetadata, generateUniversitySchemas } from "@/lib/seoHelper";
import OSUClient from "./OSUClient";

export const metadata: Metadata = (() => {
  const uni = universities.find(u => u.slug === "osh-state-university");
  if (!uni) return { title: "Osh State University Not Found" };
  return generateUniversityMetadata(uni);
})();

export default function Page() {
  const uni = universities.find(u => u.slug === "osh-state-university");
  if (!uni) notFound();

  const schemas = generateUniversitySchemas(uni);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wciecdelhi.com/#localbusiness",
    "name": "WCIEC Delhi",
    "image": "https://wciecdelhi.com/logos/wciec-logo.webp",
    "url": "https://wciecdelhi.com/",
    "telephone": "+918586873357",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collegeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.eduOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.medicalCollegeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
      />
      {schemas.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.courseSchema) }}
      />
      <OSUClient />
    </>
  );
}
