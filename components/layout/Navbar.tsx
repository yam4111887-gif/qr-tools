'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, QrCode } from 'lucide-react';
import { type Locale, t } from '@/lib/i18n';
import { type TranslationKey } from '@/lib/i18n';
import { navLinks } from '@/lib/constants';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar({ locale }: { locale: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
            <QrCode size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold">
            QR<span className="text-emerald-500">Tools</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => {
            const href = link.href === ''
              ? `/${locale}`
              : link.href.startsWith('#')
                ? `/${locale}${link.href}`
                : `/${locale}/${link.href}`;
            return (
            <Link
              key={link.key}
              href={href}
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {t(locale, link.key)}
            </Link>
            );
          })}
          <LanguageSwitcher currentLocale={locale} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher currentLocale={locale} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-600 hover:text-slate-900"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2">
          {navLinks.map(link => {
            const href = link.href === ''
              ? `/${locale}`
              : link.href.startsWith('#')
                ? `/${locale}${link.href}`
                : `/${locale}/${link.href}`;
            return (
            <Link
              key={link.key}
              href={href}
              className="block py-2 text-sm text-slate-600 hover:text-slate-900"
              onClick={() => setMobileOpen(false)}
            >
              {t(locale, link.key)}
            </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
