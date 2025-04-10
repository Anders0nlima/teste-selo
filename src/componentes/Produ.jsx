import React from "react";
import styles from "./Produ.module.css";

export const Produ = () => {
  return (
    <div className={styles.box}>
      <div className={styles.home}>
        <div className={styles.overlap_group}>
          {/* Imagem de fundo ajustada para direita */}
          <div className={styles.image_container}>
            <div className={styles.gradient_overlay} />
            <img
              className={styles.phantom_thread}
              alt="Phantom thread"
              src="https://c.animaapp.com/hSTv3Klm/img/phantom-thread-2017-218-8685.png"
            />
          </div>

          <div className={styles.frame}>
            <div className={styles.div}>
              <div className={styles.text_wrapper}>Negócios</div>

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
              <div className={styles.text_wrapper_2}>Produções cinematográficas</div>

              <p className={styles.escolha_a_melhor_op}>
                Escolha a melhor opção para sua produção cinematográfica,
                retire suas ideias do papel e veja como podemos ajudar você
                a produzir mais.
              </p>
            </div>
          </div>

          <div className={styles.home_bar}>
            <div className={styles.frame_3}>
             

              <img
                className={styles.line}
                alt="Line"
                src="https://c.animaapp.com/hSTv3Klm/img/line-1.svg"
              />
            </div>
          </div>

          

          <div className={styles.frame_8}>
            <img
              className={styles.icon_play_circle}
              alt="Icon play circle"
              src="https://c.animaapp.com/hSTv3Klm/img/---icon--play-circle-@2x.png"
            />

            <div className={styles.text_wrapper_5}>Assista</div>
          </div>
        </div>
      </div>
    </div>
  );
};