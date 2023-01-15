import React from "react";

const Posts = () => {
  return (
    <>
      <section className="mt-10 overflow-x-hidden px-10">
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
