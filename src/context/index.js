import React from "react";
import AuthProvider from "./authContext";
import ProductsProvider from "./productsContext";
const Context = ({ children }) => {
  return (
    <>
      <ProductsProvider>
        <AuthProvider>{children}</AuthProvider>
      </ProductsProvider>
    </>
  );
};

export default Context;
