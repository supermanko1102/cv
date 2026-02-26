"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_DISPLAY_NAME, SUPPORTED_LOCALES, isLocale } from "@/data/locales";

export function LocaleNav() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1] ?? "";
  const activeLocale = isLocale(firstSegment) ? firstSegment : null;

  if (!activeLocale) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3">
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Language
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {SUPPORTED_LOCALES.map((locale) => (
            <Link
              className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                locale === activeLocale
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
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
