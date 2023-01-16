import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Card } from "../../components/global";

const Product = () => {
  const [scrollY, setScrollY] = useState(0);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState();
  const [productsByCategory, setProductByCategory] = useState();
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  console.log(productsByCategory);

  async function fetchProductsByCategory(category) {
    await axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => {
        setData(response.data.products);
      });
  }

  async function fetchProducts() {
    await axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
      setIsLoading(false);
    });
  }
  async function fetchCategories() {
    await axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        setIsLoadingCategories(false);
      });
  }

  useEffect(() => {
    const onScroll = () => setScrollY(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  useEffect(() => {
    if (productsByCategory) {
      fetchProductsByCategory(productsByCategory);
    } else {
      fetchProducts();
    }
    fetchCategories();
  }, [productsByCategory]);
  const uniqueDataProducts = [
    ...new Map(data?.map((item) => [item.title, item])).values(),
  ];
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
              <div className="flex flex-col gap-2 overflow-scroll h-[250px] mt-2">
                <p
                  className="text-slate-500 cursor-pointer"
                  onClick={() => setProductByCategory()}
                >
                  Semua Produk
                </p>
                {isLoadingCategories
                  ? "loading"
                  : categories?.map((item, index) => (
                      <p
                        onClick={() => setProductByCategory(item)}
                        key={index}
                        className="text-slate-500 cursor-pointer"
                      >
                        {item}
                      </p>
                    ))}
              </div>
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
            {isLoading
              ? "loading"
              : uniqueDataProducts?.map((item) => (
                  <div key={item.id} className="col-span-6 md:col-span-3">
                    <Card data={item} />
                  </div>
                ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
