import { Metadata } from "next";
import JAIUClient from "./JAIUClient";
import { UniversitySchema } from "@/components/seo/UniversitySchema";

export const metadata: Metadata = {
  title: "Jalal-Abad International University MBBS Admission 2026 | Fees",
  description: "Direct admission to Jalal-Abad International University (JAIU), Kyrgyzstan. Affordable MBBS fees ($33,350 total), English medium, and Indian mess facilities. Apply for 2026.",
  keywords: "Jalal-Abad International University MBBS, JAIU Kyrgyzstan fees, MBBS abroad for Indian students, Medical colleges in Jalal-Abad, study medicine in Kyrgyzstan",
  openGraph: {
    title: "Jalal-Abad International University | MBBS in Kyrgyzstan 2026",
    description: "Your gateway to a global medical career. Explore JAIU's world-class facilities and expert faculty.",
    images: ["/images/Jalal-Abad-International-University-hero.png"],
  },
  alternates: {
    canonical: "https://wciec.org/universities/jalal-abad-international-university",
  }
};

export default function page() {
  return (
    <>
      <UniversitySchema 
        name="Jalal-Abad International University (JAIU)"
        description="A premier international medical university in Jalal-Abad, offering globally recognized MBBS degrees with a focus on modern clinical practice."
        url="https://wciec.org/universities/jalal-abad-international-university"
        image="/images/Jalal-Abad-International-University-hero.png"
        city="Jalal-Abad"
        faqs={[
          { q: "What is the total fee for JAIU?", a: "The total fee for the 5-year MBBS program at JAIU is approximately $33,350, including tuition, hostel, and other fees." },
          { q: "Is the curriculum in English?", a: "Yes, Jalal-Abad International University follows a 100% English medium curriculum for all 5 years of the MBBS program." },
          { q: "Are there Indian students at JAIU?", a: "Yes, JAIU is a popular choice for Indian students, with dedicated Indian mess facilities and a vibrant student community." }
        ]}
      />
      <JAIUClient />
    </>
  );
}
