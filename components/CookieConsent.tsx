'use client';

import { useState, useEffect } from 'react';
import { type Locale, t } from '@/lib/i18n';

const COOKIE_CONSENT_KEY = 'cookie_consent';

type ConsentStatus = 'accepted' | 'rejected' | null;

export function CookieConsent({ locale }: { locale: Locale }) {
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    setConsent(stored);
  }, []);

  const handleAccept = () => {
    const status: ConsentStatus = 'accepted';
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
    setConsent(status);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const handleReject = () => {
    const status: ConsentStatus = 'rejected';
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
    setConsent(status);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  if (!mounted || consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-slate-200 shadow-lg">
      <div className="max-w-5xl mx-auto">
        {!showDetails ? (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 text-sm text-slate-700">
              <p>
                {locale === 'zh-TW'
                  ? '我們使用 Cookie 進行分析和廣告。點擊「接受」即表示您同意我們使用 Cookie。'
                  : locale === 'es'
                  ? 'Usamos cookies para análisis y publicidad. Al hacer clic en "Aceptar", acepta el uso de cookies.'
                  : locale === 'ja'
                  ? '分析と広告のために Cookie を使用しています。「同意する」をクリックすると、Cookie の使用に同意したことになります。'
                  : 'We use cookies for analytics and advertising. By clicking "Accept", you consent to our use of cookies.'}{' '}
                <button
                  onClick={() => setShowDetails(true)}
                  className="underline text-emerald-600 hover:text-emerald-800"
                  aria-label="Learn more about cookies"
                >
                  {locale === 'zh-TW' ? '了解更多' : locale === 'es' ? 'Más información' : locale === 'ja' ? '詳細' : 'Learn more'}
                </button>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                aria-label="Reject cookies"
              >
                {locale === 'zh-TW' ? '拒絕' : locale === 'es' ? 'Rechazar' : locale === 'ja' ? '拒否' : 'Reject'}
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                aria-label="Accept all cookies"
              >
                {locale === 'zh-TW' ? '全部接受' : locale === 'es' ? 'Aceptar todo' : locale === 'ja' ? 'すべて同意' : 'Accept All'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">
              {locale === 'zh-TW' ? 'Cookie 偏好設定' : locale === 'es' ? 'Preferencias de Cookies' : locale === 'ja' ? 'Cookie 設定' : 'Cookie Preferences'}
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-slate-900">
                    {locale === 'zh-TW' ? '必要 Cookie' : locale === 'es' ? 'Cookies Esenciales' : locale === 'ja' ? '必須 Cookie' : 'Essential Cookies'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {locale === 'zh-TW' ? '網站運作所需，無法停用。' : locale === 'es' ? 'Necesarias para el funcionamiento del sitio. No se pueden desactivar.' : locale === 'ja' ? 'サイトの機能に必要です。無効にできません。' : 'Required for the site to function. Cannot be disabled.'}
                  </p>
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  {locale === 'zh-TW' ? '永遠啟用' : locale === 'es' ? 'Siempre activo' : locale === 'ja' ? '常に有効' : 'Always Active'}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-slate-900">
                    {locale === 'zh-TW' ? '分析 Cookie' : locale === 'es' ? 'Cookies de Análisis' : locale === 'ja' ? '分析 Cookie' : 'Analytics Cookies'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {locale === 'zh-TW' ? '幫助我們了解訪客如何使用網站（Google Analytics）。' : locale === 'es' ? 'Nos ayudan a entender cómo los visitantes usan el sitio (Google Analytics).' : locale === 'ja' ? '訪問者のサイト使用状況を理解するのに役立ちます（Google Analytics）。' : 'Help us understand how visitors use our site (Google Analytics).'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-slate-900">
                    {locale === 'zh-TW' ? '廣告 Cookie' : locale === 'es' ? 'Cookies de Publicidad' : locale === 'ja' ? '広告 Cookie' : 'Advertising Cookies'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {locale === 'zh-TW' ? '用於提供個人化廣告（Google AdSense）。' : locale === 'es' ? 'Se utilizan para entregar anuncios personalizados (Google AdSense).' : locale === 'ja' ? 'パーソナライズされた広告の配信に使用されます（Google AdSense）。' : 'Used to deliver personalized advertisements (Google AdSense).'}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              <a href={`/${locale}/privacy`} className="underline text-emerald-600 hover:text-emerald-800">
                {locale === 'zh-TW' ? '隱私權政策' : locale === 'es' ? 'Política de Privacidad' : locale === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
              </a>
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                aria-label="Reject all cookies"
              >
                {locale === 'zh-TW' ? '全部拒絕' : locale === 'es' ? 'Rechazar todo' : locale === 'ja' ? 'すべて拒否' : 'Reject All'}
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                aria-label="Accept all cookies"
              >
                {locale === 'zh-TW' ? '全部接受' : locale === 'es' ? 'Aceptar todo' : locale === 'ja' ? 'すべて同意' : 'Accept All'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
