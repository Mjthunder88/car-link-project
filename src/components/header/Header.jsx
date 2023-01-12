import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import AuthContext from "../../store/GlobalContext";

import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import "../UI/hamburger.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const authCtx = useContext(AuthContext);

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
          {authCtx.token &&
          <Link to="/add-car" className={styles.header_link}>
            <h3>My Vehicles</h3>
          </Link>
          }
          {!authCtx.token && (
            <Link to="/about" className={styles.header_link}>
              <h3>About Linked</h3>
            </Link>
          )}
          {!authCtx.token && (
            <Link to="/contact" className={styles.header_link}>
              <h3>Contact</h3>
            </Link>
          )}
          {authCtx.token && (
            <Link to="/settings" className={styles.header_link}>
              <h3>Settings</h3>
            </Link>
          )}
          {authCtx.token && (
            <Link to="/auth" className={styles.header_link}>
              <button onClick={authCtx.logout}>Logout</button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
