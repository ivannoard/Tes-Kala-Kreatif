import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  async function getPosts() {
    await axios
      .get("https://dummyjson.com/posts")
      .then((response) => setData(response.data.posts));
  }
  useEffect(() => {
    getPosts();
  }, []);
  console.log(data);
  return (
    <>
      <main>
        <div className="containers py-3 px-3 md:px-10">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-8 p-3">
              {data?.map((item) => (
                <div
                  className="bg-white border cursor-pointer mb-3"
                  onClick={() => navigate(`/blog/${item.id}`)}
                >
                  {/* <div className="bg-slate-500 w-full h-[200px]"></div> */}
                  <div className="p-3">
                    <h5 className="text-slate-500 font-semibold">
                      {item.title}
                    </h5>
                    <p className="text-slate-400 text-sm">
                      {item.body.split(" ").splice(0, 20).join(" ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden col-span-0 md:block md:col-span-4"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
