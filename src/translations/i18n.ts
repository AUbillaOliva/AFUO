import ICU from "i18next-icu";
import en from "i18next-icu/locale-data/en";
import es from "i18next-icu/locale-data/es";
import _ from "lodash";
import { NextComponentType, NextPageContext } from "next";
import NextI18next from "next-i18next";
import { useTranslation as originalUseTranslation } from "react-i18next";

const use: any[] = [];
const icu = new ICU({});
icu.addLocaleData(es);
icu.addLocaleData(en);
use.push(icu);

let detectionOrder: string[] = [];
if (
  typeof window === "undefined" &&
  process.env.NEXT_PHASE !== "phase-production-build"
) {
  const { env } = require("./config");
  const i18nextMiddleware = require("i18next-express-middleware");
  const languageDetector = new i18nextMiddleware.LanguageDetector(null, {
    order: ["enforcedLocale", "languageByDomain"],
  });

  languageDetector.addDetector({
    name: "enforcedLocale",
    lookup: () => env.ENFORCED_LOCALE,
    cacheUserLanguage: _.noop,
  });

  languageDetector.addDetector({
    name: "languageByDomain",
    lookup: (opts) => {
      const hostWithoutPort = (opts.headers.host || "").replace(/:\d+$/, "");
      return hostWithoutPort === env.HOST_ES ? "es" : "en";
    },
    cacheUserLanguage: _.noop,
  });
  use.push(languageDetector);
  detectionOrder = ["enforcedLocale", "languageByDomain"];
}

export const nextI18next = new NextI18next({
  browserLanguageDetection: false,
  defaultLanguage: "es",
  defaultNS: "common",
  detection: { order: detectionOrder },
  fallbackLng: "en",
  keySeparator: "###",
  localePath: typeof window === "undefined" ? "public/locales" : "locales",
  otherLanguages: ["es"],
  use,
});

export const includeDefaultNamespaces = (namespaces: string[]) =>
  ["common", "_error"].concat(namespaces);

export const appWithTranslation = nextI18next.appWithTranslation;
export const Trans = nextI18next.Trans;
export const useTranslation = originalUseTranslation;
export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
