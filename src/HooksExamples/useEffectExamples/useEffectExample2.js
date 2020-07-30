import React, { useState, useEffect } from "react";

function useEffectExample2() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  console.log("Page Loaded");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("UseEffect");
  }, []);

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}

export default useEffectExample2;
