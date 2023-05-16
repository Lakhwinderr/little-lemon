import React, { useReducer } from "react";
import './DinerCount.css'
export default function DinerCount() {
  const reducer = (count, action) => {
    switch (action.type) {
      case "increment":
        if (count < 12) {
          return count + 1;
        } else if (count === 12) {
          return count;
        }
      case "decrement":
        if (count > 0) {
          return count - 1;
        }else if(count === 0){
            return count;
        }
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

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
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
    </div>
  </>
  );
}
