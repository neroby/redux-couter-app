import { createStore } from "redux";

const initState = { value: 0, showCounter: false };
const counterReducer = (state = initState, action) => {
  if (action.type === "increase") {
    return { ...state, value: state.value + action.payload };
  }

  if (action.type === "decrease") {
    return { ...state, value: state.value - action.payload };
  }
  if (action.type === "toggleCounter") {
    return { ...state, showCounter: !state.showCounter };
  } // (state.showCounter = !state.showCounter) this means that the inverse of the showCounter
  // we must add " ..state " to get the pevious value of the counter
  return state;
};

const store = createStore(counterReducer);

export default store;
