import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Card, CardSkeleton, TextSkeleton } from "../../components/global";
import {
  CategoryHeader,
  CategorySidebar,
} from "../../components/molecules/Product";

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
            <CategorySidebar
              scrollY={scrollY}
              isLoadingCategories={isLoadingCategories}
              setProductByCategory={setProductByCategory}
              categories={categories}
            />
          </div>
          <div className="col-span-12 md:hidden md:col-span-0">
            <CategoryHeader
              setProductByCategory={setProductByCategory}
              categories={categories}
            />
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-3 md:gap-5">
            {isLoading
              ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="col-span-12 md:col-span-3">
                    <CardSkeleton />
                  </div>
                ))
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
