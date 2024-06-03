import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroBg}>
      <div className="container">
        <div className={styles.heroBG__text}>
          <h1>Проминжиниринг</h1>
          <h4>
            Строительная компания, входящая в холдинг ТМХ, существующая на рынке более десяти лет
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
