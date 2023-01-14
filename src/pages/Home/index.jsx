import React from "react";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="App">
      <div className="containers">
        <section className="jumbotron overflow-x-hidden">
          <Slider {...settings}>
            <div>
              <div className="bg-red-500 w-full h-[500px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-white text-2xl mt-40">
                  Temukan barang kesukaan anda di KalaKreatif
                </h1>
                <button className="text-white bg-secondary mt-5 rounded-[10px] px-5 py-2 block mx-auto">
                  Lihat selengkapnya
                </button>
              </div>
            </div>
            <div>
              <div className="bg-green-500 w-full h-[500px] flex items-center px-20">
                <h1 className="font-semibold text-white text-2xl">
                  Kami hanya menjual barang yang berkualitas <br /> hanya untuk
                  anda.
                </h1>
              </div>
            </div>
            <div>
              <div className="bg-blue-500 w-full h-[500px] flex items-center px-20">
                <div className="jumbotron-content">
                  <h1 className="font-semibold text-white text-2xl">
                    Kami menyediakan postingan <br /> untuk mempermudah anda
                    dalam memilih barang.
                  </h1>
                  <button className="text-white bg-secondary mt-5 rounded-[10px] px-5 py-2">
                    Lihat selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </section>
        <section className="grid grid-cols-12 mt-10">
          <div className="col-span-6 bg-yellow-500 h-[500px]">asd</div>
          <div className="col-span-6 bg-slate-500 h-[500px]">qwe</div>
        </section>
        <section className="products mt-10">
          <div className="grid grid-cols-12 gap-8 px-3">
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="bg-white border">
                <div className="bg-slate-500 w-full h-[200px]"></div>
                <div className="p-3">asd</div>
              </div>
            </div>
          </div>

          <button className="block mt-10 mx-auto py-2 px-5 rounded-[10px] bg-secondary text-white font-semibold">
            Lihat semua produk
          </button>
        </section>
        <section className="mt-10 overflow-x-hidden">
          <Slider {...settings2}>
            <div>
              <div className="bg-red-500 w-full h-[350px]">1</div>
            </div>
            <div>
              <div className="bg-red-500 w-full h-[350px]">2</div>
            </div>
            <div>
              <div className="bg-red-500 w-full h-[350px]">3</div>
            </div>
            <div>
              <div className="bg-red-500 w-full h-[350px]">4</div>
            </div>
            <div>
              <div className="bg-red-500 w-full h-[350px]">5</div>
            </div>
            <div>
              <div className="bg-red-500 w-full h-[350px]">6</div>
            </div>
          </Slider>
        </section>
        <footer>
          <div className="w-full bg-secondary h-[350px] mt-16"></div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
