import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <br />
      <b>{"Use State"}</b>
      <br />
      <NavLink to="/useStateExmple1"> useStateExmple1 </NavLink>
      <br />
      <NavLink to="/useStateWithObjects"> useStateWithObjects </NavLink>
      <br />
      <b>{"Use Effect"}</b>
      <br />
      <NavLink to="/useEffectExample1"> useEffectExample1 </NavLink>
      <br />
      <NavLink to="/useEffectExample2"> useEffectExample2</NavLink>
      <br />
      <NavLink to="/useEffectExample3"> useEffectExample3</NavLink>
      <br />
      <b>{"Use Memo"}</b>
      <br />
      <NavLink to="/useMemoExample1"> useMemoExample1</NavLink>
      <br />
      <b>{"Use Ref"}</b>
      <br />
      <NavLink to="/useRefExample1"> useRefExample1 </NavLink>
      <br />
      <NavLink to="/useRefExample2"> useRefExample2</NavLink>
      <br />
      <NavLink to="/useRefExample3"> useRefExample3</NavLink>
      <br />
      <b>{"Use Context"}</b>
      <br />
      <NavLink to="/useContextExampleDefinationRender">
        {" "}
        useContext Example Defination{" "}
      </NavLink>
      <br />
      <NavLink to="/AppLoginLogout">AppLoginLogout</NavLink>
      <br />
      <br />
      <NavLink to="/useContextExample1">useContextExample1</NavLink>
      <br />
      <NavLink to="/useContextExample2">useContextExample2</NavLink>
      <br />
      <b>{"Use Callback"}</b>
      <br />
      <NavLink to="/useCallBackExample1">useCallBackExample1</NavLink>
      <br />
      <b>{"Use Reducer"}</b>
      <br />
      <NavLink to="/useReducerExample1"> useReducerExample1</NavLink>
      <br />
      <NavLink to="/useReducerExample2">useReducerExample2</NavLink>
      <br />
      <b>{"Custome Hook"}</b>
      <br />
      <NavLink to="/CustomHookExample1">CustomHookExample1</NavLink>
      <br />
      <br />
      <br />
    </>
  );
}

export default Header;
