import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About WCIEC Organization | Leading MBBS Abroad Consultant',
  description: 'Learn about WCIEC Organization, your trusted partner for overseas medical education. With 15+ years of experience, we help Indian students secure admission in top medical universities globally.',
  keywords: 'about WCIEC, MBBS abroad consultancy, study abroad consultant India, overseas education experts, WCIEC history, medical education consultant',
  openGraph: {
    title: 'About WCIEC Organization | Our Mission & Vision',
    description: 'Empowering future doctors with world-class medical education. Learn about our journey and success stories.',
    url: 'https://wciec.org/about-us',
    siteName: 'WCIEC Organization',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'WCIEC Organization',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/about-us',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
