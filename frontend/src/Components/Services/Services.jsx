import React from "react";
import styles from "./Services.module.css";
import classNames from "classnames";

import customer from "../../assets/images/customer.png";
import tools from "../../assets/images/tools.png";
import projection from "../../assets/images/projection.jpg";
import smr from "../../assets/images/smr.jpg";

const Services = () => {
  return (
    <section id="services" className={styles.services__block}>
      <div className="container">
        <h2 className={classNames("title", styles.title)}>Услуги</h2>

        <div className={styles.services__items}>
          <div className={styles.services__item}>
            <img src={smr} alt="first service" />
            <div className={styles.services__item__text}>
              <h4>Строительно монтажные работы</h4>
            </div>
          </div>

          <div
            className={classNames(
              styles.services__item,
              styles.services__item__reverse
            )}
          >
            <div
              className={classNames(
                styles.services__item__text,
                styles.services__item__text__response
              )}
            >
              <h4>Проектирование</h4>
            </div>
            <img src={projection} alt="first service" />
          </div>

          <div className={styles.services__item}>
            <img src={customer} alt="first service" />
            <div className={styles.services__item__text}>
              <h4>Услуги технического заказчика</h4>
            </div>
          </div>

          <div
            className={classNames(
              styles.services__item,
              styles.services__item__reverse
            )}
          >
            <div
              className={classNames(
                styles.services__item__text,
                styles.services__item__text__response
              )}
            >
              <h4>Поставка промышленного оборудования</h4>
            </div>
            <img src={tools} alt="first service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
