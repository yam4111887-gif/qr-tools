import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const pages: MetadataRoute.Sitemap = [];

  const routes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/url-qr-code', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/wifi-qr-code', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/text-qr-code', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/vcard-qr-code', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/email-qr-code', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/sms-qr-code', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/about', priority: 0.5, changeFreq: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/terms', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/disclaimer', priority: 0.3, changeFreq: 'monthly' as const },
    { path: '/cookies', priority: 0.3, changeFreq: 'monthly' as const },
  ];

  for (const locale of locales) {
    for (const route of routes) {
      pages.push({
        url: `${base}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: locale === 'en' ? route.priority : route.priority * 0.9,
      });
    }
    for (const post of blogPosts) {
      pages.push({
        url: `${base}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
  }

  return pages;
}
