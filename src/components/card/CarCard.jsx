import React from 'react'

import styles from './CarCard.module.css'

import { AiOutlineCar } from 'react-icons/ai'

const CarCard = () => {
  return (
    <div className={styles.card_container}>
        <div className={styles.car_name}>
        <h3>2018</h3>
        <h3>Ford</h3>
        <h3>Focus St</h3>
        </div>
        <AiOutlineCar size='4rem' className={styles.icon} />
        <button className={styles.details_btn}>View Details</button>
    </div>
  )
}

export default CarCard