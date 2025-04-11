
// import React from 'react'
// import { Link } from 'react-router-dom';
// import './CreateNew.css';
// import emailIcon from "../Assets/email.png";
// import personIcon from "../Assets/person.png";
// import { useState } from 'react';



// const CreateNew = () => {

//   const[value, setValue] = useState("0");
  
//   const[Year, setYear] = useState("0");

//   const year = (Number1) => {
//     if(Number1 < 1998){
//       setYear(1998)
//     }
//     else if(Number1 > 2026){
//       setYear(2025)
//     }
//     else{
//       setYear(Number1)
//     }
      
//   }

// const date = (number) => {

//   if(value < 1){
//     setValue(1)
//   }
//   else if(value > 31){
//     setValue(31)
//   }
//   else{
//     setValue(number)
//   }
    
// }

//   return (
//     <div className="container">
        
//         <div className="header">
//             <div className="text">Create a New Account</div>
//             <p>It's quick and easy.</p>
//         </div>
//           <div className="inputs">

//             <div className="input-firstname">
//               <img src={personIcon} alt="" />
//                <input type="text" placeholder="First Name" />
//             </div>
//             <div className="input-lastname">
//             <img src={personIcon} alt="" />
//                 <input type="text" placeholder="Last Name" />
//             </div>
            
//             <div className="birth">
//               <p>Date of birth</p>
//               <input type="number"
//                className='number' 
//                placeholder='date'
//                 value={value}
//               onChange={(e) => date(Number(e.target.value))}
              
//               />
//               <input type="text" className='text'placeholder='Month' />
//               <input type="number" 
//               className='number'
//               placeholder='year' 
//               value={Year}
//               onChange={(e)=>year(Number(e.target.value))}
              
//               />
//             </div>

//             <div className="input-email-field">
//                 <img src={emailIcon} alt="" />
//                 <input type="text" placeholder="Email Address or Phone number" />
//               </div>

//               <div className="password">
//                 <input type="password" placeholder='NewPassword'/>
//               </div>
//         </div>
        


//         <button>Sign Up</button>
//         <div className="already-have-account">
//             <Link to="/"> Already have an account</Link>
//             </div>
//     </div>
//   )
// }

// export default CreateNew


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateNew.css';
import emailIcon from "../Assets/email.png";
import personIcon from "../Assets/person.png";

// Import MUI Date Pickers
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const CreateNew = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="container">
      <div className="header">
        <div className="text">Create a New Account</div>
        <p>It's quick and easy.</p>
      </div>

      <div className="inputs">
        <div className="input-firstname">
          <img src={personIcon} alt="" />
          <input type="text" placeholder="First Name" />
        </div>
        <div className="input-lastname">
          <img src={personIcon} alt="" />
          <input type="text" placeholder="Last Name" />
        </div>
        
        <div className="birth">
          <p>Date of Birth</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar 
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
            />
          </LocalizationProvider>
        </div>

        <div className="input-email-field">
          <img src={emailIcon} alt="" />
          <input type="text" placeholder="Email Address or Phone number" />
        </div>

        <div className="password">
          <input type="password" placeholder='New Password'/>
        </div>
      </div>

      <button>Sign Up</button>
      <div className="already-have-account">
        <Link to="/">Already have an account</Link>
      </div>
    </div>
  );
};

export default CreateNew;
