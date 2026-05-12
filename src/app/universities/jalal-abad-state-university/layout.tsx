import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS at Jalal-Abad State University | Fees, Admission 2026, Ranking',
  description: 'Study MBBS at Jalal-Abad State University (JASU), Kyrgyzstan. Affordable fees (₹34.69L), NMC approved, English medium, and Indian food. Apply for 2026 intake now.',
  keywords: 'Jalal-Abad State University, JASU Kyrgyzstan, MBBS in Kyrgyzstan, Study MBBS Abroad, MBBS Fees in Kyrgyzstan, NMC Approved Medical University',
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
