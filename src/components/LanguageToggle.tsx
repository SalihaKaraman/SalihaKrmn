'use client';

import { useLanguage } from '@/components/LanguageProvider';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === 'tr' ? 'en' : 'tr')}
      className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
      aria-label="Toggle language"
    >
      {locale === 'tr' ? 'EN' : 'TR'}
    </button>
  );
}
