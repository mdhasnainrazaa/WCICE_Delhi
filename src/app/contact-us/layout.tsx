import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trusted MBBS Consultancy for Kyrgyzstan in India | Contact WCIEC',
  description: 'Connect with WCIEC Organization, the most trusted MBBS consultancy for Kyrgyzstan in India. Get expert guidance for 2026 admissions, visa assistance, and university selection.',
  keywords: 'Trusted MBBS Consultancy for Kyrgyzstan, Best Overseas Medical Education Guidance, Start Your Medical Career Abroad, Secure Your MBBS Seat Now, MBBS Abroad Today, MBBS Abroad Consultant India',
  openGraph: {
    title: 'Contact WCIEC | Trusted Medical Admission Experts',
    description: 'Start your medical journey in Kyrgyzstan with the best guidance. Secure your seat today for the 2026 intake.',
    url: 'https://wciec.org/contact-us',
    siteName: 'WCIEC Organization',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact WCIEC - Trusted MBBS Consultancy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/contact-us',
  },
};

export default function ContactLayout({
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
            "@type": "LocalBusiness",
            "name": "WCIEC Organization",
            "image": "https://wciec.org/logos/logo.png",
            "@id": "https://wciec.org/contact-us",
            "url": "https://wciec.org",
            "telephone": "+918826418950",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Regional Office",
                "addressLocality": "Lucknow",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "226001",
                "addressCountry": "IN"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Head Office",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "10:00",
              "closes": "18:00"
            }
          })
        }}
      />
      {children}
    </>
  );
}
