import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full mx-auto fixed top-0 p-3 border-b z-10 bg-white">
        <div className="containers grid grid-cols-12 items-center">
          <div className="col-span-6">
            <div className="logo flex items-center gap-5">
              <h1 className="text-primary font-semibold text-xl">
                Kala
                <span className="text-secondary font-semibold">kreatif.</span>
              </h1>
              {/* <input
                type="text"
                className="w-2/4 block border rounded-[6px] text-sm py-1 px-4 outline-none focus:border-secondary"
                placeholder="Cari barang . . . "
              /> */}
            </div>
          </div>
          <div className="col-span-6 ml-auto">
            <div className="flex gap-5 items-center">
              <NavLink className="px-3 py-1 text-slate-500 nav-menu" to="/">
                <p>Beranda</p>
              </NavLink>
              <NavLink
                className="px-3 py-1 text-slate-500 nav-menu"
                to="/produk"
              >
                <p>Produk</p>
              </NavLink>
              <NavLink className="px-3 py-1 text-slate-500 nav-menu" to="/blog">
                <p>Blog</p>
              </NavLink>
              <NavLink
                className="px-3 py-1 text-slate-500 nav-menu"
                to="/tentang-kami"
              >
                <p>Tentang Kami</p>
              </NavLink>
              <HiOutlineShoppingCart
                size={22}
                stroke="#64748B"
                className="cursor-pointer"
                onClick={() => navigate("/keranjang")}
              />
              <button
                onClick={() => navigate("/auth/login")}
                className="bg-secondary px-5 py-2 text-white font-semibold rounded-[10px]"
              >
                Masuk
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
