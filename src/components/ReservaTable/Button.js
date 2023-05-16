import React, { useState } from "react";
import "./Button.css";
import glass from "../../assets/svg/Group 1.svg";
import chevron from "../../assets/svg/Vector 1.svg";
export default function Button() {
  const [panel, setPanel] = useState(false);
  const dropdownStyle = {
    display: !panel ? "none" : "block",
  };
const togglePanel = () =>{
    setPanel((p) => !p);
}
  const [ocassion, setOcassion] = useState("Ocassion");
  return (
    <div className="buttonWrapper">
      <button
        className="button top"
        onClick={() => {
          togglePanel();
        }}
      >
        <img className="glass" src={glass} alt="" />
        <div className="word">{ocassion}</div>

        <img src={chevron} alt="" className={`${!panel ? "chevron": "transformChevron"}`} />
      </button>
      <div className="dropDown" style={dropdownStyle}>
        <button className="button " onClick={() => {setOcassion("Anniversary"); togglePanel() }}>
          <div className="word">Anniversary</div>
        </button>
        <button className="button" onClick={() => {setOcassion("BirthDay"); togglePanel()}}>
          <div className="word">Birthday</div>
        </button>
        <button className="button" onClick={() => {setOcassion("Engagement"); togglePanel()}}>
          <div className="word">Engagement</div>
        </button>
        <button className="button bottom
        " onClick={() => {setOcassion("Ocassion"); togglePanel()}}>
          <div className="word">None</div>
        </button>
      </div>
    </div>
  );
}
