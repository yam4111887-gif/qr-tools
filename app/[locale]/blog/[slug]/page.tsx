import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locales, defaultLocale, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { blogPosts, getPostBySlug } from '@/data/blog';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return locales.flatMap(locale =>
    blogPosts.map(post => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title[loc],
    description: post.description[loc],
    alternates: {
      canonical: `/${loc}/blog/${slug}`,
      languages: Object.fromEntries(locales.map(l => [l, `https://${siteConfig.domain}/${l}/blog/${slug}`])),
    },
    openGraph: {
      title: post.title[loc],
      description: post.description[loc],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.en,
    description: post.description.en,
    datePublished: post.date,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };

  const faqSchema = post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(f => ({
      '@type': 'Question',
      name: f.q[loc],
      acceptedAnswer: { '@type': 'Answer', text: f.a[loc] },
    })),
  } : null;

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-12">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

        <Link href={`/${loc}/blog`} className="inline-flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700 mb-6">
          <ArrowLeft size={14} />
          {t(loc, 'blog.back')}
        </Link>

        <span className="text-xs font-medium text-emerald-600">{post.category[loc]}</span>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">{post.title[loc]}</h1>
        <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
          <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} min read</span>
        </div>

        <div className="mt-8 space-y-4">
          {post.content[loc].map((para, i) => (
            <p key={i} className="text-slate-700 leading-relaxed">{para}</p>
          ))}
        </div>

        {post.faq.length > 0 && (
          <div className="mt-12 rounded-xl bg-slate-50 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">FAQ</h2>
            <div className="space-y-3">
              {post.faq.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-medium text-slate-900">{faq.q[loc]}</h3>
                  <p className="mt-1 text-sm text-slate-600">{faq.a[loc]}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
