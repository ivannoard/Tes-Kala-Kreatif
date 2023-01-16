import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/auth/login");
  }
  console.log(user);
  return (
    <>
      <div className="max-w-[1879px] mx-auto fixed right-0 left-0 top-0 py-3 border-b z-10 bg-white">
        <div className="containers px-3 md:px-10 grid grid-cols-12 items-center">
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
          <div className="hidden col-span-0 md:block md:col-span-6 ml-auto">
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
              {/* <NavLink
                className="px-3 py-1 text-slate-500 nav-menu"
                to="/tentang-kami"
              >
                <p>Tentang Kami</p>
              </NavLink> */}
              <HiOutlineShoppingCart
                size={22}
                stroke="#64748B"
                className="cursor-pointer"
                onClick={() => navigate("/keranjang")}
              />
              {!user ? (
                <button
                  onClick={() => navigate("/auth/login")}
                  className="bg-secondary px-5 py-2 text-white font-semibold"
                >
                  Masuk
                </button>
              ) : (
                <Menu as="div" className="relative">
                  <Menu.Button>
                    <div className="px-5 py-2 flex items-center gap-2 cursor-pointer text-slate-500 font-semibold">
                      {user.username}
                      <BsChevronDown />
                    </div>
                  </Menu.Button>
                  <Menu.Items
                    as="div"
                    className="absolute top-12 right-0 bg-white"
                  >
                    <Menu.Item
                      as="div"
                      className="bg-white cursor-pointer w-[200px] px-5 py-2 font-semibold text-slate-500"
                    >
                      <p onClick={(e) => handleLogout(e)}>Logout</p>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              )}
            </div>
          </div>
          <div className="col-span-6 ml-auto md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button>
                <BiMenu size={20} fill="#64748B" />
              </Menu.Button>
              <Menu.Items
                as="div"
                className="absolute bg-white w-[200px] top-10 right-0 px-4 py-2 flex flex-col gap-5"
              >
                <Menu.Item
                  as="div"
                  className="text-sm text-slate-500 cursor-pointer"
                >
                  <p onClick={() => navigate("/")}>Beranda</p>
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className="text-sm text-slate-500 cursor-pointer"
                >
                  <p onClick={() => navigate("/produk")}>Produk</p>
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className="text-sm text-slate-500 cursor-pointer"
                >
                  <p onClick={() => navigate("/blog")}>Blog</p>
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className="text-sm text-slate-500 cursor-pointer"
                >
                  <p onClick={() => navigate("/keranjang")}>Keranjang</p>
                </Menu.Item>
                <Menu.Item as="div" className="text-sm text-slate-500">
                  <button className="bg-secondary text-white w-full py-1 text-sm">
                    Masuk
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
