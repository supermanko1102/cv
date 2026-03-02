export type Locale = "en" | "zh-hant" | "zh-hans";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details?: string[];
};

export type ProjectItem = {
  name: string;
  summary: string;
  tech: string[];
  link?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ContactInfo = {
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
};

type CVDataBase<TLocale extends Locale> = {
  languageTag: TLocale;
  name: string;
  role: string;
  summary: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
};

export type CVDataEn = CVDataBase<"en"> & {
  labels: {
    experience: string;
    education: string;
    projects: string;
    skills: string;
  };
};

type CVDataZhBase<TLocale extends "zh-hant" | "zh-hans"> = CVDataBase<TLocale> & {
  labels: {
    experience: string;
    education: string;
    skills: string;
    sideProjects?: string;
  };
  sideProjects?: ProjectItem[];
};

export type CVDataZhHant = CVDataZhBase<"zh-hant">;
export type CVDataZhHans = CVDataZhBase<"zh-hans">;
export type CVDataZh = CVDataZhHant | CVDataZhHans;
export type CVData = CVDataEn | CVDataZh;

export type CVDataByLocale = {
  en: CVDataEn;
  "zh-hant": CVDataZhHant;
  "zh-hans": CVDataZhHans;
};
