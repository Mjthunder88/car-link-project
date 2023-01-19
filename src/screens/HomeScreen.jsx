import React from "react";

import styles from "../components/UI/HomeScreen.module.css";
import logo from '../assets/logo.png'

const HomeScreen = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_background}>
        <h1>Welcome</h1>
      </div>
      <article className={styles.main_content}>
        <h2>What is Linked?</h2>
        <p>
          Linked is an application dedicated to helping individuals stay up to
          date and in the know on their vehicle's health. Tracking and alerting
          users whenever something is wrong or due for inspection.
        </p>
          <h2>Future Addtions</h2>
        <div className={styles.main_content_bottom}>
          <p>Registration with your state's DMV</p>
          <p>
            Live Link through moblie app to your car's ECU (Engine Control Unit)
          </p>
          <p>Live Alerts and Notifications</p>
        </div>
      </article>
      <div className={styles.bottom_logo_container}>
        <img src={logo} alt="linked_logo" className={styles.logo_bottom} />
      </div>
    </div>
  );
};

export default HomeScreen;
