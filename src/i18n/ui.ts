import type { Locale } from './config';

interface UIStrings {
  resume: string;
  workExperience: string;
  education: string;
  skills: string;
  certifications: string;
}

const ui: Record<Locale, UIStrings> = {
  en: {
    resume: 'Resume',
    workExperience: 'Work Experience',
    education: 'Education',
    skills: 'Skills',
    certifications: 'Certifications',
  },
  ja: {
    resume: '履歴書',
    workExperience: '職歴',
    education: '学歴',
    skills: 'スキル',
    certifications: '資格',
  },
};

export function getUI(locale: Locale): UIStrings {
  return ui[locale];
}
