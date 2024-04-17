import React from "react";
import styles from "./Services.module.css";
import classNames from "classnames";

import customer from "../../assets/images/customer.png";
import tools from "../../assets/images/tools.png";
import development from "../../assets/images/development.png";
import reconstruction from "../../assets/images/reconstruction.png";

const Services = () => {
  return (
    <section id="services" className={styles.services__block}>
      <div className="container">
        <h2 className={classNames("title", styles.title)}>Услуги</h2>

        <div className={styles.services__items}>
          <div className={styles.services__item}>
            <img src={reconstruction} alt="first service" />
            <div className={styles.services__item__text}>
              <h4>Реконструкция</h4>
              <ul>
                <li>Предварительная оценка и консультации</li>
                <li>Разработка проекта реконструкции</li>
                <li>Получение необходимых разрешений и согласований</li>
                <li>Строительные работы</li>
                <li>Контроль качества и сроков</li>
                <li>Сдача объекта и гарантийное обслуживание</li>
              </ul>
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
              <h4>Девелопмент</h4>
              <ul>
                <li>Исследование рынка и анализ потенциала</li>
                <li>Разработка концепции проекта</li>
                <li>Проектирование и планирование</li>
                <li>Финансирование и инвестирование</li>
                <li>Строительство и управление проектом</li>
                <li>Маркетинг и продажи</li>
                <li>Послепродажное обслуживание</li>
              </ul>
            </div>
            <img src={development} alt="first service" />
          </div>

          <div className={styles.services__item}>
            <img src={customer} alt="first service" />
            <div className={styles.services__item__text}>
              <h4>Услуги технического заказчика</h4>
              <ul>
                <li>Подготовка технических заданий</li>
                <li>Подбор подрядчиков и поставщиков</li>
                <li>Контроль качества и сроков выполнения работ</li>
                <li>Управление бюджетом проекта</li>
                <li>Решение технических вопросов</li>
                <li>Документационное обеспечение проекта</li>
              </ul>
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
              <h4>Закупка оборудования</h4>
              <ul>
                <li>Консультации и подбор оборудования</li>
                <li>
                  Подготовка технических спецификаций и запрос предложений
                </li>
                <li>Анализ предложений и выбор поставщиков</li>
                <li>Организация закупки и доставки</li>
                <li>Поддержка и сервисное обслуживание</li>
              </ul>
            </div>
            <img src={tools} alt="first service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
