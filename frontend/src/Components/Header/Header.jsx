import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/images/TMX_LOGO.svg";
import Navbar from "../Navbar/Navbar";
import { animateScroll as scroll } from "react-scroll";

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
        <button className={styles.header__button} onClick={() => setIsOpen(!isOpen)}>Click</button>
      </div>
    </header>
  );
};

export default Header;
