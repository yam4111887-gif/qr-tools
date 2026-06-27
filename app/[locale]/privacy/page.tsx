import type { Metadata } from 'next';
import { locales, defaultLocale, type Locale, t } from '@/lib/i18n';
import { siteConfig } from '@/lib/constants';

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;
  return {
    title: loc === 'en' ? 'Privacy Policy' : loc === 'zh-TW' ? '隱私權政策' : loc === 'es' ? 'Política de Privacidad' : 'プライバシーポリシー',
    alternates: {
      canonical: `/${loc}/privacy`,
      languages: Object.fromEntries(locales.map(l => [l, `https://${siteConfig.domain}/${l}/privacy`])),
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;

  const content = loc === 'en' ? [
    { h: 'Privacy Policy', p: `At ${siteConfig.name}, we take your privacy seriously. This policy explains how we handle your data.` },
    { h: 'No Data Collection', p: 'All QR code generation happens entirely in your browser. We do not collect, store, or transmit any of the data you enter into our tools — including URLs, text, WiFi credentials, contact information, or uploaded logos.' },
    { h: 'Analytics', p: 'We may use anonymous analytics services (such as Google Analytics or Microsoft Clarity) to understand how visitors use our website. These services collect aggregated, non-personal data such as page views and approximate geographic location. No personal data from QR code generation is ever shared with these services.' },
    { h: 'Cookies', p: 'We use a minimal set of cookies for language preference and analytics. See our Cookie Policy for details.' },
    { h: 'Third-Party Services', p: 'Our website may display advertisements served by third-party networks. These networks may use cookies to serve relevant ads. We do not control these third-party cookies.' },
    { h: 'Children\'s Privacy', p: 'Our service is available to users of all ages. Since we do not collect personal data, COPPA and similar regulations are not applicable.' },
    { h: 'Changes to This Policy', p: 'We may update this policy from time to time. Changes will be posted on this page.' },
    { h: 'Contact', p: 'For privacy questions, please reach out via our GitHub repository.' },
  ] : loc === 'zh-TW' ? [
    { h: '隱私權政策', p: `${siteConfig.name} 非常重視您的隱私。本政策說明我們如何處理您的資料。` },
    { h: '不收集資料', p: '所有 QR Code 產生完全在您的瀏覽器中完成。我們不收集、儲存或傳輸您輸入的任何資料。' },
    { h: '分析服務', p: '我們可能使用匿名分析服務（如 Google Analytics 或 Microsoft Clarity）來了解訪客如何使用我們的網站。這些服務收集的是匯總的、非個人資料。' },
    { h: 'Cookie', p: '我們使用最少的 Cookie 來記住語言偏好和分析。詳見我們的 Cookie 政策。' },
    { h: '第三方服務', p: '我們的網站可能顯示由第三方廣告網絡提供的廣告。我們不控制這些第三方 Cookie。' },
    { h: '兒童隱私', p: '我們的服務適合所有年齡的使用者。由於我們不收集個人資料，COPPA 等法規不適用。' },
    { h: '政策變更', p: '我們可能不時更新本政策。變更將發佈在此頁面上。' },
    { h: '聯絡我們', p: '如有隱私問題，請透過我們的 GitHub 儲存庫聯繫。' },
  ] : loc === 'es' ? [
    { h: 'Política de Privacidad', p: `En ${siteConfig.name}, nos tomamos tu privacidad en serio.` },
    { h: 'Sin Recopilación de Datos', p: 'Toda la generación de códigos QR ocurre completamente en tu navegador. No recopilamos, almacenamos ni transmitimos ninguno de los datos que introduces.' },
    { h: 'Analíticas', p: 'Podemos usar servicios de analíticas anónimas para entender cómo los visitantes usan nuestro sitio web.' },
    { h: 'Cookies', p: 'Usamos un conjunto mínimo de cookies para preferencias de idioma y analíticas.' },
    { h: 'Servicios de Terceros', p: 'Nuestro sitio puede mostrar anuncios servidos por redes de terceros.' },
    { h: 'Privacidad Infantil', p: 'Nuestro servicio está disponible para usuarios de todas las edades.' },
    { h: 'Cambios a Esta Política', p: 'Podemos actualizar esta política de vez en cuando.' },
    { h: 'Contacto', p: 'Para preguntas de privacidad, contáctanos a través de nuestro repositorio de GitHub.' },
  ] : [
    { h: 'プライバシーポリシー', p: `${siteConfig.name}では、プライバシーを真剣に受け止めています。` },
    { h: 'データ収集なし', p: 'すべてのQRコード生成は完全にブラウザ内で行われます。入力したデータを収集、保存、送信することはありません。' },
    { h: 'アナリティクス', p: '匿名の分析サービスを使用して、訪問者が当サイトをどのように使用しているかを理解する場合があります。' },
    { h: 'Cookie', p: '言語設定と分析のために最小限のCookieを使用しています。' },
    { h: 'サードパーティサービス', p: '当サイトには第三者の広告ネットワークによって配信される広告が表示される場合があります。' },
    { h: '子供のプライバシー', p: '当社のサービスはあらゆる年齢のユーザーが利用できます。' },
    { h: 'ポリシーの変更', p: '本ポリシーは随時更新される場合があります。' },
    { h: 'お問い合わせ', p: 'プライバシーに関するご質問は、GitHubリポジトリまでお願いします。' },
  ];

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12">
        {content.map((s, i) => (
          <div key={i} className="mb-6">
            <h2 className="text-lg font-bold text-slate-900">{s.h}</h2>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.p}</p>
          </div>
        ))}
        <p className="mt-8 text-xs text-slate-400">{t(loc, 'legal.last_updated')}</p>
      </div>
    </>
  );
}
