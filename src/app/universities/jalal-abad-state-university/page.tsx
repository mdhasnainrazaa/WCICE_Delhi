import { Metadata } from "next";
import JASUClient from "./JASUClient";
import { UniversitySchema } from "@/components/seo/UniversitySchema";

export const metadata: Metadata = {
  title: "Jalal-Abad State University MBBS Fees 2026 | Direct Admission",
  description: "Study MBBS at Jalal-Abad State University (JASU), Kyrgyzstan. Low tuition fees (₹34.69 Lakhs), NMC recognized, English medium. Apply for 2026-27 session through WCIEC.",
  keywords: "Jalal-Abad State University MBBS Fees, JASU Kyrgyzstan Admission 2026, MBBS in Kyrgyzstan Jalal-Abad, NMC Recognized Medical Universities Kyrgyzstan, Study MBBS at JASU",
  openGraph: {
    title: "Jalal-Abad State University | Direct MBBS Admission 2026",
    description: "Official admission partner for JASU Kyrgyzstan. Get detailed fee structure, eligibility and 100% visa support.",
    images: ["/images/Jalal-Abad-banner.png"],
  },
  alternates: {
    canonical: "https://wciec.org/universities/jalal-abad-state-university",
  }
};

export default function page() {
  return (
    <>
      <UniversitySchema 
        name="Jalal-Abad State University (JASU)"
        description="A premier government medical university in Jalal-Abad, Kyrgyzstan, offering high-quality medical education since 1993."
        url="https://wciec.org/universities/jalal-abad-state-university"
        image="/images/Jalal-Abad-banner.png"
        city="Jalal-Abad"
        established="1993"
        faqs={[
          { q: "Is JASU a government university?", a: "Yes, Jalal-Abad State University is a prestigious government medical university in Kyrgyzstan." },
          { q: "What is the total package for JASU?", a: "The total package for the 5-year MBBS program at JASU is approximately ₹34.69 Lakhs, including tuition and hostel." },
          { q: "Is the degree recognized in India?", a: "Yes, the degree from JASU is fully recognized by the National Medical Commission (NMC) and WHO." }
        ]}
      />
      <JASUClient />
    </>
  );
}
