import React from "react";
import Slider from "react-slick";

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
            <div className="bg-red-500 w-full h-[500px] flex flex-col justify-center items-center">
              <h1 className="font-semibold text-white text-2xl mt-40 text-center">
                Temukan barang kesukaan anda di KalaKreatif
              </h1>
              <button className="text-sm md:text-md text-white bg-secondary mt-5 px-5 py-2 block mx-auto">
                Lihat selengkapnya
              </button>
            </div>
          </div>
          <div>
            <div className="bg-green-500 w-full h-[500px] flex items-center px-3 md:px-20">
              <h1 className="font-semibold text-white text-lg md:text-2xl">
                Kami hanya menjual barang yang berkualitas <br /> hanya untuk
                anda.
              </h1>
            </div>
          </div>
          <div>
            <div className="bg-blue-500 w-full h-[500px] flex items-center px-3 md:px-20">
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
