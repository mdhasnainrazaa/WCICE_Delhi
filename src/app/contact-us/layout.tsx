import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact WCIEC | Study Abroad & MBBS Consultant in Delhi & Lucknow',
  description: 'Get in touch with WCIEC Organization, the top study abroad consultant in Delhi and Lucknow. Free counselling for MBBS abroad, student visa assistance, and admission guidance.',
  keywords: 'study abroad consultant in Lucknow, MBBS abroad consultant in Lucknow, overseas education consultant in Lucknow, study abroad counsellor in Lucknow, MBBS abroad admission consultant in Lucknow, study abroad consultant in Delhi, MBBS abroad consultant in Delhi, education consultant near me, study abroad consultant near me, WCIEC contact number, MBBS consultancy Delhi',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
