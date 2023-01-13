import React, { useState } from "react";

import axios from "axios";

import styles from "./AddCarModal.module.css";

import { VscClose } from "react-icons/vsc";

const AddCarModal = ({ addModalHandler }) => {
  const [year, setYear] = useState(2022);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState(0);
  const [vin, setVin] = useState("");
  const [transmissionType, setTransmissionType] = useState("Automatic");

  const yearHandler = (e) => {
    setYear(e.target.value);
  };
  const makeHandler = (e) => {
    setMake(e.target.value);
  };
  const modelHandler = (e) => {
    setModel(e.target.value);
  };
  const mileageHandler = (e) => {
    setMileage(e.target.value);
  };
  const vinHandler = (e) => {
    setVin(e.target.value);
  };
  const transmissionHandler = (e) => {
    setTransmissionType(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/add-vehicle", {})
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

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
          onChange={yearHandler}
          value={year}
        />
        <select name="make" id="make"></select>
        <select name="model" id="model"></select>
        <input
          type="number"
          placeholder="Enter Mileage"
          min="0"
          required
          onChange={mileageHandler}
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
            onChange={transmissionHandler}
          />
          <label htmlFor="transmission" className={styles.radio_font}>
            Automatic
          </label>
          <input
            type="radio"
            value="Manual"
            name="transmission"
            required
            onChange={transmissionHandler}
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
          onChange={vinHandler}
        />
        <button className={styles.submit_vehicle}>Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddCarModal;
