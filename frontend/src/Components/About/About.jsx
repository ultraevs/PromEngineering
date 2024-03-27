import React from "react";
import styles from "./About.module.css";

import RubIcon from "../../assets/icons/RubIcon.svg";
import PeopleIcon from "../../assets/icons/PeopleIcon.svg";
import YearsIcon from "../../assets/icons/YearsIcon.svg";

const About = () => {
  return (
    <section className={styles.about__block}>
      <div className="container">
        <div className={styles.about__items}>
          <div className={styles.about__item}>
            <img src={RubIcon} alt="ruble" />
            <div className={styles.about__item__text}>
              <p>более</p>
              <h5>25 млрд ₽ бюджет в управлении</h5>
            </div>
          </div>
          <div className={styles.about__item}>
            <img src={PeopleIcon} alt="people" />
            <div  className={styles.about__item__text}>
              <p>более</p>
              <h5>30 подрядчиков в проектах</h5>
            </div>
          </div>
          <div className={styles.about__item}>
            <img src={YearsIcon} alt="years" />
            <div  className={styles.about__item__text}>
              <p>работаем</p>
              <h5>с 2014 года</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
