import React from 'react'
import Tempalate from '../components/Tempalate'

import loginimg from "../assets/loginimg.jpg"

function Login({setIsLoggedin}) {
  return (
    <Tempalate 
    title="Welcome Back"
    desc1="Build skills for today, tommorow and beyond."
    desc2="Education to future-proof your career."
    image={loginimg}
    formType="login"
    setIsLoggedin={setIsLoggedin} 
     
     
     
     
     
     
     />
  )
}

export default Login