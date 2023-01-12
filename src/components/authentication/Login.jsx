import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";

import styles from "./Login.module.css";

import AuthContext from "../../store/GlobalContext";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext)

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data)
        authCtx.login(res.data.token, res.data.exp, res.data.userId)
        navigate("/");
      })
      .catch((err) => {
        if (err) {
          console.log(err, "Error during login");
        } 
      });
      setEmail("")
      setPassword("")
  };

  return (
    <form className={styles.login_container} onSubmit={submitHandler}>
      <h2 className={styles.login_title}>Login</h2>
      <div className={styles.inner_top}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder=" Enter your email"
          onChange={emailHandler}
          value={email}
          required
        />
        <label htmlFor="password">Password</label>
        <div className="password_show">
          {showPassword ? (
            <input
              id="password"
              type="text"
              placeholder="Enter your password"
              className="password_input"
              onChange={passwordHandler}
              value={password}
              required
            />
          ) : (
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="password_input"
              onChange={passwordHandler}
              value={password}
              required
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
        <h4>Need a new account?</h4>
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
