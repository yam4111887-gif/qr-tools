import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { QRGenerator } from '@/components/tools/QRGenerator';
import { AdSlot } from '@/components/ui/AdSlot';
import { breadcrumbSchema, howToSchema, ToolPageContent, faqSchemaForTool } from '@/lib/tool-page';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  return {
    title: t(loc, 'tool.url'),
    description: t(loc, 'tool.url_desc'),
    alternates: {
      canonical: `/${loc}/url-qr-code`,
      languages: Object.fromEntries(locales.map(l => [l, `https://${siteConfig.domain}/${l}/url-qr-code`])),
    },
  };
}

export default async function UrlQRPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  const title = t(loc, 'tool.url');
  const desc = t(loc, 'tool.url_desc');

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(loc, 'url-qr-code', title)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema(loc, title)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaForTool(loc, 'url')) }} />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">{title}</h1>
        <p className="mt-2 text-slate-600">{desc}</p>
      </div>

      <QRGenerator qrType="url" locale={loc} />

      <ToolPageContent toolKey="url" locale={loc} />

      <div className="mt-12">
        <AdSlot slot="url-bottom" />
      </div>
    </div>
  );
}
