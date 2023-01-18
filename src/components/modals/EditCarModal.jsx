import React, {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { RiDeleteBin5Line } from 'react-icons/ri'
import styles from './EditCarModal.module.css'

import AuthContext from '../../store/GlobalContext'


const EditCarModal = ({editModalHandler, makeArr}) => {
  const [year, setYear] = useState(2023);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [vin, setVin] = useState("");
  const [transmission, setTransmission] = useState("Automatic");
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()



  const formSubmitHandler = (e) => {
    e.preventDefault()
    axios.put(`/update-vehicle/${authCtx.currentCar.id}`, {
      year,
        mileage,
        vin,
        transmission,
        make,
        model,
    })
    .then((res) => {
  
    })
    .catch((err) => console.log(err))
  }

  const deleteCarHandler =  async () => {
    let results = window.confirm('This will delete the current vehicle, are you sure?')
    if (results === true) {
      await axios.delete(`/delete-vehicle/${authCtx.currentCar.id}`)
      .then((res) => {
        console.log(res.data)
        editModalHandler()
        navigate('/add-car')
        alert('Vehicle has been deleted')
      })
    } else {
      return
    }
  }

  const options = makeArr.map((element, index) => {
    let newIndex = index + 1;
    return (
      <option value={newIndex} key={index}>
        {element.name}
      </option>
    );
  });

  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <form className={styles.modal_content} onSubmit={formSubmitHandler}>
        <div className={styles.top_btn_container}>
        <RiDeleteBin5Line
          size="2.5rem"
          className={styles.icon}
          onClick={deleteCarHandler}
        />
        <button onClick={editModalHandler} className={styles.back_btn} type="button">Back</button>
        </div>
        <div className={styles.top_content}>
          <h1>Edit Vehicle</h1>
        </div>
        <input
          type="number"
          placeholder="Enter Year"
          min="1900"
          required
          value={authCtx.currentCar.year}
          onChange={(e) => setYear(e.target.value)}
        />
        <div className={styles.select_wrapper}>
          <label htmlFor="make">Make: </label>
          <select
            name="make"
            id="make"
            onChange={(e) => setMake(e.target.value)}
            value={authCtx.currentCar.manufacturer.id}
          >
            {options}
          </select>
        </div>
        <input
          type="text"
          placeholder="Enter Model"
          required
          onChange={(e) => setModel(e.target.value)}
          value={authCtx.currentCar.model}
        />
        <input
          type="number"
          placeholder="Enter Mileage"
          min="0"
          required
          onChange={(e) => setMileage(e.target.value)}
          value={authCtx.currentCar.mileage}
        />
        <label htmlFor="transmission" className={styles.radio_font}>
          Transmission Type:
        </label>
        <div className={styles.radio_btns}>
          <input
            type="radio"
            value="Automatic"
            name="transmission"
            defaultChecked
            onChange={(e) => setTransmission(e.target.value)}
          />
          <label htmlFor="transmission" className={styles.radio_font}>
            Automatic
          </label>
          <input
            type="radio"
            value="Manual"
            name="transmission"
            required
            onChange={(e) => setTransmission(e.target.value)}
          />
          <label htmlFor="transmission" className={styles.radio_font}>
            Manual
          </label>
        </div>
        <input
          type="text"
          placeholder="Enter Vin"
          required
          value={authCtx.currentCar.vin}
          maxLength="17"
          onChange={(e) => setVin(e.target.value)}
        />
        <button className={styles.submit_vehicle} onClick={() => editModalHandler()}>Submit</button>
      </form>
    </div>
  )
}

export default EditCarModal