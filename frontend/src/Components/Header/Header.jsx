import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/images/TMX_LOGO.svg";
import Navbar from "../Navbar/Navbar";
import { animateScroll as scroll } from "react-scroll";
import classNames from "classnames";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__block}>
        <div onClick={scrollToTop} className="logo">
          <img src={Logo} alt="TMX logo" />
        </div>
        <Navbar state={isOpen} setState={setIsOpen} width={windowWidth} />
        <div className={ isOpen ? classNames(styles.header__button, styles.active) : styles.header__button} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles.header__button__bar1}></div>
          <div className={styles.header__button__bar2}></div>
          <div className={styles.header__button__bar3}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
