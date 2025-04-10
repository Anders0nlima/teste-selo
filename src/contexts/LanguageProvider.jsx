import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  
  const translations = {
    pt: {
      menu: {
        about: "Sobre",
        libraries: "Bibliotecas",
        join: "Junte-se",
        mekpool: "Mekpool"
      },
      navbar: {
        search: "Pesquisar",
        language: "Português"
      }
    },
    en: {
      menu: {
        about: "About",
        libraries: "Libraries",
        join: "Join us",
        mekpool: "Mekpool"
      },
      navbar: {
        search: "Search",
        language: "English"
      }
    }
  };

  const translate = (key) => {
    const keys = key.split('.');
    return keys.reduce((obj, key) => obj?.[key], translations[language]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);