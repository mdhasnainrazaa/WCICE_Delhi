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
  title: "Study Abroad & MBBS Abroad Consultant in India | WCIEC Organization",
  description: "WCIEC is the best study abroad consultant in India for Indian students. Secure your international MBBS degree with 15+ years of excellence. Transparent fees & ethical counselling.",
  keywords: "study abroad consultant in India, study abroad consultants for Indian students, overseas education consultant, foreign education consultant, education consultant for abroad studies, best study abroad consultant in India, study abroad counselling India, international education consultant India, MBBS abroad consultant in India, MBBS abroad consultants for Indian students, MBBS abroad admission consultant, MBBS abroad counselling, MBBS abroad admission guidance",
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


