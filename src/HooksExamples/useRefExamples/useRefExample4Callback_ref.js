import React, { useRef, useEffect } from "react";

export default function InputFocus() {
  const yearInputRef = useRef();
  const textInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const inputText = textInputRef.current.value;
    console.log("Year:" + selectedYear);
    console.log("Input Text:" + inputText);
  }
  return (
    <>
      <h3>Check output at Console</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="year">Year</label>
        <select id="year" ref={yearInputRef}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
        <br />
        <label htmlFor="inp">input</label>
        <input type="text" ref={textInputRef} />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <br />
    </>
  );
}
