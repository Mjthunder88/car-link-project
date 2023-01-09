import React from "react";

import styles from "./Login.module.css";

const Login = (props) => {
  return (
    <form className={styles.login_container}>
      <h2 className={styles.login_title}>Login</h2>
      <div className={styles.inner_top}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder=" Enter your email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" />
      </div>
      <div className={styles.inner_bottom}>
        <button className={styles.login_btn} id="login-btn">
          Login
        </button>
        <h4>Or</h4>
        <button
          className={styles.signUp_btn}
          id="sign-up-screen"
          onClick={props.authScreenHandler}
          type= "button"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Login;
