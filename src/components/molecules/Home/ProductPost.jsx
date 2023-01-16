import React from "react";
import { useNavigate } from "react-router-dom";
import { PostProduct1, PostProduct2 } from "../../../assets/images";

const ProductPost = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="grid grid-cols-12 mt-10">
        <div className="relative col-span-12 md:col-span-6 h-[500px] flex items-center">
          <img
            src={PostProduct1}
            alt=""
            className="w-full h-full absolute -z-10"
          />
          <div className="bg-black bg-opacity-70 w-full h-full absolute -z-[9]"></div>
          <div className="content pt-32 px-5">
            <h3 className="text-white font-semibold text-3xl">
              Temukan barang yang anda butuhkan <br /> hanya di KalaKreatif.
            </h3>
            <button
              onClick={() => navigate("/produk")}
              className="text-sm md:tex-lg bg-secondary text-white px-5 py-2 mt-2"
            >
              Lihat semua produk
            </button>
          </div>
        </div>
        <div className="relative col-span-12 md:col-span-6 h-[500px] flex items-center">
          <img
            src={PostProduct2}
            alt=""
            className="w-full h-full absolute -z-10"
          />
          <div className="bg-black bg-opacity-80 w-full h-full absolute -z-[9]"></div>
          <div className="content px-5 pt-32">
            <h3 className="text-white font-semibold text-3xl">
              Lagi cari review? <br /> kami menyediakan review untuk anda
            </h3>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm md:tex-lg bg-secondary text-white px-5 py-2 mt-2"
            >
              Lihat semua review
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPost;
