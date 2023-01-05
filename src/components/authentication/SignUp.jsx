import React from "react";

const SignUp = () => {
  return (
    <div>
      <section>
        <div>
          <h2>Login</h2>
          <label htmlFor="first-name">First name</label>
          <input id="register-first-name" type="text" placeholder=" Enter your first name" />
          <label htmlFor="last-name">Last name</label>
          <input id="register-last-name" type="text" placeholder="Enter your last name" />
          <label htmlFor="email">Email</label>
          <input id="register-email" type="text" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input id="register-password" type="text" placeholder="Enter your password" />
        </div>
        <div>
          <button id="login-btn">Sign up</button>
          <h4>Or</h4>
          <button id="sign-up-screen">Log in</button>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
