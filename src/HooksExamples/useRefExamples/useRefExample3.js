import React, { useState, useRef, useEffect } from "react";

//Using the ref to store previous value of state
export default function useRefExample3() {
  const [name, setName] = useState("");
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is <b>{name}</b> and it used to be <b>{prevName.current}</b>
      </div>
    </>
  );
}
