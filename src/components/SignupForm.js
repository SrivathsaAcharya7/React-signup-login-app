import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

function SignupForm({setIsLoggedin}) {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password:"",
    cpassword:""
  });
  const [pass, setPass] = useState(false);
  const [checkpass,setCheckPass]=useState(false);
  const[acctype,setAccType]=useState("student")
  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function subHandler(event){
    event.preventDefault()
    if(formData.password!==formData.cpassword){
      toast.error("Passwords do not match")
      return ;
    }
    setIsLoggedin(true)
    toast.success("Created New Account")
    navigate("/dashboard")
    const accountData={
      ...formData
    };
    const finalData={
      ...accountData,
      acctype

    }
    console.log(finalData)
}

  return (
    <div>
      <div className="flex bg-stone-500 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button onClick={()=>setAccType("student") } className={`${acctype==="student"? "bg-stone-900 text-stone-100":"bg-transparent text-stone-200"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
        <button onClick={()=>setAccType("instructor")} className={`${acctype==="instructor"? "bg-stone-900 text-stone-100":"bg-transparent text-stone-200"} py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
      </div>
      <form onSubmit={subHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <div className="w-full flex gap-x-4">
          <label className='w-full'>
            <p className='text-[0.875rem] text-stone-100 mb-1 leading-[1.375rem]'>
              First Name<sup className='text-red-600'>*</sup>
            </p>
            <input
            required
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className='bg-stone-800 rounded-[0.5rem] text-stone-100 w-full p-[12px]'
            />
          </label>

          <label className="w-full">
            <p className='text-[0.875rem] text-stone-100 mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-red-600'>*</sup>
            </p>
            <input
            required
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className='bg-stone-800 rounded-[0.5rem] text-stone-100 w-full p-[12px]'
            />
          </label>
        </div>

        <label>
          <p className='text-[0.875rem] text-stone-100 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-red-600'>*</sup>
          </p>
          <input
          required
            type="email"
            placeholder="Enter email address"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            className='bg-stone-800 rounded-[0.5rem] text-stone-100 w-full p-[12px]'
          />
        </label>

        <div className="w-full flex gap-x-4">
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-stone-100 mb-1 leading-[1.375rem]'>
              Create Password<sup className='text-red-600'>*</sup>
            </p>
            <input
            required
              type={pass ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className='bg-stone-800 rounded-[0.5rem] text-stone-100 w-full p-[12px]'
            />
          
          <span className='absolute right-3 top-[45px] cursor-pointer' onClick={() => setPass((prev) => !prev)}>
            {pass ? <AiOutlineEyeInvisible  fontsize={24} fill='#AFB2BF' /> : <AiOutlineEye  fontsize={24} fill='#AFB2BF' />}
          </span>
          </label>

          <label className='w-full relative'> 
            <p className='text-[0.875rem] text-stone-100 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-red-600'>*</sup>
            </p>
            <input
            required
              type={checkpass ? "text" : "password"}
              placeholder="Confirm Password"
              name="cpassword"
              value={formData.cpassword}
              onChange={changeHandler}
              className='bg-stone-800 rounded-[0.5rem] text-stone-100 w-full p-[12px]'
            />
          
          <span className='absolute right-3 top-[45px] cursor-pointer' onClick={() => setCheckPass((prev) => !prev)}>
            {checkpass ? <AiOutlineEyeInvisible  fontsize={24} fill='#AFB2BF' /> : <AiOutlineEye  fontsize={24} fill='#AFB2BF' />}
          </span>
          </label>
        </div>
        <br />

        <button className='bg-yellow-400 rounded-[8px] font-medium text-stone-900 px-[12px] py-[8px] mt-1 w-full'>Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
