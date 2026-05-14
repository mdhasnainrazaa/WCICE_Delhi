import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study MBBS at Osh International Medical University | Fees, Admission 2026 | WCIEC',
  description: 'Apply for MBBS at Osh International Medical University, Kyrgyzstan. Get affordable MBBS education, FMGE coaching, and clinical exposure. Best MBBS abroad consultancy for Indian students.',
  keywords: 'Osh International Medical University, MBBS in Kyrgyzstan, Study MBBS in Kyrgyzstan, Osh International Medical University fees, MBBS abroad for Indian students, MBBS abroad fees, MBBS abroad admission process, affordable MBBS abroad, low cost MBBS abroad',
  openGraph: {
    title: 'Study MBBS at Osh International Medical University | MBBS in Kyrgyzstan',
    description: 'Apply for MBBS at Osh International Medical University, Kyrgyzstan. Get affordable MBBS education, FMGE coaching, hostel facilities, and clinical exposure for Indian students.',
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
