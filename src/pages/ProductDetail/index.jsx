import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { productId } = useParams();
  const user = localStorage.getItem("user");
  const userId = user ? JSON.parse(user).id : null;
  const [data, setData] = useState();
  const [dataComments, setDataComments] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isLoadingComments, setIsLoadingComments] = useState(true);
  const [alertSuccess, setAlertSuccess] = useState();
  const [alertSuccessMessage, setAlertSuccessMessage] = useState();
  const [alertFail, setAlertFail] = useState();
  const [alertFailMessage, setAlertFailMessage] = useState();

  async function getProductDetail(id) {
    await axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      // setIsLoading(false);
      setData(response.data);
    });
  }
  async function getProductComments(id) {
    await axios
      .get(`https://dummyjson.com/comments/post/${id}`)
      .then((response) => {
        // setIsLoadingComments(false);
        setDataComments(response.data);
      });
  }
  async function handleCart(e) {
    e.preventDefault();
    if (!user) {
      setAlertFail(true);
      setAlertFailMessage("Ups, sepertinya anda harus login terlebih dahulu");
      return;
    }
    await axios
      .post(
        "https://dummyjson.com/carts/add",
        {
          userId: userId,
          products: [
            {
              id: productId,
              quantity: 1,
            },
          ],
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        const getDataStorage = JSON.parse(localStorage.getItem("cart"));
        const arrCart = [];
        if (getDataStorage) {
          getDataStorage.push(response.data);
          localStorage.removeItem("cart");
          localStorage.setItem("cart", JSON.stringify(getDataStorage));
        } else {
          arrCart.push(response.data);
          localStorage.setItem("cart", JSON.stringify(arrCart));
        }
        setAlertSuccess(true);
        setAlertSuccessMessage("Sukses menambahkan produk ke keranjang");
      });
  }
  function handleBuy(e) {
    e.preventDefault();
    if (!user) {
      setAlertFail(true);
      setAlertFailMessage("Ups, sepertinya anda harus login terlebih dahulu");
      return;
    }
    setTimeout(() => {
      setAlertSuccess(true);
      setAlertSuccessMessage("Terimakasih sudah membeli");
    }, 2000);
  }
  useEffect(() => {
    getProductDetail(productId);
    getProductComments(productId);
  }, [productId]);
  useEffect(() => {
    setTimeout(() => {
      if (alertSuccess || alertFail === true)
        setAlertFail(false) || setAlertSuccess(false);
    }, 2000);
  }, [alertFail, alertSuccess]);
  return (
    <>
      <main>
        {alertSuccess && (
          <div>
            <div className="absolute max-w-2xl top-20 right-0 left-0 mx-auto">
              <div className="bg-green-400 p-3 text-center text-white font-semibold">
                {alertSuccessMessage}
              </div>
            </div>
          </div>
        )}
        {alertFail && (
          <div>
            <div className="absolute max-w-2xl top-20 right-0 left-0 mx-auto">
              <div className="bg-red-400 p-3 text-center text-white font-semibold">
                {alertFailMessage}
              </div>
            </div>
          </div>
        )}
        <div className="containers py-3 px-3 md:px-10">
          <div className="grid grid-cols-12 border">
            <div className="col-span-12 md:col-span-4">
              <img src={data?.thumbnail} alt="" />
            </div>
            <div className="col-span-12 md:col-span-8 px-3 md:px-10 py-3 flex flex-col justify-between">
              <div className="product">
                <div className="title pb-2 border-b border-slate-500">
                  <h5 className="text-slate-500 font-semibold text-2xl">
                    {data?.title}
                  </h5>
                  <h3 className="text-slate font-semibold text-xl mt-2">
                    {data?.price} USD
                  </h3>
                </div>
                <p className="mt-2 text-slate-500 font-semibold">Deskripsi</p>
                <p className="mt-1">{data?.description}</p>
              </div>
              <div className="buttons mt-4 md:mt-0 md:ml-auto flex gap-2">
                <button
                  onClick={(e) => handleCart(e)}
                  className="bg-white text-slate-400 font-semibold py-2 px-5 border-2 border-sky-200"
                >
                  Keranjang
                </button>
                <button
                  onClick={(e) => handleBuy(e)}
                  className="bg-secondary text-white font-semibold py-2 px-5"
                >
                  Beli Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white mt-3 p-3 border">
            <h4 className="text-slate-500 font-semibold  text-lg mb-2">
              Komentar
            </h4>
            <div className="flex flex-col gap-3">
              {dataComments?.comments.map((item) => (
                <div className="card bg-white border p-3">
                  <h4 className="font-semibold text-lg text-slate-500">
                    {item.user.username}
                  </h4>
                  <p className="text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
