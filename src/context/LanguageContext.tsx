"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationKey } from '@/translations';

type Locale = 'en' | 'bn' | 'jp';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLocale = localStorage.getItem('language_preference') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'bn' || savedLocale === 'jp')) {
      setLocale(savedLocale);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('language_preference', newLocale);
  };

  const t = (key: TranslationKey): any => {
    const keys = key.split('.');
    let result: any = translations[locale];
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        // Fallback to English if translation is missing
        let englishFallback: any = translations['en'];
        for (const fallbackK of keys) {
          if (englishFallback && englishFallback[fallbackK]) {
            englishFallback = englishFallback[fallbackK];
          } else {
            return key; // Return the key itself as last resort
          }
        }
        return englishFallback;
      }
    }
    
    return result ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
