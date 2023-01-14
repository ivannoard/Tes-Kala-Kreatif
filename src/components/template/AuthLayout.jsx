import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="w-screen h-screen grid grid-cols-12">
        <div className="col-span-0 md:col-span-8 bg-slate-100 hidden md:flex md:items-center">
          <div className="auth-jumbotron ml-10">
            <h2 className="text-3xl text-primary">Kala</h2>
            <h1 className="text-6xl font-semibold text-secondary">Kreatif.</h1>
            <p className="text-slate-500">
              Belanja mudah hanya di Kala Kreatif.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 px-5 md:px-0 bg-white flex justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
