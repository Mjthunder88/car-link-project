import React from 'react'

import styles from './Footer.module.css'
import {BsInstagram} from 'react-icons/bs'
import {RxTwitterLogo} from 'react-icons/rx'
import {TfiYoutube} from 'react-icons/tfi'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info_container}>

      </div>
      <div className={styles.icons_container}>
        <BsInstagram size="2rem" />
        <RxTwitterLogo size="2rem" />
        <TfiYoutube size="2rem" />
        <BsFacebook size="2rem" />
      </div>
    </footer>
  )
}

export default Footer
