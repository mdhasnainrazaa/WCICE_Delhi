import { Metadata } from "next";
import { University } from "@/data/universities";

export function generateUniversityMetadata(uni: University): Metadata {
  const brandName = "WCIEC Delhi";
  const baseUrl = "https://www.wciecdelhi.com";
  const absoluteUrl = `${baseUrl}/universities/${uni.slug}/`;
  
  const displayName = uni.slug === "osh-state-university" ? "Osh State University" : uni.name;
  const countryName = uni.location.split(",")[1]?.trim() || "Kyrgyzstan";

  // Dynamic search title matching the user requirements (Under 65 chars)
  const title = `${displayName} MBBS | Fees & Admission 2026 | WCIEC`;
  
  // Custom meta description containing all target keywords within 150-160 characters
  const description = `Study MBBS at ${displayName}, ${countryName}. Check MBBS fees, admission, NMC guidelines, FMGE, hostel & scholarships. Apply via ${brandName} today!`;
  
  const defaultKeywords = [
    displayName,
    `${displayName} MBBS`,
    `MBBS in ${displayName}`,
    `${displayName} ${countryName}`,
    `${displayName} Fees`,
    `${displayName} Admission`,
    `${displayName} Ranking`,
    `${displayName} Hostel`,
    `${displayName} FMGE`,
    `${displayName} NMC Approved`,
    "Study MBBS Abroad",
    `MBBS in ${countryName}`
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
      siteName: brandName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${displayName} Campus, ${countryName}`,
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
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: brandName, url: baseUrl }],
    publisher: brandName,
    category: "Education",
  };
}

export function generateUniversitySchemas(uni: University) {
  const brandName = "WCIEC Delhi";
  const baseUrl = "https://www.wciecdelhi.com";
  const absoluteUrl = `${baseUrl}/universities/${uni.slug}/`;
  const logoUrl = `${baseUrl}/logos/wciec-logo.webp`;
  
  const displayName = uni.slug === "osh-state-university" ? "Osh State University" : uni.name;
  const countryName = uni.location.split(",")[1]?.trim() || "Kyrgyzstan";
  const cityName = uni.location.split(",")[0]?.trim() || "Osh";

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
        "name": countryName,
        "item": `${baseUrl}/mbbs-in-kyrgyzstan/`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": displayName,
        "item": absoluteUrl
      }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl}#webpage`,
    "url": absoluteUrl,
    "name": `${displayName} MBBS | Fees & Admission 2026 | WCIEC`,
    "description": `Study MBBS at ${displayName}, ${countryName}. Check MBBS fees, admission, NMC guidelines, FMGE, hostel & scholarships. Apply via ${brandName} today!`,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "name": brandName,
      "url": `${baseUrl}/`
    },
    "breadcrumb": {
      "@id": `${absoluteUrl}#breadcrumb`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "#about-heading", "#fees-heading", "#hostel-heading", "#faq-heading"]
    }
  };

  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": `${absoluteUrl}#university`,
    "name": uni.name,
    "alternateName": displayName,
    "description": uni.about,
    "url": absoluteUrl,
    "logo": logoUrl,
    "image": campusImageUrl,
    "foundingDate": uni.established || "1939",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": countryName
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
      "addressLocality": cityName,
      "addressCountry": countryName
    }
  };

  const medicalCollegeSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCollege",
    "@id": `${absoluteUrl}#medicalcollege`,
    "name": uni.name,
    "alternateName": displayName,
    "description": uni.about,
    "url": absoluteUrl,
    "logo": logoUrl,
    "image": campusImageUrl,
    "foundingDate": uni.established || "1939",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": countryName
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
    "headline": `${displayName} MBBS | Fees & Admission 2026`,
    "description": `Comprehensive guide to studying MBBS at ${displayName}, ${countryName}. Learn about fees structure, eligibility criteria, admission process, hostel facilities, and NMC approval details.`,
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
    medicalCollegeSchema,
    websiteSchema,
    orgSchema,
    articleSchema,
    faqSchema
  };
}
