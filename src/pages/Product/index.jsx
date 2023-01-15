import React, { useEffect, useState } from "react";
import { Card } from "../../components/global";
import { BsChevronDown } from "react-icons/bs";

const Product = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);
  return (
    <>
      <main>
        <div className="containers py-3 grid grid-cols-12 gap-3 px-3 md:px-10">
          {/* <div className="profile-toko bg-white p-5  m-3 border">
            <div className="logo">
              <h1 className="text-primary font-semibold text-xl">
                Kala
                <span className="text-secondary font-semibold block">
                  kreatif.
                </span>
              </h1>
            </div>
          </div> */}
          <div className="hidden col-span-0 md:block md:col-span-2">
            <div className={` p-3 sticky ${scrollY > 0 ? "top-[68px]" : ""}`}>
              <h1 className="text-sm text-slate-500 font-semibold border-b-2 border-slate-500 pb-1">
                Kategori Produk
              </h1>
            </div>
          </div>
          <div className="col-span-12 md:hidden md:col-span-0">
            <div className="flex justify-between items-center border-b-2 border-slate-500">
              <h1 className="text-sm text-slate-500 font-semibold pb-1">
                Kategori Produk
              </h1>
              <BsChevronDown className="text-slate-500 cursor-pointer" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-3 md:gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="col-span-6 md:col-span-3">
                <Card id={item} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
