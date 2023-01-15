import React from "react";

const BlogDetail = () => {
  return (
    <>
      <main className="pt-3">
        <div className="containers !max-w-5xl border">
          <div className="bg-slate-900 w-full h-[450px]"></div>
          <div className="blog-content px-3 mt-3">
            <h1 className="font-semibold text-3xl">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-sm text-slate-500">Ivan Nova Ardiansyah</p>
            <p className="text-sm text-slate-500">15 January 2023</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
