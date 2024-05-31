import React from "react";
import styles from "./Navbar.module.css";
import classNames from "classnames";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ state, setState, width }) => {
  const scrollToTop = () => {
    if (width <= 768) {
      setState(!state);
    }
    scroll.scrollToTop();
  };

  const handleClick = () => {
    if (width <= 768) {
      setState(!state);
    }
  };

  return (
    <div
      className={
        state
          ? classNames(styles.header__navbar__block, styles.active)
          : styles.header__navbar__block
      }
      onClick={() => setState(false)}
    >
      {state && <div className={styles.blur}></div>}
      <nav
        className={styles.header__navbar}
        onClick={(e) => e.stopPropagation()}
      >
        <ul>
          <li>
            <Link spy={true} smooth={true} onClick={scrollToTop} to="#">
              Главная
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="aboutCompany">
              О компании
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="services">
              Услуги
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="projects">
              Наши проекты
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="customers">
              Наши заказчики
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
