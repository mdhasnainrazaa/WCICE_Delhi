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
  metadataBase: new URL('https://www.wciecdelhi.com'),
  title: {
    default: "MBBS Abroad 2026 | Study MBBS Abroad with WCIEC Delhi",
    template: "%s"
  },
  description: "WCIEC Delhi helps Indian students plan MBBS abroad admission for 2026 in Kyrgyzstan, Russia, Kazakhstan, Uzbekistan, Georgia, Bangladesh, Nepal, Egypt, and China.",
  keywords: "MBBS Abroad, Study MBBS Abroad, MBBS Admission 2026, MBBS in Kyrgyzstan, MBBS in Russia, MBBS in Kazakhstan, MBBS Without Donation, MBBS Fees Abroad, MBBS Admission Through NEET, Best MBBS Consultant",
  authors: [{ name: "WCIEC Delhi" }],
  creator: "WCIEC Delhi",
  publisher: "WCIEC Delhi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.wciecdelhi.com/",
    siteName: "WCIEC Delhi",
    title: "MBBS Abroad 2026 | WCIEC Delhi",
    description: "Plan MBBS abroad admission with country-wise guidance, transparent fees, NEET support, visa assistance, and student support.",
    images: [
      {
        url: "/logos/wciec-logo.webp",
        width: 1200,
        height: 630,
        alt: "WCIEC Delhi - MBBS Abroad Admission Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBBS Abroad 2026 | WCIEC Delhi",
    description: "Trusted MBBS abroad consultancy for Indian students planning admission through NEET.",
    images: ["/logos/wciec-logo.webp"],
  },
  alternates: {
    canonical: "https://www.wciecdelhi.com/",
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
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
import { LeadPopupFormTrigger } from "@/components/modals/LeadPopupFormTrigger";

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
          <main className="flex-grow w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <FloatingCTAs />
          <GlobalApplyModal />
          <LeadPopupFormTrigger />
        </ApplyModalProvider>
      </body>
    </html>
  );
}

