import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

function Counter() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const { increase, decrease } = counterActions;

  const handleCounterValue = (value) => {
    if (value < 1) {
      return "no number";
    }
    return value;
  };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {globalState.showCounter && (
        <>
          <div className="counter">
            Counter: {handleCounterValue(globalState.value)}
          </div>
          <div>
            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(increase(5))}
            >
              Increase +
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => dispatch(decrease(2))}
            >
              Decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn btn-outline-secondary">
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}

export default Counter;
