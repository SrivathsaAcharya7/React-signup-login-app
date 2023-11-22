import React from 'react'
import signupimg from "../assets/signupimg.jpg"
import Tempalate from '../components/Tempalate'

function Signup({setIsLoggedin}) {
  return (
    <Tempalate 
    title="Join the millions learniing to code with StudyNotion for free"
    desc1="Build skills for today, tommorow and beyond."
    desc2="Education to future-proof your career."
    image={signupimg}
    formType="Signup"
    setIsLoggedin={setIsLoggedin} 
     
     
     
     
     
     
     />
  )
}

export default Signup