import { Metadata } from "next";
import { University } from "@/data/universities";

export function generateUniversityMetadata(uni: University): Metadata {
  const brandName = "WCIEC Delhi";
  const baseUrl = "https://www.wciecdelhi.com";
  const absoluteUrl = `${baseUrl}/universities/${uni.slug}/`;
  
  const displayName = uni.slug === "osh-state-university" ? "Osh State University" : uni.name;
  const countryName = uni.location.split(",")[1]?.trim() || "Kyrgyzstan";

  // Keyword-rich titles ≤60 chars with primary search term + year
  let title = `${displayName} MBBS 2026-27 | NMC Approved | WCIEC`;
  let description = `Study MBBS at ${displayName}, ${countryName} — NMC & WHO approved. Fees, admission 2026-27, eligibility, hostel & FMGE coaching. Apply free via ${brandName}!`;

  if (uni.slug === "jalal-abad-state-university") {
    // 50 chars — primary brand name + year + acronym
    title = "Jalal Abad State University MBBS 2026 | JASU";
    description = "Jalal Abad State University (JASU) — NMC & WHO approved MBBS in Kyrgyzstan. Fees from $3,200/yr, English medium, FMGE coaching. Apply now via WCIEC Delhi!";
  } else if (uni.slug === "jalal-abad-international-university") {
    // 53 chars
    title = "Jalal-Abad International University MBBS 2026 | Fees";
    description = "Study MBBS at Jalal-Abad International University, Kyrgyzstan — NMC approved, English medium, $3,800/yr, hostel & FMGE coaching. Apply via WCIEC Delhi!";
  } else if (uni.slug === "osh-state-university") {
    // 50 chars
    title = "Osh State University MBBS 2026 | #1 Kyrgyzstan";
    description = "Osh State University — Kyrgyzstan's #1 NMC & WHO approved medical university. MBBS from $3,500/yr, English medium, FMGE coaching. Apply free via WCIEC!";
  } else if (uni.slug === "central-asian-international-medical-university") {
    // 51 chars
    title = "CAIMU MBBS 2026 | Central Asian Medical University";
    description = "Central Asian International Medical University (CAIMU), Kyrgyzstan — NMC approved MBBS, $3,600/yr, modern curriculum, FMGE coaching. Apply via WCIEC Delhi!";
  } else if (uni.slug === "osh-international-medical-university") {
    // 54 chars
    title = "Osh International Medical University MBBS 2026 | OIMU";
    description = "Osh International Medical University (OIMU), Kyrgyzstan — NMC approved MBBS from $4,000/yr, English medium, FMGE coaching. Apply free via WCIEC Delhi!";
  }

  let defaultKeywords = [
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
    `MBBS in ${countryName}`,
    "NMC approved medical university Kyrgyzstan",
    "best medical college in Kyrgyzstan",
    "MBBS abroad for Indian students",
  ];

  if (uni.slug === "jalal-abad-state-university") {
    defaultKeywords = [
      ...defaultKeywords,
      "JASU", "JASU MBBS", "JASU Fees", "JASU Admission",
      "Jalalabad State University", "Jalalabad State University MBBS",
      "Jalal Abad State Medical University",
      "MBBS in Jalal Abad State University",
      "Jalal Abad State University MBBS",
    ];
  } else if (uni.slug === "jalal-abad-international-university") {
    defaultKeywords = [
      ...defaultKeywords,
      "JAIU", "JAIU MBBS",
      "Jalal Abad International University",
      "Jalal-Abad International University MBBS",
      "MBBS in Jalal-Abad International University",
    ];
  } else if (uni.slug === "osh-state-university") {
    defaultKeywords = [
      ...defaultKeywords,
      "Osh State University Medical Faculty",
      "MBBS in Osh State University",
      "Osh State University fees",
      "Osh State University NMC approved",
      "best university in Kyrgyzstan MBBS",
    ];
  } else if (uni.slug === "central-asian-international-medical-university") {
    defaultKeywords = [
      ...defaultKeywords,
      "CAIMU", "CAIMU MBBS", "CAIMU Kyrgyzstan",
      "Central Asian International Medical University MBBS",
      "MBBS in Central Asian International Medical University",
      "CAIMU NMC approved",
    ];
  } else if (uni.slug === "osh-international-medical-university") {
    defaultKeywords = [
      ...defaultKeywords,
      "OIMU", "OIMU MBBS",
      "Osh International Medical University MBBS",
      "MBBS in Osh International Medical University",
      "OIMU NMC approved",
    ];
  }

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

  let title = `${displayName} MBBS 2026-27 | NMC Approved | WCIEC`;
  let description = `Study MBBS at ${displayName}, ${countryName} — NMC & WHO approved. Fees, admission 2026-27, eligibility, hostel & FMGE coaching. Apply free via ${brandName}!`;
  let alternateNames: string[] = [displayName];
  let sameAsLinks: string[] = [];

  if (uni.slug === "jalal-abad-state-university") {
    title = "Jalal Abad State University MBBS 2026 | JASU";
    description = "Jalal Abad State University (JASU) — NMC & WHO approved MBBS in Kyrgyzstan. Fees from $3,200/yr, English medium, FMGE coaching. Apply now via WCIEC Delhi!";
    alternateNames = ["JASU", "Jalal Abad State University", "Jalal-Abad State Medical University", "Jalalabad State University"];
    sameAsLinks = ["https://en.wikipedia.org/wiki/Jalal-Abad_State_University"];
  } else if (uni.slug === "jalal-abad-international-university") {
    title = "Jalal-Abad International University MBBS 2026 | Fees";
    description = "Study MBBS at Jalal-Abad International University, Kyrgyzstan — NMC approved, English medium, $3,800/yr, hostel & FMGE coaching. Apply via WCIEC Delhi!";
    alternateNames = ["JAIU", "Jalal Abad International University", "Jalal-Abad International University"];
  } else if (uni.slug === "osh-state-university") {
    title = "Osh State University MBBS 2026 | #1 Kyrgyzstan";
    description = "Osh State University — Kyrgyzstan's #1 NMC & WHO approved medical university. MBBS from $3,500/yr, English medium, FMGE coaching. Apply free via WCIEC!";
    alternateNames = ["OSU", "Osh State University", "Osh State University International Medical Faculty"];
    sameAsLinks = ["https://en.wikipedia.org/wiki/Osh_State_University"];
  } else if (uni.slug === "central-asian-international-medical-university") {
    title = "CAIMU MBBS 2026 | Central Asian Medical University";
    description = "Central Asian International Medical University (CAIMU), Kyrgyzstan — NMC approved MBBS, $3,600/yr, modern curriculum, FMGE coaching. Apply via WCIEC Delhi!";
    alternateNames = ["CAIMU", "Central Asian International Medical University"];
  } else if (uni.slug === "osh-international-medical-university") {
    title = "Osh International Medical University MBBS 2026 | OIMU";
    description = "Osh International Medical University (OIMU), Kyrgyzstan — NMC approved MBBS from $4,000/yr, English medium, FMGE coaching. Apply free via WCIEC Delhi!";
    alternateNames = ["OIMU", "Osh International Medical University"];
  }

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
    "name": title,
    "description": description,
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
    "alternateName": alternateNames,
    "description": uni.about,
    "url": absoluteUrl,
    "logo": logoUrl,
    "image": campusImageUrl,
    "sameAs": sameAsLinks.length > 0 ? sameAsLinks : undefined,
    "foundingDate": uni.established || "1939",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "KG"
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
      "addressCountry": "KG"
    }
  };

  const medicalCollegeSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCollege",
    "@id": `${absoluteUrl}#medicalcollege`,
    "name": uni.name,
    "alternateName": alternateNames,
    "description": uni.about,
    "url": absoluteUrl,
    "logo": logoUrl,
    "image": campusImageUrl,
    "sameAs": sameAsLinks.length > 0 ? sameAsLinks : undefined,
    "foundingDate": uni.established || "1939",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "KG"
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
      "https://www.facebook.com/profile.php?id=61569910095151",
      "https://www.instagram.com/wciecdelhi/",
      "https://www.linkedin.com/company/wciecdelhi/"
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl}#article`,
    "headline": title,
    "description": description,
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

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${absoluteUrl}#course`,
    "name": `MBBS at ${displayName}`,
    "description": `A 5+1 year MD/MBBS program at ${displayName} in ${cityName}, ${countryName}. Taught entirely in English, recognised by NMC and WHO. Open to Indian students with qualified NEET score.`,
    "provider": {
      "@type": "CollegeOrUniversity",
      "@id": `${absoluteUrl}#university`,
      "name": displayName,
      "sameAs": absoluteUrl
    },
    "coursePrerequisites": "10+2 PCB with minimum 50% marks and a qualified NEET score",
    "educationalCredentialAwarded": "MD (Doctor of Medicine) — equivalent to MBBS in India",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Onsite",
      "courseWorkload": "PT5Y",
      "startDate": "2026-09-01",
      "instructor": {
        "@type": "Organization",
        "name": displayName
      }
    },
    "offers": {
      "@type": "Offer",
      "price": uni.fees?.[0]?.tutionFee ?? "Contact for fees",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    }
  };

  return {
    breadcrumbSchema,
    webpageSchema,
    collegeSchema,
    eduOrgSchema,
    medicalCollegeSchema,
    websiteSchema,
    orgSchema,
    articleSchema,
    faqSchema,
    courseSchema
  };
}
