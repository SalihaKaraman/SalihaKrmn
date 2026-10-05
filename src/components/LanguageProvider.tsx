'use client';

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { defaultLocale, dict, loc, lookup, type Locale, type TranslationKey } from '@/lib/i18n';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: TranslationKey, params?: Record<string, string>) => string;
  loc: (value: string | Record<Locale, string>) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const t = (key: TranslationKey, params?: Record<string, string>) => {
    const value = lookup(key);
    const resolved = value ? loc(value as string | Record<Locale, string>, locale) : key;
    if (!params) return resolved;

    return Object.entries(params).reduce((acc, [name, replacement]) => {
      return acc.replace(new RegExp(`\\{${name}\\}`, 'g'), replacement);
    }, resolved);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      loc: (value: string | Record<Locale, string>) => loc(value, locale),
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
