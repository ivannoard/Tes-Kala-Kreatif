import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="containers py-3 px-3 md:px-10">
          <div className="grid grid-cols-12 gap-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="col-span-12 md:col-span-3">
                <div
                  className="bg-white border cursor-pointer"
                  onClick={() => navigate(`/blog/${item}`)}
                >
                  <div className="bg-slate-500 w-full h-[200px]"></div>
                  <div className="p-3">
                    <h5 className="text-slate-500 font-semibold">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <p className="text-slate-400 text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus ducimus veniam libero reprehenderit tenetur aliquid
                      in veritatis ab voluptates exercitationem! Doloribus
                      temporibus voluptates accusamus ipsa ea molestias culpa
                      vero laborum.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
