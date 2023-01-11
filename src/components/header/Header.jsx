import { useState } from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import "../UI/hamburger.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="linked_logo" />
      <nav>
        <button
          className={
            isActive
              ? "hamburger hamburger--spring is-active"
              : "hamburger hamburger--spring"
          }
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div
          className={!isActive ? styles.drop_down : styles.drop_down_displayed}
        >
          <Link to="/" className={styles.header_link}>
            <h3>Home</h3>
          </Link>
          <Link to="/" className={styles.header_link}>
            <h3>Add Cars</h3>
          </Link>
          <Link to="/settings" className={styles.header_link}>
            <h3>Settings</h3>
          </Link>
          <Link to="/auth" className={styles.header_link}>
            <button>Logout</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
