import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Footer,
  Jumbotron,
  Posts,
  ProductPost,
  Products,
} from "../../components/molecules/Home";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts() {
    await axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
      setIsLoading(false);
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  const uniqueDataProducts = [
    ...new Map(data?.map((item) => [item.title, item])).values(),
  ];
  console.log(uniqueDataProducts);
  return (
    <main>
      <div className="containers">
        <Jumbotron />
        <ProductPost />
        <Products
          isLoading={isLoading}
          data={uniqueDataProducts?.splice(0, 8)}
        />
        <Posts />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
