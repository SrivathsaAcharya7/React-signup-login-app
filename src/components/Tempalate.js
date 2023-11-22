import React from "react";
import frameimage from "../assets/frameimage.jpg";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import '../index.css'; 

function Tempalate({ title, desc1, desc2, setIsLoggedin, image, formType }) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 h-screen overflow-auto no-scrollbar">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-stone-100 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125 rem] leading[1.625rem] mt-4">
          <span className="text-stone-100">{desc1}</span>
          <br />
          <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {formType === "Signup" ? (
          <SignupForm setIsLoggedin={setIsLoggedin} />
        ) : (
          <LoginForm setIsLoggedin={setIsLoggedin} />
        )}
        <div className="flex w-full items-centermy-4 gap-x-2">
          <div className=" w-full h-[1px] bg-stone-700"></div>
          <p className="text-stone-700 font-medium leading[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-stone-700"></div>
        </div>
        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-stone-100 border border-stone-700 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign in with google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameimage}
          alt="frame"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          className="absolute -top-4 right-4"
          src={image}
          alt="std"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Tempalate;
