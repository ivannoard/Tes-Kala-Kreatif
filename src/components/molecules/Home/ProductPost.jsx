import React from "react";

const ProductPost = () => {
  return (
    <>
      <section className="grid grid-cols-12 mt-10">
        <div className="col-span-12 md:col-span-6 bg-yellow-500 h-[500px] flex items-center px-5 pt-32">
          <div className="content">
            <h3 className="text-white font-semibold text-3xl">
              Temukan barang yang anda butuhkan <br /> hanya di KalaKreatif.
            </h3>
            <button className="text-sm md:tex-lg bg-secondary text-white px-5 py-2 mt-2">
              Lihat semua produk
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 bg-red-500 h-[500px] flex items-center px-5 pt-32">
          <div className="content">
            <h3 className="text-white font-semibold text-3xl">
              Lagi cari review? <br /> kami menyediakan review untuk anda
            </h3>
            <button className="text-sm md:tex-lg bg-secondary text-white px-5 py-2 mt-2">
              Lihat semua produk
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPost;
