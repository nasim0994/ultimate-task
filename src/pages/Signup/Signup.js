import React, { useState } from "react";
import logo from "../../Images/logo.png";
import banner from "../../Images/banner.png";
import { Link, useNavigate } from "react-router-dom";
import Password from "./Password";
import PersonalInfo from "./PersonalInfo";
import SignupInfo from "./SignupInfo";
import { HiArrowRight } from "react-icons/hi";

const Signup = () => {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_Name: "",
    numberCode: "+880",
    phone_number: "",
    email: "",
    password: "",
  });

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo setFormData={setFormData} formData={formData} />;
    }
    if (page === 1) {
      return <SignupInfo setFormData={setFormData} formData={formData} />;
    } else {
      return <Password setFormData={setFormData} formData={formData} />;
    }
  };

  const handelSignupForm = () => {
    if (formData.password.length < 8) {
      return alert("password must be 8 character");
    }

    const newUser = {
      first_name: formData.first_name,
      last_Name: formData.last_Name,
      phone: formData.numberCode + formData.phone_number,
      email: formData.email,
      password: formData.password,
    };

    fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
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
          <div className="py-[109px]">
            <h2 className="text-center font-semibold text-xl pb-24">
              SignUp Form
            </h2>

            {/*Form Body */}

            <div>{pageDisplay()}</div>

            {/* Button */}
            <div className="flex items-center pl-5">
              <div
                onClick={() => {
                  setPage((currentPage) => currentPage - 1);
                }}
                className="text-[#767676] font-semibold cursor-pointer"
              >
                {page === 0 ? "" : "Back"}
              </div>
              <button
                onClick={() => {
                  if (page === 2) {
                    onclick = handelSignupForm;
                  } else {
                    setPage((currentPage) => currentPage + 1);
                  }
                }}
                type="submit"
                className="flex items-center gap-2 px-5 h-[49px] text-base bg-[#1678CB] text-white font-medium rounded-2xl shadow-md shadow-[#7E7E7E] hover:bg-transparent hover:border hover:border-[#1678CB] hover:text-[#1678CB] ml-16"
              >
                {page === 2 ? "Sign Up" : `Next Step `}
                {page < 2 && <HiArrowRight className="text-xl" />}
              </button>
            </div>
          </div>

          {page === 0 && (
            <div className="flex gap-3 pb-14 justify-end">
              <p className="text-xs tetx-[#7E7E7E]">
                Already have an account?{" "}
              </p>
              <Link
                to="/login"
                className="text-sm text-[#1678CB] font-semibold underline"
              >
                LOGIN HERE!
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
