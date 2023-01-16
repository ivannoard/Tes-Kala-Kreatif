import React from "react";
import { useNavigate } from "react-router-dom";
import { CartProduct, EmptyState } from "../../components/molecules/Cart";

const Cart = () => {
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const navigate = useNavigate();
  console.log(cartData);
  return (
    <>
      <main className="py-3">
        <div className="max-w-5xl px-3 md:px-0 p-3 mx-auto bg-white shadow-md flex flex-col gap-5">
          {!cartData ? (
            <EmptyState navigate={navigate} />
          ) : (
            cartData.map((item) => (
              <div className="card bg-white grid grid-cols-12 items-center">
                <CartProduct item={item} navigate={navigate} />
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;
