import { useState, useEffect } from 'react';
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import brazilFlag from '../assets/brazilFlag.webp';
import ukFlag from '../assets/ukFlag.png';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState({
    code: 'pt',
    name: 'Português',
    flag: brazilFlag
  });

  // Efeito para controlar o scroll e a posição do navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito para travar a rolagem quando o menu está aberto
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      setNavbarFixed(true);
      const scrollbarWidth = window.innerWidth - html.clientWidth;
      
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
      html.classList.add(styles.noScroll);
    } else {
      setNavbarFixed(false);
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
      window.scrollTo(0, scrollY);
    }

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      body.style.paddingRight = '';
      html.classList.remove(styles.noScroll);
    };
  }, [menuOpen, scrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) setLanguageOpen(false);
  };

  // Função que estava faltando - adicionada aqui
  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  const changeLanguage = (language) => {
    if (language === 'pt') {
      setCurrentLanguage({
        code: 'pt',
        name: 'Português',
        flag: brazilFlag
      });
    } else {
      setCurrentLanguage({
        code: 'en',
        name: 'English',
        flag: ukFlag
      });
    }
    setLanguageOpen(false);
    console.log(`Idioma alterado para: ${language}`);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${navbarFixed ? styles.fixed : ''}`}>
        <div className={styles.navbarLeft}>
          <button className={styles.iconButton} onClick={toggleMenu}>
            <FontAwesomeIcon 
              icon={menuOpen ? faTimes : faBars} 
              className={styles.icon} 
            />
          </button>
        </div>
        
        <div className={styles.navbarCenter}>
          <span className={styles.brand}>Microsoft</span>
        </div>
        
        <div className={styles.navbarRight}>
          <button className={styles.iconButton}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </button>
          
          <div className={styles.languageSelector}>
            <button 
              className={`${styles.languagePill} ${languageOpen ? styles.active : ''}`}
              onClick={toggleLanguage}
            >
              <div className={styles.flagContainer}>
                <img 
                  src={currentLanguage.flag} 
                  alt={currentLanguage.name} 
                  className={styles.flagImage}
                />
              </div>
              <span className={styles.languageName}>{currentLanguage.name}</span>
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`${styles.chevron} ${languageOpen ? styles.rotate : ''}`}
              />
            </button>
            
            {languageOpen && (
              <div className={styles.languageDropdown}>
                <button 
                  className={`${styles.languageOption} ${currentLanguage.code === 'pt' ? styles.selected : ''}`}
                  onClick={() => changeLanguage('pt')}
                >
                  <div className={styles.flagContainer}>
                    <img src={brazilFlag} alt="Português" className={styles.flagImage} />
                  </div>
                  <span>Português</span>
                </button>
                <button 
                  className={`${styles.languageOption} ${currentLanguage.code === 'en' ? styles.selected : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  <div className={styles.flagContainer}>
                    <img src={ukFlag} alt="English" className={styles.flagImage} />
                  </div>
                  <span>English</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.menuOverlay}>
          {/* Conteúdo do menu aqui */}
          <p>Menu content</p>
        </div>
      )}
    </>
  );
};