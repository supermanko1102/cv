"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_DISPLAY_NAME, SUPPORTED_LOCALES, isLocale } from "@/data/locales";

export function LocaleNav() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] ?? "";
  const activeLocale = isLocale(firstSegment) ? firstSegment : null;
  const labelByLocale = {
    en: "Language",
    "zh-hant": "語言",
    "zh-hans": "语言",
  } as const;

  if (!activeLocale) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden">
      <nav className="mx-auto flex w-full max-w-[920px] items-center gap-3 px-4 py-3">
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {labelByLocale[activeLocale]}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {SUPPORTED_LOCALES.map((locale) => (
            <Link
              aria-current={locale === activeLocale ? "page" : undefined}
              className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 ${
                locale === activeLocale
                  ? "border-slate-300 bg-slate-100 text-slate-900"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
              href={`/${locale}`}
              key={locale}
            >
              {LOCALE_DISPLAY_NAME[locale]}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
