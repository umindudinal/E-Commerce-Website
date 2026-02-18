import React from 'react'
import Footer from '../Components/Footer/Footer'
import './CSS/LoginSignup.css'

const LogiSignuo = () => {
   return (
      <>
      <div className="loginsignup">
         <div className="loginsignup_container">
            <h1>Sign Up</h1>
            <div className="loginsignup_fields">
               <input type="text" placeholder='Your Name' />
               <input type="email" placeholder='Your Email' />
               <input type="password" placeholder='Your Password' />
            </div>
            <button>Continue</button>
            <p className='loginsignup_login'>Already have an account? <span>Login</span></p>
            <div className="loginsignup_agree">
               <input type="checkbox" />
               <p>I agree to the Terms of Service and Privacy Policy</p>
            </div>
         </div>
      </div>
      <Footer/>
      </>
   )
}

export default LogiSignuo