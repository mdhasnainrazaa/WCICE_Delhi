import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact WCIEC Delhi | MBBS Abroad Guidance',
  description: 'Connect with WCIEC Delhi for expert MBBS admission guidance, university selection, visa assistance, and student support. Start your MBBS journey today.',
  keywords: 'Contact WCIEC Delhi, study abroad counseling, MBBS Kyrgyzstan admission guidance, WCIEC New Delhi phone, Laxmi Nagar consultancy',
  openGraph: {
    title: 'Contact WCIEC Delhi | Trusted Medical Admission Experts',
    description: 'Start your medical journey in Kyrgyzstan with the best guidance. Secure your seat today for the 2026 intake.',
    url: 'https://www.wciecdelhi.com/contact-us/',
    siteName: 'WCIEC Delhi',
    images: [
      {
        url: '/logos/wciec-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Contact WCIEC Delhi - Trusted MBBS Consultancy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.wciecdelhi.com/contact-us/',
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
            "@type": "ContactPage",
            "@id": "https://www.wciecdelhi.com/contact-us/#webpage",
            "url": "https://www.wciecdelhi.com/contact-us/",
            "name": "Contact WCIEC Delhi | MBBS Abroad Guidance",
            "description": "Connect with WCIEC Delhi for expert MBBS admission guidance, university selection, visa assistance, and student support.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.wciecdelhi.com/#website",
              "name": "WCIEC Delhi",
              "url": "https://www.wciecdelhi.com/"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.wciecdelhi.com/contact-us/#localbusiness",
            "name": "WCIEC Delhi",
            "image": "https://www.wciecdelhi.com/logos/wciec-logo.webp",
            "url": "https://www.wciecdelhi.com/contact-us/",
            "telephone": "+918586873357",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "WCIEC – Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel",
              "addressLocality": "Delhi",
              "addressRegion": "Delhi",
              "postalCode": "110092",
              "addressCountry": "IN"
            },
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
