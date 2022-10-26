import React from "react";
import { Outlet } from "react-router-dom";
import Roots from "../Roots/Roots";

const LayOut = () => {
  return (
    <div>
      <Roots></Roots>
      <Outlet></Outlet>
    </div>
  );
};

export default LayOut;
