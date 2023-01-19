import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";
import { TfiYoutube } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info_container}>
        <div className={styles.inner_container}>
          <section>
            <h3 className={styles.footer_titles}>About Linked</h3>
            <Link className={styles.link}>
              <p className={styles.link_title}>Purpose</p>
            </Link>
            <Link className={styles.link}>
              <p className={styles.link_title}>Creators</p>
            </Link>
            <Link className={styles.link}>
              <p className={styles.link_title}>FAQ</p>
            </Link>
          </section>
          <section>
            <h3 className={styles.footer_titles}>Get Help</h3>
            <Link className={styles.link}>
              <p className={styles.link_title}>Contact Us</p>
            </Link>
          </section>
        </div>
        <div className={styles.icons_container}>
          <BsInstagram size="2rem" />
          <RxTwitterLogo size="2rem" />
          <TfiYoutube size="2rem" />
          <BsFacebook size="2rem" />
        </div>
      </div>
      <div className={styles.footer_essentials}>
        <p>2023 Linked, All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
