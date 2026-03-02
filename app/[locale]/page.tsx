import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CVTemplateEn } from "@/components/cv/template-en";
import { CVTemplateZhHans } from "@/components/cv/template-zh-hans";
import { CVTemplateZhHant } from "@/components/cv/template-zh-hant";
import { getCVData, isSupportedLocale, SUPPORTED_LOCALES } from "@/data/cv.loader";
import type { Locale } from "@/data/cv.types";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const OPEN_GRAPH_LOCALE: Record<Locale, string> = {
  en: "en_US",
  "zh-hant": "zh_TW",
  "zh-hans": "zh_CN",
};

const LANGUAGE_ALTERNATES = {
  en: "/en",
  "zh-Hant": "/zh-hant",
  "zh-Hans": "/zh-hans",
} as const;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

const buildPageTitle = (locale: Locale, name: string, role: string) =>
  locale === "en" ? `${name} - ${role}` : `${name}｜${role}`;

const buildMetadata = (locale: Locale): Metadata => {
  const cv = getCVData(locale);
  const canonical = `/${locale}`;
  const title = buildPageTitle(locale, cv.name, cv.role);

  return {
    title,
    description: cv.summary,
    openGraph: {
      type: "website",
      locale: OPEN_GRAPH_LOCALE[locale],
      url: canonical,
      siteName: `${cv.name}'s CV`,
      title,
      description: cv.summary,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cv.summary,
    },
    alternates: {
      canonical,
      languages: LANGUAGE_ALTERNATES,
    },
  };
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  return buildMetadata(locale);
}

export default async function LocaleCVPage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const cv = getCVData(locale);

  if (locale === "en") {
    return <CVTemplateEn cv={cv} />;
  }

  if (locale === "zh-hant") {
    return <CVTemplateZhHant cv={cv} />;
  }

  return <CVTemplateZhHans cv={cv} />;
}
