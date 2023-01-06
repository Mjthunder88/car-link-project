import React from "react";

import styles from "./Login.module.css";

const Login = (props) => {


  return (
    <div className={styles.login_container}>
      <h2 className={styles.login_title}>Login</h2>
      <div className={styles.inner_top}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder=" Enter your email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="Enter your password" />
      </div>
      <div className={styles.inner_bottom}>
        <button className={styles.login_btn} id="login-btn">
          Login
        </button>
        <h4>Or</h4>
        <button className={styles.signUp_btn} id="sign-up-screen" onClick={props.authScreenHandler}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
