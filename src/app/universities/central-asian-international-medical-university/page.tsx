import { Metadata } from "next";
import CAIMUClient from "./CAIMUClient";
import { UniversitySchema } from "@/components/seo/UniversitySchema";

export const metadata: Metadata = {
  title: "CAIMU MBBS Fees & Admission 2026 | WCIEC",
  description: "Admission open at Central Asian International Medical University (CAIMU), Jalal-Abad. English medium MBBS, modern campus, and affordable fees. Start your medical career in 2026.",
  keywords: "Central Asian International Medical University, CAIMU Kyrgyzstan MBBS, MBBS in Jalal-Abad, CAIMU fees for Indian students, Kyrgyzstan medical admission 2026",
  openGraph: {
    title: "CAIMU MBBS Fees & Admission 2026 | WCIEC",
    description: "Experience world-class medical training at Central Asian International Medical University. Affordable, English-medium, and globally recognized.",
    images: ["/images/optimized/central-asian-medical-university.webp"],
    url: "https://wciecdelhi.com/universities/central-asian-international-medical-university/",
  },
  alternates: {
    canonical: "https://wciecdelhi.com/universities/central-asian-international-medical-university/",
  }
};

export default function page() {
  return (
    <>
      <UniversitySchema 
        name="Central Asian International Medical University (CAIMU)"
        description="A modern medical university in Jalal-Abad, Kyrgyzstan, offering high-quality MD/MBBS programs with extensive clinical training."
        url="https://wciecdelhi.com/universities/central-asian-international-medical-university/"
        image="/images/optimized/central-asian-medical-university.webp"
        city="Jalal-Abad"
        faqs={[
          { q: "Is CAIMU recognized by NMC?", a: "Yes, Central Asian International Medical University is fully recognized by the National Medical Commission (NMC) and WHO." },
          { q: "What are the facilities at CAIMU?", a: "CAIMU offers modern laboratories, high-tech classrooms, separate hostels for Indian students, and multi-cuisine mess facilities." },
          { q: "Can I practice in India after CAIMU?", a: "Yes, graduates are eligible to appear for the FMGE/NExT exam to practice medicine in India." }
        ]}
      />
      <CAIMUClient />
    </>
  );
}
