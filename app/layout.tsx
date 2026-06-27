import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'QR Tools — Free QR Code Generator',
    template: '%s | QR Tools',
  },
  description: 'Free QR Code Generator — Create custom QR codes for URLs, WiFi, contacts, and more. No signup, no watermark, 100% private.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
