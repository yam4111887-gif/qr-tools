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
    title: loc === 'en' ? 'Terms of Service' : loc === 'zh-TW' ? '服務條款' : loc === 'es' ? 'Términos de Servicio' : '利用規約',
    alternates: {
      canonical: `/${loc}/terms`,
      languages: Object.fromEntries(locales.map(l => [l, `https://${siteConfig.domain}/${l}/terms`])),
    },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = (locales.includes(locale as any) ? locale : defaultLocale) as Locale;

  const content = loc === 'en' ? [
    { h: 'Terms of Service', p: `By using ${siteConfig.name}, you agree to these terms.` },
    { h: 'Free Service', p: `${siteConfig.name} is a free tool provided "as is" without warranties of any kind. We do not guarantee that QR codes generated will work in all scenarios or with all scanning devices.` },
    { h: 'Acceptable Use', p: 'You agree not to use this service to generate QR codes for illegal purposes, including but not limited to phishing, malware distribution, or fraud. QR codes linking to harmful content are strictly prohibited.' },
    { h: 'Intellectual Property', p: 'QR Code is an ISO/IEC 18004 standard. The "QR Code" term is a registered trademark of Denso Wave Incorporated, which has publicly stated it will not exercise its patent rights. Generated QR codes belong to you.' },
    { h: 'Limitation of Liability', p: `${siteConfig.name} and its operators are not liable for any damages arising from the use of QR codes generated with this tool. Users are solely responsible for testing QR codes before public deployment.` },
    { h: 'Privacy', p: 'See our Privacy Policy for information about data handling.' },
    { h: 'Changes', p: 'We reserve the right to modify these terms at any time.' },
  ] : loc === 'zh-TW' ? [
    { h: '服務條款', p: `使用 ${siteConfig.name} 即表示您同意這些條款。` },
    { h: '免費服務', p: `${siteConfig.name} 是「現狀」提供的免費工具，不附帶任何保證。我們不保證產生的 QR Code 在所有情況下都能使用。` },
    { h: '合理使用', p: '您同意不使用本服務產生用於非法目的的 QR Code，包括但不限於釣魚、惡意軟體分發或欺詐。' },
    { h: '智慧財產權', p: 'QR Code 是 ISO/IEC 18004 標準。"QR Code" 是 Denso Wave Incorporated 的註冊商標，該公司已公開聲明不行使專利權。產生的 QR Code 歸您所有。' },
    { h: '責任限制', p: `${siteConfig.name} 及其營運者不對使用本工具產生的 QR Code 所造成的任何損害負責。` },
    { h: '隱私', p: '請參閱我們的隱私權政策。' },
    { h: '變更', p: '我們保留隨時修改這些條款的權利。' },
  ] : loc === 'es' ? [
    { h: 'Términos de Servicio', p: `Al usar ${siteConfig.name}, aceptas estos términos.` },
    { h: 'Servicio Gratuito', p: `${siteConfig.name} es una herramienta gratuita proporcionada "tal cual" sin garantías de ningún tipo.` },
    { h: 'Uso Aceptable', p: 'Te comprometes a no usar este servicio para generar códigos QR con fines ilegales.' },
    { h: 'Propiedad Intelectual', p: 'QR Code es un estándar ISO/IEC 18004. "QR Code" es una marca registrada de Denso Wave Incorporated.' },
    { h: 'Limitación de Responsabilidad', p: `${siteConfig.name} no es responsable de los daños derivados del uso de los códigos QR generados.` },
    { h: 'Privacidad', p: 'Consulta nuestra Política de Privacidad.' },
    { h: 'Cambios', p: 'Nos reservamos el derecho de modificar estos términos en cualquier momento.' },
  ] : [
    { h: '利用規約', p: `${siteConfig.name}を使用することで、これらの規約に同意したことになります。` },
    { h: '無料サービス', p: `${siteConfig.name}は「現状有姿」で提供される無料ツールであり、いかなる保証も伴いません。` },
    { h: '許容される使用', p: '本サービスを不正目的で使用しないことに同意します。' },
    { h: '知的財産', p: 'QRコードはISO/IEC 18004規格です。「QR Code」はデンソーウェーブ株式会社の登録商標です。' },
    { h: '責任の制限', p: `${siteConfig.name}は、生成されたQRコードの使用から生じる損害について責任を負いません。` },
    { h: 'プライバシー', p: 'プライバシーポリシーをご参照ください。' },
    { h: '変更', p: '当社はこれらの規約をいつでも変更する権利を留保します。' },
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
