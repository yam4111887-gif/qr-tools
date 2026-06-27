import type { Metadata } from 'next';
import Link from 'next/link';
import { locales, defaultLocale, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock } from 'lucide-react';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  return {
    title: t(loc, 'blog.title'),
    description: t(loc, 'blog.subtitle'),
    alternates: {
      canonical: `/${loc}/blog`,
      languages: Object.fromEntries(locales.map(l => [l, `https://${siteConfig.domain}/${l}/blog`])),
    },
  };
}

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;

  return (
    <>
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">{t(loc, 'blog.title')}</h1>
        <p className="mt-2 text-slate-600">{t(loc, 'blog.subtitle')}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {blogPosts.map(post => (
            <Link
              key={post.slug}
              href={`/${loc}/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <span className="mb-2 text-xs font-medium text-emerald-600">{post.category[loc]}</span>
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600">
                {post.title[loc]}
              </h2>
              <p className="mt-2 text-sm text-slate-500 line-clamp-3">{post.description[loc]}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} min</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
