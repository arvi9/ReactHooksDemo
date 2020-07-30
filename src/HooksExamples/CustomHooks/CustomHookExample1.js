import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

//Note: Hooks function starts with 'use'
export default function CustomHookExample1() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}
