import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jalal-Abad International University MBBS Fees 2026 | MBBS in Kyrgyzstan",
  description: "Explore Jalal-Abad International University Kyrgyzstan for MBBS. Check fees, admission process, hostel, and eligibility. Best study abroad consultant for Indian students.",
  keywords: "Jalal-Abad International University, JAIU MBBS, MBBS in Kyrgyzstan, MBBS abroad for Indian students, MBBS abroad fees, MBBS abroad admission process, affordable MBBS abroad, low cost MBBS abroad, study MBBS abroad",
  openGraph: {
    title: "Jalal-Abad International University MBBS Fees 2026",
    description: "Study MBBS in Kyrgyzstan with affordable fees and English-medium education at JAIU.",
    images: ["/images/Jalal-Abad-International-University-hero.png"],
  },
};

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
