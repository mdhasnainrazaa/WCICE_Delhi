import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS at Jalal-Abad State University | Fees, Admission 2026 | WCIEC',
  description: 'Study MBBS at Jalal-Abad State University (JASU), Kyrgyzstan. Affordable fees, NMC approved, English medium, and Indian food. Best consultancy for MBBS abroad for Indian students.',
  keywords: 'Jalal-Abad State University, JASU Kyrgyzstan, MBBS in Kyrgyzstan, Study MBBS Abroad, MBBS abroad for Indian students, MBBS abroad fees, MBBS abroad admission process, affordable MBBS abroad, low cost MBBS abroad',
  openGraph: {
    title: 'Study MBBS at Jalal-Abad State University | WCIEC Medical Platform',
    description: 'Globally recognized MBBS degree at Jalal-Abad State University. English medium, affordable fees, and FMGE support.',
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
