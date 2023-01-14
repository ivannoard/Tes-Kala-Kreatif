import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/template";

const Login = () => {
  const [fields, setFields] = useState();
  const navigate = useNavigate();
  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }
  function handleLogin(e) {
    e.preventDefault();
  }
  return (
    <>
      <AuthLayout>
        <div className="auth-card bg-white rounded-[10px] shadow-md w-full md:w-3/4 px-3 py-5">
          <h1 className="font-semibold text-secondary">Selamat Datang!</h1>
          <form className="mt-3" onSubmit={handleLogin}>
            <div className="form-group mt-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-500"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="block border w-full rounded-[10px] px-3 py-1 mt-1"
                placeholder="Masukkan email anda"
              />
            </div>
            <div className="form-group mt-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-slate-500"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="block border w-full rounded-[10px] px-3 py-1 mt-1"
                placeholder="* * * * *"
              />
            </div>
            <button
              type="submit"
              className="bg-secondary text-white font-semibold rounded-[10px] py-2 px-5 w-full mt-4 text-sm"
            >
              Masuk
            </button>
            <p className="text-sm text-slate-500 text-center mt-3">
              Belum punya akun?{" "}
              <span
                onClick={() => navigate("/auth/register")}
                className="text-secondary font-semibold cursor-pointer"
              >
                Daftar sekarang
              </span>
            </p>
          </form>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
