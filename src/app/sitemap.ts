import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wciec.org';
  
  const universities = [
    'osh-state-university',
    'jalal-abad-state-university',
    'jalal-abad-international-university',
    'osh-international-medical-university',
    'central-asian-international-medical-university',
  ];

  const universityRoutes = universities.map((slug) => ({
    url: `${baseUrl}/universities/${slug}`,
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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));

  return [...routes, ...universityRoutes];
}
