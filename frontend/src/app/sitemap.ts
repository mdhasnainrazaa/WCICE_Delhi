import { MetadataRoute } from 'next';
import { seoPages } from '@/data/seoPages';
import { universities } from '@/data/universities';

import { blogPostsArray } from '@/data/blogs';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wciecdelhi.com';
  
  const universitySlugs = universities.map(uni => uni.slug);

  const blogSlugs = blogPostsArray.map(post => post.slug);

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const seoRoutes = seoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: page.priority,
  }));

  const universityRoutes = universitySlugs.map((slug) => ({
    url: `${baseUrl}/universities/${slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/universities',
    '/admission',
    '/legal',
    '/mbbs-abroad',
    '/mbbs-in-kyrgyzstan',
    '/mbbs-abroad-consultants-in-delhi',
    '/kyrgyzstan-medical-universities',
    '/blog',
    '/search',
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));

  return [...routes, ...seoRoutes, ...universityRoutes, ...blogRoutes];
}
