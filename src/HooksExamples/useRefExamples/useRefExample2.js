import React, { useState, useRef } from "react";

//Using the ref
export default function useRefExample2() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  function focus() {
    // console.log(inputRef.current);
    inputRef.current.focus();
  }
  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1> {name}</h1>
      <button onClick={focus}>Focus</button>
    </>
  );
}
