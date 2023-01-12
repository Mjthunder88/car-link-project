import React, { useState } from 'react'

import styles from '../components/UI/AddCarScreen.module.css'

import CarCard from '../components/card/CarCard'
import AddCarModal from '../components/modals/AddCarModal'

const AddCarScreen = () => {

  const [addVehicleModal, setAddVehicleModal] = useState(false)

  const addModalHandler = () => {
    setAddVehicleModal(!addVehicleModal)
  }

  return (
    <div className={styles.main}>
      {addVehicleModal && <AddCarModal addModalHandler={addModalHandler} />}
      <button className={styles.add_btn} onClick={addModalHandler}>Add Vehicle</button>
      <CarCard />
    </div>
  )
}

export default AddCarScreen