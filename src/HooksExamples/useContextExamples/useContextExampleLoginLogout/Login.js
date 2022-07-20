import React, { useContext } from "react";
import authContext from "./AuthContext";

const Login = () => {
  const authL = useContext(authContext);
  return (
    <>
      <button onClick={authL.login}>Login</button>
    </>
  );
};

export default Login;
