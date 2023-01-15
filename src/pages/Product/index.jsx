import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/global";

const Product = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
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
        <div className="containers py-3 grid grid-cols-12 gap-3 px-10">
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
          <div className="col-span-2">
            <div className={` p-3 sticky ${scrollY > 0 ? "top-[68px]" : ""}`}>
              <h1 className="text-sm text-slate-500 font-semibold border-b-2 border-slate-500 pb-1">
                Kategori Produk
              </h1>
            </div>
          </div>
          <div className="col-span-10 grid grid-cols-12 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="col-span-3">
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
