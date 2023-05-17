import React, { useEffect, useReducer } from "react";
import './DinerCount.css'
export default function DinerCount({dataHandler}) {
  const reducer = (count, action) => {
    switch (action.type) {
      case "increment":
        if (count < 12) {
          return count + 1;
        } else if (count === 12) {
          return count;
        }
      case "decrement":
        if (count > 1) {
          return count - 1;
        }else if(count === 1){
            return count;
        }
    }
  };
  const [count, dispatch] = useReducer(reducer, 1);
useEffect(()=> {
  dataHandler({type: "count", value: count})
},[count])
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (<>
    <div className="dinerCount">
     <div>Diner Count: &nbsp; &nbsp;</div>
    <div className="dinerCount2">
      <button className="countButton" onClick={decrement}>-</button>
      <div>{count}</div>
      <button className = "countButton"onClick={increment}>+</button>
    </div>
    </div>
  </>
  );
}
