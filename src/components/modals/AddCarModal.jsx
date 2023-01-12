import React, { useState } from "react";

import styles from "./AddCarModal.module.css";

import { VscClose } from "react-icons/vsc";

const AddCarModal = ( {addModalHandler} ) => {

  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.modal_content}>
        <VscClose size="3rem" className={styles.icon} onClick={addModalHandler} />
      <div className={styles.top_content}>
        <h1>Add Vehicle</h1>
      </div>
        <input type="text" placeholder="Enter Year" />
        <select name="make" id="make"></select>
        <select name="model" id="model"></select>
        <input type="text" placeholder="Enter Mileage" />
        <input type="text" placeholder="Enter Transmission" />
        <input type="text" placeholder="Enter Vin" />
        <button>Add Vehicle</button>
      </div>
    </div>
  );
};

export default AddCarModal;
