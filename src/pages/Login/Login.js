import React from "react";
import logo from "../../Images/logo.png";
import banner from "../../Images/banner.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handelLoginForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 8) {
      return alert("password must be 8 character");
    }
    const user = { email, password };

    fetch("https://test.nexisltd.com/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/attendance");
      });
  };
  return (
    <div className="lg:flex py-4 px-4">
      {/* Left Content */}
      <div className="lg:w-[60%]">
        <div className="pt-[62px] pl-[56px]">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img src={banner} alt="" />
        </div>
      </div>

      {/* Login Form */}
      <div
        className="lg:w-[40%] h-[630px]"
        style={{
          boxShadow:
            "1px -10px 25px rgba(201, 201, 201, 0.25), -1px 10px 25px rgba(147, 147, 147, 0.25)",
        }}
      >
        <div className=" bg-white px-[74px] ">
          <form onSubmit={handelLoginForm} className="py-[109px]">
            <h2 className="text-center font-semibold text-xl pb-24">
              Log in Form
            </h2>

            <div className="pb-16">
              <input
                type="email"
                name="email"
                placeholder="Write Email Address"
                className="border-b w-full border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
                required
              />
            </div>

            <div className="pb-16">
              <input
                type="password"
                name="password"
                placeholder="Write Password"
                className="border-b w-full border-[#A4A4A4] px-2 outline-none placeholder-[#B4B4B4] placeholder:text-base"
                required
              />
              <p className="text-xs text-[#7E7E7E] px-2">
                Your password must be 8 character
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[104px] h-[49px] text-base bg-[#1678CB] text-white font-medium rounded-2xl shadow-md shadow-[#7E7E7E] hover:bg-transparent hover:border hover:border-[#1678CB] hover:text-[#1678CB]"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="flex gap-3 pb-14 justify-end">
            <p className="text-xs tetx-[#7E7E7E]">Don’t have an account?</p>
            <Link
              to="/signup"
              className="text-sm text-[#1678CB] font-semibold underline"
            >
              SIGNUP HERE!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
