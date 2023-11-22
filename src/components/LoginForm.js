import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

function LoginForm({setIsLoggedin}) {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""})
    const[pass,setPass]=useState(false)
    function changeHandler(event){
        setFormData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))

    }
    function subHandler(event){
        event.preventDefault()
        setIsLoggedin(true)
        toast.success("Logged in")
        navigate("/dashboard")
    }
  return (
    <form onSubmit={subHandler} className='flex flex-col w-full gap-y-4 mt-6'>

        <label className='w-full'>
            <p className='text-[0.875rem] text-stone-100 mb-1 leading-[1.375rem]'>Email Address<sup className='text-red-600'>*</sup> </p>
            <input className='bg-stone-800 rounded-[0.5rem] text-stone-100 w-full p-[12px]' type="email" name="email" value={formData.email} placeholder='Enter email address' onChange={changeHandler} />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-stone-100 mb-1 leading-[1.375rem]'>Password<sup className='text-red-600'>*</sup> </p>
            <input className='bg-stone-800 rounded-[0.5rem] text-stone-100 w-full p-[12px]' type={pass?("text"):("password")} name="password" value={formData.password} placeholder='Enter password' onChange={changeHandler} />
        
        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setPass((prev)=>!prev)}>
            {pass?(<AiOutlineEyeInvisible fontsize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontsize={24} fill='#AFB2BF'/>)}
        </span>
        <Link to="#"><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p></Link>
        </label>
        <br />
        <button className='bg-yellow-400 rounded-[8px] font-medium text-stone-900 px-[12px] py-[8px] mt-1'>Sign In</button>

    </form>
  )
}

export default LoginForm