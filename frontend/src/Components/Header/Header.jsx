import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/images/TMX_LOGO.svg";
import Navbar from "../Navbar/Navbar";
import { animateScroll as scroll } from "react-scroll";

const Header = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__block}>
        <div onClick={scrollToTop} className={styles.header__logo}>
          <img src={Logo} alt="TMX logo" />
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
