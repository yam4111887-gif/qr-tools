'use client';

import { Heart } from 'lucide-react';

export function KofiButton() {
  const kofiId = process.env.NEXT_PUBLIC_KOFI_ID;

  if (!kofiId) return null;

  return (
    <a
      href={`https://ko-fi.com/${kofiId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
    >
      <Heart size={16} />
      Support Us
    </a>
  );
}
