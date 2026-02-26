export type Locale = "en" | "zh-hant" | "zh-hans";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  tech?: string[];
  highlights: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details: string[];
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

export type CVData = {
  languageTag: Locale;
  languageName: string;
  name: string;
  role: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
    github: string;
    linkedin: string;
  };
  labels: {
    language: string;
    contact: string;
    experience: string;
    education: string;
    projects: string;
    sideProjects?: string;
    skills: string;
    techStack: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  sideProjects?: ProjectItem[];
  skills: SkillGroup[];
};
