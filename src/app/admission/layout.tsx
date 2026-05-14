import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MBBS Abroad Admission Process 2026 | Eligibility & Documents | WCIEC',
  description: 'Learn about MBBS abroad for Indian students, including fees, eligibility, and the step-by-step admission process. No donation, affordable costs, and NEET requirements explained.',
  keywords: 'MBBS abroad for Indian students, MBBS abroad fees, MBBS abroad admission process, MBBS abroad eligibility, MBBS abroad without donation, MBBS abroad after 12th, NEET requirement for MBBS abroad, documents required for MBBS abroad, best countries for MBBS abroad, affordable MBBS abroad, low cost MBBS abroad, MBBS abroad for Indian students 2026',
};

export default function AdmissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
