import LoginSignup from './Components/LoginSignup';
import ForgotPassword from './Components/ForgotPassword';
import { Routes,Route } from 'react-router-dom';
import React from 'react';
import CreateNew from './Components/CreateNew';



const App=()=> {


  return (
    
      <Routes>
        <Route path='/' element={<LoginSignup/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/createnew' element={<CreateNew/>}/>
      </Routes>
    
  );
}

export default App;
