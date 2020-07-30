import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function useReducerExample1() {
  //When we call dispatch it is sent to action variable
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decerement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <>
      <button onClick={decerement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

//state - is inital state i.e. {count:0}
// action - when we call dispatch the action variable is sent to action
function reducer(state, action) {
  console.log("Reducer is Called");
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default useReducerExample1;
