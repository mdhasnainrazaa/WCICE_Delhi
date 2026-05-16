import { Metadata } from "next";
import CAIMUClient from "./CAIMUClient";

export const metadata: Metadata = {
  title: "Central Asian International Medical University MBBS Fees 2026",
  description: "Admission open at Central Asian International Medical University (CAIMU), Jalal-Abad. English medium MBBS, modern campus, and affordable fees. Start your medical career in 2026.",
  keywords: "Central Asian International Medical University, CAIMU Kyrgyzstan MBBS, MBBS in Jalal-Abad, CAIMU fees for Indian students, Kyrgyzstan medical admission 2026",
  openGraph: {
    title: "CAIMU Kyrgyzstan | Modern Medical Education 2026",
    description: "Experience world-class medical training at Central Asian International Medical University. Affordable, English-medium, and globally recognized.",
    images: ["/images/Central-Asian-Medical-University.png"],
  },
  alternates: {
    canonical: "https://wciec.org/universities/central-asian-international-medical-university",
  }
};

export default function page() {
  return <CAIMUClient />;
}
