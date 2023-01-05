import React from 'react'

const Login = () => {
  return (
    <div>
        <section>
            <div>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" placeholder=' Enter your email' />
                <label htmlFor="password">Password</label>
                <input id='password' type="text" placeholder='Enter your password' />
            </div>
            <div>
                <button id='login-btn'>Log in</button>
                <h4>Or</h4>
                <button id='sign-up-screen'>Sign up</button>
            </div>
        </section>
    </div>
  )
}

export default Login