import {useState} from "react";

import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import "../UI/hamburger.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleMenu = () => {
    setIsActive(!isActive)
  };


  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="linked_logo" />
      <nav>
        <button className={isActive ? "hamburger hamburger--spring is-active" : "hamburger hamburger--spring"} type="button" onClick={toggleMenu}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
