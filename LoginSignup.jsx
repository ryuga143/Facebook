// import React from 'react'
// import './LoginSignup.css';
// import emailIcon from "../Assets/email.png";
// import passwordIcon from "../Assets/password.png";
// import personIcon from "../Assets/person.png";
// import { Link } from 'react-router-dom';



// const LoginSignup = () => {
//   return (
//     <div className='container'>
//         <div className="header">
//             <div className="text">Log in to Facebook</div>
           
//         </div>
//         <div className="inputs">
//             {/* <div className="input">
//                 <img src={personIcon} alt="" />
//                 <input type="text" placeholder='Person' />
//             </div> */}
//             <div className="input">
//                 <img src={emailIcon} alt="" />
//                 <input type="text" placeholder='Email Address or Phone number' />
//             </div>
//             <div className="input">
//                 <img src={passwordIcon} alt="" />
//                 <input type="password" placeholder='Password' />
//             </div>
//             <button>Log in</button>

//             <div className="forgotpassword">
//                 <Link to="/forgotpassword">Forgotten password?</Link>
//                 <span> . </span>
//                 <Link to="/CreateNew">Sign Up for Facebook</Link>
//             </div>

//         </div>

//     </div>
//   )
// }

// export default LoginSignup



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';
import emailIcon from "../Assets/email.png";
import passwordIcon from "../Assets/password.png";

const LoginSignup = () => {
  // State management for email and password fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();    
    console.log("Email:", email, "Password:", password);
    // Here, you can add authentication logic (like sending data to an API)
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Log in to Facebook</div>
      </div>

      <form onSubmit={handleSubmit} className="inputs">
        <div className="input">
          <img src={emailIcon} alt="Email Icon" />
          <input 
            type="text" 
            placeholder="Email Address or Phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={passwordIcon} alt="Password Icon" />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Log in</button>

        <div className="forgotpassword">
          <Link to="/forgotpassword">Forgotten password?</Link>
          <span> . </span>
          <Link to="/CreateNew">Sign Up for Facebook</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
