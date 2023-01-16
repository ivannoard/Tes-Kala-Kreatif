import React from "react";
import { TextSkeleton } from "../../global";

const CategorySidebar = ({
  scrollY,
  isLoadingCategories,
  setProductByCategory,
  categories,
}) => {
  return (
    <>
      <div className={` p-3 sticky ${scrollY > 0 ? "top-[68px]" : ""}`}>
        <h1 className="text-sm text-slate-500 font-semibold border-b-2 border-slate-500 pb-1">
          Kategori Produk
        </h1>
        <div className="flex flex-col gap-2 overflow-scroll h-[250px] mt-2">
          <p
            className={`text-slate-500 cursor-pointer ${
              isLoadingCategories ? "hidden" : "block"
            }`}
            onClick={() => setProductByCategory()}
          >
            Semua Produk
          </p>
          {isLoadingCategories ? (
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <TextSkeleton />
              ))}
            </div>
          ) : (
            categories?.map((item, index) => (
              <p
                onClick={() => setProductByCategory(item)}
                key={index}
                className="text-slate-500 cursor-pointer"
              >
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CategorySidebar;
