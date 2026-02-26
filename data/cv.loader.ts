import { cvEn } from "@/data/cv.en";
import { LOCALE_DISPLAY_NAME, SUPPORTED_LOCALES, isLocale } from "@/data/locales";
import { cvZhHans } from "@/data/cv.zh-hans";
import { cvZhHant } from "@/data/cv.zh-hant";
import { CVData, Locale } from "@/data/cv.types";

export { LOCALE_DISPLAY_NAME, SUPPORTED_LOCALES };

const cvByLocale: Record<Locale, CVData> = {
  "zh-hant": cvZhHant,
  "zh-hans": cvZhHans,
  en: cvEn,
};

export const isSupportedLocale = (value: string): value is Locale =>
  isLocale(value) && value in cvByLocale;

export const getCVData = (locale: Locale): CVData => cvByLocale[locale];
