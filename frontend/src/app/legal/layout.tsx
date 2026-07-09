import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Information | WCIEC Delhi',
  description: 'Read the Privacy Policy, Refund Policy, and Terms & Conditions of WCIEC Delhi MBBS Abroad consultancy.',
  keywords: 'WCIEC legal, privacy policy WCIEC, refund policy study abroad, terms and conditions MBBS consultant',
  openGraph: {
    title: 'Legal Information | WCIEC Delhi',
    description: 'Read the Privacy Policy, Refund Policy, and Terms & Conditions of WCIEC Delhi MBBS Abroad consultancy.',
    url: 'https://www.wciecdelhi.com/legal/',
    siteName: 'WCIEC Delhi',
    images: [
      {
        url: '/logos/wciec-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Legal Information - WCIEC Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.wciecdelhi.com/legal/',
  },
};

export default function LegalLayout({
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
            "@id": "https://www.wciecdelhi.com/legal/#webpage",
            "url": "https://www.wciecdelhi.com/legal/",
            "name": "Legal Information | WCIEC Delhi",
            "description": "Read the Privacy Policy, Refund Policy, and Terms & Conditions of WCIEC Delhi MBBS Abroad consultancy.",
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
