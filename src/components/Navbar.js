import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {toast} from 'react-hot-toast'

function Navbar({ setIsLoggedin, isLoggedin }) {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        {" "}
        <img
          src={logo}
          alt="logo"
          width={160}
          height={32}
          loading="lazy"
        />{" "}
      </Link>

      <nav>
        <ul className=" text-stone-100 flex gap-x-6">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">Contact</Link>{" "}
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        {!isLoggedin && (
          <Link to="/login">
            {" "}
            <button className="bg-stone-800 text-stone-100  py-[8px] px-[12px] rounded-[8px] border border-stone-700">Login</button>{" "}
          </Link>
        )}
        {!isLoggedin && (
          <Link to="/signup">
            {" "}
            <button className="bg-stone-800 text-stone-100  py-[8px] px-[12px] rounded-[8px] border border-stone-700">Signup</button>{" "}
          </Link>
        )}
        {isLoggedin && (
          <Link to="/">
            {" "}
            <button className="bg-stone-800 text-stone-100  py-[8px] px-[12px] rounded-[8px] border border-stone-700" onClick={()=>{
                setIsLoggedin(false);
                toast.success("Logged out")
            }}>Logout</button>{" "}
          </Link>
        )}
        {isLoggedin && (
          <Link to="/dashboard">
            {" "}
            <button className="bg-stone-800 text-stone-100  py-[8px] px-[12px] rounded-[8px] border border-stone-700">Dashboard</button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
