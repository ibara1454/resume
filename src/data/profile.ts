import type { Locale } from '../i18n/config';

export interface Profile {
  summary: Summary;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
}

export interface Summary {
  name: Name;
  jobTitle: string;
  languages: string[];
  about: string;
}

export interface Name {
  first: string;
  middle?: string;
  last: string;
}

export interface Contact {
  city: string;
  country: string;
  email: string;
  githubId?: string;
  linkedInId?: string;
  websiteUrl?: string;
}

export type Experience = SinglePositionExperience | MultiPositionExperience;

export interface SinglePositionExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  activities: string[];
  website: string;
}

export function isSinglePositionExperience(
  experience: Experience,
): experience is SinglePositionExperience {
  return (experience as SinglePositionExperience).activities !== undefined;
}

export interface MultiPositionExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  positions: Position[];
  website: string;
}

export function isMultiPositionExperience(
  experience: Experience,
): experience is MultiPositionExperience {
  return (experience as MultiPositionExperience).positions !== undefined;
}

export interface Position {
  jobTitle: string;
  activities: string[];
}

export interface Education {
  name: string;
  degree: string;
  startDate: string;
  endDate: string;
  website: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Certification {
  title: string;
  description: string;
  url: string;
}

const profiles: Record<string, Profile> = {};

export function registerProfile(locale: Locale, profile: Profile): void {
  profiles[locale] = profile;
}

export function getProfile(locale: Locale): Profile {
  const profile = profiles[locale];
  if (!profile) {
    throw new Error(`Profile not found for locale: ${locale}`);
  }
  return profile;
}
