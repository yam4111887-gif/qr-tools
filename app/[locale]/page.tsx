import Link from 'next/link';
import { ShieldCheck, FileCode2, ImagePlus, Ban, ChevronDown, ArrowRight, Lock, Gift, Zap } from 'lucide-react';
import { locales, defaultLocale, type Locale, t } from '@/lib/i18n';
import { toolSlugs, getToolName, getToolDesc, type ToolSlug } from '@/lib/constants';
import { blogPosts } from '@/data/blog';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

import { Link as LinkIcon, FileText, Wifi, User, Mail, MessageSquare } from 'lucide-react';
const iconMap: Record<ToolSlug, React.ComponentType<{ size?: number; className?: string }>> = {
  'url-qr-code': LinkIcon,
  'text-qr-code': FileText,
  'wifi-qr-code': Wifi,
  'vcard-qr-code': User,
  'email-qr-code': Mail,
  'sms-qr-code': MessageSquare,
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;

  const faqs = [
    { q: t(loc, 'home.faq1_q'), a: t(loc, 'home.faq1_a') },
    { q: t(loc, 'home.faq2_q'), a: t(loc, 'home.faq2_a') },
    { q: t(loc, 'home.faq3_q'), a: t(loc, 'home.faq3_a') },
    { q: t(loc, 'home.faq4_q'), a: t(loc, 'home.faq4_a') },
    { q: t(loc, 'home.faq5_q'), a: t(loc, 'home.faq5_a') },
  ];

  const features = [
    { icon: ShieldCheck, title: t(loc, 'feature.private'), desc: t(loc, 'feature.private_desc') },
    { icon: FileCode2, title: t(loc, 'feature.svg_png'), desc: t(loc, 'feature.svg_png_desc') },
    { icon: ImagePlus, title: t(loc, 'feature.logo'), desc: t(loc, 'feature.logo_desc') },
    { icon: Ban, title: t(loc, 'feature.no_watermark'), desc: t(loc, 'feature.no_watermark_desc') },
  ];

  const heroFeatures = [
    { icon: Lock, title: t(loc, 'feature.private'), desc: t(loc, 'feature.private_desc') },
    { icon: FileCode2, title: t(loc, 'feature.svg_png'), desc: t(loc, 'feature.svg_png_desc') },
    { icon: ImagePlus, title: t(loc, 'feature.logo'), desc: t(loc, 'feature.logo_desc') },
    { icon: Gift, title: t(loc, 'feature.no_watermark'), desc: t(loc, 'feature.no_watermark_desc') },
  ];

  const recentPosts = blogPosts.slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                {t(loc, 'home.hero_badge')}
              </div>
              <h1 className="text-3xl font-bold text-slate-900 md:text-5xl">
                {t(loc, 'home.hero_title')}
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                {t(loc, 'home.hero_subtitle')}
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/${loc}/url-qr-code`}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-white font-medium hover:bg-emerald-600 transition-colors"
                >
                  {t(loc, 'home.hero_cta')}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="grid gap-4 sm:grid-cols-2">
                {heroFeatures.map((feature) => (
                  <div key={feature.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                      <feature.icon size={20} className="text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t(loc, 'home.tools_title')}</h2>
          <p className="mt-2 text-slate-600">{t(loc, 'home.tools_subtitle')}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toolSlugs.map((slug) => {
            const Icon = iconMap[slug];
            return (
              <Link
                key={slug}
                href={`/${loc}/${slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
                  <Icon size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600">
                  {getToolName(loc, slug)}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{getToolDesc(loc, slug)}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                  {t(loc, 'common.learn_more')}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t(loc, 'home.features_title')}</h2>
            <p className="mt-2 text-slate-600">{t(loc, 'home.features_subtitle')}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                  <feature.icon size={20} className="text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t(loc, 'home.faq_title')}</h2>
          <p className="mt-2 text-slate-600">{t(loc, 'home.faq_subtitle')}</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-lg border border-slate-200 bg-white p-4" aria-expanded="false">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-slate-900">
                {faq.q}
                <ChevronDown size={18} className="text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t(loc, 'home.blog_title')}</h2>
              <p className="mt-2 text-slate-600">{t(loc, 'home.blog_subtitle')}</p>
            </div>
            <Link href={`/${loc}/blog`} className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700">
              {t(loc, 'common.view_all')}
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {recentPosts.map(post => (
              <Link
                key={post.slug}
                href={`/${loc}/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <span className="mb-2 text-xs font-medium text-emerald-600">{post.category[loc]}</span>
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600 line-clamp-2">
                  {post.title[loc]}
                </h3>
                <p className="mt-1 text-sm text-slate-500 line-clamp-2">{post.description[loc]}</p>
                <span className="mt-3 text-xs text-slate-400">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
