import React from "react";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization", "LocalBusiness"],
        "@id": "https://wciecdelhi.com/#organization",
        "name": "WCIEC Delhi",
        "alternateName": "World Choice International Education Consultant Private Limited",
        "url": "https://wciecdelhi.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wciecdelhi.com/logos/wciec-logo.webp",
          "width": 1200,
          "height": 630
        },
        "image": "https://wciecdelhi.com/logos/wciec-logo.webp",
        "description": "WCIEC Delhi provides MBBS abroad admission counselling, university shortlisting, documentation, visa assistance, travel support, and student support for Indian medical aspirants.",
        "telephone": ["+918586873357", "+919911635435", "+919811385441"],
        "email": "wciec3182@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110092",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "Kyrgyzstan" },
          { "@type": "Country", "name": "Russia" },
          { "@type": "Country", "name": "Kazakhstan" },
          { "@type": "Country", "name": "Uzbekistan" },
          { "@type": "Country", "name": "Georgia" },
          { "@type": "Country", "name": "Bangladesh" },
          { "@type": "Country", "name": "Nepal" },
          { "@type": "Country", "name": "Egypt" },
          { "@type": "Country", "name": "China" }
        ],
        "knowsAbout": [
          "MBBS Abroad",
          "MBBS in Kyrgyzstan",
          "MBBS in Russia",
          "MBBS in Kazakhstan",
          "MBBS Admission 2026",
          "NEET guidance for MBBS abroad",
          "NMC guidelines for foreign medical graduates",
          "FMGE and NExT preparation",
          "Student visa process"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+918586873357",
            "contactType": "admission counselling",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+919911635435",
            "contactType": "student support",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
          }
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61569910095151",
          "https://www.instagram.com/wciecdelhi/",
          "https://www.linkedin.com/company/wciecdelhi/"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://wciecdelhi.com/#mbbs-abroad-service",
        "name": "MBBS Abroad Admission Counselling",
        "provider": {
          "@id": "https://wciecdelhi.com/#organization"
        },
        "areaServed": "IN",
        "serviceType": "Study abroad admission counselling",
        "description": "Country and university selection, admission documentation, visa guidance, pre-departure preparation, hostel support, and post-arrival student support for MBBS abroad."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
