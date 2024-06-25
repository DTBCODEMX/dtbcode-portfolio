import React, { createContext, useContext, useState, useEffect } from 'react';
import translate from './translate';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState({});
  const lang = navigator.language.split('-')[0];

  useEffect(() => {
    const fetchTranslations = async () => {
      const texts = {
        signIn: "Sign In",
        userName: "User Name",
        password: "Password",
        forgot: "Forgot?",
        dontHaveAccount: "Don't have an account?",
        signup: "Signup",
        login: "Login",
        home: "Home",
        welcome: "Welcome to our application",
      };

      const translatedTexts = {};

      for (const key in texts) {
        translatedTexts[key] = await translate(texts[key], lang);
      }

      setTranslations(translatedTexts);
    };

    fetchTranslations();
  }, [lang]);

  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};
