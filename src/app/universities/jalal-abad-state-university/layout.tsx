import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS at Jalal-Abad State University | Fees, Admission 2026 | WCIEC',
  description: 'Study MBBS at Jalal-Abad State University (JASU), Kyrgyzstan. Affordable fees, NMC approved, English medium, and Indian food. Best consultancy for MBBS abroad for Indian students.',
  keywords: 'Jalal-Abad State University, JASU Kyrgyzstan, MBBS in Kyrgyzstan, Study MBBS Abroad, MBBS abroad for Indian students, MBBS abroad fees, MBBS abroad admission process, affordable MBBS abroad, low cost MBBS abroad',
  openGraph: {
    title: 'Study MBBS at Jalal-Abad State University | WCIEC Medical Platform',
    description: 'Globally recognized MBBS degree at Jalal-Abad State University. English medium, affordable fees, and FMGE support.',
    images: ['/images/Jalal-Abad-banner.png'],
  },
};

export default function JASULayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
