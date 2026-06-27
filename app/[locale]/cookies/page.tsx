import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  return {
    title: loc === 'en' ? 'Cookie Policy' : loc === 'zh-TW' ? 'Cookie 政策' : loc === 'es' ? 'Política de Cookies' : 'Cookieポリシー',
    alternates: { canonical: `/${loc}/cookies` },
  };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;

  const content = loc === 'en' ? [
    { h: 'Cookie Policy', p: 'This policy explains how we use cookies on our website.' },
    { h: 'What Are Cookies', p: 'Cookies are small text files stored on your device when you visit a website. They help with language preferences, analytics, and advertising.' },
    { h: 'Cookies We Use', p: 'NEXT_LOCALE — Remember your language preference. _ga, _gid — Google Analytics (anonymous usage data). _clck — Microsoft Clarity (anonymous session recording). Third-party advertising cookies (if ads are enabled).' },
    { h: 'Managing Cookies', p: 'You can control cookies through your browser settings. Disabling cookies may affect some features of the website.' },
    { h: 'No Tracking of QR Data', p: 'We never use cookies or any other technology to track the data you enter into our QR code generator. All QR generation is 100% client-side.' },
  ] : loc === 'zh-TW' ? [
    { h: 'Cookie 政策', p: '本政策說明我們如何在網站上使用 Cookie。' },
    { h: '什麼是 Cookie', p: 'Cookie 是您造訪網站時儲存在裝置上的小型文字檔案。' },
    { h: '我們使用的 Cookie', p: 'NEXT_LOCALE — 記住您的語言偏好。_ga, _gid — Google Analytics（匿名使用資料）。_clck — Microsoft Clarity。第三方廣告 Cookie（如果已啟用廣告）。' },
    { h: '管理 Cookie', p: '您可以透過瀏覽器設定控制 Cookie。停用 Cookie 可能影響網站的某些功能。' },
    { h: '不追蹤 QR 資料', p: '我們從不使用 Cookie 或任何其他技術追蹤您輸入的 QR Code 資料。' },
  ] : loc === 'es' ? [
    { h: 'Política de Cookies', p: 'Esta política explica cómo usamos cookies en nuestro sitio.' },
    { h: '¿Qué son las Cookies?', p: 'Las cookies son pequeños archivos de texto almacenados en tu dispositivo.' },
    { h: 'Cookies que Usamos', p: 'NEXT_LOCALE — Preferencia de idioma. _ga, _gid — Google Analytics. _clck — Microsoft Clarity.' },
    { h: 'Gestión de Cookies', p: 'Puedes controlar las cookies a través de la configuración de tu navegador.' },
    { h: 'Sin Rastreo de Datos QR', p: 'Nunca usamos cookies para rastrear los datos del generador de QR.' },
  ] : [
    { h: 'Cookieポリシー', p: '当ポリシーは、当サイトでのCookieの使用方法を説明します。' },
    { h: 'Cookieとは', p: 'Cookieは、ウェブサイトを訪問した際にデバイスに保存される小さなテキストファイルです。' },
    { h: '使用するCookie', p: 'NEXT_LOCALE — 言語設定。_ga, _gid — Google Analytics。_clck — Microsoft Clarity。' },
    { h: 'Cookieの管理', p: 'ブラウザの設定でCookieを制御できます。' },
    { h: 'QRデータの追跡なし', p: 'QRコードジェネレーターに入力されたデータを追跡するためにCookieを使用することはありません。' },
  ];

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12">
        {content.map((s, i) => (
          <div key={i} className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">{s.h}</h2>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.p}</p>
          </div>
        ))}
        <p className="mt-8 text-xs text-slate-400">Last updated: 2026-06-27</p>
      </div>
    </>
  );
}
