import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing language files directly
import enTranslation from "./Lang/en/en.json";
import arTranslation from "./Lang/ar/ar.json";

i18n.use(initReactI18next).init({
  fallbackLng: "ar",
  lng: "ar",
  resources: {
    en: {
      translations: enTranslation,
    },
    ar: {
      translations: arTranslation,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  react: {
    useSuspense: false,
  },
});

i18n.languages = ["en", "ar"];

export default i18n;
