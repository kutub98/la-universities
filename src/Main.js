import React from "react";
import { Outlet } from "react-router-dom";
import Roots from "./Components/Roots/Roots";

const Main = () => {
  return (
    <div>
      <Roots></Roots>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
