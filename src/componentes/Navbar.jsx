import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import brazilFlag from '../assets/brazilFlag.webp';
import ukFlag from '../assets/ukFlag.png';

export const NavBar = () => {
  const { language, changeLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Estado derivado do idioma atual
  const currentLanguage = {
    code: language,
    name: language === 'pt' ? 'Português' : 'English',
    flag: language === 'pt' ? brazilFlag : ukFlag
  };

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

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang); // Usa a função do contexto
    setLanguageOpen(false);
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
                  className={`${styles.languageOption} ${language === 'pt' ? styles.selected : ''}`}
                  onClick={() => handleLanguageChange('pt')}
                >
                  <div className={styles.flagContainer}>
                    <img src={brazilFlag} alt="Português" className={styles.flagImage} />
                  </div>
                  <span>Português</span>
                </button>
                <button 
                  className={`${styles.languageOption} ${language === 'en' ? styles.selected : ''}`}
                  onClick={() => handleLanguageChange('en')}
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