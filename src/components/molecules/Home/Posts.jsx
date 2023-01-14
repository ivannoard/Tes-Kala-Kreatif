import React from "react";
import Slider from "react-slick";
const Posts = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="mt-10 overflow-x-hidden px-3">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div className="bg-red-500 w-full h-[350px]">1</div>
          </div>
          <div className="col-span-4">
            <div className="bg-red-500 w-full h-[350px]">1</div>
          </div>
          <div className="col-span-4">
            <div className="bg-red-500 w-full h-[350px]">1</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
