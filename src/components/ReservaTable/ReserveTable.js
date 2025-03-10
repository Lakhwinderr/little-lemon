import React, { useEffect, useState } from "react";
import "./ReserveTable.css";
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
    } else {
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
    location: "indoor",
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
        return   dataRecieved.value === "Ocassion" ? setData({ ...data, ocassion:"None"}) : setData({ ...data, ocassion: dataRecieved.value });
      
    }
  };


  const [message, setMessage] = useState("");

  const updateTime = (t) => {
    setData((prevData) => ({ ...prevData, time: t }));
    updateData({ ...data, time: t });
  }

  const submitData = () => {
    setTimes(
      fetchAPI(new Date(data.date)));
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
          <div className = "buttonAndDiv">
            <button
            data-testid = "button1"
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
      {times.map((t) => {
        return (
          <div
            className="time"
            onClick={() => {
              console.log(t)
              updateTime(t);
              console.log(data);
              updateProgress(1);
            }}
            key={t}
          >
            <div className="selectTime">{`SELECT ${t}`}</div>
            <div className="onlyTime">{t}</div>
          </div>)
      })
    }

    </>
  );
}

