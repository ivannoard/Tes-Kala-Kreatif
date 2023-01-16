import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const CategoryHeader = ({ setProductByCategory, categories }) => {
  const [toggle, setToggle] = useState(false);
  function handleClick(e, item) {
    e.preventDefault();
    setProductByCategory(item);
    setToggle(false);
  }
  function handleAllProducts(e) {
    e.preventDefault();
    setProductByCategory();
    setToggle(false);
  }
  return (
    <>
      <div className="relative">
        <div
          onClick={() => setToggle(!toggle)}
          className="flex cursor-pointer justify-between items-center border-b-2 border-slate-500"
        >
          <h1 className="text-sm text-slate-500 font-semibold pb-1">
            Kategori Produk
          </h1>
          <BsChevronDown className="text-slate-500 " />
        </div>
        {toggle && (
          <div className="absolute bg-white w-full p-3 h-[200px] overflow-x-hidden overflow-y-scroll">
            <p
              className="text-slate-500 my-1 cursor-pointer"
              onClick={(e) => handleAllProducts(e)}
            >
              Semua Produk
            </p>
            {categories.map((item) => (
              <p
                className="text-slate-500 my-1 cursor-pointer"
                onClick={(e) => handleClick(e, item)}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryHeader;
