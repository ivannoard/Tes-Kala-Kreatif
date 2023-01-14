import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WithFrame, WithoutFrame } from "../components/template";
import { AboutUs, Blog, Cart, Home, Login, Product, Register } from "../pages";

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
          <Route path="/produks" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tentang-kami" element={<AboutUs />} />
          <Route path="/keranjang" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
