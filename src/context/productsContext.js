import React, { useReducer } from "react";

const initialState = {
  products: null || localStorage.getItem("data"),
};

const reducers = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, user: action.payload };
    default:
      break;
  }
};

export const ProductsContext = React.createContext(); // dipanggil menggunakan useContext

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const value = {
    products: state.products,
    getProduct: (data) => {
      dispatch({ type: "FETCH_PRODUCTS", payload: data });
    },
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
