import React, { useState, useEffect } from "react";

function useEffectExample3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("UseEffect");
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default useEffectExample3;
