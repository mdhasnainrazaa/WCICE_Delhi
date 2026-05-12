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
  title: "WCIEC Organization | Trusted Global MBBS Admission Partner",
  description: "Secure your international MBBS degree with 15+ years of excellence. Transparent fee structure, ethical counselling, and 5000+ successful students.",
  keywords: "MBBS Abroad, MBBS in Kyrgyzstan, Study MBBS Abroad, MBBS Admission 2026, Osh State University MBBS Fees",
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


