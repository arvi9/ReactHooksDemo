import React, { useState, useEffect } from "react";

function useEffectExample3() {
  const [Count] = useState(0);

  useEffect(() => {
    console.log("UseEffect");
  });

  return (
    <>
      <div>{Count}</div>
    </>
  );
}

export default useEffectExample3;
