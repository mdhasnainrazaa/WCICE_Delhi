import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study MBBS at Osh State University | International Medical Faculty',
  description: 'Apply for MBBS at Osh State University - International Medical Faculty in Kyrgyzstan. NMC recognized, English medium, affordable fees, and clinical exposure for Indian students.',
  keywords: 'MBBS in Kyrgyzstan, Osh State University, Study MBBS Abroad, Osh Medical University, MBBS Admission 2026, Kyrgyzstan Medical University, Affordable MBBS Abroad',
  openGraph: {
    title: 'Study MBBS at Osh State University | International Medical Faculty',
    description: 'NMC approved, WHO recognized MBBS degree at Osh State University. Apply for 2026 intake.',
    url: 'https://wciec.org/universities/osh-state-university',
    siteName: 'WCIEC Medical Platform',
    images: [
      {
        url: '/images/osh-state-university-banner.jpg',
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
