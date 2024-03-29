import React, { useState } from 'react'
import {motion} from 'framer-motion'
import UserLogin from '../components/LoginPageComponents/UserLogin';
import CompanyLogin from '../components/LoginPageComponents/CompanyLogin';

const Login = () => {

  const buttonVariants = {
    initial:{
      scale:0.98
    },
    animate:{
      scale:1,
      transition:{
        duration:0.4,
        repeat:Infinity
      }
    }
  }

  const [showComanyLogin, setShowCompanyLogin] = useState(false);

  const toggleComponent = () => {
    setShowCompanyLogin(!showComanyLogin);
  };

  return (
    <div className='login-container flex flex-col w-full h-[80vh]'>

      <div className="upper w-full h-[20%] flex justify-center">
          <div className="button-div flex items-center">
            <motion.button onClick={toggleComponent} className='button' variants={buttonVariants} initial='initial' whileInView='animate'>
              {!showComanyLogin ? <p>Are you a company ?</p> : <p>Are you a user ?</p>}
            </motion.button>
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