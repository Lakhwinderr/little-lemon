import React, { useEffect } from "react";
import './DatePicker.css'
export default function DatePicker({dataHandler}) {
  const date = new Date();
  const today = `${date.getUTCFullYear()}-${
    (date.getUTCMonth() + 1).toString().length < 2
      ? `0${date.getUTCMonth() + 1}`
      : date.getUTCMonth() + 1
  }-${
    date.getUTCDate().toString().length < 2
      ? `0${date.getUTCDate()}`
      : date.getUTCDate()
  }`;
  // useEffect(() => {
    
  //   const today = `${date.getUTCFullYear()}-${
  //     (date.getUTCMonth() + 1).toString().length < 2
  //       ? `0${date.getUTCMonth() + 1}`
  //       : date.getUTCMonth() + 1
  //   }-${
  //     date.getUTCDate().toString().length < 2
  //       ? `0${date.getUTCDate()}`
  //       : date.getUTCDate()
  //   }`;
  //   console.log(today);
  // });

  
  return (
    <div className="datePicker">
      {/* <label>
        Date:
      </label> */}
        <input type="date" name="party" min={today} max="2024-04-30" onChange={(e) => {
          dataHandler({type:"date", value: e.target.value})
        }}/>
    </div>
  );
}
