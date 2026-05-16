import { Metadata } from "next";
import OIMUClient from "./OIMUClient";
import { UniversitySchema } from "@/components/seo/UniversitySchema";

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
  return (
    <>
      <UniversitySchema 
        name="Osh International Medical University (OIMU)"
        description="A modern medical university in Osh, Kyrgyzstan, focused on providing international students with high-quality medical education and FMGE preparation."
        url="https://wciec.org/universities/osh-international-medical-university"
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200"
        city="Osh"
        faqs={[
          { q: "What is the duration of MBBS at OIMU?", a: "The MBBS (MD) program at Osh International Medical University has a duration of 5 years." },
          { q: "Is Indian food available at OIMU?", a: "Yes, OIMU provides dedicated Indian mess facilities serving nutritious veg and non-veg meals to Indian students." },
          { q: "Does OIMU provide FMGE coaching?", a: "Yes, the university provides specialized coaching for FMGE and NExT exams to help Indian students qualify for practice in India." }
        ]}
      />
      <OIMUClient />
    </>
  );
}
