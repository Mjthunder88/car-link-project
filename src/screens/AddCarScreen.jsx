import React, { useState, useEffect } from "react";

import styles from "../components/UI/AddCarScreen.module.css";

import CarCard from "../components/card/CarCard";
import AddCarModal from "../components/modals/AddCarModal";


import axios from "axios";

const AddCarScreen = () => {
  const [addVehicleModal, setAddVehicleModal] = useState(false);
  const [makeArr, setMakeArr] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const addModalHandler =  async () => {
    setAddVehicleModal(!addVehicleModal);

  };

  useEffect(() => {
    fetchUserVehicle()
    axios
        .get("/get-makes")
        .then((res) => {
          console.log(res.data);
          setMakeArr(res.data);
        })
        .catch((err) => console.log(err));
  }, [])

  const fetchUserVehicle = async () => {
    await axios
      .get(`/get-vehicles/${localStorage.userId}`)
      .then((res) => {
        console.log(res.data);
        setVehicles(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.main}>
      {addVehicleModal && (
        <AddCarModal addModalHandler={addModalHandler} makeArr={makeArr} fetchUserVehicle={fetchUserVehicle} />
      )}
      <button
        className={addVehicleModal ? styles.remove_hover : styles.add_btn}
        onClick={addModalHandler}
      >
        Add Vehicle
      </button>
      <CarCard vehicles={vehicles} />
    </div>
  );
};

export default AddCarScreen;
