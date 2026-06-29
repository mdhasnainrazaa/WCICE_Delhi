import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WCIEC Blog | Latest Updates on MBBS Abroad & Study Abroad Tips',
  description: 'Stay updated with the latest news on MBBS abroad, country comparisons, fee structures, and NMC/NEXT exam updates. Expert advice for Indian medical students.',
  keywords: 'which country is best for MBBS abroad, is MBBS abroad worth it, MBBS abroad vs MBBS in India, MBBS abroad total cost, cheapest country for MBBS abroad, best country for MBBS for Indian students, how to apply for MBBS abroad, is NEET compulsory for MBBS abroad, NMC rules for MBBS abroad, FMGE exam after MBBS abroad, NEXT exam for foreign medical graduates',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
