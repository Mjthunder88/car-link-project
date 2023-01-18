import React, { useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import styles from "./CarCard.module.css";

import { AiOutlineCar } from "react-icons/ai";

import AuthContext from "../../store/GlobalContext";

const CarCard = () => {
  const [vehicles, setVehicles] = useState([]);
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  const detailsScreenHandler =  async (id) => {
     await axios.get(`/vehicle-maintenance/${id}`)
    .then((res) => {
      console.log(res.data)
      authCtx.displayCarHandler(res.data)

      navigate('/details')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const fetchUserVehilce = async () => {
    await axios
      .get(`/get-vehicles/${localStorage.userId}`)
      .then((res) => {
        console.log(res.data);
        setVehicles(res.data);
      })
      .catch((err) => console.log(err));
  };
  


  useEffect(() => {
  
    fetchUserVehilce();
  }, []);

  const list = vehicles.map((element, index) => {
    return (
      <div className={styles.card_container} key={index}>
      <div className={styles.car_name}>
        <h3>{element.year}</h3>
        <h3>{element.manufacturer.name}</h3>
        <h3>{element.model}</h3>
      </div>
      <AiOutlineCar size="4rem" className={styles.icon} />
      <button className={styles.details_btn} onClick={() => detailsScreenHandler(element.id)} key={index} id={element.id}>View Details</button>
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
