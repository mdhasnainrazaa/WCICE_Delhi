import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Central Asian International Medical University | MBBS in Kyrgyzstan',
  description: 'Study MBBS at Central Asian International Medical University, Kyrgyzstan. Explore CAIMU admission details, facilities, hostel, scholarship, student life, FMGE/NExT coaching, and MBBS program.',
  keywords: 'central asian international medical university, CAIMU Kyrgyzstan, MBBS in Kyrgyzstan, MBBS abroad, medical university in Kyrgyzstan, CAIMU admission, MBBS for Indian students',
  openGraph: {
    title: 'Central Asian International Medical University | MBBS in Kyrgyzstan',
    description: 'Study MBBS at CAIMU, Kyrgyzstan with modern medical education, clinical exposure, affordable fees, and international student support.',
    url: 'https://wciec.org/universities/central-asian-international-medical-university',
    siteName: 'WCIEC Medical Platform',
    images: [
      {
        url: '/images/caimu-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'CAIMU Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/universities/central-asian-international-medical-university',
  },
};

export default function CAIMULayout({
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
            "name": "Central Asian International Medical University",
            "url": "https://wciec.org/universities/central-asian-international-medical-university",
            "description": "Study MBBS at CAIMU, Kyrgyzstan with modern medical education, clinical exposure, affordable fees, and international student support.",
            "foundingDate": "2016",
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
