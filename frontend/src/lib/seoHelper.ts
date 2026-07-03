import { Metadata } from "next";
import { University } from "@/data/universities";

export function generateUniversityMetadata(uni: University): Metadata {
  const brandName = "Nile Education";
  const baseUrl = "https://wciecdelhi.com";
  const absoluteUrl = `${baseUrl}/universities/${uni.slug}/`;
  
  // Custom SEO titles and descriptions based on requested brand/target patterns
  const title = `${uni.name} MBBS 2026-27 | Fees, Admission & Ranking | ${brandName}`;
  const description = `Study MBBS at ${uni.name}, Kyrgyzstan. Check MBBS fees, admission process, eligibility, NMC approval, FMGE eligibility, hostel, scholarships and apply through Nile Education Consultancy.`;
  
  const defaultKeywords = [
    uni.name,
    `${uni.name} MBBS`,
    `MBBS in ${uni.name}`,
    `${uni.name} Kyrgyzstan`,
    `${uni.name} Fees`,
    `${uni.name} Admission`,
    `${uni.name} Ranking`,
    `${uni.name} Hostel`,
    `${uni.name} FMGE`,
    `${uni.name} NMC Approved`,
    "Study MBBS Abroad",
    "MBBS in Kyrgyzstan"
  ];

  const imageUrl = uni.bannerImage 
    ? `${baseUrl}${uni.bannerImage}`
    : `${baseUrl}/images/osu-gallery/osh-state-university-campus.webp`;

  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: `${brandName} Consultancy`,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${uni.name} Campus, Kyrgyzstan`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: brandName, url: baseUrl }],
    publisher: `${brandName} Consultancy`,
    category: "Education",
  };
}

export function generateUniversitySchemas(uni: University) {
  const brandName = "Nile Education Consultancy";
  const baseUrl = "https://wciecdelhi.com";
  const absoluteUrl = `${baseUrl}/universities/${uni.slug}/`;
  const logoUrl = `${baseUrl}/logos/wciec-logo.webp`;
  
  const campusImageUrl = uni.bannerImage 
    ? `${baseUrl}${uni.bannerImage}`
    : `${baseUrl}/images/osu-gallery/osh-state-university-campus.webp`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${baseUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Universities",
        "item": `${baseUrl}/universities/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kyrgyzstan",
        "item": `${baseUrl}/mbbs-in-kyrgyzstan/`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": uni.name,
        "item": absoluteUrl
      }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl}#webpage`,
    "url": absoluteUrl,
    "name": `${uni.name} MBBS 2026-27 | Fees, Admission & Ranking | Nile Education`,
    "description": `Study MBBS at ${uni.name}, Kyrgyzstan. Check MBBS fees, admission process, eligibility, NMC approval, FMGE eligibility, hostel, scholarships and apply through Nile Education Consultancy.`,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "name": brandName,
      "url": `${baseUrl}/`
    },
    "breadcrumb": {
      "@id": `${absoluteUrl}#breadcrumb`
    }
  };

  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": `${absoluteUrl}#university`,
    "name": uni.name,
    "alternateName": uni.name.split(" ")[0] || uni.name,
    "description": uni.about,
    "url": absoluteUrl,
    "logo": logoUrl,
    "image": campusImageUrl,
    "foundingDate": uni.established || "1939",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": uni.location.split(",")[0].trim(),
      "addressCountry": uni.location.split(",")[1]?.trim() || "Kyrgyzstan"
    }
  };

  const eduOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${absoluteUrl}#educationalorganization`,
    "name": uni.name,
    "url": absoluteUrl,
    "logo": logoUrl,
    "image": campusImageUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": uni.location.split(",")[0].trim(),
      "addressCountry": uni.location.split(",")[1]?.trim() || "Kyrgyzstan"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": brandName,
    "url": `${baseUrl}/`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": brandName,
    "url": `${baseUrl}/`,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl
    },
    "sameAs": [
      "https://www.facebook.com/nileeducation",
      "https://twitter.com/nileeducation",
      "https://www.linkedin.com/company/nileeducation"
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl}#article`,
    "headline": `${uni.name} MBBS 2026-27 | Fees, Admission & Ranking`,
    "description": `Comprehensive guide to studying MBBS at ${uni.name}, Kyrgyzstan. Learn about fees structure, eligibility criteria, admission process, hostel facilities, and NMC approval details.`,
    "inLanguage": "en-US",
    "mainEntityOfPage": absoluteUrl,
    "image": campusImageUrl,
    "datePublished": "2026-01-01T08:00:00+05:30",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": brandName,
      "url": `${baseUrl}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": brandName,
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    }
  };

  const faqSchema = uni.faqs && uni.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": uni.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return {
    breadcrumbSchema,
    webpageSchema,
    collegeSchema,
    eduOrgSchema,
    websiteSchema,
    orgSchema,
    articleSchema,
    faqSchema
  };
}
