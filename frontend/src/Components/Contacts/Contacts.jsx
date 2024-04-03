import Maps from "../Maps/Maps";
import styles from "./Contacts.module.css";

import classNames from "class-names";

const Contacts = () => {
  return (
    <section className={styles.contacts__block}>
      <div className="container">
        <h2 className={classNames(styles.contacts_title, "title" )}>Контактная информация</h2>
        <div className={styles.contacs_place}>
          <ul className={styles.contacs_info}>
            <li>
              Юр. адрес: 107140, г. Москва, ул. Русаковская, д. 13, помещ. хх-4
            </li>
            <li>
              Email:{" "}
              <a className={styles.contacs_link} href="mailto:info@tmh.pro">
                info@tmh.pro
              </a>
            </li>
          </ul>
          <Maps />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
