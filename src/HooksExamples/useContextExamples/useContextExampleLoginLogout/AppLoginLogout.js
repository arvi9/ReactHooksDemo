import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import authContext from "./AuthContext";

const AppLoginLogout = () => {
  const [auth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };

  return (
    <>
      <authContext.Provider
        value={{ auth: auth, login: login, logout: logout }}
      >
        <p>{auth ? "Hi! Your are Logged In" : "Kindly Login"}</p>
        <Login />
        <Logout />
      </authContext.Provider>
    </>
  );
};

export default AppLoginLogout;
