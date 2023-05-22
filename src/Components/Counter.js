import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();

  // use globalState to  handle multi useSelector . just only one state.
  const globalState = useSelector((state) => state);

  // const counterState = useSelector((state) => state.value);
  // <-------- u can make functon inside useSelector----------->
  // const counterState = useSelector((state) => {
  //   if (state.value < 1) {
  //     return "no number";
  //   }
  //   return state.value;
  // });

  // const toggleState = useSelector((state) => state.showCounter);

  const handleCounterValue = (value) => {
    if (value < 1) {
      return "no number";
    }
    return value;
  };

  // const increase = () => {
  //     // const action = { type: "increase", payload: 4 };
  //   dispatch({ type: "increase", payload: 4 });
  // };

  // const decrease = () => {
  //     // const action = { type: "decrease", payload: 2 };
  //   dispatch({ type: "decrease", payload: 2 });
  // };

  // <----- to make more simplifying the func. increase & decrease
  const counterOperation = (type, payload) => {
    // dispatch({ type: type, payload: payload})

    // <----- since key & value are same we can simplify it as (type, payload)
    dispatch({ type, payload });
  };

  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
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
              onClick={() => counterOperation("increase", 4)}
            >
              Increase +
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => counterOperation("decrease", 2)}
            >
              Decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn btn-outline-secondary" onClick={toggleCounter}>
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}

export default Counter;
