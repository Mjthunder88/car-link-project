import React, { useState } from "react";

import { BiShow, BiHide } from "react-icons/bi";

import styles from "./Login.module.css";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className={styles.login_container}>
      <h2 className={styles.login_title}>Login</h2>
      <div className={styles.inner_top}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder=" Enter your email" />
        <label htmlFor="password">Password</label>
        <div className="password_show">
          {showPassword ? (
            <input
              id="password"
              type="text"
              placeholder="Enter your password"
              className="password_input"
            />
          ) : (
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="password_input"
            />
          )}
          <button
            type="button"
            className="show_button"
            onClick={showPasswordHandler}
          >
            {showPassword ? <BiShow size="2rem" /> : <BiHide size="2rem" />}
          </button>
        </div>
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
          type="button"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Login;
