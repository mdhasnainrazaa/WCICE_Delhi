import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | WCIEC - Gateway to Global Education',
  description: 'Get in touch with expert counselors at WCIEC for MBBS abroad admission, visa processing, and guaranteed admission support in top medical universities.',
  keywords: 'contact wciec, mbbs abroad consultancy, study mbbs abroad, medical admission counselor, mbbs admission help, wciec contact number',
  openGraph: {
    title: 'Contact WCIEC | Your Gateway to Global Medical Education',
    description: 'Book a free counseling session today to kickstart your MBBS journey abroad with 100% admission and visa support.',
    url: 'https://wciec.org/contact-us',
    siteName: 'WCIEC Medical Platform',
    images: [
      {
        url: '/images/contact-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'WCIEC Contact Support',
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
            "@type": "ContactPage",
            "name": "Contact WCIEC",
            "description": "Contact our expert medical education counselors for MBBS abroad admissions.",
            "url": "https://wciec.org/contact-us",
            "mainEntity": {
              "@type": "Organization",
              "name": "WCIEC",
              "telephone": "+918826418950",
              "email": "info@wciec.org",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918826418950",
                "contactType": "customer support"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
