import React from "react";
import Slider from "react-slick";
import { Jumbotron1, Jumbotron2, Jumbotron3 } from "../../../assets/images";

const Jumbotron = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <section className="jumbotron overflow-x-hidden">
        <Slider {...settings}>
          <div>
            <div className="relative w-full h-[500px] flex flex-col justify-center items-center">
              <img
                src={Jumbotron1}
                alt=""
                className="w-full h-full absolute -z-10"
              />
              <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 -z-[9]"></div>
              <h1 className="font-semibold text-white text-2xl mt-40 text-center">
                Temukan barang kesukaan anda di KalaKreatif
              </h1>
              <button className="text-sm md:text-md text-white bg-secondary mt-5 px-5 py-2 block mx-auto">
                Lihat selengkapnya
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={Jumbotron2}
              alt=""
              className="w-full h-full absolute -z-10"
            />
            <div className="bg-black bg-opacity-50 w-full h-full absolute -z-[9]"></div>
            <div className="w-full h-[500px] flex items-center px-3 md:px-20">
              <h1 className="font-semibold text-white text-lg md:text-2xl">
                Kami hanya menjual barang yang berkualitas <br /> hanya untuk
                anda.
              </h1>
            </div>
          </div>
          <div className="relative">
            <img
              src={Jumbotron3}
              alt=""
              className="w-full h-full absolute -z-10"
            />
            <div className="bg-black bg-opacity-50 w-full h-full absolute -z-[9]"></div>

            <div className="relative w-full h-[500px] flex items-center px-3 md:px-20">
              <div className="jumbotron-content">
                <h1 className="font-semibold text-white text-lg md:text-2xl">
                  Kami menyediakan postingan <br /> untuk mempermudah anda dalam
                  memilih barang.
                </h1>
                <button className="text-sm md:text-lg text-white bg-secondary mt-5 px-5 py-2">
                  Lihat selengkapnya
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Jumbotron;
