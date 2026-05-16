import { Metadata } from "next";
import JAIUClient from "./JAIUClient";

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
  return <JAIUClient />;
}
