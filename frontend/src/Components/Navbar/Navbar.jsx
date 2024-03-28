import React from "react";
import styles from "./Navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={styles.header__navbar}>
      <ul>
        <li>
          <div onClick={scrollToTop}>Главная</div>
        </li>
        <li>
          <Link to="services" spy smooth>Услуги</Link>
        </li>
        <li>
          <Link to="projects">Наши проекты</Link>
        </li>
        <li>
          <Link to="customers">Наши заказчики</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
