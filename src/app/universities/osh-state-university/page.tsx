import { Metadata } from "next";
import OSUClient from "./OSUClient";
import { UniversitySchema } from "@/components/seo/UniversitySchema";

export const metadata: Metadata = {
  title: "Osh State University MBBS Fees 2026 | Direct Admission",
  description: "Study MBBS at Osh State University, Kyrgyzstan. Top-ranked government medical university with 100% English medium and NMC recognition. Total package details for 2026.",
  keywords: "Osh State University MBBS Fees, OSU Kyrgyzstan Admission, MBBS in Kyrgyzstan Osh State, Indian students in Kyrgyzstan, Medical university Osh fees",
  openGraph: {
    title: "Osh State University | Premier MBBS Destination 2026",
    description: "Join Kyrgyzstan's oldest and most prestigious medical university. Expert clinical training and global recognition.",
    images: ["https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920"],
  },
  alternates: {
    canonical: "https://wciec.org/universities/osh-state-university",
  }
};

export default function page() {
  return (
    <>
      <UniversitySchema 
        name="Osh State University Medical Faculty"
        description="Kyrgyzstan's oldest and most prestigious medical university. NMC & WHO recognized with 100% English medium MD/MBBS program."
        url="https://wciec.org/universities/osh-state-university"
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920"
        city="Osh"
        established="1992"
        faqs={[
          { q: "Is Osh State University NMC approved?", a: "Yes, it is recognized by the National Medical Commission (NMC), WHO, and WDOMS." },
          { q: "What is the medium of instruction?", a: "The entire 5-year MD/MBBS program is taught in 100% English for international students." },
          { q: "Is Indian food available?", a: "Yes, dedicated Indian mess facilities are available on campus providing nutritious veg and non-veg food." }
        ]}
      />
      <OSUClient />
    </>
  );
}
