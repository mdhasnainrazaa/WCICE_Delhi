import { Metadata } from "next";
import JASUClient from "./JASUClient";

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
  return <JASUClient />;
}
