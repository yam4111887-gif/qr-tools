'use client';
import { Globe } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { locales, localeNames, type Locale } from '@/lib/i18n';

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    const segments = pathname.split('/');
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join('/'));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 rounded"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 min-w-[140px] z-50">
            {locales.map(l => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`w-full text-left px-3 py-1.5 text-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 ${
                  l === currentLocale ? 'text-emerald-600 font-medium' : 'text-slate-600'
                }`}
              >
                {localeNames[l]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
