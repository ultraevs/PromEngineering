import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/images/TMX_LOGO.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__block}>
        <div className="logo">
          <img src={Logo} alt="TMX logo" />
        </div>
        <p>Проминжиниринг, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
