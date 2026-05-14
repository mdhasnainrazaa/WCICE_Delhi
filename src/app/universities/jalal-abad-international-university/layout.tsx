import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jalal-Abad International University MBBS Fees 2026 | MBBS in Kyrgyzstan",
  description: "Explore Jalal-Abad International University Kyrgyzstan for MBBS. Check fees, admission process, hostel, and eligibility. Best study abroad consultant for Indian students.",
  keywords: "Jalal-Abad International University, JAIU MBBS, MBBS in Kyrgyzstan, MBBS abroad for Indian students, MBBS abroad fees, MBBS abroad admission process, affordable MBBS abroad, low cost MBBS abroad, study MBBS abroad",
  openGraph: {
    title: "Jalal-Abad International University MBBS Fees 2026",
    description: "Study MBBS in Kyrgyzstan with affordable fees and English-medium education at JAIU.",
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
