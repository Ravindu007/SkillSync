import React, { useState } from 'react'
import {motion} from 'framer-motion'
import UserSignup from '../components/SignupPage-compoenets/UserSignup';
import CompanySignup from '../components/SignupPage-compoenets/CompanySignup';

const Signup = () => {

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

  const [showComanySignup, setShowCompanySignup] = useState(false);

  const toggleComponent = () => {
    setShowCompanySignup(!showComanySignup);
  };

  return (
    <div className='login-container flex flex-col w-full h-[80vh]'>

      <div className="upper w-full h-[20%] flex justify-center">
          <div className="button-div flex items-center">
            <motion.button onClick={toggleComponent} className='button' variants={buttonVariants} initial='initial' whileInView='animate'>
              {!showComanySignup ? <p>Are you a company ?</p> : <p>Are you a user ?</p>}
            </motion.button>
          </div>
      </div>

      <div className="bottom w-full h-[80%]">
        {!showComanySignup ? (
          <UserSignup></UserSignup>
        ) : 
          <CompanySignup></CompanySignup>
        }
      </div>
    </div>
  )
}

export default Signup