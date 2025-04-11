import React, { useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import styles from "./LandingPage.module.css";
import video1 from "../assets/video1.mp4"

export const LandingPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { t } = useLanguage();

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.home}>
        <div className={styles.overlap_group}>
          <div className={styles.video_container}>
            <div className={styles.gradient_overlay} />
            <video
              ref={videoRef}
              className={styles.video_player}
              src={video1} 
              loop
              muted
            />
          </div>

          <div className={styles.frame}>
            <div className={styles.div}>
              <div className={styles.text_wrapper}>{t('landingPage.business')}</div>
              <div className={styles.group}>
                <img
                  className={styles.vector}
                  alt="Vector"
                  src="https://c.animaapp.com/hSTv3Klm/img/vector.svg"
                />
                <img
                  className={styles.img}
                  alt="Group"
                  src="https://c.animaapp.com/hSTv3Klm/img/group@2x.png"
                />
              </div>
            </div>

            <div className={styles.frame_2}>
              <div className={styles.text_wrapper_2}>{t('landingPage.filmProductions')}</div>
              <p className={styles.escolha_a_melhor_op}>
                {t('landingPage.description')}
              </p>
            </div>
          </div>

          <button className={styles.play_button} onClick={togglePlayPause}>
            <FontAwesomeIcon 
              icon={isPlaying ? faPause : faPlay} 
              className={styles.play_icon} 
            />
            <div className={styles.text_wrapper_5}>
              {isPlaying ? t('landingPage.pauseButton') : t('landingPage.watchButton')}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};