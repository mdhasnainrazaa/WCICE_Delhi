import { Metadata } from "next";
import OSUClient from "./OSUClient";

export const metadata: Metadata = {
  title: "Osh State University Kyrgyzstan | MBBS Fees 2026 | Nile Education Consultancy",
  description: "Study MBBS at Osh State University, Kyrgyzstan. Check MBBS fees, eligibility, admission process, NMC approval, FMGE eligibility, hostel, ranking, scholarships and apply through Nile Education Consultancy.",
  keywords: [
    "Osh State University",
    "Osh State University MBBS",
    "MBBS in Osh State University",
    "Osh State University Kyrgyzstan",
    "Osh State University Fees",
    "Osh State University Admission",
    "Osh State University Ranking",
    "Osh State University Hostel",
    "Osh State University FMGE",
    "Osh State University NMC Approved",
    "Study MBBS Abroad",
    "MBBS in Kyrgyzstan"
  ],
  alternates: {
    canonical: "https://wciecdelhi.com/universities/osh-state-university/",
  },
  openGraph: {
    title: "Osh State University Kyrgyzstan | MBBS Fees 2026 | Nile Education Consultancy",
    description: "Study MBBS at Osh State University, Kyrgyzstan. Check MBBS fees, eligibility, admission process, NMC approval, FMGE eligibility, hostel, ranking, scholarships and apply through Nile Education Consultancy.",
    url: "https://wciecdelhi.com/universities/osh-state-university/",
    siteName: "Nile Education Consultancy",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://wciecdelhi.com/images/osu-gallery/osh-state-university-campus.webp",
        width: 1200,
        height: 630,
        alt: "Osh State University Campus, Kyrgyzstan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osh State University Kyrgyzstan | MBBS Fees 2026 | Nile Education Consultancy",
    description: "Study MBBS at Osh State University, Kyrgyzstan. Check MBBS fees, eligibility, admission process, NMC approval, FMGE eligibility, hostel, ranking, scholarships and apply through Nile Education Consultancy.",
    images: ["https://wciecdelhi.com/images/osu-gallery/osh-state-university-campus.webp"],
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
  verification: {
    google: "google-site-verification-placeholder",
  },
  authors: [{ name: "Nile Education Consultancy", url: "https://wciecdelhi.com" }],
  publisher: "Nile Education Consultancy",
  category: "Education",
};

export default function Page() {
  const absoluteUrl = "https://wciecdelhi.com/universities/osh-state-university/";
  const absoluteLogoUrl = "https://wciecdelhi.com/logos/wciec-logo.webp";
  const campusImageUrl = "https://wciecdelhi.com/images/osu-gallery/osh-state-university-campus.webp";
  const authorPublisherName = "Nile Education Consultancy";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl}#breadcrumb`,
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
        "name": "Universities",
        "item": "https://wciecdelhi.com/universities/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kyrgyzstan",
        "item": "https://wciecdelhi.com/mbbs-in-kyrgyzstan/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Osh State University",
        "item": absoluteUrl
      }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl}#webpage`,
    "url": absoluteUrl,
    "name": "Osh State University Kyrgyzstan | MBBS Fees 2026 | Nile Education Consultancy",
    "description": "Study MBBS at Osh State University, Kyrgyzstan. Check MBBS fees, eligibility, admission process, NMC approval, FMGE eligibility, hostel, ranking, scholarships and apply through Nile Education Consultancy.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://wciecdelhi.com/#website",
      "name": authorPublisherName,
      "url": "https://wciecdelhi.com/"
    },
    "breadcrumb": {
      "@id": `${absoluteUrl}#breadcrumb`
    }
  };

  const collegeSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": `${absoluteUrl}#university`,
    "name": "Osh State University Medical Faculty",
    "alternateName": "Osh State University",
    "description": "Osh State University is Kyrgyzstan's oldest and most prestigious medical university. NMC & WHO recognized with 100% English medium MD/MBBS program.",
    "url": absoluteUrl,
    "logo": absoluteLogoUrl,
    "image": campusImageUrl,
    "foundingDate": "1939",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Osh",
      "addressCountry": "Kyrgyzstan"
    }
  };

  const eduOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${absoluteUrl}#educationalorganization`,
    "name": "Osh State University Medical Faculty",
    "url": absoluteUrl,
    "logo": absoluteLogoUrl,
    "image": campusImageUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Osh",
      "addressCountry": "Kyrgyzstan"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wciecdelhi.com/#website",
    "name": authorPublisherName,
    "url": "https://wciecdelhi.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wciecdelhi.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wciecdelhi.com/#organization",
    "name": authorPublisherName,
    "url": "https://wciecdelhi.com/",
    "logo": {
      "@type": "ImageObject",
      "url": absoluteLogoUrl
    },
    "sameAs": [
      "https://www.facebook.com/nileeducation",
      "https://twitter.com/nileeducation",
      "https://www.linkedin.com/company/nileeducation"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://wciecdelhi.com/#localbusiness",
    "name": authorPublisherName,
    "image": absoluteLogoUrl,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl}#article`,
    "headline": "Osh State University Kyrgyzstan | MBBS Fees 2026",
    "description": "Comprehensive guide to studying MBBS at Osh State University, Kyrgyzstan. Learn about fees structure, eligibility criteria, admission process, hostel facilities, and NMC approval details.",
    "inLanguage": "en-US",
    "mainEntityOfPage": absoluteUrl,
    "image": campusImageUrl,
    "datePublished": "2026-01-01T08:00:00+05:30",
    "dateModified": "2026-07-03T15:23:51+05:30",
    "author": {
      "@type": "Organization",
      "name": authorPublisherName,
      "url": "https://wciecdelhi.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": authorPublisherName,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteLogoUrl
      }
    }
  };

  const faqs = [
    { q: "Is Osh State University NMC approved?", a: "Yes, Osh State University is recognized by the National Medical Commission (NMC) of India, WHO, and WDOMS. Graduates are eligible to appear for the FMGE and NExT exams." },
    { q: "What are Osh State University MBBS fees?", a: "The total tuition fee is $24,899 for 5 years. This includes $6,899 for the 1st year and $4,500 per year for the 2nd to 5th years. Hostel and food cost $1,600 per year." },
    { q: "Is Osh State University good for Indian students?", a: "Yes, it is excellent. It offers 100% English medium courses, separate hostels, Indian food, FMGE coaching, and a large, supportive community of over 3,000 Indian students." },
    { q: "Can Indian students study here?", a: "Yes, Indian students who have qualified NEET can study at Osh State University. The admission process is straightforward through Nile Education Consultancy." },
    { q: "Is NEET compulsory?", a: "Yes, NEET qualification is compulsory for all Indian students planning to study MBBS at Osh State University if they wish to practice in India after graduation." },
    { q: "What is the FMGE eligibility?", a: "Graduates holding an MD degree from Osh State University are fully eligible to sit for the FMGE / NExT exam in India, provided they meet NMC's study duration and syllabus requirements." },
    { q: "What is the eligibility criteria for Osh State University MBBS?", a: "Candidates must have completed 12th grade with at least 50% aggregate in Physics, Chemistry, and Biology (PCB) for General category (40% for SC/ST/OBC) and must be NEET-qualified." },
    { q: "What is the admission process for Osh State University?", a: "The process involves: submitting 10th/12th marksheets, passport, and NEET scorecard; receiving an admission letter; visa invitation processing; visa stamping; and departure." },
    { q: "What documents are required for admission?", a: "You need your 10th and 12th passing certificates, passport, NEET scorecard, passport-size photographs, and a medical health fitness certificate." },
    { q: "Is Osh State University ranking high?", a: "Yes, Osh State University is ranked among the top public medical universities in Kyrgyzstan and is highly respected globally for its academic quality and clinical exposure." },
    { q: "What are the hostel facilities at Osh State University?", a: "The university provides comfortable, separate hostels for boys and girls. Facilities include fully furnished rooms, central heating, high-speed Wi-Fi, 24/7 security, and laundry." },
    { q: "Is Indian food available at the Osh State University hostel?", a: "Yes, the campus has dedicated Indian mess halls serving vegetarian and non-vegetarian Indian meals prepared by professional Indian cooks." },
    { q: "What is the duration of MBBS at Osh State University?", a: "The MD program (equivalent to MBBS) is a 5-year course, satisfying the NMC's requirement of a minimum 54-month course duration for foreign medical graduates." },
    { q: "Does the university offer scholarships for Indian students?", a: "The fee is already highly subsidized by the government, but outstanding students can apply for merit-based scholarships during their studies." },
    { q: "What clinical exposure does Osh State University provide?", a: "Students receive hands-on training at top state and private affiliated hospitals in Osh city, working with local patients under the guidance of senior doctors." }
  ];

  const faqSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eduOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <OSUClient />
    </>
  );
}
