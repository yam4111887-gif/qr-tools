import { locales, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

export type ToolSlugKey = 'url' | 'text' | 'wifi' | 'vcard' | 'email' | 'sms';

export function faqSchemaForTool(locale: Locale, toolKey: ToolSlugKey) {
  const faqs = getToolFaqs(locale, toolKey);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

function getToolSteps(locale: Locale, toolKey: ToolSlugKey): string[] {
  const keys: Record<ToolSlugKey, string[]> = {
    url: ['tool.step1_url', 'tool.step2_url', 'tool.step3_url', 'tool.step4_url'],
    text: ['tool.step1_text', 'tool.step2_text', 'tool.step3_text'],
    wifi: ['tool.step1_wifi', 'tool.step2_wifi', 'tool.step3_wifi', 'tool.step4_wifi'],
    vcard: ['tool.step1_vcard', 'tool.step2_vcard', 'tool.step3_vcard', 'tool.step4_vcard'],
    email: ['tool.step1_email', 'tool.step2_email', 'tool.step3_email'],
    sms: ['tool.step1_sms', 'tool.step2_sms', 'tool.step3_sms'],
  };
  return keys[toolKey].map(k => t(locale, k as any));
}

function getToolFaqs(locale: Locale, toolKey: ToolSlugKey): { q: string; a: string }[] {
  const faqMap: Record<ToolSlugKey, { qKey: string; aKey: string }[]> = {
    url: [
      { qKey: 'tool.faq1_url_q', aKey: 'tool.faq1_url_a' },
      { qKey: 'tool.faq2_url_q', aKey: 'tool.faq2_url_a' },
      { qKey: 'tool.faq3_url_q', aKey: 'tool.faq3_url_a' },
    ],
    text: [
      { qKey: 'tool.faq1_text_q', aKey: 'tool.faq1_text_a' },
      { qKey: 'tool.faq2_text_q', aKey: 'tool.faq2_text_a' },
    ],
    wifi: [
      { qKey: 'tool.faq1_wifi_q', aKey: 'tool.faq1_wifi_a' },
      { qKey: 'tool.faq2_wifi_q', aKey: 'tool.faq2_wifi_a' },
      { qKey: 'tool.faq3_wifi_q', aKey: 'tool.faq3_wifi_a' },
    ],
    vcard: [
      { qKey: 'tool.faq1_vcard_q', aKey: 'tool.faq1_vcard_a' },
      { qKey: 'tool.faq2_vcard_q', aKey: 'tool.faq2_vcard_a' },
    ],
    email: [
      { qKey: 'tool.faq1_email_q', aKey: 'tool.faq1_email_a' },
      { qKey: 'tool.faq2_email_q', aKey: 'tool.faq2_email_a' },
    ],
    sms: [
      { qKey: 'tool.faq1_sms_q', aKey: 'tool.faq1_sms_a' },
      { qKey: 'tool.faq2_sms_q', aKey: 'tool.faq2_sms_a' },
    ],
  };
  return faqMap[toolKey].map(({ qKey, aKey }) => ({
    q: t(locale, qKey as any),
    a: t(locale, aKey as any),
  }));
}

export function ToolPageContent({ toolKey, locale }: { toolKey: ToolSlugKey; locale: Locale }) {
  const steps = getToolSteps(locale, toolKey);
  const faqs = getToolFaqs(locale, toolKey);

  return (
    <>
      {/* How to Use */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">{t(locale, 'tool.how_to_title')}</h2>
        <ol className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-medium text-emerald-700">
                {i + 1}
              </span>
              <span className="text-sm text-slate-600 pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{t(locale, 'tool.faq_title')}</h2>
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
      )}
    </>
  );
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
