
import React from 'react'
import { Link } from 'react-router-dom';
import './CreateNew.css';
import emailIcon from "../Assets/email.png";
import personIcon from "../Assets/person.png";


const CreateNew = () => {
  return (
    <div className="container">
        
        <div className="header">
            <div className="text">Create a New Account</div>
            <p>It's quick and easy.</p>
        </div>
        <div className="inputs">
            <div className="input">
            <img src={personIcon} alt="" />
            <input type="text" placeholder="First Name" />
            </div>
            <div className="input">
            <input type="text" placeholder="Last Name" />
            </div>
            <div className="input email-field">
            <img src={emailIcon} alt="" />
            <input type="text" placeholder="Email Address or Phone number" />
            </div>
            {/* <div className="createNew">
            <Link to="/createNew">Sign Up for Facebook</Link>
            <button>Create Account</button>
            </div> */}
        </div>
        
    </div>
  )
}

export default CreateNew
