import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer>
        <div className="w-full bg-sky-800 px-3 md:px-10 py-10 mt-16 grid grid-cols-9 gap-5">
          <div className="col-span-12 md:col-span-3">
            <h5 className="font-semibold text-white text-2xl">KalaKreatif.</h5>
            <p className="text-white md:text-2xl mt-3">
              Solusi UMKMGOONLINE dengan menjangkau pasar digital.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:mx-auto">
            <h1 className="font-semibold text-white text-lg">Navigasi</h1>
            <div className="navigate-menu flex flex-col gap-3 mt-2 text-sm text-white">
              <p className="cursor-pointer" onClick={() => navigate("/")}>
                Beranda
              </p>
              <p className="cursor-pointer" onClick={() => navigate("/produk")}>
                Produk
              </p>
              <p className="cursor-pointer" onClick={() => navigate("/blog")}>
                Blog
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 mx-auto text-white">
            <h1 className="font-semibold text-lg">Kontak Kami</h1>
            <p>
              Dusun Ngemplak Rt 4 Rw 8 No.39, Nganti, Sendangadi, Kec. Mlati,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55285
            </p>
            <div className="social-media mt-3 flex items-center gap-3">
              <BsFacebook size={25} fill="#ffffff" />
              <AiFillInstagram size={32} fill="#ffffff" />
              <BsYoutube size={32} fill="#ffffff" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
