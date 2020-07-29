import React, { useState } from "react";

function useStateExample1() {
  // function inside the useState will be rendered first time only but if we call function instide use state it will be rendered for each call.
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 0;
  });

  function decerement() {
    setCount((preCount) => preCount - 1);
  }

  function increment() {
    setCount((preCount) => preCount + 1);
  }

  return (
    <>
      <button onClick={decerement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default useStateExample1;
