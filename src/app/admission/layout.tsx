import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Direct MBBS Admission in Kyrgyzstan 2026 | Indian Students Guide',
  description: 'Complete guide for Indian students to get direct MBBS admission in Kyrgyzstan without donation. Check eligibility, required documents, and step-by-step application process for 2026.',
  keywords: 'Direct MBBS Admission in Kyrgyzstan, MBBS Admission 2026 Kyrgyzstan, Indian Students Guide for MBBS in Kyrgyzstan, MBBS Admission Without Donation, Apply Online for Kyrgyzstan Medical Admission, Hassle-Free MBBS Admission Process',
  openGraph: {
    title: 'Direct MBBS Admission in Kyrgyzstan 2026 | Step-by-Step Guide',
    description: 'Secure your MBBS seat in Kyrgyzstan today. Direct admission, no donation, 100% assistance for Indian students.',
    url: 'https://wciec.org/admission',
    siteName: 'WCIEC Organization',
    images: [
      {
        url: '/logos/logo.png',
        width: 1200,
        height: 630,
        alt: 'MBBS Admission in Kyrgyzstan 2026',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://wciec.org/admission',
  },
};

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
