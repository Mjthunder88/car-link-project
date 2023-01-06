import React, { useState } from 'react'


import Login from '../components/authentication/Login'
import SignUp from '../components/authentication/SignUp'

import styles from '../components/UI/AuthScreen.module.css'

const AuthScreen = () => {

  const [screen, setscreen] = useState(true)

  const authScreenHandler = () => {
    setscreen(!screen)
  }

  return (
    <div className={styles.component_container}>
      {screen === true ? <Login authScreenHandler={authScreenHandler} /> : <SignUp authScreenHandler={authScreenHandler} />}
    </div>
  )
}

export default AuthScreen