import React from 'react'
import {motion} from 'framer-motion'

const UserLogin = () => {

  const variants = { 
    initial: {
      x:800,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        type:'spring',
        stiffness:700,
        damping:100
      }
    }
  }
  return (
    <div className='flex w-full h-full'>

      <motion.div 
      className="left hidden md:flex justify-center w-[50%]  h-full"
      variants={variants}
      initial='initial'
      whileInView='animate'
      >
        <img src="login\user.jpg" alt="" />
      </motion.div>


      <div className="right w-[100%] md:w-[50%]  h-[60%] md:h-full shadow-md shadow-primary mx-5 rounded-md">

        <div className="form-container h-full flex  justify-center items-center">
          <form action="" className='w-full h-full flex flex-col items-center justify-center gap-8'>
            <div className="w-full flex justify-center form-group px-1 md:px-5">
                <p className='text-2xl font-semibold'>Welcome back</p>
            </div>
            <div className="w-full form-group px-1 md:px-5">
              <input type="text" className='input-item' placeholder='Enter your email'/>
            </div>
            <div className="w-full form-group px-1 md:px-5">
              <input type="text" className='input-item' placeholder='Enter password'/>
            </div>
            <div className="w-[50%] flex flex-col gap-2 form-group px-1 md:px-5">
              <button className='bg-green-300  rounded-xl'>Login</button>
              <div className="sign-up flex flex-row justify-center">
                <a className='hover:underline hover:underline-offset-4 text-[10px]' href="">Still havent registered click here?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserLogin