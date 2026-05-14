import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS in Osh International Medical University | Admission 2026 | OIMU',
  description: 'Study MBBS at Osh International Medical University (OIMU), Kyrgyzstan. NMC approved, affordable fees, English medium, and Indian hostel/mess. Direct admission for 2026 open!',
  keywords: 'MBBS in Osh International Medical University, OIMU Admission 2026, NMC Approved OIMU, Affordable MBBS OIMU, Direct MBBS Admission OIMU, FMGE Focused MBBS Program, Hostel & Indian Mess OIMU',
  openGraph: {
    title: 'Study MBBS at Osh International Medical University | Admissions Open',
    description: 'Apply for MBBS at OIMU, Kyrgyzstan. NMC approved, English medium, affordable fees, and FMGE focused coaching for Indian students.',
    url: 'https://wciec.org/universities/osh-international-medical-university',
    siteName: 'WCIEC Medical Platform',
    images: [
      {
        url: '/images/osh-international-medical-university.png',
        width: 1200,
        height: 630,
        alt: 'Osh International Medical University Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/universities/osh-international-medical-university',
  },
};

export default function OIMULayout({
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
            "name": "Osh International Medical University",
            "url": "https://wciec.org/universities/osh-international-medical-university",
            "description": "Osh International Medical University is a top medical university in Kyrgyzstan offering affordable MBBS education for international students.",
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
