import { MetadataRoute } from 'next';
import templatesData from '@/data/templates.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quackmyquery.com';

  const sitemapEntries = templatesData.map((template) => ({
    url: `${baseUrl}/${template.toolSlug}/${template.professionSlug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blueprints`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...sitemapEntries,
  ];
}
