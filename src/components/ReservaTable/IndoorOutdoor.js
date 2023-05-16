import React, { useState } from "react";
import "./Button.css";
import chevron from "../../assets/svg/Vector 1.svg";
export default function IndoorOutdoor() {
  const [panel, setPanel] = useState(false);
  const dropdownStyle = {
    display: !panel ? "none" : "block",
  };
const togglePanel = () =>{
    setPanel((p) => !p);
}
  const [location, setLocation] = useState("Indoor");
  return (
    <div className="buttonWrapper">
      <button
        className="button top"
        onClick={() => {
          togglePanel();
        }}
      >
        <div className="word">{location}</div>

        <img src={chevron} alt="" className={`${!panel ? "chevron": "transformChevron"}`} />
      </button>
      <div className="dropDown" style={dropdownStyle}>
        <button className="button bottom " onClick={() => {setLocation(location !== "Outdoor" ? "Outdoor"  : "Indoor"); togglePanel() }}>
          <div className="word">{location === "Outdoor" ? "Indoor"  : "Outdoor"}</div>
        </button>
        
      </div>
    </div>
  );
}
