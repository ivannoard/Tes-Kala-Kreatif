import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../global";

const WithFrame = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  );
};

export default WithFrame;
