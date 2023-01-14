import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WithFrame, WithoutFrame } from "../components/template";
import { Home, Login, Register } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutFrame />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route element={<WithFrame />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
