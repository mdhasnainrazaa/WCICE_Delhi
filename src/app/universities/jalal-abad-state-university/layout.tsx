import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS in Jalal-Abad State University | Admission 2026 | JASU Kyrgyzstan',
  description: 'Study MBBS at Jalal-Abad State University (JASU), Kyrgyzstan. Government medical university, NMC recognized, affordable fees, and Indian mess. Direct admission for 2026 open!',
  keywords: 'MBBS in Jalal-Abad State University, JASU Kyrgyzstan Admission, NMC Recognized JASU, Affordable MBBS JASU, Direct Admission JASU, Government Medical University Kyrgyzstan, FMGE Oriented MBBS Program, Hostel & Indian Mess JASU',
  openGraph: {
    title: 'Study MBBS at Jalal-Abad State University | JASU Kyrgyzstan',
    description: 'NMC approved government medical university in Kyrgyzstan. English medium MBBS, affordable fees, and FMGE support for Indian students.',
    url: 'https://wciec.org/universities/jalal-abad-state-university',
    siteName: 'WCIEC Organization',
    images: [
      {
        url: '/images/Jalal-Abad-banner.png',
        width: 1200,
        height: 630,
        alt: 'Jalal-Abad State University Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/universities/jalal-abad-state-university',
  },
};

export default function JASULayout({
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
            "name": "Jalal-Abad State University (JASU)",
            "url": "https://wciec.org/universities/jalal-abad-state-university",
            "description": "Jalal-Abad State University is a premier medical university in Kyrgyzstan providing high-quality medical education in English for international students.",
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
