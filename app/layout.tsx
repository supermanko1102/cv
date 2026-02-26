import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { LocaleNav } from "@/components/layout/locale-nav";
import { cvEn } from "@/data/cv.en";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(cvEn.contact.website),
  title: {
    default: `${cvEn.name} - ${cvEn.role}`,
    template: `%s | ${cvEn.name}`,
  },
  description: cvEn.summary,
  keywords: [
    "resume",
    "cv",
    "portfolio",
    cvEn.name,
    "software engineer",
    "full stack developer",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: cvEn.name }],
  creator: cvEn.name,
  publisher: cvEn.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: cvEn.contact.website,
    siteName: `${cvEn.name}'s CV`,
    title: `${cvEn.name} - ${cvEn.role}`,
    description: cvEn.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${cvEn.name} - ${cvEn.role}`,
    description: cvEn.summary,
  },
  alternates: {
    canonical: cvEn.contact.website,
    languages: {
      en: "/en",
      "zh-Hant": "/zh-hant",
      "zh-Hans": "/zh-hans",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body className={inter.variable}>
        <LocaleNav />
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
