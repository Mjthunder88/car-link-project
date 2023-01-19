import React, { useState, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";
import { BiShow, BiHide } from "react-icons/bi";

import AuthContext from "../../store/GlobalContext";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          console.log(error, "error during sign up");
        }
      });
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <form className={styles.signUp_container} onSubmit={submitHandler}>
      <h2 className={styles.signUp_title}>Sign Up</h2>
      <div className={styles.inner_top}>
        <label htmlFor="first-name">First name</label>
        <input
          id="register-first-name"
          type="text"
          placeholder=" Enter your first name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />
        <label htmlFor="last-name">Last name</label>
        <input
          id="register-last-name"
          type="text"
          placeholder="Enter your last name"
          onChange={(e) => e.target.value}
          value={lastName}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="register-email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          ) : (
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="password_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <button className={styles.signUp_btn} id="sign-up-btn">
          Sign Up
        </button>
        <h4>Already have an account?</h4>
        <button
          className={styles.login_btn}
          id="login-screen"
          onClick={props.authScreenHandler}
          type="button"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignUp;
