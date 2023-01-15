import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full bg-sky-800 h-[350px] px-10 py-5 mt-16 grid grid-cols-12">
          <div className="col-span-3">
            <h5 className="font-semibold text-white text-2xl">KalaKreatif.</h5>
            <p className="text-white text-sm mt-3">
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
