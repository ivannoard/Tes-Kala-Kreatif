import React from "react";

const BlogCard = ({ navigate, item }) => {
  return (
    <>
      <div
        className="bg-white border cursor-pointer mb-3"
        onClick={() => navigate(`/blog/${item.id}`)}
      >
        {/* <div className="bg-slate-500 w-full h-[200px]"></div> */}
        <div className="p-3">
          <h5 className="text-slate-500 font-semibold">{item.title}</h5>
          <p className="text-slate-400 text-sm">
            {item.body.split(" ").splice(0, 20).join(" ")}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
