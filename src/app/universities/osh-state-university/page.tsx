import { Metadata } from "next";
import OSUClient from "./OSUClient";

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
  return <OSUClient />;
}
