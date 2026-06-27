export const locales = ['en', 'zh-TW', 'es', 'ja'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  'zh-TW': '繁體中文',
  es: 'Español',
  ja: '日本語',
};

export type TranslationKey =
  | 'site.title'
  | 'site.description'
  | 'nav.home'
  | 'nav.tools'
  | 'nav.blog'
  | 'nav.about'
  | 'nav.privacy'
  | 'nav.terms'
  | 'nav.disclaimer'
  | 'nav.cookies'
  | 'footer.rights'
  | 'footer.description'
  | 'footer.tools'
  | 'footer.company'
  | 'footer.legal'
  | 'footer.resources'
  | 'common.search'
  | 'common.learn_more'
  | 'common.back'
  | 'common.copy'
  | 'common.copied'
  | 'common.download'
  | 'common.free'
  | 'common.view_all'
  | 'home.hero_title'
  | 'home.hero_subtitle'
  | 'home.hero_cta'
  | 'home.hero_badge'
  | 'home.tools_title'
  | 'home.tools_subtitle'
  | 'home.features_title'
  | 'home.features_subtitle'
  | 'home.faq_title'
  | 'home.faq_subtitle'
  | 'home.blog_title'
  | 'home.blog_subtitle'
  | 'home.demo_title'
  | 'feature.private'
  | 'feature.private_desc'
  | 'feature.svg_png'
  | 'feature.svg_png_desc'
  | 'feature.logo'
  | 'feature.logo_desc'
  | 'feature.no_watermark'
  | 'feature.no_watermark_desc'
  | 'tool.url'
  | 'tool.url_desc'
  | 'tool.text'
  | 'tool.text_desc'
  | 'tool.wifi'
  | 'tool.wifi_desc'
  | 'tool.vcard'
  | 'tool.vcard_desc'
  | 'tool.email'
  | 'tool.email_desc'
  | 'tool.sms'
  | 'tool.sms_desc'
  | 'qr.foreground_color'
  | 'qr.background_color'
  | 'qr.size'
  | 'qr.error_correction'
  | 'qr.logo_upload'
  | 'qr.download_png'
  | 'qr.download_svg'
  | 'qr.preview'
  | 'qr.privacy_note'
  | 'qr.generate'
  | 'qr.enter_url'
  | 'qr.enter_text'
  | 'qr.ssid'
  | 'qr.password'
  | 'qr.encryption'
  | 'qr.name'
  | 'qr.phone'
  | 'qr.email_addr'
  | 'qr.organization'
  | 'qr.website'
  | 'qr.subject'
  | 'qr.body'
  | 'qr.message'
  | 'qr.firstname'
  | 'qr.lastname'
  | 'about.title'
  | 'about.description'
  | 'blog.title'
  | 'blog.subtitle'
  | 'blog.published'
  | 'blog.related'
  | 'blog.back'
  | 'encryption.wpa'
  | 'encryption.wep'
  | 'encryption.none'
  | 'error_correction.L'
  | 'error_correction.M'
  | 'error_correction.Q'
  | 'error_correction.H';

type Translations = Record<TranslationKey, string>;

const en: Translations = {
  'site.title': 'QR Tools',
  'site.description': 'Free QR Code Generator — Create custom QR codes for URLs, WiFi, contacts, and more. No signup, no watermark, 100% private.',
  'nav.home': 'Home',
  'nav.tools': 'Tools',
  'nav.blog': 'Blog',
  'nav.about': 'About',
  'nav.privacy': 'Privacy',
  'nav.terms': 'Terms',
  'nav.disclaimer': 'Disclaimer',
  'nav.cookies': 'Cookies',
  'footer.rights': 'All rights reserved.',
  'footer.description': 'Free, private QR code generator. Create custom QR codes for any purpose — no signup required.',
  'footer.tools': 'QR Tools',
  'footer.company': 'Company',
  'footer.legal': 'Legal',
  'footer.resources': 'Resources',
  'common.search': 'Search',
  'common.learn_more': 'Learn more',
  'common.back': 'Back',
  'common.copy': 'Copy',
  'common.copied': 'Copied!',
  'common.download': 'Download',
  'common.free': 'Free',
  'common.view_all': 'View all',
  'home.hero_title': 'Free QR Code Generator',
  'home.hero_subtitle': 'Create custom QR codes for URLs, WiFi, contacts, emails, and more. No signup, no watermark, 100% private — your data never leaves your browser.',
  'home.hero_cta': 'Generate QR Code',
  'home.hero_badge': 'No signup • No watermark • 100% private',
  'home.tools_title': 'QR Code Tools',
  'home.tools_subtitle': 'Generate QR codes for any purpose — all free, all private.',
  'home.features_title': 'Why Choose QR Tools?',
  'home.features_subtitle': 'Built for speed, privacy, and quality.',
  'home.faq_title': 'Frequently Asked Questions',
  'home.faq_subtitle': 'Everything you need to know about QR codes.',
  'home.blog_title': 'Latest from Blog',
  'home.blog_subtitle': 'Tips, guides, and best practices for QR codes.',
  'home.demo_title': 'Live Demo',
  'feature.private': '100% Private',
  'feature.private_desc': 'All processing happens in your browser. Your data never touches a server.',
  'feature.svg_png': 'SVG + PNG',
  'feature.svg_png_desc': 'Download QR codes in both vector (SVG) and raster (PNG) formats.',
  'feature.logo': 'Logo Support',
  'feature.logo_desc': 'Add your logo to the center of the QR code for brand recognition.',
  'feature.no_watermark': 'No Watermark',
  'feature.no_watermark_desc': 'Clean, professional QR codes with zero watermarks or hidden branding.',
  'tool.url': 'URL QR Code',
  'tool.url_desc': 'Generate a QR code for any website URL.',
  'tool.text': 'Text QR Code',
  'tool.text_desc': 'Encode plain text into a scannable QR code.',
  'tool.wifi': 'WiFi QR Code',
  'tool.wifi_desc': 'Share WiFi credentials instantly with a QR code.',
  'tool.vcard': 'vCard QR Code',
  'tool.vcard_desc': 'Share contact information as a QR code.',
  'tool.email': 'Email QR Code',
  'tool.email_desc': 'Pre-fill an email with recipient, subject, and body.',
  'tool.sms': 'SMS QR Code',
  'tool.sms_desc': 'Pre-fill an SMS message with phone number and text.',
  'qr.foreground_color': 'Foreground Color',
  'qr.background_color': 'Background Color',
  'qr.size': 'Size',
  'qr.error_correction': 'Error Correction',
  'qr.logo_upload': 'Upload Logo',
  'qr.download_png': 'Download PNG',
  'qr.download_svg': 'Download SVG',
  'qr.preview': 'Preview',
  'qr.privacy_note': 'Your data never leaves your browser. All processing is 100% client-side.',
  'qr.generate': 'Generate QR Code',
  'qr.enter_url': 'Enter URL',
  'qr.enter_text': 'Enter text',
  'qr.ssid': 'Network Name (SSID)',
  'qr.password': 'Password',
  'qr.encryption': 'Encryption',
  'qr.name': 'Name',
  'qr.phone': 'Phone',
  'qr.email_addr': 'Email',
  'qr.organization': 'Organization',
  'qr.website': 'Website',
  'qr.subject': 'Subject',
  'qr.body': 'Body',
  'qr.message': 'Message',
  'qr.firstname': 'First Name',
  'qr.lastname': 'Last Name',
  'about.title': 'About QR Tools',
  'about.description': 'QR Tools is a free, open QR code generator built with privacy at its core. All QR code generation happens entirely in your browser — no data is ever sent to a server. We believe tools should be fast, private, and free.',
  'blog.title': 'Blog',
  'blog.subtitle': 'Guides, tips, and best practices for QR codes.',
  'blog.published': 'Published',
  'blog.related': 'Related Tools',
  'blog.back': 'Back to Blog',
  'encryption.wpa': 'WPA/WPA2',
  'encryption.wep': 'WEP',
  'encryption.none': 'None',
  'error_correction.L': 'Low (7%)',
  'error_correction.M': 'Medium (15%)',
  'error_correction.Q': 'Quartile (25%)',
  'error_correction.H': 'High (30%)',
};

const zhTW: Translations = {
  'site.title': 'QR 工具',
  'site.description': '免費 QR Code 產生器 — 為網址、WiFi、聯絡人等建立自訂 QR Code。免註冊、無浮水印、100% 隱私。',
  'nav.home': '首頁',
  'nav.tools': '工具',
  'nav.blog': '部落格',
  'nav.about': '關於',
  'nav.privacy': '隱私權',
  'nav.terms': '條款',
  'nav.disclaimer': '免責聲明',
  'nav.cookies': 'Cookie',
  'footer.rights': '版權所有。',
  'footer.description': '免費、隱私的 QR Code 產生器。為任何用途建立自訂 QR Code — 免註冊。',
  'footer.tools': 'QR 工具',
  'footer.company': '公司',
  'footer.legal': '法律',
  'footer.resources': '資源',
  'common.search': '搜尋',
  'common.learn_more': '了解更多',
  'common.back': '返回',
  'common.copy': '複製',
  'common.copied': '已複製！',
  'common.download': '下載',
  'common.free': '免費',
  'common.view_all': '查看全部',
  'home.hero_title': '免費 QR Code 產生器',
  'home.hero_subtitle': '為網址、WiFi、聯絡人、電子郵件等建立自訂 QR Code。免註冊、無浮水印、100% 隱私 — 您的資料永不離開瀏覽器。',
  'home.hero_cta': '產生 QR Code',
  'home.hero_badge': '免註冊 • 無浮水印 • 100% 隱私',
  'home.tools_title': 'QR Code 工具',
  'home.tools_subtitle': '為任何用途產生 QR Code — 全部免費、全部隱私。',
  'home.features_title': '為何選擇 QR 工具？',
  'home.features_subtitle': '專為速度、隱私和品質而建。',
  'home.faq_title': '常見問題',
  'home.faq_subtitle': '關於 QR Code 您需要知道的一切。',
  'home.blog_title': '最新文章',
  'home.blog_subtitle': 'QR Code 的技巧、指南和最佳實踐。',
  'home.demo_title': '即時示範',
  'feature.private': '100% 隱私',
  'feature.private_desc': '所有處理都在您的瀏覽器中完成。您的資料永遠不會觸及伺服器。',
  'feature.svg_png': 'SVG + PNG',
  'feature.svg_png_desc': '同時下載向量 (SVG) 和點陣 (PNG) 格式的 QR Code。',
  'feature.logo': 'Logo 支援',
  'feature.logo_desc': '在 QR Code 中央加入您的 Logo 以提升品牌辨識度。',
  'feature.no_watermark': '無浮水印',
  'feature.no_watermark_desc': '乾淨、專業的 QR Code，零浮水印或隱藏品牌。',
  'tool.url': '網址 QR Code',
  'tool.url_desc': '為任何網站網址產生 QR Code。',
  'tool.text': '文字 QR Code',
  'tool.text_desc': '將純文字編碼為可掃描的 QR Code。',
  'tool.wifi': 'WiFi QR Code',
  'tool.wifi_desc': '使用 QR Code 立即分享 WiFi 密碼。',
  'tool.vcard': 'vCard QR Code',
  'tool.vcard_desc': '將聯絡人資訊分享為 QR Code。',
  'tool.email': '電子郵件 QR Code',
  'tool.email_desc': '預先填入收件人、主旨和內容。',
  'tool.sms': '簡訊 QR Code',
  'tool.sms_desc': '預先填入電話號碼和簡訊內容。',
  'qr.foreground_color': '前景色',
  'qr.background_color': '背景色',
  'qr.size': '尺寸',
  'qr.error_correction': '錯誤修正',
  'qr.logo_upload': '上傳 Logo',
  'qr.download_png': '下載 PNG',
  'qr.download_svg': '下載 SVG',
  'qr.preview': '預覽',
  'qr.privacy_note': '您的資料永不離開瀏覽器。所有處理 100% 在客戶端完成。',
  'qr.generate': '產生 QR Code',
  'qr.enter_url': '輸入網址',
  'qr.enter_text': '輸入文字',
  'qr.ssid': '網路名稱 (SSID)',
  'qr.password': '密碼',
  'qr.encryption': '加密方式',
  'qr.name': '姓名',
  'qr.phone': '電話',
  'qr.email_addr': '電子郵件',
  'qr.organization': '組織',
  'qr.website': '網站',
  'qr.subject': '主旨',
  'qr.body': '內容',
  'qr.message': '訊息',
  'qr.firstname': '名字',
  'qr.lastname': '姓氏',
  'about.title': '關於 QR 工具',
  'about.description': 'QR 工具是一個以隱私為核心的免費開源 QR Code 產生器。所有 QR Code 產生完全在您的瀏覽器中完成 — 資料永遠不會發送到伺服器。我們相信工具應該快速、隱私且免費。',
  'blog.title': '部落格',
  'blog.subtitle': 'QR Code 的指南、技巧和最佳實踐。',
  'blog.published': '發布於',
  'blog.related': '相關工具',
  'blog.back': '返回部落格',
  'encryption.wpa': 'WPA/WPA2',
  'encryption.wep': 'WEP',
  'encryption.none': '無',
  'error_correction.L': '低 (7%)',
  'error_correction.M': '中 (15%)',
  'error_correction.Q': '四分位 (25%)',
  'error_correction.H': '高 (30%)',
};

const es: Translations = {
  'site.title': 'QR Tools',
  'site.description': 'Generador de códigos QR gratis — Crea códigos QR personalizados para URLs, WiFi, contactos y más. Sin registro, sin marca de agua, 100% privado.',
  'nav.home': 'Inicio',
  'nav.tools': 'Herramientas',
  'nav.blog': 'Blog',
  'nav.about': 'Acerca de',
  'nav.privacy': 'Privacidad',
  'nav.terms': 'Términos',
  'nav.disclaimer': 'Aviso legal',
  'nav.cookies': 'Cookies',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.description': 'Generador de códigos QR gratuito y privado. Crea códigos QR personalizados para cualquier propósito — sin registro.',
  'footer.tools': 'Herramientas QR',
  'footer.company': 'Empresa',
  'footer.legal': 'Legal',
  'footer.resources': 'Recursos',
  'common.search': 'Buscar',
  'common.learn_more': 'Saber más',
  'common.back': 'Volver',
  'common.copy': 'Copiar',
  'common.copied': '¡Copiado!',
  'common.download': 'Descargar',
  'common.free': 'Gratis',
  'common.view_all': 'Ver todo',
  'home.hero_title': 'Generador de códigos QR gratis',
  'home.hero_subtitle': 'Crea códigos QR personalizados para URLs, WiFi, contactos, correos y más. Sin registro, sin marca de agua, 100% privado — tus datos nunca salen del navegador.',
  'home.hero_cta': 'Generar código QR',
  'home.hero_badge': 'Sin registro • Sin marca de agua • 100% privado',
  'home.tools_title': 'Herramientas de códigos QR',
  'home.tools_subtitle': 'Genera códigos QR para cualquier propósito — todo gratis, todo privado.',
  'home.features_title': '¿Por qué elegir QR Tools?',
  'home.features_subtitle': 'Diseñado para velocidad, privacidad y calidad.',
  'home.faq_title': 'Preguntas frecuentes',
  'home.faq_subtitle': 'Todo lo que necesitas saber sobre códigos QR.',
  'home.blog_title': 'Últimos artículos',
  'home.blog_subtitle': 'Consejos, guías y mejores prácticas para códigos QR.',
  'home.demo_title': 'Demo en vivo',
  'feature.private': '100% Privado',
  'feature.private_desc': 'Todo el procesamiento ocurre en tu navegador. Tus datos nunca tocan un servidor.',
  'feature.svg_png': 'SVG + PNG',
  'feature.svg_png_desc': 'Descarga códigos QR en formato vectorial (SVG) y raster (PNG).',
  'feature.logo': 'Soporte de Logo',
  'feature.logo_desc': 'Añade tu logo al centro del código QR para reconocimiento de marca.',
  'feature.no_watermark': 'Sin marca de agua',
  'feature.no_watermark_desc': 'Códigos QR limpios y profesionales sin marcas de agua ni logotipos ocultos.',
  'tool.url': 'Código QR de URL',
  'tool.url_desc': 'Genera un código QR para cualquier URL.',
  'tool.text': 'Código QR de texto',
  'tool.text_desc': 'Codifica texto plano en un código QR escaneable.',
  'tool.wifi': 'Código QR de WiFi',
  'tool.wifi_desc': 'Comparte credenciales WiFi al instante con un código QR.',
  'tool.vcard': 'Código QR vCard',
  'tool.vcard_desc': 'Comparte información de contacto como código QR.',
  'tool.email': 'Código QR de email',
  'tool.email_desc': 'Pre-rellena un email con destinatario, asunto y cuerpo.',
  'tool.sms': 'Código QR de SMS',
  'tool.sms_desc': 'Pre-rellena un SMS con número de teléfono y mensaje.',
  'qr.foreground_color': 'Color de primer plano',
  'qr.background_color': 'Color de fondo',
  'qr.size': 'Tamaño',
  'qr.error_correction': 'Corrección de errores',
  'qr.logo_upload': 'Subir logo',
  'qr.download_png': 'Descargar PNG',
  'qr.download_svg': 'Descargar SVG',
  'qr.preview': 'Vista previa',
  'qr.privacy_note': 'Tus datos nunca salen del navegador. Todo el procesamiento es 100% del lado del cliente.',
  'qr.generate': 'Generar código QR',
  'qr.enter_url': 'Introduce URL',
  'qr.enter_text': 'Introduce texto',
  'qr.ssid': 'Nombre de red (SSID)',
  'qr.password': 'Contraseña',
  'qr.encryption': 'Cifrado',
  'qr.name': 'Nombre',
  'qr.phone': 'Teléfono',
  'qr.email_addr': 'Email',
  'qr.organization': 'Organización',
  'qr.website': 'Sitio web',
  'qr.subject': 'Asunto',
  'qr.body': 'Cuerpo',
  'qr.message': 'Mensaje',
  'qr.firstname': 'Nombre',
  'qr.lastname': 'Apellido',
  'about.title': 'Acerca de QR Tools',
  'about.description': 'QR Tools es un generador de códigos QR gratuito y de código abierto construido con la privacidad como núcleo. Toda la generación de códigos QR ocurre completamente en tu navegador — ningún dato se envía a un servidor. Creemos que las herramientas deben ser rápidas, privadas y gratuitas.',
  'blog.title': 'Blog',
  'blog.subtitle': 'Guías, consejos y mejores prácticas para códigos QR.',
  'blog.published': 'Publicado',
  'blog.related': 'Herramientas relacionadas',
  'blog.back': 'Volver al blog',
  'encryption.wpa': 'WPA/WPA2',
  'encryption.wep': 'WEP',
  'encryption.none': 'Ninguno',
  'error_correction.L': 'Bajo (7%)',
  'error_correction.M': 'Medio (15%)',
  'error_correction.Q': 'Cuartil (25%)',
  'error_correction.H': 'Alto (30%)',
};

const ja: Translations = {
  'site.title': 'QRツール',
  'site.description': '無料QRコードジェネレーター — URL、WiFi、連絡先などのカスタムQRコードを作成。登録不要、透かしなし、100%プライベート。',
  'nav.home': 'ホーム',
  'nav.tools': 'ツール',
  'nav.blog': 'ブログ',
  'nav.about': '概要',
  'nav.privacy': 'プライバシー',
  'nav.terms': '利用規約',
  'nav.disclaimer': '免責事項',
  'nav.cookies': 'Cookie',
  'footer.rights': 'All rights reserved.',
  'footer.description': '無料でプライベートなQRコードジェネレーター。あらゆる目的のカスタムQRコードを作成 — 登録不要。',
  'footer.tools': 'QRツール',
  'footer.company': '会社',
  'footer.legal': '法的',
  'footer.resources': 'リソース',
  'common.search': '検索',
  'common.learn_more': '詳しく見る',
  'common.back': '戻る',
  'common.copy': 'コピー',
  'common.copied': 'コピーしました！',
  'common.download': 'ダウンロード',
  'common.free': '無料',
  'common.view_all': 'すべて見る',
  'home.hero_title': '無料QRコードジェネレーター',
  'home.hero_subtitle': 'URL、WiFi、連絡先、メールなどのカスタムQRコードを作成。登録不要、透かしなし、100%プライベート — データはブラウザから離れません。',
  'home.hero_cta': 'QRコードを作成',
  'home.hero_badge': '登録不要 • 透かしなし • 100%プライベート',
  'home.tools_title': 'QRコードツール',
  'home.tools_subtitle': 'あらゆる目的のQRコードを生成 — すべて無料、すべてプライベート。',
  'home.features_title': 'QRツールを選ぶ理由',
  'home.features_subtitle': 'スピード、プライバシー、品質のために設計。',
  'home.faq_title': 'よくある質問',
  'home.faq_subtitle': 'QRコードについて知るべきことすべて。',
  'home.blog_title': '最新のブログ記事',
  'home.blog_subtitle': 'QRコードのヒント、ガイド、ベストプラクティス。',
  'home.demo_title': 'ライブデモ',
  'feature.private': '100%プライベート',
  'feature.private_desc': 'すべての処理はブラウザ内で行われます。データがサーバーに触れることはありません。',
  'feature.svg_png': 'SVG + PNG',
  'feature.svg_png_desc': 'ベクター（SVG）とラスター（PNG）の両方の形式でQRコードをダウンロード。',
  'feature.logo': 'ロゴ対応',
  'feature.logo_desc': 'QRコードの中央にロゴを追加してブランド認知を高めます。',
  'feature.no_watermark': '透かしなし',
  'feature.no_watermark_desc': 'クリーンでプロフェッショナルなQRコード。透かしや隠しブランディングなし。',
  'tool.url': 'URL QRコード',
  'tool.url_desc': 'あらゆるWebサイトURLのQRコードを生成。',
  'tool.text': 'テキストQRコード',
  'tool.text_desc': 'プレーンテキストをスキャン可能なQRコードにエンコード。',
  'tool.wifi': 'WiFi QRコード',
  'tool.wifi_desc': 'QRコードでWiFi認証情報を即座に共有。',
  'tool.vcard': 'vCard QRコード',
  'tool.vcard_desc': '連絡先情報をQRコードとして共有。',
  'tool.email': 'メールQRコード',
  'tool.email_desc': '宛先、件名、本文を事前入力。',
  'tool.sms': 'SMS QRコード',
  'tool.sms_desc': '電話番号とメッセージを事前入力。',
  'qr.foreground_color': '前景色',
  'qr.background_color': '背景色',
  'qr.size': 'サイズ',
  'qr.error_correction': 'エラー訂正',
  'qr.logo_upload': 'ロゴをアップロード',
  'qr.download_png': 'PNGをダウンロード',
  'qr.download_svg': 'SVGをダウンロード',
  'qr.preview': 'プレビュー',
  'qr.privacy_note': 'データはブラウザから離れません。すべての処理は100%クライアント側で行われます。',
  'qr.generate': 'QRコードを生成',
  'qr.enter_url': 'URLを入力',
  'qr.enter_text': 'テキストを入力',
  'qr.ssid': 'ネットワーク名（SSID）',
  'qr.password': 'パスワード',
  'qr.encryption': '暗号化',
  'qr.name': '名前',
  'qr.phone': '電話番号',
  'qr.email_addr': 'メールアドレス',
  'qr.organization': '組織',
  'qr.website': 'ウェブサイト',
  'qr.subject': '件名',
  'qr.body': '本文',
  'qr.message': 'メッセージ',
  'qr.firstname': '名',
  'qr.lastname': '姓',
  'about.title': 'QRツールについて',
  'about.description': 'QRツールは、プライバシーを核心として構築された無料のオープンQRコードジェネレーターです。すべてのQRコード生成は完全にブラウザ内で行われ、データがサーバーに送信されることはありません。ツールは高速、プライベート、そして無料であるべきだと信じています。',
  'blog.title': 'ブログ',
  'blog.subtitle': 'QRコードのガイド、ヒント、ベストプラクティス。',
  'blog.published': '公開日',
  'blog.related': '関連ツール',
  'blog.back': 'ブログに戻る',
  'encryption.wpa': 'WPA/WPA2',
  'encryption.wep': 'WEP',
  'encryption.none': 'なし',
  'error_correction.L': '低（7%）',
  'error_correction.M': '中（15%）',
  'error_correction.Q': '四分位（25%）',
  'error_correction.H': '高（30%）',
};

const translations: Record<Locale, Translations> = { en, 'zh-TW': zhTW, es, ja };

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] || translations.en[key] || key;
}
