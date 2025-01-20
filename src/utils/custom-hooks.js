import { useContext, useState } from 'react';
import TranslationContext from '../context/TranslationContext';
import AuthContext from '../context/AuthContext';
import ThemeContext from '../context/ThemeContext';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

function useTranslation() {
  const context = useContext(TranslationContext);

  const { translations, toggleLanguage } = context;

  const t = (key) => {
    return translations[key] || key;
  };

  return { t, toggleLanguage };
}

function useAuth() {
  const { user, login, logout, isAuthenticated, isFirstLoading } =
    useContext(AuthContext);
  return { user, login, logout, isAuthenticated, isFirstLoading };
}

function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

export { useInput, useTranslation, useAuth, useTheme };
