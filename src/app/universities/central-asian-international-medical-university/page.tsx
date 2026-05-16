import { Metadata } from "next";
import CAIMUClient from "./CAIMUClient";
import { UniversitySchema } from "@/components/seo/UniversitySchema";

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
  return (
    <>
      <UniversitySchema 
        name="Central Asian International Medical University (CAIMU)"
        description="A modern medical university in Jalal-Abad, Kyrgyzstan, offering high-quality MD/MBBS programs with extensive clinical training."
        url="https://wciec.org/universities/central-asian-international-medical-university"
        image="/images/Central-Asian-Medical-University.png"
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
