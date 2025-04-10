import React from "react";
import imagem3 from "../assets/imagem3.jpg";
import imagem4 from "../assets/imagem4.png";
import imagem1 from "../assets/imagem1.jpg";
import imagem2 from "../assets/imagem2.jpg";
import styles from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.div}>
        <div className={styles.group}>
          <img className={styles.vector} alt="Vector" src={imagem2} />

          <img className={styles.img} alt="Group" src={imagem3} />
        </div>

        <div className={styles.div_2}>
          <div className={styles.div_3}>
            <img className={styles.images} alt="Images" src={imagem1} />

            <div className={styles.text_wrapper}>IDIOMA</div>
          </div>

          <img
            className={styles.icon_magnifying}
            alt="Icon magnifying"
            src={imagem4}
          />
        </div>
      </div>
    </div>
  );
};
