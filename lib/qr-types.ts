export function formatWiFiQR(ssid: string, password: string, encryption: 'WPA' | 'WEP' | 'nopass'): string {
  const escape = (s: string) => s.replace(/([\\;,:"])/g, '\\$1');
  if (encryption === 'nopass') {
    return `WIFI:T:nopass;S:${escape(ssid)};;`;
  }
  return `WIFI:T:${encryption};S:${escape(ssid)};P:${escape(password)};;`;
}

export function formatVCardQR(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  organization: string;
  url: string;
}): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${data.lastName};${data.firstName};;;`,
    `FN:${data.firstName} ${data.lastName}`,
  ];
  if (data.organization) lines.push(`ORG:${data.organization}`);
  if (data.phone) lines.push(`TEL:${data.phone}`);
  if (data.email) lines.push(`EMAIL:${data.email}`);
  if (data.url) lines.push(`URL:${data.url}`);
  lines.push('END:VCARD');
  return lines.join('\n');
}

export function formatEmailQR(data: {
  to: string;
  subject: string;
  body: string;
}): string {
  const subject = encodeURIComponent(data.subject);
  const body = encodeURIComponent(data.body);
  return `mailto:${data.to}?subject=${subject}&body=${body}`;
}

export function formatSMSQR(data: { phone: string; message: string }): string {
  return `SMSTO:${data.phone}:${data.message}`;
}

export function formatUrlQR(url: string): string {
  if (!url) return '';
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
}
