import React, { useState } from 'react'
import UserLogin from '../components/LoginPageComponents/UserLogin';
import CompanyLogin from '../components/LoginPageComponents/CompanyLogin';

const Login = () => {

  const [showComanyLogin, setShowCompanyLogin] = useState(false);

  const toggleComponent = () => {
    setShowCompanyLogin(!showComanyLogin);
  };

  return (
    <div className='login-container flex flex-col w-full h-[80vh]'>

      <div className="upper w-full h-[20%] flex justify-center border-2 border-red-500">
          <div className="button-div flex items-center">
            <button onClick={toggleComponent} className='button'>
              {!showComanyLogin ? <p>Are you a company ?</p> : <p>Are you a user ?</p>}
            </button>
          </div>
      </div>

      <div className="bottom w-full h-[80%]">
        {!showComanyLogin ? (
          <UserLogin></UserLogin>
        ) : 
          <CompanyLogin></CompanyLogin>
        }
      </div>
    </div>
  )
}

export default Login