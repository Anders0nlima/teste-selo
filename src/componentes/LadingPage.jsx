import React from 'react';
import styles from './LadingPage.module.css';
import logo from '../assets/react.svg'; 
import bgImage from '../assets/imagem1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <img src={logo} alt="Microsoft logo" className={styles.logo} />
            <span className={styles.section}>Negócios</span>
            <h1 className={styles.brand}>Microsoft</h1>
            <h2 className={styles.subtitle}>Produções cinematográficas</h2>
            <p className={styles.description}>
              Escolha a melhor opção para sua produção cinematográfica, retire suas ideias do papel e veja como podemos ajudar você a produzir mais.
            </p>
          </div>
          <div className={styles.rightSide}>
            <img src={bgImage} alt="Imagem destaque" className={styles.image} />
          </div>
          <div className={styles.gradientOverlay}></div>
        </div>
        <button className={styles.helpButton}>
          <FontAwesomeIcon icon={faCircleInfo} /> Assistia
        </button>
      </div>
    );
  };
  
  export default LandingPage;