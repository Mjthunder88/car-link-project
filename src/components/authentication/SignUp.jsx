import React from "react";

import styles from "./SignUp.module.css";

const SignUp = (props) => {
  return (
    <div>
      <div className={styles.signUp_container}>
        <h2 className={styles.signUp_title}>Sign Up</h2>
        <div className={styles.inner_top}>
          <label htmlFor="first-name">First name</label>
          <input
            id="register-first-name"
            type="text"
            placeholder=" Enter your first name"
          />
          <label htmlFor="last-name">Last name</label>
          <input
            id="register-last-name"
            type="text"
            placeholder="Enter your last name"
          />
          <label htmlFor="email">Email</label>
          <input
            id="register-email"
            type="text"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            id="register-password"
            type="text"
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.inner_bottom}>
          <button className={styles.signUp_btn} id="sign-up-btn">
            Sign Up
          </button>
          <h4>Or</h4>
          <button
            className={styles.login_btn}
            id="login-screen"
            onClick={props.authScreenHandler}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
