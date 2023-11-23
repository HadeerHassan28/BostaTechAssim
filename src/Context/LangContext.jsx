import React, { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");
  const { i18n } = useTranslation();

  const changeLanguage = (newLang) => {
    setLang(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = lang === "ar" ? "ltr" : "rtl";
  };

  const values = {
    lang,
    changeLanguage,
  };
  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
