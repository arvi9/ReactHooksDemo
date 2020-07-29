import React, { useState } from "react";

function useStateWithObjects() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decerement() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  function increment() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  //   const { data } = this.state;

  return (
    <>
      <button onClick={decerement}>-</button>
      <span>{theme}</span>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default useStateWithObjects;
