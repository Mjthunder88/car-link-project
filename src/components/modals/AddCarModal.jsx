import React, { useState, useContext } from "react";

import axios from "axios";

import AuthContext from "../../store/GlobalContext";

import styles from "./AddCarModal.module.css";

import { VscClose } from "react-icons/vsc";

const AddCarModal = ({ addModalHandler, makeArr, fetchUserVehicle }) => {
  const authCtx = useContext(AuthContext);
  const [year, setYear] = useState(2023);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [vin, setVin] = useState("");
  const [transmission, setTransmission] = useState("Automatic");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/add-vehicle", {
        year,
        mileage,
        vin,
        transmission,
        make,
        model,
        userId: authCtx.userId,
      })
      .then((res) => {
        console.log(res.data);
        fetchUserVehicle()
        addModalHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <VscClose
          size="3rem"
          className={styles.icon}
          onClick={addModalHandler}
        />
        <div className={styles.top_content}>
          <h1>Add Vehicle</h1>
        </div>
        <input
          type="number"
          placeholder="Enter Year"
          min="1900"
          required
          onChange={(e) => setYear(e.target.value)}
        />
        <div className={styles.select_wrapper}>
          <label htmlFor="make">Make: </label>
          <select
            name="make"
            id="make"
            onChange={(e) => setMake(e.target.value)}
          >
            {options}
          </select>
        </div>
        <input
          type="text"
          placeholder="Enter Model"
          required
          onChange={(e) => setModel(e.target.value)}
          value={model}
        />
        <input
          type="number"
          placeholder="Enter Mileage"
          min="0"
          required
          onChange={(e) => setMileage(e.target.value)}
          value={mileage}
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
          maxLength="17"
          onChange={(e) => setVin(e.target.value)}
        />
        <button className={styles.submit_vehicle}>Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddCarModal;
