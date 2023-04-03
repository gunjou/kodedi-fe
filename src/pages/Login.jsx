import axios from "axios";
import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import UseToken from "../UseToken";


const Login = () => {
  const navigate = useNavigate();
  const {setToken} = UseToken();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "https://kodedi.id/api/auth/login",
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("username", response.data.current_user.username);
        localStorage.setItem("email", response.data.current_user.email);
        localStorage.setItem("fullname", response.data.current_user.fullname);
        localStorage.setItem("patient", null);
        setToken(response.data.access_token);
        navigate("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  return (
    <div className="Login flex m-10 mt-36 grid-col-3 gap-4 bg-white">
      <div className="form m-auto ml-56">
        <div className="w-80 mb-12 h-[24rem] pl-5 pr-5 justify-center border border-white bg-gray-50 rounded drop-shadow-2xl">
          <div className="logo pb-7 pt-5 text-xl">
            <p className="text-5xl font-extrabold text-purple-800 pb-5">KODEDI</p>
            <h5 className="text-gray-700">Log in</h5>
          </div>
          <div className="username mb-4">
            <label className="relative block">
              <span className="sr-only">Username</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MdOutlineAccountCircle className="h-5 w-5 text-gray-700" />
              </span>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-800 focus:ring-purple-800 focus:ring-1 sm:text-sm"
                type="text"
                text={username}
                name="username"
                placeholder="username"
                value={username}
              />
            </label>
          </div>
          <div className="password mb-4">
            <label className="relative block">
              <span className="sr-only">Password</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <RiLockPasswordLine className="h-5 w-5 text-gray-700" />
              </span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-800 focus:ring-purple-800 focus:ring-1 sm:text-sm"
                type="password"
                text={password}
                name="password"
                placeholder="password"
                value={password}
              />
            </label>
          </div>
          <div className="flex item-start mb-6 ">
            <div className="flex item-center h5">
              <input
                id="remember"
                type="checkbox"
                className="w-5 h-5 rounded accent-purple-800"
              />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>
            <div className="submit h-8 mb-3 rounded w-full pt-1 text-white bg-purple-800 hover:bg-purple-600 text-md">
              <input type="submit" value="Login" onClick={(e) => handleLogin(e)} onBlur={(e) => handleLogin(e)}/>
            </div>
            <div className="text-xs">
            <span>
              Belum punya akun?{" "}
              <a href="/#/register" className="text-blue-700">
                Daftar Disini
              </a>
            </span>
          </div>
        </div>
        <span className="text-xs">© 2023, KODEDI - Tim Delapan</span>
      </div>
      <div className="picture m-auto mr-56">
        <div className="pic w-[45rem]">
          <img
            src={process.env.PUBLIC_URL + "img/login-register.svg"}
            alt="signin"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
