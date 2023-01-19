import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import AuthContext from "../store/GlobalContext";
import EditCarModal from "../components/modals/EditCarModal";
import EditServiceModal from "../components/modals/EditServiceModal";

import { useNavigate } from "react-router-dom";

import styles from "../components/UI/CarDetailScreen.module.css";
import { BiMessageAltEdit } from "react-icons/bi";

const CarDetailScreen = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [mileage, setMileage] = useState("");
  const [notes, setNotes] = useState("");
  const [maintenanceList, setMaintenanceList] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [makeArr, setMakearr] = useState([]);
  const [serviceModal, setServiceModal] = useState(false);

  const editModalHandler = async () => {
    setShowEditModal(!showEditModal);
  };
  const serviceModalShow = async () => {
    setServiceModal(!serviceModal);
  };

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
        list();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const list = async () => {
    await axios
      .get(`/get-services/${authCtx.currentCar.id}`)
      .then((res) => {
        console.log(res.data);
        authCtx.serviceHandler(res.data);
        setMaintenanceList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const serviceModalHandler = async (id) => {
    await axios
      .get(`/edit-service/${id}`)
      .then((res) => {
        console.log(res.data);
        authCtx.serviceHandler(res.data);
        setServiceModal(!serviceModal);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    list();
    axios
      .get("/get-makes")
      .then((res) => {
        console.log(res.data);
        setMakearr(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const serviceList = maintenanceList.map((element, index) => {
    return (
      <div key={index}>
        <div
          key={index}
          className={
            index % 2 === 0 ? `${styles.table_row}` : `${styles.table_row_2}`
          }
        >
          <p>{element.service}</p>
          <p>{element.date}</p>
          <p>{element.mileage}</p>
          <p>{element.details}</p>
          <BiMessageAltEdit
            size="1.5rem"
            className={
              index % 2 === 0
                ? `${styles.edit_services}`
                : `${styles.edit_services_2}`
            }
            onClick={() => serviceModalHandler(element.id)}
          />
        </div>
      </div>
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
        <div className={styles.edit_container}>
          <BiMessageAltEdit
            size="2rem"
            className={styles.edit_btn}
            onClick={editModalHandler}
          />
        </div>
        <h1>Maintenance</h1>
        <div className={styles.inner_bottom}>
          <h1>{authCtx.currentCar.year}</h1>
          <h1>{authCtx.currentCar.manufacturer.name}</h1>
          <h1>{authCtx.currentCar.model}</h1>
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
        <section className={styles.log_details}>
          <div className={styles.table_heading_container}>
            <div className={styles.heading_row}>
              <h3 className={styles.th_headers}>Service</h3>
              <h3 className={styles.th_headers}>Date</h3>
              <h3 className={styles.th_headers}>Mileage</h3>
              <h3 className={styles.th_headers}>Notes</h3>
            </div>
          </div>
          {serviceList}
        </section>
      </section>
      {showEditModal && (
        <EditCarModal editModalHandler={editModalHandler} makeArr={makeArr} />
      )}
      {serviceModal && (
        <EditServiceModal serviceModalShow={serviceModalShow} list={list} />
      )}
    </div>
  );
};

export default CarDetailScreen;
