import React, { useEffect } from "react";
import './DatePicker.css'
export default function DatePicker({dataHandler}) {
  const date = new Date();
  const today = date.toISOString().split('T')[0];
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
        <input data-testid = "datePicker" type="date" value={today} name="date" min={today} max="2099-04-30" onChange={(e) => {
          dataHandler({type:"date", value: e.target.value})
        }}/>
    </div>
  );
}