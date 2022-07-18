import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <NavLink to="/useStateExmple1"> useStateExmple1 </NavLink>
      <br />
      <NavLink to="/useStateWithObjects"> useStateWithObjects </NavLink>
      <br />
      <NavLink to="/useEffectExample1"> useEffectExample1 </NavLink>
      <br />
      <NavLink to="/useEffectExample2"> useEffectExample2</NavLink>
      <br />
      <NavLink to="/useEffectExample3"> useEffectExample3</NavLink>
      <br />
      <NavLink to="/useMemoExample1"> useMemoExample1</NavLink>
      <br />
      <NavLink to="/useRefExample1"> useRefExample1 </NavLink>
      <br />
      <NavLink to="/useRefExample2"> useRefExample2</NavLink>
      <br />
      <NavLink to="/useRefExample3"> useRefExample3</NavLink>
      <br />
      <NavLink to="/useContextExample1">useContextExample1</NavLink>
      <br />
      <NavLink to="/useCallBackExample1">useCallBackExample1</NavLink>
      <br />
      <NavLink to="/useReducerExample1"> useReducerExample1</NavLink>
      <br />
      <NavLink to="/useReducerExample2">useReducerExample2</NavLink>
      <br />
      <NavLink to="/CustomHookExample1">CustomHookExample1</NavLink>
      <br />
      <br />
      <br />
    </>
  );
}

export default Header;
