import React, { useState, useContext } from "react";

import axios from "axios";

import AuthContext from "../../store/GlobalContext";

import styles from "./AddCarModal.module.css";

import { VscClose } from "react-icons/vsc";

const AddCarModal = ({ addModalHandler, makeArr}) => {
  const authCtx = useContext(AuthContext);
  const [year, setYear] = useState(2022);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [vin, setVin] = useState("");
  const [transmission, setTransmission] = useState("Automatic");

  const yearHandler = (e) => {
    setYear(e.target.value);
  };
  const makeHandler = (e) => {
    setMake(e.target.value);
  };
  const mileageHandler = (e) => {
    setMileage(e.target.value);
  };
  const vinHandler = (e) => {
    setVin(e.target.value);
  };
  const transmissionHandler = (e) => {
    setTransmission(e.target.value);
  };

  const modelHandler = (e) => {
    setModel(e.target.value);
  };

  const formSubmitHandler = (e) => {

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
          onChange={yearHandler}
        />
        <div className={styles.select_wrapper}>
          <label htmlFor="make">Make: </label>
          <select name="make" id="make" onChange={makeHandler}>
            {options}
          </select>
        </div>
        <input
          type="text"
          placeholder="Enter Model"
          required
          onChange={modelHandler}
          value={model}
        />
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
