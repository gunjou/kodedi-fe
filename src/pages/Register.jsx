import axios from "axios";
import React, { useState } from "react";
import { MdOutlineAccountCircle, MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsPersonVcard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://192.168.0.109:5000/auth/register",
      data: {
        username: username,
        fullname: fullname,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };
          
  return (
    <div className="Register flex m-10 mt-36 grid-col-3 gap-4 bg-white">
      <div className="form m-auto ml-56">
        <div className="w-80 mb-12 h-[28rem] pl-5 pr-5 justify-center border border-white bg-gray-50 rounded drop-shadow-2xl">
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
                placeholder="username / phone"
                value={username}
              />
            </label>
          </div>
          <div className="fullname mb-4">
            <label className="relative block">
              <span className="sr-only">Username</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <BsPersonVcard className="h-5 w-5 text-gray-700" />
              </span>
              <input
                onChange={(e) => setFullname(e.target.value)}
                className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-800 focus:ring-purple-800 focus:ring-1 sm:text-sm"
                type="text"
                text={fullname}
                name="username"
                placeholder="fullname"
                value={fullname}
              />
            </label>
          </div>
          <div className="email mb-4">
            <label class="relative block">
              <span class="sr-only">Email</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <MdOutlineEmail className="h-5 w-5 text-gray-700" />
              </span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-800 focus:ring-purple-800 focus:ring-1 sm:text-sm"
                placeholder="email"
                type="email"
                text={email}
                name="email"
                value={email}
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
            <div className="submit h-8 mb-3 rounded w-full pt-1 text-white bg-purple-800 hover:bg-purple-600 text-md">
              <input type="submit" value="Register" onClick={handleRegister} />
            </div>
            <div className="text-xs">
            <span>
              Sudah punya akun?{" "}
              <a href="/login" className="text-blue-700">
                Login Disini
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
  )
}

export default Register