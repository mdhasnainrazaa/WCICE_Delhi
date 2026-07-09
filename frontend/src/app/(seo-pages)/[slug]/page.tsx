import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { getSeoPage, seoPages } from "@/data/seoPages";

interface Props {
  params: Promise<{ slug: string }>;
}

const baseUrl = "https://www.wciecdelhi.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {
      title: "Page Not Found | WCIEC Delhi",
    };
  }

  const canonical = `${baseUrl}/${page.slug}/`;

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: [...page.primaryKeywords, ...page.secondaryKeywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: canonical,
      siteName: "WCIEC Delhi",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "/logos/wciec-logo.webp",
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: ["/logos/wciec-logo.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const canonical = `${baseUrl}/${page.slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.kind === "country" ? "MBBS Country Guides" : "MBBS Abroad Guides",
        item: `${baseUrl}/mbbs-abroad/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.h1,
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: page.h1,
    description: page.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${baseUrl}/#organization`,
      name: "WCIEC Delhi",
      url: `${baseUrl}/`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "MBBS abroad admission counselling",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonical}#article`,
    headline: page.title,
    description: page.metaDescription,
    author: {
      "@type": "Organization",
      name: "WCIEC Delhi",
      url: `${baseUrl}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "WCIEC Delhi",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logos/wciec-logo.webp`,
      },
    },
    mainEntityOfPage: canonical,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={articleSchema} />

      <section className="relative overflow-hidden bg-[#071629] pt-32 pb-20 text-white">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-white [clip-path:polygon(0_70%,100%_20%,100%_100%,0_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <GraduationCap size={16} />
              {page.eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {page.heroLead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact-us/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2F80ED] px-6 py-3 font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#1f6fd4]"
              >
                Free Profile Evaluation <ArrowRight size={18} />
              </Link>
              <Link
                href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad."
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} /> WhatsApp Counsellor
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-white/15 bg-white/10 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white/70">
              <ClipboardCheck size={16} />
              Quick Facts
            </div>
            <div className="grid gap-3">
              {page.facts.map((fact) => (
                <div key={fact.label} className="rounded-md bg-white/10 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-white/55">
                    {fact.label}
                  </div>
                  <div className="mt-1 font-semibold text-white">{fact.value}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-10">
          <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#2F80ED]">
              <BookOpenCheck size={16} />
              Search Intent
            </div>
            <p className="text-lg leading-8 text-gray-700">{page.searchIntent}</p>
          </section>

          {page.sections.map((section) => (
            <section key={section.heading} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[#071629]">{section.heading}</h2>
              <p className="mt-4 leading-8 text-gray-700">{section.body}</p>
              {section.bullets && (
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7 text-gray-700">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#2F80ED]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
              <HelpCircle className="text-[#2F80ED]" />
              <h2 className="text-2xl font-bold text-[#071629]">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="cursor-pointer list-none font-bold text-[#071629]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 leading-7 text-gray-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <section className="rounded-lg border border-gray-100 bg-[#F7FAFF] p-6">
            <div className="mb-4 flex items-center gap-2 text-lg font-bold text-[#071629]">
              <ShieldCheck className="text-[#2F80ED]" />
              Covered Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {[...page.primaryKeywords, ...page.secondaryKeywords].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-[#2F80ED]/15 bg-white px-3 py-1 text-sm font-semibold text-[#21446f]"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#071629]">Related WCIEC Guides</h2>
            <div className="mt-4 grid gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between rounded-md border border-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-[#2F80ED]/30 hover:text-[#2F80ED]"
                >
                  {link.label}
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg bg-[#071629] p-6 text-white">
            <h2 className="text-xl font-bold">Need country-wise guidance?</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Share NEET status, PCB marks, budget, and preferred country. WCIEC Delhi will help shortlist compliant universities.
            </p>
            <Link
              href="/contact-us/"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-[#071629] transition hover:bg-white/90"
            >
              Start Counselling <ArrowRight size={16} />
            </Link>
          </section>
        </aside>
      </section>
    </>
  );
}
