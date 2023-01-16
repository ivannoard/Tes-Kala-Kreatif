import React from "react";
import { BsChevronDown } from "react-icons/bs";

const CategoryHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-slate-500">
        <h1 className="text-sm text-slate-500 font-semibold pb-1">
          Kategori Produk
        </h1>
        <BsChevronDown className="text-slate-500 cursor-pointer" />
      </div>
    </>
  );
};

export default CategoryHeader;
