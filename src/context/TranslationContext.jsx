import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import en from '../locales/EN.json';
import id from '../locales/ID.json';
import { getLanguage, putLanguage } from '../utils';

const TranslationContext = createContext();

const translations = {
  en: en,
  id: id,
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(getLanguage() || 'en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'id' : 'en';
    setLanguage(newLang);
    putLanguage(newLang);
  };

  const contextValue = useMemo(
    () => ({
      language,
      translations: translations[language],
      toggleLanguage,
    }),
    [language]
  );

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

TranslationProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TranslationContext;
