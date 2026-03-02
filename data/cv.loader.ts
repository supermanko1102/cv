import { cvEn } from "@/data/cv.en";
import { LOCALE_DISPLAY_NAME, SUPPORTED_LOCALES, isLocale } from "@/data/locales";
import { cvZhHans } from "@/data/cv.zh-hans";
import { cvZhHant } from "@/data/cv.zh-hant";
import { CVDataByLocale, Locale } from "@/data/cv.types";

export { LOCALE_DISPLAY_NAME, SUPPORTED_LOCALES };

const cvByLocale: CVDataByLocale = {
  "zh-hant": cvZhHant,
  "zh-hans": cvZhHans,
  en: cvEn,
};

export const isSupportedLocale = (value: string): value is Locale =>
  isLocale(value) && value in cvByLocale;

export const getCVData = <TLocale extends Locale>(locale: TLocale): CVDataByLocale[TLocale] =>
  cvByLocale[locale];
