import type { Metadata } from 'next';
import { locales, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { QRGenerator, type QRType } from '@/components/tools/QRGenerator';
import { AdSlot } from '@/components/ui/AdSlot';

interface ToolPageProps {
  params: Promise<{ locale: Locale }>;
  qrType: QRType;
  slug: string;
  titleKey: 'tool.url' | 'tool.text' | 'tool.wifi' | 'tool.vcard' | 'tool.email' | 'tool.sms';
  descKey: 'tool.url_desc' | 'tool.text_desc' | 'tool.wifi_desc' | 'tool.vcard_desc' | 'tool.email_desc' | 'tool.sms_desc';
}

export async function generateToolMetadata({ params, titleKey, descKey }: Pick<ToolPageProps, 'params' | 'titleKey' | 'descKey'>): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: t(locale, titleKey),
    description: t(locale, descKey),
    alternates: {
      canonical: `/${locale}/${slugFromTitle(titleKey)}`,
      languages: Object.fromEntries(
        locales.map(l => [l, `https://${siteConfig.domain}/${l}/${slugFromTitle(titleKey)}`])
      ),
    },
  };
}

function slugFromTitle(key: string): string {
  const map: Record<string, string> = {
    'tool.url': 'url-qr-code',
    'tool.text': 'text-qr-code',
    'tool.wifi': 'wifi-qr-code',
    'tool.vcard': 'vcard-qr-code',
    'tool.email': 'email-qr-code',
    'tool.sms': 'sms-qr-code',
  };
  return map[key] || '';
}

export function ToolPage({ params, qrType, titleKey, descKey }: ToolPageProps) {
  // This is an async component pattern - but we'll handle it in the page files
  return null;
}

// Helper to generate breadcrumb schema
export function breadcrumbSchema(locale: Locale, slug: string, title: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${siteConfig.domain}/${locale}` },
      { '@type': 'ListItem', position: 2, name: title, item: `https://${siteConfig.domain}/${locale}/${slug}` },
    ],
  };
}

export function howToSchema(locale: Locale, toolName: string) {
  const steps = locale === 'en' ? ['Open the tool', 'Enter your data', 'Customize colors and size', 'Download as PNG or SVG'] :
    locale === 'zh-TW' ? ['開啟工具', '輸入資料', '自訂顏色和尺寸', '下載為 PNG 或 SVG'] :
    locale === 'es' ? ['Abre la herramienta', 'Ingresa tus datos', 'Personaliza colores y tamaño', 'Descarga como PNG o SVG'] :
    ['ツールを開く', 'データを入力', '色とサイズをカスタマイズ', 'PNGまたはSVGとしてダウンロード'];

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: toolName,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step,
    })),
  };
}
