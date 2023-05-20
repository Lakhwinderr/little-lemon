import React, { useEffect, useState } from "react";
import "./ReserveTable.css";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Button from "./Button";
import DatePicker from "./DatePicker";
import DinerCount from "./DinerCount";
import IndoorOutdoor from "./IndoorOutdoor";
// import { type } from "@testing-library/user-event/dist/type";
// import MainForm from "../MainForm/MainForm";
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

export default function ReserveTable({ updateProgress, updateData }) {
  // const date = new Date();
  const [data, setData] = useState({
    count: 1,
    date: "",
    location: "",
    ocassion: "",
    time: "",
  });
  const [times, setTimes] = useState([]);
  const dataHandler = (dataRecieved) => {
    switch (dataRecieved.type) {
      case "count":
        return setData({ ...data, count: dataRecieved.value });
      case "date":
        return setData({ ...data, date: dataRecieved.value });
      case "location":
        return setData({ ...data, location: dataRecieved.value });
      case "ocassion":
        return setData({ ...data, ocassion: dataRecieved.value });
    }
  };


  const [message, setMessage] = useState("");


  const submitData = () => {
    setTimes(
      fetchAPI(new Date(data.date)).map((t) => {
        return (
          <div
            className="time"
            onClick={() => {
              console.log(t)
              setData({...data, time: t})
              console.log(data)
              updateData(data);
              updateProgress(1);
            }}
            key={t}
          >
            <div className="selectTime">{`SELECT ${t}`}</div>
            <div className="onlyTime">{t}</div>
          </div>
        );
      })
    );
    setMessage("Following times are available for your choice of reservation.");
  };
  return (
    <>
      <div className="reserveTable">
        {/* <h1>Creating reserve a table functionality.</h1> */}

        <div className="formItems">
          <DinerCount dataHandler={dataHandler} />
          <DatePicker dataHandler={dataHandler} />
        </div>
        <div className="formItems">
          <IndoorOutdoor dataHandler={dataHandler}></IndoorOutdoor>
          <Button dataHandler={dataHandler}></Button>
        </div>
      </div>
      <div className="backGround">
        <div className="formItems">
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              className="mainButton"
              disabled={!data.date}
              onClick={() => {
                // alert(JSON.stringify(data))
                submitData();
              }}
            >
              Submit
            </button>
            <div style={{ marginLeft: "5px" }}>
              {!data.date ? "(Please select valid date.)" : null}
            </div>
          </div>
        </div>
      </div>
      <div className="message">{message}</div>
      {times}

      <About />
      <Footer />
    </>
  );
}
