import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WithFrame, WithoutFrame } from "../components/template";
import {
  AboutUs,
  Blog,
  BlogDetail,
  Cart,
  Home,
  Login,
  Product,
  ProductDetail,
  Register,
} from "../pages";

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
          <Route path="/produk" element={<Product />} />
          <Route path="/produk/:productId" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
          <Route path="/tentang-kami" element={<AboutUs />} />
          <Route path="/keranjang" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
