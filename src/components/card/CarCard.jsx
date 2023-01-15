import React, { useContext, useState, useEffect } from "react";

import axios from "axios";

import AuthContext from "../../store/GlobalContext";

import styles from "./CarCard.module.css";

import { AiOutlineCar } from "react-icons/ai";

const CarCard = () => {
  const [vehicles, setVehicles] = useState([]);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const fetchUserVehilce = async () => {
      await axios
        .get(`./get-vehicles/${authCtx.userId}`)
        .then((res) => {
          console.log(res.data);
          setVehicles(res.data);
        })
        .catch((err) => console.log(err));
    };
    fetchUserVehilce();
  }, [authCtx.userId]);
  console.log(vehicles)

  const list = vehicles.map((element, index) => {
    return (
      <div className={styles.card_container} key={index}>
      <div className={styles.car_name}>
        <h3>{element.year}</h3>
        <h3>{element.manufacturer.name}</h3>
        <h3>{element.model}</h3>
      </div>
      <AiOutlineCar size="4rem" className={styles.icon} />
      <button className={styles.details_btn}>View Details</button>
    </div>
    )
  })

  return (
    <>
    {list}
    </>
  );
};

export default CarCard;
