import { Metadata } from "next";
import OIMUClient from "./OIMUClient";

export const metadata: Metadata = {
  title: "Osh International Medical University MBBS Fees 2026 | Admission",
  description: "Study MBBS at Osh International Medical University (OIMU), Kyrgyzstan. English medium MD program, FMGE coaching, and Indian mess. Total 5-year package details for 2026.",
  keywords: "Osh International Medical University, OIMU Kyrgyzstan, MBBS in Osh, OIMU fees for Indian students, Medical studies Kyrgyzstan 2026",
  openGraph: {
    title: "Osh International Medical University | Global MBBS Career",
    description: "Join one of Kyrgyzstan's most modern medical universities. Affordable fees, high-quality clinical training, and student support.",
    images: ["https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200"],
  },
  alternates: {
    canonical: "https://wciec.org/universities/osh-international-medical-university",
  }
};

export default function page() {
  return <OIMUClient />;
}
