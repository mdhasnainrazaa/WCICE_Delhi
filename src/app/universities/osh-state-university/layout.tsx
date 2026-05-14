import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS in Osh State University | Admission 2026 | Study in Kyrgyzstan',
  description: 'Apply for MBBS at Osh State University, Kyrgyzstan. Top-ranked government university, NMC approved, English medium, and Indian hostel/mess. Direct admission for 2026 open!',
  keywords: 'MBBS in Osh State University, Osh State University Admission 2026, NMC Approved Osh State University, Study MBBS at Osh State University, Affordable MBBS Osh State University, Direct Admission Osh State University, FMGE Focused MBBS Program, Hostel & Indian Mess Osh State University',
  openGraph: {
    title: 'Study MBBS at Osh State University | Admissions Open 2026',
    description: 'NMC approved government medical university in Kyrgyzstan. Top-ranked for Indian students, secure hostels, and expert FMGE coaching.',
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
