import React, { createContext, useContext } from "react";

// Step 1:  Creating the context
//Tutorial Link: https://dmitripavlutin.com/react-context-and-usecontext/#1-how-to-use-the-context
const Context = createContext("Default Value");

// Step 2:  Provide context to child component
export default function Main() {
  const value = "My Context Value";
  return (
    <Context.Provider value={value}>
      {/* child component ⤵️ */}
      <MyComponent />
    </Context.Provider>
  );
}

// Step 3: Consuming the context
function MyComponent() {
  debugger;
  const value = useContext(Context);
  return <span> {value}</span>;
}
