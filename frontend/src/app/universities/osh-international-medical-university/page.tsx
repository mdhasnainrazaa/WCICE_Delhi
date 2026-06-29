import { Metadata } from "next";
import OIMUClient from "./OIMUClient";
import { UniversitySchema } from "@/components/seo/UniversitySchema";

export const metadata: Metadata = {
  title: "OIMU MBBS Fees & Admission 2026 | WCIEC",
  description: "Study MBBS at Osh International Medical University (OIMU), Kyrgyzstan. English medium MD program, FMGE coaching, and Indian mess. Total 5-year package details for 2026.",
  keywords: "Osh International Medical University, OIMU Kyrgyzstan, MBBS in Osh, OIMU fees for Indian students, Medical studies Kyrgyzstan 2026",
  openGraph: {
    title: "OIMU MBBS Fees & Admission 2026 | WCIEC",
    description: "Join one of Kyrgyzstan's most modern medical universities. Affordable fees, high-quality clinical training, and student support.",
    images: ["/images/optimized/osh-international-medical-university.webp"],
    url: "https://wciecdelhi.com/universities/osh-international-medical-university/",
  },
  alternates: {
    canonical: "https://wciecdelhi.com/universities/osh-international-medical-university/",
  }
};

export default function page() {
  return (
    <>
      <UniversitySchema 
        name="Osh International Medical University (OIMU)"
        description="A modern medical university in Osh, Kyrgyzstan, focused on providing international students with high-quality medical education and FMGE preparation."
        url="https://wciecdelhi.com/universities/osh-international-medical-university/"
        image="/images/optimized/osh-international-medical-university.webp"
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
