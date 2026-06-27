import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { ShieldCheck, Code2, Globe } from 'lucide-react';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  return {
    title: t(loc, 'about.title'),
    description: t(loc, 'about.description'),
    alternates: {
      canonical: `/${loc}/about`,
      languages: Object.fromEntries(locales.map(l => [l, `https://${siteConfig.domain}/${l}/about`])),
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;

  const values = [
    { icon: ShieldCheck, title: t(loc, 'about.value1_title'), desc: t(loc, 'about.value1_desc') },
    { icon: Code2, title: t(loc, 'about.value2_title'), desc: t(loc, 'about.value2_desc') },
    { icon: Globe, title: t(loc, 'about.value3_title'), desc: t(loc, 'about.value3_desc') },
  ];

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">{t(loc, 'about.title')}</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">{t(loc, 'about.description')}</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.map(v => (
            <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                <v.icon size={20} className="text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
