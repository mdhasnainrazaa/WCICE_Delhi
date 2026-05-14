import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { FloatingCTAs } from "@/components/ui/FloatingCTAs";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wciec.org'),
  title: {
    default: "MBBS in Kyrgyzstan for Indian Students 2026 | Study Medicine Abroad",
    template: "%s | WCIEC Organization"
  },
  description: "WCIEC offers direct MBBS admission in Kyrgyzstan for Indian students. Affordable medical education, NMC recognized universities, Indian food & hostel. Admission 2026 open now!",
  keywords: "MBBS in Kyrgyzstan for Indian Students, Study Medicine in Kyrgyzstan, Affordable Medical Education in Kyrgyzstan, Direct MBBS Admission in Kyrgyzstan, Best Medical Universities in Kyrgyzstan, NMC Recognized Medical Colleges in Kyrgyzstan, Low-Cost MBBS Abroad in Kyrgyzstan, MBBS Admission 2026 Kyrgyzstan, NEET Qualified Students MBBS Kyrgyzstan",
  authors: [{ name: "WCIEC Organization" }],
  creator: "WCIEC Organization",
  publisher: "WCIEC Organization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wciec.org",
    siteName: "WCIEC Organization",
    title: "MBBS in Kyrgyzstan for Indian Students | Admissions Open 2026",
    description: "Direct MBBS admission in top-ranked, NMC-recognized medical universities in Kyrgyzstan. Low fees, Indian mess, and expert FMGE coaching.",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "WCIEC Organization - MBBS in Kyrgyzstan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study MBBS in Kyrgyzstan | Direct Admission 2026",
    description: "Trusted MBBS consultancy for Kyrgyzstan. Secure your medical seat today with WCIEC.",
    images: ["/logos/logo.png"],
  },
  alternates: {
    canonical: "https://wciec.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ApplyModalProvider } from "@/context/ApplyModalContext";
import { GlobalApplyModal } from "@/components/modals/GlobalApplyModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <ApplyModalProvider>
          <OrganizationSchema />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingCTAs />
          <GlobalApplyModal />
        </ApplyModalProvider>
      </body>
    </html>
  );
}


