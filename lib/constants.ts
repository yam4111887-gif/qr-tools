import type { Locale } from './i18n';
import { t } from './i18n';
import type { TranslationKey } from './i18n';

export const siteConfig = {
  name: 'QR Tools',
  domain: 'qrtools.app',
  url: 'https://qrtools.app',
};

export const navLinks: { key: TranslationKey; href: string }[] = [
  { key: 'nav.home', href: '' },
  { key: 'nav.tools', href: '#tools' },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.about', href: '/about' },
];

export const toolSlugs = [
  'url-qr-code',
  'text-qr-code',
  'wifi-qr-code',
  'vcard-qr-code',
  'email-qr-code',
  'sms-qr-code',
] as const;

export type ToolSlug = (typeof toolSlugs)[number];

export const toolIcons: Record<ToolSlug, string> = {
  'url-qr-code': 'Link',
  'text-qr-code': 'FileText',
  'wifi-qr-code': 'Wifi',
  'vcard-qr-code': 'Contact',
  'email-qr-code': 'Mail',
  'sms-qr-code': 'MessageSquare',
};

export function getToolName(locale: Locale, slug: ToolSlug): string {
  const keyMap: Record<ToolSlug, TranslationKey> = {
    'url-qr-code': 'tool.url',
    'text-qr-code': 'tool.text',
    'wifi-qr-code': 'tool.wifi',
    'vcard-qr-code': 'tool.vcard',
    'email-qr-code': 'tool.email',
    'sms-qr-code': 'tool.sms',
  };
  return t(locale, keyMap[slug]);
}

export function getToolDesc(locale: Locale, slug: ToolSlug): string {
  const keyMap: Record<ToolSlug, TranslationKey> = {
    'url-qr-code': 'tool.url_desc',
    'text-qr-code': 'tool.text_desc',
    'wifi-qr-code': 'tool.wifi_desc',
    'vcard-qr-code': 'tool.vcard_desc',
    'email-qr-code': 'tool.email_desc',
    'sms-qr-code': 'tool.sms_desc',
  };
  return t(locale, keyMap[slug]);
}

export function footerLinks(locale: Locale) {
  return {
    tools: toolSlugs.map(slug => ({
      label: getToolName(locale, slug),
      href: `/${locale}/${slug}`,
    })),
    company: [
      { label: t(locale, 'nav.about'), href: `/${locale}/about` },
      { label: t(locale, 'nav.blog'), href: `/${locale}/blog` },
    ],
    legal: [
      { label: t(locale, 'nav.privacy'), href: `/${locale}/privacy` },
      { label: t(locale, 'nav.terms'), href: `/${locale}/terms` },
      { label: t(locale, 'nav.disclaimer'), href: `/${locale}/disclaimer` },
      { label: t(locale, 'nav.cookies'), href: `/${locale}/cookies` },
    ],
    resources: toolSlugs.slice(0, 4).map(slug => ({
      label: getToolName(locale, slug),
      href: `/${locale}/${slug}`,
    })),
  };
}
