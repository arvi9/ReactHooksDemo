import { useState, createContext, useContext } from "react";
import React from "react";

//Step 1. Create Context
const User1Context = createContext();

// Step 2:  Provide context to child component
function Component1() {
  const [user, setUser] = useState("Arvind D C");
  return (
    <User1Context.Provider value={user}>
      <h1>{`This is ${user}!`}</h1>
      <Component2 user={user} />
    </User1Context.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

// Step 3: Consuming the context
function Component5() {
  const user = useContext(User1Context);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export { Component1 };
