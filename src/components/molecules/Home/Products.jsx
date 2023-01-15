import React from "react";
import { Card } from "../../global";

const Products = ({ data, isLoading }) => {
  return (
    <>
      <section className="products mt-10">
        <div className="grid grid-cols-12 gap-3 md:gap-8 px-3 md:px-10">
          {isLoading
            ? "loading"
            : data?.map((item, index) => (
                <div key={index} className="col-span-12 md:col-span-3">
                  <Card data={item} />
                </div>
              ))}
        </div>

        <button className="block mt-10 mx-auto py-2 px-5 bg-secondary text-white font-semibold">
          Lihat semua produk
        </button>
      </section>
    </>
  );
};

export default Products;
