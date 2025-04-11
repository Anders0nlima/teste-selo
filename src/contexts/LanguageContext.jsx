import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Verifica se há um idioma salvo no localStorage, caso contrário usa 'pt' como padrão
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('userLanguage') || 'pt';
  });
  
  const translations = {
    pt: {
      landingPage: {
        business: "Negócios",
        filmProductions: "Produções cinematográficas",
        description: "Escolha a melhor opção para sua produção cinematográfica, retire suas ideias do papel e veja como podemos ajudar você a produzir mais.",
        watchButton: "Assista",
        pauseButton: "Pausar"
      }
    },
    en: {
      landingPage: {
        business: "Business",
        filmProductions: "Film productions",
        description: "Choose the best option for your film production, bring your ideas to life and see how we can help you produce more.",
        watchButton: "Watch",
        pauseButton: "Pause"
      }
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('userLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage,
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);