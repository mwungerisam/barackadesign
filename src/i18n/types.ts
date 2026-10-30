export type Language = 'en' | 'rw' | 'fr';

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'rw', label: 'Ikinyarwanda', shortLabel: 'RW' },
  { code: 'fr', label: 'Français', shortLabel: 'FR' },
];
