import { Locale } from "@/data/cv.types";

export const SUPPORTED_LOCALES: Locale[] = ["zh-hant", "zh-hans", "en"];

export const LOCALE_DISPLAY_NAME: Record<Locale, string> = {
  "zh-hant": "繁中",
  "zh-hans": "简中",
  en: "EN",
};

export const isLocale = (value: string): value is Locale =>
  SUPPORTED_LOCALES.includes(value as Locale);
