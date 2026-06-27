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
    { icon: ShieldCheck, title: loc === 'en' ? 'Privacy First' : loc === 'zh-TW' ? '隱私優先' : loc === 'es' ? 'Privacidad Primero' : 'プライバシーファースト',
      desc: loc === 'en' ? 'All processing happens in your browser. No servers, no tracking.' : loc === 'zh-TW' ? '所有處理都在您的瀏覽器中完成。沒有伺服器，沒有追蹤。' : loc === 'es' ? 'Todo el procesamiento ocurre en tu navegador.' : 'すべての処理はブラウザ内で行われます。' },
    { icon: Code2, title: loc === 'en' ? 'Open & Free' : loc === 'zh-TW' ? '開放且免費' : loc === 'es' ? 'Abierto y Gratuito' : 'オープン＆フリー',
      desc: loc === 'en' ? 'No signup, no watermark, no hidden costs. Ever.' : loc === 'zh-TW' ? '免註冊、無浮水印、無隱藏費用。' : loc === 'es' ? 'Sin registro, sin marca de agua, sin costos ocultos.' : '登録不要、透かしなし、隠れた費用なし。' },
    { icon: Globe, title: loc === 'en' ? 'Multilingual' : loc === 'zh-TW' ? '多語系' : loc === 'es' ? 'Multilingüe' : '多言語対応',
      desc: loc === 'en' ? 'Available in English, Chinese, Spanish, and Japanese.' : loc === 'zh-TW' ? '支援英文、中文、西班牙文和日文。' : loc === 'es' ? 'Disponible en inglés, chino, español y japonés.' : '英語、中国語、スペイン語、日本語で利用可能。' },
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
