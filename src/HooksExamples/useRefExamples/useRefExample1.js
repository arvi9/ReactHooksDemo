import React, { useState, useEffect, useRef } from "react";

//Using the ref
export default function useRefExample1() {
  const [name, setName] = useState("");
  //   const [reanderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    // setRenderCount((prevRenderCount) => prevRenderCount + 1);
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1> {name}</h1>
      <h1> {renderCount.current}</h1>
      {/* <h1> {reanderCount}</h1> */}
    </>
  );
}
