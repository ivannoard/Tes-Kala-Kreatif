import React from "react";
import { useNavigate } from "react-router-dom";
import { Post1, Post2, Post3 } from "../../../assets/images";

const Posts = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="mt-10 overflow-x-hidden px-3 md:px-10">
        <div className="grid grid-cols-12 gap-3 md:gap-8">
          <div className="col-span-12 md:col-span-4">
            <div className="relative  w-full h-[350px]">
              <img
                src={Post1}
                alt=""
                className="w-full h-full absolute -z-10"
              />
              <div className="bg-black bg-opacity-70 w-full h-full absolute -z-[9]"></div>
              <div className="content pt-48 px-5">
                <h3 className="text-white font-semibold text-xl">
                  His mother had always taught him
                </h3>
                <button
                  onClick={() => navigate("/blog/1")}
                  className="text-sm md:tex-lg bg-secondary text-white px-5 py-2 mt-2"
                >
                  Lihat review
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="relative w-full h-[350px]">
              <img
                src={Post2}
                alt=""
                className="w-full h-full absolute -z-10"
              />
              <div className="bg-black bg-opacity-70 w-full h-full absolute -z-[9]"></div>
              <div className="content pt-48 px-5">
                <h3 className="text-white font-semibold text-xl">
                  He was an expert but <br /> not in a discipline
                </h3>
                <button
                  onClick={() => navigate("/blog/2")}
                  className="text-sm md:tex-lg bg-secondary text-white px-5 py-2 mt-2"
                >
                  Lihat review
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="relative w-full h-[350px]">
              <img
                src={Post3}
                alt=""
                className="w-full h-full absolute -z-10"
              />
              <div className="bg-black bg-opacity-70 w-full h-full absolute -z-[9]"></div>
              <div className="content pt-48 px-5">
                <h3 className="text-white font-semibold text-xl">
                  Dave watched as the forest burned up on the hill.
                </h3>
                <button
                  onClick={() => navigate("/blog/3")}
                  className="text-sm md:tex-lg bg-secondary text-white px-5 py-2 mt-2"
                >
                  Lihat review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
