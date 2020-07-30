import React, { useState, useMemo } from "react";

//useMemo is used to caching a value without rerendering it
function useMemoExample1() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //slowFunction is Run only when the number changes
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  console.log("App Loaded ");

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 10000000000000000000000000000000000000; i++) {
    return num * 2;
  }
}

export default useMemoExample1;
