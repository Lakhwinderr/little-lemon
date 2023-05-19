import React, { useEffect, useState } from "react";
import "./ReserveTable.css";
import Form from "../Form/Form";
import Footer from "../Footer/Footer"
import About from "../About/About"
import Button from "./Button";
import DatePicker from "./DatePicker";
import DinerCount from "./DinerCount";
import IndoorOutdoor from "./IndoorOutdoor";
import Form2 from "../Form2/Form2";
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

export default function ReserveTable() {
  const date = new Date();
  const [data, setData] = useState({
    count: 1,
    date: "",
    location: "",
    ocassion: "",
  });
  const[times, setTimes] = useState([]);
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
  useEffect(() => {
    // console.log(fetchAPI(date));
    console.log(data);
  }, [data]);

  const [message,setMessage]  = useState("")
  const submitData = () => {
    setTimes(fetchAPI(new Date(data.date)).map(time => {return <div className="time" onClick={() => {alert("div is clicked")}}>
        <div className="selectTime">{`SELECT ${time}`}</div>
        <div className="onlyTime">{time}</div>
        </div>}))
   setMessage("Following times are available for your choice of reservation.");
}
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
          <button className="mainButton" disabled = {!data.date} onClick={
            () =>{
                // alert(JSON.stringify(data))
                submitData()
            }
          }>Submit</button>
          <div style={{marginLeft : "5px"}}>{!data.date ? "(Please select valid date.)" : null}</div>
        </div>
        </div>
      </div>
      <div className="message">{message}</div>
      {times}
      <Form/>
      <Form2/>
      <About/>
         <Footer/> 
    </>
  );
}
