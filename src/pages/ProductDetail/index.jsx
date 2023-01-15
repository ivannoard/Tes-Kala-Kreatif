import React from "react";
import Slider from "react-slick";

const index = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a href>
          <img
            src={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${
              i + 1
            }.jpg`}
            alt=""
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <main>
        <div className="containers py-3 px-3 md:px-10">
          <div className="grid grid-cols-12 border">
            <div className="col-span-4">
              <div className="bg-slate-500 w-full h-[300px]"></div>
            </div>
            <div className="col-span-8 px-10 py-3 flex flex-col justify-between">
              <div className="product">
                <div className="title pb-2 border-b border-slate-500">
                  <h5 className="text-slate-500 font-semibold text-2xl">
                    Lorem ipsum dolor sit amet.
                  </h5>
                  <h3 className="text-slate font-semibold text-xl mt-2">
                    Rp. 100.000
                  </h3>
                </div>
                <p className="mt-2">Deskripsi</p>
                <p className="mt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  illo nostrum quas ex deserunt? Dicta accusantium excepturi
                  quos voluptates quo eveniet quasi maiores consectetur.
                  Deleniti nemo reprehenderit perferendis architecto
                  perspiciatis!
                </p>
              </div>
              <div className="buttons ml-auto flex gap-2">
                <button className="bg-white text-slate-400 font-semibold py-2 px-5 border-2 border-sky-200">
                  Keranjang
                </button>
                <button className="bg-secondary text-white font-semibold py-2 px-5">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white mt-3 p-3 border">
            <h4 className="text-slate-500 font-semibold  text-lg">Komentar</h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
