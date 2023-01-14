import React from "react";
import Slider from "react-slick";
import {
  Footer,
  Jumbotron,
  Products,
  ProductPost,
  Posts,
} from "../../components/molecules/Home";

const Home = () => {
  return (
    <div className="App">
      <div className="containers">
        <Jumbotron />
        <ProductPost />
        <Products />
        <Posts />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
