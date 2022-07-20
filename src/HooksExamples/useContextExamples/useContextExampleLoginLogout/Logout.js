import React, { useContext } from "react";
import authContext from "./AuthContext";

const Logout = () => {
  const authL = useContext(authContext);
  return (
    <>
      <button onClick={authL.logout}>Logout</button>
    </>
  );
};

export default Logout;
