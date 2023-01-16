import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/template";

const Login = () => {
  const [fields, setFields] = useState();
  const navigate = useNavigate();
  const [alertFail, setAlertFail] = useState(false);
  const [alertFailMessage, setAlertFailMessage] = useState();
  function handleChange(e) {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }
  async function handleLogin(e) {
    e.preventDefault();
    await axios
      .post("https://dummyjson.com/auth/login", fields, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      })
      .catch((e) => {
        setAlertFail(true);
        setAlertFailMessage(
          "Ups, user tidak terdaftar! Gunakan username & password yang tertera pada repository"
        );
      });
  }
  useEffect(() => {
    setTimeout(() => {
      if (alertFail === true) setAlertFail(false);
    }, 2000);
  }, [alertFail]);
  return (
    <>
      <AuthLayout>
        {alertFail && (
          <div>
            <div className="absolute max-w-2xl top-20 right-0 left-0 mx-auto">
              <div className="bg-red-400 p-3 text-center text-white font-semibold">
                {alertFailMessage}
              </div>
            </div>
          </div>
        )}
        <div className="auth-card bg-white rounded-[10px] shadow-md w-full md:w-3/4 px-3 py-5">
          <h1 className="font-semibold text-secondary">Selamat Datang!</h1>
          <form className="mt-3" onSubmit={handleLogin}>
            <div className="form-group mt-2">
              <label
                htmlFor="username"
                className="text-sm font-semibold text-slate-500"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                className="block border w-full rounded-[10px] px-3 py-1 mt-1"
                placeholder="Masukkan username anda"
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
              className="bg-secondary text-white font-semibold py-2 px-5 w-full mt-4 text-sm"
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
