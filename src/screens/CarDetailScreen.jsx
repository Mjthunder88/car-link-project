import React, { useContext, useState, useEffect } from "react";

import axios from "axios";

import AuthContext from "../store/GlobalContext";

import { useNavigate } from "react-router-dom";

import styles from "../components/UI/CarDetailScreen.module.css";

const CarDetailScreen = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [mileage, setMileage] = useState("");
  const [notes, setNotes] = useState("");
  const [maintenanceList, setMaintenanceList] = useState([])

  const backBtnHandler = () => {
    navigate("/add-car");
  };

  const formHandler = (e) => {
    e.preventDefault();

    axios
      .post(`/add-maintenance/${authCtx.currentCar.id}`, {
        service,
        date,
        mileage,
        notes,
      })
      .then((res) => {
        console.log(res.data);
        setService("");
        setDate("");
        setMileage("");
        setNotes("");
        list()
        
      })
      .catch((err) => {
        console.log(err);
      });
  
  };

  const list = async () => {
    await axios.get(`/get-services/${authCtx.currentCar.id}`)
    .then((res) => {
      console.log(res.data)
      setMaintenanceList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    
    list()
  }, [])

  const serviceList = maintenanceList.map((element, index) => {
    return (
      <tbody key={index}>
      <tr key={index} className={ index % 2 === 0 ? `${styles.table_row}` : `${styles.table_row_2}`}>
        <td>{element.service}</td>
        <td>{element.date}</td>
        <td>{element.mileage}</td>
        <td>{element.details}</td>
      </tr>
      </tbody>
    );
  });

  return (
    <div className={styles.main}>
      <div className={styles.backBtn_container}>
        <button className={styles.back_btn} onClick={backBtnHandler}>
          Back
        </button>
      </div>
      <section className={styles.heading}>
        <h1>Maintenance</h1>
        {/* <h1>{authCtx.currentCar.year}</h1>
        <h1>{authCtx.currentCar.manufacturer.name}</h1>
        <h1>{authCtx.currentCar.model}</h1> */}
        <div className={styles.inner_bottom}>
          <h1>2016</h1>
          <h1>Toyota</h1>
          <h1>Corolla</h1>
        </div>
      </section>
      <section className={styles.log_container}>
        <form className={styles.form_container} onSubmit={formHandler}>
          <button className={styles.add_maintenance_btn}>
            Add Maintenance
          </button>
          <div className={styles.input_container}>
            <input
              type="text"
              name="service"
              placeholder="Service"
              className={styles.maintenance_input}
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              className={styles.maintenance_input}
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="number"
              name="mileage"
              placeholder="Mileage"
              className={styles.maintenance_input}
              required
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
            />
            <input
              type="text"
              name="notes"
              placeholder="Notes"
              className={styles.maintenance_input}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </form>
          <table className={styles.log_details}>
            <thead className={styles.table_heading_container}>
            <tr className={styles.heading_row}>
              <th className={styles.th_headers}>Service</th>
              <th className={styles.th_headers}>Date</th>
              <th className={styles.th_headers}>Mileage</th>
              <th className={styles.th_headers}>Notes</th>
            </tr>
            </thead>
            {serviceList}
          </table>
      </section>
    </div>
  );
};

export default CarDetailScreen;
