import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white border cursor-pointer"
      onClick={() => navigate(`/produk/${data.id}`)}
    >
      <img src={data.thumbnail} alt="" className="h-[200px] w-full bg-cover" />
      <div className="p-3">
        <h5 className="text-sm md:text-lg text-slate-500 font-semibold">
          {data.title}
        </h5>
        <p className="text-sm text-slate-500">{data.brand}</p>
        <p className="text-sm text-slate-500">{data.category}</p>
        <h6 className="text-slate-500 text-sm md:text-lg mt-1">
          {data.price} USD
        </h6>
        <p className="text-slate-400 text-sm mt-1">
          Tersisa {data.stock} barang
        </p>
      </div>
    </div>
  );
};

export default Card;
