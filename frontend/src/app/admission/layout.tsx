import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS Admission in Kyrgyzstan 2026 | WCIEC',
  description: 'Learn the step-by-step MBBS admission process in Kyrgyzstan for Indian students. Eligibility criteria, required documents, fee guidance, and visa support.',
  keywords: 'MBBS admission Kyrgyzstan 2026, study MBBS abroad eligibility, documents for MBBS abroad, medical admission visa support',
  openGraph: {
    title: 'MBBS Admission in Kyrgyzstan 2026 | WCIEC',
    description: 'Learn the step-by-step MBBS admission process in Kyrgyzstan for Indian students. Eligibility criteria, required documents, fee guidance, and visa support.',
    url: 'https://www.wciecdelhi.com/admission/',
    siteName: 'WCIEC Delhi',
    images: [
      {
        url: '/logos/wciec-logo.webp',
        width: 1200,
        height: 630,
        alt: 'MBBS Admission in Kyrgyzstan 2026 - WCIEC',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.wciecdelhi.com/admission/',
  },
};

export default function AdmissionLayout({
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
            "@type": "WebPage",
            "@id": "https://www.wciecdelhi.com/admission/#webpage",
            "url": "https://www.wciecdelhi.com/admission/",
            "name": "MBBS Admission in Kyrgyzstan 2026 | WCIEC",
            "description": "Learn the step-by-step MBBS admission process in Kyrgyzstan for Indian students.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.wciecdelhi.com/#website",
              "name": "WCIEC Delhi",
              "url": "https://www.wciecdelhi.com/"
            }
          })
        }}
      />
      {children}
    </>
  );
}
