import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { Iform } from "../types";

function PrivateRoutes() {
  /* Checking if the user is logged in or not. */
  let users = JSON.parse(localStorage.getItem("Users") as string) || [];
  let auth = users && users.some((user: Iform) => user.isLogin === true);
  return <>{auth ? <Outlet /> : <Navigate to={"/login"} />}</>;
}

export default PrivateRoutes;
