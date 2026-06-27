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
  | 'blog.faq_title'
  | 'legal.last_updated'
  | 'home.faq1_q'
  | 'home.faq1_a'
  | 'home.faq2_q'
  | 'home.faq2_a'
  | 'home.faq3_q'
  | 'home.faq3_a'
  | 'home.faq4_q'
  | 'home.faq4_a'
  | 'home.faq5_q'
  | 'home.faq5_a'
  | 'about.value1_title'
  | 'about.value1_desc'
  | 'about.value2_title'
  | 'about.value2_desc'
  | 'about.value3_title'
  | 'about.value3_desc'
  | 'qr.error_too_much'
  | 'qr.contrast_warning'
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
  | 'qr.remove_logo'
  | 'qr.choose_file'
  | 'qr.empty_state'
  | 'qr.show_password'
  | 'qr.hide_password'
  | 'tool.how_to_title'
  | 'tool.faq_title'
  | 'tool.step1_url'
  | 'tool.step2_url'
  | 'tool.step3_url'
  | 'tool.step4_url'
  | 'tool.step1_text'
  | 'tool.step2_text'
  | 'tool.step3_text'
  | 'tool.step1_wifi'
  | 'tool.step2_wifi'
  | 'tool.step3_wifi'
  | 'tool.step4_wifi'
  | 'tool.step1_vcard'
  | 'tool.step2_vcard'
  | 'tool.step3_vcard'
  | 'tool.step4_vcard'
  | 'tool.step1_email'
  | 'tool.step2_email'
  | 'tool.step3_email'
  | 'tool.step1_sms'
  | 'tool.step2_sms'
  | 'tool.step3_sms'
  | 'tool.faq1_url_q'
  | 'tool.faq1_url_a'
  | 'tool.faq2_url_q'
  | 'tool.faq2_url_a'
  | 'tool.faq3_url_q'
  | 'tool.faq3_url_a'
  | 'tool.faq1_text_q'
  | 'tool.faq1_text_a'
  | 'tool.faq2_text_q'
  | 'tool.faq2_text_a'
  | 'tool.faq1_wifi_q'
  | 'tool.faq1_wifi_a'
  | 'tool.faq2_wifi_q'
  | 'tool.faq2_wifi_a'
  | 'tool.faq3_wifi_q'
  | 'tool.faq3_wifi_a'
  | 'tool.faq1_vcard_q'
  | 'tool.faq1_vcard_a'
  | 'tool.faq2_vcard_q'
  | 'tool.faq2_vcard_a'
  | 'tool.faq1_email_q'
  | 'tool.faq1_email_a'
  | 'tool.faq2_email_q'
  | 'tool.faq2_email_a'
  | 'tool.faq1_sms_q'
  | 'tool.faq1_sms_a'
  | 'tool.faq2_sms_q'
  | 'tool.faq2_sms_a'
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
  'home.faq1_q': 'Are QR codes free to generate?',
  'home.faq1_a': 'Yes! All our QR code tools are completely free with no signup required. You can generate unlimited QR codes.',
  'home.faq2_q': 'Do QR codes expire?',
  'home.faq2_a': 'No, static QR codes generated with our tool never expire. They will work as long as the content they link to is available.',
  'home.faq3_q': 'Is my data safe?',
  'home.faq3_a': 'Absolutely. All QR code generation happens entirely in your browser. No data is ever sent to any server.',
  'home.faq4_q': 'Can I add a logo to my QR code?',
  'home.faq4_a': 'Yes! Upload a logo image and we will place it in the center of your QR code. Error correction automatically increases to ensure scannability.',
  'home.faq5_q': 'What formats can I download?',
  'home.faq5_a': 'You can download QR codes in both PNG (raster) and SVG (vector) formats. SVG is ideal for printing at any size without quality loss.',
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
  'qr.remove_logo': 'Remove',
  'qr.choose_file': 'Choose file...',
  'qr.empty_state': 'Enter data to generate QR code',
  'qr.error_too_much': 'Too much data for QR code. Please shorten your input.',
  'qr.contrast_warning': 'Warning: Foreground and background colors are too similar. The QR code may be difficult to scan.',
  'qr.show_password': 'Show password',
  'qr.hide_password': 'Hide password',
  'tool.how_to_title': 'How to Use',
  'tool.faq_title': 'FAQ',
  'tool.step1_url': 'Enter your website URL in the input field above.',
  'tool.step2_url': 'Customize the foreground and background colors if desired.',
  'tool.step3_url': 'Optionally upload a logo to place in the center.',
  'tool.step4_url': 'Click Download PNG or Download SVG to save your QR code.',
  'tool.step1_text': 'Type or paste your text into the text area above.',
  'tool.step2_text': 'Adjust colors and size to your preference.',
  'tool.step3_text': 'Download your QR code in PNG or SVG format.',
  'tool.step1_wifi': 'Enter your WiFi network name (SSID) and password.',
  'tool.step2_wifi': 'Select the correct encryption type (WPA/WPA2, WEP, or None).',
  'tool.step3_wifi': 'Customize colors and optionally add a logo.',
  'tool.step4_wifi': 'Download and share your WiFi QR code.',
  'tool.step1_vcard': 'Fill in your contact details: name, phone, email, etc.',
  'tool.step2_vcard': 'Add your organization and website if desired.',
  'tool.step3_vcard': 'Customize the appearance of your QR code.',
  'tool.step4_vcard': 'Download and share your contact QR code.',
  'tool.step1_email': 'Enter the recipient email address.',
  'tool.step2_email': 'Add an optional subject and body text.',
  'tool.step3_email': 'Download your email QR code.',
  'tool.step1_sms': 'Enter the recipient phone number.',
  'tool.step2_sms': 'Type your SMS message.',
  'tool.step3_sms': 'Download your SMS QR code.',
  'tool.faq1_url_q': 'Can I use this QR code for any URL?',
  'tool.faq1_url_a': 'Yes, you can generate a QR code for any valid URL including websites, PDFs, images, or any online resource.',
  'tool.faq2_url_q': 'Will the QR code work forever?',
  'tool.faq2_url_a': 'The QR code itself never expires. As long as the destination URL is active, the QR code will continue to work.',
  'tool.faq3_url_q': 'Can I track scans of my URL QR code?',
  'tool.faq3_url_a': 'No, these are static QR codes with no tracking. For analytics, you would need a dynamic QR code service.',
  'tool.faq1_text_q': 'How much text can I encode?',
  'tool.faq1_text_a': 'QR codes can encode up to 2,953 bytes of text. However, shorter text produces simpler codes that scan more reliably.',
  'tool.faq2_text_q': 'Can I include special characters?',
  'tool.faq2_text_a': 'Yes, QR codes support all Unicode characters including emojis, symbols, and international text.',
  'tool.faq1_wifi_q': 'Will guests need a password to connect?',
  'tool.faq1_wifi_a': 'Only if your network requires one. The QR code encodes your WiFi credentials, so scanning it automatically authenticates the user.',
  'tool.faq2_wifi_q': 'Does this work on all phones?',
  'tool.faq2_wifi_a': 'WiFi QR codes work on most modern iOS and Android devices. Some older devices may not support this feature.',
  'tool.faq3_wifi_q': 'Is my WiFi password secure?',
  'tool.faq3_wifi_a': 'Yes, all processing happens in your browser. Your password is never sent to any server.',
  'tool.faq1_vcard_q': 'What is a vCard?',
  'tool.faq1_vcard_a': 'A vCard is a standard file format for electronic business cards. Scanning the QR code adds your contact info directly to the phone address book.',
  'tool.faq2_vcard_q': 'Which fields are required?',
  'tool.faq2_vcard_a': 'Only a name or phone number is required. All other fields are optional but recommended for a complete contact.',
  'tool.faq1_email_q': 'What happens when someone scans the email QR code?',
  'tool.faq1_email_a': 'Their phone will open the email app with the recipient, subject, and body pre-filled. They can review and send the email.',
  'tool.faq2_email_q': 'Can I send the same email to multiple recipients?',
  'tool.faq2_email_a': 'The QR code supports a single primary recipient. For multiple recipients, consider using a URL-based solution instead.',
  'tool.faq1_sms_q': 'Does scanning the SMS QR code send the message automatically?',
  'tool.faq1_sms_a': 'No, it opens the messaging app with the number and text pre-filled. The user must manually press send.',
  'tool.faq2_sms_q': 'Can I use international phone numbers?',
  'tool.faq2_sms_a': 'Yes, use the full international format with country code (e.g., +1234567890) for best compatibility.',
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
  'about.value1_title': 'Privacy First',
  'about.value1_desc': 'All processing happens in your browser. No servers, no tracking.',
  'about.value2_title': 'Open & Free',
  'about.value2_desc': 'No signup, no watermark, no hidden costs. Ever.',
  'about.value3_title': 'Multilingual',
  'about.value3_desc': 'Available in English, Chinese, Spanish, and Japanese.',
  'blog.title': 'Blog',
  'blog.subtitle': 'Guides, tips, and best practices for QR codes.',
  'blog.published': 'Published',
  'blog.related': 'Related Tools',
  'blog.back': 'Back to Blog',
  'blog.faq_title': 'FAQ',
  'legal.last_updated': 'Last updated: June 27, 2026',
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
  'home.faq1_q': '產生 QR Code 是免費的嗎？',
  'home.faq1_a': '是的！我們所有的 QR Code 工具完全免費，無需註冊。您可以無限制地產生 QR Code。',
  'home.faq2_q': 'QR Code 會過期嗎？',
  'home.faq2_a': '不會，我們的工具產生的靜態 QR Code 永遠不會過期。',
  'home.faq3_q': '我的資料安全嗎？',
  'home.faq3_a': '絕對安全。所有 QR Code 產生完全在您的瀏覽器中完成。任何資料都不會發送到伺服器。',
  'home.faq4_q': '可以在 QR Code 中加入 Logo 嗎？',
  'home.faq4_a': '可以！上傳 Logo 圖片，我們會將它放在 QR Code 的中央。錯誤修正會自動提高以確保可掃描。',
  'home.faq5_q': '可以下載哪些格式？',
  'home.faq5_a': '您可以下載 PNG（點陣）和 SVG（向量）格式的 QR Code。SVG 適合在任何尺寸下無損列印。',
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
  'qr.remove_logo': '移除',
  'qr.choose_file': '選擇檔案...',
  'qr.empty_state': '輸入資料以產生 QR Code',
  'qr.error_too_much': '資料過多，無法產生 QR Code。請縮短您的輸入。',
  'qr.contrast_warning': '警告：前景色和背景色太相似，QR Code 可能難以掃描。',
  'qr.show_password': '顯示密碼',
  'qr.hide_password': '隱藏密碼',
  'tool.how_to_title': '如何使用',
  'tool.faq_title': '常見問題',
  'tool.step1_url': '在上方輸入欄位輸入您的網站網址。',
  'tool.step2_url': '視需要自訂前景色和背景色。',
  'tool.step3_url': '選擇性上傳 Logo 放置在中央。',
  'tool.step4_url': '點擊下載 PNG 或下載 SVG 儲存您的 QR Code。',
  'tool.step1_text': '在上方文字區輸入或貼上您的文字。',
  'tool.step2_text': '依偏好調整顏色和尺寸。',
  'tool.step3_text': '下載 PNG 或 SVG 格式的 QR Code。',
  'tool.step1_wifi': '輸入您的 WiFi 網路名稱 (SSID) 和密碼。',
  'tool.step2_wifi': '選擇正確的加密類型 (WPA/WPA2、WEP 或無)。',
  'tool.step3_wifi': '自訂顏色並選擇性加入 Logo。',
  'tool.step4_wifi': '下載並分享您的 WiFi QR Code。',
  'tool.step1_vcard': '填寫您的聯絡資訊：姓名、電話、電子郵件等。',
  'tool.step2_vcard': '視需要加入組織和網站。',
  'tool.step3_vcard': '自訂 QR Code 的外觀。',
  'tool.step4_vcard': '下載並分享您的聯絡 QR Code。',
  'tool.step1_email': '輸入收件者電子郵件地址。',
  'tool.step2_email': '加入選填的主旨和內容。',
  'tool.step3_email': '下載您的電子郵件 QR Code。',
  'tool.step1_sms': '輸入收件者電話號碼。',
  'tool.step2_sms': '輸入您的簡訊內容。',
  'tool.step3_sms': '下載您的簡訊 QR Code。',
  'tool.faq1_url_q': '我可以為任何網址使用這個 QR Code 嗎？',
  'tool.faq1_url_a': '可以，您可以為任何有效的網址產生 QR Code，包括網站、PDF、圖片或任何線上資源。',
  'tool.faq2_url_q': 'QR Code 會永遠有效嗎？',
  'tool.faq2_url_a': 'QR Code 本身永不過期。只要目標網址有效，QR Code 就會持續運作。',
  'tool.faq3_url_q': '我可以追蹤網址 QR Code 的掃描次數嗎？',
  'tool.faq3_url_a': '不行，這些是無追蹤的靜態 QR Code。如需分析功能，您需要動態 QR Code 服務。',
  'tool.faq1_text_q': '我可以編碼多少文字？',
  'tool.faq1_text_a': 'QR Code 最多可編碼 2,953 位元組的文字。但較短的文字會產生更簡單、更容易掃描的 QR Code。',
  'tool.faq2_text_q': '可以包含特殊字元嗎？',
  'tool.faq2_text_a': '可以，QR Code 支援所有 Unicode 字元，包括表情符號、符號和國際文字。',
  'tool.faq1_wifi_q': '訪客需要密碼才能連線嗎？',
  'tool.faq1_wifi_a': '只有在您的網路需要密碼時。QR Code 會編碼您的 WiFi 認證資訊，掃描後會自動驗證使用者。',
  'tool.faq2_wifi_q': '所有手機都支援嗎？',
  'tool.faq2_wifi_a': 'WiFi QR Code 適用於大多數現代 iOS 和 Android 裝置。部分舊裝置可能不支援此功能。',
  'tool.faq3_wifi_q': '我的 WiFi 密碼安全嗎？',
  'tool.faq3_wifi_a': '安全，所有處理都在您的瀏覽器中完成。您的密碼永遠不會發送到任何伺服器。',
  'tool.faq1_vcard_q': '什麼是 vCard？',
  'tool.faq1_vcard_a': 'vCard 是一種標準的電子名片檔案格式。掃描 QR Code 會直接將聯絡資訊加入手機通訊錄。',
  'tool.faq2_vcard_q': '哪些欄位是必填的？',
  'tool.faq2_vcard_a': '只需姓名或電話號碼。其他欄位為選填，但建議填寫以提供完整聯絡資訊。',
  'tool.faq1_email_q': '掃描電子郵件 QR Code 後會發生什麼？',
  'tool.faq1_email_a': '手機會開啟電子郵件應用程式，並預先填入收件者、主旨和內容。使用者可以檢閱後再寄出。',
  'tool.faq2_email_q': '我可以寄送電子郵件給多個收件者嗎？',
  'tool.faq2_email_a': 'QR Code 支援單一主要收件者。如需多個收件者，建議改用網址方案。',
  'tool.faq1_sms_q': '掃描簡訊 QR Code 會自動發送嗎？',
  'tool.faq1_sms_a': '不會，它會開啟訊息應用程式並預先填入號碼和文字，使用者必須手動按下傳送。',
  'tool.faq2_sms_q': '可以使用國際電話號碼嗎？',
  'tool.faq2_sms_a': '可以，請使用包含國碼的完整國際格式（例如 +1234567890）以獲得最佳相容性。',
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
  'about.value1_title': '隱私優先',
  'about.value1_desc': '所有處理都在您的瀏覽器中完成。沒有伺服器，沒有追蹤。',
  'about.value2_title': '開放且免費',
  'about.value2_desc': '免註冊、無浮水印、無隱藏費用。',
  'about.value3_title': '多語系',
  'about.value3_desc': '支援英文、中文、西班牙文和日文。',
  'blog.title': '部落格',
  'blog.subtitle': 'QR Code 的指南、技巧和最佳實踐。',
  'blog.published': '發布於',
  'blog.related': '相關工具',
  'blog.back': '返回部落格',
  'blog.faq_title': '常見問題',
  'legal.last_updated': '最後更新：2026 年 6 月 27 日',
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
  'home.faq1_q': '¿Es gratis generar códigos QR?',
  'home.faq1_a': '¡Sí! Todas nuestras herramientas de códigos QR son completamente gratuitas sin registro.',
  'home.faq2_q': '¿Los códigos QR caducan?',
  'home.faq2_a': 'No, los códigos QR estáticos nunca caducan.',
  'home.faq3_q': '¿Mis datos están seguros?',
  'home.faq3_a': 'Absolutamente. Toda la generación ocurre en tu navegador. Ningún dato se envía a un servidor.',
  'home.faq4_q': '¿Puedo añadir un logo a mi código QR?',
  'home.faq4_a': '¡Sí! Sube un logo y lo colocaremos en el centro de tu código QR.',
  'home.faq5_q': '¿Qué formatos puedo descargar?',
  'home.faq5_a': 'Puedes descargar en PNG (ráster) y SVG (vectorial).',
  'feature.private': '100% Privado',
  'feature.private_desc': 'Todo el procesamiento ocurre en tu navegador. Tus datos nunca tocan un servidor.',
  'feature.svg_png': 'SVG + PNG',
  'feature.svg_png_desc': 'Descarga códigos QR en formato vectorial (SVG) y ráster (PNG).',
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
  'qr.remove_logo': 'Quitar',
  'qr.choose_file': 'Elegir archivo...',
  'qr.empty_state': 'Ingresa datos para generar el código QR',
  'qr.error_too_much': 'Demasiados datos para el código QR. Por favor acorta tu entrada.',
  'qr.contrast_warning': 'Advertencia: Los colores de primer plano y fondo son demasiado similares. El código QR puede ser difícil de escanear.',
  'qr.show_password': 'Mostrar contraseña',
  'qr.hide_password': 'Ocultar contraseña',
  'tool.how_to_title': 'Cómo usar',
  'tool.faq_title': 'Preguntas frecuentes',
  'tool.step1_url': 'Ingresa la URL de tu sitio web en el campo de arriba.',
  'tool.step2_url': 'Personaliza los colores de primer plano y fondo si lo deseas.',
  'tool.step3_url': 'Opcionalmente sube un logo para colocar en el centro.',
  'tool.step4_url': 'Haz clic en Descargar PNG o Descargar SVG para guardar tu código QR.',
  'tool.step1_text': 'Escribe o pega tu texto en el área de texto de arriba.',
  'tool.step2_text': 'Ajusta los colores y el tamaño a tu preferencia.',
  'tool.step3_text': 'Descarga tu código QR en formato PNG o SVG.',
  'tool.step1_wifi': 'Ingresa el nombre de tu red WiFi (SSID) y la contraseña.',
  'tool.step2_wifi': 'Selecciona el tipo de cifrado correcto (WPA/WPA2, WEP o Ninguno).',
  'tool.step3_wifi': 'Personaliza los colores y opcionalmente añade un logo.',
  'tool.step4_wifi': 'Descarga y comparte tu código QR de WiFi.',
  'tool.step1_vcard': 'Completa tus datos de contacto: nombre, teléfono, email, etc.',
  'tool.step2_vcard': 'Añade tu organización y sitio web si lo deseas.',
  'tool.step3_vcard': 'Personaliza la apariencia de tu código QR.',
  'tool.step4_vcard': 'Descarga y comparte tu código QR de contacto.',
  'tool.step1_email': 'Ingresa la dirección de email del destinatario.',
  'tool.step2_email': 'Añade un asunto y cuerpo opcionales.',
  'tool.step3_email': 'Descarga tu código QR de email.',
  'tool.step1_sms': 'Ingresa el número de teléfono del destinatario.',
  'tool.step2_sms': 'Escribe tu mensaje SMS.',
  'tool.step3_sms': 'Descarga tu código QR de SMS.',
  'tool.faq1_url_q': '¿Puedo usar este código QR para cualquier URL?',
  'tool.faq1_url_a': 'Sí, puedes generar un código QR para cualquier URL válida incluyendo sitios web, PDFs, imágenes o cualquier recurso en línea.',
  'tool.faq2_url_q': '¿El código QR funcionará para siempre?',
  'tool.faq2_url_a': 'El código QR en sí nunca caduca. Mientras la URL de destino esté activa, el código QR seguirá funcionando.',
  'tool.faq3_url_q': '¿Puedo rastrear los escaneos de mi código QR?',
  'tool.faq3_url_a': 'No, estos son códigos QR estáticos sin seguimiento. Para analíticas, necesitarías un servicio de códigos QR dinámicos.',
  'tool.faq1_text_q': '¿Cuánto texto puedo codificar?',
  'tool.faq1_text_a': 'Los códigos QR pueden codificar hasta 2.953 bytes de texto. Sin embargo, textos más cortos producen códigos más simples que se escanean mejor.',
  'tool.faq2_text_q': '¿Puedo incluir caracteres especiales?',
  'tool.faq2_text_a': 'Sí, los códigos QR soportan todos los caracteres Unicode incluyendo emojis, símbolos e texto internacional.',
  'tool.faq1_wifi_q': '¿Los invitados necesitarán una contraseña para conectarse?',
  'tool.faq1_wifi_a': 'Solo si tu red lo requiere. El código QR codifica tus credenciales WiFi, por lo que escanearlo autentica al usuario automáticamente.',
  'tool.faq2_wifi_q': '¿Funciona en todos los teléfonos?',
  'tool.faq2_wifi_a': 'Los códigos QR de WiFi funcionan en la mayoría de dispositivos iOS y Android modernos. Algunos dispositivos antiguos pueden no soportar esta función.',
  'tool.faq3_wifi_q': '¿Es segura mi contraseña WiFi?',
  'tool.faq3_wifi_a': 'Sí, todo el procesamiento ocurre en tu navegador. Tu contraseña nunca se envía a ningún servidor.',
  'tool.faq1_vcard_q': '¿Qué es una vCard?',
  'tool.faq1_vcard_a': 'Una vCard es un formato estándar para tarjetas de presentación electrónicas. Escanear el código QR añade tu información de contacto directamente a la libreta de direcciones del teléfono.',
  'tool.faq2_vcard_q': '¿Qué campos son obligatorios?',
  'tool.faq2_vcard_a': 'Solo se requiere un nombre o número de teléfono. Todos los demás campos son opcionales pero recomendados.',
  'tool.faq1_email_q': '¿Qué pasa cuando alguien escanea el código QR de email?',
  'tool.faq1_email_a': 'Su teléfono abrirá la aplicación de email con el destinatario, asunto y cuerpo pre-rellenados. Pueden revisar y enviar el email.',
  'tool.faq2_email_q': '¿Puedo enviar el mismo email a múltiples destinatarios?',
  'tool.faq2_email_a': 'El código QR soporta un único destinatario principal. Para múltiples destinatarios, considera usar una solución basada en URL.',
  'tool.faq1_sms_q': '¿Escanear el código QR de SMS envía el mensaje automáticamente?',
  'tool.faq1_sms_a': 'No, abre la aplicación de mensajería con el número y texto pre-rellenados. El usuario debe presionar enviar manualmente.',
  'tool.faq2_sms_q': '¿Puedo usar números de teléfono internacionales?',
  'tool.faq2_sms_a': 'Sí, usa el formato internacional completo con código de país (ej., +1234567890) para mejor compatibilidad.',
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
  'about.value1_title': 'Privacidad Primero',
  'about.value1_desc': 'Todo el procesamiento ocurre en tu navegador.',
  'about.value2_title': 'Abierto y Gratuito',
  'about.value2_desc': 'Sin registro, sin marca de agua, sin costos ocultos.',
  'about.value3_title': 'Multilingüe',
  'about.value3_desc': 'Disponible en inglés, chino, español y japonés.',
  'blog.title': 'Blog',
  'blog.subtitle': 'Guías, consejos y mejores prácticas para códigos QR.',
  'blog.published': 'Publicado',
  'blog.related': 'Herramientas relacionadas',
  'blog.back': 'Volver al blog',
  'blog.faq_title': 'Preguntas frecuentes',
  'legal.last_updated': 'Última actualización: 27 de junio de 2026',
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
  'footer.rights': '著作権所有。',
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
  'home.faq1_q': 'QRコードの生成は無料ですか？',
  'home.faq1_a': 'はい！すべてのQRコードツールは完全に無料で、登録は不要です。無制限にQRコードを生成できます。',
  'home.faq2_q': 'QRコードの有効期限は切れますか？',
  'home.faq2_a': 'いいえ、静的QRコードの有効期限は切れません。',
  'home.faq3_q': 'データは安全ですか？',
  'home.faq3_a': '絶対に安全です。すべてのQRコード生成はブラウザ内で完全に行われます。',
  'home.faq4_q': 'QRコードにロゴを追加できますか？',
  'home.faq4_a': 'はい！ロゴ画像をアップロードすると、QRコードの中央に配置します。',
  'home.faq5_q': 'どの形式でダウンロードできますか？',
  'home.faq5_a': 'PNG（ラスター）とSVG（ベクター）の両方の形式でダウンロードできます。',
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
  'qr.remove_logo': '削除',
  'qr.choose_file': 'ファイルを選択...',
  'qr.empty_state': 'データを入力してQRコードを生成',
  'qr.error_too_much': 'QRコードにはデータが多すぎます。入力を短くしてください。',
  'qr.contrast_warning': '警告：前景色と背景色が似すぎています。QRコードがスキャンしにくい場合があります。',
  'qr.show_password': 'パスワードを表示',
  'qr.hide_password': 'パスワードを非表示',
  'tool.how_to_title': '使い方',
  'tool.faq_title': 'よくある質問',
  'tool.step1_url': '上の入力フィールドにウェブサイトのURLを入力します。',
  'tool.step2_url': '必要に応じて前景色と背景色をカスタマイズします。',
  'tool.step3_url': '中央に配置するロゴをオプションでアップロードします。',
  'tool.step4_url': 'PNGダウンロードまたはSVGダウンロードをクリックしてQRコードを保存します。',
  'tool.step1_text': '上のテキストエリアにテキストを入力または貼り付けます。',
  'tool.step2_text': 'お好みに合わせて色とサイズを調整します。',
  'tool.step3_text': 'PNGまたはSVG形式でQRコードをダウンロードします。',
  'tool.step1_wifi': 'WiFiネットワーク名（SSID）とパスワードを入力します。',
  'tool.step2_wifi': '正しい暗号化タイプ（WPA/WPA2、WEP、またはなし）を選択します。',
  'tool.step3_wifi': '色をカスタマイズし、オプションでロゴを追加します。',
  'tool.step4_wifi': 'WiFi QRコードをダウンロードして共有します。',
  'tool.step1_vcard': '連絡先情報（名前、電話番号、メールなど）を入力します。',
  'tool.step2_vcard': '必要に応じて組織とウェブサイトを追加します。',
  'tool.step3_vcard': 'QRコードの外観をカスタマイズします。',
  'tool.step4_vcard': '連絡先QRコードをダウンロードして共有します。',
  'tool.step1_email': '受信者のメールアドレスを入力します。',
  'tool.step2_email': 'オプションの件名と本文を追加します。',
  'tool.step3_email': 'メールQRコードをダウンロードします。',
  'tool.step1_sms': '受信者の電話番号を入力します。',
  'tool.step2_sms': 'SMSメッセージを入力します。',
  'tool.step3_sms': 'SMS QRコードをダウンロードします。',
  'tool.faq1_url_q': 'どんなURLでもQRコードにできますか？',
  'tool.faq1_url_a': 'はい、ウェブサイト、PDF、画像、あらゆるオンラインリソースを含む有効なURLのQRコードを生成できます。',
  'tool.faq2_url_q': 'QRコードは永遠に機能しますか？',
  'tool.faq2_url_a': 'QRコード自体は期限切れになりません。リンク先URLがアクティブである限り、QRコードは機能し続けます。',
  'tool.faq3_url_q': 'URL QRコードのスキャンを追跡できますか？',
  'tool.faq3_url_a': 'いいえ、これらは追跡機能のない静的QRコードです。分析には動的QRコードサービスが必要です。',
  'tool.faq1_text_q': 'どれくらいのテキストをエンコードできますか？',
  'tool.faq1_text_a': 'QRコードは最大2,953バイトのテキストをエンコードできます。ただし、短いテキストはスキャンしやすいシンプルなコードを生成します。',
  'tool.faq2_text_q': '特殊文字を含めることはできますか？',
  'tool.faq2_text_a': 'はい、QRコードは絵文字、記号、国際テキストを含むすべてのUnicode文字をサポートしています。',
  'tool.faq1_wifi_q': 'ゲストは接続にパスワードが必要ですか？',
  'tool.faq1_wifi_a': 'ネットワークがパスワードを必要とする場合のみです。QRコードがWiFi認証情報をエンコードするため、スキャンするだけで自動的に認証されます。',
  'tool.faq2_wifi_q': 'すべての携帯電話で機能しますか？',
  'tool.faq2_wifi_a': 'WiFi QRコードはほとんどの最新のiOSおよびAndroidデバイスで機能します。一部の古いデバイスではサポートされていない場合があります。',
  'tool.faq3_wifi_q': 'WiFiパスワードは安全ですか？',
  'tool.faq3_wifi_a': 'はい、すべての処理はブラウザ内で行われます。パスワードがサーバーに送信されることはありません。',
  'tool.faq1_vcard_q': 'vCardとは何ですか？',
  'tool.faq1_vcard_a': 'vCardは電子名刺の標準ファイル形式です。QRコードをスキャンすると、連絡先情報が直接電話のアドレス帳に追加されます。',
  'tool.faq2_vcard_q': '必須フィールドはどれですか？',
  'tool.faq2_vcard_a': '名前または電話番号のみが必須です。他のフィールドは任意ですが、完全な連絡先情報のために推奨されます。',
  'tool.faq1_email_q': 'メールQRコードをスキャンするとどうなりますか？',
  'tool.faq1_email_a': '携帯電話のメールアプリが開き、受信者、件名、本文が事前入力されます。内容を確認してから送信できます。',
  'tool.faq2_email_q': '同じメールを複数の受信者に送信できますか？',
  'tool.faq2_email_a': 'QRコードは単一の主要受信者をサポートしています。複数の受信者には、URLベースのソリューションを検討してください。',
  'tool.faq1_sms_q': 'SMS QRコードをスキャンすると自動的にメッセージが送信されますか？',
  'tool.faq1_sms_a': 'いいえ、メッセージングアプリが開き、番号とテキストが事前入力されます。ユーザーが手動で送信を押す必要があります。',
  'tool.faq2_sms_q': '国際電話番号を使用できますか？',
  'tool.faq2_sms_a': 'はい、最適な互換性のために国コードを含む完全な国際形式（例：+1234567890）を使用してください。',
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
  'about.value1_title': 'プライバシーファースト',
  'about.value1_desc': 'すべての処理はブラウザ内で行われます。サーバーも追跡もありません。',
  'about.value2_title': 'オープン＆フリー',
  'about.value2_desc': '登録不要、透かしなし、隠れた費用なし。',
  'about.value3_title': '多言語対応',
  'about.value3_desc': '英語、中国語、スペイン語、日本語で利用可能。',
  'blog.title': 'ブログ',
  'blog.subtitle': 'QRコードのガイド、ヒント、ベストプラクティス。',
  'blog.published': '公開日',
  'blog.related': '関連ツール',
  'blog.back': 'ブログに戻る',
  'blog.faq_title': 'よくある質問',
  'legal.last_updated': '最終更新：2026年6月27日',
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
