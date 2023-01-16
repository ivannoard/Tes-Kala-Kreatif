import React from "react";

const EmptyState = ({ navigate }) => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-slate-500 text-3xl text-center">
          Ups, Sepertinya keranjang kamu masih kosong.
        </h1>
        <button
          onClick={() => navigate("/produk")}
          className="mt-3 block mx-auto bg-secondary text-white font-semibold py-2 px-5"
        >
          Belanja Sekarang
        </button>
      </div>
    </>
  );
};

export default EmptyState;
