import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  products: null || localStorage.getItem("data"),
};

const reducers = (state, action) => {
  switch (action.type) {
    case "STORE_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      break;
  }
};

export const ProductsContext = React.createContext(); // dipanggil menggunakan useContext

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    if (state.products === null) {
      axios
        .get("https://dummyjson.com/products")
        .then((response) =>
          dispatch({ type: "STORE_PRODUCTS", payload: response.data })
        );
    }
  }, [state.products]);

  // const value = {
  //   products: state.products,
  //   storeProducts: (type, data) => {
  //     dispatch({ type: "STORE_PRODUCTS", payload: data });
  //   },
  // };

  return (
    <ProductsContext.Provider value={state}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
