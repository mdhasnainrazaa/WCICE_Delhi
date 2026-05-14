import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study MBBS at Osh State University | Fees, Admission 2026 | WCIEC',
  description: 'Apply for MBBS at Osh State University, Kyrgyzstan. NMC recognized, English medium, affordable fees, Indian mess, and FMGE focused coaching. No donation, best MBBS consultancy.',
  keywords: 'Osh State University, MBBS in Kyrgyzstan, Study Medicine in Kyrgyzstan, FMGE Preparation Focused Universities, Hostel & Indian Food Facilities Kyrgyzstan, Low-Cost MBBS Abroad Kyrgyzstan',
  openGraph: {
    title: 'Study MBBS at Osh State University | Admissions Open 2026',
    description: 'NMC approved, WHO recognized MBBS degree at Osh State University. Indian food, secure hostels, and top-tier FMGE support.',
    url: 'https://wciec.org/universities/osh-state-university',
    siteName: 'WCIEC Medical Platform',
    images: [
      {
        url: '/images/Osh-State-University.png',
        width: 1200,
        height: 630,
        alt: 'Osh State University Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/universities/osh-state-university',
  },
};

export default function OSULayout({
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
            "name": "Osh State University - International Medical Faculty",
            "url": "https://wciec.org/universities/osh-state-university",
            "description": "Osh State University is a leading medical institution in Kyrgyzstan offering an English-medium MBBS program for international students.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Osh",
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
