import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [data, setData] = useState();
  async function getDetailPost(id) {
    await axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((response) => setData(response.data));
  }
  useEffect(() => {
    getDetailPost(blogId);
  }, [blogId]);
  return (
    <>
      <main className="pt-3">
        <div className="containers !max-w-5xl border">
          <div className="blog-content px-3 mt-3">
            <h1 className="font-semibold text-lg md:text-3xl">{data?.title}</h1>
            <div className="flex gap-3">
              {data?.tags.map((item) => (
                <p className="text-sm text-slate-500">{item}</p>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-2">{data?.body}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail;
