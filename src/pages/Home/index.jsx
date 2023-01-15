import React from "react";
import {
  Footer,
  Jumbotron,
  Posts,
  ProductPost,
  Products,
} from "../../components/molecules/Home";

const Home = () => {
  return (
    <main>
      <div className="containers">
        <Jumbotron />
        <ProductPost />
        <Products />
        <Posts />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
