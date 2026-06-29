import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About WCIEC Delhi | MBBS Abroad Consultants',
  description: 'Learn more about WCIEC Delhi, the best MBBS abroad education consultancy in India. 15+ years of excellence guiding Indian students to top universities in Kyrgyzstan.',
  keywords: 'about WCIEC Delhi, study abroad consultant, MBBS abroad admission guidance, foreign education consultant India',
  openGraph: {
    title: 'About WCIEC Delhi | Trusted MBBS Abroad Consultants',
    description: '15+ years of excellence guiding aspiring doctors to top medical universities in Kyrgyzstan. NMC & WHO recognized. 5000+ successful alumni.',
    url: 'https://wciecdelhi.com/about-us/',
    siteName: 'WCIEC Delhi',
    images: [
      {
        url: '/logos/wciec-logo.webp',
        width: 1200,
        height: 630,
        alt: 'About WCIEC Delhi - Trusted MBBS Consultancy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciecdelhi.com/about-us/',
  },
};

export default function AboutLayout({
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
            "@type": "AboutPage",
            "@id": "https://wciecdelhi.com/about-us/#aboutpage",
            "url": "https://wciecdelhi.com/about-us/",
            "name": "About WCIEC Delhi | MBBS Abroad Consultants",
            "description": "Learn more about WCIEC Delhi, the best MBBS abroad education consultancy in India.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://wciecdelhi.com/#website",
              "name": "WCIEC Delhi",
              "url": "https://wciecdelhi.com/"
            }
          })
        }}
      />
      {children}
    </>
  );
}
