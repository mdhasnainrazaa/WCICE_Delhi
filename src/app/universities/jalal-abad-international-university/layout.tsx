import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Jalal-Abad International University MBBS Admission 2026 | Direct Admission',
  description: 'Apply for MBBS at Jalal-Abad International University (JAIU), Kyrgyzstan. NMC approved, affordable fees, English medium, and Indian hostel/mess. Direct admission for 2026 open!',
  keywords: 'MBBS in Jalal-Abad International University, JAIU Admission 2026, NMC Approved JAIU, Affordable MBBS JAIU, Direct Admission JAIU, MBBS Abroad Kyrgyzstan JAIU, JAIU for Indian Students, FMGE Focused Medical University, Hostel & Indian Mess JAIU',
  openGraph: {
    title: 'Jalal-Abad International University MBBS Admission 2026',
    description: 'Study MBBS at JAIU, Kyrgyzstan with affordable fees and English-medium education. Indian food and secure hostels available.',
    url: 'https://wciec.org/universities/jalal-abad-international-university',
    siteName: 'WCIEC Organization',
    images: [
      {
        url: "/images/Jalal-Abad-International-University-hero.png",
        width: 1200,
        height: 630,
        alt: 'Jalal-Abad International University Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/universities/jalal-abad-international-university',
  },
};

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            "name": "Jalal-Abad International University (JAIU)",
            "url": "https://wciec.org/universities/jalal-abad-international-university",
            "description": "Jalal-Abad International University is a prominent institution in Kyrgyzstan offering world-class medical education with modern facilities.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Jalal-Abad",
              "addressCountry": "Kyrgyzstan"
            },
            "sameAs": [
              "https://www.facebook.com/wciec",
              "https://www.instagram.com/wciec"
            ]
          })
        }}
      />
      {children}
    </>
  );
}
