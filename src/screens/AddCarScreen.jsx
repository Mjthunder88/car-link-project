import React, { useState } from "react";

import styles from "../components/UI/AddCarScreen.module.css";

import CarCard from "../components/card/CarCard";
import AddCarModal from "../components/modals/AddCarModal";

import axios from "axios";

const AddCarScreen = () => {
  const [addVehicleModal, setAddVehicleModal] = useState(false);
  const [makeArr, setMakeArr] = useState([]);

  const addModalHandler = () => {
    setAddVehicleModal(!addVehicleModal);

    axios
      .get("/get-makes")
      .then((res) => {
        console.log(res.data);
        setMakeArr(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.main}>
      {addVehicleModal && (
        <AddCarModal addModalHandler={addModalHandler} makeArr={makeArr} />
      )}
      <button
        className={addVehicleModal ? styles.remove_hover : styles.add_btn}
        onClick={addModalHandler}
      >
        Add Vehicle
      </button>
      <CarCard />
    </div>
  );
};

export default AddCarScreen;
