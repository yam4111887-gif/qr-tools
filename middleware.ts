import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.includes('.')) return;

  const hasLocale = locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const acceptLang = request.headers.get('accept-language') || '';
  const preferred = acceptLang.split(',').map(l => l.split(';')[0].trim().toLowerCase());

  let locale = defaultLocale;
  for (const lang of preferred) {
    if (locales.includes(lang as any)) { locale = lang as any; break; }
    if (lang.startsWith('zh')) { locale = 'zh-TW'; break; }
  }

  const saved = request.cookies.get('NEXT_LOCALE')?.value;
  if (saved && locales.includes(saved as any)) locale = saved as any;

  return NextResponse.redirect(new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url));
}

export const config = { matcher: ['/((?!_next|api|favicon|.*\\..*).*)'] };
