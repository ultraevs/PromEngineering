import React from "react";
import styles from "./Services.module.css";
import classNames from "classnames";

import services1 from "../../assets/images/services1.svg";

const Services = () => {
  return (
    <section id="services" className={styles.services__block}>
      <div className="container">
        <h2 className={classNames("title", styles.title)}>Услуги</h2>
        <div className={styles.services__item}>
          <img src={services1} alt="first service" />
          <div className={styles.services__item__text}>
            <h4>Реконструкция</h4>
            <ul>
              <li>
                Реконструкция промышленных зданий и действующих производств
              </li>
              <li>Строительный контроль</li>
              <li>Функции технического заказчика</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.services__rails}></div>
      <div className="container">
        <div className={classNames(styles.services__item, styles.services__item__reverse)}>
          <div className={classNames(styles.services__item__text, styles.services__item__text__response)}>
            <h4>Девелопмент</h4>
            <ul>
              <li>Управление непрофильными активами</li>
              <li>
                Защита экономических интересов и юридических прав инвестора
              </li>
              <li>Контроль строительных рисков</li>
              <li>Оцифровывание строительного процесса</li>
            </ul>
          </div>
          <img src={services1} alt="first service" />
        </div>
      </div>
    </section>
  );
};

export default Services;
