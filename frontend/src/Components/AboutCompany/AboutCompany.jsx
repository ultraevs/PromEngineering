import React from "react";
import styles from "./AboutCompany.module.css";

import person from "../../assets/images/aboutCompany.png";

const AboutCompany = () => {
  return (
    <section id="aboutCompany" className={styles.aboutCompany__block}>
      <div className="container">
        <div className={styles.aboutCompany__item}>
          <div className={styles.aboutCompany__item__title}>
            <h4 className="title">О компании</h4>
          </div>
          <div className={styles.aboutCompany__item__content}>
            <div className={styles.aboutCompany__item__content__text}>
              <p>
                Компания «ПРОМИНЖИНИРИНГ» предоставляет услуги технического
                заказчика и обеспечивает сопровождение
                инвестиционно-строительных проектов промышленного назначения на
                всех этапах жизненного цикла и гарантирует качество и сроки
                выполнения запланированных работ.
              </p>
              <p>
                Наша компания постоянно внедряет новейшие технологии, следит за
                современными трендами и стремится к повышению эффективности
                проектов на всех этапах. Мы гордимся каждым нашим проектом.
              </p>
            </div>
            <div className={styles.aboutCompany__item__content__img}>
              <img src={person} alt="person company" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
