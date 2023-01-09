import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3008/register", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error, "error during sign up"));
    navigate("/");
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
          onChange={firstNameHandler}
          value={firstName}
        />
        <label htmlFor="last-name">Last name</label>
        <input
          id="register-last-name"
          type="text"
          placeholder="Enter your last name"
          onChange={lastNameHandler}
          value={lastName}
        />
        <label htmlFor="email">Email</label>
        <input
          id="register-email"
          type="text"
          placeholder="Enter your email"
          onChange={emailHandler}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="register-password"
          type="password"
          placeholder="Enter your password"
          onChange={passwordHandler}
          value={password}
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
          type= "button"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignUp;
