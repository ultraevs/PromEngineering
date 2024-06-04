import Maps from "../Maps/Maps";
import styles from "./Contacts.module.css";

import classNames from "class-names";

const Contacts = () => {
  return (
    <section className={styles.contacts__block}>
      <div className="container">
        <h2 className={classNames(styles.contacts_title, "title")}>Контактная информация</h2>
        <div className={styles.contacs_place}>
          <ul className={styles.contacs_info}>
            <li>
              Юр. адрес: 107140, г. Москва, ул. Русаковская дом 13, пом. 08-03
            </li>
            <li>
              Email:{" "}
              <a className={styles.contacs_link} href="mailto:info@tmh.pro">
                info@tmh.pro
              </a>
            </li>
            <li>
              Контактное лицо - Зулунова Анна
              <br />
              <a className={styles.contacs_link} href="tel:+79153678243">
              +7 (915) 367-82-43
              </a>
              <br />
              <a className={styles.contacs_link} href="mailto:a.zulunova@tmh.pro">
              a.zulunova@tmh.pro
              </a>
            </li>
          </ul>
          <div className={styles.contacts_map}>
            <Maps />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
