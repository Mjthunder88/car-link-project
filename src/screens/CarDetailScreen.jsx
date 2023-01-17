import React, {useContext} from "react";

import AuthContext from "../store/GlobalContext";

import { useNavigate } from "react-router-dom";

import styles from "../components/UI/CarDetailScreen.module.css";

const CarDetailScreen = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  const backBtnHandler = () => {
    navigate('/add-car')
  }


 

  return (
    <div className={styles.main}>
      <div className={styles.backBtn_container}>
        <button className={styles.back_btn} onClick={backBtnHandler}>
          Back
        </button>
      </div>
      <section>
        <h1>Maintenance</h1>
      </section>
      <section></section>
    </div>
  );
};

export default CarDetailScreen;
