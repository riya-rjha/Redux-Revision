import { createStore } from "redux";

const counterReducer = (state = { value:0 }, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

let store = createStore(counterReducer);

console.log(store.getState());
store.dispatch({type: 'increment'});
console.log(store.getState());
store.dispatch({type: 'increment'});
console.log(store.getState());