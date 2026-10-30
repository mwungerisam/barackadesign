import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, Language } from '../../i18n/types';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'compact' | 'segmented';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'segmented') {
    return (
      <div
        className={`flex items-center gap-1 p-1 bg-[#10141D] rounded-lg border border-white/10 font-['Space_Mono'] text-xs ${className}`}
        aria-label="Language selection"
      >
        <Globe className="w-3.5 h-3.5 text-slate-400 ml-1 mr-0.5" />
        {SUPPORTED_LANGUAGES.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`px-2 py-1 rounded transition-colors cursor-pointer select-none ${
                isActive
                  ? 'bg-white text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title={lang.label}
              aria-pressed={isActive}
            >
              {lang.shortLabel}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-1.5 font-['Space_Mono'] text-xs text-slate-400 ${className}`}
      aria-label="Language selection"
    >
      <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
      <div className="flex items-center gap-1">
        {SUPPORTED_LANGUAGES.map((lang, idx) => {
          const isActive = language === lang.code;
          return (
            <React.Fragment key={lang.code}>
              <button
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`transition-colors cursor-pointer select-none py-0.5 px-1 ${
                  isActive ? 'text-white font-bold underline underline-offset-4' : 'text-slate-400 hover:text-slate-200'
                }`}
                title={lang.label}
                aria-pressed={isActive}
              >
                {lang.shortLabel}
              </button>
              {idx < SUPPORTED_LANGUAGES.length - 1 && (
                <span className="text-slate-600 select-none" aria-hidden="true">
                  /
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
