import React from 'react'
import './LoginSignup.css';
import emailIcon from "../Assets/email.png";
import passwordIcon from "../Assets/password.png";
import personIcon from "../Assets/person.png";
import { Link } from 'react-router-dom';


const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Log in to Facebook</div>
           
        </div>
        <div className="inputs">
            {/* <div className="input">
                <img src={personIcon} alt="" />
                <input type="text" placeholder='Person' />
            </div> */}
            <div className="input">
                <img src={emailIcon} alt="" />
                <input type="text" placeholder='Email Address or Phone number' />
            </div>
            <div className="input">
                <img src={passwordIcon} alt="" />
                <input type="text" placeholder='Password' />
            </div>
            <button>Log in</button>

            <div className="forgot-password">
                <Link to="/forgotpassword">Forgotten password?</Link>
                <span> . </span>
                <Link to="/createnew">Sign Up for Facebook</Link>
            </div>

        </div>

    </div>
  )
}

export default LoginSignup