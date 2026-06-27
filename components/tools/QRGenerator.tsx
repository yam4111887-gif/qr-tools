'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import QRCode from 'qrcode';
import { Download, Upload, Shield, Loader2 } from 'lucide-react';
import { type Locale, t } from '@/lib/i18n';
import { formatWiFiQR, formatVCardQR, formatEmailQR, formatSMSQR, formatUrlQR } from '@/lib/qr-types';

export type QRType = 'url' | 'text' | 'wifi' | 'vcard' | 'email' | 'sms';

interface QRGeneratorProps {
  qrType: QRType;
  locale: Locale;
}

const COLORS = {
  DARK: '#000000',
  WHITE: '#ffffff',
  EMERALD: '#059669',
};

export function QRGenerator({ qrType, locale }: QRGeneratorProps) {
  // Input states
  const [url, setUrl] = useState('https://qrtools.app');
  const [text, setText] = useState('');
  const [wifiSsid, setWifiSsid] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiEncryption, setWifiEncryption] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [vcardFirstName, setVcardFirstName] = useState('');
  const [vcardLastName, setVcardLastName] = useState('');
  const [vcardPhone, setVcardPhone] = useState('');
  const [vcardEmail, setVcardEmail] = useState('');
  const [vcardOrg, setVcardOrg] = useState('');
  const [vcardUrl, setVcardUrl] = useState('');
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [smsPhone, setSmsPhone] = useState('');
  const [smsMessage, setSmsMessage] = useState('');

  // QR styling
  const [fgColor, setFgColor] = useState(COLORS.DARK);
  const [bgColor, setBgColor] = useState(COLORS.WHITE);
  const [size, setSize] = useState(512);
  const [errorLevel, setErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [internalErrorLevel, setInternalErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');

  // Output
  const [canvasRef] = useState(() => ({ current: null as HTMLCanvasElement | null }));
  const [svgString, setSvgString] = useState('');
  const [generating, setGenerating] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Compute QR data string
  const getQRData = useCallback((): string => {
    switch (qrType) {
      case 'url':
        return formatUrlQR(url);
      case 'text':
        return text;
      case 'wifi':
        if (!wifiSsid) return '';
        return formatWiFiQR(wifiSsid, wifiPassword, wifiEncryption);
      case 'vcard': {
        if (!vcardFirstName && !vcardLastName && !vcardPhone) return '';
        return formatVCardQR({
          firstName: vcardFirstName,
          lastName: vcardLastName,
          phone: vcardPhone,
          email: vcardEmail,
          organization: vcardOrg,
          url: vcardUrl,
        });
      }
      case 'email':
        if (!emailTo) return '';
        return formatEmailQR({ to: emailTo, subject: emailSubject, body: emailBody });
      case 'sms':
        if (!smsPhone) return '';
        return formatSMSQR({ phone: smsPhone, message: smsMessage });
      default:
        return '';
    }
  }, [
    qrType, url, text, wifiSsid, wifiPassword, wifiEncryption,
    vcardFirstName, vcardLastName, vcardPhone, vcardEmail, vcardOrg, vcardUrl,
    emailTo, emailSubject, emailBody, smsPhone, smsMessage,
  ]);

  // Auto-switch to H when logo is present
  useEffect(() => {
    if (logoDataUrl) {
      setInternalErrorLevel('H');
    } else {
      setInternalErrorLevel(errorLevel);
    }
  }, [logoDataUrl, errorLevel]);

  // Generate QR code
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const data = getQRData();
      if (!data) {
        setSvgString('');
        return;
      }

      setGenerating(true);
      try {
        // Generate SVG string
        const svg = await QRCode.toString(data, {
          errorCorrectionLevel: internalErrorLevel,
          margin: 2,
          color: {
            dark: fgColor,
            light: bgColor,
          },
          type: 'svg',
          width: size,
        });
        setSvgString(svg);

        // Draw to canvas for PNG export and preview
        const canvas = canvasRef.current;
        if (canvas) {
          await QRCode.toCanvas(canvas, data, {
            errorCorrectionLevel: internalErrorLevel,
            margin: 2,
            color: {
              dark: fgColor,
              light: bgColor,
            },
            width: size,
          });

          // Draw logo if present
          if (logoDataUrl) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
              const img = new Image();
              img.onload = () => {
                const logoSize = size * 0.22;
                const x = (canvas.width - logoSize) / 2;
                const y = (canvas.height - logoSize) / 2;
                // White background for logo
                ctx.fillStyle = bgColor;
                ctx.fillRect(x - 4, y - 4, logoSize + 8, logoSize + 8);
                ctx.drawImage(img, x, y, logoSize, logoSize);
              };
              img.src = logoDataUrl;
            }
          }
        }
      } catch {
        // Invalid input or too much data
      } finally {
        setGenerating(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [getQRData, fgColor, bgColor, size, internalErrorLevel, logoDataUrl, canvasRef]);

  // Logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(reader.result as string);
    reader.readAsDataURL(file);
  };

  const removeLogo = () => setLogoDataUrl(null);

  // Download PNG
  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `qr-code-${qrType}-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // Download SVG
  const downloadSVG = () => {
    if (!svgString) return;
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const link = document.createElement('a');
    link.download = `qr-code-${qrType}-${Date.now()}.svg`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const inputClass = 'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500';
  const labelClass = 'block text-sm font-medium text-slate-700 mb-1';
  const colorInputClass = 'h-9 w-full rounded-lg border border-slate-300 cursor-pointer';

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Input Form */}
      <div className="space-y-4">
        {qrType === 'url' && (
          <div>
            <label className={labelClass}>{t(locale, 'qr.enter_url')}</label>
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://example.com"
              className={inputClass}
            />
          </div>
        )}

        {qrType === 'text' && (
          <div>
            <label className={labelClass}>{t(locale, 'qr.enter_text')}</label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Enter any text..."
              rows={4}
              className={inputClass}
            />
          </div>
        )}

        {qrType === 'wifi' && (
          <>
            <div>
              <label className={labelClass}>{t(locale, 'qr.ssid')}</label>
              <input
                type="text"
                value={wifiSsid}
                onChange={e => setWifiSsid(e.target.value)}
                placeholder="MyNetwork"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.encryption')}</label>
              <select
                value={wifiEncryption}
                onChange={e => setWifiEncryption(e.target.value as 'WPA' | 'WEP' | 'nopass')}
                className={inputClass}
              >
                <option value="WPA">{t(locale, 'encryption.wpa')}</option>
                <option value="WEP">{t(locale, 'encryption.wep')}</option>
                <option value="nopass">{t(locale, 'encryption.none')}</option>
              </select>
            </div>
            {wifiEncryption !== 'nopass' && (
              <div>
                <label className={labelClass}>{t(locale, 'qr.password')}</label>
                <input
                  type="text"
                  value={wifiPassword}
                  onChange={e => setWifiPassword(e.target.value)}
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>
            )}
          </>
        )}

        {qrType === 'vcard' && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>{t(locale, 'qr.firstname')}</label>
                <input type="text" value={vcardFirstName} onChange={e => setVcardFirstName(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>{t(locale, 'qr.lastname')}</label>
                <input type="text" value={vcardLastName} onChange={e => setVcardLastName(e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.phone')}</label>
              <input type="tel" value={vcardPhone} onChange={e => setVcardPhone(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.email_addr')}</label>
              <input type="email" value={vcardEmail} onChange={e => setVcardEmail(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.organization')}</label>
              <input type="text" value={vcardOrg} onChange={e => setVcardOrg(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.website')}</label>
              <input type="url" value={vcardUrl} onChange={e => setVcardUrl(e.target.value)} className={inputClass} />
            </div>
          </>
        )}

        {qrType === 'email' && (
          <>
            <div>
              <label className={labelClass}>{t(locale, 'qr.email_addr')}</label>
              <input type="email" value={emailTo} onChange={e => setEmailTo(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.subject')}</label>
              <input type="text" value={emailSubject} onChange={e => setEmailSubject(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.body')}</label>
              <textarea value={emailBody} onChange={e => setEmailBody(e.target.value)} rows={4} className={inputClass} />
            </div>
          </>
        )}

        {qrType === 'sms' && (
          <>
            <div>
              <label className={labelClass}>{t(locale, 'qr.phone')}</label>
              <input type="tel" value={smsPhone} onChange={e => setSmsPhone(e.target.value)} placeholder="+1234567890" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'qr.message')}</label>
              <textarea value={smsMessage} onChange={e => setSmsMessage(e.target.value)} rows={4} className={inputClass} />
            </div>
          </>
        )}

        {/* Style Controls */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
          <div>
            <label className={labelClass}>{t(locale, 'qr.foreground_color')}</label>
            <input type="color" value={fgColor} onChange={e => setFgColor(e.target.value)} className={colorInputClass} />
          </div>
          <div>
            <label className={labelClass}>{t(locale, 'qr.background_color')}</label>
            <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className={colorInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>{t(locale, 'qr.size')}</label>
            <select value={size} onChange={e => setSize(Number(e.target.value))} className={inputClass}>
              <option value={256}>256px</option>
              <option value={512}>512px</option>
              <option value={1024}>1024px</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>{t(locale, 'qr.error_correction')}</label>
            <select
              value={errorLevel}
              onChange={e => setErrorLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')}
              disabled={!!logoDataUrl}
              className={inputClass}
            >
              <option value="L">{t(locale, 'error_correction.L')}</option>
              <option value="M">{t(locale, 'error_correction.M')}</option>
              <option value="Q">{t(locale, 'error_correction.Q')}</option>
              <option value="H">{t(locale, 'error_correction.H')}</option>
            </select>
          </div>
        </div>

        {/* Logo Upload */}
        <div>
          <label className={labelClass}>{t(locale, 'qr.logo_upload')}</label>
          {logoDataUrl ? (
            <div className="flex items-center gap-3">
              <img src={logoDataUrl} alt="Logo" className="h-12 w-12 rounded-lg border border-slate-200 object-contain" />
              <button
                onClick={removeLogo}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          ) : (
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-500 hover:border-emerald-400 hover:text-emerald-600">
              <Upload size={16} />
              <span>Choose file...</span>
              <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
            </label>
          )}
        </div>

        {/* Privacy Note */}
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          <Shield size={14} />
          <span>{t(locale, 'qr.privacy_note')}</span>
        </div>
      </div>

      {/* Preview & Download */}
      <div className="flex flex-col items-center">
        <div className="sticky top-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            {generating && <Loader2 size={16} className="animate-spin text-slate-400" />}
            <span className="text-sm font-medium text-slate-600">{t(locale, 'qr.preview')}</span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            {svgString ? (
              <canvas
                ref={el => { canvasRef.current = el; }}
                className="max-w-full"
                style={{ maxWidth: 320, maxHeight: 320 }}
              />
            ) : (
              <div className="flex h-[320px] w-[320px] items-center justify-center text-sm text-slate-300">
                Enter data to generate QR code
              </div>
            )}
          </div>
          {svgString && (
            <div className="flex gap-3">
              <button
                onClick={downloadPNG}
                className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
              >
                <Download size={16} />
                PNG
              </button>
              <button
                onClick={downloadSVG}
                className="flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                <Download size={16} />
                SVG
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
