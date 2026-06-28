import Link from 'next/link';
import { QrCode } from 'lucide-react';
import { type Locale, t } from '@/lib/i18n';
import { footerLinks, siteConfig } from '@/lib/constants';
import { KofiButton } from '@/components/ui/KofiButton';

export function Footer({ locale }: { locale: Locale }) {
  const links = footerLinks(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
                <QrCode size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold">
                QR<span className="text-emerald-500">Tools</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs">
              {t(locale, 'footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              {t(locale, 'footer.tools')}
            </h3>
            <ul className="space-y-2">
              {links.tools.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-emerald-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              {t(locale, 'footer.company')}
            </h3>
            <ul className="space-y-2">
              {links.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-emerald-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              {t(locale, 'footer.legal')}
            </h3>
            <ul className="space-y-2">
              {links.legal.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-emerald-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; {year} {siteConfig.name}. {t(locale, 'footer.rights')}
          </p>
          <div className="flex items-center gap-4">
            <KofiButton />
            <p className="text-sm text-slate-400">{siteConfig.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
