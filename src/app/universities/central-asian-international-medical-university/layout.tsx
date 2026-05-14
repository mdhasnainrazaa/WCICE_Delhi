import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS in Central Asian International Medical University | Admission 2026',
  description: 'Study MBBS at Central Asian International Medical University (CAIMU), Kyrgyzstan. NMC approved, affordable fees, modern infrastructure, and Indian mess. Direct admission for 2026 open!',
  keywords: 'MBBS in Central Asian International Medical University, CAIMU Kyrgyzstan Admission, NMC Approved CAIMU, Affordable MBBS CAIMU, Direct MBBS Admission CAIMU, FMGE Oriented Medical University, Hostel & Indian Mess CAIMU',
  openGraph: {
    title: 'Study MBBS at Central Asian International Medical University | CAIMU',
    description: 'Modern medical education in Kyrgyzstan. NMC approved, affordable fees, clinical exposure, and 100% assistance for Indian students.',
    url: 'https://wciec.org/universities/central-asian-international-medical-university',
    siteName: 'WCIEC Medical Platform',
    images: [
      {
        url: '/images/Central-Asian-Medical-University.png',
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
