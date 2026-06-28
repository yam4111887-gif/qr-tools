import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/ui/Analytics';
import { CookieConsent } from '@/components/CookieConsent';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = t(locale, 'site.title');
  const description = t(locale, 'site.description');

  return {
    title: {
      default: `${title} — Free QR Code Generator`,
      template: `%s | ${title}`,
    },
    description,
    openGraph: {
      title: `${title} — Free QR Code Generator`,
      description,
      url: siteConfig.url,
      siteName: title,
      type: 'website',
      images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'QR Tools — Free QR Code Generator' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — Free QR Code Generator`,
      description,
      images: ['/og-image.svg'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map(l => [l, `${siteConfig.url}/${l}`])
      ),
    },
    robots: { index: true, follow: true },
  };
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: siteConfig.name,
  url: siteConfig.url,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <Navbar locale={loc} />
        <main className="flex-1">{children}</main>
        <Footer locale={loc} />
        <Analytics />
        <CookieConsent locale={loc} />
      </body>
    </html>
  );
}
