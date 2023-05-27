import { createSlice, createStore } from "@reduxjs/toolkit";

const initState = { value: 0, showCounter: true };

// React-Redux toolkit implementaion ------>

const counterSlice = createSlice({
  // a set of keys like: name, ..../
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// <--- using React-redux --->

// const counterReducer = (state = initState, action) => {
//   if (action.type === "increase") {
//     return { ...state, value: state.value + action.payload };
//   }

//   if (action.type === "decrease") {
//     return { ...state, value: state.value - action.payload };
//   }
//   if (action.type === "toggleCounter") {
//     return { ...state, showCounter: !state.showCounter };
//   } // (state.showCounter = !state.showCounter) this means that the inverse of the showCounter
//   // we must add " ..state " to get the pevious value of the counter
//   return state;
// };

const store = createStore(counterSlice.reducer);
export const counterActions = counterSlice.actions;
export default store;
