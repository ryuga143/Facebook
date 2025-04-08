import React from 'react'
import './ForgotPassword.css';


const ForgotPassword = () => {
  return (
    <div>
        <div className="container">
            <div className="header">
                <div className="text">Find Your Account</div>
                
            </div>
            <p className="info-text">Please enter your email address or mobile number to search for your account.</p>
            <div className="input">
                <input type="text" placeholder='Email Address or Phone number' />
            </div>
            <div className="bttton-continer">
            <button className="cancel">cancel</button>
            <button className="search">Search</button>
            </div>
             
            
        </div>
    </div>
  )
}

export default ForgotPassword