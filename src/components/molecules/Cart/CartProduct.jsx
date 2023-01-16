import React from "react";

const CartProduct = ({ item, navigate }) => {
  return (
    <>
      <div className="col-span-10">
        <div className="card-content items-center px-5">
          {/* <div className="bg-slate-500 w-[100px] h-[100px]"></div> */}
          <div className="py-2">
            <h5 className="text-slate-900 font-semibold text-md md:text-lg">
              {item.products[0].title}
            </h5>
            <h4 className="font-semibold text-slate-500 text-lg md:text-xl">
              {item.products[0].price} USD
            </h4>
            <p className="text-slate-500 text-sm md:text-md">
              jumlah: {item.products[0].quantity}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-2">
        <div className="mt-3 md:mt-0 md:p-5">
          <button
            onClick={() => navigate(`/produk/${item.products[0].id}`)}
            className="text-sm md:text-md w-full bg-secondary block mx-auto py-2 px-4 text-white font-semibold"
          >
            Lihat Barang
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
