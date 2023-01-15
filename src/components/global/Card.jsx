import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white border cursor-pointer"
      onClick={() => navigate(`/produk/${id}`)}
    >
      <div className="bg-slate-500 w-full h-[200px]"></div>
      <div className="p-3">
        <h5 className="text-sm md:text-lg text-slate-500 font-semibold">
          Lorem ipsum dolor sit amet.
        </h5>
        <h6 className="text-slate-500 text-sm md:text-lg mt-1">Rp. 100.000</h6>
        <p className="text-slate-400 text-sm mt-1">Terjual 100 barang</p>
      </div>
    </div>
  );
};

export default Card;
