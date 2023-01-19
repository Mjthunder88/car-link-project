import React, { useState, useContext } from "react";
import axios from "axios";

import AuthContext from "../../store/GlobalContext";

import styles from "./EditServiceModal.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const EditServiceModal = ({ serviceModalShow, list }) => {
  const globalCtx = useContext(AuthContext);
  const [service, setService] = useState(globalCtx.currentService.service);
  const [date, setDate] = useState(globalCtx.currentService.date);
  const [mileage, setMileage] = useState(globalCtx.currentService.mileage);
  const [notes, setNotes] = useState(globalCtx.currentService.details);

  const formHandler =  async (e) => {
    e.preventDefault();
    await axios.put(`/update-service/${globalCtx.currentService.id}`, {
        service,
        date,
        mileage,
        notes
    })
    .then((res) => {
        console.log(res.data)
        list()
        serviceModalShow()

    })
    .catch((err) => console.log(err))

  };

  const deleteServiceHandler = () => {
    
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <form className={styles.modal_content} onSubmit={formHandler}>
        <div className={styles.top_btn_container}>
          <RiDeleteBin5Line
            size="2.5rem"
            className={styles.icon}
            onClick={deleteServiceHandler}
          />
          <button
            onClick={serviceModalShow}
            className={styles.back_btn}
            type="button"
          >
            Back
          </button>
        </div>
        <div className={styles.top_content}>
          <h1>Edit Maintenance</h1>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="service">Service</label>
          <input
            type="text"
            name="service"
            placeholder="Service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            placeholder="Date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="mileage">Mileage</label>
          <input
            type="number"
            name="mileage"
            placeholder="Mileage"
            required
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            name="notes"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button className={styles.submit_vehicle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditServiceModal;
